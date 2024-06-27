<template>
  <footer class="footerInfo-components">
    <div class="left-contact">
      <div class="contact-tip">联系方式·CONTACT</div>
      <ul class="contact-list">
        <li>电话:&nbsp;0553-4828989</li>
        <li>手机:&nbsp;135-1553-9155</li>
        <li>地址:&nbsp;安徽省芜湖市镜湖区黄山东路新华文沁苑一栋五单元五层</li>
      </ul>
    </div>

    <div class="qr-code">
      <img :src="requirePath('newHome/qr-code.png')" alt="二维码扫一扫" />
    </div>
  </footer>
</template>
<script setup>
import { requirePath } from '@/utils/index.js'
</script>
<style lang="scss" scoped>
@import '@/assets/style/variable';
.footerInfo-components {
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include media($breakpoint-md) {
    flex-direction: column;
  }

  .left-contact {
    @include media($breakpoint-md) {
      text-align: center;
    }
    .contact-tip {
      font-size: 24px;
      font-weight: bold;
      color: #a4291c;
    }
    .contact-list {
      margin-top: 30px;
      li {
        line-height: 1.5;
        font-size: 18px;
        color: #2c2824;
      }
    }
  }

  .qr-code {
    width: 170px;
    height: 170px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>
