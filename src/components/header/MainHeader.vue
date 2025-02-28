<template>
  <div class="border-b-1 pt-8 pb-6">
    <div
      class="sm:hidden xl:w-[1190px] lg:w-[960px] mx-auto lg:flex justify-between flex-row items-center"
    >
      <HeaderLogo />
      <HeaderRegions />
      <router-link
        to="/catalog/"
        class="border rounded-full border-[#E1E4ED] py-1 px-6 ml-auto mr-0 font-semibold hover:bg-[#cc5654] hover:text-white hover:border-[#cc5654]"
        >Каталог →</router-link
      >
      <HeaderSearch class="ml-auto" />
      <div class="flex flex-row">
        <HeaderUser class="mx-4" />
        <HeaderCart />
      </div>
    </div>

    <div class="sm:flex lg:hidden justify-between w-full px-5">
      <Slide width="340" :closeOnNavigation="true">
        <div class="mb-6">
          <router-link
            to="/catalog/"
            class="border-[#E1E4ED] border rounded-full text=[15px] py-2 w-[100%] text-base font-semibold block text-center hover:opacity-90"
            >Каталог продукции →</router-link
          >
        </div>

        <span class="font-semibold">Регион</span>
        <HeaderRegions class="ml-0 mr-[20px] mb-5" />
        <MobileUser />
      </Slide>
      <HeaderLogo />
      <HeaderCart />
    </div>
  </div>
  <hr />
</template>

<script>
import HeaderLogo from "@/components/header/HeaderLogo.vue";
import HeaderRegions from "@/components/header/HeaderRegions.vue";
import HeaderSearch from "@/components/header/HeaderSearch.vue";
import HeaderUser from "@/components/header/HeaderUser.vue";
import MobileUser from "@/components/header/MobileUser.vue";
import HeaderCart from "@/components/header/HeaderCart.vue";
import { Slide } from "vue3-burger-menu";

export default {
  components: {
    HeaderLogo,
    HeaderRegions,
    HeaderSearch,
    HeaderUser,
    HeaderCart,
    Slide,
    MobileUser,
  },
};
</script>

<style>
.bm-burger-button {
  position: relative !important;
  width: 24px !important;
  height: 24px !important;
  left: 0 !important;
  top: 4px !important;
  cursor: pointer;
}
.bm-burger-bars {
  background-color: #111;
}
.line-style {
  position: absolute;
  border-radius: 1px !important;
  height: 2px !important;
  left: 0 !important;
  right: 0 !important;
}
.cross-style {
  position: absolute !important;
  top: 12px !important;
  right: 2px !important;
  cursor: pointer !important;
}
.bm-cross {
  background: #111 !important;
  width: 2px !important;
  height: 20px !important;
}
.bm-cross-button {
  height: 24px !important;
  width: 24px !important;
  left: 30px !important;
  top: 36px !important;
}
.bm-menu {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1000; /* Stay on top */
  top: 0;
  left: 0;
  border-right: 1px solid #eee;
  background-color: rgb(255, 255, 255) !important;
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 90px !important; /* Place content 60px from the top */
  transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
}

.bm-overlay {
  background: rgba(255, 255, 255, 0.3) !important;
  z-index: 999 !important;
}
.bm-item-list {
  color: inherit !important;
  margin-left: 20px !important;
  position: absolute !important;
  width: 310px !important;
  font-size: inherit !important;
}
.bm-item-list > * {
  display: flex !important;
  text-decoration: none !important;
  padding: 0 !important;
}

.bm-item-list > .to-catalog {
  padding: 0.5rem 1rem !important;
}

.bm-item-list > * > span {
  margin-left: inherit !important;
  font-weight: inherit !important;
  color: inherit !important;
}
</style>
