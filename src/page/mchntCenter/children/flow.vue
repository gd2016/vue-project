<template>
    <div class="mchntFlowPage">
        <header-top headtitle="流水查询" goback="true"></header-top>
        <div class="tab">
            <div class="tabbar clear">
                <span @click="changeshow='month'" :class="{active:changeshow=='month'}">本月流水</span>
                <span @click="changeshow='history'" :class="{active:changeshow=='history'}">历史流水</span>
            </div>
        </div>
        <div class="flowBox">
            <section class="monthsum" v-show="changeshow=='month'">
                
                <ul>
                    <li class="list clear"  v-for="(item,index) in thisflowCount" :key="index">
                        <div class="info" @click="getTransFlow(item.transDate,index)">
                            <span class="date">{{item.transDate}}日</span>
                            <div class="amount">
                                <p class="transAmount">交易总额：<b class="value">{{item.actualAmount}}</b>元</p>
                                <p class="handleAmount">手续费总额：<b class="value">{{item.handlingChargeAmount}}</b>元</p>
                            </div>
                            <span :class="{'icon-youjiantou':!item.show,'icon-xiajiantou1':item.show}" class="icons iconfont"></span>
                            <span class="middle"></span>
                        </div>
                        <div class="detailFlow" v-if="item.show">
                            <ul class="detaillistBox" v-if="item.detail">
                                <li @click="getDetail(items.serialNo,items.transDatetime)" class="detaillist clear"  v-for="(items,indexs) in item.detail" :key="indexs">
                                    <section class="iconBox">
                                        <img src="../../../images/list_icon01.png"/>
                                    </section>
                                    <section class="detailtype">
                                        <p class="font ellipsis">{{items.transTypeName}}</p>
                                        <p class="time">{{items.transDatetime | datefomat}}</p>
                                    </section>
                                    <section class="detailstatus">
                                        <p class="transAmount ellipsis"><span>+{{items.actualAmount}}</span>元</p>
                                        <p class="transFlag">交易成功</p>
                                    </section>
                                    <span class="middle"></span>
                                </li>
                            </ul>
                        </div>
                        
                    </li>
                </ul>
            </section>
            <section class="historysum" v-show="changeshow=='history'">
                <div class="datemodule clear">
                    <span class="dateicon iconfont icon-riqi"></span>
                    <div class="selectDate">
                        <p @click="dateshow=!dateshow"><span class="date">{{dateNow}}</span>
                        <span class="selecticon iconfont icon-xiajiantou"></span></p>
                        <ul @click="select($event)" v-if="dateshow" class="selectBox">
                            <li>2017-03</li>
                            <li>2017-02</li>
                            <li>2017-01</li>
                        </ul>
                    </div>
                </div>
                <ul>
                    <li class="list clear"  v-for="(item,index) in hisflowCount" :key="index">
                        <div class="info" @click="getHisTransFlow(item.transDate,index)">
                            <span class="date">{{item.transDate}}日</span>
                            <div class="amount">
                                <p class="transAmount">交易总额：<b class="value">{{item.actualAmount}}</b>元</p>
                                <p class="handleAmount">手续费总额：<b class="value">{{item.handlingChargeAmount}}</b>元</p>
                            </div>
                            <span :class="{'icon-youjiantou':!item.show,'icon-xiajiantou1':item.show}" class="icons iconfont"></span>
                            <span class="middle"></span>
                        </div>
                        <div class="detailFlow" v-if="item.show">
                            <ul class="detaillistBox">
                                <li @click="getDetail(items.serialNo,items.transDatetime)" class="detaillist clear"  v-for="(items,indexs) in item.detail" :key="indexs">
                                    <section class="iconBox">
                                        <img src="../../../images/list_icon01.png"/>
                                    </section>
                                    <section class="detailtype">
                                        <p class="font ellipsis">{{items.transTypeName}}</p>
                                        <p class="time">{{items.transDatetime | datefomat}}</p>
                                    </section>
                                    <section class="detailstatus">
                                        <p class="transAmount ellipsis"><span>+{{items.actualAmount}}</span>元</p>
                                        <p class="transFlag">交易成功</p>
                                    </section>
                                    <span class="middle"></span>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue'
    import headerTop from '@/components/header'
    import {getData,getMonth} from '@/config/utils'
    import { InfiniteScroll,Indicator,Toast } from 'mint-ui'
    Vue.use(InfiniteScroll);
    export default {
        data(){
            return {
                changeshow:'month',
                thisflowCount:[],
                hisflowCount:[],
                transflowCount:[],
                detailShow:false,
                dateshow:false,
                dateNow:''
            }
        },
        created(){
            Indicator.open('正在加载数据...')
            this.dateNow=getMonth()
            var data={
                "transMonth":"201703"
            }
            var hisdata={
                "transMonth":"201703"
            }
            getData(this,data,'/mss/api/countDateFlw.do',(data)=>{
                this.thisflowCount=data.data.data;
                Indicator.close()
            });
            getData(this,hisdata,'/mss/api/countDateFlw.do',(data)=>{
                this.hisflowCount=data.data.data
            })
        },
        methods:{
            getTransFlow(date,index){
                if(this.thisflowCount[index].show==undefined){
                    this.$set(this.thisflowCount[index],'show','true');
                    var data={
                        "transDate":getMonth().split('-').join('')+date,
                        "pageNo":1,
                        "pageSize":10
                    };
                    getData(this,data,'/mss/api/getTransFlow.do',(datas)=>{
                        if(datas.data.data==""){
                            Toast({
                                message: '当前日期无交易',
                                position: 'bottom',
                                duration: 1500
                            });
                        }else{
                            this.$set(this.thisflowCount[index],'detail',datas.data.data)
                        }
                        
                    })
                }else{
                    this.thisflowCount[index].show=!this.thisflowCount[index].show
                }
            },
            getHisTransFlow(date,index){
                if(this.hisflowCount[index].show==undefined){
                    this.$set(this.hisflowCount[index],'show','true');
                    var data={
                        "transDate":getMonth().split('-').join('')+date,
                        "pageNo":1,
                        "pageSize":10
                    };
                    getData(this,data,'/mss/api/getTransFlow.do',(datas)=>{
                    this.$set(this.hisflowCount[index],'detail',datas.data.data)
                    })
                }else{
                    this.hisflowCount[index].show=!this.hisflowCount[index].show
                }
            },
            getDetail(serialNo,date){
                var data={
                    "serialNo":serialNo,
                    "transDatetime":date.substring(0,8)
                }
                getData(this,data,'/mss/api/getTransFlowDetail.do',(datas)=>{
                })
            },
            select(e){
                this.dateNow=e.target.innerText;
                this.dateshow=!this.dateshow;
                var date=this.dateNow.split('-').join('');
                Indicator.open('正在加载数据...')
                getData(this,{"transMonth":date},'/mss/api/countDateFlw.do',(data)=>{
                    if(data.data.data.length==0){
                        Toast({
                            message: '当前日期无交易',
                            position: 'bottom',
                            duration: 1500
                        });
                    }
                     this.hisflowCount=data.data.data
                    
                    
                    Indicator.close()
                })
            }
        },
        filters:{
            datefomat:function(value){
                return value.substring(8,10)+":"+value.substring(10,12)+":"+value.substring(12)
            }
        },
        components:{
            headerTop
        }
    }
</script>
<style scoped lang="scss">
    @import '../../../style/mixin.scss';
    .mchntFlowPage{
        padding-top: 1.6rem;
    }
    .mchntFlowPage{
        position: absolute;
        top: 0;
        left:0;
        right: 0;
        min-height: 100%;
        background: $pageBg;
        // overflow: auto;
    }
    .tab{
        height: 1.45rem;
        text-align: center;
        padding: 0.3rem 0 0 2.1rem;
        .tabbar{
            @include wh(6.5rem,0.95rem);
            border: solid 0.05rem $bgColor;
            border-radius: 0.2rem;
            .active{
                background: $bgColor;
                color: white;
            }
            span{
                width: 50%;
                height: 100%;
                float: left;
                line-height: 0.95rem;
                color:$bgColor;
            }
        }
    }
    .flowBox{
        ul{
            border-top: solid 1px $lineColor;
        }
        .datemodule{
            margin-bottom: 0.3rem;
            padding-top: 0.3rem;
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
                    line-height: 0.5rem;
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
                    top: 0.1rem;
                }
                
            }
            .dateicon{
                float: right;
                @include sc(0.65rem,$bgColor);
                margin: 0 0.5rem;
            }
        }
        .list{
            .info{
                height: 1.5rem;
                background-color: #ffe4d5;
                @include sc(0.38rem,$fontColor);
                border-bottom: solid 1px $lineColor;
                span,div{
                    display: inline-block;
                    vertical-align: middle;
                }
                b{
                    margin-left: 0.1rem;
                    margin-right: 0.1rem;
                }
                .date{
                    margin-left: 0.9rem;
                }
                .amount{
                    margin-left: 1rem;
                    width: 40%;
                    .handleAmount{
                        @include sc(0.3rem,#acacac);
                        b{
                            font-style: normal;
                            color:#acacac;
                        }
                    }
                }
                .icons{
                    float: right;
                    margin-right: 0.5rem;
                    margin-top: 0.6rem;
                    @include sc(0.4rem,#989898)
                }
                .middle{
                    height: 100%;
                }
            }
            .detailFlow{
                .detaillistBox{
                    border-top: none;
                }
                .detaillist{
                    border-bottom: solid 1px $lineColor;
                    height: 1.5rem;
                    section,.middle{
                        display: inline-block;
                        vertical-align: middle;
                    }
                    
                    .middle{
                        height: 100%;
                    }
                    .iconBox{
                        margin-left: 0.8rem;
                        width: 10%;
                        img{
                            @include wh(0.95rem,0.95rem);
                        }
                    }
                    .detailtype{
                        margin-left:1rem;
                        width: 40%;
                        .font{
                            @include sc(0.38rem,$fontColor);
                        }
                        .time{
                            margin-top: 0.15rem;
                            @include sc(0.33rem,#acacac);
                        }
                    }
                    .detailstatus{
                        width: 20%;
                        margin-left:0.5rem;
                        .transAmount{
                            color:$fontColor;
                            
                            span{
                                @include sc(0.38rem,$bgColor);
                            }
                            
                        }
                        .transFlag{
                            margin-top: 0.15rem;
                            @include sc(0.33rem,#acacac);
                        }
                    }
                }
            }
        }
    }
</style>