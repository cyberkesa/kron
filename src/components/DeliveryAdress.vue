<template>
  <div class="py-2 px-4 border border-gray-200 rounded-xl mb-3" v-if="isAdress">
    <div
      class="flex justify-between w-[100%] lg:flex-row sm:flex-col"
      v-if="!isEditAdress"
    >
      <p class="leading-[48px]">{{ adress || deliveryAddress.fullAddress }}</p>
      <div
        class="lg:w-[220px] sm:w-full flex lg:justify-end sm:justify-start lg:border-0 sm:border-t border-slate-200 lg:p-0 sm:pt-3"
      >
        <span
          @click="startEdit()"
          class="cursor-pointer mr-3 text-[15px] text-slate-600 hover:opacity-80"
          >Редактировать</span
        >
        <span
          @click="deleteAdress()"
          class="cursor-pointer text-[15px] text-[#E83737] hover:opacity-80"
          >Удалить</span
        >
      </div>
    </div>
    <div class="flex justify-between w-[100%] lg:flex-row sm:flex-col" v-else>
      <input
        type="text"
        ref="inputAddr"
        v-model="newAdress"
        class="w-[100%] h-12 rounded-lg bg-slate-100 border-0 placeholder:text-[#9C9FC0] pl-4 h-[36px]"
      />
      <div
        class="lg:w-[220px] sm:w-full flex lg:justify-end sm:justify-start lg:border-0 sm:border-t border-white lg:p-0 sm:pt-3"
      >
        <span
          class="cursor-pointer mr-3 text-[15px] text-slate-600 hover:opacity-80"
          @click="editAdress()"
          >Сохранить</span
        >
        <span
          class="cursor-pointer text-[15px] text-[#E83737] hover:opacity-80"
          @click="cancelEdit()"
          >Отмена</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  props: {
    adressId: String,
  },
  apollo: {
    deliveryAddress: {
      query: gql`
        query deliveryAddress($id: ID!) {
          deliveryAddress(id: $id) {
            fullAddress
          }
        }
      `,
      variables() {
        return {
          id: this.adressId,
        };
      },
    },
  },
  data() {
    return {
      deliveryAddress: false,
      isEditAdress: false,
      isAdress: true,
      newAdress: "",
      adress: "",
    };
  },
  mounted() {
    console.log("*mounted", this.$refs.inputAddr);
  },
  methods: {
    startEdit() {
      this.newAdress = this.adress || this.deliveryAddress.fullAddress;
      this.isEditAdress = true;
      this.$nextTick(() => {
        const editButtonRef = this.$refs.inputAddr;
        editButtonRef.focus();
      });
      console.log(this.$refs.inputAddr);
    },
    cancelEdit() {
      this.isEditAdress = false;
      this.newAdress = this.adress || this.deliveryAddress.fullAddress;
    },
    deleteAdress() {
      this.$apollo
        .mutate({
          mutation: gql`mutation {
                    deleteDeliveryAddress(id: "${this.adressId}") {
                        __typename
                    }
                }`,
        })
        .then((data) => {
          data.data.deleteDeliveryAddress.__typename ==
          "DeleteDeliveryAddressSuccessResult"
            ? (this.isAdress = false)
            : alert("Неизвестная ошибка");
        });
    },
    editAdress() {
      this.$apollo
        .mutate({
          mutation: gql`mutation {
                    editDeliveryAddress(fullAddress: "${this.newAdress}", id: "${this.adressId}") {
                        __typename
                    }
                }`,
        })
        .then((data) => {
          if (
            data.data.editDeliveryAddress.__typename ==
            "EditDeliveryAddressSuccessResult"
          ) {
            this.adress = this.newAdress;
            this.isEditAdress = false;
          } else {
            alert("Неизвестная ошибка");
          }
        });
    },
  },
};
</script>

<style></style>
