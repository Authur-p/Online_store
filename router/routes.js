
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '',
      component: () => import('src/pages/pageHome.vue') ,
      name: 'Home'
    },
      { path: '/Sign in',
      component: () => import('pages/pageSignIn.vue'),
      name: 'Sign In'
    },
    { path: '/view cart',
      component: () => import('pages/pageViewCart.vue'),
      name: 'View Cart'
  },
    { path: '/sign up',
      component: () => import('pages/pageSignUp.vue'),
      name: 'Sign Up'
    }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
