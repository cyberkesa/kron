<template>
  <div
    class="section-animate bg-gradient-to-r from-[#CC5654] to-[#E57373] rounded-xl lg:h-[370px] lg:pr-14 lg:flex-row lg:mt-[130px] sm:mt-20 text-white lg:items-center align-middle flex relative sm:flex-col sm:pr-0 sm:h-auto sm:items-start sm:px-6 sm:pt-6 sm:pb-10"
  >
    <img
      src="@/assets/phone.png"
      alt="Мобильное приложение КРОН"
      class="lg:left-[60px] lg:top-[-50px] lg:absolute sm:relative sm:left-0 sm:top-0 transition-transform transform hover:scale-105"
      loading="lazy"
    />
    <div
      class="lg:ml-[350px] flex lg:flex-row align-middle w-[100%] justify-between sm:flex-col sm:ml-0"
    >
      <div class="flex flex-col">
        <h2
          class="sm:mb-4 lg:text-[32px] lg:leading-[42px] sm:text-[28px] sm:mt-4 font-bold"
        >
          Мобильное приложение <br />на&nbsp;iOS и&nbsp;Android
        </h2>
        <p
          class="lg:text-[20px] lg:leading-[30px] sm:text-[18px] sm:leading-[26px] mb-6"
        >
          Быстрое и&nbsp;удобное оформление заказа через приложение.
        </p>
        <div class="flex mt-5">
          <a
            href="https://apps.apple.com/ru/app/%D0%BA%D1%80%D0%BE%D0%BD-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82-%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD/id1611541742"
            class="mr-2 transition-transform transform hover:scale-105"
          >
            <img src="@/assets/apple.png" alt="App Store" loading="lazy" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.foresko.kron"
            class="transition-transform transform hover:scale-105"
          >
            <img src="@/assets/google.png" alt="Google Play" loading="lazy" />
          </a>
        </div>
      </div>
      <div class="lg:flex ml-auto sm:hidden self-center">
        <img
          src="@/assets/qr-code.svg"
          width="220px"
          height="220px"
          class="rounded-xl bg-white p-1 transition-transform transform hover:scale-105"
          alt="QR-код для скачивания приложения"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppSection",
};
</script>
