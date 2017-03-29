<template>
    <div class="mchntFlowPage">
        <header-top headtitle="流水查询" goback="true"></header-top>
        <div class="tab">
            <div class="tabbar clear">
                <span class="active">本月流水</span>
                <span>历史流水</span>
            </div>
        </div>
        <div class="flowBox">
            <section class="monthsum" style="display:none">
                <ul>
                    <li class="list clear">
                        <span class="date">29日</span>
                        <div class="amount">
                            <p class="transAmount">交易总额：<b class="value">22235,43</b>元</p>
                            <p class="handleAmount">手续费总额：<b class="value">1.0</b>元</p>
                        </div>
                        <span class="icons iconfont icon-youjiantou"></span>
                        <span class="middle"></span>
                    </li>
                    <li class="list clear">
                        <span class="date">29日</span>
                        <div class="amount">
                            <p class="transAmount">交易总额：<b class="value">22235,43</b>元</p>
                            <p class="handleAmount">手续费总额：<b class="value">1.0</b>元</p>
                        </div>
                        <span class="icons iconfont icon-youjiantou"></span>
                        <span class="middle"></span>
                    </li>
                    <li class="list clear">
                        <span class="date">29日</span>
                        <div class="amount">
                            <p class="transAmount">交易总额：<b class="value">22235,43</b>元</p>
                            <p class="handleAmount">手续费总额：<b class="value">1.0</b>元</p>
                        </div>
                        <span class="icons iconfont icon-youjiantou"></span>
                        <span class="middle"></span>
                    </li>
                </ul>
            </section>
            <section class="historysum">
                <div class="datemodule clear">
                    <div class="selectDate">
                        <span>2016/10</span>
                    </div>
                    <span class="dateicon iconfont icon-riqi"></span>
                </div>
                <ul>
                    <li class="list clear">
                        <span class="date">29日</span>
                        <div class="amount">
                            <p class="transAmount">交易总额：<b class="value">22235,43</b>元</p>
                            <p class="handleAmount">手续费总额：<b class="value">1.0</b>元</p>
                        </div>
                        <span class="icons iconfont icon-youjiantou"></span>
                        <span class="middle"></span>
                    </li>
                    <li class="list clear">
                        <span class="date">29日</span>
                        <div class="amount">
                            <p class="transAmount">交易总额：<b class="value">22235,43</b>元</p>
                            <p class="handleAmount">手续费总额：<b class="value">1.0</b>元</p>
                        </div>
                        <span class="icons iconfont icon-youjiantou"></span>
                        <span class="middle"></span>
                    </li>
                    <li class="list clear">
                        <span class="date">29日</span>
                        <div class="amount">
                            <p class="transAmount">交易总额：<b class="value">22235,43</b>元</p>
                            <p class="handleAmount">手续费总额：<b class="value">1.0</b>元</p>
                        </div>
                        <span class="icons iconfont icon-youjiantou"></span>
                        <span class="middle"></span>
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
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 14;
        background: $pageBg;
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
            .selectDate{
                float: right;
            }
            .dateicon{
                float: right
            }
        }
        .list{
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
                    @include sc(0.3rem,$lineColor);
                    b{
                        font-style: normal;
                        color:$lineColor;
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
    }
</style>