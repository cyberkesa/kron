<template>
  <div class="sm:w-full border border-gray-200 rounded-xl lg:w-64  lg:h-96 sm:h-auto box-border lg:p-8 sm:p-4 mb-5 flex lg:flex-col  sm:flex-row ">
    <router-link :to="'/category/'+ categorySlug + '/product/'+productData.node.slug" class="group flex lg:flex-col sm:flex-row lg:w-full sm:w-1/5">
    <div class="lg:h-40 sm:h-30 flex flex-col align-middle content-center items-center sm:justify-center">
      <VLazyImage :src="(productData.node.mainImage) ? productData.node.mainImage.url : '/no-image.jpg'" alt="" src-placeholder="/no-image.jpg" class="group-hover:scale-110 duration-200 lg:h-full sm:h-30"></VLazyImage>
      </div>
    </router-link>
    <div class="flex flex-col lg:h-full sm:h-auto lg:w-full sm:w-4/5 lg:p-0 sm:pl-4">
      <router-link :to="'/category/'+ categorySlug + '/product/'+productData.node.slug"><p class="text-[15px] lg:text-center sm:text-left mt-2 mb-3 font-normal">{{ productData.node.name }}</p></router-link>
      <div class="lg:flex-col sm:flex-row justify-between items-center flex lg:h-full sm:h-auto">
        <span class="text-center text-base font-semibold "> {{ productData.node.price }} руб.</span>
        <AddToCart :productId="productData.node.id" :stockAvailabilityStatus="productData.node.stockAvailabilityStatus" :quantityMultiplicity="productData.node.quantityMultiplicity" class="mt-auto"/>
      </div>
    </div>
  </div>
</template>
 
<script>
import AddToCart from '@/components/AddToCart.vue'
import VLazyImage from "v-lazy-image";

export default {
  components: {
    AddToCart, VLazyImage
  },
  props: {
    productData: Object,
    categorySlug: String
  }
}
</script>
<style scoped>
.v-lazy-image {
  height: 100%;
}

@media screen and (max-width: 768px) {
  .v-lazy-image {
    height: auto !important;
  max-height: 100px !important;
}
}

</style>