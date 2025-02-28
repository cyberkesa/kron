<template>
  <router-link to="/cart" class="relative group">
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        class="group-hover:fill-[#CC5654]"
        :class="[$route.name == 'cart' ? 'fill-[#CC5654]' : 'fill-[#5E5E6D]']"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20.734 17.3337C21.734 17.3337 22.614 16.787 23.0673 15.9603L27.8406 7.30699C28.334 6.42699 27.694 5.33366 26.6807 5.33366H6.94732L5.69398 2.66699H1.33398V5.33366H4.00065L8.80065 15.4537L7.00065 18.707C6.02732 20.4937 7.30732 22.667 9.33398 22.667H25.334V20.0003H9.33398L10.8007 17.3337H20.734ZM8.21398 8.00033H24.414L20.734 14.667H11.374L8.21398 8.00033ZM9.33398 24.0003C7.86732 24.0003 6.68065 25.2003 6.68065 26.667C6.68065 28.1337 7.86732 29.3337 9.33398 29.3337C10.8007 29.3337 12.0007 28.1337 12.0007 26.667C12.0007 25.2003 10.8007 24.0003 9.33398 24.0003ZM22.6673 24.0003C21.2007 24.0003 20.014 25.2003 20.014 26.667C20.014 28.1337 21.2007 29.3337 22.6673 29.3337C24.134 29.3337 25.334 28.1337 25.334 26.667C25.334 25.2003 24.134 24.0003 22.6673 24.0003Z"
        fill="#5E5E6D"
      />
    </svg>

    <span
      class="w-6 h-6 rounded-full absolute box-border border border-white text-center bg-red-700 text-white text-base top-[-12px] right-[-12px] border-1 border-ins"
      >{{ cart.cartCount }}</span
    >
  </router-link>
</template>

<script setup>
import { useCart } from "@/store/useCart";
import { onBeforeMount } from "vue";

const cart = useCart();

onBeforeMount(() => {
  cart.refreshCart();
});
</script>
