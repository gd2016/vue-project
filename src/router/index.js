/*按需加载*/
// const findpwd     = r =>require.ensure([],()=>r(require('../page/findpwd')),'findpwd')
// const register    = r =>require.ensure([],()=>r(require('../page/register')),'register')
// const login       = r =>require.ensure([],()=>r(require('../page/login')),'login')
// const index       = r =>require.ensure([],()=>r(require('../page/index')),'index')
// const business    = r =>require.ensure([],()=>r(require('../page/business/business')),'business')
// const payment     = r =>require.ensure([],()=>r(require('../page/business/children/payment')),'payment')
// const mchntCenter = r =>require.ensure([],()=>r(require('../page/mchntCenter/mchntCenter')),'mchntCenter')
// const flow        = r =>require.ensure([],()=>r(require('../page/mchntCenter/children/flow')),'flow')
// const count       = r =>require.ensure([],()=>r(require('../page/mchntCenter/children/count')),'count')
// const detailFlow  = r =>require.ensure([],()=>r(require('../page/mchntCenter/children/detailFlow')),'detailFlow')
// const mchntVip    = r =>require.ensure([],()=>r(require('../page/mchntVip/mchntVip')),'mchntVip')
// const settings    = r =>require.ensure([],()=>r(require('../page/settings/settings')),'settings')
// const changePwd   = r =>require.ensure([],()=>r(require('../page/settings/children/changePwd')),'changePwd')
// const sign        = r =>require.ensure([],()=>r(require('../page/sign/sign')),'sign')
const findpwd     = require('../page/findpwd')
const register    = require('../page/register')
const login       = require('../page/login')
const index       = require('../page/index')
const business    = require('../page/business/business')
const payment     = require('../page/business/children/payment')
const mchntCenter = require('../page/mchntCenter/mchntCenter')
const flow        = require('../page/mchntCenter/children/flow')
const count       = require('../page/mchntCenter/children/count')
const detailFlow  = require('../page/mchntCenter/children/detailFlow')
const mchntVip    = require('../page/mchntVip/mchntVip')
const settings    = require('../page/settings/settings')
const changePwd   = require('../page/settings/children/changePwd')
const sign        = require('../page/sign/sign')
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
      component:business,
      children:[{
        path:'payment',
        component:payment,
      }]
    },{
      path:'/mchntCenter',
      component:mchntCenter,
      children:[{
        path:'flow',
        component:flow,
        children:[
          {
            path:'detailFlow',
            component:detailFlow,
          }
        ]
      },{
        path:'count',
        component:count,
      }]
    },{
      path:'/mchntVip',
      component:mchntVip
    },{
      path:'/settings',
      component:settings,
      children:[{
        path:'changePwd',
        component:changePwd,
      }]
    },{
      path:'/sign',
      component:sign
    }
]
