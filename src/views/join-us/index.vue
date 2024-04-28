<!--品牌加盟-->
<template>
  <div>
    <breadcrumb />
    <div class="wrapper content-main">
      <div class="pc-img-box" v-for="(img, i) in pcImages" :key="i">
        <img :src="requirePath(img)" alt="" />
      </div>
      <div class="img-box" v-for="(img, i) in images" :key="i">
        <div v-if="img.title" class="title">{{ img.title }}</div>
        <img :src="requirePath(img.imgPath)" alt="" />
      </div>
    </div>
  </div>
</template>
<script setup>
import breadcrumb from '@/components/breadcrumb'
import { requirePath } from '@/utils/index.js'

const pcImages = ['joinUs/pc-001.png', 'joinUs/pc-002.png', 'joinUs/pc-003.png']

const images = [
  {
    imgPath: 'joinUs/002.png',
    title: '项目背景'
  },
  {
    imgPath: 'joinUs/003.png'
  },
  {
    imgPath: 'joinUs/004.png',
    title: '品牌优势'
  },
  {
    imgPath: 'joinUs/005.png'
  },
  {
    imgPath: 'joinUs/006.png',
    title: '合作加盟'
  },
  {
    imgPath: 'joinUs/007.png'
  }
]
</script>
<style scoped lang="scss">
@import '@/assets/style/variable';
.content-main {
  padding-top: 30px;
  display: flex;
  flex-wrap: wrap;
  @include media($breakpoint-md) {
    flex-direction: column;
  }
  .pc-img-box {
    margin-bottom: 30px;
    @include media($breakpoint-md) {
      display: none;
    }
    & > img {
      width: 100%;
      height: 100%;
    }
  }
  .img-box {
    flex: 40%;
    margin-right: 10%;
    margin-bottom: 100px;
    display: none;
    flex-direction: column;
    align-items: center;
    @include media($breakpoint-md) {
      display: flex;
      margin-right: 0;
      padding: 0 30px;
    }
    &:nth-of-type(2n) {
      margin-right: 0;
    }
    & > img {
      width: 100%;
      height: 100%;
    }
    .title {
      background: url('@/assets/juanzhou.png') no-repeat;
      background-size: 100% 100%;
      width: 180px;
      height: 42px;
      font-size: 24px;
      text-align: center;
      color: #f2e6caff;
      margin-bottom: 30px;
      @include media($breakpoint-md) {
        font-size: 20px;
        width: 140px;
        height: 34px;
        line-height: 34px;
      }
    }
  }
}
</style>
