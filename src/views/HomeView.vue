<template>
  <div class="home lg:px-0 sm:px-5">
    <div
      class="bg-[#CC5654] rounded-2xl text-white text-center py-16 mt-10 px-6 shadow-lg"
    >
      <div class="max-w-4xl mx-auto">
        <img
          src="@/assets/kron_rf.png"
          alt="КРОН.РФ - Интернет-магазин"
          class="w-[600px] mx-auto mb-6 drop-shadow-md"
        />
        <h1 class="text-5xl font-bold leading-tight mb-4">
          Интернет-магазин компании <span class="text-[#FFD700]">«КРОН»</span>
        </h1>
        <p class="text-2xl font-medium mb-2">
          Лучшие товары для сада и огорода – теперь онлайн.
        </p>
        <p class="text-lg opacity-90">
          Мы заботимся о вашем бизнесе, предлагая качественные товары и сервис!
        </p>
        <div class="mt-8">
          <router-link
            to="/catalog/"
            class="inline-block bg-white text-[#222] text-lg font-semibold py-4 px-8 rounded-full shadow-md transition-transform transform hover:scale-105"
          >
            Перейти в каталог →
          </router-link>
        </div>
      </div>
    </div>

    <div
      class="flex lg:flex-row justify-between lg:p-10 border-2 border-[#E1E4ED] rounded-xl mt-20 sm:flex-col sm:p-5"
    >
      <div class="lg:w-3/6 pr-10 sm:w-full lg:mb-0 sm:mb-2">
        <h2 class="sm:mb-2 lg:text-[32px] sm:text-2xl lg:leading-[42px]">
          Свяжитесь с&nbsp;нами и&nbsp;получите персональное предложение!
        </h2>
        <p class="text-lg">
          На&nbsp;сайте указаны розничные цены. Для доступа к&nbsp;оптовым
          условиям напишите нам удобным для вас способом.
        </p>
      </div>
      <div class="lg:w-1/4 sm:w-full">
        <div class="flex content-center items-center pt-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM19 18H5C4.45 18 4 17.55 4 17V8L10.94 12.34C11.59 12.75 12.41 12.75 13.06 12.34L20 8V17C20 17.55 19.55 18 19 18ZM12 11L4 6H20L12 11Z"
              fill="#444984"
              fill-opacity="0.65"
            />
          </svg>

          <span class="text-[15px] ml-3">info@tovari-kron.ru</span>
        </div>

        <div class="flex content-center items-center lg:pt-5 sm:pt-3">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.991 1H7.99542C6.33633 1 4.99707 2.34 4.99707 4V20C4.99707 21.66 6.33633 23 7.99542 23H15.991C17.6501 23 18.9894 21.66 18.9894 20V4C18.9894 2.34 17.6501 1 15.991 1ZM13.4924 21H10.4941C10.2142 21 9.99433 20.78 9.99433 20.5C9.99433 20.22 10.2142 20 10.4941 20H13.4924C13.7723 20 13.9921 20.22 13.9921 20.5C13.9921 20.78 13.7723 21 13.4924 21ZM16.9905 18H6.99597V4H16.9905V18Z"
              fill="#444984"
              fill-opacity="0.65"
            />
          </svg>

          <span class="text-[15px] ml-3">+7 (495) 799-26-66</span>
        </div>

        <a
          href="https://wa.me/79057324716"
          class="bg-[#32CD32] rounded-full text=[15px] mt-6 py-2 text-[#fff] text-base font-semibold block text-center hover:opacity-90"
          >Написать в WhatsApp →</a
        >
      </div>
    </div>

    <div class="flex lg:flex-row justify-between mt-20 sm:flex-col">
      <div class="lg:w-1/4 sm:w-full">
        <h2 class="sm:mb-6 lg:text-[32px] sm:text-2xl">О компании</h2>
      </div>
      <div class="lg:w-3/5 sm:w-full">
        <p class="text-lg mb-4">
          <b>Компания &laquo;Крон&raquo;</b>&nbsp;&mdash; динамично
          развивающийся производитель и&nbsp;прямой экспортер хозяйственных
          товаров, а&nbsp;также товаров для сада и&nbsp;огорода.
        </p>
        <p class="text-lg mb-4">
          Мы&nbsp;сотрудничаем с&nbsp;крупнейшими заводами Китая, Индии, Ирана,
          Армении, Узбекистана, Туркменистана и&nbsp;Вьетнама, обеспечивая
          надежные поставки по&nbsp;России. Собственное производство
          и&nbsp;автопарк позволяют контролировать качество и&nbsp;логистику.
        </p>
        <p class="text-lg mb-4">
          Наши бренды <b>&laquo;Крон&raquo;</b>,
          <b>&laquo;Крон Эксперт&raquo;</b>,
          <b>&laquo;Крон Эконом&raquo;</b> зарекомендовали себя как оптимальное
          сочетание цены и&nbsp;качества. Для удобства клиентов мы&nbsp;создали
          мобильное приложение и&nbsp;онлайн-каталог, доступный в&nbsp;любое
          время.
        </p>
        <p class="text-lg mb-4">
          <b
            >Поможем с&nbsp;импортом товаров&nbsp;&mdash; работаем напрямую
            с&nbsp;производителями.</b
          >
        </p>
      </div>
    </div>

    <div
      class="bg-[#cc5654] rounded-xl lg:h-[370px] lg:pr-14 lg:flex-row lg:mt-[130px] sm:mt-20 text-white lg:items-center align-middle flex relative sm:flex-col sm:pr-0 sm:h-auto sm:items-start sm:px-6 sm:pt-6 sm:pb-10"
    >
      <img
        src="@/assets/phone.png"
        class="lg:left-[60px] lg:top-[-50px] lg:absolute sm:relative sm:left-0 sm:top-0"
      />

      <div
        class="lg:ml-[350px] flex lg:flex-row align-middle w-[100%] justify-between sm:flex-col sm:ml-0"
      >
        <div class="flex flex-col">
          <h2
            class="sm:mb-4 lg:text-[32px] lg:leading-[42px] sm:text-[28px] sm:mt-4"
          >
            Мобильное приложение <br />на&nbsp;iOS и&nbsp;Android
          </h2>
          <p
            class="lg:text-[20px] lg:leading-[30px] sm:text-[18px] sm:leading-[26px]"
          >
            Быстрое и&nbsp;удобное оформление заказа
            <br class="sm:hidden" />через приложение.
          </p>

          <div class="flex mt-5">
            <a
              href="https://apps.apple.com/ru/app/%D0%BA%D1%80%D0%BE%D0%BD-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82-%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD/id1611541742"
              class="mr-2"
              ><img src="@/assets/apple.png"
            /></a>

            <a
              href="https://play.google.com/store/apps/details?id=com.foresko.kron"
              ><img src="@/assets/google.png"
            /></a>
          </div>
        </div>

        <div class="lg:flex ml-auto sm:hidden self-center">
          <img
            src="@/assets/qr-code.svg"
            width="220px"
            height="220px"
            class="rounded-xl bg-white p-1"
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
