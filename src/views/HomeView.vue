<template>
  <div class="home lg:px-0 sm:px-5">
    <div
      class="bg-[#cc5654] rounded-xl text-white lg:text-center lg:py-14 lg:mt-10 sm:text-left sm:px-5 sm:py-8"
    >
      <img
        src="@/assets/big-logo.png"
        alt=""
        class="w-[320px] lg:mx-auto block sm:ml-0"
      />
      <h1 class="lg:text-[42px] font-semibold mb-2 sm:text-[32px]">
        Интернет-магазин компании “КРОН”
      </h1>
      <p class="text-2xl mb-2">Заказ товаров для сада и огорода, онлайн</p>
      <p class="text-lg">Мы работаем - вы зарабатываете!</p>

      <div class="mb-6 w-[300px] lg:mx-auto mt-8 sm:ml-0">
        <router-link
          to="/catalog/"
          class="bg-white rounded-full text=[15px] py-4 text-[#222] text-base font-semibold block text-center hover:opacity-90"
          >Перейти в каталог →</router-link
        >
      </div>
    </div>

    <div
      class="flex lg:flex-row justify-between lg:p-10 border-2 border-[#E1E4ED] rounded-xl mt-20 sm:flex-col sm:p-5"
    >
      <div class="lg:w-3/4 pr-10 sm:w-full lg:mb-0 sm:mb-2">
        <h2 class="sm:mb-2 lg:text-[32px] sm:text-2xl lg:leading-[42px]">
          Напишите нам и получите индивидуальное предложение на нашу продукцию
        </h2>
        <p class="text-lg">
          Чтобы получить доступ к оптовым ценам, напишите нам используя удобный
          для вас канал связи.
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
          class="bg-[#CC5654] rounded-full text=[15px] mt-6 py-2 text-[#fff] text-base font-semibold block text-center hover:opacity-90"
          >Написать в WhatsApp →</a
        >
      </div>
    </div>

    <div class="flex lg:flex-row justify-between mt-20 sm:flex-col">
      <div class="lg:w-1/4 sm:w-full">
        <h2 class="sm:mb-6 lg:text-[32px] sm:text-2xl">О компании</h2>
      </div>
      <div class="lg:w-3/4 sm:w-full">
        <p class="text-lg mb-4">
          Компания Крон - это быстро развивающаяся компания, которая насчитывает
          штат из более 50 сотрудников по всей России, имеет собственный парк
          автомобилей, а так же собственное производство товаров народного
          потребления в России.
        </p>
        <p class="text-lg mb-4">
          Является прямым экспортером крупнейших производителей Китая, Индии,
          Ирана, Армении, Узбекистана, Туркменистана и Вьетнама в сфере товаров
          для сада и огорода, а так же хозяйственных товаров. Наши марки под
          брендом “Крон”, “Крон эксперт”, “Крон эконом” зарекомендовали себя на
          рынке как лучшее соотношение цены и качества. Мы так можем помочь вам
          импортировать товары из выше перечисленных стран.
        </p>
        <p class="text-lg mb-4">
          Наше преимущество в том, что мы шагаем в ногу со временем и для
          удобства наших клиентов разработали приложения и онлайн каталог, где
          вы можете ознакомиться с ассортиментом в удобное для вас время.
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
            Мобильное приложение <br />на iOS и Android
          </h2>
          <p
            class="lg:text-[20px] lg:leading-[30px] sm:text-[18px] sm:leading-[26px]"
          >
            Быстрое и удобное оформление заказа <br class="sm:hidden" />через
            приложение.
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
