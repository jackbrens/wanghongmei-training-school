<template>
  <footer class="footer" :class="{ footerMargin: !route.meta?.footerNoMargin }">
    <div class="container wrapper">
      <div class="menu-box" v-if="false">
        <p class="head-title">网站导航·MENU</p>
        <div class="line"></div>
        <ul>
          <li
            class="menu-item"
            v-for="(li, i) in _menuList"
            :key="i"
            @click="handleOnMenu(li.routerName)"
          >
            {{ li.label }}
          </li>
        </ul>
      </div>
      <div class="contact-box">
        <p class="head-title">联系方式·CONTACT</p>
        <div class="line"></div>
        <div class="phone">
          <span>座机电话：0553-4828989</span>
          <span>手提电话：13515539155</span>
        </div>
        <div class="address">地址：安徽省芜湖市镜湖区黄山东路新华文沁苑一栋五单元五层</div>
      </div>
      <div class="contact-pic">
        <img :src="requirePath('contact.jpg')" alt="" />
      </div>
    </div>
    <div class="copyright wrapper">Copyright © 2022-2024 安徽喜贯. All Rights Reserved.</div>
  </footer>
</template>
<script setup>
import { menuList, requirePath } from '@/utils/index.js'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()

// 首页的label需要处理一下
const _menuList = [
  {
    label: '网站首页',
    routerName: 'home'
  },
  ...menuList.slice(1)
]
const handleOnMenu = (routerName) => {
  router.push({ name: routerName })
}
</script>
<style lang="scss" scoped>
@import '@/assets/style/variable';
.footerMargin {
  margin-top: 100px;
  @include media($breakpoint-md) {
    margin-top: 50px;
  }
}
.footer {
  padding: 40px 0;
  background-color: #59413d;
  color: #999999;
  .container {
    display: flex;
    justify-content: space-between;
    @include media($breakpoint-md) {
      flex-direction: column-reverse;
      align-items: center;
    }
    .menu-box {
      @include media($breakpoint-md) {
        display: none;
      }
    }
    .contact-box {
      @include media($breakpoint-md) {
        margin-top: 30px;
        padding: 0 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .phone {
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        @include media($breakpoint-md) {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 14px;
        }
      }
      .address {
        @include media($breakpoint-md) {
          font-size: 14px;
          text-align: center;
        }
      }
    }
    .contact-pic {
      width: 200px;
      height: 200px;
      @include media($breakpoint-md) {
        width: 150px;
        height: 150px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .copyright {
    margin-top: 30px;
    text-align: center;
  }
}

.line {
  background-color: #ffffff3d;
  height: 1px;
  width: 70%;
  margin: 20px 0;
}
.head-title {
  color: #fff;
  font-weight: 500;
  font-size: 24px;
  @include media($breakpoint-md) {
    font-size: 16px;
  }
}
.menu-item {
  display: inline-block;
  padding-right: 5%;
  padding-bottom: 5%;
  cursor: pointer;
  &:hover {
    color: #ffffff;
  }
}
</style>
