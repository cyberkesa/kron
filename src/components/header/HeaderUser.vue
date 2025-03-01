<template>
  <div class="mr-8 group relative">
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="cursor-pointer transition-transform transform hover:scale-110"
    >
      <path
        class="group-hover:fill-[#CC5654] transition-colors"
        :class="[$route.name == 'user' ? 'fill-[#CC5654]' : 'fill-[#5E5E6D]']"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.0007 30.6663C7.90047 30.6663 1.33398 24.0998 1.33398 15.9997C1.33398 7.8995 7.90047 1.33301 16.0007 1.33301C24.1008 1.33301 30.6673 7.8995 30.6673 15.9997C30.6673 24.0998 24.1008 30.6663 16.0007 30.6663ZM25.8666 22.8325C27.2121 20.8934 28.0007 18.5386 28.0007 15.9997C28.0007 9.37226 22.6281 3.99967 16.0007 3.99967C9.37323 3.99967 4.00065 9.37226 4.00065 15.9997C4.00065 18.5386 4.78916 20.8934 6.13466 22.8325C7.63525 20.8504 11.1615 19.9997 16.0007 19.9997C20.8398 19.9997 24.366 20.8504 25.8666 22.8325ZM23.9536 24.986C23.5633 23.5828 20.7598 22.6663 16.0007 22.6663C11.2415 22.6663 8.43799 23.5828 8.04774 24.986C10.1651 26.8612 12.9499 27.9997 16.0007 27.9997C19.0514 27.9997 21.8363 26.8612 23.9536 24.986ZM16.0007 19.9997C13.0151 19.9997 10.6673 17.9028 10.6673 13.333C10.6673 10.3407 12.7728 7.99967 16.0007 7.99967C19.2196 7.99967 21.334 10.5618 21.334 13.5997C21.334 17.9725 18.9581 19.9997 16.0007 19.9997ZM13.334 13.333C13.334 16.3587 14.4249 17.333 16.0007 17.333C17.5709 17.333 18.6673 16.3975 18.6673 13.5997C18.6673 11.9336 17.6215 10.6663 16.0007 10.6663C14.3123 10.6663 13.334 11.7541 13.334 13.333Z"
        fill="#5E5E6D"
      />
    </svg>
    <div
      class="group-hover:block hidden w-[380px] absolute right-[-64px] pt-[25px] transition-opacity duration-300 z-50"
    >
      <svg
        width="38"
        height="21"
        viewBox="0 0 38 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="absolute top-[5px] right-[61px] z-50"
      >
        <g clip-path="url(#clip0_470_9171)">
          <path
            d="M21.7866 4.49287L32.7225 18.8822C34.4738 21.1866 32.8303 24.5 29.9359 24.5H8.0641C5.16966 24.5 3.52616 21.1867 5.27753 18.8822L16.2134 4.49287C17.6141 2.64993 20.3859 2.64992 21.7866 4.49287Z"
            fill="white"
            stroke="#E1E4ED"
          />
        </g>
        <defs>
          <clipPath id="clip0_470_9171">
            <rect width="38" height="22" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <div
        class="bg-white px-6 border border-[#E1E4ED] rounded-xl shadow-lg z-50"
      >
        <div v-if="authInfo.viewer == 'AnonymousViewer'" class="py-10">
          <p class="text-center text-[15px] mb-6 text-[#333333]">
            Войдите или зарегистрируйтесь, чтобы совершать заказы
          </p>
          <router-link
            class="bg-gradient-to-r from-[#CC5654] to-[#E57373] text-white rounded-full py-4 w-[100%] text-base font-semibold block text-center hover:opacity-90 transition-opacity"
            to="/login"
            >Войти или Зарегистрироваться</router-link
          >
        </div>
        <div v-else class="py-6">
          <div class="flex items-center pb-4">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="mr-2"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.0007 30.6663C7.90047 30.6663 1.33398 24.0998 1.33398 15.9997C1.33398 7.8995 7.90047 1.33301 16.0007 1.33301C24.1008 1.33301 30.6673 7.8995 30.6673 15.9997C30.6673 24.0998 24.1008 30.6663 16.0007 30.6663ZM25.8666 22.8325C27.2121 20.8934 28.0007 18.5386 28.0007 15.9997C28.0007 9.37226 22.6281 3.99967 16.0007 3.99967C9.37323 3.99967 4.00065 9.37226 4.00065 15.9997C4.00065 18.5386 4.78916 20.8934 6.13466 22.8325C7.63525 20.8504 11.1615 19.9997 16.0007 19.9997C20.8398 19.9997 24.366 20.8504 25.8666 22.8325ZM23.9536 24.986C23.5633 23.5828 20.7598 22.6663 16.0007 22.6663C11.2415 22.6663 8.43799 23.5828 8.04774 24.986C10.1651 26.8612 12.9499 27.9997 16.0007 27.9997C19.0514 27.9997 21.8363 26.8612 23.9536 24.986ZM16.0007 19.9997C13.0151 19.9997 10.6673 17.9028 10.6673 13.333C10.6673 10.3407 12.7728 7.99967 16.0007 7.99967C19.2196 7.99967 21.334 10.5618 21.334 13.5997C21.334 17.9725 18.9581 19.9997 16.0007 19.9997ZM13.334 13.333C13.334 16.3587 14.4249 17.333 16.0007 17.333C17.5709 17.333 18.6673 16.3975 18.6673 13.5997C18.6673 11.9336 17.6215 10.6663 16.0007 10.6663C14.3123 10.6663 13.334 11.7541 13.334 13.333Z"
                fill="#111"
              />
            </svg>
            <p class="text-lg font-semibold text-[#333333]">
              {{ authInfo.userEmail }}
            </p>
          </div>
          <div class="flex flex-col">
            <div class="flex justify-between items-center py-2">
              <router-link
                to="/user"
                class="text-[#333333] hover:text-[#CC5654] transition-colors"
                >История заказов</router-link
              >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.3747 12.0002C15.3747 12.3201 15.2527 12.64 15.0086 12.8841L10.7589 17.1338C10.2707 17.622 9.47927 17.622 8.99112 17.1338C8.50296 16.6457 8.50296 15.8542 8.99112 15.366L12.357 12.0002L8.99112 8.63437C8.50296 8.14622 8.50296 7.35476 8.99112 6.8666C9.47927 6.37845 10.2707 6.37845 10.7589 6.8666L15.0086 11.1163C15.2527 11.3604 15.3747 11.6803 15.3747 12.0002Z"
                  fill="#8B9EBC"
                  fill-opacity="0.59"
                />
              </svg>
            </div>
            <div class="flex justify-between items-center py-2">
              <router-link
                to="/user/addresses"
                class="text-[#333333] hover:text-[#CC5654] transition-colors"
                >Адреса</router-link
              >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.3747 12.0002C15.3747 12.3201 15.2527 12.64 15.0086 12.8841L10.7589 17.1338C10.2707 17.622 9.47927 17.622 8.99112 17.1338C8.50296 16.6457 8.50296 15.8542 8.99112 15.366L12.357 12.0002L8.99112 8.63437C8.50296 8.14622 8.50296 7.35476 8.99112 6.8666C9.47927 6.37845 10.2707 6.37845 10.7589 6.8666L15.0086 11.1163C15.2527 11.3604 15.3747 11.6803 15.3747 12.0002Z"
                  fill="#8B9EBC"
                  fill-opacity="0.59"
                />
              </svg>
            </div>
            <span
              class="cursor-pointer text-[#CC5654] block py-2 hover:text-[#E57373] transition-colors"
              @click="authInfo.logOut()"
              >Выйти</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useAuth } from "@/store/useAuth";

export default {
  setup() {
    const authInfo = useAuth();
    return { authInfo };
  },
  data() {
    return {
      isLogin: localStorage.getItem("isLogin"),
    };
  },
};
</script>

<style scoped>
.z-50 {
  z-index: 50;
}
</style>
