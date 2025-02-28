<template>
<div v-if="this.$apollo.queries.products.loading">
    <div class="border rounded-xl flex flex-col lg:p-8 lg:mt-28 lg:w-[558px] mx-auto sm:w-full sm:mt-10 sm:p-5">
                    <div class="animate-pulse text-center">Поиск товаров...</div>
                </div>
                </div>
    <div v-else class="category-view">
        
                <template v-if="products.edges.length > 0" >
        <h1 class="lg:mt-14 sm:mt-8 mb-10" >Результаты поиска</h1>
        <p class="text-slate-400 mb-8"> По вашему запросу <b class="text-gray-900">"{{ this.$route.params.searchQuery }}"</b> найдены товары: </p>
         
        <div class="category-view">
        <div class="sm:flex-col flex lg:flex-row justify-between">
                        
            <div class="sm:w-full lg:w-1/4">

 <router-link to="/" class="text-xl flex items-center mb-2 justify-start">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-6  w-[10%]">
<path d="M4.39134 7.99998L10.196 2.19531L11.1387 3.13798L6.27667 7.99998L11.1387 12.862L10.196 13.8046L4.39134 7.99998Z" fill="black"/>
</svg>
<span class="w-[90%]">Каталог</span></router-link>
<div>
                <router-link class="flex justify-between mb-2 items-center" v-for="[key, value] in searchCategories" :key="key" :to="'/category/'+key" @click="resetSearch()"> 
                
                <span  class="w-[90%]">{{ value }}</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-6 w-[10%]">
                                <path d="M4.86133 3.13798L9.72333 7.99998L4.86133 12.862L5.80399 13.8046L11.6087 7.99998L5.80399 2.19531L4.86133 3.13798Z" fill="black"/>
                            </svg> </router-link>
 </div>
             </div>

            <div class="sm:w-full lg:w-[820px] lg:p-0 sm:pt-5">
                
                <SearchList v-if="searchQuery" :searchQuery="searchQuery" />
            </div>
        </div>    
    </div>
    </template>
    <template v-else>
        <h1 class="lg:mt-14 sm:mt-8 mb-10" >Ничего не найдено</h1>

        <div class="text-clip mt-20">
            <p class="text-slate-400 mb-8 text-center"> По запросу <b class="text-gray-900">"{{ this.$route.params.searchQuery }}"</b> ничего не найдено. <br>
Попробуйте изменить запрос или поискать в каталоге.</p>
           <router-link to="/" class="bg-[#CC5654] text-white mx-auto rounded-full py-4 w-[160px] text-base font-semibold block text-center hover:opacity-90">В каталог</router-link>
            </div>
        </template>
        </div>
</template>

<script>
import gql from 'graphql-tag'
import SearchList from '@/components/SearchList.vue'

export default {
    components: {
        SearchList
    },
    apollo: {
        products: {
            query: gql`query products($searchQuery: String!, $sortOrder: ProductSortOrder!) {
                products(sortOrder: $sortOrder, first: 20, searchQuery: $searchQuery) {
                    edges {
                        node {
                            id
                            category {
                                    slug
                                    title
                                }
                        }
                    }
                }
            }`,
            variables () {
                return {
                    searchQuery: this.searchQuery,
                    sortOrder: this.sortOrder
                }
            },
        }
    },
    data() {
        return {
            products: false,
            sortOrder: 'CHEAPEST_FIRST',
            searchQuery: this.$route.params.searchQuery
        }
    },
     mounted() {
document.title = '"' + this.$route.params.searchQuery + '" - Поиск товаров - компания ООО "КРОН"';
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
    computed: {
        endCursor() {
            return this.cursor || this.products.pageInfo.endCursor;
        },
        hasNextPage() {
            return this.hasNext || this.products.pageInfo.hasNextPage;
        },
        searchCategories() {
            let cats = new Map();
            if(this.products) {
                for(let node of this.products.edges) {
                    if(!cats.has(node.node.category.slug)) {
                        cats.set(node.node.category.slug, node.node.category.title)
                    }
                }          
            }
            return cats;
        }
    },
    methods: {
        showMore () {
            console.log(this.hasNextPage);
            console.log(this.endCursor);
            if(this.hasNextPage) {
                this.$apollo.query({
                query: gql`
                    query {
                        products(sortOrder: ${this.sortOrder}, first: 10, searchQuery: "${this.searchQuery}", after: "${this.endCursor}") {
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
            })
            }
        }
    }

}
</script>