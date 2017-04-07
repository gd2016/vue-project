<template>
    <div class="mchntVipPage">
        <header-top headtitle="会员管理" goback="true"></header-top>
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
                <input type="text" @keyup="findvip($event)"  placeholder="输入会员名称查询"/>
            </div>
            <router-link tag="a"  :to="{path:'/mchntVip/addVip'}">
                <mt-button class="addVip" type="danger" size="small">会员录入</mt-button>
            </router-link>
        </div>
        <div class="mchntModule">
            <ul class="listBox">
                
                <li class="mchntList clear" v-for="(item,index) in vipList">
                    <router-link class="link" :to="{path:'/mchntVip/detailVip',query:{vipName:item.vipName,mobileNo:item.mobileNo,createDatetime:item.createDatetime,integral:item.integral,level:item.vipLevel,vipId:item.vipId}}">
                    <div class="left mchntName ellipsis">
                        <span class="iconfont icon-yonghuming"></span>
                        <span class="name ">会员姓名：<a class="values ">{{item.vipName}}</a></span>
                    </div>
                    <div class="right mchntIntergral">
                        <span class="jifen iconfont icon-huiyuanjifen"></span>
                        <span class="intergral">会员积分：<a class="values">{{item.integral}}</a></span>
                    </div>
                     </router-link>
                </li>
               
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    import Vue from 'vue'
    import headerTop from '../../components/header'
    import {getData} from '@/config/utils'
    import { InfiniteScroll,Indicator,Toast,Button  } from 'mint-ui';
    Vue.component(Button.name, Button);
     export default {
        data(){
            return {
                countVip:'',
                countIntegral:'',
                vipList:[],
                isSearch:false,
                timer:''
            }
        },
        created(){
            getData(this,'','/mss/api/countVipAndIntegral.do',(data)=>{
                this.countVip=data.data.data.countVip
                this.countIntegral=data.data.data.countIntegral
            });
            var data={
                "pageNo":1,
                "pageSize":10
            }
            getData(this,data,'/mss/api/findVip.do',(data)=>{
                this.vipList=data.data.data;
            });
        },
        methods:{
            findvip(e) {
                if(this.timer){
                    return;
                }
                this.timer=setTimeout(() => {
                    var data={
                        "pageNo":1,
                        "pageSize":10,
                        "vipName":e.target.value
                    }
                    getData(this,data,'/mss/api/findVip.do',(data)=>{
                        this.vipList=data.data.data;
                        this.timer=""
                    });
                }, 1500);
            }
        },
        components:{
            headerTop
        }
    }
</script>
<style scoped lang="scss">
    @import '../../style/mixin.scss';
    .mchntVipPage{
        padding-top: 1.6rem;
    }
    .headModule{
        background: $bgColor;
        padding-bottom: 0.4rem;
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
        .mchntList{
            background: white;
            border-bottom: solid 1px $lineColor;
            height: 1.5rem;
            @include sc(0.38rem,$fontColor);
            .link{
                width: 100%;
                height: 100%;
                display: inline-block;
                padding: 0.45rem;
            }
            .mchntName{
                width: 60%;
            }
            .mchntIntergral{
                width: 40%;
                .jifen{
                    display: inline-block;
                    vertical-align: middle;
                    height: 0.5rem;
                }
            }
            .iconfont{
                color: #1be205;
            }
        }
    }
</style>