import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "home", component: () => import("@/views/HomeView.vue") },
  {
    path: "/catalog",
    name: "catalog",
    component: () => import("@/views/CatalogView.vue"),
  },
  {
    path: "/category/:categorySlug",
    name: "category",
    component: () => import("@/views/CategoryView.vue"),
  },
  {
    path: "/user",
    name: "user",
    component: () => import("@/views/UserView.vue"),
  },
  {
    path: "/category/:categorySlug/product/:productSlug",
    name: "product",
    component: () => import("@/views/ProductView.vue"),
  },
  {
    path: "/search/:searchQuery",
    name: "search",
    component: () => import("@/views/SearchView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginView.vue"),
  },
  {
    path: "/registration",
    name: "registration",
    component: () => import("@/views/RegistrationView.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("@/views/CartView.vue"),
  },
  {
    path: "/checkout",
    name: "checkout",
    component: () => import("@/views/CheckoutView.vue"),
  },
  {
    path: "/password-reset",
    name: "password-reset",
    component: () => import("@/views/PasswordResetView.vue"),
  },
  {
    path: "/user/addresses",
    name: "addresses",
    component: () => import("@/views/AdressesView.vue"),
  },
  {
    path: "/policy",
    name: "policy",
    component: () => import("@/views/PolicyView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from) => {
  const isLogin = globalThis.localStorage.getItem("isLogin") !== "0";

  if (isLogin && (to.name === "login" || to.name === "registration")) {
    return { name: "home" };
  }

  if (!isLogin && (to.name === "user" || to.name === "addresses")) {
    return { name: "home" };
  }

  return true;
});

export default router;
