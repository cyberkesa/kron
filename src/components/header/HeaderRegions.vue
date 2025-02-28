<template>
  <div v-if="authInfo.region.id" class="ml-10">
    <select
      name=""
      id=""
      v-model="region"
      v-if="authInfo.viewer == 'AnonymousViewer'"
      @change="relogin()"
      class="cursor-pointer lg:border-0 lg:focused:border-0 lg:active:border-0 sm:border lg:text-base sm:text-[15px] rounded-md border-slate-300"
    >
      <option v-for="region in regions" :key="region.name" :value="region.id">
        {{ region.name }}
      </option>
    </select>
    <div v-else class="lg:ml-4 sm:ml-0">
      <span>{{ authInfo.region.name }}</span>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import { useAuth } from "@/store/useAuth";

export default {
  setup() {
    const authInfo = useAuth();

    return { authInfo };
  },
  apollo: {
    regions: gql`
      query {
        regions {
          id
          name
        }
      }
    `,
  },
  data() {
    return {
      region: this.authInfo.region.id,
      regions: {},
    };
  },
  methods: {
    relogin() {
      this.authInfo.logInGuest(this.region);
    },
  },
  created() {
    this.authInfo.getViewer();
  },
  updated() {
    if (!this.region) {
      this.region = this.authInfo.region.id;
    }
  },
};
</script>
