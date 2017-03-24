import App from '../App'

const index = r =>require.ensure([],()=>r(require('../page/index/index')),'index')
const personal = r =>require.ensure([],()=>r(require('../page/personal/personal')),'personal')
const friends = r =>require.ensure([],()=>r(require('../page/friends/friends')),'friends')
const settings = r =>require.ensure([],()=>r(require('../page/settings/settings')),'settings')
export default [
    {
      path:'',
      redirect:'/index'
    },{
      path:'/index',
      component:index
    },{
      path:'/settingPage',
      component:settings
    },{
      path:'/friends',
      component:friends
    },{
      path:'/personal',
      component:personal
    }
]
