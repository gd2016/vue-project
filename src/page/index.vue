<template>
    <div class="indexPage">
        <div class="container">
            <header-top headtitle="徽信宝" right="true"></header-top>
            <div class="swiper">
                <mt-swipe :auto="4000">
                    <mt-swipe-item v-for="(item,index) in swiperImg" :key="index">
                        <img :src="'data:image/png;base64,'+item.adAddress"/>
                    </mt-swipe-item>
                </mt-swipe>
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
                    <li @click="tojava()">
                        <img src="../images/btn_menu_icon05.png"/>
                        <p>调java</p>
                    </li>
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
    import {getStore,setparams,errorhandle} from '@/config/utils'
    import axios from 'axios'
    import { Swipe, SwipeItem } from 'mint-ui';
    Vue.component(Swipe.name, Swipe);
    Vue.component(SwipeItem.name, SwipeItem);
    export default {
        data(){
            return{
                swiperImg:''
            }
        },
        
        components:{
            headerTop,
            footerBottom    
        },
        methods:{
            tojava:function(){
                var toAndroidData = "java:command:htmlDismissDialog";   
                window.toAndroid.jsToAndroid(toAndroidData);
            }
        },
        created:function() {
            if(!getStore('sessionId')){
                this.$router.push({path:'login'})
            }
            var params=setparams({})
            // var params=new URLSearchParams();
            // params.append('json', '{data:{mobileNo:'+this.mobileNo+',loginPwd:'+this.loginPwd+'}}');
            axios ({
                method:'post',
                data:params,
                url:'/mss/api/getBankAd.do'
            })
            .then((response) => {
                if(errorhandle(response,this)){
                    this.swiperImg=response.data.data;
                    console.log(response.data)
                }
            })
        }
    }
</script>
<style scoped lang="scss">
 @import '../style/mixin.scss';
 .indexPage{
     padding-top: 1.6rem;
     padding-bottom: 2rem;
 }
    .container{
        
    }
    .swiper{
        height: 5.8rem;
        img{
            @include wh(100%,100%)
        }
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