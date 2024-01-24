<template>
    <div class="region">
      <div class="content">
        <div class="left">地区:</div>
        <ul class="area">
          <li class="active">全部</li>
          <li>昌平区</li>
          <li>金华区</li>
        </ul>
      </div>
    </div>
</template>
  
<script setup lang='ts'>
  
</script>
  
<style lang="scss" scoped>
.region{
  color:#7f7f7f;
  .content{
    display:flex;
    margin-top:10px;
    margin-left:60px;
  }
  .left{
    margin-right:10px
  }
  .area{
    display:flex;
    flex-wrap:wrap;
      li{
        margin-right: 10px;
        &.active{
          color: #55a6fe;
        }
        &:hover{
          cursor:pointer;
          color: #55a6fe;
        }
      }
  }
}
</style>