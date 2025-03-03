import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import apolloClient from "./plugins/apollo";
import { createApolloProvider } from "@vue/apollo-option";
import "./styles/app.css";

const pinia = createPinia();

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
});

const app = createApp(App);

app.config.warnHandler = () => null;

app.use(pinia).use(apolloProvider).use(router).mount("#app");
