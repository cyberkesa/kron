<template>
  <div class="relative w-56">
    <div
      @click="toggleDropdown"
      class="flex items-center justify-between border rounded-lg cursor-pointer px-4 py-2 bg-white shadow-md transition-all hover:shadow-lg focus:ring focus:ring-red-300"
    >
      <span>{{ selectedLabel }}</span>
      <ChevronDownIcon
        :class="{ 'rotate-180': isOpen }"
        class="w-5 h-5 transition-transform"
      />
    </div>

    <!-- Выпадающее меню -->
    <transition name="fade">
      <ul
        v-if="isOpen"
        class="absolute left-0 mt-2 w-full bg-white border rounded-lg shadow-lg overflow-hidden"
      >
        <li
          v-for="(option, index) in options"
          :key="index"
          @click="selectOption(option.value)"
          class="px-4 py-2 cursor-pointer hover:bg-red-100 transition"
        >
          {{ option.label }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { ChevronDownIcon } from "@heroicons/vue/24/solid";

const props = defineProps({
  modelValue: String,
  options: Array,
});
const emit = defineEmits(["update:modelValue"]);

const isOpen = ref(false);

const selectedLabel = computed(() => {
  return (
    props.options.find((option) => option.value === props.modelValue)?.label ||
    "Выберите..."
  );
});

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (value) => {
  emit("update:modelValue", value);
  isOpen.value = false;
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
