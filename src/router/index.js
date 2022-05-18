import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LoginNew',
    component: () => import('../views/LoginNew.vue'),
    // redirect: '/phone',  // 添加这个字段，可以让 router-view 显示默认页面
    children: [
      {
        path: '/phone',
        name: 'LoginWithPhone',
        component: () => import('../components/LoginWithPhone.vue')
      },
      {
        path: '/email',
        name: 'LoginWithEmail',
        component: () => import('../components/LoginWithEmail.vue')
      },
      {
        path: '/register',
        name: 'LoginWithRegister',
        component: () => import('../components/LoginWithRegister.vue')
      },
      {
        path: '/forget',
        name: 'LoginWithForget',
        component: () => import('../components/LoginWithForget.vue')
      }
    ]
  },
  {
    path: '/manage',
    name: 'Manage',
    component: () => import('../views/Manage.vue'),
    redirect: '/home',  // 添加这个字段，可以让 router-view 显示默认页面
    meta: {
      requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
    },
    children: [
      {
        path: '/aside',
        name: 'Aside',
        component: () => import('../components/Aside.vue')
      },
      {
        path: '/header',
        name: 'Header',
        component: () => import('../components/Header.vue')
      },
      {
        path: '/home',
        name: 'Home',
        component: () => import('../components/Home.vue'),
      },
      {
        path: '/user',
        name: 'User',
        component: () => import('../components/User.vue')
      },
      {
        path: '/book',
        name: 'Book',
        component: () => import('../components/Book.vue')
      },

      {
        path: '/hobby',
        name: 'Hobby',
        component: () => import('../components/Hobby.vue')
      },

      {
        path: '/file',
        name: 'File',
        component: () => import('../components/File.vue')
      },
      {
        path: '/setting',
        name: 'Setting',
        component: () => import('../components/Setting.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    /* webpackChunkName: "about" */
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
