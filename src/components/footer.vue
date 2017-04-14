<template>
    <footer class="footerContainer">
        <ul class="clear footul">
            <router-link :to="{path: '/index'}" tag="li" class="liborder footli left" :class="$route.path.indexOf('index')!==-1?'active':''">
                 <span class="footicon iconfont icon-shouye-shouye"></span>
                <span class="footfont">首页</span>
            </router-link>
            <router-link :class="$route.path.indexOf('mchntCenter')!==-1?'active':''" :to="{path: '/mchntCenter'}" tag="li" class="footli left">   
                <span class="footicon iconfont icon-shanghu"></span>
                <span class="footfont">商户中心</span>
            </router-link>
        </ul>
    </footer>
</template>

<script>
export default {
  
}
</script>

<style scoped lang="scss">
@import '../style/mixin.scss';
    .footerContainer{
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 1.45rem;
        line-height: 1.45rem;
        z-index: 10;
        left: 0;
        background: none;
        .footul{
            width:100%;
            border-top: solid 1px $lineColor;
            background: white;
            height: 1.45rem;
            .liborder{
                border-right: solid 1px $lineColor;
            }
            .active{
                background: #f2d9d6;
            }
        }
        .footli{
            width: 50%;
            text-align: center;
            height: 100%;
            .footicon{
                 @include sc(0.4rem,$bgColor);
                 padding-top: 0.05rem;
                 display: inline-block;
            }
            .footfont{
                @include sc(0.4rem,$bgColor);
            }
        }
    }
</style>
