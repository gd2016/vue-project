<template>
    <div class="childPage footerPage">
        <header-top headtitle="月销售统计" goback="true"></header-top>
            <div @click="dateshow=false" class="content"> 
                <div class="datemodule clear">
                    <span class="dateicon iconfont icon-riqi"></span>
                    <div class="selectDate">
                        <p @click.stop="dateshow=!dateshow"><span class="date">{{dateNow}}</span>
                        <span class="selecticon iconfont icon-xiajiantou"></span></p>
                        <ul @click.stop="select($event)" v-if="dateshow" class="selectBox">
                            <li>2017-03</li>
                            <li>2017-02</li>
                            <li>2017-01</li>
                        </ul>
                    </div>
                </div>
                <div class="detailCount">
                    <div class="clear valueBox">
                        <div class="left key">
                            <p>总销售：</p>
                            <p>销售总笔数：</p>
                            <p>本行卡消费金额：</p>
                            <p>它行卡消费金额：</p>
                            <p>借记卡消费金额：</p>
                            <p>贷记卡消费金额：</p>
                            <p>活动补贴金额：</p>
                            <p>手续费汇总金额：</p>
                        </div>
                        <div class="left value">
                            <p>{{actualAmount | fmoney}}</p>
                            <p>{{transNumber}}</p>
                            <p>{{bcAmount | fmoney}}</p>
                            <p>{{obcAmount | fmoney}}</p>
                            <p>{{debitAmount | fmoney}}</p>
                            <p>{{crebitAmount | fmoney}}</p>
                            <p>{{activityAmount | fmoney}}</p>
                            <p>{{handlingChargeCount | fmoney}}</p>
                        </div>
                    </div>   
                </div>
            </div>
    </div>
</template>
<script>
    import Vue from 'vue'
    import headerTop from '@/components/header'
    import {getData,getMonth,moneyformat} from '@/config/utils'
    import { Toast ,Indicator} from 'mint-ui';
    export default {
        data(){
            return {
                activityAmount:'',
                actualAmount:'',
                bcAmount:'',
                crebitAmount:'',
                debitAmount:'',
                handlingChargeCount:'',
                obcAmount:'',
                transAmount:'',
                transNumber:'',
                dateshow:false,
                dateNow:''
            }
        },
        filters:{
            fmoney:function(value){
                return moneyformat(value)
            }
        },
        created(){
            this.dateNow=getMonth()
                getData(this,{"transMonth":getMonth().split('-').join('')},'/mss/api/countMonthFlw.do',(data)=>{
                for(var attr in data.data.data){
                    this[attr]=data.data.data[attr]
                }
            });
        },  
        methods:{
            select(e){
                this.dateNow=e.target.innerText;
                this.dateshow=!this.dateshow;
                var date=this.dateNow.split('-').join('');
                Indicator.open('正在加载数据...')
                getData(this,{"transMonth":date},'/mss/api/countMonthFlw.do',(data)=>{
                    if(data.data.data.length==0){
                        Toast({
                            message: '当前日期无交易',
                            position: 'bottom',
                            duration: 1500
                        });
                    }
                    for(var attr in data.data.data){
                        this[attr]=data.data.data[attr]
                    }
                    Indicator.close()
                })
            }
        },
        components:{
            headerTop
        }
    }
</script>
<style scoped lang="scss">
    @import '../../../style/mixin.scss';
    .datemodule{
        padding: 0.3rem 0;
        background: linear-gradient(#f7f7f7,#f5f5f5);
        
            .selectDate{
                float: right;
                margin-right: 0.1rem;
                position: relative;
                p{
                    width: 100%;
                    border: 1px solid #d1dbe5;
                    border-radius: 0.15rem;
                    text-align: center;
                    height: 0.7rem;
                    width: 3rem;
                    line-height: 0.6rem;
                    position: relative;
                    text-indent: -0.1rem;
                }
                .selectBox{
                    border:1px solid #d1dbe5;
                    margin-top: 0.02rem;
                    border-radius: 0.15rem;
                    @include sc(0.35rem,$fontColor);
                    position: absolute;
                    background: $pageBg;
                    width: 100%;
                    li{
                        text-align: center;
                        line-height: 0.6rem;
                        text-indent: -0.1rem;
                    }
                }
                .date{
                    @include sc(0.35rem,$fontColor);
                }
                .selecticon{
                    @include sc(0.5rem,$bgColor);
                    position: absolute;
                    right:0.1rem;
                }
                
            }
        .dateicon{
            float: right;
            @include sc(0.65rem,$bgColor);
            margin: 0 0.5rem;
        }
    }
    .content{
        overflow: hidden;
    }
    .detailCount{
        height: 100%;
        overflow: auto;
        border-top: solid 1px $lineColor;
        padding-bottom: 1.45rem;
        .valueBox{
            background: white;
            @include sc(0.35rem,$fontColor)
        }
        .key{
            text-align: right;
            width: 40%;
            line-height: 1rem;
        }
        .value{
            text-align: left;
            width: 60%;
            line-height: 1rem;
            
        }
        p{
            border-bottom: solid 1px #cfcfcf;
            padding-left: 0.1rem;
        }
    }
</style>