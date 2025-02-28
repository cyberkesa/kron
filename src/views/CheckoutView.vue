<template>
  <div class="checkout-view">
    <span @click="this.$router.go(-1)"
      class="border-b border-gray-900 cursor-pointer hover:border-0 lg:mt-8 inline-block sm:mt-4">Назад</span>
    <h1 class="mt-4">Оформление заказа</h1>
    <template v-if="!sucsess">
    <div class="border rounded-xl flex flex-col lg:p-8 lg:mt-28 lg:w-[558px] mx-auto sm:w-full sm:mt-10 sm:p-5">
      <p class="text-2xl text-center mb-6 font-semibold">Заказ</p>
      <div class="flex justify-between items-center mb-8">
        <p class="font-semibold text-[15px]">{{ cartInfo.cartCount }} товаров</p>
        <p class="font-semibold text-xl whitespace-nowrap">{{ cartInfo.cartPrice }} ₽</p>
      </div>
      <form @submit.prevent="createOrder" class="flex flex-col">
        <label class="flex flex-col text-[15px] font-semibold mb-6"> Телефон (в формате +79999999999)
          <input type="text" v-model="phone" id="phone"
            class="w-[100%] h-12 rounded-xl bg-slate-100 border-0 placeholder:text-[#9C9FC0] pl-4 mt-1"
            placeholder="Ваш телефон" @blue="validatePhone" @keyup="validatePhone" />
             <span class="text-[#E83737] text-[13px]  mt-1 block font-normal"> {{ phoneError }}</span>
        </label>

        <template v-if="deliveryAddresses.length == 0 || newAdressAdding">
          <label class="flex flex-col text-[15px] font-semibold mb-6"> Адрес доставки
            <input type="text" v-model="delAdress" id="phone"
              class="w-[100%] h-12 rounded-xl bg-slate-100 border-0 placeholder:text-[#9C9FC0] pl-4 mt-1"
              placeholder="Введите адрес" />
              <span class="text-[#919AA7] text-[13px] cursor-pointer" v-if="deliveryAddresses.length != 0" @click="toggleAdress()"> Выбрать из добавленных адресов </span>
          </label>
        </template>
        <template v-else>
          <label class="flex flex-col text-[15px] font-semibold mb-6"> Адрес доставки
            <select name="" id="" v-model="idAdress" class="w-[100%] h-12 rounded-xl bg-slate-100 border-0 placeholder:text-[#9C9FC0] pl-4 mt-1"> 
                <option v-for="adress in deliveryAddresses" :key="adress.name" :value="adress.id"> {{ adress.fullAddress }}</option>
            </select>
            <span class="text-[#919AA7] text-[13px] cursor-pointer" @click="toggleAdress()">Указать новый адрес </span>
          </label>
        </template>
      
     

        <input type="submit" :value="enterText"
          class="bg-[#CC5654] text-white rounded-full py-4 w-[100%] mb-8 cursor-pointer text-base font-semibold block text-center hover:opacity-90 disabled:bg-gray-300"
          :disabled="!fillInputs" />
      </form>


       <p class="text-center text-slate-400 text-[13px]">Продолжая, я соглашаюсь с условиями <br>
<router-link to="/policy" class="border-b border-slate-300">Пользовательского соглашения</router-link></p>
    </div>
    </template>
    <template v-else>
      <div class="border rounded-xl flex flex-col lg:p-8 lg:mt-28 lg:w-[558px] mx-auto sm:w-full sm:mt-10 sm:p-5 items-center content-center">
        <svg width="96" height="91" viewBox="0 0 96 91" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.9713 10.2849L36.3395 0H74.5226C76.0354 0 77.2618 1.22261 77.2618 2.73077V68.2692C77.2618 69.7774 76.0354 71 74.5226 71H19.7392C18.2264 71 17 69.7774 17 68.2692V19.353L25.9713 10.2849Z" fill="#FDF4CF"/>
<path d="M26.6627 9.47641L36.1742 0C37.687 0 38.9134 1.22261 38.9134 2.73077V19.1154C38.9134 20.6235 37.687 21.8462 36.1742 21.8462H19.7392C18.2264 21.8462 17 20.6235 17 19.1154L26.6627 9.47641Z" fill="#FDD090"/>
<rect x="29.3262" y="31.4038" width="35.6092" height="5" fill="#FDD090"/>
<rect x="29.3262" y="42.3271" width="35.6092" height="5" fill="#FDD090"/>
<g filter="url(#filter0_d_2_1529)">
<path d="M73.8377 83.4231C82.604 83.4231 89.7183 76.3372 89.7183 67.5865C89.7183 58.8359 82.604 51.75 73.8377 51.75C65.0714 51.75 57.957 58.8359 57.957 67.5865C57.957 76.3372 65.0714 83.4231 73.8377 83.4231Z" fill="#59BE36" stroke="white" stroke-width="3"/>
<path d="M81.7094 62.1287C81.0206 61.4412 79.9009 61.4412 79.2121 62.1287L71.6303 69.6864L68.4637 66.5304C67.7749 65.8428 66.6552 65.8428 65.9665 66.5304C65.2768 67.2179 65.2768 68.3324 65.9665 69.02L70.3817 73.4217C70.7261 73.7659 71.1782 73.9375 71.6303 73.9375C72.0824 73.9375 72.5346 73.7659 72.8789 73.4217L81.7094 64.6183C82.3991 63.9307 82.3991 62.8162 81.7094 62.1287Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M73.8377 79.5337C80.4562 79.5337 85.8216 74.1847 85.8216 67.5865C85.8216 60.9883 80.4562 55.6394 73.8377 55.6394C67.2192 55.6394 61.8538 60.9883 61.8538 67.5865C61.8538 74.1847 67.2192 79.5337 73.8377 79.5337ZM73.8377 81.9231C81.7799 81.9231 88.2183 75.5044 88.2183 67.5865C88.2183 59.6687 81.7799 53.25 73.8377 53.25C65.8955 53.25 59.457 59.6687 59.457 67.5865C59.457 75.5044 65.8955 81.9231 73.8377 81.9231Z" fill="#59BE36"/>
</g>
<defs>
<filter id="filter0_d_2_1529" x="52.457" y="48.25" width="42.7617" height="42.6731" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.11 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_1529"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_1529" result="shape"/>
</filter>
</defs>
</svg>

        <h1 class="text-2xl text-center mb-6 mt-4">Заказ № {{ number }} <br>оформлен</h1>
        <p class="mb-10 text-center">Скоро наш сотрудник свяжется с вами. <br class="lg:block sm:hidden">
Информацию по заказу можете увидеть <br class="lg:block sm:hidden">на странице <router-link to="/user" class="border-b border-gray-900 hover:border-0">вашего профиля</router-link></p>

<router-link to="/" class="text-[#CC5654] cursor-pointer font-semibold block">Закрыть</router-link>
        </div>
      </template>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import { useCart } from '../store/useCart'
import { useAuth } from '../store/useAuth'

export default {
  setup() {
    const cartInfo = useCart();
    const authInfo = useAuth();

    return { cartInfo, authInfo }
   },
   apollo: {
    deliveryAddresses: {
      query: gql` query {
        deliveryAddresses {
          id
          fullAddress
        }
      }`,
      fetchPolicy: "no-cache",
    },
   },
   
   data() {
     return {
       deliveryAddresses: false,
       phone: this.authInfo.userPhone,
       delAdress: '',
       idAdress: '',
       phoneError: '',
       noValidPhone: false,
       loading: false,
       enterText: 'Заказать',
       newAdressAdding: false,
       sucsess: false,
       number: ''
     }
   },
   computed: {
     fillInputs() {
       if(!this.noValidPhone && ((this.delAdress && (this.newAdressAdding || this.deliveryAddresses.length == 0)) || (!this.newAdressAdding && this.idAdress))) {
         return true
       } else {
         return false
       }
     },
     isNewAddr() {
       if((this.delAdress && (this.newAdressAdding || this.deliveryAddresses.length == 0))) {
         return true
       } else {
         return false
       }
     }
   },
   methods: {
     validatePhone() {
      //eslint-disable-next-line
      let reg = /^\+7[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/;
        if (!reg.test(this.phone) && this.phone != "") {
            this.phoneError = 'Пожалуйста, введите корректный телефон в формате +79999999999';
            this.noValidPhone = true;
        } else {
            this.phoneError = '';
            this.noValidPhone = false;
        }
     },
     getViewer() {
       this.$apollo.query({
            query: gql`query {
              viewer {
                
                ...on RegisteredViewer {
                  
                  phoneNumber
                }
              }
            }`,
          error(data) {
              console.log('ERORR!' + data);
          },
          }).then((data) => {
            this.phone = data.data.viewer.phoneNumber;
          }) 
     },
     toggleAdress() {
       (this.newAdressAdding) ? this.newAdressAdding = false : this.newAdressAdding = true;
     },
     createOrder() {
      if(!this.noValidPhone) {
       if(this.isNewAddr) {
         this.$apollo.mutate({
                mutation: gql `mutation {
                    addDeliveryAddress(fullAddress: "${this.delAdress}") {
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
                if (data.data.addDeliveryAddress.__typename == "AddDeliveryAddressSuccessResult") {
                 
                 this.checkOut(data.data.addDeliveryAddress.deliveryAddress.id);

                } else {
                  alert('Неизвестная ошибка');
                } 
            })
       } else {
         this.checkOut(this.idAdress);
       }
      }
     },
     checkOut(id) {
      
       this.$apollo.mutate({
                mutation: gql `mutation {
                    checkOut(deliveryAddressId: "${id}", phoneNumber: "${this.phone}") {
                        __typename
                        ...on CheckOutSuccessResult {
                          order {
                            number
                          }
                        }
                    }
                }`,
            })
            .then((data) => {
                if(data.data.checkOut.__typename == "CheckOutSuccessResult") {
                  this.sucsess = true;
                  this.number = data.data.checkOut.order.number;
                  this.cartInfo.refreshCart();
                  } else {
                    alert('Неизвестная ошибка')
                  }
            })
     },
   },
   mounted() {
     this.getViewer();
     document.title = 'Оформление заказа - компания ООО "КРОН"';
   }
}
</script>

<style>

</style>