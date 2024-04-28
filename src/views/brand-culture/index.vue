<template>
  <div>
    <breadcrumb />
    <div
      class="brand-item animate__fadeInUp onMounted-wow"
      :data-wow-delay="`${index * 0.3}s`"
      v-for="(item, index) in brandList"
      :key="index"
    >
      <div class="wrapper">
        <div class="img">
          <img :src="requirePath(item.imgPath)" alt="" />
        </div>
        <div class="right-box">
          <p>品牌故事: {{ item.title }}</p>
          <p>{{ item.english }}</p>
          <p>{{ item.subtitle }}</p>
          <div class="line"></div>
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </div>
    <div class="wrapper story-box animate__fadeInUp onMounted-wow">
      <div class="story-item" v-for="(item, i) in storyList" :key="i">
        <div class="story-title">
          <div class="title">{{ item.title }}</div>
          <div class="line"></div>
        </div>
        <div class="story-content">
          <img :src="requirePath(item.imgPath)" alt="" />
          <p>{{ item.desc }}</p>
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

const brandList = [
  // {
  //   imgPath: 'logo/xiguan-logo.png',
  //   title: '安徽喜贯',
  //   english: 'COMPANY STORY',
  //   subtitle: '三代传承，以传承中医精髓，弘扬中华文化为己任',
  //   desc: `喜贯，1956年始，三代传承，一路秉承中医养生健康观、自然观、求己观的发展理念，自始以“传承中医精髓，弘扬中华文化”为己任，
  //   喜贯打破了传统旧有思维，创造性地整合了中医养生最佳资源，将养生门店、职培学校、中草药种植加工和赋能平台四大业务板块联动运营，
  //   形成一体三翼的格局，打造了中医养生产业链全闭环体系，力行为行业互为补充、和谐发展的生态圈贡献自己一份力量。`
  // },
  {
    imgPath: 'logo/wanghongmei-logo.png',
    title: '王红梅',
    english: 'COMPANY STORY',
    subtitle: '历经五十多年的品牌老店，具有厚重的中华中医文化底蕴',
    desc: `“王红梅祖传按摩”是一家历经五十多年的品牌老店，具有厚重的中华中医文化底蕴，是芜湖市中医推拿界的权威品牌。
    多年来，王红梅医师一直秉承“以人为本”的理念和“健康服务”的原则，不断研究探索中医推拿技术，积累临床经验，
    而千千万万的江城人民也在“王红梅祖传按摩中心”得到了病痛的缓解和治疗，感受到中医文化的博大精深。`
  },
  {
    imgPath: 'logo/rudetang-logo.png',
    title: '茹德堂',
    english: 'COMPANY STORY',
    subtitle: '不忘初心，牢记使命',
    desc: `“茹德堂”是安徽喜贯健康管理咨询有限公司旗下艾灸养生品牌，其创始人是世界中医药学会主办的2015亚洲艾灸高峰论坛（日本大阪）中方
    代表王丽茹女士。“茹德堂”不忘初心，立志于为国家大健康产业发展倾尽绵薄之力，将以前瞻性的健康管理理念为依托，
    凭借专业的健康管理团队和国内外优质的软硬件资源，为社会大众提供专业专享健康服务，引领中医艾灸行业发展。`
  }
]

const storyList = [
  {
    title: '发源',
    imgPath: 'brandCulture/001.jpg',
    desc: '上世纪70年代末，初代创始人陶宜珍曾是芜湖市盲人五金厂的管理者，一名中共党员，在时代变革的重要时期，她多方考察、开拓创新，将中医推拿技术引流回本土加以学习、创新，从而创办了芜湖市第一家盲人按摩诊所。她在不断地学习与实践中总结创新出更具疗效的推拿按摩技法，不断完善，形成了一套独有的中医推拿体系。'
  },
  {
    title: '传承',
    imgPath: 'brandCulture/002.jpg',
    desc: '王红梅，师从陶宜珍，“按摩医师”资质，品牌创始人。1999年，王红梅老师继承了师父的遗志，弘扬传统技艺，不断宣传祖传推拿按摩技术，培养出众多优秀的推拿按摩技师，为推拿按摩行业这一中医国技的发展和社会残疾人群生存、创业等方面发挥着自己的微薄之力。'
  },
  {
    title: '发展',
    imgPath: 'brandCulture/003.jpg',
    desc: '肖业宇，王红梅老师嫡传弟子，立志将“王红梅”品牌全面推向社会，先后与芜湖市多家医院及专业院校合作，并创办王红梅按摩职业培训学校，解决企业人才储备问题；在品牌产品端为把控原材料品质，建立了中草药种植基地，总基地600亩，形成了产业开闭环，为走向品牌全国化而奠定了坚实基础。'
  },
  {
    title: '使命',
    imgPath: 'brandCulture/004.jpg',
    desc: '从70年代末到21世纪初，三代人的砥砺前行。不同的时代造就不同的使命，在平凡的岗位上，一代又一代的“王红梅人”为继承弘扬传统手艺而前赴后继，为社会未来的大健康产业而添砖加瓦，这里面有你、有我、也有他……'
  }
]
</script>
<style lang="scss" scoped>
@import '@/assets/style/variable';
.brand-item {
  padding: 50px 0;
  &:nth-of-type(2n-1) {
    background-color: #f1f2f3;
    position: relative;
    z-index: -2;
  }
  &:nth-of-type(2n-1) .wrapper {
    flex-direction: row-reverse;
    @include media($breakpoint-md) {
      flex-direction: column;
      align-items: center;
    }
    .right-box {
      margin: 0 50px 0 0;
      @include media($breakpoint-md) {
        margin: 30px 30px;
      }
    }
  }
  .wrapper {
    display: flex;
    @include media($breakpoint-md) {
      flex-direction: column;
      align-items: center;
    }
  }
  .img {
    width: 300px;
    height: 300px;
    background-color: #f7f7f7;
    border-radius: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    @include media($breakpoint-md) {
      max-width: 200px;
      max-height: 200px;
    }
    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background-color: #a12b3d99;
      @include media($breakpoint-md) {
        max-width: 60px;
        max-height: 60px;
      }
    }
    &::before {
      left: 0;
      bottom: 0;
      z-index: -1;
    }
    &::after {
      right: 0;
      top: 0;
    }
    & > img {
      width: 90%;
      height: 90%;
      border-radius: 50%;
      object-fit: contain;
    }
  }
  .right-box {
    margin-left: 50px;
    color: #333333;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @include media($breakpoint-md) {
      margin: 30px 30px 0;
    }
    .line {
      height: 4px;
      width: 120px;
      background-color: $bg-color;
      margin: 10px 0 20px;
    }
    & > p:nth-of-type(1) {
      font-size: 28px;
      color: $bg-color;
    }
    & > p:nth-of-type(2) {
      margin: 4px 0 10px;
    }
    & > p:nth-of-type(3) {
      font-size: 25px;
    }
    & > p:nth-of-type(4) {
      font-size: 16px;
      line-height: 40px;
    }
  }
}
.story-box {
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
  @include media($breakpoint-md) {
    flex-direction: column;
  }
  .story-item {
    flex: 40%;
    margin-right: 10%;
    margin-bottom: 60px;
    @include media($breakpoint-md) {
      margin-right: 0;
      padding: 0 30px;
    }
    &:nth-of-type(2n) {
      margin-right: 0;
    }
    .story-title {
      display: flex;
      align-items: center;
      .title {
        background: url('@/assets/juanhzou-half.png') no-repeat;
        background-size: 100% 100%;
        font-size: 24px;
        letter-spacing: 0.5rem;
        color: #f2e6ca;
        width: 120px;
        height: 60px;
        line-height: 66px;
        padding-left: 40px;
        @include media($breakpoint-md) {
          font-size: 18px;
        }
      }
      .line {
        flex: 1;
        height: 2px;
        background-color: #d22f34ff;
      }
    }
    .story-content {
      & > img {
        width: 100%;
        margin: 30px 0;
      }
      & > p {
        line-height: 30px;
      }
    }
  }
}
</style>
