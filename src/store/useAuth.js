import { defineStore } from "pinia";
import gql from "graphql-tag";
import apolloClient from "../plugins/apollo";

export const useAuth = defineStore("auth", {
  state: () => ({
    viewer: "",
    region: {},
    userEmail: "",
    userPhone: "",
    startCheckout: false,
    isLogin: false,
    isLogout: false,
    isAuth: false,
  }),

  actions: {
    logInGuest(regionId) {
      apolloClient
        .mutate({
          mutation: gql`mutation {
              logInAsGuest(regionId: "${regionId}") {
                ...on LogInAsGuestSuccessResult {
                  accessToken
                  refreshToken
                }
              }
            }`,
        })
        .then((data) => {
          console.log("Залогинились как гость, ставим локал");
          localStorage.setItem(
            "token",
            "Bearer " + data.data.logInAsGuest.accessToken
          );
          localStorage.setItem("refresh", data.data.logInAsGuest.refreshToken);
          localStorage.setItem("isLogin", 0);
          this.$router.push("/");
          apolloClient.resetStore().then(() => {
            console.log("RESET STORE");
            this.isLogin = false;
            this.getViewer();
            if (this.isLogout) {
              this.isLogout = false;
              window.location.href = "/";
              console.log(this.isLogout + "EXIT");
            }
          });
        });
    },
    refreshToken() {
      apolloClient.stop();
      console.log("START REFRESH");
      let token = localStorage.getItem("refresh");
      localStorage.setItem("token", "");
      apolloClient.resetStore().then(() => {
        apolloClient
          .mutate({
            mutation: gql`mutation {
                      refreshAccessToken(refreshToken: "${token}") {
                          ...on RefreshAccessTokenSuccessResult {
                              accessToken
                              refreshToken
                          }
                      }
                  }`,
          })
          .then((data) => {
            localStorage.setItem(
              "token",
              "Bearer " + data.data.refreshAccessToken.accessToken
            );
            localStorage.setItem(
              "refresh",
              data.data.refreshAccessToken.refreshToken
            );
            window.location.reload();
          });
      });
    },
    getViewer() {
      apolloClient
        .query({
          query: gql`
            query {
              viewer {
                __typename
                ... on AnonymousViewer {
                  region {
                    id
                    name
                  }
                }
                ... on RegisteredViewer {
                  region {
                    id
                    name
                  }
                  emailAddress
                  phoneNumber
                }
              }
            }
          `,
          error(data) {
            console.log("ERORR!" + data);
            this.$router.go(0);
          },
        })
        .then((data) => {
          this.viewer = data.data.viewer.__typename;
          this.region = data.data.viewer.region;
          if (data.data.viewer.__typename == "RegisteredViewer") {
            localStorage.setItem("isLogin", 1);
            this.userEmail = data.data.viewer.emailAddress;
            this.userPhone = data.data.viewer.phoneNumber;
            this.isLogin = true;
          } else {
            localStorage.setItem("isLogin", 0);
          }
        });
    },
    logOut() {
      apolloClient
        .mutate({
          mutation: gql`
            mutation {
              logOut {
                __typename
              }
            }
          `,
        })
        .then((data) => {
          if (data.data.logOut.__typename == "LogOutSuccessResult") {
            localStorage.setItem("token", "");
            localStorage.setItem("refresh", "");
            window.location.href = "/";
          }
        });
    },
    checkViewer() {
      apolloClient
        .query({
          query: gql`
            query {
              viewer {
                __typename
              }
            }
          `,
        })
        .then((data, error) => {
          console.log(data);
          console.log(error);
        });
    },
  },
});
