import { createRouter, createWebHistory } from "vue-router";
const getAuthStore = () => useAuth();
const getCartStore = () => useCart();

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/HomeView.vue"),
  },
  {
    path: "/catalog/",
    name: "catalog",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/CatalogView.vue"),
  },
  {
    path: "/category/:categorySlug",
    name: "category",
    component: () =>
      import(/* webpackChunkName: "category" */ "../views/CategoryView.vue"),
  },
  {
    path: "/user/",
    name: "user",
    component: () =>
      import(/* webpackChunkName: "user" */ "../views/UserView.vue"),
  },
  {
    path: "/category/:categorySlug/product/:productSlug",
    name: "product",
    component: () =>
      import(/* webpackChunkName: "product" */ "../views/ProductView.vue"),
  },
  {
    path: "/search/:searchQuery",
    name: "search",
    component: () =>
      import(/* webpackChunkName: "search" */ "../views/SearchView.vue"),
  },
  {
    path: "/login/",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
  },
  {
    path: "/registration/",
    name: "registration",
    component: () =>
      import(
        /* webpackChunkName: "registration" */ "../views/RegistrationView.vue"
      ),
  },
  {
    path: "/cart/",
    name: "cart",
    component: () =>
      import(/* webpackChunkName: "cart" */ "../views/CartView.vue"),
  },
  {
    path: "/checkout/",
    name: "checkout",
    component: () =>
      import(/* webpackChunkName: "checkout" */ "../views/CheckoutView.vue"),
  },
  {
    path: "/password-reset/",
    name: "password-reset",
    component: () =>
      import(
        /* webpackChunkName: "password-reset" */ "../views/PasswordResetView.vue"
      ),
  },
  {
    path: "/user/addresses",
    name: "addresses",
    component: () =>
      import(
        /* webpackChunkName: "password-reset" */ "../views/AdressesView.vue"
      ),
  },
  {
    path: "/policy",
    name: "policy",
    component: () =>
      import(
        /* webpackChunkName: "password-reset" */ "../views/PolicyView.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

router.beforeEach(async (to, from) => {
  let isLogin = localStorage.getItem("isLogin") == "0" ? false : true;

  if (isLogin && (to.name == "login" || to.name == "registration")) {
    return { name: "home" };
  }

  if (!isLogin && (to.name == "user" || to.name == "addresses")) {
    return { name: "home" };
  }

  if (
    !isLogin &&
    to.name == "checkout" &&
    (from.name != "registration" || from.name != "login")
  ) {
    getAuthStore().startCheckout = true;
    return { name: "login" };
  }

  if (
    getCartStore().cartCount == 0 &&
    getAuthStore().startCheckout != true &&
    to.name == "checkout" &&
    (from.name != "registration" || from.name != "login")
  ) {
    return { name: "home" };
  }

  if (
    getAuthStore().startCheckout == true &&
    to.name == "checkout" &&
    !isLogin
  ) {
    getAuthStore().startCheckout = false;
  }

  if (
    getAuthStore().startCheckout == true &&
    to.name != "registration" &&
    to.name != "login" &&
    (from.name == "registration" || from.name == "login")
  ) {
    getAuthStore().startCheckout = false;
  }
});

export default router;
