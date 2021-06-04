import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource';
Vue.use(VueResource);

import VueRouter from 'vue-router';
Vue.use(VueRouter);


import { routes } from './routes';
import './directives/Transform';

const router = new VueRouter({
  mode: 'history',
  routes: routes
  // Em EcmaScript 6 (ES6) quando a propriedade e o valor tem o mesmo nome, pode-se declarar apenas a propriedade :: const router = new VueRouter({ routes })
});

new Vue({
  el: '#app',
  router: router, // é possível efetuar a mesma substituição utilizada em ES6
  render: h => h(App)
})
