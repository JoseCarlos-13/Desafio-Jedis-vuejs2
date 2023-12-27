import Vue from 'vue';
import Router from 'vue-router';
import MunicipeListView from '../views/MunicipeListView.vue'
import NewMunicipeFormView from '../views/NewMunicipeFormView.vue'
import MunicipeDetailsView from '../views/MunicipeDetailsView.vue'

Vue.use(Router)

export default new Router({
  history: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: MunicipeListView
    },

    {
      path: '/register-municipe',
      name: 'Register Municipe',
      component: NewMunicipeFormView
    },

    {
      path: '/selected-municipe/:municipe_id',
      name: 'Selected Municipe',
      component: MunicipeDetailsView
    }
  ]
})
