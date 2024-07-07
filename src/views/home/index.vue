<template>
  <div class="index-page-box">
    <div class="banner-content">
      <div class="banner-bottom-enrollStudent">
        <img :src="requirePath('newHome/yun-text.png')" alt="王红梅职业培训学校招生火热进行中" />
      </div>
    </div>

    <div class="recruit-student-content">
      <!-- 学校简介 -->
      <div class="school-overview w-1200 margin-auto animate__fadeInUp onMounted-wow">
        <div class="title-tip-img">
          <img :src="requirePath('newHome/title-item-1.png')" alt="学校简介" />
        </div>
        <div class="text-box margin-auto">
          <div class="show-text-content">
            <p>
              王红梅职业培训学校，成立于2018年，前身是拥有六十年历史渊源的“王红梅祖传按摩”诊所。学校从传统师徒的“传、帮、带”模式转变为现今的规模化、系统化和科学化教学，致力于“传承中医精髓，弘扬中华文化”。
            </p>
            <p>
              【王红梅祖传按摩】技法荣获“非物质文化遗产”，【茹德堂古法艾灸】也荣膺国家中医药管理局全国特种灸法研究专业委员会“艾灸推广示基地”。自成立以来，学校已培养出2000余名中医推拿、艾灸和理疗等领域的高技能应用型人才。
            </p>
            <p>
              学校环境优雅静谧，师资力量雄厚，所有教师都是中医技法的非物质文化遗产传承人，具有深厚的临床和教学经验。我们注重理论与实践的紧密结合，通过实际操作让学员掌握真正的技能，确保学习效果事半功倍。毕业学员不仅可以在集团旗下的养生门店找到就业机会，对于有创业意向的学员，学校还将提供扶持，帮助他们实现创业梦想。
            </p>
            <p>
              王红梅职业培训学校欢迎广大中医养生爱好者和专业人士加入我们的大家庭，共同探索和发展中医养生的奥秘。
            </p>
          </div>
        </div>
      </div>
      <!-- 课程.介绍 -->
      <div class="course-description-box">
        <div class="course-description w-1200 margin-auto animate__fadeInUp onMounted-wow">
          <div class="title-tip-img">
            <img :src="requirePath('newHome/title-item-2.png')" alt="课程.介绍" />
          </div>
          <div class="item-title-tip">
            开放各课程的免费试听机会，让学员可以亲身体验学习环境和教学质量
          </div>
          <ul class="course-ul-list">
            <li>
              <div class="item-img">
                <img :src="requirePath('newHome/course-item-1.png')" alt="祖传推拿" />
              </div>
              <div class="tip-text">
                <h4>5天基础课程+30天进阶实践</h4>
                <p>深化推拿理论、技艺和实践应用</p>
              </div>
            </li>
            <li>
              <div class="item-img">
                <img :src="requirePath('newHome/course-item-2.png')" alt="古法艾灸" />
              </div>
              <div class="tip-text">
                <h4>12天艾灸精讲课程</h4>
                <p>深入讲解艾灸的理论知识和操作技巧</p>
              </div>
            </li>
            <li>
              <div class="item-img">
                <img :src="requirePath('newHome/course-item-3.png')" alt="中医副项" />
              </div>
              <div class="tip-text">
                <h4>7天多样化技法</h4>
                <p>刮痧、拔罐、走罐、开背多种技法</p>
              </div>
            </li>
          </ul>
          <ul class="course-ul-list course-ul-list-mobile">
            <li>
              <div class="item-img">
                <img :src="requirePath('newHome/course-item-1.png')" alt="祖传推拿" />
              </div>
              <div class="tip-text">
                <h4>5天基础课程</h4>
                <h4>+30天进阶实践</h4>
                <p>深化推拿理论、</p>
                <p>技艺和实践应用</p>
              </div>
            </li>
            <li>
              <div class="item-img">
                <img :src="requirePath('newHome/course-item-2.png')" alt="古法艾灸" />
              </div>
              <div class="tip-text">
                <h4>12天艾灸</h4>
                <h4>精讲课程</h4>
                <p>深入讲解艾灸的</p>
                <p>理论知识和操作技巧</p>
              </div>
            </li>
            <li>
              <div class="item-img">
                <img :src="requirePath('newHome/course-item-3.png')" alt="中医副项" />
              </div>
              <div class="tip-text">
                <h4>7天课程</h4>
                <h4>多样化技法</h4>
                <p>刮痧、拔罐、走罐、</p>
                <p>开背多种技法</p>
              </div>
            </li>
          </ul>
        </div>
        <!-- 全能技法套餐 -->
        <div class="course-package animate__fadeInUp onMounted-wow">
          <div class="tabs text" style="display: flex">
            <div
              class="tab-item"
              v-for="(item, index) in setMealArr"
              :key="index"
              @click="handleChangeSetMeal(index)"
            >
              {{ item.title }}
              <div v-if="index === 1" class="divide"></div>
            </div>
          </div>
          <div class="subhead-text">
            <div class="item-img">
              <img :src="requirePath(setMealArr[0].imgPath)" alt="" />
            </div>
            <div class="right-box">
              <div class="content">
                <p>{{ setMealArrComp[0].subTitleOne }}</p>
                <p>{{ setMealArrComp[0].subTitleTwo }}</p>
                <p>{{ setMealArrComp[0].subTitleThree }}</p>
              </div>
              <img :src="requirePath('newHome/setMeal/button.png')" alt="" @click="toCustomer" />
            </div>
          </div>
        </div>
        <div class="course-package-swiper custom-swiper-box-mobile animate__fadeInUp onMounted-wow">
          <swiper
            :pagination="{
              clickable: true
            }"
            :modules="teachershugeModules"
          >
            <swiper-slide class="swiper-slide" v-for="(item, i) in setMealArrComp" :key="i">
              <div class="course-package-swiper-slide">
                <div class="text-img">
                  {{ item.title }}
                </div>
                <div class="content-box">
                  <div class="item-img">
                    <img :src="requirePath(setMealArr[i].imgPath)" alt="" />
                  </div>
                  <div class="right-box">
                    <div class="content">
                      <p>{{ setMealArrComp[i].subTitleOne }}</p>
                      <p>{{ setMealArrComp[i].subTitleTwo }}</p>
                      <p>{{ setMealArrComp[i].subTitleThree }}</p>
                    </div>
                    <img
                      :src="requirePath('newHome/setMeal/button.png')"
                      alt=""
                      @click="toCustomer"
                    />
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <!-- 六大优势 -->
      <div class="margin-auto advantage-content animate__fadeInUp onMounted-wow">
        <div class="title-tip-img">
          <img :src="requirePath('newHome/title-item-3.png')" alt="六大.优势" />
        </div>
        <div class="item-title-tip">技能培训&nbsp;·&nbsp;选择正规&nbsp;·&nbsp;才有保障</div>
        <div class="advantage-item-img">
          <img class="img-pc" :src="requirePath('newHome/youshi.png')" alt="六大.优势" />
          <img class="img-mobile" :src="requirePath('newHome/youshi-mobile.png')" alt="六大.优势" />
        </div>
      </div>

      <!-- 师资力量 -->
      <div class="teachers-huge">
        <div class="title-tip-img animate__fadeInUp onMounted-wow">
          <img :src="requirePath('newHome/title-item-4.png')" alt="师资力量" />
        </div>
        <div class="item-title-tip animate__fadeInUp onMounted-wow">
          师资雄厚&nbsp;·&nbsp;非遗传承
        </div>
        <!-- 轮播图区域-->
        <div class="teachershuge-swiperBox custom-swiper-box animate__fadeInUp onMounted-wow">
          <swiper
            :loop="true"
            :effect="'coverflow'"
            :grabCursor="true"
            :centeredSlides="true"
            :slidesPerView="'2'"
            :coverflowEffect="{
              rotate: 0,
              stretch: 0,
              depth: 300,
              modifier: 1,
              slideShadows: false
            }"
            :initial-slide="0"
            :pagination="{
              clickable: true
            }"
            :modules="teachershugeModules"
            class="teachershuge-Swiper"
          >
            <swiper-slide v-for="item in teacherDataArr" :key="item.name">
              <div class="teachershuge-swiper-slide">
                <div class="profile-img">
                  <img :src="requirePath(item.imgUrl)" :alt="item.name" />
                </div>
                <div class="right-description">
                  <div class="name-img">
                    {{ item.name }}
                  </div>
                  <div class="desc-text">{{ item.desc }}</div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>

        <!--移动端轮播图-->
        <div
          class="teachershuge-swiperBox-mobile custom-swiper-box-mobile animate__fadeInUp onMounted-wow"
        >
          <swiper
            :pagination="{
              clickable: true
            }"
            :auto-height="true"
            :modules="teachershugeModules"
          >
            <swiper-slide style="padding-bottom: 30px" v-for="(item, i) in teacherDataArr" :key="i">
              <div class="swiper-item">
                <div class="head-box">
                  <img class="teacher-picture" :src="requirePath(item.imgUrl)" :alt="item.name" />
                  <div class="name">{{ item.name }}</div>
                </div>
                <div class="desc-text">
                  {{ item.desc }}
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>

      <!-- 办学宗旨 -->
      <div class="school-objective animate__fadeInUp onMounted-wow">
        <div class="title-tip-img">
          <img :src="requirePath('newHome/title-item-5.png')" alt="办学宗旨" />
        </div>
        <div class="item-title-tip">传承中医文化&nbsp;福泽百姓大众</div>
        <!-- 轮播图区域 -->
        <div class="school-objective-swiperBox">
          <swiper
            :loop="true"
            :autoplay="{ delay: 2000, disableOnInteraction: false }"
            :effect="'coverflow'"
            :grabCursor="true"
            :centeredSlides="true"
            :slidesPerView="'3'"
            :coverflowEffect="{
              rotate: 0,
              stretch: 0,
              depth: 300,
              modifier: 1,
              slideShadows: true
            }"
            :initial-slide="0"
            :pagination="{
              clickable: true
            }"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide
              class="schoolobjective-swiper-slide"
              v-for="item in schoolObjectiveImgArr"
              :key="item"
            >
              <img :src="requirePath(item)" alt="" />
            </swiper-slide>
          </swiper>
        </div>
        <div class="school-objective-swiperBox-mobile custom-swiper-box-mobile">
          <swiper
            :loop="true"
            :pagination="{
              clickable: true
            }"
            :autoplay="{ delay: 2500, disableOnInteraction: false }"
            :modules="teachershugeModules"
            class="mySwiper"
          >
            <swiper-slide
              style="padding-bottom: 30px"
              class="schoolobjective-swiper-slide"
              v-for="item in schoolObjectiveImgArr"
              :key="item"
            >
              <img :src="requirePath(item)" alt="" />
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <!-- 学校荣誉 -->
      <div class="school-honor animate__fadeInUp onMounted-wow">
        <div class="title-tip-img">
          <img :src="requirePath('newHome/title-item-6.png')" alt="学校荣誉" />
        </div>
        <div class="item-title-tip">传承中医文化&nbsp;福泽百姓大众</div>
        <div class="school-honor-swiperBox">
          <swiper
            :loop="true"
            :autoplay="{ delay: 3000, disableOnInteraction: false }"
            :effect="'coverflow'"
            :grabCursor="true"
            :centeredSlides="true"
            :slidesPerView="'3'"
            :initial-slide="0"
            :pagination="{
              clickable: true
            }"
            class="mySwiper"
            :modules="modules"
          >
            <swiper-slide
              class="schoolhonor-swiper-slide"
              v-for="item in schoolHonorImgArr"
              :key="item"
            >
              <img :src="requirePath(item)" alt="" />
            </swiper-slide>
          </swiper>
        </div>
        <div class="school-honor-swiperBox-mobile custom-swiper-box-mobile">
          <swiper
            :loop="true"
            :autoplay="{ delay: 3000, disableOnInteraction: false }"
            :pagination="{
              clickable: true
            }"
            class="mySwiper"
            :modules="teachershugeModules"
          >
            <swiper-slide
              style="padding-bottom: 30px"
              class="schoolhonor-swiper-slide"
              v-for="item in schoolHonorImgArr"
              :key="item"
            >
              <img :src="requirePath(item)" alt="" />
            </swiper-slide>
          </swiper>
        </div>
      </div>

      <!-- 重点答疑 -->
      <div class="answer-questions-box">
        <div class="answer-questions animate__fadeInUp onMounted-wow">
          <div class="title-tip-img">
            <img :src="requirePath('newHome/title-item-7.png')" alt="重点答疑" />
          </div>
          <div class="item-title-tip">传承中医文化 福泽百姓大众</div>
          <ul class="questions-list">
            <li v-for="(item, index) in questionsList" :key="index">
              <p class="question-item red">Q：{{ item.q }}</p>
              <p class="answer-item">A：{{ item.a }}</p>
            </li>
          </ul>
          <div class="answer-questions-swiper custom-swiper-box-mobile">
            <swiper
              :pagination="{
                clickable: true
              }"
              :auto-height="true"
              :modules="teachershugeModules"
            >
              <swiper-slide
                style="padding-bottom: 30px"
                v-for="(item, i) in questionsList"
                :key="i"
              >
                <div class="swiper-item">
                  <p class="question-item red">Q：{{ item.q }}</p>
                  <p class="answer-item">A：{{ item.a }}</p>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <!-- 页脚内容区 -->
        <div class="footer-info-wrap animate__fadeInUp onMounted-wow">
          <new-footer-info-comp />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import newFooterInfoComp from '@/components/bottomFooter/newFooterInfo.vue'
import { computed, onMounted, ref, watch } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
// import required modules
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import { requirePath } from '@/utils/index.js'
import WOW from 'wow.js'

const modules = ref([Autoplay])
const teachershugeModules = ref([EffectCoverflow, Pagination, Autoplay])

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

const questionsList = ref([
  {
    q: `学习推拿按摩要多长时间?`,
    a: `选择的课程不同，学时也是不一样的。看自身的学习接受能力，大概1-3个月左右，学校采用循环授课模式，随到随学，不限课时，学会再离校。并且终身免复学复训。`
  },
  {
    q: `零基础可以学推拿和艾灸吗?`,
    a: `可以的，咱们学校不限年龄，不限基础，随到随学。新手0基础入学，名师亲身指导实操一对一教学，培训内容全面，讲解详细而且不限课时。等你完全掌握再离校。`
  },
  {
    q: `艾灸好学吗?多长时间学会?`,
    a: `艾灸是好学的。咱们老师都是采用的小班面授，根据学员的实际情况来教学。从理论到实操手把手教的。而且理论和实操穿插进行，如果您感觉知识点记录的不牢固，是可以终身免费复学的。具体时长看自身的学习接受能力大概1-3个月左右。`
  },
  {
    q: `学员毕业后安排就业吗?待遇如何?`,
    a: `现在中医养生是个热门行业，回报更多更快:大健康产业越来被越多的人看到，机遇稍纵即逝，可遇不可求，当机遇到来时，要果断地识别并抓住机遇。越早学习就业越早，机会越多。优秀毕业学员可到集团旗下养生门店工作，学校也就近推荐就业并扶持开店的。`
  }
])

//办学宗旨 轮播图
const schoolObjectiveImgArr = ref([
  `corporateCulture/021.jpg`,
  `corporateCulture/022.jpg`,
  `corporateCulture/023.jpg`,
  `corporateCulture/024.jpg`,
  `corporateCulture/025.jpg`,
  `corporateCulture/026.jpg`,
  `corporateCulture/027.jpg`,
  `corporateCulture/028.jpg`,
  `corporateCulture/029.jpg`,
  `corporateCulture/030.jpg`,
  `corporateCulture/031.jpg`
])

//学校荣誉 轮播图
const schoolHonorImgArr = ref([
  `qualifications/photo1.jpg`,
  `qualifications/photo3.jpg`,
  `qualifications/photo4.jpg`,
  `qualifications/photo5.jpg`,
  `qualifications/photo6.jpg`,
  `qualifications/photo2.jpg`,
  `qualifications/photo7.jpg`,
  `qualifications/photo8.jpg`,
  `qualifications/photo9.jpg`
])

// 老师 轮播图
const teacherDataArr = ref([
  {
    name: `王红梅`,
    nameImg: `newHome/teacher/nameimg/王红梅.png`,
    imgUrl: `newHome/teacher/王红梅.jpg`,
    desc: `盲人医疗按摩师，王红梅师徒传承会第一代传承人、中华医学国际发展联合会推拿按摩学科主任委员、安徽省扶残助残先进个人。1996年跟随陶宜珍老师系统地学习了推拿按摩的基本理论和实践技能，在长期的中医临床实践中摸索出了王红梅推拿按摩的独特手法：“触摸诊法”、“肘滚顺筋法”和“踩桥理疗法”，将中医推拿技术发扬光大。“王红梅”作为芜湖市非物质文化遗产单位，慕名而来求医或学习者众多，几十年来，王红梅老师亲自通过“师带徒”的方式培养徒弟或学员近三千人。`
  },
  {
    name: `肖业宇`,
    nameImg: `newHome/teacher/nameimg/肖业宇.png`,
    imgUrl: `newHome/teacher/肖业宇.jpg`,
    desc: `农工党员，王红梅师徒传承会第二代传承人，王红梅祖传按摩技能非遗传承人，世界中医药学会联合会按摩推广委员会理事。毕业于安徽省中医药高专针推科，从小跟随母亲学习王红梅祖传按摩手法，持有高级按摩师资格证、康复保健调理师高级证书等相关职业技能资质等。数十年来将王红梅祖传按摩从一家门店运营发展至集培训学校，中草药种植基地和几十家门店为一体的集团化公司，在技术和经营管理理念上都有自己独到的见解。2023年被聘任为芜湖市产业教授。`
  },
  {
    name: `王丽茹`,
    nameImg: `newHome/teacher/nameimg/王丽茹.png`,
    imgUrl: `newHome/teacher/王丽茹.jpg`,
    desc: `中共党员，王红梅师徒传承会第二代传承人，人力资源和社会保障部中国就业培训指导中心(CETTIC)职业技能培训中心认证培训讲师。从业十余年，持有高级灸疗师证书、经络调理师证书、灸疗师师资证书等相关职业技能资质等。作为中医养生调理专家，深耕中国传统中医行业，创办了“茹德堂”艾灸养生品牌，是世界中医药学会联合会艾灸推广委员会理事，2015年作为中方特派讲演代表在世界中医药学会联合会主办的亚洲艾灸高峰论坛（日本大阪）作中医艾灸养生课题讲演汇报。2023年被聘任为芜湖市产业教授。`
  },
  {
    name: `梅利民`,
    nameImg: `newHome/teacher/nameimg/梅利民.png`,
    imgUrl: `newHome/teacher/梅利民.jpg`,
    desc: `安徽省推拿专业委员会员学科带头人，安徽中医药大学硕士生导师、芜湖市政协委员,中华中医药学会中医疼痛学会常委、中华中医药学会中医推拿学会委员、全国脊诊整脊技术学术委员会常委、安徽省推拿专业委员会副主任委员、安徽省中医药风湿病专业常委、安徽省风湿病学委员会委员。国家卫生健康委员会规划教材暨全国中医药高职高专教育教材《推拿治疗》第三版、第四版主编, 《保健按摩学》副主编、 《头痛眩晕》副主编。`
  },
  {
    name: `袁磊`,
    nameImg: `newHome/teacher/nameimg/袁磊.png`,
    imgUrl: `newHome/teacher/袁磊.jpg`,
    desc: `执业中医师，现就职于北京同仁堂，毕业于北京中医药大学，数代家传，后拜师张启明教授，并跟诊皮肤科姚玉珍主任，针灸科刘赫主任学习，后结合自身多年临床经验和感悟，自创周天三心针法，与经方搭配，针药合用。临床擅长：各类经络瘀堵疼痛性疾病、各类胃病、失眠、焦虑抑郁、各类鼻炎、各类皮肤性问题、月经病、结节及肿瘤、小儿（多动症、抽动症、消化不良、成长缓慢、腺样体肥大、鼻炎）。`
  },
  {
    name: `程龙`,
    nameImg: `newHome/teacher/nameimg/程龙.png`,
    imgUrl: `newHome/teacher/程龙.jpg`,
    desc: `王红梅师徒传承会第三代传承人。2010年跟随肖业宇老师学习并且熟练王红梅推拿非遗技能，取得中医康复理疗专项职业技能等证书。现担任王红梅职业培训学校手法老师一职，培养出众多技能型推拿专业的学生，特别擅长调理颈肩腰腿疼痛类疾病。`
  },
  {
    name: `居瑷炀`,
    nameImg: `newHome/teacher/nameimg/居瑷炀.png`,
    imgUrl: `newHome/teacher/居瑷炀.jpg`,
    desc: `出身军旅，王红梅师徒传承会第三代传承人。熟练王红梅推拿非遗技能，取得中医康复理疗专项职业技能等证书，长期从事中医推拿临床实践及教学工作，具有丰富的临床及教学经验。作为一名优秀的中医推广工作者，居老师始终不忘初心，立志于为国家大健康产业发展倾尽绵薄之力。`
  },
  {
    name: `毛新慧`,
    nameImg: `newHome/teacher/nameimg/毛新慧.png`,
    imgUrl: `newHome/teacher/毛新慧.jpg`,
    desc: `王红梅师徒传承会第三代传承人，2013年跟随王丽茹老师学习中医艾灸、按摩等技能至今。人社部高级灸疗师，王红梅职业培训学校手法教学老师，王红梅各门店技术总督导。特别擅长调理脾胃，妇科，颈椎病，腰椎病。`
  }
])

const setMealArr = ref([
  {
    id: 1,
    title: '全能技法套餐',
    subTitleOne: '全能技艺掌握',
    subTitleTwo: '中医养生大全',
    subTitleThree: '技艺融合实战',
    imgPath: 'newHome/setMeal/quan.png'
  },
  {
    id: 2,
    title: '经典传承套餐',
    subTitleOne: '推拿理疗经典',
    subTitleTwo: '祖传技艺精华',
    subTitleThree: '手法技能提升',
    imgPath: 'newHome/setMeal/jing.png'
  },
  {
    id: 3,
    title: '艾灸养生套餐',
    subTitleOne: '艾灸理疗养生',
    subTitleTwo: '温通疗法精讲',
    subTitleThree: '传统智慧实践',
    imgPath: 'newHome/setMeal/aijiu.png'
  }
])

const currentTab = ref(0)

// 根据下标替换数组元素的位置
const moveElementInArray = (array, fromIndex, toIndex) => {
  const element = array.splice(fromIndex, 1)[0]
  array.splice(toIndex, 0, element)
  return array
}

const setMealArrComp = computed(() => {
  return setMealArr.value
})

watch(
  () => setMealArr.value,
  (newVal) => {
    setMealArr.value = newVal
  },
  {
    deep: true,
    immediate: true
  }
)

// 切换课程套餐
const handleChangeSetMeal = (index) => {
  if (index === 1) {
    moveElementInArray(setMealArr.value, 1, 0)
  } else if (index === 2) {
    moveElementInArray(setMealArr.value, 2, 0)
  }
  currentTab.value = index
}

const toCustomer = () => {
  console.log('toCustomer')
  location.href =
    'http://kf.whmpx.com/index/index/home?visiter_id=&visiter_name=&avatar=&business_id=1&groupid=1&special=1'
}
</script>
<style lang="scss" scoped>
@import '@/assets/style/variable';
@import '@/assets/style/font-face';

:deep(.custom-swiper-box) {
  .swiper-pagination-bullet {
    border-radius: 20px;
    width: 17px;
    height: 13px;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    color: #666666;
    opacity: 1;
    background: rgba(255, 255, 255, 0.8);
  }
  .swiper-pagination-bullet-active {
    width: 40px;
    color: #fff;
    background: #c46a41;
  }
}
:deep(.custom-swiper-box-mobile) {
  .swiper-pagination-bullet {
    border-radius: 20px;
    width: 10px;
    height: 8px;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    color: #666666;
    opacity: 1;
    background: #cbb48c;
  }
  .swiper-pagination-bullet-active {
    width: 20px;
    color: #fff;
    background: #c46a41;
  }
}

.index-page-box {
  .w-1200 {
    max-width: 1200px;
  }
  .margin-auto {
    margin: 0 auto;
  }

  .banner-content {
    width: 100%;
    height: 900px;
    background: url(./../../assets/newHome/banner.png) no-repeat;
    background-size: 100% 100%;
    position: relative;
    @include media($breakpoint-md) {
      height: 250px;
    }
    .banner-bottom-enrollStudent {
      width: 100%;
      height: 171px;
      position: absolute;
      left: 0;
      right: 0;
      bottom: -65px;
      @include media($breakpoint-md) {
        height: 50px;
        bottom: -20px;
      }
      img {
        width: 100%;
        height: 100%;
        //object-fit: cover;
      }
    }
  }

  .recruit-student-content {
    height: auto;
    padding-top: 110px;
    background-color: #f4eee3;
    @include media($breakpoint-md) {
      padding-top: 40px;
    }
    .title-tip-img {
      width: 300px;
      height: 200px;
      margin: 0 auto;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .item-title-tip {
      text-align: center;
      font-size: 20px;
      color: #45413c;
      margin-top: -50px;
      @include media($breakpoint-md) {
        font-size: 14px;
      }
    }
  }

  .school-overview {
    .text-box {
      background: url(./../../assets/newHome/text-box.png) no-repeat;
      background-size: 100% 100%;
      @include media($breakpoint-md) {
        background: url('@/assets/newHome/text-box-mobile.png') no-repeat;
        background-size: 100% 100%;
        margin: 0 20px;
      }
      .show-text-content {
        width: 100%;
        height: 100%;
        padding: 60px 44px;
        @include media($breakpoint-md) {
          padding: 26px 20px;
        }
        p {
          font-size: 22px;
          color: #58544f;
          margin-bottom: 20px;
          &:last-child {
            margin-bottom: 0;
          }
          @include media($breakpoint-md) {
            font-size: 14px;
          }
        }
      }
    }
  }
  //课程介绍
  .course-description-box {
    background: url('@/assets/newHome/course-bg.png') no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
    @include media($breakpoint-md) {
      background: url('@/assets/newHome/course-bg-mobile.png') no-repeat center;
      background-size: contain;
    }
    .course-description {
      margin-top: 90px;
      @include media($breakpoint-md) {
        margin-top: 40px;
      }
      .item-title-tip {
        @include media($breakpoint-md) {
          font-size: 14px;
          padding: 0 20px;
        }
      }
      .course-ul-list {
        margin-top: 60px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        @include media($breakpoint-md) {
          display: none;
        }
        li {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .item-img {
          width: 237px;
          height: 258px;
          @include media($breakpoint-md) {
            width: 100%;
            height: 100px;
          }
          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
        .tip-text {
          margin-top: 20px;
          text-align: center;
          h4,
          p {
            font-size: 18px;
            @include media($breakpoint-md) {
              font-size: 12px;
            }
          }
          p:first-of-type {
            margin-top: 10px;
            color: #2c2a24;
          }
        }
      }
      .course-ul-list-mobile {
        display: none;
        @include media($breakpoint-md) {
          display: flex;
        }
      }
    }
    //全能技法套餐
    .course-package {
      max-width: 1153px;
      height: 384px;
      margin: 140px auto 380px;
      background: url(./../../assets/newHome/outline-box.png) no-repeat center/cover;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      @include media($breakpoint-md) {
        display: none;
      }
      .tabs {
        position: absolute;
        top: -38px;
        left: 38px;
        .tab-item {
          display: flex;
        }
        .tab-item:nth-child(1) {
          width: 361px;
          // height: 96px;
          background: url(./../../assets/newHome/tancan-box.png) no-repeat center/cover;
          //transform: translate(36px, -40px);
          display: flex;
          justify-content: center;
          line-height: 96px;
          font-size: 34px;
          color: #552712;
        }
      }
      .text {
        color: #673c25;
        font-size: 18px;
        font-weight: bold;
      }
      .subhead-text {
        display: flex;
        align-items: center;
        padding-left: 40px;
        .item-img {
          padding-right: 20px;
        }
        .right-box {
          width: 457px;
          height: 263px;
          background: url('@/assets/newHome/setMeal/taocan-bg.png') no-repeat;
          background-size: cover;
          display: flex;
          align-items: center;
          flex-direction: column;
          .content {
            font-size: 24px;
            margin: 30px 0;
          }
          img {
            width: 255px;
            height: 80px;
            cursor: pointer;
          }
        }
      }
      .divide {
        margin: 0 26px;
        width: 1px;
        height: 20px;
        background: #937052;
      }
    }
    .course-package-swiper {
      display: none;
      margin-top: 30px;
      position: relative;
      @include media($breakpoint-md) {
        display: block;
      }
      .swiper-slide {
        padding: 28px;
      }
      .course-package-swiper-slide {
        background: url('@/assets/newHome/text-box-mobile.png') no-repeat;
        background-size: 100% 100%;
        .text-img {
          width: 250px;
          background: url(./../../assets/newHome/tancan-box.png) no-repeat;
          background-size: 100% 100%;
          display: flex;
          justify-content: center;
          line-height: 60px;
          font-size: 24px;
          color: #552712;
          position: absolute;
          left: 50%;
          top: 0;
          transform: translateX(-50%);
        }
        .content-box {
          padding: 50px 20px 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          .item-img {
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          .right-box {
            margin-top: 20px;
            width: 275px;
            height: 187px;
            background: url('@/assets/newHome/setMeal/taocan-bg.png') no-repeat;
            background-size: 100% 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            .content {
              font-size: 16px;
              margin: 20px 0;
            }
            img {
              width: 200px;
              height: 60px;
              cursor: pointer;
            }
          }
        }
      }
    }
  }

  //重点答疑
  .answer-questions-box {
    background: url('@/assets/newHome/teachers-bg.png') no-repeat;
    background-size: 100% 100%;
    @include media($breakpoint-md) {
      background: none;
      margin-top: 60px;
    }
  }
  .answer-questions {
    max-width: 1106px;
    margin: 0 auto;
    .red {
      color: #c25449;
    }
    .question-item {
      font-weight: bold;
    }
    .answer-item {
      margin-top: 28px;
      color: #494643;
    }

    .questions-list {
      margin-top: 55px;
      @include media($breakpoint-md) {
        display: none;
      }
      li {
        width: 100%;
        height: 220px;
        background: #ffffff;
        border-radius: 20px;
        padding: 40px;
        margin-bottom: 50px;
        &:last-child {
          margin-bottom: 0;
        }
        p {
          font-size: 22px;
        }
      }
    }
    .answer-questions-swiper {
      display: none;
      margin: 30px 30px 0;
      @include media($breakpoint-md) {
        display: block;
      }
      .swiper-item {
        //height: 220px;
        background: #ffffff;
        border-radius: 20px;
        padding: 20px;
      }
    }
  }
  // 六大优势
  .advantage-content {
    margin-top: -150px;
    width: 90%;
    @include media($breakpoint-md) {
      margin-top: 0;
    }
    .item-title-tip {
      text-align: center;
      font-size: 20px;
      color: #45413c;
      margin-top: -50px;
      @include media($breakpoint-md) {
        font-size: 14px;
      }
    }
    .advantage-item-img {
      margin-top: 60px;
      width: 100%;
      //height: 236px;
      .img-pc {
        display: block;
        @include media($breakpoint-md) {
          display: none;
        }
      }
      .img-mobile {
        display: none;
        @include media($breakpoint-md) {
          display: block;
        }
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
  // 师资力量
  .teachers-huge {
    margin-top: 80px;
    background: url('@/assets/newHome/teachers-bg.png') no-repeat;
    background-size: 100% 100%;
    @include media($breakpoint-md) {
      background: url('@/assets/newHome/course-bg-mobile.png') no-repeat center;
      background-size: contain;
    }
    .teachershuge-swiperBox {
      margin-top: 100px;
      height: 650px;
      @include media($breakpoint-md) {
        display: none;
      }
      .teachershuge-swiper-slide {
        height: 553px;
        width: 887px;
        background: url(./../../assets/newHome/user-text-bg.png) no-repeat center/contain;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 50px 40px;

        .profile-img {
          width: 260px;
          height: 350px;
          img {
            width: 100%;
            height: 100%;
            border-radius: 20px;
          }
        }
        .right-description {
          flex: 1;
          margin-left: 60px;
          height: calc(100% - 100px);
          .name-img {
            color: #a53f27;
            font-family: 'mashan', sans-serif;
            font-size: 60px;
            margin-top: 30px;
            margin-bottom: 30px;
          }
          .desc-text {
            font-size: 18px;
            color: #524d49;
            line-height: 1.5;
            text-align: justify;
          }
        }
      }
    }
    .teachershuge-swiperBox-mobile {
      display: none;
      margin: 30px 30px 0;
      @include media($breakpoint-md) {
        display: block;
      }
      .swiper-item {
        background: url('@/assets/newHome/text-box-mobile.png') no-repeat;
        background-size: 100% 100%;
        padding: 20px 30px;
        .head-box {
          display: flex;
          align-items: flex-end;
          .name {
            color: #a53f27;
            font-family: 'mashan', sans-serif;
            font-size: 36px;
          }
          .teacher-picture {
            width: 136px;
            height: 172px;
            border-radius: 10px;
            margin-right: 10px;
          }
          .teacher-name {
            width: 90px;
            height: 43px;
          }
        }
        .desc-text {
          margin-top: 20px;
          line-height: 1.5;
          text-align: justify;
        }
      }
    }
  }
  // 办学宗旨
  .school-objective {
    margin-top: 80px;
    .school-objective-swiperBox {
      margin-top: 100px;
      height: 350px;
      @include media($breakpoint-md) {
        display: none;
      }
      .schoolobjective-swiper-slide {
        img {
          max-height: 100%;
        }
      }
    }
    .school-objective-swiperBox-mobile {
      display: none;
      @include media($breakpoint-md) {
        display: block;
        margin: 30px 30px 0;
        .schoolobjective-swiper-slide {
          img {
            max-height: 100%;
            max-width: 600px;
            @include media($breakpoint-md) {
              width: 100%;
            }
          }
        }
      }
    }
  }
  // 学校荣誉
  .school-honor {
    overflow: hidden;
    margin-top: 80px;
    background: url('@/assets/newHome/course-bg.png') no-repeat;
    background-size: 100% 100%;
    @include media($breakpoint-md) {
      background: url('@/assets/newHome/course-bg-mobile.png') no-repeat;
      background-size: 100% 100%;
    }
    .school-honor-swiperBox {
      margin-top: 100px;
      margin-bottom: 300px;
      height: 400px;
      @include media($breakpoint-md) {
        display: none;
      }
      .schoolhonor-swiper-slide {
        img {
          max-height: 100%;
          max-width: 500px;
        }
      }
    }
    .school-honor-swiperBox-mobile {
      display: none;
      @include media($breakpoint-md) {
        display: block;
        margin: 30px 30px 0;
        .schoolhonor-swiper-slide {
          img {
            max-height: 100%;
            max-width: 600px;
            @include media($breakpoint-md) {
              width: 100%;
            }
          }
        }
      }
    }
  }

  //页脚内容
  .footer-info-wrap {
    max-width: 1106px;
    margin: 140px auto 0;
    padding-bottom: 200px;
    @include media($breakpoint-md) {
      margin: 60px auto 0;
      padding: 0 20px 70px;
    }
  }
}
</style>
