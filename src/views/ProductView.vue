<template>
<div>
    <BreadcrumbsLinks v-if="productBySlug.category.id" :categoryId="productBySlug.category.id" :productTitle="productBySlug.name" />
    <div v-if="this.$apollo.queries.productBySlug.loading">
        Загрузка
    </div>
    <div v-else class="product-view flex lg:flex-row sm:flex-col justify-between pt-4">
        <div class="product-images rounded-xl p-8 border border-gray-200  lg:w-[582px] sm:w-full lg:m-0 sm:mb-5" v-if="productBySlug.mainImage">

<Swiper :navigation="true" :pagination="true" :modules="modules"  v-if="productBySlug" class="mySwiper">
    <SwiperSlide v-for="image in productBySlug.images" :key="image.url" class="flex flex-col"><img class="lg:h-[490px] sm:h-auto w-auto" :src="image.url"/></SwiperSlide>
    </Swiper>

            
        </div>
        <div v-else class="product-images rounded-xl border border-gray-200  w-[582px]">
            <img src="/no-image.jpg" class="w-[100%] h-[100%] rounded-xl">
        </div>
        <div class="product-info p-8 rounded-xl border border-gray-200 lg:w-[582px] sm:w-full">
            <h1 class="text-2xl font-semibold">{{ productBySlug.name }}</h1>
            <div class="flex justify-between border-b border-gray-200 py-8">
                <span class="text-2xl font-bold">{{ productBySlug.price }} руб.</span>
                <AddToCart v-if="productBySlug" :productId="productBySlug.id" :stockAvailabilityStatus="productBySlug.stockAvailabilityStatus" :quantityMultiplicity="productBySlug.quantityMultiplicity" />
                </div>

            <h2 class="mt-8 mb-2">Описание</h2>
            <p>{{ productBySlug.description }}</p>

            
        </div>
    </div>
    </div>
</template>

<script>
/* eslint-disable */ 
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation } from "swiper";

import gql from 'graphql-tag'
import AddToCart from '@/components/AddToCart.vue'
import BreadcrumbsLinks from '@/components/BreadcrumbsLinks.vue'
import 'vue3-carousel/dist/carousel.css'
import { Pagination } from "swiper";

export default {
    setup() {
    return {
      modules: [Navigation, Pagination],
    };
  },
    components: {
        AddToCart, BreadcrumbsLinks, Navigation, Pagination, Swiper, SwiperSlide,
    },
    apollo: {
        productBySlug: {
            query: gql`query prBySlug($slug: String!) {
                productBySlug(slug: $slug) {
                    id
                    name
                    description
                    price
                    stockAvailabilityStatus
                    quantityMultiplicity
                    slug
                    category {
                        id
                    }
                    cartItem {
                        id
                        quantity
                    }
                    mainImage {
                        url
                    }
                    images {
                        url
                    }
                    
                }
            }`,
            variables () {
                return {
                    slug: this.$route.params.productSlug,
                }
            }
        }
    },
    methods: {
        getTitle() {
          this.$apollo.query({
            query: gql`query {
                 productBySlug(slug: "${this.$route.params.productSlug}") {
                name
                }
            }`})
            .then((data) => {
                document.title = data.data.productBySlug.name + ' - компания ООО "КРОН"';
            })
      }
    },
    data () {
        return {
        productBySlug: false,
        }
    },
    mounted() {
      this.getTitle();
    },
  beforeUpdate() {
      this.getTitle();
      
  }
}
</script>

<style>
.swiper-button-next,
.swiper-button-prev {
  color: #111;
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
  color: #CC5654;
}

.swiper-button-next:after, .swiper-button-prev:after {
    font-size: 24px !important;
}
</style>