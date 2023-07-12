import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/ManagerLogin'),
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

// 添加动态路由
let dynamicRoutesData = [];
function AddRoute(AddRouterData) {
  let storeData = [];
  AddRouterData.map((item) => {
    let obj = {
      path: item.path,
      name: item.name,
      component: () => import(`@/views/pages/${item.component}`),
      meta: { label: item.label },
    };
    if (item.redirect) {
      obj.redirect = item.redirect;
    }
    if (item.icon) {
      obj.meta.icon = item.icon;
    }
    storeData.push(obj);
  });
  return storeData;
}
dynamicRoutesData = AddRoute(routerData);
router.addRoutes(dynamicRoutesData);
export default router;
