<template>
  <div
    class="banner-animate bg-gradient-to-r from-[#CC5654] to-[#E57373] rounded-2xl text-white text-center py-8 sm:py-12 mt-6 sm:mt-8 px-4 sm:px-6 md:px-12 shadow-lg"
  >
    <div class="max-w-4xl mx-auto">
      <img
        src="@/assets/kron_rf.png"
        alt="КРОН.РФ - Интернет-магазин товаров для сада и огорода"
        class="w-[80%] sm:w-[500px] mx-auto mb-4 sm:mb-6 drop-shadow-md transition-transform transform hover:scale-105 max-w-full"
        loading="lazy"
      />
      <h1
        class="text-[clamp(1.5rem,5vw,3rem)] font-bold leading-tight mb-3 sm:mb-4"
      >
        Интернет-магазин компании
        <span>&laquo;КРОН&raquo;</span>
      </h1>
      <p
        class="text-[clamp(1rem,3.5vw,1.5rem)] font-medium mb-2 sm:mb-3 leading-relaxed"
      >
        Лучшие товары для сада и&nbsp;огорода&nbsp;&mdash; теперь онлайн.
      </p>
      <p class="text-[clamp(0.75rem,2.5vw,1rem)] opacity-90 mb-4 sm:mb-6">
        Мы&nbsp;заботимся о&nbsp;вашем бизнесе, предлагая качественные товары
        и&nbsp;сервис!
      </p>
      <div class="mt-4 sm:mt-6">
        <router-link
          to="/catalog/"
          class="inline-block bg-white text-[#222] text-[clamp(0.875rem,2.5vw,1rem)] font-semibold py-2 px-5 sm:px-6 rounded-full shadow-md hover-scale"
        >
          Перейти в&nbsp;каталог &rarr;
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeBanner",
};
</script>
