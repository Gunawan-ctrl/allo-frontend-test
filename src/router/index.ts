
import { createRouter, createWebHistory } from 'vue-router'

import MainLayout from '@/layouts/MainLayout.vue'
import RocketListPage from '@/pages/RocketListPage.vue'
import RocketDetailPage from '@/pages/RocketDetailPage.vue'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: RocketListPage,
          meta: {
            title: 'Home',
          },
        },
        {
          path: 'rockets/:id',
          name: 'rocket-detail',
          component: RocketDetailPage,
          props: true,
          meta: {
            title: 'Rocket Details',
          },
        },
      ],
    },
  ],

  scrollBehavior() {
    return {
      top: 0,
      behavior: 'smooth',
    }
  },
})

router.beforeEach((to) => {
  document.title = `${String(to.meta.title)} | Rocket Explorer`
})

export default router
