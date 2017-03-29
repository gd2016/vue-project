<template>
    <div class="mchntCenterPage">
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
                <div class="detailInfo">
                    <p>商户名称：<span class="value">杭州店</span></p>
                    <p>商户编号：<span class="value">12345678913</span></p>
                    <p>所属收单机构：<span class="value">安庆农村商业银行</span></p>
                    <p>申请日期：<span class="value">2016.10.11</span></p>
                    <p>营业执照号码：<span class="value">41654654</span></p>
                    <p>注册资本：<span class="value">1000万</span></p>
                    <p>法人代表：<span class="value">张三</span></p>
                    <p>结算账户账号：<span class="value">654651613****23123</span></p>
                    <p>绑定设备：<span class="value">杭州店</span></p>
                </div>
            </section>
        </div>
        <footer-bottom></footer-bottom>
        <router-view></router-view>
    </div>
</template>
<script>
    import Vue from 'vue'
    import headerTop from '../../components/header'
    import footerBottom from '../../components/footer'
    export default{
        data(){
            return {
                
            }
        },
        components:{
            headerTop,
            footerBottom
        }
    }
</script>
<style scoped lang="scss">
    @import '../../style/mixin.scss';
    .content{
        padding-bottom: 1.6rem;
    }
    .searchList{
        border-bottom: solid 1px $lineColor;
        background: white;
        .part{
            width: 50%;
            text-align: center;
            height: 2.7rem;
            padding-top: 0.35rem;
            p{
                @include sc(0.38rem,$fontColor)
            }
        }
        .transflow{
            border-right: solid 1px $lineColor;
        }
        img{
            @include wh(1.44rem,1.44rem);
        }
        p{
            @include sc(0.38rem,$fontColor)
        }
    }
    .detailbox{
        margin-top: 0.3rem;
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
        .detailInfo{
            padding: 0.30rem 0 0.15rem 1.15rem;
            font-size: 0.38rem;
            p{
                height: 0.76rem;
                line-height: 0.76rem;   
                span{
                    color:$lineColor;
                    margin-left: 0.15rem;
                }
            }
        }
    }
</style>