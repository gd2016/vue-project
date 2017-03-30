<template>
    <div class="indexPage">
        <div class="container">
            <header-top headtitle="徽信宝"></header-top>
            <div class="swiper">

            </div>
            <div class="navListContainer">
                <ul class="clear navList">
                    <router-link :to="{path: '/business'}" tag="li">
                        <img src="../images/btn_menu_icon01.png"/>
                        <p>商户收单</p>
                    </router-link>
                    <router-link :to="{path: '/business'}" tag="li">
                        <img src="../images/btn_menu_icon02.png"/>
                        <p>便民业务</p>
                    </router-link>
                    <router-link :to="{path: '/mchntVip'}" tag="li">
                        <img src="../images/btn_menu_icon03.png"/>
                        <p>会员管理</p>
                    </router-link>
                    <router-link :to="{path: '/business'}" tag="li">
                        <img src="../images/btn_menu_icon04.png"/>
                        <p>余额查询</p>
                    </router-link>
                    <router-link :to="{path: '/business'}" tag="li">
                        <img src="../images/btn_menu_icon05.png"/>
                        <p>更多功能</p>
                    </router-link>
                </ul>
            </div>
        </div>
        <footer-bottom></footer-bottom>
    </div>
</template>
<script>
    import Vue from 'vue'
    import headerTop from '../components/header'
    import footerBottom from '../components/footer'
    export default{
        components:{
            headerTop,
            footerBottom    
        }
    }
</script>
<style scoped lang="scss">
 @import '../style/mixin.scss';
 .indexPage{
     padding-bottom: 1.6rem;
 }
    .container{
        padding-bottom: 1.6rem;
    }
    .swiper{
        height: 5.8rem;
    }
    .navList{
        padding: 0.65rem 0 0 0.5rem;
        li{
            width: 33.3%;
            float: left;
            padding: 0.8rem 0.9rem 0 0.6rem;
            img{
                @include wh(1.9rem,1.9rem);
            }
            p{
                @include sc(0.4rem,$fontColor);
                text-align: center;
            }
        }
    }
</style>