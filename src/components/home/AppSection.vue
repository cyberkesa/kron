<template>
  <div
    class="section-animate bg-gradient-to-r from-[#D50000] to-[#B50909] rounded-md-lg min-h-[370px] lg:pr-14 lg:flex-row lg:mt-[130px] sm:mt-20 text-white flex relative flex-col items-center sm:items-start px-6 sm:pt-6 sm:pb-10"
  >
    <img
      src="@/assets/phone.png"
      alt="Мобильное приложение КРОН"
      class="lg:left-[60px] lg:top-[-50px] lg:absolute sm:relative transition-transform transform hover:scale-105 w-[80%] sm:w-auto max-w-[300px] sm:max-w-none"
      loading="lazy"
    />
    <div class="lg:pl-[300px] flex flex-col w-full lg:flex-row justify-between">
      <div class="flex flex-col text-center sm:text-left">
        <h2 class="mb-4 text-[clamp(1.75rem,5vw,2rem)] font-bold">
          Мобильное приложение <br />на&nbsp;iOS и&nbsp;Android
        </h2>
        <p class="text-[clamp(1rem,4vw,1.25rem)] leading-relaxed mb-6">
          Быстрое и&nbsp;удобное оформление заказа через приложение.
        </p>
        <div class="flex justify-center sm:justify-start mt-5">
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
      <div class="lg:flex hidden lg:ml-auto lg:self-center sm:mt-6">
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
