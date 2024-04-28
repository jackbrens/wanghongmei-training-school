<template>
  <div>
    <div class="home-swiper custom-swiper-box" style="">
      <swiper
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false
        }"
        :loop="true"
        :speed="600"
        :initial-slide="0"
        :navigation="true"
        :pagination="pagination"
        :modules="modules"
      >
        <swiper-slide v-for="(item, i) in swiperList" :key="i">
          <div class="swiper-item">
            <img :src="requirePath(item)" alt="" />
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <div class="main-container">
      <div class="about max-1700">
        <div class="warp-title animate__fadeInUp onMounted-wow">
          <span>公 · 司 · 介 · 绍</span>
          <div class="line"></div>
        </div>
        <div class="about-content wrapper animate__fadeInUp onMounted-wow">
          <div class="about-left">
            <p>安徽 · 喜贯</p>
            <p>
              喜贯，1956年始，三代传承，一路秉承中医养生健康观、自然观、求己观的发展理念，自始以“传承中医精髓，弘扬中华文化”为己任，旗下品牌【王红梅祖传按摩】其技法荣获“非物质文化遗产”，【茹德堂古法艾灸】荣膺国家中医药管理局全国特种灸法研究专业委员会“艾灸推广示范基地”。...
            </p>
            <div class="btn-box">
              <div class="btn" @click="() => router.push({ name: 'about' })">查看更多></div>
            </div>
          </div>
          <div class="about-right">
            <img :src="requirePath('logo/xiguan-logo.png')" alt="" />
          </div>
        </div>
      </div>
      <div class="business-main max-1700">
        <div class="main-box">
          <div class="head-box">
            <div class="head-left">喜贯产业</div>
            <div class="head-right">打造中医养生产业链全闭环体系</div>
          </div>
          <div class="container-box animate__fadeInUp onMounted-wow">
            <div class="item-content" v-for="(item, i) in businessList1" :key="i">
              <img :src="requirePath(item.imgPath)" alt="" />
              <p>{{ item.label }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="teaching max-1700">
        <div class="warp-title">
          <span>师 · 资 · 团 · 队</span>
          <div class="line"></div>
        </div>
        <div class="story-box animate__fadeInUp onMounted-wow">
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
      <div class="culture max-1700">
        <div class="warp-title animate__fadeInUp onMounted-wow">
          <span>企 · 业 · 文 · 化</span>
          <div class="line"></div>
        </div>
        <ul class="culture-list wrapper animate__fadeInUp onMounted-wow">
          <li v-for="(item, index) in cultureList" :key="index">
            <div class="circle">{{ item.title }}</div>
            <div class="cul-border"></div>
            <div class="tit">
              <p>{{ item.subtitle }}</p>
              <p>{{ item.desc }}</p>
            </div>
            <div class="cul-border"></div>
          </li>
        </ul>
      </div>
      <div class="storeInfo max-1700">
        <div class="warp-title animate__fadeInUp onMounted-wow">
          <span>门 · 店 · 信 · 息</span>
          <div class="line"></div>
        </div>
        <ul class="store-list wrapper animate__fadeInUp onMounted-wow">
          <li v-for="item in storeList" :key="item">
            <img style="width: 100%; height: 242px" :src="requirePath(item.imgPath)" alt="" />
            <div class="tit">
              <p>{{ item.title }}</p>
              <p>{{ item.address }}</p>
            </div>
          </li>
        </ul>
        <div class="btn-box">
          <span class="btn" @click="() => router.push({ name: 'storeInfo' })">查看更多></span>
        </div>
      </div>
      <div class="business max-1700">
        <div class="warp-title animate__fadeInUp onMounted-wow">
          <span>经 · 典 · 项 · 目</span>
          <div class="line"></div>
        </div>
        <ul class="business-list wrapper animate__fadeInUp onMounted-wow">
          <li v-for="(item, i) in businessList" :key="i">
            <div class="tit">
              <p>{{ item.title }}</p>
              <p>{{ item.desc }}</p>
            </div>
            <img
              style="width: 180px; height: 180px; overflow: hidden; border-radius: 6%"
              :src="requirePath(item.imgPath)"
              alt=""
            />
          </li>
        </ul>
        <div class="btn-box">
          <span class="btn" @click="() => router.push({ name: 'classicProjects' })">
            查看更多>
          </span>
        </div>
      </div>
      <div class="joinUs max-1700">
        <div class="warp-title animate__fadeInUp onMounted-wow">
          <span>品 · 牌 · 加 · 盟</span>
          <div class="line"></div>
        </div>
        <div class="img-box">
          <img src="@/assets/joinUs/001.jpg" alt="" />
        </div>
        <div class="joinUs-banner custom-swiper-box">
          <swiper
            :autoplay="{
              delay: 3000,
              disableOnInteraction: false
            }"
            :loop="true"
            :speed="600"
            :initial-slide="0"
            :navigation="true"
            :pagination="pagination"
            :modules="modules"
          >
            <swiper-slide v-for="(item, i) in joinUsList" :key="i">
              <div class="swiper-item">
                <img :src="requirePath(item)" alt="" />
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="btn-box">
          <span class="btn" @click="() => router.push({ name: 'joinUs' })">查看更多></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { requirePath } from '@/utils/index.js'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import WOW from 'wow.js'
import { onMounted } from 'vue'

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
const router = useRouter()

const pagination = ref({
  clickable: true,
  renderBullet: function (index, className) {
    // 自定义样式
    return '<span class="' + className + '">' + (index + 1) + '</span>'
  }
})

const modules = ref([Navigation, Pagination, Autoplay])

const swiperList = [
  'swiper/banner33.jpg',
  'swiper/banner1.jpg',
  'storeInfo/store-info2.jpg',
  'storeInfo/store-info10.jpg'
]

const cultureList = [
  {
    title: '宗旨',
    subtitle: '做健康，做事业',
    desc: '弘扬中华文化为己任'
  },
  {
    title: '愿景',
    subtitle: '传承者，引领者',
    desc: '中医养生品牌的传承者和引领者'
  },
  {
    title: '使命',
    subtitle: '中医精髓，中华文化',
    desc: '不忘初心，牢记使命'
  },
  {
    title: '目标',
    subtitle: '高端服务，卓越品牌',
    desc: '提供高端服务，成就卓越品牌'
  },
  {
    title: '理念',
    subtitle: '讲态度，处细节',
    desc: '态度书写一切，细节决定成败'
  }
]
const storeList = [
  {
    imgPath: 'storeInfo/store-info1.jpg',
    title: '中江桥店',
    phone: '0553-4828968',
    address: '地址：弋江区中江桥南中江新村23号门面'
  },
  {
    imgPath: 'storeInfo/store-info2.jpg',
    title: '中央城店',
    phone: '0553-4828958',
    address: '地址：弋江区中央城财富街2-116号门面'
  },
  {
    imgPath: 'storeInfo/store-info3.jpg',
    title: '华亭店',
    phone: '0553-4828928',
    address: '地址：镜湖区北京中路华亭阳光2.-2号门面'
  }
]

const businessList1 = [
  {
    imgPath: 'businessSegments/003.png',
    label: `企业在人才就业上：目前在安徽省芜湖市、马鞍山市、阜阳市、河北省保定市共计开设三十余家直营中医推拿店，后期将通过直营、加盟、托管等模式开设门店，提供更多的就业创业平台。`
  },
  {
    imgPath: 'businessSegments/002.png',
    label: `企业在人才储备上：增设（芜湖、阜阳、亳州）职业培训学校三所；与芜湖中医药高等专科学校、康泰职业培训学校、皖新职业培训学校、芜湖县医药卫生学校、南京中保职业培训学校等紧密合作。`
  },
  {
    imgPath: 'businessSegments/001.png',
    label: `企业在产品上：拥有上千亩艾草种植基地，从源头把控原材料的可靠性，提供产品的溯源性。以“企业+农村合作社+农户”的模式从质量和数量上保障原材料产品的供给，为后期门店开设打好坚实的基础。`
  },
  {
    imgPath: 'businessSegments/004.png',
    label: `企业在数据整合上：自主研发收银系统和会员管理系统，运用互联网思维针对客户的裂变与黏性有了更好的创新。在异业联盟上：以一卡通用为导向，为客户提供便利，为商家提高营收。在公益事业上：解决残疾人士就业，不断完善着企业的社会使命。`
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
  },
  {
    title: '使命',
    imgPath: 'brandCulture/004.jpg',
    desc: '从70年代末到21世纪初，三代人的砥砺前行。不同的时代造就不同的使命，在平凡的岗位上，一代又一代的“王红梅人”为继承弘扬传统手艺而前赴后继，为社会未来的大健康产业而添砖加瓦，这里面有你、有我、也有他……'
  },
  {
    title: '使命',
    imgPath: 'brandCulture/004.jpg',
    desc: '从70年代末到21世纪初，三代人的砥砺前行。不同的时代造就不同的使命，在平凡的岗位上，一代又一代的“王红梅人”为继承弘扬传统手艺而前赴后继，为社会未来的大健康产业而添砖加瓦，这里面有你、有我、也有他……'
  }
]

const businessList = [
  {
    title: '面部美容调理灸',
    imgPath: 'classicProjects/moxibustion-10.jpg',
    desc: '采用茹德堂面部调理特色手法配合古法雷火灸施灸，疏通面部经络，打通面部气血，达到瘦脸，提亮肤色，祛斑，去除黑眼圈，眼袋，细纹等功效。'
  },
  {
    title: '能量火罐调理',
    imgPath: 'classicProjects/moxibustion-12.jpg',
    desc: '采用负离子能量罐，结合人体力学，热传导学，负离子能量等现代科技，灌顶增加了凹槽，通过加热产生负离子，大大增强了人体穴位的刺激，减少操作时间，同时也加强了调理的功效，实现通经活络、活血化瘀、保健、减肥、美容、祛斑等特殊效果。'
  },
  {
    title: '特色排灸',
    imgPath: 'classicProjects/moxibustion-13.jpg',
    desc: '本法适用于多种慢性难治病证，尤以虚寒者为佳。主要特点在于：一般艾条悬灸法多仅以1支艾条施灸，而本法少则4支，多则12支，同时点燃后，分成两排排列好，由施灸者左右两手分别用五只手指夹拿（或用器具），作扇形排列，故称之为“排灸法”。本法火力充足，多穴同灸，对某些难治病症往往可收到意想不到的效果。'
  },
  {
    title: '长蛇灸疗法',
    imgPath: 'classicProjects/moxibustion-11.jpg',
    desc: '采用药物铺灸疗法，透皮给药，具有培补正气，调节机体免疫功能的作用，具体表现为能够提高细胞免疫和抑制体液免疫的功能。现代用于治疗类风湿性关节炎、强直性脊柱炎，慢性肝炎及顽固性哮喘，甲状腺疾病以及久病，慢性疾病，脏腑亚健康，大病等康复调理。'
  }
]

const joinUsList = [
  'swiper/banner001.jpg',
  'swiper/banner002.jpg',
  'swiper/banner003.jpg',
  'swiper/banner004.jpg'
]
</script>
<style lang="scss" scoped>
@import '@/assets/style/variable';

@mixin text-overflow($num: 1) {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: $num;
  overflow: hidden;
  text-overflow: ellipsis;
}

:deep(.custom-swiper-box) {
  .swiper-button-prev,
  .swiper-button-next {
    color: #ffffff;
    background-color: #a12b3d;
    padding: 30px;
    @include media($breakpoint-md) {
      //display: none;
      padding: 0;
    }
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 16px;
  }
  .swiper-pagination-bullet {
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    color: #666666;
    opacity: 1;
    background: rgba(0, 0, 0, 0.2);
  }
  .swiper-pagination-bullet-active {
    color: #fff;
    background: #a12b3d;
  }

  .swiper-item {
    height: 800px;
    @include media($breakpoint-md) {
      max-height: 250px;
    }
    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      @include media($breakpoint-md) {
        object-fit: fill;
      }
    }
  }
}

.max-1700 {
  max-width: 1700px;
  margin: 50px auto;
}
.warp-title {
  color: $bg-color;
  position: relative;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .line {
    width: 60px;
    height: 2px;
    background-color: $bg-color;
    margin-top: 10px;
  }
}
.home-swiper {
  max-width: 1920px;
  margin: 0 auto;
  @include media($breakpoint-md) {
    padding-top: 0;
    margin-top: 50px;
  }
}
.main-container {
  .about {
    background-image: url('@/assets/home/company_bg_01.jpg');
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: 100%;
    padding-top: 50px;
    @include media($breakpoint-md) {
      padding-top: 0;
      margin-top: 30px;
    }
    .about-content {
      margin-top: 20px;
      padding-bottom: 200px;
      display: flex;
      justify-content: space-between;
      @include media($breakpoint-md) {
        flex-direction: column-reverse;
        padding-bottom: 0;
        align-items: center;
        margin-top: 50px;
      }
      .about-left {
        font-size: 14px;
        color: #999999;
        margin-right: 50px;
        padding-top: 60px;
        @include media($breakpoint-md) {
          margin-right: 0;
        }
        p:nth-of-type(1) {
          font-size: 24px;
          color: #333333;
          padding-bottom: 30px;
          @include media($breakpoint-md) {
            text-align: center;
          }
        }
        p:nth-of-type(2) {
          text-align: justify;
          text-justify: newspaper;
          word-break: break-all;
          line-height: 26px;
          @include media($breakpoint-md) {
            padding: 0 30px;
          }
        }
        .btn-box {
          @include media($breakpoint-md) {
            text-align: center;
          }
          .btn {
            background-color: $bg-color;
            color: #ffffff;
            display: inline-block;
            padding: 10px 30px;
            margin-top: 30px;
            cursor: pointer;
          }
        }
      }
      .about-right {
        display: flex;
        align-items: flex-end;
        @include media($breakpoint-md) {
          padding: 0 30px;
        }
        img {
          width: 360px;
          height: 225px;
          @include media($breakpoint-md) {
            width: 200px;
            height: 150px;
          }
        }
      }
    }
  }
  .business-main {
    overflow: hidden;
    .main-box {
      display: flex;
      flex-direction: column;
      align-items: center;
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
  }
  .teaching {
    .story-box {
      margin-top: 60px;
      display: flex;
      flex-wrap: wrap;
      @include media($breakpoint-md) {
        flex-direction: column;
      }
      .story-item {
        flex: 25%;
        margin-right: 8%;
        margin-bottom: 60px;
        @include media($breakpoint-md) {
          margin-right: 0;
          padding: 0 30px;
        }
        &:nth-of-type(3n) {
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
  }
  .culture {
    background-image: url('@/assets/home/index-product-bg.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin-bottom: 0;
    .culture-list {
      padding: 50px 0;
      @include media($breakpoint-md) {
        margin: 0 30px;
      }
      & > li {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 50px;

        .circle {
          width: 160px;
          height: 160px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #ffffff;
          font-size: 40px;
          font-family: 'FangSong';
          transition: all 0.35s ease-in-out;
          background: url('@/assets/home/circle-red.png') no-repeat;
          background-size: 100% 100%;
          @include media($breakpoint-md) {
            max-width: 80px;
            max-height: 80px;
            font-size: 20px;
          }
          &:hover {
            transform: scale(1.1);
          }
        }
        .cul-border {
          width: 120px;
          height: 1px;
          background-color: #9b6526;
          margin: 0 60px;
          @include media($breakpoint-md) {
            width: 60px;
            margin: 0;
            transform: rotate(90deg);
          }
        }
        .tit {
          color: $bg-color;
          font-size: 14px;
          width: 210px;
          p:nth-of-type(1) {
            font-size: 20px;
            margin-bottom: 10px;
          }
        }
      }
    }
  }
  .business {
    background-image: url('@/assets/home/index_business_bg.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin-top: 0;
    padding: 50px 0;
    .business-list {
      display: flex;
      @include media($breakpoint-md) {
        flex-wrap: wrap;
      }
      & > li {
        box-sizing: border-box;
        background: url('@/assets/home/index_service_bg.png') no-repeat;
        background-size: 100% 100%;
        height: 520px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 60px 60px 55px;
        @include media($breakpoint-md) {
          padding: 60px 80px 55px;
          //&:nth-of-type(n + 3) {
          //  display: none;
          //}
        }
        &:last-of-type {
          margin-right: 0;
        }
        &:hover .tit {
          color: $bg-color;
        }
        .tit {
          flex: 1;
          color: #666666;
          font-size: 14px;
          & > p:nth-of-type(1) {
            font-size: 24px;
          }
          & > p:nth-of-type(2) {
            line-height: 26px;
            padding-top: 30px;
            @include text-overflow(5);
          }
        }
      }
    }
    .btn-box {
      text-align: center;
      .btn {
        background-color: $bg-color;
        color: #ffffff;
        display: inline-block;
        padding: 10px 30px;
        margin-top: 30px;
        cursor: pointer;
      }
    }
  }
  .storeInfo {
    .store-list {
      display: flex;
      padding: 50px 0;
      @include media($breakpoint-md) {
        flex-wrap: wrap;
        padding-bottom: 0;
      }
      & > li {
        margin-right: 100px;
        box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease-in-out;

        &:last-of-type {
          margin-right: 0;
        }
        @include media($breakpoint-md) {
          margin: 0 30px 30px;
          &:last-of-type {
            margin-right: 30px;
          }
        }
        &:hover {
          transform: scale(1.1);
        }
        .tit {
          padding: 20px;
          font-size: 14px;
          color: #414141;
          & > p:nth-of-type(1) {
            font-size: 18px;
            padding-bottom: 10px;
          }
        }
      }
    }
    .btn-box {
      text-align: center;
      .btn {
        background-color: $bg-color;
        color: #ffffff;
        display: inline-block;
        padding: 10px 30px;
        margin-top: 30px;
        cursor: pointer;
      }
    }
  }
  .joinUs {
    .img-box {
      display: none;
      width: 1200px;
      margin: 30px auto 0;
      text-align: center;
      @include media($breakpoint-md) {
        width: 100%;
        display: block;
      }
      & > img {
        max-width: 800px;
        height: 100%;
        @include media($breakpoint-md) {
          width: 100%;
        }
      }
    }
    .joinUs-banner {
      margin-top: 30px;
      @include media($breakpoint-md) {
        width: 100%;
        display: none;
      }
    }
    :deep(.custom-swiper-box) {
      .swiper-item {
        height: 1000px;
        & > img {
          width: 100%;
          height: 100%;
          object-fit: fill;
        }
      }
    }
    .btn-box {
      text-align: center;
      .btn {
        background-color: $bg-color;
        color: #ffffff;
        display: inline-block;
        padding: 10px 30px;
        margin-top: 30px;
        cursor: pointer;
      }
    }
  }
}
</style>
