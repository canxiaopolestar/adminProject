import storeManage from '@/views/mainContent/storeManage'
import storeManageEcharts from '@/views/mainContent/storeManage/echarts'


// import storeManageMemer from '@/views/mainContent/storeManage/member'

export default {
  path: '/storeManage',
  component: storeManage,
  exact: true,
  children: [{
    path: '/storeManage/echarts',
    component: storeManageEcharts,
    exact: true,
  }, ]
}