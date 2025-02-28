<template>
  <div v-if="categoryById" class="text-base mt-8 mb-4">
    <span
      ><router-link
        to="/catalog/"
        class="border-b border-gray-900 hover:border-0 cursor-pointer"
        >Каталог</router-link
      >
      /
    </span>

    <span v-if="categoryById.__typename == 'NonRootLeafCategory'"
      ><router-link
        class="border-b border-gray-900 hover:border-0 cursor-pointer"
        :to="'/category/' + categoryById.parent.slug"
        >{{ categoryById.parent.title }}</router-link
      >
      /
    </span>
    <span
      ><router-link
        class="border-b border-gray-900 hover:border-0 cursor-pointer"
        :to="'/category/' + categoryById.slug"
        >{{ categoryById.title }}</router-link
      ></span
    >
    <span v-if="productTitle"> / {{ productTitle }}</span>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  props: {
    categoryId: String,
    productTitle: String,
  },
  apollo: {
    categoryById: {
      query: gql`
        query catById($id: ID!) {
          categoryById(id: $id) {
            __typename
            title
            slug
            ... on NonRootLeafCategory {
              parent {
                slug
                title
              }
            }
          }
        }
      `,
      variables() {
        return {
          id: this.categoryId,
        };
      },
    },
  },
  data() {
    return {
      categoryById: false,
    };
  },
};
</script>
