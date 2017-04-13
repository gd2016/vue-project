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
  #app{
    height: 100%;
  }
  .footerPage{
      padding-top: 1.6rem;
      height: 100%;
      padding-bottom: 1.45rem;
  }
  .page{
      padding-top: 1.6rem;
      height: 100%;   
  }
  .content{
      height: 100%;
      overflow: auto;
  }
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
  .branchA{
        .picker{
            .picker-items{
                .picker-item{
                    font-size: 0.4rem ;
                    padding: 0;
                }
            }
        }
    }
  .mint-indicator-mask{
    z-index: 8888;
  }
  .mint-indicator-wrapper{
    z-index: 5;
  }
  .spinner{
    height: 1rem;
    display: block;
  }
  .mint-spinner-fading-circle{
        left:50%;
        top: 50%;
        transform: translate(-14px,-14px);
    }
    .detailInfo{
            .mint-cell{
                .mint-cell-wrapper{
                    span{
                        font-size: 0.35rem;
                    }
                    .mint-cell-value{
                      font-size: 0.35rem;
                    }
                }
            }
        }
</style>
