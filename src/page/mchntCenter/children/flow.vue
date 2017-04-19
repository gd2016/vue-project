<template>
    <div class="childPage">
        <header-top headtitle="流水查询" goback="true"></header-top>
        <div @click="dateshow=false" class="content">
            <div class="tab">
                <div class="tabbar clear">
                    <span @click="changeshow='month'" :class="{active:changeshow=='month'}">本月流水</span>
                    <span @click="changeshow='history'" :class="{active:changeshow=='history'}">历史流水</span>
                </div>
            </div>
            <div class="flowBox">
                <section class="monthsum" v-show="changeshow=='month'">
                    <ul>
                        <transition-group name="listTrans" mode="out-in">
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
                                <mt-spinner class="spinner" v-show="item.loading" :type="3"></mt-spinner>
                                <ul class="detaillistBox" v-if="item.detail!=''">
                                    <li @click="getDetail(items.serialNo,items.transDatetime)" class="detaillist clear"  v-for="(items,indexs) in item.detail" :key="indexs">
                                        <section :class='{iconbg1:items.transType=="2022"||items.transType=="4022"||items.transType=="1022"||items.transType=="3022",iconbg2:items.transType=="4064",iconbg3:items.transType=="4067",iconbg4:items.transType=="4062",iconbg5:items.transType=="3053"||items.transType=="3054"||items.transType=="3025"||items.transType=="1031"}' class="iconBox back_img">
                                        </section>
                                        <section class="detailtype">
                                            <p class="font ellipsis">{{items.transTypeName}}</p>
                                            <p class="time">{{items.transDatetime | dateformat}}</p>
                                        </section>
                                        <section class="detailstatus">
                                            <p class="transAmount ellipsis"><span>+{{items.actualAmount}}</span>元</p>
                                            <p :class="{success:items.transFlag=='1',fail:items.transFlag=='2',handling:items.transFlag=='0',cancel:items.transFlag=='4'}" class="transFlag">{{items.transFlag | flagformat}}</p>
                                        </section>
                                        <span class="middle"></span>
                                    </li>
                                    <p @click="loadmore(item.transDate,index,item.pageNo)" v-show="item.more&&!clicked" class="loadmore">加载更多</p>
                                    <mt-spinner v-show="item.more&&clicked" class="spinner"  :type="3"></mt-spinner>
                                </ul>
                                <p v-if="item.detail==''" class="loadmore">当前日期无交易</p>

                            </div>
                            
                        </li>
                        </transition-group>
                    </ul>
                </section>
                <section class="historysum" v-show="changeshow=='history'">
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
                    <ul>
                        <transition-group name="listTrans" mode="out-in">
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
                                    <mt-spinner class="spinner" v-show="item.loading" :type="3"></mt-spinner>
                                    <ul class="detaillistBox" v-if="item.detail!=''">
                                        <li @click="getDetail(items.serialNo,items.transDatetime)" class="detaillist clear"  v-for="(items,indexs) in item.detail" :key="indexs">
                                            <section :class='{iconbg1:items.transType=="2022"||items.transType=="4022"||items.transType=="1022"||items.transType=="3022",iconbg2:items.transType=="4064",iconbg3:items.transType=="4067",iconbg4:items.transType=="4062",iconbg5:items.transType=="3053"||items.transType=="3054"||items.transType=="3025"||items.transType=="1031"}' class="iconBox back_img">
                                            </section>
                                            <section class="detailtype">
                                                <p class="font ellipsis">{{items.transTypeName}}</p>
                                                <p class="time">{{items.transDatetime | dateformat}}</p>
                                            </section>
                                            <section class="detailstatus">
                                                <p class="transAmount ellipsis"><span>+{{items.actualAmount}}</span>元</p>
                                                <p :class="{success:items.transFlag=='1',fail:items.transFlag=='2',handling:items.transFlag=='0',cancel:items.transFlag=='4'}" class="transFlag">{{items.transFlag | flagformat}}</p>
                                            </section>
                                            <span class="middle"></span>
                                        </li>
                                        <p @click="loadmorehis(item.transDate,index,item.pageNo)" v-show="item.more&&!clicked" class="loadmore">加载更多</p>
                                        <mt-spinner v-show="item.more&&clicked" class="spinner"  :type="3"></mt-spinner>
                                    </ul>
                                    <p v-else class="loadmore">当前日期无交易</p>
                                </div>
                            </li>
                        </transition-group>
                    </ul>
                </section>
            </div>
        </div>
        <transition name="left-in" mode="out-in">
            <router-view>
            </router-view>
        </transition>
    </div>
</template>
<script>
    import Vue from 'vue'
    import headerTop from '@/components/header'
    import {getData,getMonth} from '@/config/utils'
    import { InfiniteScroll,Indicator,Toast,Spinner } from 'mint-ui'
    Vue.component(Spinner.name, Spinner);
    export default {
        data(){
            return {
                changeshow:'month',
                thisflowCount:[],
                hisflowCount:[],
                transflowCount:[],
                detailShow:false,
                dateshow:false,
                dateNow:'',
                detailInfo:'',
                info:'',
                showDetail:'',
                clicked:false,
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
                    this.$set(this.thisflowCount[index],'loading',true);
                    this.$set(this.thisflowCount[index],'show',true);
                    var data={
                        "transDate":getMonth().split('-').join('')+date,
                        "pageNo":1,
                        "pageSize":10
                    };
                    setTimeout(()=>{
                        getData(this,data,'/mss/api/getTransFlow.do',(datas)=>{
                        this.$set(this.thisflowCount[index],'loading',false);
                        if(datas.data.data.length==10){
                            this.$set(this.thisflowCount[index],'more',true);
                        }
                        this.$set(this.thisflowCount[index],'detail',datas.data.data)
                        this.$set(this.thisflowCount[index],'pageNo',1)
                    })
                    },1000)
                }else{
                    this.thisflowCount[index].show=!this.thisflowCount[index].show
                }
            },
            loadmore(date,index,pageNo){
                this.clicked=true
                var data={
                    "transDate":getMonth().split('-').join('')+date,
                    "pageNo":pageNo+1,
                    "pageSize":10
                };
                getData(this,data,'/mss/api/getTransFlow.do',(datas)=>{
                    this.clicked=false
                    if(datas.data.data.length!=10){
                        this.$set(this.thisflowCount[index],'more',false);
                    }
                    this.$set(this.thisflowCount[index],'detail',this.thisflowCount[index].detail.concat(datas.data.data))
                    this.$set(this.thisflowCount[index],'pageNo',pageNo+1)
                })
            },
            loadmorehis(date,index,pageNo){
                this.clicked=true
                var data={
                    "transDate":getMonth().split('-').join('')+date,
                    "pageNo":pageNo+1,
                    "pageSize":10
                };
                getData(this,data,'/mss/api/getTransFlow.do',(datas)=>{
                    this.clicked=false
                    if(datas.data.data.length!=10){
                        this.$set(this.hisflowCount[index],'more',false);
                    }
                    this.$set(this.hisflowCount[index],'detail',this.hisflowCount[index].detail.concat(datas.data.data))
                    this.$set(this.hisflowCount[index],'pageNo',pageNo+1)
                })
                
            },
            getHisTransFlow(date,index){
                if(this.hisflowCount[index].show==undefined){
                    this.$set(this.hisflowCount[index],'loading',true);
                    this.$set(this.hisflowCount[index],'show',true);
                    var data={
                        "transDate":getMonth().split('-').join('')+date,
                        "pageNo":1,
                        "pageSize":10
                    };
                    getData(this,data,'/mss/api/getTransFlow.do',(datas)=>{
                        this.$set(this.hisflowCount[index],'loading',false);
                        if(datas.data.data.length==10){
                            this.$set(this.hisflowCount[index],'more',true);
                        }
                        this.$set(this.hisflowCount[index],'detail',datas.data.data)
                        this.$set(this.hisflowCount[index],'pageNo',1)
                    })
                }else{
                    this.hisflowCount[index].show=!this.hisflowCount[index].show
                }
            },
            getDetail(serialNo,date){
                this.$router.push({path:'flow/detailFlow',query:{serialNo:serialNo,transDatetime:date.substring(0,8)}})
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
            dateformat:function(value){
                return value.substring(8,10)+":"+value.substring(10,12)+":"+value.substring(12)
            },
            flagformat:function(value){
                if(value=="0"){
                    return '处理中'
                }else if(value=="1"){   
                    return '成功'
                }else if(value=="2"){
                    return '失败'
                }else if(value=="3"){
                    return '已冲正'
                }else if(value=="4"){
                    return '已撤销'
                }else{
                    return '未知'
                }
            }
        },
        components:{
            headerTop
        }
    }
</script>
<style scoped lang="scss">
    @import '../../../style/mixin.scss';
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
                    width: 60%;
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
                        @include wh(0.95rem,0.95rem);
                    }
                    .iconbg1{//消费
                        background-image: url(../../../images/list_icon03.png)
                    }
                    .iconbg2{//交通罚款
                        background-image: url(../../../images/list_icon06.png)
                    }
                    .iconbg3{//多渠道
                        background-image: url(../../../images/list_icon07.png)
                    }
                    .iconbg4{//电费
                        background-image: url(../../../images/list_icon02.png)
                    }
                    .iconbg5{//其他
                        background-image: url(../../../images/list_icon01.png)
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
                            font-size: 0.33rem;
                        }
                        .success{
                            color: green;
                        }
                        .fail{
                            color: red;
                        }
                        .handling{
                            color: royalblue;
                        }
                        .cancel{
                            color: gray;
                        }
                    }
                }
                .loadmore{
                    height: 1rem;
                    line-height: 1rem;
                    @include sc(0.35rem,#999);
                    border-bottom:solid 1px #cfcfcf;
                    text-align: center;
                    background: #f9f9f9;
                    display: block;
                    clear: both;
                }
            }
        }
    }
</style>