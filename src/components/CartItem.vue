<template>
  <div
    class="cart-item flex flex-row items-center justify-between py-5 pl-3 pr-10 border-b border-r"
    v-if="quantityItem"
  >
    <div class="w-[80px] mr-4 flex lg:justify-center sm:justify-start">
      <img
        :src="
          cartItemData.node.product.mainImage
            ? cartItemData.node.product.mainImage.url
            : '/no-image.jpg'
        "
        alt=""
        class="w-auto h-auto max-w-[80px] lg:max-h-[80px] sm:max-h-auto"
      />
    </div>
    <div
      class="flex lg:flex-row sm:flex-col justify-between items-center w-full"
    >
      <div class="flex justify-between">
        <p class="mr-auto text-[15px] font-normal">
          {{ cartItemData.node.product.name }}
        </p>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          @click="deleteFromCart()"
          class="cursor-pointer hover:opacity-90 ml-11 lg:hidden sm:flex"
        >
          <path d="M20.0002 1V3H4.00024V1H20.0002Z" fill="#C8CDDF" />
          <path
            d="M10.7831 10.485C10.6822 10.0214 10.2623 9.68183 9.77118 9.69899C9.28003 9.71614 8.88491 10.0842 8.81652 10.5537L8.81327 10.576L8.80591 10.7109L9.05177 17.7514L9.06852 17.8855L9.07332 17.9075C9.17429 18.3711 9.59412 18.7107 10.0853 18.6935C10.5764 18.6764 10.9715 18.3083 11.0399 17.8388L11.0432 17.8165L11.0505 17.6816L10.8047 10.6411L10.7879 10.507L10.7831 10.485Z"
            fill="#C8CDDF"
          />
          <path
            d="M14.2292 9.69899C13.738 9.68183 13.3182 10.0214 13.2172 10.485L13.2124 10.507L13.1957 10.6411L12.9506 17.6592C12.9313 18.2112 13.3632 18.6742 13.9151 18.6935C14.4063 18.7107 14.8261 18.3711 14.9271 17.9075L14.9319 17.8855L14.9486 17.7514L15.1937 10.7333C15.213 10.1813 14.7811 9.71826 14.2292 9.69899Z"
            fill="#C8CDDF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.8189 5C18.9921 5 20.0001 5.92852 20.0001 7.14286C20.0001 7.19458 19.9982 7.24629 19.9944 7.29791L19.0603 19.9508C18.9314 21.6966 17.4417 23 15.7066 23H8.29376C6.5586 23 5.06892 21.6966 4.94003 19.9508L4.00591 7.29791C3.91637 6.08502 4.85601 5.0863 6.02832 5.00528L6.03692 5.00469L6.1134 5.00073L17.8189 5ZM6.16078 7.00095C6.03596 7.01212 5.99711 7.10504 6.00048 7.15066L6.9346 19.8035C6.98232 20.4499 7.55006 21 8.29376 21H15.7066C16.4503 21 17.018 20.4499 17.0657 19.8035L17.9999 7.15066L18.0001 7.14286C18.0001 7.09483 17.9504 7.00002 17.8189 7L6.16523 7.00072L6.16078 7.00095Z"
            fill="#C8CDDF"
          />
        </svg>
      </div>
      <div
        class="flex flex-row justify-between items-center lg:w-auto sm:w-full lg:m-0 sm:mt-4"
      >
        <p
          class="mr-11 text-[15px] font-semibold whitespace-nowrap lg:ml-4 sm:ml-0"
        >
          {{ cartItemData.node.product.price * quantityItem }} ₽
        </p>
        <AddToCart
          :productId="cartItemData.node.product.id"
          :cartId="cartItemData.node.id"
          @changeQuantity="updateCart($event)"
          :stockAvailabilityStatus="
            cartItemData.node.product.stockAvailabilityStatus
          "
          :quantityMultiplicity="cartItemData.node.product.quantityMultiplicity"
        />

        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          @click="deleteFromCart()"
          class="cursor-pointer hover:opacity-90 ml-11 lg:flex sm:hidden"
        >
          <path d="M20.0002 1V3H4.00024V1H20.0002Z" fill="#C8CDDF" />
          <path
            d="M10.7831 10.485C10.6822 10.0214 10.2623 9.68183 9.77118 9.69899C9.28003 9.71614 8.88491 10.0842 8.81652 10.5537L8.81327 10.576L8.80591 10.7109L9.05177 17.7514L9.06852 17.8855L9.07332 17.9075C9.17429 18.3711 9.59412 18.7107 10.0853 18.6935C10.5764 18.6764 10.9715 18.3083 11.0399 17.8388L11.0432 17.8165L11.0505 17.6816L10.8047 10.6411L10.7879 10.507L10.7831 10.485Z"
            fill="#C8CDDF"
          />
          <path
            d="M14.2292 9.69899C13.738 9.68183 13.3182 10.0214 13.2172 10.485L13.2124 10.507L13.1957 10.6411L12.9506 17.6592C12.9313 18.2112 13.3632 18.6742 13.9151 18.6935C14.4063 18.7107 14.8261 18.3711 14.9271 17.9075L14.9319 17.8855L14.9486 17.7514L15.1937 10.7333C15.213 10.1813 14.7811 9.71826 14.2292 9.69899Z"
            fill="#C8CDDF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.8189 5C18.9921 5 20.0001 5.92852 20.0001 7.14286C20.0001 7.19458 19.9982 7.24629 19.9944 7.29791L19.0603 19.9508C18.9314 21.6966 17.4417 23 15.7066 23H8.29376C6.5586 23 5.06892 21.6966 4.94003 19.9508L4.00591 7.29791C3.91637 6.08502 4.85601 5.0863 6.02832 5.00528L6.03692 5.00469L6.1134 5.00073L17.8189 5ZM6.16078 7.00095C6.03596 7.01212 5.99711 7.10504 6.00048 7.15066L6.9346 19.8035C6.98232 20.4499 7.55006 21 8.29376 21H15.7066C16.4503 21 17.018 20.4499 17.0657 19.8035L17.9999 7.15066L18.0001 7.14286C18.0001 7.09483 17.9504 7.00002 17.8189 7L6.16523 7.00072L6.16078 7.00095Z"
            fill="#C8CDDF"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import AddToCart from "@/components/AddToCart.vue";
import gql from "graphql-tag";
import { useCart } from "../store/useCart";

export default {
  setup() {
    const cart = useCart();

    return { cart };
  },
  components: {
    AddToCart,
  },
  props: {
    cartItemData: Object,
  },
  data() {
    return {
      quantityItem: this.cartItemData.node.quantity,
    };
  },
  methods: {
    updateCart(data) {
      this.quantityItem = data;
    },
    deleteFromCart() {
      this.$apollo
        .mutate({
          mutation: gql`mutation {
                    updateCartItemQuantity(productId: "${this.cartItemData.node.product.id}", quantity: 0) {
                        __typename
                    }
                    }`,
        })
        .then(() => {
          this.cart.refreshCart();
          this.quantityItem = 0;
        });
    },
  },
};
</script>
