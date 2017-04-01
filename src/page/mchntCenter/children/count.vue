<template>
    <div class="mchntCountPage">
            <header-top headtitle="月销售统计" goback="true"></header-top>
            <div class="datemodule clear">
                <span class="dateicon iconfont icon-riqi"></span>
                <div class="selectDate">
                    <span class="date">10/2016</span>
                    <span class="selecticon iconfont icon-xiajiantou"></span>
                </div>
            </div>
            <div class="detailCount">
                <ul class="listBox">
                    <li class="countList">
                        总销售：<span class="value">15000元</span>
                    </li>
                    <li class="countList">
                        销售总笔数：<span class="value">15000元</span>
                    </li>
                    <li class="countList">
                        本行卡消费金额：<span class="value">15000元</span>
                    </li>
                    <li class="countList">
                        它行卡消费金额：<span class="value">15000元</span>
                    </li>
                    <li class="countList">
                        借记卡消费金额：<span class="value">15000元</span>
                    </li>
                    <li class="countList">
                        贷记卡消费金额：<span class="value">15000元</span>
                    </li>
                    <li class="countList">
                        活动补贴金额：<span class="value">15000元</span>
                    </li>
                    <li class="countList">
                        手续费汇总金额：<span class="value">15000元</span>
                    </li>
                    <li class="countList">
                        贷记卡消费金额：<span class="value">15000元</span>
                    </li>
                    <li class="countList">
                        活动补贴金额：<span class="value">15000元</span>
                    </li>
                    <li class="countList">
                        手续费汇总金额：<span class="value">15000元</span>
                    </li>
                    <li class="countList">
                        贷记卡消费金额：<span class="value">15000元</span>
                    </li>
                    <li class="countList">
                        活动补贴金额：<span class="value">15000元</span>
                    </li>
                    <li class="countList">
                        手续费汇总金额：<span class="value">15000元</span>
                    </li>
                </ul>
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
    .mchntCountPage{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 4;
        background: $pageBg;
        padding-top: 1.6rem;
        // overflow: auto;
    }
    .datemodule{
        padding: 0.3rem 0;
        background: linear-gradient(#f7f7f7,#f5f5f5);
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
    .detailCount{
        background: white;
        border-top: solid 1px $lineColor;
        .listBox{
            .countList{
                height: 1.45rem;
                border-bottom: solid 1px $lineColor;
                line-height: 1.45rem;
                padding-left: 0.95rem;
                @include sc(0.38rem,$fontColor);
                .value{
                    @include sc(0.37rem,$lineColor);
                }
            }
        }
    }
</style>