<template>
  <div class="section-animate flex flex-col lg:flex-row justify-between mt-20">
    <div class="w-full lg:w-1/4">
      <h2 class="mb-6 text-2xl lg:text-3xl font-bold text-gray-900">
        {{ title }}
      </h2>
    </div>
    <div class="w-full lg:w-3/5">
      <p
        v-for="(paragraph, index) in paragraphs"
        :key="index"
        class="text-lg text-gray-700 mb-6 leading-relaxed"
      >
        <span v-html="paragraph"></span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutSection",
  props: {
    title: {
      type: String,
      default: "О компании",
    },
    paragraphs: {
      type: Array,
      default: () => [
        "<b>Компания «Крон»</b> — динамично развивающийся производитель и прямой экспортер хозяйственных товаров, а также товаров для сада и огорода.",
        "Мы сотрудничаем с крупнейшими заводами Китая, Индии, Ирана, Армении, Узбекистана, Туркменистана и Вьетнама, обеспечивая надежные поставки по России. Собственное производство и автопарк позволяют контролировать качество и логистику.",
        "Наши бренды <b>«Крон»</b>, <b>«Крон Эксперт»</b>, <b>«Крон Эконом»</b> зарекомендовали себя как оптимальное сочетание цены и качества. Для удобства клиентов мы создали мобильное приложение и онлайн-каталог, доступный в любое время.",
        "<b>Поможем с импортом товаров — работаем напрямую с производителями.</b>",
      ],
    },
  },
};
</script>
