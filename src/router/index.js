const findpwd = r =>require.ensure([],()=>r(require('../page/findpwd')),'findpwd')
const register = r =>require.ensure([],()=>r(require('../page/register')),'register')
const login = r =>require.ensure([],()=>r(require('../page/login')),'login')
const index = r =>require.ensure([],()=>r(require('../page/index')),'index')
const business = r =>require.ensure([],()=>r(require('../page/business/business')),'business')
const mchntCenter = r =>require.ensure([],()=>r(require('../page/mchntCenter/mchntCenter')),'mchntCenter')
const flow = r =>require.ensure([],()=>r(require('../page/mchntCenter/children/flow')),'flow')
const count = r =>require.ensure([],()=>r(require('../page/mchntCenter/children/count')),'count')

const detailFlow = r =>require.ensure([],()=>r(require('../page/mchntCenter/children/detailFlow')),'detailFlow')
const mchntVip = r =>require.ensure([],()=>r(require('../page/mchntVip/mchntVip')),'mchntVip')
const addVip = r =>require.ensure([],()=>r(require('../page/mchntVip/children/vipAdd')),'addVip')
const detailVip = r =>require.ensure([],()=>r(require('../page/mchntVip/children/detailVip')),'detailVip')
const settings = r =>require.ensure([],()=>r(require('../page/settings/settings')),'settings')
const changePwd = r =>require.ensure([],()=>r(require('../page/settings/children/changePwd')),'changePwd')

export default [
    {
      path:'',
      redirect:'/login'
    },{
      path:'/index',
      component:index
    },{
      path:'/login',
      component:login
    },{
      path:'/register',
      component:register
    },{
      path:'/findpwd',
      component:findpwd
    },{
      path:'/business',
      component:business
    },{
      path:'/mchntCenter',
      component:mchntCenter,
      children:[{
        path:'flow',
        component:flow,
      },{
        path:'count',
        component:count,
      },{
        path:'detailFlow',
        component:detailFlow,
      }]
    },{
      path:'/mchntVip',
      component:mchntVip,
      children:[{
        path:'addVip',
        component:addVip,
      },{
        path:'detailVip',
        component:detailVip,
      }]
    },{
      path:'/settings',
      component:settings,
      children:[{
        path:'changePwd',
        component:changePwd,
      }]
    }
]
