<template>
  <div class="login-view">
    <span
      @click="this.$router.go(-1)"
      class="border-b border-gray-900 cursor-pointer hover:border-0 lg:mt-8 inline-block sm:mt-4"
      >Назад</span
    >
    <h2 v-if="auth.startCheckout" class="text-[32px] mt-4 font-semibold">
      Оформление заказа
    </h2>
    <div
      class="border rounded-xl flex flex-col lg:p-8 lg:mt-28 lg:w-[558px] mx-auto sm:w-full sm:mt-10 sm:p-5"
    >
      <h1 class="text-2xl text-center mb-6">
        Войдите в аккаунт <br />для оформления заказа
      </h1>
      <form @submit.prevent="logIn" class="flex flex-col">
        <label class="flex flex-col text-[15px] font-semibold mb-6">
          Email
          <input
            type="text"
            @blur="validateEmail"
            v-model="email"
            id="email"
            class="w-[100%] h-12 rounded-xl bg-slate-100 border-0 placeholder:text-[#9C9FC0] pl-4 mt-1"
            placeholder="Введите email"
          />
          <span class="text-[#E83737] text-[13px] mt-1 block font-normal">
            {{ emailError }}</span
          >
        </label>

        <labeL class="flex flex-col text-[15px] font-semibold mb-2">
          Пароль

          <div class="relative">
            <input
              :type="passType"
              v-model="password"
              id="current-password"
              placeholder="Введите пароль"
              class="w-[100%] h-12 rounded-xl bg-slate-100 border-0 placeholder:text-[#9C9FC0] pl-4 mt-1"
            />
            <div class="absolute right-4 top-4 cursor-pointer">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                v-if="passView"
                @click="passViewToggle()"
              >
                <path
                  d="M2.02747 3.01439L7.79069 8.26281C8.7927 7.96153 9.85072 7.80129 10.9364 7.80129C14.8618 7.80129 18.4262 9.89631 20.287 13.1791L20.4268 13.4339L18.5067 14.8797L18.4768 14.8273C17.1203 11.9782 14.1804 10.1415 10.9364 10.1415C10.5941 10.1415 10.2552 10.162 9.92124 10.2019L19.7243 19.1317L17.8726 21.1649L13.7162 17.3795C13.127 18.3141 12.0857 18.9349 10.8993 18.9349C9.06155 18.9349 7.57177 17.4452 7.57177 15.6074C7.57177 14.5322 8.08178 13.5761 8.87308 12.9678L6.89215 11.1637C5.38557 11.9804 4.14758 13.2484 3.3959 14.8273L3.37778 14.8618L3.35719 14.8944L1.4382 13.4485C2.2937 11.8287 3.55692 10.4813 5.07557 9.50946L0.175781 5.04754L2.02747 3.01439ZM19.6669 4.01941L19.7336 4.07651L20.7245 5.06741C20.8936 5.2365 20.9286 5.4828 20.8184 5.6513L20.7703 5.71053L18.9782 7.50261C18.8316 7.64924 18.5878 7.64934 18.4018 7.51395L18.3351 7.45684L17.3442 6.46595C17.1751 6.29685 17.1401 6.05056 17.2503 5.88206L17.2984 5.82282L19.0905 4.03075C19.2371 3.88412 19.4809 3.88402 19.6669 4.01941ZM11.637 1.83301L11.7246 1.84002C11.9234 1.87226 12.0802 2.01233 12.1163 2.18996L12.1242 2.26818V4.87924L12.1163 4.95746C12.0802 5.13509 11.9234 5.27516 11.7246 5.3074L11.637 5.31441H10.2357L10.1481 5.3074C9.94931 5.27516 9.79252 5.13509 9.75643 4.95746L9.74858 4.87924V2.26818L9.75643 2.18996C9.79252 2.01233 9.94931 1.87226 10.1481 1.84002L10.2357 1.83301H11.637Z"
                  fill="#444984"
                  fill-opacity="0.65"
                />
              </svg>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                v-else
                @click="passViewToggle()"
              >
                <path
                  d="M10.8985 12.28C12.7362 12.28 14.226 13.7697 14.226 15.6074C14.226 17.4452 12.7362 18.9349 10.8985 18.9349C9.06079 18.9349 7.57102 17.4452 7.57102 15.6074C7.57102 13.7697 9.06079 12.28 10.8985 12.28ZM10.9356 7.80129C14.9617 7.80129 18.608 10.0051 20.426 13.4339L18.5059 14.8797L18.4761 14.8273C17.1195 11.9782 14.1796 10.1415 10.9356 10.1415C7.69145 10.1415 4.75153 11.9782 3.39514 14.8273C3.38391 14.8509 3.37095 14.8733 3.35643 14.8944L1.43744 13.4485C3.25272 10.0114 6.90368 7.80129 10.9356 7.80129ZM19.0898 4.03075C19.2547 3.86579 19.5427 3.88628 19.7329 4.07651L20.7238 5.06741C20.914 5.25764 20.9345 5.54558 20.7695 5.71053L18.9775 7.50261C18.8125 7.66757 18.5246 7.64708 18.3343 7.45684L17.3435 6.46595C17.1532 6.27572 17.1327 5.98778 17.2977 5.82282L19.0898 4.03075ZM2.12774 3.94211C2.31454 3.80753 2.56229 3.81159 2.71367 3.96297L4.56384 5.81314L4.61372 5.87412C4.72841 6.04713 4.69685 6.29685 4.52776 6.46595L3.53686 7.45684L3.46998 7.51379C3.28319 7.64836 3.03544 7.64431 2.88406 7.49293L1.03388 5.64276L0.984004 5.58178C0.869319 5.40876 0.900873 5.15904 1.06997 4.98995L2.06086 3.99905L2.12774 3.94211ZM11.6363 1.83301L11.7238 1.84002C11.9511 1.87687 12.1234 2.05455 12.1234 2.26818V4.87924L12.1156 4.95746C12.0743 5.16047 11.8754 5.31441 11.6363 5.31441H10.235L10.1474 5.3074C9.92015 5.27055 9.74783 5.09287 9.74783 4.87924V2.26818L9.75568 2.18996C9.79692 1.98695 9.99581 1.83301 10.235 1.83301H11.6363Z"
                  fill="#444984"
                  fill-opacity="0.65"
                />
              </svg>
            </div>
          </div>
          <span class="text-[#E83737] text-[13px]"> {{ passError }}</span>
        </labeL>
        <div class="mb-6">
          <router-link
            to="/password-reset"
            class="block text-right text-base text-[#8588AF] font-semibold"
            >Забыли пароль?
          </router-link>
        </div>

        <input
          type="submit"
          :value="enterText"
          class="bg-[#CC5654] text-white rounded-full py-4 w-[100%] mb-8 cursor-pointer text-base font-semibold block text-center hover:opacity-90 disabled:bg-gray-300"
          :disabled="!fillInputs || loading"
        />
      </form>
      <p class="text-center text-[#919AA7] mb-2">Нет аккаунта?</p>
      <router-link
        to="/registration"
        class="text-[#CC5654] block text-center font-semibold"
        >Зарегистрироваться</router-link
      >
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import apolloClient from "../plugins/apollo";
import { useCart } from "@/store/useCart";
import { useAuth } from "@/store/useAuth";

export default {
  setup() {
    const cart = useCart();
    const auth = useAuth();
    return { cart, auth };
  },
  data() {
    return {
      email: "",
      password: "",
      emailError: "",
      passError: "",
      loading: false,
      passView: false,
    };
  },
  mounted() {
    document.title = 'Войти - компания ООО "КРОН"';
  },
  computed: {
    fillInputs() {
      return this.email &&
        this.password &&
        this.emailError != "Пожалуйста, введите корректный email"
        ? true
        : false;
    },
    enterText() {
      return this.loading ? "Загрузка..." : "Войти";
    },
    passType() {
      return this.passView ? "text" : "password";
    },
  },
  /* eslint-disable */
  methods: {
    validateEmail() {
      let reg =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
      if (!reg.test(this.email) && this.email != "") {
        this.emailError = "Пожалуйста, введите корректный email";
      } else {
        this.emailError = "";
      }
    },
    passViewToggle() {
      this.passView ? (this.passView = false) : (this.passView = true);
    },
    logIn() {
      this.loading = true;
      this.passError = "";
      this.emailError = "";
      this.$apollo
        .mutate({
          mutation: gql`mutation {
            logIn(emailAddress: "${this.email}", password: "${this.password}") {
              __typename
              ...on LogInSuccessResult {
                accessToken
                refreshToken
                }
                }
                }`,
        })
        .then((data) => {
          this.loading = false;
          if (data.data.logIn.__typename == "LogInSuccessResult") {
            localStorage.setItem(
              "token",
              "Bearer " + data.data.logIn.accessToken,
            );
            localStorage.setItem("refresh", data.data.logIn.refreshToken);

            apolloClient.resetStore().then(() => {
              this.auth.isLogin = true;
              localStorage.setItem("isLogin", 1);
              this.cart.refreshCart();
              this.auth.getViewer();
              if (this.auth.startCheckout) {
                this.$router.push({ path: "/checkout" });
              } else {
                this.$router.push({ path: "/" });
              }
            });
          } else if (
            data.data.logIn.__typename == "LogInErrorDueToWrongPassword"
          ) {
            this.passError = "Неверный пароль";
          } else if (
            data.data.logIn.__typename == "LogInErrorDueToAccountNotFound"
          ) {
            this.emailError = "Пользователь с таким адресом не найден";
          } else {
            alert("Неизвестная ошибка");
          }
        })
        .catch((data) => {
          this.loading = false;
          console.log(data);
        });
    },
  },
};
/* eslint-enable */
</script>
