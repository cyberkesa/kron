<template>
    <select v-model="sortOrder" class="border-0 focused:border-0 active:border-0 cursor-pointer p-0 pr-8 mb-4 lg:ml-0 sm:ml-auto block">
        <option value="CHEAPEST_FIRST">Сначала дешевые</option>
        <option value="EXPENSIVE_FIRST">Сначала дорогие</option>
        <option value="ALPHABETICALLY">По алфавиту</option>
        <option value="NEWEST_FIRST">Новые сначала</option>
    </select>
    <div v-if="this.$apollo.queries.products.loading" class="products flex flex-row flex-wrap justify-between">
        <div class="product-card bg-slate-50 animate-pulse rounded-xl w-64 h-96 box-border p-8 mb-5 flex flex-col border border-gray-200" v-for="item in 9" :key="item"></div>
    </div>
    <div v-else class="products flex flex-row flex-wrap justify-between" @scroll="onScroll">
        <p v-if="products.edges.length == 0 ">Товары не найдены</p>
        <ProductCard v-for="product in products.edges" :key="product.node.id" :productData="product" :categorySlug="categorySlug"></ProductCard>
             
        <template v-if="productsMore" >
            <ProductCard v-for="product in productsMore" :key="product.node.id" :productData="product" :categorySlug="categorySlug"></ProductCard>
        </template>

        <div class="w-64"></div>

    
      
    </div>
</template>

<script>
import gql from 'graphql-tag'
import ProductCard from '@/components/category/ProductCard.vue'

export default {
    components: {
        ProductCard
    },
    props: {
        categoryId: String,
        categorySlug: String,
    },
    apollo: {
        products: {
            query: gql`query products($categoryId: ID!, $sortOrder: ProductSortOrder!) {
                products(sortOrder: $sortOrder, first: 21, categoryId: $categoryId) {
                    edges {
                        node {
                            id
                            name
                            cartItem {
                                id
                                quantity
                            }
                            mainImage {
                                url
                            }
                            price
                            quantityMultiplicity
                            slug
                            stockAvailabilityStatus
                        }
                    }
                    pageInfo {
                        endCursor
                        hasNextPage
                    }
                }
            }`,
            variables () {
                return {
                    categoryId: this.categoryId,
                    sortOrder: this.sortOrder
                }
            },
        }
    },
    data() {
        return {
            products: {},
            sortOrder: 'CHEAPEST_FIRST',
            productsMore: [],
            cursor: '',
            hasNext: false,
            testss: 1,
            nextShowMore: true
        }
    },
    watch: {
        sortOrder() {
            this.productsMore = [],
            this.cursor = this.products.pageInfo.endCursor;
            this.hasNext = this.products.pageInfo.hasNextPage;
        },
        '$route' () {
            this.productsMore = [],
            this.sortOrder = 'CHEAPEST_FIRST'
        }
    },
    methods: {
        showMore () {
            
            let endCursors = this.cursor || this.products.pageInfo.endCursor;
            let isNext = this.hasNext || this.products.pageInfo.hasNextPage;
            console.log('cc '+this.cursor);
            console.log('cc '+endCursors);
            console.log('cc '+this.hasNext);
            console.log('cc '+isNext);
            if(isNext && this.cursor != null) {
                this.$apollo.query({
                query: gql`
                    query {
                        products(sortOrder: ${this.sortOrder}, first: 12, categoryId: "${this.categoryId}", after: "${endCursors}") {
                            edges {
                                node {
                                    id
                                    name
                                    cartItem {
                                id
                                quantity
                               
                            }
                            mainImage {
                                url
                            }
                            price
                             stockAvailabilityStatus
                            slug
                                }
                            }
                            pageInfo {
                                endCursor
                                hasNextPage
                            }
                        }
                    }`
                })
                .then((data) => { 
                    let productsArray = Object.values(data.data.products.edges)
                    this.productsMore = this.productsMore.concat(productsArray);
                    this.cursor = data.data.products.pageInfo.endCursor;
                    this.hasNext = data.data.products.pageInfo.hasNextPage;
                    this.nextShowMore = true;
            })
            }
        },
        handleScroll() {
          
      if(window.scrollY >= (document.documentElement.scrollHeight-document.documentElement.clientHeight-400)) {
          
          if(this.nextShowMore) {
              this.showMore();
              this.nextShowMore = false;
          }
      }
    },
    },
    created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },

}
</script>