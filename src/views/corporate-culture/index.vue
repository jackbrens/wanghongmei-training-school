<!--企业文化-->
<template>
  <div>
    <breadcrumb />
    <div class="wrapper content-main">
      <div class="content-left animate__fadeInLeft onMounted-wow">
        <div class="item" v-for="(item, i) in culture" :key="i">
          <p>{{ item.title }}</p>
          <p>{{ item.desc }}</p>
        </div>
      </div>
      <div class="content-right animate__fadeInRight onMounted-wow">
        <div class="image" v-for="(img, imgIndex) in images" :key="imgIndex">
          <img :src="requirePath(img.imgPath)" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import breadcrumb from '@/components/breadcrumb'
import { requirePath } from '@/utils/index.js'
import { onMounted } from 'vue'
import WOW from 'wow.js'

onMounted(() => {
  const wowInt = new WOW({
    // 对所有拥有该class的元素挂载动画
    boxClass: 'onMounted-wow',
    // 需要挂载的动画元素
    animateClass: 'animate__animated',
    // 偏移值（即偏移一定距离后再执行动画，推荐设置！）
    offset: 100,
    // 移动设备是否生效
    mobile: true,
    // 是否支持异步
    live: true
  })
  wowInt.init()
})

const culture = [
  {
    title: '【企业宗旨】',
    desc: '做健康　做事业'
  },
  {
    title: '【企业愿景】',
    desc: '做中医养生品牌的传承者和引领者'
  },
  {
    title: '【企业使命】',
    desc: '传承中医精髓　弘扬中华文化'
  },
  {
    title: '【企业发展目标】',
    desc: '提供专业高端服务　成就养生卓越品牌'
  },
  {
    title: '【企业经营管理理念】',
    desc: '业  精于专　功  成于勤'
  },
  {
    title: '【企业服务理念】',
    desc: '态度书写一切　细节决定成败'
  },
  {
    title: '【企业人才观】',
    desc: '选贤举能　讲信修睦'
  }
]

const images = [
  {
    imgPath: 'corporateCulture/001.jpg'
  },
  {
    imgPath: 'corporateCulture/002.jpg'
  },
  {
    imgPath: 'corporateCulture/003.jpg'
  },
  {
    imgPath: 'corporateCulture/004.jpg'
  },
  {
    imgPath: 'corporateCulture/005.jpg'
  },
  {
    imgPath: 'corporateCulture/006.jpg'
  }
]
</script>
<style scoped lang="scss">
@import '@/assets/style/variable';
.content-main {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  @include media($breakpoint-md) {
    flex-direction: column;
  }
  .content-left {
    display: flex;
    justify-content: center;
    flex-direction: column;
    .item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 30px;
      & > p:nth-of-type(1) {
        color: #d21b21ff;
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 4px;
      }
      & > p:nth-of-type(2) {
        font-size: 20px;
      }
    }
  }
  .content-right {
    display: flex;
    flex-wrap: wrap;
    width: 700px;
    @include media($breakpoint-md) {
      width: auto;
    }
    .image {
      flex: 48%;
      margin-bottom: 20px;
      margin-right: 1%;
      & > img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
