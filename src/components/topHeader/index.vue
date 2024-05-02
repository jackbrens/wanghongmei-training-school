<template>
  <div>
    <div class="top-bar">
      <div class="wrapper top-box">
        <div class="logo" @click="router.push('/')">
          <img :src="logoImg" alt="" />
        </div>
        <div class="right-top">
          <div class="top-title">王红梅职业培训学校</div>
          <div class="hotline">
            <div class="left-box">
              <p>招生</p>
              <p>热线</p>
            </div>
            <div class="line"></div>
            <div class="right-box">
              <p>0553-4828989</p>
              <p>13515539155</p>
            </div>
          </div>
          <ul class="uls" v-if="false">
            <li
              v-for="(li, index) in menuList"
              :class="{ active: route.name === li.routerName }"
              :key="index"
              @click="handleOnMenu(li.routerName)"
            >
              {{ li.label }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--移动端的导航-->
    <div class="top-bar-mobile">
      <img class="logo" :src="logoImg" alt="" @click="router.push('/')" />
      <div class="menu-icon" @click="handleIcon" v-if="false"></div>
      <!--移动端的导航下拉-->
      <div class="navbar-collapse" :class="{ active: isShowCollapse }">
        <ul class="nav-list">
          <li
            :class="{ active: route.name === li.routerName }"
            v-for="(li, index) in menuList"
            :key="index"
            @click="handleOnMenuMobile(li.routerName)"
          >
            {{ li.label }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter, useRoute } from 'vue-router'
import logoImg from '@/assets/menu/logo2.png'
import { menuList } from '@/utils/index.js'
import { ref } from 'vue'

const router = useRouter()
const route = useRoute()
const handleOnMenu = (routerName) => {
  router.push({ name: routerName })
}
const handleOnMenuMobile = (routerName) => {
  router.push({ name: routerName })
  isShowCollapse.value = false
}

const isShowCollapse = ref(false)

const handleIcon = () => {
  isShowCollapse.value = !isShowCollapse.value
}
</script>
<style lang="scss" scoped>
@import '@/assets/style/variable';
.top-bar {
  background-color: #ffffff;
  .top-box {
    display: flex;
    justify-content: space-between;
    height: 80px;
    .logo {
      padding: 10px 0;
      width: 300px;
      cursor: pointer;
      & > img {
        width: 100%;
        height: 100%;
      }
    }
    .right-top {
      display: flex;
      flex: 1;
      justify-content: space-between;
      align-items: center;
    }
  }
}
.top-title {
  font-size: 50px;
  margin-left: 20px;
  font-family: '隶书', '宋体', Arial, serif;
  color: #4d4d4dff;
}
.hotline {
  display: flex;
  align-items: center;
  .line {
    height: 40px;
    width: 1px;
    background-color: #333333;
    margin: 0 10px;
  }
  .left-box {
  }
  .right-box {
    font-size: 20px;
  }
}
.uls {
  display: flex;
  color: #000;
  & > li {
    padding: 0 18px;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: $bg-color;
      color: #ffffff;
    }
  }
  & > li.active {
    background-color: $bg-color;
    color: #ffffff;
  }
}

.navbar-collapse {
  position: absolute;
  top: 50px;
  width: 100%;
  background-color: #ffffff;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  transform: scaleY(0);
  transform-origin: 50% 0;
  opacity: 0;
  &.active {
    transform: scaleY(1);
    opacity: 1;
  }
  .nav-list {
    & > li {
      padding: 10px;
      border-bottom: 1px solid #eeeeee;
      cursor: pointer;
      &.active {
        color: $bg-color;
      }
    }
  }
}

.top-bar-mobile {
  position: fixed;
  z-index: 99;
  width: 100vw;
  height: 50px;
  top: 0;
  left: 0;
  background-color: #f7f7f7;
  display: none;
  justify-content: space-between;
  padding: 6px;
  .logo {
    width: 150px;
  }
  .menu-icon {
    background: url('@/assets/menu.svg') no-repeat;
    width: 40px;
    height: 40px;
  }
}
@include media($breakpoint-md) {
  .top-bar {
    display: none;
  }
  .top-bar-mobile {
    display: flex;
  }
}
</style>
