<template>
    <div class="page">
        <header-top headtitle="便民业务" goback="true"></header-top>
        <div class="content">
            <ul class="businessNav clear">
                <li>
                    <img src="../../images/btn_business_icon01.png"/>
                    <p>手机充值</p>
                </li>
                <li>
                    <img src="../../images/btn_business_icon02.png"/>
                    <p>燃气缴费</p>
                </li>
                <router-link :to="{path: '/business/payment'}" tag="li">
                    <img src="../../images/btn_business_icon03.png"/>
                    <p>电力缴费</p>
                </router-link>
                <li>
                    <img src="../../images/btn_business_icon04.png"/>
                    <p>水费缴费</p>
                </li>
                <li>
                    <img src="../../images/btn_business_icon05.png"/>
                    <p>交通罚款</p>
                </li>
                <li>
                    <img src="../../images/btn_business_icon06.png"/>
                    <p>有线电视缴费</p>
                </li>

            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    import Vue from 'vue'
    import headerTop from '../../components/header'
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
@import '../../style/mixin.scss';
    .businessNav{
        padding: 0.3rem 0 0 0;
        li{
            width:33.33%;
            float: left;
            padding: 1rem 0 0 0;
            text-align: center;
            img{
                @include wh(1.9rem,1.9rem)
            }
            p{
                @include sc(0.4rem,$fontColor);
                text-align:center;
            }
        }
    }
</style>