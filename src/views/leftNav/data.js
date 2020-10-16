export const leftNavData = [{
    id: 'home',
    path: '/storeManage/echarts',
    name: '首页',
    iconType: 'antd',
    icon: 'home',
    query: {},
  },
  {
    id: 'userManage',
    path: '/userManage',
    name: '用户管理',
    iconType: 'antd',
    icon: 'team',
    query: {},
    children: [

      {
        id: 'userManageList',
        path: '/userManage/list',
        name: '商家用户列表',
        iconType: 'antd',
        icon: '',
        query: {},
      },

    ]
  },

  {
    id: 'systemSet',
    path: '/systemSet',
    name: '系统设置',
    iconType: 'fa',
    icon: 'fa-cog',
    query: {},
  }
];