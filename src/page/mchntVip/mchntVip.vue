<template>
    <div class="mchntVipPage">
        <header-top headtitle="会员管理" goback="true"></header-top>
        <div class="headModule">
            <div class="imgBox">
                <img src="../../images/member_icon.png"/>
            </div>
            <div class="totalAccount clear">
                <p class="mchntAccount left">会员总数：<span class="values">999</span></p>
                <p class="intergralAccount right">会员总积分：<span class="values">99999</span></p>
            </div>
        </div>
        <div class="searchModule">
            <div class="searchBox">
                <span class="searchIcon iconfont icon-chaxun"></span>
                <input type="text"  placeholder="输入要查询的会员姓名或手机号"/>
            </div>
        </div>
        <div class="mchntModule">
            <ul class="listBox">
                <li class="mchntList clear">
                    <div class="left mchntName ellipsis">
                        <span class="iconfont icon-yonghuming"></span>
                        <span class="name ">会员姓名：<a class="values ">张三</a></span>
                    </div>
                    <div class="right mchntIntergral">
                        <span class="jifen iconfont icon-huiyuanjifen"></span>
                        <span class="intergral">会员积分：<a class="values">22</a></span>
                    </div>
                </li>
                <li class="mchntList clear">
                <div class="left mchntName ellipsis">
                    <span class="iconfont icon-yonghuming"></span>
                    <span class="name ">会员姓名：<a class="values ">张三</a></span>
                </div>
                <div class="right mchntIntergral">
                    <span class="jifen iconfont icon-huiyuanjifen"></span>
                    <span class="intergral">会员积分：<a class="values">22</a></span>
                </div>
                </li>
                    <li class="mchntList clear">
                    <div class="left mchntName ellipsis">
                        <span class="iconfont icon-yonghuming"></span>
                        <span class="name ">会员姓名：<a class="values ">张三</a></span>
                    </div>
                    <div class="right mchntIntergral">
                        <span class="jifen iconfont icon-huiyuanjifen"></span>
                        <span class="intergral">会员积分：<a class="values">22</a></span>
                    </div>
                </li>
            </ul>
        </div>
        
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
        padding: 0.5rem 0.4rem;
        .searchBox{
            border: solid 1px #bdbdbd;
            border-radius: 0.12rem;
            padding: 0.1rem 0.5rem 0.15rem;
            background: white;
            .searchIcon{
                color:#b3b3b3;
            }
            input{
                width: 8rem;
                height: 100%;
                padding-left: 0.2rem;
            }
        }
    }
    .mchntModule{
        border-top: solid 1px $lineColor;
        .mchntList{
            background: white;
            border-bottom: solid 1px $lineColor;
            height: 1.5rem;
            padding: 0.45rem;
            @include sc(0.38rem,$fontColor);
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