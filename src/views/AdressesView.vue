<template>
  <div>
    <h1 class="lg:mt-14 sm:mt-8 mb-8">Адреса</h1>
    <div v-if="deliveryAddresses">
      <DeliveryAdress
        v-for="adress in deliveryAddresses"
        :key="adress"
        :adressId="adress.id"
      />
    </div>
    <div v-if="newAdresses">
      <DeliveryAdress
        v-for="adress in newAdresses"
        :key="adress"
        :adressId="adress.id"
      />
    </div>

    <button
      @click="newAdress()"
      v-if="!newAdressAdding"
      class="bg-[#CC5654] text-white rounded-full py-4 w-[200px] text-base font-semibold block text-center hover:opacity-90"
    >
      Добавить адрес
    </button>
    <div
      class="py-2 px-4 border border-gray-200 rounded-xl mb-3"
      v-if="newAdressAdding"
    >
      <div
        class="flex lg:flex-row sm:flex-col justify-between w-[100%] items-center"
      >
        <input
          type="text"
          v-model="adressString"
          class="w-[100%] h-12 rounded-xl bg-slate-100 border-0 placeholder:text-[#9C9FC0] pl-4 mt-1 h-[36px] focus:outline-0"
          placeholder="Введите адрес"
        />
        <div
          class="lg:w-[220px] sm:w-full flex lg:justify-end sm:justify-start lg:border-0 sm:border-t border-white lg:p-0 sm:pt-3"
        >
          <span
            class="cursor-pointer mr-3 text-[15px] text-slate-600 hover:opacity-80"
            @click="addDeliveryAddress()"
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
  </div>
</template>

<script>
/* eslint-disable */
import DeliveryAdress from "@/components/DeliveryAdress.vue";
import gql from "graphql-tag";

export default {
  components: {
    DeliveryAdress,
  },
  apollo: {
    deliveryAddresses: {
      query: gql`
        query {
          deliveryAddresses {
            id
          }
        }
      `,
      fetchPolicy: "no-cache",
    },
  },
  mounted() {
    document.title = 'Адреса - компания ООО "КРОН"';
  },
  data() {
    return {
      deliveryAddresses: false,
      newAdresses: [],
      newAdressAdding: false,
      adressString: "",
    };
  },
  methods: {
    addDeliveryAddress() {
      this.$apollo
        .mutate({
          mutation: gql`mutation {
                    addDeliveryAddress(fullAddress: "${this.adressString}") {
                        __typename
                        ...on AddDeliveryAddressSuccessResult {
                          deliveryAddress {
                            id
                          }
                        }
                    }
                }`,
        })
        .then((data) => {
          if (
            data.data.addDeliveryAddress.__typename ==
            "AddDeliveryAddressSuccessResult"
          ) {
            this.newAdresses.push({
              id: data.data.addDeliveryAddress.deliveryAddress.id,
            });
            this.newAdressAdding = false;
            this.adressString = "";
            this.$apollo.queries.deliveryAddress.refetch();
          } else {
            alert("Неизвестная ошибка");
          }
        });
    },
    newAdress() {
      this.newAdressAdding = true;
    },
    cancelEdit() {
      this.newAdressAdding = false;
      this.adressString = "";
    },
  },
};
</script>

<style></style>
