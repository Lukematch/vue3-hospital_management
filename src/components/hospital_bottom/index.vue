<template>
  <div class="bottom">
    <div class="content">
      <div class="left">
        京ICP备 13018369号 电话挂号010-56253825
      </div>
      <div class="right">
        <span>联系我们</span>
        <sapn>合作伙伴</sapn>
        <span>用户协议</span>
        <span>隐私协议</span>
      </div>
    </div>
  </div>
</template>
    
<script setup lang='ts'>

</script>
    
<style scoped>
.bottom{
  width: 100%;
  height: 50px;
  background: #f0f2f5;
  display: flex;
  justify-content: center;
  border-top: #ccc solid 1px;
}
.content{
  width: 100%;
  height: 100%;
  background: #f0f2f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  font-weight: 300;
}
.left{
  margin-left: 30px;
}
.right{
  margin-right: 30px;
  span{
    margin: 0 5px;
  }
}
</style>