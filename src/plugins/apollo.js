import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { useAuth } from "../store/useAuth";

const resetToken = onError(({ response, networkError }) => {
  const auth = useAuth();

  if (networkError && networkError.statusCode === 401) {
    auth.refreshToken();
    console.log("CATCH 401 in APOLLO:" + response);
  }
});

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: "https://api.tovari-kron.ru/v1/graphql",
});

// Cache implementation
const cache = new InMemoryCache();

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: globalThis.localStorage.getItem("token") || "",
    },
  };
});

const authFlowLink = authLink.concat(resetToken);

const link = authFlowLink.concat(httpLink);

console.log("apollocreate!");
// Create the apollo client
const apolloClient = new ApolloClient({
  link,
  cache,
});

export default apolloClient;
