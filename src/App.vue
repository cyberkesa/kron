<template>
  <div v-if="this.$apollo.loading">
    Загрузка
    </div>
  <div v-else class="wrap flex flex-col h-screen justify-between">
    <MainHeader />
      <router-view class="xl:w-[1190px] sm:w-[100%] lg:w-[960px] mx-auto pb-32 lg:px-0 sm:px-5" />
    <MainFooter class="mt-auto lg:px-0 sm:px-5"/>
  </div>
</template>

<script>
import { useCart } from '@/store/useCart'
import { useAuth } from '@/store/useAuth'
import MainHeader from '@/components/header/MainHeader.vue'
import MainFooter from '@/components/footer/MainFooter.vue'



export default {
    setup() {
        const cart = useCart();
        const authGo = useAuth();

        return { cart, authGo }
    },
  components: {
      MainHeader, MainFooter
    },
    created() {
      
      if (!localStorage.token) {
        this.authGo.logInGuest('UmVnaW9uOjE=');
      
      }
      
      
      console.log('CREATED APP:');
      console.log(localStorage.token);
      console.log(localStorage.refresh);
      
      this.cart.refreshCart();
    },
}
</script>