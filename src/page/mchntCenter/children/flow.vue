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
                    <li class="list clear">
                        <div class="info">
                            <span class="date">29日</span>
                            <div class="amount">
                                <p class="transAmount">交易总额：<b class="value">22235,43</b>元</p>
                                <p class="handleAmount">手续费总额：<b class="value">1.0</b>元</p>
                            </div>
                            <span class="icons iconfont icon-youjiantou"></span>
                            <span class="middle"></span>
                        </div>
                        <div class="detailFlow">
                            <ul class="detaillistBox">
                                <li class="detaillist clear">
                                    <section class="iconBox">
                                        <img src="../../../images/list_icon01.png"/>
                                    </section>
                                    <section class="detailtype">
                                        <p class="font">手机充值</p>
                                        <p class="time">09:00:12</p>
                                    </section>
                                    <section class="detailstatus">
                                        <p class="transAmount"><span>+300</span>元</p>
                                        <p class="transFlag">交易成功</p>
                                    </section>
                                    <span class="middle"></span>
                                </li>
                                <li class="detaillist clear">
                                    <section class="iconBox">
                                        <img src="../../../images/list_icon02.png"/>
                                    </section>
                                    <section class="detailtype">
                                        <p class="font">电力缴费</p>
                                        <p class="time">09:00:12</p>
                                    </section>
                                    <section class="detailstatus">
                                        <p class="transAmount"><span>+300</span>元</p>
                                        <p class="transFlag">交易成功</p>
                                    </section>
                                    <span class="middle"></span>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="list clear">
                        <div class="info">
                            <span class="date">29日</span>
                            <div class="amount">
                                <p class="transAmount">交易总额：<b class="value">22235,43</b>元</p>
                                <p class="handleAmount">手续费总额：<b class="value">1.0</b>元</p>
                            </div>
                        <span class="icons iconfont icon-youjiantou"></span>
                        <span class="middle"></span>
                        </div>
                    </li>
                    <li class="list clear">
                        <div class="info">
                            <span class="date">29日</span>
                            <div class="amount">
                                <p class="transAmount">交易总额：<b class="value">22235,43</b>元</p>
                                <p class="handleAmount">手续费总额：<b class="value">1.0</b>元</p>
                            </div>
                       
                        <span class="icons iconfont icon-youjiantou"></span>
                        <span class="middle"></span>
                         </div>
                    </li>
                </ul>
            </section>
            <section class="historysum" v-show="changeshow=='history'">
                <div class="datemodule clear">
                    <span class="dateicon iconfont icon-riqi"></span>
                    <div class="selectDate">
                        <span class="date">10/2016</span>
                        <span class="selecticon iconfont icon-xiajiantou"></span>
                    </div>
                </div>
                <ul>
                    <li class="list clear">
                        <div class="info">
                            <span class="date">29日</span>
                            <div class="amount">
                                <p class="transAmount">交易总额：<b class="value">22235,43</b>元</p>
                                <p class="handleAmount">手续费总额：<b class="value">1.0</b>元</p>
                            </div>
                            <span class="icons iconfont icon-youjiantou"></span>
                            <span class="middle"></span>
                        </div>
                        <div class="detailFlow">
                            <ul class="detaillistBox">
                                <li class="detaillist clear">
                                    <section class="iconBox">
                                        <img src="../../../images/list_icon01.png"/>
                                    </section>
                                    <section class="detailtype">
                                        <p class="font">手机充值</p>
                                        <p class="time">09:00:12</p>
                                    </section>
                                    <section class="detailstatus">
                                        <p class="transAmount"><span>+300</span>元</p>
                                        <p class="transFlag">交易成功</p>
                                    </section>
                                    <span class="middle"></span>
                                </li>
                                <li class="detaillist clear">
                                    <section class="iconBox">
                                        <img src="../../../images/list_icon02.png"/>
                                    </section>
                                    <section class="detailtype">
                                        <p class="font">电力缴费</p>
                                        <p class="time">09:00:12</p>
                                    </section>
                                    <section class="detailstatus">
                                        <p class="transAmount"><span>+300</span>元</p>
                                        <p class="transFlag">交易成功</p>
                                    </section>
                                    <span class="middle"></span>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="list clear">
                        <div class="info">
                            <span class="date">29日</span>
                            <div class="amount">
                                <p class="transAmount">交易总额：<b class="value">22235,43</b>元</p>
                                <p class="handleAmount">手续费总额：<b class="value">1.0</b>元</p>
                            </div>
                        <span class="icons iconfont icon-youjiantou"></span>
                        <span class="middle"></span>
                        </div>
                    </li>
                    <li class="list clear">
                        <div class="info">
                            <span class="date">29日</span>
                            <div class="amount">
                                <p class="transAmount">交易总额：<b class="value">22235,43</b>元</p>
                                <p class="handleAmount">手续费总额：<b class="value">1.0</b>元</p>
                            </div>
                       
                        <span class="icons iconfont icon-youjiantou"></span>
                        <span class="middle"></span>
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
    export default{
        data(){
            return {
                changeshow:'month'
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
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 4;
        background: $pageBg;
        overflow: auto;
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
                border: solid 1px #b9b9b9;
                padding: 0rem 0.25rem 0.05rem 0.85rem;
                border-radius: 0.05rem;
                margin-right: 0.1rem;
                .date{
                    @include sc(0.35rem,$fontColor);
                }
                .selecticon{
                    margin-left: 0.25rem;
                    @include sc(0.5rem,$bgColor);
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
                    margin-left: 0.4rem;
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
                        img{
                            @include wh(0.95rem,0.95rem);
                        }
                    }
                    .detailtype{
                        margin-left: 2rem;
                        .font{
                            @include sc(0.38rem,$fontColor);
                        }
                        .time{
                            margin-top: 0.15rem;
                            @include sc(0.33rem,#acacac);
                        }
                    }
                    .detailstatus{
                        margin-left: 2.6rem;
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