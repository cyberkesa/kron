<template>
  <div>
    <div class="text-base mt-8 mb-4">
      <span><router-link to="/" class="border-b">Каталог</router-link> / </span>
      <span class="border-b">Корзина</span>
    </div>
    <h1 class="lg:mb-10 sm:mb-6">Корзина</h1>

    <div
      v-if="cartInfo.cartCount > 0"
      class="flex justify-between lg:flex-row sm:flex-col"
    >
      <div class="cart-Items flex flex-col lg:w-[820px] sm:w-full">
        <template v-if="cart">
          <CartItem
            v-for="item in cart.items.edges"
            :key="item"
            :cartItemData="item"
          />
        </template>
      </div>
      <div class="toCheckout lg:w-[290px] sm:w-full lg:m-0 sm:mt-5">
        <div class="flex justify-between items-center mb-8">
          <p class="font-semibold text-[15px]">
            {{ cartInfo.cartCount }} товаров
          </p>
          <p class="font-semibold text-xl whitespace-nowrap">
            {{ cartInfo.cartPrice }} ₽
          </p>
        </div>
        <router-link
          to="/checkout"
          class="bg-[#CC5654] text-white rounded-full py-4 w-[100%] text-base font-semibold block text-center hover:opacity-90"
          >Оформить заказ</router-link
        >
      </div>
    </div>
    <div v-else class="flex justify-center pt-20">
      <div
        class="flex flex-col justify-center items-center content-center mx-auto"
      >
        <svg
          width="90"
          height="90"
          viewBox="0 0 90 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M89.6008 15.7208C89.2454 15.2662 88.7005 15.0006 88.1234 15.0008H16.8754C15.8399 15.0006 15.0002 15.8398 15 16.8753C15 17.0013 15.0127 17.1272 15.038 17.2507L22.5378 54.7495C22.7275 55.7218 23.6406 56.3788 24.6227 56.2494L80.871 48.7496C81.6337 48.6477 82.2567 48.0901 82.4423 47.3434L89.942 17.3444C90.087 16.7796 89.9608 16.1794 89.6008 15.7208Z"
            fill="#CC5654"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M69.3727 82.7487C72.6172 82.7487 75.2474 80.1186 75.2474 76.8741C75.2474 73.6296 72.6172 70.9994 69.3727 70.9994C66.1282 70.9994 63.498 73.6296 63.498 76.8741C63.498 80.1186 66.1282 82.7487 69.3727 82.7487ZM78.7474 76.8741C78.7474 82.0515 74.5502 86.2487 69.3727 86.2487C64.1952 86.2487 59.998 82.0515 59.998 76.8741C59.998 71.6966 64.1952 67.4994 69.3727 67.4994C74.5502 67.4994 78.7474 71.6966 78.7474 76.8741Z"
            fill="#455A64"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M31.8747 82.7487C35.1192 82.7487 37.7493 80.1186 37.7493 76.8741C37.7493 73.6296 35.1192 70.9994 31.8747 70.9994C28.6302 70.9994 26 73.6296 26 76.8741C26 80.1186 28.6302 82.7487 31.8747 82.7487ZM41.2493 76.8741C41.2493 82.0515 37.0522 86.2487 31.8747 86.2487C26.6972 86.2487 22.5 82.0515 22.5 76.8741C22.5 71.6966 26.6972 67.4994 31.8747 67.4994C37.0522 67.4994 41.2493 71.6966 41.2493 76.8741Z"
            fill="#455A64"
          />
          <path
            d="M33.5952 63.7493H76.8727C77.9082 63.7493 78.7477 62.9098 78.7477 61.8743C78.7477 60.8388 77.9082 59.9993 76.8727 59.9993H33.5952C29.1291 59.99 25.2859 56.8396 24.4005 52.462L14.9621 5.25106C14.7838 4.37798 14.0157 3.75098 13.1247 3.75116H1.875C0.839507 3.75116 0 4.59049 0 5.62599C0 6.66148 0.839507 7.50099 1.875 7.50099H11.5872L20.7256 53.1971C21.9639 59.3252 27.3432 63.736 33.5952 63.7493Z"
            fill="#455A64"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M37.5 40C36.6716 40 36 39.3284 36 38.5V26.5C36 25.6716 36.6716 25 37.5 25C38.3284 25 39 25.6716 39 26.5V38.5C39 39.3284 38.3284 40 37.5 40ZM52.5 40C51.6716 40 51 39.3284 51 38.5V26.5C51 25.6716 51.6716 25 52.5 25C53.3284 25 54 25.6716 54 26.5V38.5C54 39.3284 53.3284 40 52.5 40ZM66 38.5C66 39.3284 66.6716 40 67.5 40C68.3284 40 69 39.3284 69 38.5V26.5C69 25.6716 68.3284 25 67.5 25C66.6716 25 66 25.6716 66 26.5V38.5Z"
            fill="white"
          />
        </svg>
        <p class="text-center text-[#444984] opacity-60 mt-8">
          В корзине пока ничего нет
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import CartItem from "@/components/CartItem.vue";
import { useCart } from "../store/useCart";

export default {
  setup() {
    const cartInfo = useCart();

    return { cartInfo };
  },
  components: {
    CartItem,
  },
  mounted() {
    document.title = 'Корзина - компания ООО "КРОН"';
  },
  apollo: {
    cart: {
      query: gql`
        query {
          cart {
            items(first: 100) {
              totalPrice
              totalQuantity
              hasUnavailableForCheckoutProducts
              edges {
                node {
                  quantity
                  product {
                    name
                    id
                    quantityMultiplicity
                    mainImage {
                      url
                    }
                    price
                    stockAvailabilityStatus
                  }
                  id
                }
              }
            }
          }
        }
      `,
      fetchPolicy: "no-cache",
      loadingKey: "lodaing",
    },
  },
  data() {
    return {
      cart: false,
      loading: 0,
    };
  },
};
</script>
