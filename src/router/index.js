import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
    redirect: '/DefaultPage',
    meta: {
      requiresAuth: true
    },
    children: [{
        path: "/DefaultPage",
        name: "DefaultPage",
        component: () =>
          import( /* webpackChunkName: "DefaultPage" */ "../components/DefaultPage.vue")
      },
      {
        path: "/comprehensive-Institutions",
        name: "comprehensive-Institutions",
        component: () =>
          import( /* webpackChunkName: "comprehensive-Institutions" */ "../views/comprehensive-Institutions.vue")
      },
      {
        path: "/comprehensive-notice",
        name: "comprehensive-notice",
        component: () =>
          import( /* webpackChunkName: "comprehensive-notice" */ "../views/comprehensive-notice.vue")
      },
      {
        path: "/comprehensive-bulletin",
        name: "comprehensive-bulletin",
        component: () =>
          import( /* webpackChunkName: "comprehensive-bulletin" */ "../views/comprehensive-bulletin.vue")
      },
      {
        path: "/comprehensive-organization",
        name: "comprehensive-organization",
        component: () =>
          import( /* webpackChunkName: "comprehensive-organization" */ "../views/comprehensive-organization.vue")
      },
      {
        path: "/comprehensive-addressBook",
        name: "comprehensive-addressBook",
        component: () =>
          import( /* webpackChunkName: "comprehensive-addressBook" */ "../views/comprehensive-addressBook.vue")
      },
      {
        path: "/statistical-event",
        name: "statistical-event",
        component: () =>
          import( /* webpackChunkName: "statistical-event" */ "../views/statistical-event.vue")
      },
      {
        path: "/statistical-statement",
        name: "statistical-statement",
        component: () =>
          import( /* webpackChunkName: "statistical-statement" */ "../views/statistical-statement.vue")
      },
      {
        path: "/statistical-analyze",
        name: "statistical-analyze",
        component: () =>
          import( /* webpackChunkName: "statistical-analyze" */ "../views/statistical-analyze.vue")
      },
      {
        path: "/statistical-days",
        name: "statistical-days",
        component: () =>
          import( /* webpackChunkName: "statistical-days" */ "../views/statistical-days.vue")
      },
      {
        path: "/supervision-work",
        name: "supervision-work",
        component: () =>
          import( /* webpackChunkName: "supervision-work" */ "../views/supervision-work.vue")
      },
      {
        path: "/supervision-illegal",
        name: "supervision-illegal",
        component: () =>
          import( /* webpackChunkName: "supervision-illegal" */ "../views/supervision-illegal.vue")
      },
      {
        path: "/supervision-measures",
        name: "supervision-measures",
        component: () =>
          import( /* webpackChunkName: "supervision-measures" */ "../views/supervision-measures.vue")
      },
      {
        path: "/supervision-inspector",
        name: "supervision-inspector",
        component: () =>
          import( /* webpackChunkName: "supervision-inspector" */ "../views/supervision-inspector.vue")
      },
      {
        path: "/Hidden-process",
        name: "Hidden-process",
        component: () =>
          import( /* webpackChunkName: "Hidden-process" */ "../views/Hidden-process.vue")
      },
      {
        path: "/Hidden-screening",
        name: "Hidden-screening",
        component: () =>
          import( /* webpackChunkName: "Hidden-screening" */ "../views/Hidden-screening.vue")
      },
      {
        path: "/Hidden-analyze",
        name: "Hidden-analyze",
        component: () =>
          import( /* webpackChunkName: "Hidden-analyze" */ "../views/Hidden-analyze.vue")
      },
      {
        path: "/system-organization",
        name: "system-organization",
        component: () =>
          import( /* webpackChunkName: "system-organization" */ "../views/system-organization.vue")
      },
      {
        path: "/system-permissions",
        name: "system-permissions",
        component: () =>
          import( /* webpackChunkName: "system-permissions" */ "../views/system-permissions.vue")
      },
      {
        path: "/system-feedback",
        name: "system-feedback",
        component: () =>
          import( /* webpackChunkName: "system-feedback" */ "../views/system-feedback.vue")
      },
    ]
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      requiresAuth: false
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/Login.vue")
  },
  // {
  //   path: "/one-1",
  //   name: "One-1",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import( /* webpackChunkName: "about" */ "../views/One-1.vue")
  // },
  // {
  //   path: "/one-2",
  //   name: "One-2",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import( /* webpackChunkName: "about" */ "../views/One-2.vue")
  // },
  // {
  //   path: "/one-3",
  //   name: "One-3",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import( /* webpackChunkName: "about" */ "../views/One-3.vue")
  // },
  // {
  //   path: "/one-4",
  //   name: "One-4",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import( /* webpackChunkName: "about" */ "../views/One-4.vue")
  // },
  // {
  //   path: "/one-5",
  //   name: "One-5",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import( /* webpackChunkName: "about" */ "../views/One-5.vue")
  // },
  // {
  //   path: "/two-1",
  //   name: "Two-1",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import( /* webpackChunkName: "about" */ "../views/Two-1.vue")
  // },
  // {
  //   path: "/two-2",
  //   name: "Two-2",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import( /* webpackChunkName: "about" */ "../views/Two-2.vue")
  // },
  // {
  //   path: "/two-3",
  //   name: "Two-3",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import( /* webpackChunkName: "about" */ "../views/Two-3.vue")
  // },
  // {
  //   path: "/two-4",
  //   name: "Two-4",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import( /* webpackChunkName: "about" */ "../views/Two-4.vue")
  // },
  // {
  //   path: "/three-1",
  //   name: "Three-1",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import( /* webpackChunkName: "about" */ "../views/Three-1.vue")
  // },
  // {
  //   path: "/three-2",
  //   name: "Three-2",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import( /* webpackChunkName: "about" */ "../views/Three-2.vue")
  // },
  // {
  //   path: "/three-3",
  //   name: "Three-3",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import( /* webpackChunkName: "about" */ "../views/Three-3.vue")
  // },
  // {
  //   path: "/three-4",
  //   name: "Three-4",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import( /* webpackChunkName: "about" */ "../views/Three-4.vue")
  // },
  // {
  //   path: "/four-1",
  //   name: "Four-1",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import( /* webpackChunkName: "about" */ "../views/Four-1.vue")
  // },
  // {
  //   path: "/four-2",
  //   name: "Four-2",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import( /* webpackChunkName: "about" */ "../views/Four-2.vue")
  // },
  // {
  //   path: "/four-3",
  //   name: "Four-3",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import( /* webpackChunkName: "about" */ "../views/Four-3.vue")
  // },
  // {
  //   path: "/five-1",
  //   name: "Five-1",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import( /* webpackChunkName: "about" */ "../views/Five-1.vue")
  // },
  // {
  //   path: "/five-2",
  //   name: "Five-2",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import( /* webpackChunkName: "about" */ "../views/Five-2.vue")
  // },
  // {
  //   path: "/five-3",
  //   name: "Five-3",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import( /* webpackChunkName: "about" */ "../views/Five-3.vue")
  // },
];

const router = new VueRouter({
  routes
});
//路由守卫
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('userinfo') == null) {
      router.push({
        name: 'Login',
        query: {
          from: to.path
        }
      });
      return;
    }
  }
  next();
});
export default router;