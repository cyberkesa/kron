<template>
  <div class="home lg:px-0 sm:px-5">
    <HeaderSearch class="lg:hidden sm:flex w-full mt-5" />
    <h1 class="lg:mt-14 sm:mt-8 mb-10">Каталог</h1>
    <div
      v-if="$apollo.queries.rootCategories.loading"
      class="xl:categoires flex flex-wrap flex-row justify-between"
    >
      <div
        class="sm:w-[48%] animate-pulse bg-slate-100 p-5 lg:w-[23.5%] box-border mb-8 h-52 rounded-xl"
        v-for="category in 10"
        :key="category"
      ></div>
      <div class="w-[23.5%]"></div>
      <div class="w-[23.5%]"></div>
    </div>
    <div v-else class="xl:categoires flex flex-wrap flex-row justify-between">
      <router-link
        :to="'/category/' + category.slug"
        class="sm:w-[48%] group bg-slate-100 hover:bg-slate-50 p-5 lg:w-[23.5%] box-border mb-8 xl:h-52 rounded-xl flex flex-col ease-in-out duration-300 items-center content-center justidy-center"
        v-for="category in rootCategories"
        :key="category.id"
      >
        <img
          :src="category.iconUrl"
          alt=""
          class="mx-auto h-[98px] w-auto group-hover:scale-105 ease-in-out duration-300"
        />
        <h2 class="text-base text-center mt-5">{{ category.title }}</h2>
      </router-link>
      <div class="lg:w-[23.5%] sm:hidden lg:flex"></div>
      <div class="lg:w-[23.5%] sm:hidden lg:flex"></div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import HeaderSearch from "@/components/header/HeaderSearch.vue";

export default {
  components: {
    HeaderSearch,
  },
  apollo: {
    rootCategories: gql`
      query {
        rootCategories {
          iconUrl
          title
          slug
          id
        }
      }
    `,
  },
  data() {
    return {
      rootCategories: {},
    };
  },
  mounted() {
    document.title = 'Каталог продукции - компания ООО "КРОН"';
  },
};
</script>
