<template>
  <div>
  <template v-if="stockAvailabilityStatus == 'IN_STOCK'">
    <div v-if="!inCart">
      <button @click="updateCartItemQuantity(1), changeQuantity()" class="lg:w-48 sm:w-32 h-9 rounded-full bg-[#CC5654] text-white text-sm font-semibold">В корзину</button>
    </div>
    <div v-else class="flex justify-center items-center">

      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" @click="updateCartItemQuantity(-1), changeQuantity()" class="select-none hover:opacity-80 cursor-pointer">
<rect x="12.75" y="17.3438" width="10.5" height="1.3125" rx="0.65625" fill="#CC5654" stroke="#CC5654" stroke-width="1.125" stroke-linejoin="round"/>
<rect x="0.5625" y="0.5625" width="34.875" height="34.875" rx="17.4375" stroke="#CC5654" stroke-width="1.125"/>
</svg>

       <span class="block w-8 text-center"> {{ itemCount || inCart }} </span>
 
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" @click="updateCartItemQuantity(1), changeQuantity()" class="select-none hover:opacity-80 cursor-pointer">
<path d="M17.999 12.7505C18.3615 12.7505 18.6553 13.0443 18.6553 13.4067V17.3436L22.5928 17.3442C22.9552 17.3442 23.249 17.6381 23.249 18.0005C23.249 18.3629 22.9552 18.6567 22.5928 18.6567H18.6553V22.5942C18.6553 22.9567 18.3615 23.2505 17.999 23.2505C17.6366 23.2505 17.3428 22.9567 17.3428 22.5942V18.6567H13.4053C13.0428 18.6567 12.749 18.3629 12.749 18.0005C12.749 17.6381 13.0428 17.3442 13.4053 17.3442H17.3428V13.4067C17.3428 13.0443 17.6366 12.7505 17.999 12.7505Z" fill="#CC5654" stroke="#CC5654" stroke-width="1.125"/>
<rect x="0.5625" y="0.5625" width="34.875" height="34.875" rx="17.4375" stroke="#CC5654" stroke-width="1.125"/>
</svg>

    </div>
  </template>
  <template v-else>
    <span v-if="stockAvailabilityStatus == 'OUT_OF_STOCK'">Нет в наличии</span>
    <span v-if="stockAvailabilityStatus == 'IN_STOCK_SOON'">Скоро поступление</span>
  </template>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import { useCart } from '../store/useCart'

export default {
    setup() {
        const cart = useCart();

        return { cart }
    },
  props: {
    productId: String,
    cartId: String,
    stockAvailabilityStatus: String,
    quantityMultiplicity: Number
  },
  data () {
    return {
      itemCount: 0
    }
  },
  computed: {
       inCart() {
           let inCartQuantity = this.cart.cart.find(x => x[this.productId]);
           return (inCartQuantity) ? inCartQuantity[this.productId] : 0
        }
    },
  methods: {
   changeQuantity() {
     this.$emit('changeQuantity', this.itemCount)
   },
    updateCartItemQuantity(num) {
      if (this.quantityMultiplicity) {
        num = num * this.quantityMultiplicity;
      }
      if(this.itemCount + num >= 0) {
        this.itemCount = this.itemCount + num;
      }
    },
  },
  watch: {
    itemCount(newCount) {
      this.$apollo.mutate({
          mutation: gql `mutation {
              updateCartItemQuantity(productId: "${this.productId}", quantity: ${newCount}) {
                __typename
              }
            }`,
        })
        .then(() => {
          this.cart.refreshCart()
        })
    }
  },
  mounted() {
    if (this.cart.cart == []) {
      this.cart.refreshCart();
    }
    this.itemCount = this.inCart;
  }
}
</script>