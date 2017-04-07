<template>
    <div class="detailFlow" >
        <ul class="detaillistBox"  >
            <li class="detaillist clear" >
                <section class="iconBox">
                    <img src="../images/list_icon01.png"/>
                </section>
                <section class="detailtype">
                    <p class="font ellipsis"></p>
                    <p class="time"></p>
                </section>
                <section class="detailstatus">
                    <p class="transAmount ellipsis"><span>+1</span>元</p>
                    <p class="transFlag">交易成功</p>
                </section>
                <span class="middle"></span>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        props:['index']
    }
</script>
<style scoped lang="scss">
    
</style>