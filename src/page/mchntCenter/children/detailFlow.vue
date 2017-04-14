<template>
    <div class="detailFlowPage childPage" >
        <header-top headtitle="流水详情" goback="true"></header-top>
        <div class="content">
            <section class="detailbox">
                <div class="detailInfo">
                    <mt-cell title="平台流水号">{{serialNo}}</mt-cell>
                    <mt-cell title="交易类型">  {{transType}}</mt-cell>
                    <mt-cell title="交易金额">{{transAmount}}</mt-cell>
                    <mt-cell title="实际金额">{{actualAmount}}</mt-cell>
                    <mt-cell title="手续费" > {{handlingCharge}}</mt-cell>
                    <mt-cell title="交易卡号">{{cardNo}}</mt-cell>
                    <mt-cell title="交易状态">{{transFlag}}</mt-cell>
                    <mt-cell title="交易时间">{{transDatetime}}</mt-cell>
                    <mt-cell title="终端号"> {{deviceId}}</mt-cell>
                    <mt-cell title="会员号"> {{vipId}}</mt-cell>
                    <mt-cell title="是否T+0">  {{t0Flag}}</mt-cell>
                    <mt-cell title="银行满减金额"> {{bankFullReduction}}</mt-cell>
                    <mt-cell title="银行折扣金额">{{bankDicount}}</mt-cell>
                    <mt-cell title="商户满减金额"> {{mchntFullReduction}}</mt-cell>
                    <mt-cell title="商户折扣金额"> {{mchntDiscount}}</mt-cell>
                    <mt-cell title="商户积分抵用金额"> {{mchntDeduction}}</mt-cell>
                    <mt-cell title="商户生成积分"> {{mchntIntegralIncrease}}</mt-cell>
                    <mt-cell title="系统跟踪号" > {{traceNo}}</mt-cell>
                    <mt-cell title="批次号" >   {{batchNo}}</mt-cell>
                    <mt-cell title="检索参考号"> {{rerefNo}}</mt-cell>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue'
    import {getData} from '@/config/utils'
    import headerTop from '@/components/header'
    import {Cell,Indicator}  from 'mint-ui'
    Vue.component(Cell.name, Cell);
    export default {
        data(){
            return {
                actualAmount:'',
                bankDicount:'',
                bankFullReduction:'',
                batchNo:'',
                cardNo:'',
                deviceId:'',
                handlingCharge:'',
                mchntDeduction:'',
                mchntDiscount:'',
                mchntFullReduction:'',
                mchntIntegralIncrease:'',
                rerefNo:'',
                serialNo:'',
                t0Flag:'',
                traceNo:'',
                transAmount:'',
                transDatetime:'',
                transFlag:'',
                transType:'',
                transTypeName:'',
                vipId:''
            }
        },
        props:['info'],
        components:{
            headerTop
        },
        activated(){
            Indicator.open('正在加载... ')
            var serialNo=this.$route.query.serialNo
            var dates=this.$route.query.transDatetime
            console.log(this.$route.query)
            var data={
                "serialNo":serialNo,
                "transDatetime":dates.substring(0,8)
            }
                getData(this,data,'/mss/api/getTransFlowDetail.do',(datas)=>{
                var data=datas.data.data
                for (var attr in data){
                    this[attr]=data[attr]
                }
                Indicator.close()
            })
        }
    }
</script>
<style scoped lang="scss">
     @import '../../../style/mixin.scss';
     .detailFlowPage{
        z-index: 10;
     }
        .detailbox{
        border-top: solid 1px $lineColor;
        background: white;
        .detailTitle{
            height: 1.3rem;
            line-height: 1.3rem;
            border-bottom: solid 1px $lineColor;
           
            img{
                @include wh(0.95rem,0.95rem);
                margin-left: 1.1rem;
            }
            span{
                @include sc(0.38rem,$fontColor);
                margin-left: 0.1rem;
            }
            img,span{
                display: inline-block;
                vertical-align: middle;
                margin-top: -3px;
            }
            
        }
        
    }
</style>