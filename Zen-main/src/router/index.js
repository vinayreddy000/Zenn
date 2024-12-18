import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomePage.vue'
import { getCurrentUser } from 'vuefire'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      meta: {requiresAuth:true },
      path: '/',
      name: 'home',
      component: HomeView,
      props: true,
    }, 
    {
      meta:{requiresAuth:true },
      path: '/profile',
      name: 'profile',
      component: () => import('../views/Profile.vue')
    },
    {
      meta:{requiresAuth:true },
      path: '/settings',
      name: 'settings',
      component: () => import('../views/settings.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('../views/SignIn.vue')
    },
    {
      meta:{requiresAuth:true , transition:'fade'},
      path: '/start',
      name: 'start',
      component: () => import('../views/Start.vue')
    },
    {
      meta:{requiresAuth:true},
      path: '/reward',
      name: 'reward',
      component: () => import('../views/Reward.vue'),
      props: true
    }
  ]
})

router.beforeEach(async (to) => {
  if (to.meta.requiresAuth) {
    const currentUser = await getCurrentUser()
    if (!currentUser) {
      return {
        path: '/signin',
      }
    }
  }
})

export default router
