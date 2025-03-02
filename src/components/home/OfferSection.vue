<template>
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
</template>

<script>
export default {
  name: "OfferSection",
};
</script>
