<template>
  <div class="relative">
    <!-- Фиксированный хедер -->
    <header
      class="border-b py-6 fixed top-0 left-0 w-full bg-white z-50 shadow-md"
    >
      <!-- Десктопное меню -->
      <div
        class="hidden lg:flex justify-between items-center max-w-[1190px] w-full mx-auto px-6 gap-x-4"
      >
        <HeaderLogo />
        <HeaderRegions />
        <router-link
          to="/catalog/"
          class="border rounded-md-lg border-[#D50000] py-1 px-6 font-semibold hover:bg-[#D50000] hover:text-white hover:border-[#cc5654]"
        >
          Каталог →
        </router-link>
        <HeaderSearch />
        <div class="flex items-center gap-x-4">
          <HeaderUser />
          <HeaderCart />
        </div>
      </div>

      <!-- Мобильное меню -->
      <div class="flex lg:hidden justify-between w-full px-5 items-center">
        <div class="relative">
          <Slide width="340" :closeOnNavigation="true">
            <div class="mb-6">
              <router-link
                to="/catalog/"
                class="border-[#E1E4ED] border rounded-full text-[15px] py-2 w-full text-base font-semibold block text-center hover:opacity-90"
              >
                Каталог продукции →
              </router-link>
            </div>
            <span class="font-semibold">Регион</span>
            <HeaderRegions class="ml-0 mr-[20px] mb-5" />
            <MobileUser />
          </Slide>
        </div>
        <HeaderLogo />
        <HeaderCart />
      </div>
    </header>

    <!-- Контент с отступом -->
    <main class="pt-[80px]">
      <slot />
    </main>
  </div>
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
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 24px !important;
  height: 24px !important;
  cursor: pointer;
}
.bm-burger-bars {
  background-color: #111;
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
  height: 100%;
  width: auto;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  border-right: 1px solid #eee;
  background-color: #fff !important;
  overflow-x: hidden;
  padding-top: 90px !important;
  transition: 0.5s;
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
