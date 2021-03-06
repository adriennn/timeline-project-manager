import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import User from '@/components/User'
import About from '@/components/About'
import Settings from '@/components/Settings'

Vue.use(Router);

export default new Router({
  routes: [
      { path: '/'        , name:     'Home'    , component: Home     }
    , { path: '/user'    , name:     'User'    , component: User     }
    , { path: '/about'   , name:     'About'   , component: About    }
    , { path: '/settings', name:     'Settings', component: Settings }
    , { path: '*'        , redirect: '/'                             }
  ],
  scrollBehavior (to, from, savedPosition) {
    return !savedPosition ? { x: 0, y: 0 } : savedPosition
  }
});
