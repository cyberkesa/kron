# 🚀 Vite + Vue 3 + GraphQL + Pinia

Online store frontend built with Vue 3, using Apollo Client for GraphQL API interaction. The project utilizes Pinia for state management, Vue Router for routing, and TailwindCSS for styling.

## 📌 Tech Stack

- **Frontend:** Vite, Vue 3, Vue Router, Pinia
- **API:** Apollo Client, GraphQL
- **Styling:** TailwindCSS
- **UI Libraries:** Swiper, Vue-Slick-Carousel, Hooper
- **Other:** Vue Meta, Vue Password, Vue Yandex Metrika

# Eslint@9.21.0

### **Documentation:** https://eslint.org/docs/latest/

## Eslint cmds:

- yarn eslint .
- yarn eslint . --fix
- yarn eslint . --cache --cache-location .eslintcache

# Prettier@2.8.8

## Prettier cmds:

- yarn prettier --write .

About structure:

### .

### ├── README.md

### ├── babel.config.js

### ├── eslint.config.js

### ├── index.html

### ├── jsconfig.json

### ├── package.json

### ├── postcss.config.js

### ├── public

### │ ├── big-logo.png

### │ ├── favicon.ico

### │ └── no-image.jpg

### ├── src

### │ ├── App.vue

### │ ├── assets

### │ │ ├── apple.png

### │ │ ├── arrow-right.svg

### │ │ ├── big-logo.png

### │ │ ├── cart.svg

### │ │ ├── down.svg

### │ │ ├── google.png

### │ │ ├── kron_rf.png

### │ │ ├── logo.png

### │ │ ├── no-image.jpg

### │ │ ├── phone.png

### │ │ ├── qr-code.svg

### │ │ ├── search.svg

### │ │ └── user.svg

### │ ├── components

### │ │ ├── AddToCart.vue

### │ │ ├── BreadcrumbsLinks.vue

### │ │ ├── CartItem.vue

### │ │ ├── DeliveryAdress.vue

### │ │ ├── SearchList.vue

### │ │ ├── category

### │ │ ├── footer

### │ │ ├── header

### │ │ └── home

### │ ├── fonts

### │ │ ├── SFProDisplay-Semibold.woff

### │ │ ├── SFProDisplay-Semibold.woff2

### │ │ ├── SFProText-Medium.woff

### │ │ ├── SFProText-Medium.woff2

### │ │ ├── SFProText-Regular.woff

### │ │ ├── SFProText-Regular.woff2

### │ │ ├── SFProText-Semibold.woff

### │ │ └── SFProText-Semibold.woff2

### │ ├── main.js

### │ ├── plugins

### │ │ └── apollo.js

### │ ├── router

### │ │ └── index.js

### │ ├── store

### │ │ ├── useAuth.js

### │ │ └── useCart.js

### │ ├── styles

### │ │ └── app.css

### │ └── views

### │ ├── AdressesView.vue

### │ ├── CartView.vue

### │ ├── CatalogView.vue

### │ ├── CategoryView.vue

### │ ├── CheckoutView.vue

### │ ├── HomeView.vue

### │ ├── LoginView.vue

### │ ├── PasswordResetView.vue

### │ ├── PolicyView.vue

### │ ├── ProductView.vue

### │ ├── RegistrationView.vue

### │ ├── SearchView.vue

### │ └── UserView.vue

### ├── tailwind.config.js

### ├── vite.config.js

### └── yarn.lock

# Packages:

# {

# "name": "kron",

# "version": "1.0.0",

# "private": true,

# "scripts": {

# "dev": "vite",

# "build": "vite build",

# "serve": "vite preview",

# "lint": "eslint . --fix"

# },

# "dependencies": {

# "@apollo/client": "^3.8.0",

# "@vue/apollo-composable": "^4.0.0",

# "@vueuse/head": "^1.1.25",

# "axios": "^1.3.4",

# "graphql": "^16.6.0",

# "pinia": "^2.0.23",

# "swiper": "^11.0.5",

# "tailwindcss": "^3.4.1",

# "v-lazy-image": "^2.1.1",

# "vue": "^3.3.4",

# "vue-router": "^4.2.2",

# "vue3-burger-menu": "^1.1.1",

# "vue3-slide-up-down": "^2.1.0"

# },

# "devDependencies": {

# "@vitejs/plugin-vue": "^4.2.3",

# "autoprefixer": "^10.4.15",

# "eslint": "^8.51.0",

# "eslint-plugin-vue": "^9.19.1",

# "postcss": "^8.4.32",

# "postcss-nesting": "^13.0.1",

# "prettier": "^3.5.3",

# "vite": "^4.5.0"

# }

# }
