<template>
    <div class="detailFlow childPage">
        <header-top headtitle="流水详情" goback="true"></header-top>
        <section class="detailbox">
            <div class="detailTitle">
                <span>商户信息</span>
                <span class="middle"></span>
            </div>
            <div class="detailInfo">
                <p>商户名称：<span class="value"></span></p>
                <p>商户编号：<span class="value"></span></p>
                <p>所属收单机构：<span class="value"></span></p>
                <p>申请日期：<span class="value"></span></p>
                <p>营业执照号码：<span class="value"></span></p>
                <p>注册资本：<span class="value">1000万</span></p>
                <p>法人代表：<span class="value"></span></p>
                <p>结算账户账号：<span class="value"></span></p>
                <p>绑定设备：<span class="value">杭州店</span></p>
            </div>
        </section>
    </div>
</template>
<script>
import headerTop from '@/components/header'
    export default {
        data(){
            return {

            }
        },
        props:['info'],
        components:{
            headerTop
        },
        watch:{
            info(newvalue){
                console.log(newvalue)
            }
        }
    }
</script>
<style scoped lang="scss">
    
</style>