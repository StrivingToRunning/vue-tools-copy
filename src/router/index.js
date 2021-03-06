import Vue from 'vue'
import Router from 'vue-router'
import Layouts from '@/components/Layouts'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Layouts',
      component: Layouts,
      children:[{
        path: '/todo/:id',
        name: 'todo',
        component: todo
      }]
    }]
})
