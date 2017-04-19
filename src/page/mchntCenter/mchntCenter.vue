<template>
    <div class="footerPage">
        <header-top headtitle="商户中心" goback="true" right="true"></header-top>
        <div class="content">
            <section class="searchList clear">
                <router-link :to="{path: '/mchntCenter/flow'}" tag="div" class="part left transflow">
                    <img src="../../images/merchant center_search_icon.png"/>
                    <p>流水统计</p>
                </router-link>
                <router-link :to="{path: '/mchntCenter/count'}" tag="div" class="part left monthcount">
                    <img src="../../images/merchant center_count_icon.png"/>
                    <p>月销售统计</p>
                </router-link>
            </section>
            <section class="detailbox">
                <div class="detailTitle">
                    <img src="../../images/merchant center_info_icon.png" />
                    <span>商户信息</span>
                    <span class="middle"></span>
                </div>
                <div class="detailInfo clear">
                    <table>
                        <tr>
                            <td width="35%">商户名称：</td>
                            <td width="65%">{{mchntCnNm}}</td>
                        </tr>
                        <tr>
                            <td>商户编号：</td>
                            <td>{{mchntCd}}</td>
                        </tr>
                        <tr>
                            <td>所属收单机构：</td>
                            <td>{{branchName}}</td>
                        </tr>
                        <tr>
                            <td>申请日期：</td>
                            <td>{{datefomat}}</td>
                        </tr>
                        <tr>
                            <td>营业执照号码：</td><td>{{licNo}}</td>
                        </tr>
                        <tr>
                            <td>经营名称：</td><td>{{mchntCnAbbr}}</td>
                        </tr>
                        <tr>
                            <td>法人代表：</td><td>{{artifNm}}</td>
                        </tr>
                        <tr>
                            <td>结算账户账号：</td><td>{{settleNoEncry}}</td>
                        </tr>
                    </table>
                </div>
            </section>
        </div>
        <footer-bottom></footer-bottom>
        <transition name="left-in" mode="out-in">
            <keep-alive><router-view></router-view></keep-alive>
        </transition>
    </div>
</template>
<script>
    import Vue from 'vue'
    import headerTop from '../../components/header'
    import footerBottom from '../../components/footer'
    import {getData,dateformat} from '@/config/utils'
    export default {
        data(){
            return {
                artifNm:'',
                branchCode:'',
                branchName:'',
                licNo:'',
                mchntCd:'',
                mchntCnAbbr:'',
                mchntCnNm:'',
                registerDatetime:'',
                settleNoEncry:''
            }
        },
        computed:{
            datefomat(){
                return dateformat(this.registerDatetime)
            }
        },
        created(){
            getData(this,'','/mss/api/getMchnt.do',(data)=>{
                for(var attr in data.data.data){
                    this[attr]=data.data.data[attr]
                }
            })
        },
        components:{
            headerTop,
            footerBottom
        }
    }
</script>
<style scoped lang="scss">
    @import '../../style/mixin.scss';
    
    .searchList{
        border-bottom: solid 1px $lineColor;
        background: white;
        .part{
            width: 50%;
            text-align: center;
            height: 2rem;
            padding-top: 0.2rem;
            p{
                @include sc(0.35rem,$fontColor)
            }
        }
        .transflow{
            border-right: solid 1px $lineColor;
        }
        img{
            @include wh(1rem,1rem);
        }
        p{
            @include sc(0.38rem,$fontColor)
        }
    }
    .detailbox{
        margin-top: 0.3rem;
        border-top: solid 1px $lineColor;
        border-bottom: solid 1px $lineColor;
        background: white;
        .detailTitle{
            height: 1.2rem;
            line-height: 1.2rem;
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
        .detailInfo{
            font-size: 0.35rem;
            table{
                width: 100%;
            }
            tr{
                height: 0.75rem;
            }
            td:nth-child(odd){
                text-align: right;
                
            }
            td:nth-child(even){
                text-align: left;
            }
        }
    }
</style>