<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
 
}
</script>

<style lang="scss">
  @import './style/common';
  @import './style/mixin.scss';
  .mint-field{
    .mint-cell-wrapper{
      height: 1.2rem;
      line-height: 1.2rem;
      padding:0;
      .mint-cell-title{
        width: 35%;
        padding-left:  1rem;
      }
      .mint-cell-value{
        padding-right: 1rem;
        .mint-field-core{
          height: 1rem;
        }
      }
    }
    .mint-cell-text{
      @include sc(0.38rem,$fontColor)
    }
    .mint-cell-value{
      @include sc(0.38rem,$lineColor)
    }
  }
  .yzminput{
    .mint-cell-wrapper{
      .mint-cell-value{
        padding-right: 3.5rem;
      }
    }
  }
  .mint-toast{
    background: $bgColor !important;
      .mint-toast-text{
          color:white;
      }
  }
</style>
