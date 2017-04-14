export default {
    VIP_ADD_SHOW (state){
        state.vipAddShow=true
    },
    VIP_ADD_CANCEL (state){
        state.vipAddShow=false
    },
    VIP_DETAIL_SHOW(state,item){
        state.vipDetailShow=true
        state.vipInfo=item;
        state.vipInfo.lv=[{defaultIndex:state.vipInfo.vipLevel-0,values: ['钻石','铂金','黄金','白银']}]
    },
    VIP_DETAIL_CANCEL(state){
        state.vipDetailShow=false
    },
}