<!--业务板块-->
<template>
  <div class="business-segments">
    <breadcrumb />
    <div class="business-main">
      <div class="main-box wrapper custom-wrapper">
        <div class="head-box">
          <div class="head-left">业务板块</div>
          <div class="head-right">打造中医养生产业链全闭环体系</div>
        </div>
        <div class="container-box animate__fadeInUp onMounted-wow">
          <div class="item-content" v-for="(item, i) in businessList" :key="i">
            <img :src="requirePath(item.imgPath)" alt="" />
            <p>{{ item.label }}</p>
          </div>
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

const businessList = [
  {
    imgPath: 'businessSegments/001.png',
    label: `企业在产品上：拥有上千亩艾草种植基地，从源头把控原材料的可靠性，提供产品的溯源性。以“企业+农村合作社+农户”的模式从质量和数量上保障原材料产品的供给，为后期门店开设打好坚实的基础。`
  },
  {
    imgPath: 'businessSegments/002.png',
    label: `企业在人才储备上：增设（芜湖、阜阳、亳州）职业培训学校三所；与芜湖中医药高等专科学校、康泰职业培训学校、皖新职业培训学校、芜湖县医药卫生学校、南京中保职业培训学校等紧密合作。`
  },
  {
    imgPath: 'businessSegments/003.png',
    label: `企业在人才就业上：目前在安徽省芜湖市、马鞍山市、阜阳市、河北省保定市共计开设三十余家直营中医推拿店，后期将通过直营、加盟、托管等模式开设门店，提供更多的就业创业平台。`
  },
  {
    imgPath: 'businessSegments/004.png',
    label: `企业在数据整合上：自主研发收银系统和会员管理系统，运用互联网思维针对客户的裂变与黏性有了更好的创新。在异业联盟上：以一卡通用为导向，为客户提供便利，为商家提高营收。在公益事业上：解决残疾人士就业，不断完善着企业的社会使命。`
  }
]
</script>
<style scoped lang="scss">
@import '@/assets/style/variable';
.custom-wrapper {
  max-width: 1600px;
}
.business-main {
  //background-color: #fdfcf0ff;
  overflow: hidden;
  .main-box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
.head-box {
  display: flex;
  margin: 50px 0;
  @include media($breakpoint-md) {
    flex-direction: column;
    align-items: center;
  }
  .head-left {
    width: 156px;
    height: 46px;
    background: url('@/assets/juanzhou.png') no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    color: #f2e6caff;
  }
  .head-right {
    margin-left: 30px;
    letter-spacing: 3rem;
    font-family: 'FangSong', sans-serif;
    font-size: 22px;
    font-weight: bold;
    display: flex;
    align-items: center;
    @include media($breakpoint-md) {
      letter-spacing: 0.1rem;
      margin-top: 30px;
      margin-left: 0;
      font-weight: 500;
      font-size: 16px;
      color: $juanzhou-color;
    }
  }
}
.container-box {
  display: flex;
  flex-wrap: wrap;
  .item-content {
    flex: 46%;
    display: flex;
    align-items: center;
    margin-right: 2%;
    margin-bottom: 100px;
    @include media($breakpoint-md) {
      flex-direction: column;
      margin-left: 20px;
      margin-right: 20px;
      margin-bottom: 30px;
    }
    & > img {
      width: 380px;
      height: 300px;
      margin-right: 30px;
      @include media($breakpoint-md) {
        margin-right: 0;
        width: 100%;
        height: 250px;
      }
    }
    & > p {
      line-height: 30px;
      color: #535353;
    }
  }
}
</style>
