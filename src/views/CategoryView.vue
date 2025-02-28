<template>
    <div class="category-view">
        <BreadcrumbsLinks v-if="categoryBySlug.id" :categoryId="categoryBySlug.id" />
        <h1 class="lg:mb-10 sm:mb-6 lg:text-[32px] sm:text-2xl"> {{ categoryBySlug.title  }} </h1>
        
        <div class="sm:flex-col flex lg:flex-row justify-between">
                        
            <div class="sm:w-full lg:w-1/4">
                

                    <router-link to="/catalog/" class="text-xl flex items-center mb-2 justify-start">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-6  w-[10%]">
<path d="M4.39134 7.99998L10.196 2.19531L11.1387 3.13798L6.27667 7.99998L11.1387 12.862L10.196 13.8046L4.39134 7.99998Z" fill="black"/>
</svg>
<span class="w-[90%]">Каталог</span></router-link>

 <router-link v-if="categoryBySlug.parent" :to="categoryBySlug.parent.slug" class="text-xl flex items-center mb-2">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-6  w-[10%]">
<path d="M4.39134 7.99998L10.196 2.19531L11.1387 3.13798L6.27667 7.99998L11.1387 12.862L10.196 13.8046L4.39134 7.99998Z" fill="black"/>
</svg>
<span class="w-[90%]">{{ categoryBySlug.parent.title }}</span></router-link>
                
                <div  v-if="categoryBySlug.children" class="categoires">
                    <div class="category" v-for="category in categoryBySlug.children" :key="category.id">
                        <router-link :to="'/category/'+category.slug" class="flex justify-between mb-2 items-center">
                            <span  class="w-[90%]">{{ category.title }}</span>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-6 w-[10%]">
                                <path d="M4.86133 3.13798L9.72333 7.99998L4.86133 12.862L5.80399 13.8046L11.6087 7.99998L5.80399 2.19531L4.86133 3.13798Z" fill="black"/>
                            </svg>
                        </router-link>
                    </div>
                </div>
            </div>

            <div class="sm:w-full lg:w-[820px] lg:p-0 sm:pt-5">
                
                <ProductsList v-if="categoryBySlug.id" :categoryId="categoryBySlug.id" :categorySlug="categorySlug" />
            </div>
            
    </div>
</div>
</template>

<script>
import gql from 'graphql-tag'
import ProductsList from '@/components/category/ProductsList.vue'
import BreadcrumbsLinks from '@/components/BreadcrumbsLinks.vue'

export default {
  components: {
        ProductsList, BreadcrumbsLinks
  },
  apollo: {
    categoryBySlug: {
        query: gql`query catBySlug($slug: String!) {
            categoryBySlug(slug: $slug) {
                title
                slug
                id
                ... on RootBranchCategory {
                    children {
                        id
                        title
                        slug
                        }
                    }
                ... on NonRootLeafCategory {
                parent {
                    slug
                    title
                }
                    
                }
            }
        }`,
        variables () {
            return {
                slug: this.$route.params.categorySlug
            }
        }
    },
  },
  methods: {
      getTitle() {
          this.$apollo.query({
            query: gql`query {
                 categoryBySlug(slug: "${this.$route.params.categorySlug}") {
                title
                }
            }`})
            .then((data) => {
                document.title = data.data.categoryBySlug.title + ' - компания ООО "КРОН"';
            })
      }
  },
  computed: {
      breadcrumb() {
          let breadcrumbs = [{url: '/',title:'Каталог'}];
          if (this.categoryBySlug.parent) {
              breadcrumbs.push({url: this.categoryBySlug.parent.slug, title: this.categoryBySlug.parent.title})
          }
          breadcrumbs.push({url: this.categoryBySlug.slug, title: this.categoryBySlug.title});
          return breadcrumbs;
      },
  },
  data () {
    return {
      categoryBySlug: false,
      categorySlug: this.$route.params.categorySlug
    }
  },
  watch: {
      categoryBySlug() {
          (this.categoryBySlug) ? document.title = 'КРОН - компания ООО "КРОН"' : document.title = this.categoryBySlug.title + ' - компания ООО "КРОН"';
          console.log('categorySlug');
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