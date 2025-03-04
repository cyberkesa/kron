<template>
  <div>
    <h3 class="mb-2 text-lg font-bold">{{ title }}</h3>
    <div class="flex flex-col lg:flex-row justify-between gap-6 lg:gap-12">
      <div
        v-for="(contact, index) in contacts"
        :key="index"
        class="flex flex-col lg:m-0 flex-1"
      >
        <span class="text-sm font-medium">{{ contact.label }}</span>
        <div class="flex items-center pt-2">
          <component :is="contact.icon" />
          <span class="text-sm ml-3">{{ contact.value }}</span>
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
