<template>
    <header class="mz-header">
        <div class="title">
            <routerLink tag="div" to="@/views/home/film/Index.vue" class="left"><i class="iconfont icon-untitled94"></i></routerLink>
            <div class="right">{{title}}</div>
        </div>
    </header>
</template>
<script>
export default {
  props: {
    // 标题
    title: {
      type: String,
      default: '北京'
    }
  }
}
</script>
<style lang="less">
    .mz-header{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 44px;
        background: #ffffff;
        z-index: 2222;
        .title{

            .left{
                width: 52px;
                float: left;
                height: 44px;
                display: flex;
                i{
                    display: block;
                    height: 19px;
                    width: 19px;
                    font-size: 19px;
                    margin: auto;
                }
            }
            .right{
                width: 270px;
                height: 44px;
                font-size: 17px;
                float: left;
                text-align: center;
                line-height: 44px;
            }
        }
    }
</style>
