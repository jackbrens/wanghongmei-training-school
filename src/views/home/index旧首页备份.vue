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
      <div class="about max-1700" v-if="false">
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
      <div class="about-us max-1700">
        <div class="warp-title animate__fadeInUp onMounted-wow">
          <span>学 · 校 · 简 · 介</span>
          <div class="line"></div>
        </div>
        <div class="about-us-box wrapper animate__fadeInUp onMounted-wow">
          <!--          <img class="image" :src="requirePath('home/company-img.jpg')" alt="" />-->
          <div class="right-box">
            <div class="title">王红梅职业培训学校</div>
            <div class="desc">
              <p>
                王红梅职业培训学校，是一所中医养生类培训学校，其前身是有着六十多年历史沉淀的“王红梅祖传按摩”诊所，从传统的“传、帮、带”师带徒到规模化、系统化、科学化教学，学校自始以“传承中医精髓，弘扬中华文化”为己任，【王红梅祖传按摩】其技法荣获“非物质文化遗产”，【茹德堂古法艾灸】荣膺国家中医药管理局全国特种灸法研究专业委员会“艾灸推广示基地”。从2018年建校以来，学校累计为社会培养紧缺型中医推拿、中医艾灸和中医理疗等高技能应用型人才2000余名。
              </p>
              <p>
                我校环境清心雅致，师资力量雄厚，教学老师均为中医技法非遗传承人，有着丰富的临床教学经验，理论学习和实操学习共同进行，理论联系实践，事半功倍。合格学员毕业可到集团旗下养生门店就业或扶持创业。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="class-project max-1700">
        <div class="warp-title">
          <span>课 · 程 · 项 · 目</span>
          <div class="line"></div>
        </div>
        <div class="class-box animate__fadeInUp onMounted-wow">
          <p class="title"><span>免费试听</span></p>
          <div class="section">
            <div class="section-item" v-for="(item, sIndex) in classProjectSection" :key="sIndex">
              <p>{{ item.title }}</p>
              <p>{{ item.subtitle }}</p>
            </div>
          </div>
          <div class="package">
            <div class="package-item">
              <div class="img-item">
                <div class="img-box">
                  <img :src="requirePath('home/package/001.jpg')" alt="" />
                </div>
                <div class="img-box">
                  <img :src="requirePath('home/package/002.jpg')" alt="" />
                </div>
              </div>
              <div class="package-text">
                <p>【 套餐一 】</p>
                <p>王红梅祖传按摩班 + 中医理疗班</p>
              </div>
              <div class="consult" @click="toCustomer">立即咨询</div>
            </div>
            <div class="package-item">
              <div class="img-item">
                <div class="img-box">
                  <img :src="requirePath('home/package/003.jpg')" alt="" />
                </div>
                <div class="img-box">
                  <img :src="requirePath('home/package/002.jpg')" alt="" />
                </div>
              </div>
              <div class="package-text">
                <p>【 套餐二 】</p>
                <p>茹德堂古法艾灸班 + 中医理疗班</p>
              </div>
              <div class="consult" @click="toCustomer">立即咨询</div>
            </div>
            <div class="package-item">
              <div class="img-item">
                <div class="img-box">
                  <img :src="requirePath('home/package/001.jpg')" alt="" />
                </div>
                <div class="img-box">
                  <img :src="requirePath('home/package/003.jpg')" alt="" />
                </div>
                <div class="img-box">
                  <img :src="requirePath('home/package/002.jpg')" alt="" />
                </div>
              </div>
              <div class="package-text">
                <p>【 套餐三 】</p>
                <p>王红梅祖传按摩班</p>
                <p>+ 茹德堂古法艾灸班</p>
                <p>+ 中医理疗班</p>
              </div>
              <div class="consult" @click="toCustomer">立即咨询</div>
            </div>
          </div>
        </div>
      </div>
      <div class="training max-1700">
        <div class="warp-title">
          <span>技能培训 · 选择正规 · 才有保障</span>
          <div class="line"></div>
        </div>
        <div class="training-box animate__fadeInUp onMounted-wow">
          <div class="box-one">
            <div class="box-item" v-for="(item, i) in training" :key="i">
              <img :src="requirePath(item.imgPath)" alt="" />
              <p>{{ item.title }}</p>
              <p>{{ item.subtitle }}</p>
            </div>
          </div>
          <div class="box-two">
            <div class="box-item" v-for="(item, i) in trainingTwo" :key="i">
              <img :src="requirePath(item.imgPath)" alt="" />
              <div class="right-box">
                <p>{{ item.title }}</p>
                <p>{{ item.subtitle }}</p>
              </div>
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
      <div class="purpose max-1700">
        <div class="warp-title">
          <span>办 · 学 · 宗 · 旨</span>
          <div class="line"></div>
        </div>
        <div class="purpose-subtitle">传承中医文化 福泽百姓大众</div>
        <div class="purpose-box animate__fadeInUp onMounted-wow">
          <div class="image" v-for="(img, imgIndex) in purposeList" :key="imgIndex">
            <img :src="requirePath(img.imgPath)" alt="" />
          </div>
        </div>
      </div>
      <div class="honor max-1700">
        <div class="warp-title">
          <span>学 · 校 · 荣 · 誉</span>
          <div class="line"></div>
        </div>
        <div class="honor-img animate__fadeInUp onMounted-wow">
          <div class="img-item" v-for="(img, i) in honorImages" :key="i">
            <img :src="requirePath(img)" alt="" />
          </div>
        </div>
      </div>
      <div class="question max-1700">
        <div class="warp-title">
          <span>重 · 点 · 答 · 疑</span>
          <div class="line"></div>
        </div>
        <div class="question-box animate__fadeInUp onMounted-wow">
          <div class="question-item" v-for="(item, qIndex) in questions" :key="qIndex">
            <div class="title">
              <p>{{ item.question }}</p>
              <div class="consult" @click="toCustomer">立即咨询</div>
            </div>
            <p class="answer">{{ item.answer }}</p>
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
      <div class="culture max-1700" v-if="false">
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
      <div class="storeInfo max-1700" v-if="false">
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
      <div class="business max-1700" v-if="false">
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
      <div class="joinUs max-1700" v-if="false">
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
  'home/company-img.jpg'
  // 'swiper/banner33.jpg',
  // 'swiper/banner1.jpg',
  // 'storeInfo/store-info2.jpg',
  // 'storeInfo/store-info10.jpg'
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
    title: '王红梅',
    imgPath: 'home/teaching/05.jpg',
    desc: '盲人医疗按摩师，王红梅师徒传承会第一代传承人。1996年跟随陶宜珍老师系统地学习了推拿按摩的基本理论和实践技能，在临床实践中摸索出了王红梅推拿按摩的独特手法，是王红梅推拿按摩非遗技术传承人。'
  },
  {
    title: '肖业宇',
    imgPath: 'home/teaching/03.jpg',
    desc: '王红梅师徒传承会第二代传承人。王红梅祖传按摩技能非遗传承人，世界中医药学会联合会按摩推广委员会理事。数十年来将王红梅祖传按摩从一家门店运营发展至集培训学校，中草药种植基地和几十家门店为一体的集团化公司，在技术和经营管理理念上都有自己独到的见解。2023年被聘任为芜湖市产业教授。'
  },
  {
    title: '王丽茹',
    imgPath: 'home/teaching/06.jpg',
    desc: '王红梅师徒传承会第二代传承人。毕业于韩国全北国立大学食品营养专业，回国后学习中医，从业十余年，持有高级灸疗师证书、经络调理师证书、灸疗师师资证书、小儿推拿师师资证书、育婴师（三级）证书、健康管理师（三级）证书等相关职业技能资质等。创办茹德堂养生品牌，中医养生调理专家，深耕中国传统中医行业，将王红梅祖传按摩技法与其他中医外治疗法有效结合，摸索出各种体制以及疾病的养生调理良方。世界中医药学会联合会艾灸推广委员会理事。人力资源和社会保障部中国就业培训指导中心(CETTIC)职业技能培训中心认证培训讲师。2023年被聘任为芜湖市产业教授。'
  },
  {
    title: '袁磊',
    imgPath: 'home/teaching/01.jpg',
    desc: '执业中医师，现就职于北京同仁堂，毕业于北京中医药大学，数代家传，后拜师张启明教授，并跟诊皮肤科姚玉珍主任，针灸科刘赫主任学习，后结合自身多年临床经验和感悟，自创周天三心针法，与经方搭配，针药合用。临床擅长：各类经络瘀堵疼痛性疾病、各类胃病、失眠、焦虑抑郁、各类鼻炎、各类皮肤性问题、月经病、结节及肿瘤、小儿（多动症、抽动症、消化不良、成长缓慢、腺样体肥大、鼻炎）。'
  },
  {
    title: '程龙',
    imgPath: 'home/teaching/04.jpg',
    desc: '王红梅师徒传承会第三代传承人。2010年跟随肖业宇老师学习并且熟练王红梅推拿非遗技能，取得中医康复理疗专项职业技能证书等。现担任王红梅职业培训学校手法老师一职，共教出学生百余名。擅长调理颈肩腰腿疼痛类疾病。'
  },
  {
    title: '毛新慧',
    imgPath: 'home/teaching/02.jpg',
    desc: '王红梅师徒传承会第三代传承人，2013年跟随王丽茹老师学习中医艾灸、按摩等技能至今。人社部高级灸疗师，王红梅职业培训学校手法教学老师，王红梅各门店技术总督导。擅长调理脾胃，妇科，颈椎病，腰椎病。'
  }
]

const purposeList = [
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

const questions = [
  {
    question: '1、问:学习推拿按摩要多长时间?',
    answer:
      '选择的课程不同，学时也是不一样的。看自身的学习接受能力，大概1-3个月左右，学校采用循环授课模式，随到随学，不限课时，学会再离校。并且终身免复学复训。'
  },
  {
    question: '2、问:零基础可以学推拿和艾灸吗?',
    answer:
      '可以的，咱们学校不限年龄，不限基础，随到随学。新手0基础入学，名师亲身指导，实操一对一教学，培训内容全面，讲解详细而且不限课时。等你完全掌握再离校。'
  },
  {
    question: '3、问:艾灸好学吗?多长时间学会?',
    answer:
      '艾灸是好学的。咱们老师都是采用的小班面授，根据学员的实际情况来教学。从理论到实操手把手教的。而且理论和实操穿插进行，如果您感觉知识点记录的不牢固，是可以终身免费复学的。具体时长看自身的学习接受能力大概1-3个月左右。'
  },
  {
    question: '4、问:学员毕业后安排就业吗?待遇如何?',
    answer:
      '现在中医养生是个热门行业，回报更多更快:大健康产业越来被越多的人看到，机遇稍纵即逝，可遇不可求，当机遇到来时，要果断地识别并抓住机遇。越早学习就业越早，机会越多。优秀毕业学员可到集团旗下养生门店工作，学校也就近推荐就业并扶持开店的。'
  }
]

const classProjectSection = [
  {
    title: '【 中医推拿 】',
    subtitle: '推拿课程(5天+30天进阶课程)'
  },
  {
    title: '【 中医艾灸 】',
    subtitle: '艾灸课程(12天)'
  },
  {
    title: '【 中医推拿 】',
    subtitle: '副项课程(7天)包含(刮痧、拔罐、走罐、开背)'
  }
]

const honorImages = [
  'about/honorImage/002.jpg',
  'about/honorImage/003.jpg',
  'about/honorImage/0010.jpg',
  'about/honorImage/008.jpg',
  'about/honorImage/005.jpg',
  'about/honorImage/006.jpg',
  'about/honorImage/009.jpg',
  'about/honorImage/001.jpg',
  'about/honorImage/004.jpg'
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

const training = [
  {
    imgPath: 'home/training/4.jpg',
    title: '证书含金量高',
    subtitle: '创业、就业无忧'
  },
  {
    imgPath: 'home/training/5.jpg',
    title: '0基础轻松学',
    subtitle: '创业、就业无忧'
  },
  {
    imgPath: 'home/training/6.jpg',
    title: '低门槛',
    subtitle: '无需学历经验门槛低'
  },
  {
    imgPath: 'home/training/7.jpg',
    title: '精良师资',
    subtitle: '中医技法非遗传承人'
  },
  {
    imgPath: 'home/training/8.jpg',
    title: '学习保障',
    subtitle: '免费复学，定期进修'
  },
  {
    imgPath: 'home/training/9.jpg',
    title: '创业指导',
    subtitle: '导师团队一站式扶持'
  },
  {
    imgPath: 'home/training/10.jpg',
    title: '提供食宿',
    subtitle: '环境好、饭菜香'
  }
]

const trainingTwo = [
  {
    imgPath: 'home/training/11.jpg',
    title: '免费试听',
    subtitle: '免费试听，满意后报名（学的更安心，学的更专业）'
  },
  {
    imgPath: 'home/training/12.jpg',
    title: '预约 课程免费送',
    subtitle: '网上报名咨询，即可获得一门免费视频课程（限时领取）'
  },
  {
    imgPath: 'home/training/13.jpg',
    title: '后期免费进修',
    subtitle: '后期可返回学校免费进修新技术'
  },
  {
    imgPath: 'home/training/14.jpg',
    title: '多咨询 多对比 多考察',
    subtitle: '观看老师朋友圈，了解更多课程详情。'
  }
]

const toCustomer = () => {
  console.log('toCustomer')
  location.href =
    'http://kf.whmpx.com/index/index/home?visiter_id=&visiter_name=&avatar=&business_id=1&groupid=1&special=1'
}
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
  .about-us {
    background-image: url('@/assets/home/company_bg_01.jpg');
    background-repeat: no-repeat;
    background-position: center bottom;
    .about-us-box {
      padding-bottom: 130px;
      margin-top: 50px;
      display: flex;
      @include media($breakpoint-md) {
        flex-direction: column;
        align-items: center;
        padding-bottom: 0;
      }
      .image {
        width: 550px;
        height: 365px;
        margin-right: 50px;
        @include media($breakpoint-md) {
          max-width: 300px;
          height: 210px;
          margin-right: 0;
        }
      }
      .right-box {
        flex: 1;
        font-size: 16px;
        color: #333333;
        .title {
          text-align: center;
          margin-top: 10px;
          margin-bottom: 30px;
          font-size: 26px;
          @include media($breakpoint-md) {
            display: none;
          }
        }
        .desc {
          line-height: 26px;
          @include media($breakpoint-md) {
            //display: none;
            margin: 0 30px;
          }
          & > p {
            text-indent: 2em;
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
  .class-project {
    .class-box {
      margin-top: 50px;
      .title {
        text-align: center;
        font-size: 26px;
        font-weight: bold;
        //& > span:nth-of-type(1) {
        //  margin-right: 30px;
        //}
      }
      .section {
        margin-top: 30px;
        text-align: center;
        .section-item {
          margin-top: 30px;
          & > p:nth-of-type(1) {
            color: $juanzhou-color;
            font-weight: bold;
            font-size: 20px;
          }
        }
      }
      .package {
        text-align: center;
        .package-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          .img-item {
            margin: 30px 0;
            width: 100%;
            display: flex;
            justify-content: center;
            .img-box {
              margin-right: 30px;
              width: 300px;
              height: 200px;
              overflow: hidden;
              border-radius: 50%;
              @include media($breakpoint-md) {
                width: 100px;
                height: 100px;
                margin-right: 10px;
              }
              & > img {
                width: 100%;
                height: 100%;
              }
            }
          }
          .package-text {
            display: flex;
            & > p {
              color: $juanzhou-color;
              font-weight: bold;
              font-size: 22px;
            }
            @include media($breakpoint-md) {
              flex-direction: column;
            }
          }
          .consult {
            margin: 30px 0;
            color: #ffffff;
            background-color: $juanzhou-color;
            width: 130px;
            padding: 8px 0;
            border-radius: 8px;
            cursor: pointer;
            &:hover {
              background-color: rgb(210, 45, 50, 0.6);
            }
          }
        }
      }
    }
  }
  .training {
    max-width: 1200px;
    .warp-title {
      & > span {
        @include media($breakpoint-md) {
          font-size: 20px;
        }
      }
    }
    .training-box {
      .box-one {
        margin-top: 50px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        @include media($breakpoint-md) {
          justify-content: flex-start;
        }
        .box-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-right: 20px;
          @include media($breakpoint-md) {
            width: 50%;
            margin-right: 0;
            margin-bottom: 30px;
          }
          & > img {
            @include media($breakpoint-md) {
              width: 100px;
            }
          }
          & > p:nth-of-type(1) {
            color: #666;
            font-size: 20px;
            margin: 14px 0;
            @include media($breakpoint-md) {
              font-size: 18px;
            }
          }
          & > p:nth-of-type(2) {
            color: #999;
            font-size: 16px;
            @include media($breakpoint-md) {
              font-size: 13px;
            }
          }
        }
      }
      .box-two {
        margin-top: 50px;
        display: flex;
        justify-content: center;
        border: 1px solid #e4e4e4;
        flex-wrap: wrap;
        @include media($breakpoint-md) {
          margin-top: 0;
        }
        .box-item {
          width: 25%;
          display: flex;
          align-items: center;
          border-right: 1px solid #e4e4e4;
          padding: 20px 10px;
          @include media($breakpoint-md) {
            width: 50%;
            border-bottom: 1px solid #e4e4e4;
          }
          & > img {
            @include media($breakpoint-md) {
              width: 35px;
            }
          }
          .right-box {
            margin-left: 10px;
            & > p:nth-of-type(1) {
              font-size: 20px;
              color: #666666;
              @include media($breakpoint-md) {
                font-size: 16px;
              }
            }
            & > p:nth-of-type(2) {
              font-size: 14px;
              color: #666666;
              @include media($breakpoint-md) {
                font-size: 13px;
              }
            }
          }
        }
      }
    }
  }
  .teaching {
    max-width: 900px;
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
        margin-bottom: 30px;
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
            width: 150px;
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
          display: flex;
          flex-direction: column;
          @include media($breakpoint-md) {
            align-items: center;
          }
          & > img {
            width: 100%;
            height: 350px;
            margin: 30px 0;
            @include media($breakpoint-md) {
              width: 180px;
              height: 250px;
              font-size: 18px;
            }
          }
          & > p {
            line-height: 30px;
          }
        }
      }
    }
  }
  .purpose {
    .purpose-subtitle {
      font-size: 24px;
      margin: 30px 0;
      text-align: center;
      color: #a12b3d;
    }
    .purpose-box {
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      width: 800px;
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
  .question {
    max-width: 1200px;
    .question-box {
      margin-top: 50px;
      @include media($breakpoint-md) {
        margin: 50px 30px 0;
      }
      .question-item {
        margin-bottom: 20px;
        .title {
          font-size: 24px;
          color: #d22f34;
          font-weight: bold;
          display: flex;
          align-items: center;
          @include media($breakpoint-md) {
            flex-direction: column;
            align-items: flex-start;
            font-size: 20px;
          }
          .consult {
            margin-left: 20px;
            background-color: #ffcc66;
            font-weight: 500;
            color: #ffffff;
            padding: 6px 10px;
            cursor: pointer;
            font-size: 20px;
            border-radius: 8px;
            &:hover {
              background-color: rgba(255, 204, 102, 0.6);
            }
            @include media($breakpoint-md) {
              flex-direction: column;
              align-self: center;
            }
          }
        }
        .answer {
          margin-top: 10px;
          color: #666666;
        }
      }
    }
  }
  .honor {
    background-image: url('@/assets/home/index-product-bg.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    .honor-img {
      margin: 30px auto 0;
      width: 1000px;
      display: flex;
      flex-wrap: wrap;
      @include media($breakpoint-md) {
        width: 100%;
        margin-top: 30px;
      }
      .img-item {
        flex: 33%;
        flex-grow: 0;
        margin-bottom: 30px;
        & > img {
          width: 100%;
          height: 100%;
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
