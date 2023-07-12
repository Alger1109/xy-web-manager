const routerData = [
  // 后台首页
  {
    path: '/',
    name: 'home',
    component: 'ManagerHome',
    label: '后台首页',
    icon: 'setting',
  },
  // 首页维护
  {
    path: '/maintenance',
    name: 'maintenance',
    component: 'PageMaintenance',
    label: '首页维护',
    icon: 'setting',
  },
  // 公司服务
  {
    path: '/service',
    name: 'service',
    component: 'CompanyService',
    label: '公司服务',
    icon: 'setting',
  },
  // 新闻公告
  {
    path: '/news',
    name: 'news',
    component: 'NewsAnnouncement',
    label: '新闻公告',
    icon: 'setting',
  },
  // 信息互动
  {
    path: '/interaction',
    name: 'interaction',
    component: 'InfoInteraction',
    label: '信息互动',
    icon: 'setting',
  },
  // 关于我们
  {
    path: '/about',
    name: 'about',
    component: 'AboutUs',
    label: '关于我们',
    icon: 'setting',
  },
  // 基础信息
  {
    path: '/basicinfo',
    name: 'basicinfo',
    component: 'BasicInfo',
    label: '基础信息',
    icon: 'setting',
  },
  //系统设置
  {
    path: '/setting',
    name: 'setting',
    component: 'SystemSetting',
    label: '系统设置',
    icon: 'setting',
  },
];

// 顶部导航数据
const topnavs = [
  // 公司服务
  {
    name: 'service',
    children: [
      {
        id: 0,
        label: '评价咨询',
      },
      {
        id: 1,
        label: '园区管家',
      },
      {
        id: 2,
        label: '工程服务',
      },
      {
        id: 3,
        label: '培训服务',
      },
      {
        id: 1,
        label: '工业互联网+',
      },
    ],
  },
  // 新闻公告
  {
    name: 'news',
    children: [
      {
        id: 0,
        label: '祥源新闻',
        chilren: [
          {
            label: '公司新闻',
          },
          {
            label: '行业动态',
          },
        ],
      },
      {
        id: 1,
        label: '祥源公告',
      },
      {
        id: 2,
        label: '祥源公示',
      },
    ],
  },
];
