<template>
    <ul class='mz-footer'>
        <li><router-link to='/films' active-class="a">
            <i class="iconfont icon-film"></i><span>电影</span>
            </router-link></li>
        <li><router-link to='/cinemas' active-class="a">
            <i class="iconfont icon-yingyuana"></i><span>影院</span>
            </router-link></li>
        <li><router-link to='/center' active-class="a">
            <i class="iconfont icon-wode"></i><span>我的</span>
        </router-link></li>
    </ul>
</template>
<style lang="less">
    .mz-footer{
        height: 49px;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        position: fixed;
        z-index: 999999;
        bottom: 0;
        left: 0;
        background-color: #fff;
        li{
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            i{
                font-size: 21px;
            }
            i,span{
                display: block;
                text-align: center;
                color:#797d82;
            }
            .a i,.a span{
                color:#ff9800 !important;
            }
        }
    }
</style>
