<template>
  <div>
    <!-- Улучшенный селектор сортировки -->
    <label for="sort" class="block text-gray-700 font-medium mb-2"
      >Сортировать:</label
    >
    <select
      v-model="sortOrder"
      id="sort"
      class="border rounded-md cursor-pointer px-4 py-2 text-gray-700 shadow-sm focus:ring focus:ring-red-300 transition"
    >
      <option value="CHEAPEST_FIRST">Сначала дешевые</option>
      <option value="EXPENSIVE_FIRST">Сначала дорогие</option>
      <option value="ALPHABETICALLY">По алфавиту</option>
      <option value="NEWEST_FIRST">Новые сначала</option>
    </select>

    <!-- Загрузка товаров -->
    <div
      v-if="$apollo.queries.products.loading"
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <div
        v-for="item in 9"
        :key="item"
        class="bg-gray-200 animate-pulse rounded-lg h-96"
      ></div>
    </div>

    <!-- Список товаров -->
    <div v-else class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <p
        v-if="products.edges.length === 0"
        class="col-span-full text-center text-gray-500"
      >
        Товары не найдены
      </p>

      <ProductCard
        v-for="product in products.edges"
        :key="product.node.id"
        :productData="product"
        :categorySlug="categorySlug"
      />

      <ProductCard
        v-for="product in productsMore"
        :key="product.node.id"
        :productData="product"
        :categorySlug="categorySlug"
      />

      <!-- Кнопка подгрузки -->
      <button
        v-if="hasNext"
        @click="showMore"
        class="col-span-full bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition"
        :disabled="loadingMore"
      >
        {{ loadingMore ? "Загрузка..." : "Показать еще" }}
      </button>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import ProductCard from "@/components/category/ProductCard.vue";
import { debounce } from "lodash";

export default {
  components: {
    ProductCard,
  },
  props: {
    categoryId: {
      type: String,
      required: true,
      default: "",
    },
    categorySlug: {
      type: String,
      required: true,
      default: "",
    },
  },
  data() {
    return {
      sortOrder: "CHEAPEST_FIRST",
      productsMore: [],
      cursor: "",
      hasNext: false,
      loadingMore: false,
    };
  },
  apollo: {
    products: {
      query: gql`
        query products($categoryId: ID!, $sortOrder: ProductSortOrder!) {
          products(sortOrder: $sortOrder, first: 21, categoryId: $categoryId) {
            edges {
              node {
                id
                name
                slug
                price
                stockAvailabilityStatus
                quantityMultiplicity
                mainImage {
                  url
                }
              }
            }
            pageInfo {
              endCursor
              hasNextPage
            }
          }
        }
      `,
      variables() {
        return {
          categoryId: this.categoryId,
          sortOrder: this.sortOrder || "CHEAPEST_FIRST",
        };
      },
      skip() {
        return !this.categoryId || !this.sortOrder;
      },
    },
  },
  watch: {
    sortOrder(newVal) {
      console.log("📢 Новый порядок сортировки:", newVal);
      if (newVal) {
        this.productsMore = [];
        this.cursor = "";
        this.hasNext = true;
        this.$apollo.queries.products.refetch();
      }
    },
    $route() {
      this.sortOrder = "CHEAPEST_FIRST";
    },
  },
  methods: {
    async showMore() {
      if (!this.hasNext) return;
      this.loadingMore = true;

      try {
        const { data } = await this.$apollo.query({
          query: gql`
            query productsMore(
              $categoryId: ID!
              $sortOrder: ProductSortOrder!
              $after: String!
            ) {
              products(
                sortOrder: $sortOrder
                first: 12
                categoryId: $categoryId
                after: $after
              ) {
                edges {
                  node {
                    id
                    name
                    slug
                    price
                    stockAvailabilityStatus
                    quantityMultiplicity
                    mainImage {
                      url
                    }
                  }
                }
                pageInfo {
                  endCursor
                  hasNextPage
                }
              }
            }
          `,
          variables: {
            categoryId: this.categoryId,
            sortOrder: this.sortOrder,
            after: this.cursor || "",
          },
        });

        console.log("🔹 Запрос выполнен:", data);
        this.productsMore = [...this.productsMore, ...data.products.edges];
        this.cursor = data.products.pageInfo.endCursor;
        this.hasNext = data.products.pageInfo.hasNextPage;
      } catch (error) {
        console.error("❌ Ошибка запроса:", error);
      }

      this.loadingMore = false;
    },
    handleScroll() {
      if (
        window.scrollY >=
        document.documentElement.scrollHeight -
          document.documentElement.clientHeight -
          400
      ) {
        this.showMore();
      }
    },
  },
  created() {
    this.debouncedScroll = debounce(this.handleScroll, 300);
    window.addEventListener("scroll", this.debouncedScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.debouncedScroll);
  },
};
</script>
