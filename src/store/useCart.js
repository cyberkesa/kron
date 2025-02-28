import { defineStore } from 'pinia'
import gql from 'graphql-tag'
import apolloClient from "../plugins/apollo"

export const useCart = defineStore('cart', {

    state: () => ({
        cart: [], 
        cartCount: 0,
        cartPrice: 0,
      }),

    actions: {
        refreshCart() {
          apolloClient.query({
            query: gql`
                query {
                    cart {
                      itemNodes {
                        product {
                          Id
                        }
                        quantity
                      }
                    items(first: 100) {
                      totalQuantity
                      hasUnavailableForCheckoutProducts
                      totalPrice
                    }
                  }
                }`,
            fetchPolicy: "no-cache",
            loadingKet: 'cartRefresh'
        })
                .then((data) => {
                    
              this.cart = data.data.cart.itemNodes.map(function(x) { let obj = {}; obj[x.product.Id] = x.quantity; return obj;});
              this.cartCount = data.data.cart.items.totalQuantity;
              this.cartPrice = data.data.cart.items.totalPrice;
            })

        },
    }
  })