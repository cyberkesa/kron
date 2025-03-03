<template>
  <footer class="bg-[#F6F8FC]">
    <div class="container mx-auto py-16">
      <div class="flex flex-col lg:flex-row justify-between">
        <div class="mr-28">
          <router-link to="/">
            <img src="@/assets/logo.png" alt="Логотип" />
          </router-link>
        </div>

        <div class="flex flex-col w-[75%]">
          <h2 class="sr-only">Контакты</h2>
          <ContactSection
            title="Москва"
            :contacts="moscowContacts"
            class="mb-10"
          />
          <ContactSection
            title="Ставропольский край"
            :contacts="stavropolContacts"
          />
        </div>
      </div>

      <div
        class="flex justify-between text-slate-600 pt-16 text-[13px] flex-col lg:flex-row"
      >
        <span>© {{ currentYear }} ООО "КРОН"</span>
        <router-link to="/policy"
          >Политика обработки персональных данных</router-link
        >
      </div>
    </div>
  </footer>
</template>

<script>
import { defineComponent, computed } from "vue";
import ContactSection from "./ContactSection.vue";
import PhoneIcon from "./icons/PhoneIcon.vue";
import EmailIcon from "./icons/EmailIcon.vue";
import AddressIcon from "./icons/AddressIcon.vue";

export default defineComponent({
  components: {
    ContactSection,
  },
  setup() {
    const currentYear = new Date().getFullYear();

    const moscowContacts = computed(() => [
      { icon: PhoneIcon, label: "Телефон", value: "+7(495) 799-26-66" },
      { icon: EmailIcon, label: "Почта", value: "info@tovari-kron.ru" },
      {
        icon: AddressIcon,
        label: "Адрес",
        value: "Домодедовское шоссе, 4-й километр, 15Б",
      },
    ]);

    const stavropolContacts = computed(() => [
      { icon: PhoneIcon, label: "Телефон", value: "+7(903) 418-16-66" },
      { icon: EmailIcon, label: "Почта", value: "ug@tovari-kron.ru" },
      {
        icon: AddressIcon,
        label: "Адрес",
        value: "с. Надежда, ул. Орджоникидзе 79",
      },
    ]);

    return { currentYear, moscowContacts, stavropolContacts };
  },
});
</script>
