<template>
  <div>
    <h3 class="mb-2">{{ title }}</h3>
    <div class="flex flex-col lg:flex-row justify-between">
      <div
        v-for="(contact, index) in contacts"
        :key="index"
        class="flex flex-col lg:m-0 sm:mt-5 sm:w-full lg:w-[25%]"
      >
        <span class="text-[15px] lg:font-normal sm:font-semibold">{{
          contact.label
        }}</span>
        <div class="flex content-center items-center lg:pt-5 sm:pt-1">
          <component :is="contact.icon" />
          <span class="text-[15px] ml-3">{{ contact.value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    contacts: {
      type: Array,
      required: true,
    },
  },
};
</script>
