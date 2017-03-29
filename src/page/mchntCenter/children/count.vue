<template>
    <div class="mchntCountPage">
        <header-top headtitle="月销售统计" goback="true"></header-top>
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
        z-index: 14;
        background: $pageBg;
    }
</style>