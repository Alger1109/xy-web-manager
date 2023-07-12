export default [
  {
    path: 'home',
    name: 'home',
    component: 'ManagerHome',
    title: '后台首页',
    icon: 'shouye',
  },
  {
    path: 'maintenance',
    name: 'maintenance',
    component: 'PageMaintenance',
    title: '首页维护',
  },
  {
    path: 'service',
    name: 'service',
    component: 'CompanyService',
    children: [
      {
        path: 'EvaluationConsultation',
        name: 'EvaluationConsultation',
        component: () =>
          import('@/views/pages/CompanyService/EvaluationConsultation'),
      },
    ],
  },
  {
    path: 'news',
    name: 'news',
    component: () => import('@/views/pages/NewsAnnouncement'),
  },
  {
    path: 'interaction',
    name: 'interaction',
    component: () => import('@/views/pages/InfoInteraction'),
  },
  {
    path: 'about',
    name: 'about',
    component: () => import('@/views/pages/AboutUs'),
  },

  {
    path: 'basicinfo',
    name: 'basicifno',
    component: () => import('@/views/pages/BasicInfo'),
  },
  {
    path: 'setting',
    name: 'setting',
    component: () => import('@/views/pages/SystemSetting'),
  },
];
