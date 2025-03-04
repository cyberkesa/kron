<template>
  <div v-if="this.$apollo.loading">Загрузка</div>
  <div v-else class="wrap flex flex-col h-screen justify-between">
    <MainHeader />
    <router-view
      class="xl:w-[1320px] sm:w-full lg:w-[1140px] mx-auto pb-32 lg:px-5 sm:px-6"
    />
    <MainFooter class="mt-auto lg:px-0 sm:px-5" />
  </div>
</template>

<script>
import { useCart } from "@/store/useCart.js";
import { useAuth } from "@/store/useAuth.js";
import MainHeader from "@/components/header/MainHeader.vue";
import MainFooter from "@/components/footer/MainFooter.vue";

export default {
  setup() {
    const cart = useCart();
    const authGo = useAuth();

    return { cart, authGo };
  },
  components: {
    MainHeader,
    MainFooter,
  },
  created() {
    if (!localStorage.token) {
      this.authGo.logInGuest("UmVnaW9uOjE=");
    }

    console.log("CREATED APP:");
    console.log(localStorage.token);
    console.log(localStorage.refresh);

    this.cart.refreshCart();
  },
};
</script>
