<template>
  <div
    class="border border-gray-200 rounded-xl p-4 flex flex-col justify-between h-full"
  >
    <!-- Изображение товара -->
    <router-link
      :to="
        '/category/' +
        categorySlug +
        '/product/' +
        (productData.node.slug || 'no-slug')
      "
      class="group block"
    >
      <div class="h-40 flex justify-center items-center overflow-hidden">
        <VLazyImage
          :src="
            productData.node.mainImage
              ? productData.node.mainImage.url
              : '/no-image.jpg'
          "
          alt="Изображение товара"
          src-placeholder="/no-image.jpg"
          class="group-hover:scale-110 duration-200 max-h-full object-contain"
        />
      </div>
    </router-link>

    <!-- Название товара -->
    <router-link
      :to="
        '/category/' +
        categorySlug +
        '/product/' +
        (productData.node.slug || 'no-slug')
      "
      class="mt-3 block text-[15px] font-medium text-center hover:underline"
    >
      {{ productData.node.name || "Название недоступно" }}
    </router-link>

    <!-- Цена + кнопка -->
    <div class="flex flex-col items-center mt-3">
      <span class="text-lg font-semibold">
        {{
          productData.node.price
            ? `${productData.node.price} руб.`
            : "Цена не указана"
        }}
      </span>
      <AddToCart
        :productId="productData.node.id"
        :stockAvailabilityStatus="productData.node.stockAvailabilityStatus"
        :quantityMultiplicity="productData.node.quantityMultiplicity"
        class="mt-3 w-full"
      />
    </div>
  </div>
</template>

<script>
import AddToCart from "@/components/AddToCart.vue";
import VLazyImage from "v-lazy-image";

export default {
  components: {
    AddToCart,
    VLazyImage,
  },
  props: {
    productData: Object,
    categorySlug: String,
  },
};
</script>

<style scoped>
.v-lazy-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
</style>
