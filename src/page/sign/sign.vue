<template>
    <div class="signPage childPage">
        <header-top headtitle="签名" goback="true"></header-top>
        <div class="content">
            <p class="point"><span class="iconfont icon-qianming"></span>签名确认</p>
            <div class="signArea">
                <div class="sign" ref="drawing">
                    <canvas id="canvas" 
                    @touchstart="canvasDown($event)" 
                    @touchend="canvasUp($event)"
                    @touchmove="canvasMove($event)"
                    ref="canwas">
                    </canvas>
                </div>
            </div>
            
        </div>
        <div class="buttons">
            <mt-button class="btn" @click="getImage()" size="normal" type="danger">确定</mt-button>
            <mt-button class="btn" @click="clear()" size="normal" type="danger">重置</mt-button>
        </div>
        <div class="imglook">
            <img :src="imgUrl"/>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue'
    import headerTop from '@/components/header'
    import { Button  } from 'mint-ui'
    Vue.component(Button.name, Button);
    export default {
        data(){
            return {
                cw:'',
                ch:'',
                context: {},
                imgUrl: '',
                // 配置参数
                config: {
                    lineWidth: 3,
                    lineColor: 'black',
                    shadowBlur: 1
                }
            }
        },
        components:{
            headerTop
        },
        mounted(){
            this.$refs.canwas.width=this.$refs.drawing.offsetWidth;
            this.$refs.canwas.height=this.$refs.drawing.offsetHeight;
            const canvas = document.querySelector('#canvas')
            this.context = canvas.getContext('2d')
            this.setCanvasStyle()
        },
        methods:{
            canvasMove (e) {
                const t = e.target
                let canvasX
                let canvasY
                canvasX = e.changedTouches[0].clientX - t.parentNode.offsetLeft
                canvasY = e.changedTouches[0].clientY - t.parentNode.offsetTop
                this.context.lineTo(canvasX, canvasY)
                this.context.stroke()
            },
            beginPath (e) {
                const canvas = document.querySelector('#canvas')
                if (e.target !== canvas) {
                    this.context.beginPath()
                }
            },
            // mouseup
            canvasUp (e) {
                const preData = this.context.getImageData(0, 0, 600, 400)
            },
            // mousedown
            canvasDown (e) {
                // client是基于整个页面的坐标
                // offset是cavas距离顶部以及左边的距离
                const canvasX = e.clientX - e.target.parentNode.offsetLeft
                const canvasY = e.clientY - e.target.parentNode.offsetTop
                this.setCanvasStyle()
                // 清除子路径
                this.context.beginPath()
                this.context.moveTo(canvasX, canvasY)
            },
            //重置操作
            clear () {
                this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height)
            },
            // 生成图片
            getImage () {
                const canvas = document.querySelector('#canvas')
                const src = canvas.toDataURL('image/png')
                this.imgUrl=src
                console.log(this.imgUrl)
            },
            // 设置绘画配置
            setCanvasStyle () {
                this.context.lineWidth = this.config.lineWidth
                this.context.shadowBlur = this.config.shadowBlur
                this.context.shadowColor = this.config.lineColor
                this.context.strokeStyle = this.config.lineColor
            }
        }
    }
</script>
<style scoped lang='scss'>
    @import '../../style/mixin';
    .imglook{
        text-align: center;
        img{
            @include wh(1.5rem,1.5rem)
        }
    }
    .signArea{
        padding: 0.5rem 0.5rem;
        height: 7rem;
        .sign{
            width: 100%;
            height: 100%;
            background: white;
            
            border: solid 1px gray;
            border-radius: 0.2rem;
        }
    }
    .btn{
        background: $bgColor;
        height: 1rem;
        @include sc(0.38rem,white);
        margin-top: 1rem;
        width: 35%;
        margin-left: 1rem;
    }
    .point{
        font-weight: bold;
        text-align: center;
        @include sc(0.4rem,$fontColor);
        margin-top: 1rem;
        .iconfont{
            vertical-align: middle;
            margin-right: 0.3rem;
            @include sc(0.8rem,red);
        }
    }
</style>