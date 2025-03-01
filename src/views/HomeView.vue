<template>
  <div class="home lg:px-0 sm:px-5">
    <div
      class="bg-gradient-to-r from-[#CC5654] to-[#E57373] rounded-2xl text-white text-center py-16 mt-10 px-6 shadow-lg"
    >
      <div class="max-w-4xl mx-auto">
        <img
          src="@/assets/kron_rf.png"
          alt="КРОН.РФ - Интернет-магазин товаров для сада и огорода"
          class="w-[600px] mx-auto mb-8 drop-shadow-md transition-transform transform hover:scale-105"
          loading="lazy"
        />
        <h1 class="text-5xl font-bold leading-tight mb-6">
          Интернет-магазин компании
          <span class="text-[#FFD700]">&laquo;КРОН&raquo;</span>
        </h1>
        <p class="text-2xl font-medium mb-4 leading-relaxed">
          Лучшие товары для сада и&nbsp;огорода&nbsp;&mdash; теперь онлайн.
        </p>
        <p class="text-lg opacity-90 mb-8">
          Мы&nbsp;заботимся о&nbsp;вашем бизнесе, предлагая качественные товары
          и&nbsp;сервис!
        </p>
        <div class="mt-8">
          <router-link
            to="/catalog/"
            class="inline-block bg-white text-[#222] text-lg font-semibold py-4 px-8 rounded-full shadow-md hover-scale"
          >
            Перейти в&nbsp;каталог &rarr;
          </router-link>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-xl mt-20 p-8 shadow-lg">
      <h2 class="text-3xl font-bold text-[#333333] mb-6">
        Акции и&nbsp;спецпредложения
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-[#F5F5F5] p-6 rounded-lg">
          <h3 class="text-xl font-semibold mb-2">
            Скидка&nbsp;20% на&nbsp;садовый инвентарь
          </h3>
          <p class="text-[#555555]">Только до&nbsp;конца месяца!</p>
        </div>
        <div class="bg-[#F5F5F5] p-6 rounded-lg">
          <h3 class="text-xl font-semibold mb-2">
            Бесплатная доставка при заказе от&nbsp;5000&nbsp;₽
          </h3>
          <p class="text-[#555555]">По&nbsp;всей России.</p>
        </div>
        <div class="bg-[#F5F5F5] p-6 rounded-lg">
          <h3 class="text-xl font-semibold mb-2">
            Скидка&nbsp;10% новым клиентам
          </h3>
          <p class="text-[#555555]">По&nbsp;промокоду WELCOME10.</p>
        </div>
      </div>
    </div>

    <div
      class="flex lg:flex-row justify-between lg:p-12 border-2 border-[#E1E4ED] rounded-xl mt-20 sm:flex-col sm:p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div class="lg:w-3/5 pr-10 sm:w-full lg:mb-0 sm:mb-8">
        <h2
          class="sm:mb-6 lg:text-[36px] sm:text-2xl lg:leading-[48px] font-bold text-[#333333] mb-6"
        >
          Получите эксклюзивные условия для оптовых заказов!
        </h2>
        <p class="text-lg text-[#555555] mb-6 leading-relaxed">
          На&nbsp;сайте представлены розничные цены. Для получения специальных
          оптовых условий свяжитесь с&nbsp;нами удобным для вас способом. Мы
          предложим:
        </p>
        <ul class="text-lg text-[#555555] mb-6 space-y-4">
          <li class="flex items-start">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="flex-shrink-0 mr-3 text-[#CC5654]"
            >
              <path
                d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z"
                fill="currentColor"
              />
            </svg>
            <span>Индивидуальные скидки для постоянных клиентов.</span>
          </li>
          <li class="flex items-start">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="flex-shrink-0 mr-3 text-[#CC5654]"
            >
              <path
                d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z"
                fill="currentColor"
              />
            </svg>
            <span>Быструю доставку по&nbsp;всей России и&nbsp;СНГ.</span>
          </li>
          <li class="flex items-start">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="flex-shrink-0 mr-3 text-[#CC5654]"
            >
              <path
                d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z"
                fill="currentColor"
              />
            </svg>
            <span>Гарантию качества от&nbsp;производителя.</span>
          </li>
        </ul>
        <p class="text-lg text-[#555555]">
          <b>Почему выбирают нас?</b> Мы&nbsp;работаем напрямую
          с&nbsp;производителями, что позволяет нам предлагать лучшие цены
          и&nbsp;гарантировать качество. Наши клиенты ценят нас
          за&nbsp;надежность, прозрачность и&nbsp;индивидуальный подход.
        </p>
      </div>

      <div class="lg:w-1/3 sm:w-full">
        <div class="flex items-center pt-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="text-[#444984] opacity-65 hover:opacity-100 transition-opacity duration-200"
          >
            <path
              d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM19 18H5C4.45 18 4 17.55 4 17V8L10.94 12.34C11.59 12.75 12.41 12.75 13.06 12.34L20 8V17C20 17.55 19.55 18 19 18ZM12 11L4 6H20L12 11Z"
              fill="currentColor"
            />
          </svg>
          <span
            class="text-[16px] ml-3 text-[#444984] hover:text-[#CC5654] transition-colors duration-200"
          >
            info@tovari-kron.ru
          </span>
        </div>

        <div class="flex items-center lg:pt-5 sm:pt-3">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="text-[#444984] opacity-65 hover:opacity-100 transition-opacity duration-200"
          >
            <path
              d="M15.991 1H7.99542C6.33633 1 4.99707 2.34 4.99707 4V20C4.99707 21.66 6.33633 23 7.99542 23H15.991C17.6501 23 18.9894 21.66 18.9894 20V4C18.9894 2.34 17.6501 1 15.991 1ZM13.4924 21H10.4941C10.2142 21 9.99433 20.78 9.99433 20.5C9.99433 20.22 10.2142 20 10.4941 20H13.4924C13.7723 20 13.9921 20.22 13.9921 20.5C13.9921 20.78 13.7723 21 13.4924 21ZM16.9905 18H6.99597V4H16.9905V18Z"
              fill="currentColor"
            />
          </svg>
          <span
            class="text-[16px] ml-3 text-[#444984] hover:text-[#CC5654] transition-colors duration-200"
          >
            +7 (495) 799-26-66
          </span>
        </div>

        <a
          href="https://wa.me/79057324716"
          class="bg-[#32CD32] rounded-full text-[15px] mt-6 py-3 text-white text-base font-semibold block text-center hover:bg-[#28a745] transition-colors duration-200 flex items-center justify-center hover-scale"
        >
          Написать в&nbsp;WhatsApp
        </a>
      </div>
    </div>

    <div class="flex lg:flex-row justify-between mt-20 sm:flex-col">
      <div class="lg:w-1/4 sm:w-full">
        <h2 class="sm:mb-6 lg:text-[32px] sm:text-2xl font-bold text-[#333333]">
          О&nbsp;компании
        </h2>
      </div>
      <div class="lg:w-3/5 sm:w-full">
        <p class="text-lg text-[#555555] mb-6 leading-relaxed">
          <b>Компания &laquo;Крон&raquo;</b>&nbsp;&mdash; динамично
          развивающийся производитель и&nbsp;прямой экспортер хозяйственных
          товаров, а&nbsp;также товаров для сада и&nbsp;огорода.
        </p>
        <p class="text-lg text-[#555555] mb-6 leading-relaxed">
          Мы&nbsp;сотрудничаем с&nbsp;крупнейшими заводами Китая, Индии, Ирана,
          Армении, Узбекистана, Туркменистана и&nbsp;Вьетнама, обеспечивая
          надежные поставки по&nbsp;России. Собственное производство
          и&nbsp;автопарк позволяют контролировать качество и&nbsp;логистику.
        </p>
        <p class="text-lg text-[#555555] mb-6 leading-relaxed">
          Наши бренды <b>&laquo;Крон&raquo;</b>,
          <b>&laquo;Крон Эксперт&raquo;</b>,
          <b>&laquo;Крон Эконом&raquo;</b> зарекомендовали себя как оптимальное
          сочетание цены и&nbsp;качества. Для удобства клиентов мы&nbsp;создали
          мобильное приложение и&nbsp;онлайн-каталог, доступный в&nbsp;любое
          время.
        </p>
        <p class="text-lg text-[#555555] mb-6 leading-relaxed">
          <b
            >Поможем с&nbsp;импортом товаров&nbsp;&mdash; работаем напрямую с
            производителями.</b
          >
        </p>
      </div>
    </div>

    <div
      class="bg-gradient-to-r from-[#CC5654] to-[#E57373] rounded-xl lg:h-[370px] lg:pr-14 lg:flex-row lg:mt-[130px] sm:mt-20 text-white lg:items-center align-middle flex relative sm:flex-col sm:pr-0 sm:h-auto sm:items-start sm:px-6 sm:pt-6 sm:pb-10"
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
  </div>
</template>

<script>
export default {
  mounted() {
    document.title = 'КРОН - компания ООО "КРОН"';
  },
};
</script>

<style>
.hover-scale {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.hover-scale:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
