<template>
    <div class="page">
        <header-top headtitle="会员管理" goback="true"></header-top>
        <div class="content">
            <div class="headModule">
                <div class="imgBox">
                    <img src="../../images/member_icon.png"/>
                </div>
                <div class="totalAccount clear">
                    <p class="mchntAccount left">会员总数：<span class="values">{{countVip}}</span></p>
                    <p class="intergralAccount right">会员总积分：<span class="values">{{countIntegral}}</span></p>
                </div>
            </div>
            <div class="searchModule">
                <div class="searchBox">
                    <span class="searchIcon iconfont icon-chaxun"></span>
                    <input type="text" @keyup="findvip()" v-model="vipName"  placeholder="输入会员名称查询"/>
                </div>
                <!--<router-link tag="a"  :to="{path:'/mchntVip/addVip'}">-->
                    <mt-button @click="VIP_ADD_SHOW()" class="addVip" type="danger" size="small">会员录入</mt-button>
                <!--</router-link>-->
            </div>
            <div class="mchntModule" id="vipList">
                <ul class="listBox" ref="scrollList">
                    <transition-group name="listTrans" mode="out-in">
                    <li @click="getDetail(item)" class="mchntList clear" v-for="(item,index) in vipList" :key="index">
                        <!--<router-link class="link" :to="{path:'/mchntVip/detailVip',query:{vipName:item.vipName,mobileNo:item.mobileNo,createDatetime:item.createDatetime,integral:item.integral,level:item.vipLevel,vipId:item.vipId}}">-->
                        <div class="left mchntName ellipsis">
                            <span :class="{nameicon0:item.vipLevel=='0',nameicon1:item.vipLevel=='1',nameicon2:item.vipLevel=='2',nameicon3:item.vipLevel=='3'}" class="iconfont icon-yonghuming"></span>
                            <span class="name ">会员姓名：<a class="values ">{{item.vipName}}</a></span>
                        </div>
                        <div class="right mchntIntergral">
                            <span :class="{intergralicon0:item.vipLevel=='0',intergralicon1:item.vipLevel=='1',intergralicon2:item.vipLevel=='2',intergralicon3:item.vipLevel=='3'}" class="intergralicon iconfont icon-huiyuanjifen"></span>
                            <span class="intergral">会员积分：<a class="values">{{item.integral}}</a></span>
                        </div>
                        <!--</router-link>-->
                    </li>
                    </transition-group>
                    <mt-spinner v-show="loadMore" class="spinner"  :type="3"></mt-spinner>
                </ul>
            </div>
        </div>
        <transition name="left-in" mode="out-in">
            <vip-add v-show="vipAddShow" v-on:confirm="reloadData"></vip-add>
        </transition>
        <transition name="left-in" mode="out-in">
            <detail-vip info="detailInfo" v-on:confirm="reloadData" v-if="vipDetailShow"></detail-vip>
        </transition>
        <!--<keep-alive>
        <router-view ></router-view>
        </keep-alive>-->
    </div>
</template>
<script>
    import Vue from 'vue'
    import {mapMutations,mapState} from 'vuex'
    import headerTop from '@/components/header'
    import vipAdd from '@/components/vipAdd'
    import detailVip from '@/components/detailVip'
    import {getData} from '@/config/utils'
    import { Toast,Button,Spinner,Indicator  } from 'mint-ui'
    import BScroll from 'better-scroll'
    Vue.component(Button.name, Button);
    Vue.component(Spinner.name, Spinner);
     export default {
        data(){
            return {
                countVip:'',
                countIntegral:'',
                vipList:[],
                isSearch:false,
                timer:'',
                vipScroll:'',
                pageNo:1,
                vipName:'',
                loadMore:true,//防止重复加载
                hasLoad:false,
                addShow:false,
                detailInfo:''
            }
        },
        computed:{
            ...mapState([
                'vipAddShow','vipDetailShow'
            ]),
        },
        created(){
            this.initdata()
        },
        methods:{
            ...mapMutations([
                'VIP_ADD_SHOW','VIP_DETAIL_SHOW'
            ]),
            reloadData(){
                this.initdata();
                this.loadMore=true;//重置记录信息
                this.pageNo=1;
                this.$refs.scrollList.scrollTop=0;
            },
            getDetail(item){
                this.detailInfo=item;
                this.VIP_DETAIL_SHOW(item)
            },
            initdata(){
                Indicator.open('正在加载...')
                getData(this,'','/mss/api/countVipAndIntegral.do',(data)=>{
                    this.countVip=data.data.data.countVip
                    this.countIntegral=data.data.data.countIntegral
                });
                var data={
                    "pageNo":1,
                    "pageSize":10
                }
                getData(this,data,'/mss/api/findVip.do',(data)=>{
                    if(data.data.data.length<10){
                        this.loadMore=false
                    }
                    this.vipList=data.data.data;
                    Indicator.close()
                    this.$nextTick(()=>{
                        this.vipScroll=new BScroll('#vipList',{
                            probeType:3
                        })
                        this.vipScroll.on('scroll', (pos) => {
                            if (Math.abs(Math.round(pos.y)) >=  Math.abs(Math.round(this.vipScroll.maxScrollY))) {
                               this.loadData()
                            }
                        })
                    })
                });
            },
            findvip() {
                if(this.timer){
                    return;
                }
                this.timer=setTimeout(() => {
                    this.pageNo=1;
                    var data={
                        "pageNo":1,
                        "pageSize":10,
                        "vipName":this.vipName
                    }
                    getData(this,data,'/mss/api/findVip.do',(data)=>{
                        var data=data.data.data;
                        if(data.length==10){
                          this.loadMore=true  
                        } 
                        else{
                            this.loadMore=false
                        }
                        this.vipList=data
                        this.$nextTick(()=>{
                            this.vipScroll.refresh();
                        })
                        this.timer=""
                    });
                }, 1500);
            },
            loadData(){
                if(this.loadMore){//没有数据的时候不再请求
                    this.hasLoad=true
                    this.loadMore=false
                    this.pageNo+=1;
                    var data={
                        "pageNo":this.pageNo,
                        "pageSize":10,
                        "vipName":this.vipName
                    }
                    getData(this,data,'/mss/api/findVip.do',(data)=>{
                        data=data.data.data;
                        if(data.length<10){
                            for (var index = 0; index < data.length; index++) {
                                this.vipList.push(data[index]);
                            }
                            this.$nextTick(()=>{
                                this.vipScroll.refresh();
                            })
                        }else{
                            for (var index = 0; index < data.length; index++) {
                                this.vipList.push(data[index]);
                            }
                            this.$nextTick(()=>{
                                this.vipScroll.refresh();
                            })
                            this.loadMore=true;
                        }
                            
                        this.hasLoad=false;
                    });
                }
            }
        },
        components:{
            headerTop,
            vipAdd,
            detailVip
        }
    }
</script>
<style scoped lang="scss">
    
    @import '../../style/mixin.scss';
    .listTrans-enter-active{
        transition: all .4s;
        
    }
    .listTrans-enter{
        opacity: 0;
        transform: translateX(2rem);
    }
    .headModule{
        background: $bgColor;
        padding-bottom: 0.4rem;
        height: 3.85rem;
    .imgBox{
        text-align: center;
        img{
            @include wh(2.35rem,2.35rem);
        }
    }
    .totalAccount{
        margin-top: 0.4rem;
        padding: 0 0.6rem;
        p{
            @include sc(0.38rem,white);
        }
        .values{
            color: white;
        }
    }
    }
    .searchModule{
        height: 2.1rem;
        padding: 0.5rem 0 0.5rem 0.4rem;
        .searchBox{
            border: solid 1px #bdbdbd;
            border-radius: 0.12rem;
            padding-left: 0.5rem;
            background: white;
            display: inline-block;
            position: relative;
            width: 72%;
            .searchIcon{
                color:#b3b3b3;
                position: absolute;
                top: 0.28rem;
            }
            input{
                height: 1rem;
                padding-left: 0.8rem;
            }
        }
        .addVip{
            width: 23%;
            height: 1rem;
            padding: 0 0.1rem;
        }
    }
    .mchntModule{
        border-top: solid 1px $lineColor;
        position: absolute;
        top: 7.55rem;
        overflow: hidden;
        bottom: 0;
        left: 0;
        right:0;
        .listBox{
            // height: 100%;
            // overflow: auto;
        }
        .mchntList{
            background: white;
            border-bottom: solid 1px $lineColor;
            height: 1.5rem;
            @include sc(0.38rem,$fontColor);
            .link{
                width: 100%;
                height: 100%;
                display: inline-block;
            }
            .mchntName{
                width: 55%;
                padding-left: 0.3rem;
                margin-top: 0.5rem;
                .nameicon0{//钻石
                    color: purple;
                }
                .nameicon1{
                    color: #00FF00
                }
                .nameicon2{
                    color:#ffd700;
                }
                .nameicon3{
                    color: #c0c0c0;
                }
            }
            .mchntIntergral{
                width: 45%;
                padding-left: 0.5rem;
                margin-top: 0.5rem;
                .intergralicon{
                    vertical-align: middle;
                }
                .intergralicon0{//钻石
                    color: purple;
                }
                .intergralicon1{
                    color: #00FF00
                }
                .intergralicon2{
                    color:#ffd700;
                }
                .intergralicon3{
                    color: #c0c0c0;
                }
            }
        }
    }

</style>