<template>
    <div class="top">
        <div class="content">
            <div class="left">
                <img src="@/assets/images/logo.png"/>
                <p>尚医通 预约挂号统一平台</p>
            </div>
            <div class="right">
                <p class="help">帮助中心</p>
                <p class="login">登录/注册</p>
            </div>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
    
</script>
    
<style scoped>
.top{
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 70px;
    background-color: #fff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.content{
    width: 100%;
    height: 70px;
    background-color: #eee;
    display: flex;
    justify-content: space-between;
    .left{
        display: flex;
        justify-content: center;
        align-items: center;
        color: #55a6fe;
        img{
            width: 50px;
            height: 50px;
            margin-left: 30px;
            margin-right: 10px;
        }
    }
    .right{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 30px;
        .help{
            margin-right: 20px;
        }
    }
}
</style>