const findpwd = r =>require.ensure([],()=>r(require('../page/findpwd')),'findpwd')
const register = r =>require.ensure([],()=>r(require('../page/register')),'register')
const login = r =>require.ensure([],()=>r(require('../page/login')),'login')
const index = r =>require.ensure([],()=>r(require('../page/index')),'index')
const business = r =>require.ensure([],()=>r(require('../page/business/business')),'business')
const mchntCenter = r =>require.ensure([],()=>r(require('../page/mchntCenter/mchntCenter')),'mchntCenter')
const flow = r =>require.ensure([],()=>r(require('../page/mchntCenter/children/flow')),'flow')
const count = r =>require.ensure([],()=>r(require('../page/mchntCenter/children/count')),'count')
const mchntVip = r =>require.ensure([],()=>r(require('../page/mchntVip/mchntVip')),'mchntVip')
export default [
    {
      path:'',
      redirect:'/index'
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
      }]
    },{
      path:'/mchntVip',
      component:mchntVip
    }
]
