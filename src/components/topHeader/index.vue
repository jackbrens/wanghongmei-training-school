<template>
  <div class="top-header-component">
    <div class="flex-center content">
      <div class="logo-img">
        <img :src="requirePath('newHome/logo.png')" alt="王红梅培训学校" />
      </div>
      <div class="contact-item">
        <div class="tip-text">咨询热线</div>
        <div class="divide-line"></div>
        <div class="contact-number">
          <div class="number-item">0553 - 4828989</div>
          <div class="number-item">135 1553 9155</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { requirePath } from '@/utils/index.js'
</script>
<style lang="scss" scoped>
.top-header-component {
  width: 100%;
  height: 160px;
  background-color: #f6f0e5;
  .flex-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .content {
    width: 1200px;
    margin: 0 auto;
    height: 100%;
  }
  .logo-img {
    width: 425px;
    height: 107px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .contact-item{
    display: flex;
    align-items: center;
    .tip-text{
      width: 50px;
      text-align: center;
      font-size: 24px;
      font-weight: bold;
      color: #2c2824;
    }
    .divide-line{
      width: 2px;
      height: 60px;
      background-color: #a39e96;
      margin: 0 30px;
    }
    .contact-number{
      display: flex;
      flex-direction: column;
      height: 60px;
      justify-content: space-around;
      .number-item{
        font-size: 18px;
        font-weight: bold;
        color: #2c2824;
      }
    }  
  }

}
</style>
