<template>
<div class="search-box relative lg:mr-10 sm:mr-0 ">
    <div class="relative w-full">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute left-4 top-[6px]">
<path d="M10.4919 3.51509C14.3578 3.48135 17.519 6.58789 17.5527 10.4537C17.5668 12.0596 17.0389 13.5438 16.1399 14.7329L20.1981 18.7206C20.592 19.1077 20.5975 19.7409 20.2104 20.1348C19.8233 20.5287 19.1902 20.5342 18.7963 20.1471L14.7193 16.1406C13.5713 16.9922 12.1528 17.5011 10.6141 17.5146C6.74825 17.5483 3.58701 14.4418 3.55327 10.5759C3.51954 6.71006 6.62608 3.54882 10.4919 3.51509ZM10.5094 5.51501C7.74806 5.53911 5.5291 7.79713 5.5532 10.5585C5.57729 13.3198 7.83532 15.5387 10.5966 15.5146C13.358 15.4905 15.5769 13.2325 15.5528 10.4712C15.5287 7.70987 13.2707 5.49091 10.5094 5.51501Z" fill="#444984" fill-opacity="0.65"/>
</svg>

    <input type="text" v-model="searchData" @blur="clearResult()" placeholder="Найти товары" v-on:keyup.enter="goSearch()" class="bg-slate-100 placeholder:text-[#8185AE] rounded-[10px] h-9 pl-12 lg:w-80  sm:w-full border-0 focus:border-slate-200 focus:bg-white focus:border" :class="hasFindClass">
    </div>
    <div class="absolute flex flex-col top-[100%] bg-white lg:w-80 sm:w-full rounded-b-[10px] box-border py-2 px-4 border border-slate-200" v-if="searchFind" @mouseover="hover = true"
    @mouseleave="hover = false;" @focus="handleFocus" @focusout="handleFocusOut" tabindex="0">

        <p v-if="searchResult.length == 0" class="text-[14px]">Ничего не найдено</p>
        <router-link @click="clearResult2()" class="font-semibold block mt-2 hover:text-slate-500 cursor-pointer text-[14px]" v-for="[key, value] in searchCategories" :key="key" :to="'/category/'+key" > {{ value }} </router-link>
 
        <router-link @click="clearResult2()" class="block mt-2 hover:text-slate-500 cursor-pointer text-[14px]" v-for="item in searchResult" :key="item" :to="'/category/'+item.node.category.sluf+'/product/'+item.node.slug"> {{ item.node.name }} </router-link>
    </div>
</div>
    

</template>

<script>
import gql from 'graphql-tag'

export default {
    setup() {
        
    },
    data() {
        return {
            hover: false,
            searchData: '',
            searchResult: false,
            searchFind: false,
            isLoading: 0,
        }
    },
    computed: {
        searchCategories() {
            let cats = new Map();
            if(this.searchFind) {
                for(let node of this.searchResult) {
                    if(!cats.has(node.node.category.slug)) {
                        cats.set(node.node.category.slug, node.node.category.title)
                    }
                }          
            }
            return cats;
        },
        hasFindClass() {
            if(this.searchFind) {
                return 'focus:rounded-b-none';
            } else {
                return '';
            }
        }
    },
    watch: {
        searchData(data) {
            if(data.length > 2) {
                console.log('Search')
                this.doSearch();
            } else {
                this.searchResult = {};
                this.searchFind = false;
            }
        }
    },
    methods: {
         handleFocus() {
            // do something here
        },
        handleFocusOut() {
            this.searchResult = false;
            this.searchFind = false;
        },
        goSearch() {
             window.location.href = '/search/'+this.searchData;
             this.searchFind = false;
        },
        resetSearch() {
              this.searchResult =  false;
                        this.searchFind = false;
                        this.searchData = '';
        },
        clearResult() {
            if (!this.hover) {
                this.searchResult = false;
                this.searchFind = false;
            }
            
        },
        clearResult2() {
            
                this.searchResult = false;
                this.searchFind = false;
            
            
        },
        doSearch() {
            this.$apollo.query({
                query: gql `query {
                    products(first: 15, sortOrder: CHEAPEST_FIRST, searchQuery: "${this.searchData}") {
                        edges {
                            node {
                                name
                                slug
                                category {
                                    slug
                                    title
                                }
                            }
                        }
                    }
                    }`,
                fetchPolicy: "no-cache",
                loadingKey: 'isLoading',
                notifyOnNetworkStatusChange: true
                })
                .then((data) => {
                    if(data.data.products.edges) {
                        this.searchResult =  data.data.products.edges;
                        this.searchFind = true;
                    } else {
                        this.searchResult =  false
                        this.searchFind = false;
                    }
                
                })
        }
    }
}
</script>
