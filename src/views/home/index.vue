<template>
  <div class="index-page-box">
    <div class="banner-content">
      <div class="banner-bottom-enrollStudent">
        <img :src="requirePath('newHome/yun-text.png')" alt="王红梅职业培训学校招生火热进行中" />
      </div>
    </div>

    <div class="recruit-student-content">
      <!-- 学校简介 -->
      <div class="school-overview w-1200 margin-auto">
        <div class="title-tip-img">
          <img :src="requirePath('newHome/title-item-1.png')" alt="学校简介" />
        </div>
        <div class="text-box margin-auto">
          <div class="show-text-content">
            <p>王红梅职业培训学校，成立于2018年，前身是拥有六十年历史渊源的“王红梅祖传按摩”诊所。学校从传统师徒的“传、帮、带”模式转变为现今的规模化、系统化和科学化教学，致力于“传承中医精髓，弘扬中华文化”。</p>
            <p>【王红梅祖传按摩】技法荣获“非物质文化遗产”，【茹德堂古法艾灸】也荣膺国家中医药管理局全国特种灸法研究专业委员会“艾灸推广示基地”。自成立以来，学校已培养出2000余名中医推拿、艾灸和理疗等领域的高技能应用型人才。</p>
            <p>学校环境优雅静谧，师资力量雄厚，所有教师都是中医技法的非物质文化遗产传承人，具有深厚的临床和教学经验。我们注重理论与实践的紧密结合，通过实际操作让学员掌握真正的技能，确保学习效果事半功倍。毕业学员不仅可以在集团旗下的养生门店找到就业机会，对于有创业意向的学员，学校还将提供扶持，帮助他们实现创业梦想。</p>
            <p>王红梅职业培训学校欢迎广大中医养生爱好者和专业人士加入我们的大家庭，共同探索和发展中医养生的奥秘。</p>
          </div>
        </div>
      </div>
      <!-- 课程.介绍 -->
      <div class="course-description w-1200 margin-auto">
        <div class="title-tip-img">
          <img :src="requirePath('newHome/title-item-2.png')" alt="课程.介绍" />
        </div>
        <div class="item-title-tip">开放各课程的免费试听机会，让学员可以亲身体验学习环境和教学质量</div>
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
              <div class="tip-text">
                <h4>12天艾灸精讲课程</h4>
                <p>深入讲解艾灸的理论知识和操作技巧</p>
              </div>
            </div>
          </li>
          <li>
            <div class="item-img">
              <img :src="requirePath('newHome/course-item-3.png')" alt="中医副项" />
              <div class="tip-text">
                <h4>7天多样化技法</h4>
                <p>刮痧、拔罐、走罐、开背多种技法</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- 全能技法套餐 -->
      <div class="course-package">
        <div class="tancan-box-img">全能技法套餐</div>
        <div class="subhead-text">

        </div>
      </div>

      <!-- 重点答疑 -->
      <div class="answer-questions">
        <div class="title-tip-img">
          <img :src="requirePath('newHome/title-item-7.png')" alt="重点答疑" />
        </div>
        <div class="item-title-tip">传承中医文化 福泽百姓大众</div>
        <ul class="questions-list">
            <li v-for="(item,index) in questionsList" :key="index">
               <p class="question-item red">Q：{{ item.q }}</p>
                <p class="answer-item">A：{{ item.a }}</p>
            </li>
        </ul>


      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { requirePath } from '@/utils/index.js'
import { useRouter } from 'vue-router'

const questionsList = ref([
  {q:`学习推拿按摩要多长时间?`,a:`选择的课程不同，学时也是不一样的。看自身的学习接受能力，大概1-3个月左右，学校采用循环授课模式，随到随学，不限课时，学会再离校。并且终身免复学复训。`},
  {q:`零基础可以学推拿和艾灸吗?`,a:`可以的，咱们学校不限年龄，不限基础，随到随学。新手0基础入学，名师亲身指导实操一对一教学，培训内容全面，讲解详细而且不限课时。等你完全掌握再离校。`},
  {q:`艾灸好学吗?多长时间学会?`,a:`艾灸是好学的。咱们老师都是采用的小班面授，根据学员的实际情况来教学。从理论到实操手把手教的。而且理论和实操穿插进行，如果您感觉知识点记录的不牢固，是可以终身免费复学的。具体时长看自身的学习接受能力大概1-3个月左右。`},
  {q:`学员毕业后安排就业吗?待遇如何?`,a:`现在中医养生是个热门行业，回报更多更快:大健康产业越来被越多的人看到，机遇稍纵即逝，可遇不可求，当机遇到来时，要果断地识别并抓住机遇。越早学习就业越早，机会越多。优秀毕业学员可到集团旗下养生门店工作，学校也就近推荐就业并扶持开店的。`},
])


//#f5f2e8

</script>
<style lang="scss" scoped>
@import '@/assets/style/variable';
.index-page-box {
  .w-1200 {
    width: 1200px;
  }
  .margin-auto {
    margin: 0 auto;
  }

  .banner-content {
    width: 1920px;
    height: 979px;
    background: url(./../../assets/newHome/banner.png) no-repeat center/cover;
    position: relative;
    .banner-bottom-enrollStudent {
      width: 100%;
      height: 171px;
      position: absolute;
      left: 0;
      right: 0;
      bottom: -65px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .recruit-student-content {
    height: auto;
    padding-top: 110px;
    background-color: #f5f2e8;

    .title-tip-img {
      width: 495px;
      height: 257px;
      margin: 0 auto;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }

  .school-overview {
    background-color: #f5f2e8;
    .text-box {
      width: 1172px;
      height: 553px;
      background: url(./../../assets/newHome/text-box.png) no-repeat center/cover;
      .show-text-content {
        width: 100%;
        height: 100%;
        padding: 60px 44px;
        p {
          font-size: 22px;
          color: #58544f;
          margin-bottom: 20px;
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }
  //课程介绍
  .course-description {
    margin-top: 90px;
    .item-title-tip {
      text-align: center;
      font-size: 20px;
      color: #45413c;
    }
    .course-ul-list {
      margin-top: 60px;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      .tip-text {
        margin-top: 20px;
        text-align: center;
        h4,
        p {
          font-size: 18px;
        }
        p {
          margin-top: 10px;
          color: #2c2a24;
        }
      }
    }
  }
  //全能技法套餐
  .course-package {
    width: 1153px;
    height: 384px;
    margin: 140px auto 0;
    background: url(./../../assets/newHome/outline-box.png) no-repeat center/cover;
    position: relative;

    .tancan-box-img {
      width: 361px;
      // height: 96px;
      background: url(./../../assets/newHome/tancan-box.png) no-repeat center/cover;
      transform: translate(36px,-40px);
      text-align: center;
      line-height: 96px;
      font-size: 34px;
      color: #552712;
    }
  }

  //重点答疑
  .answer-questions{
    width: 1106px;
    margin: 140px auto 0;
    .item-title-tip {
      text-align: center;
      font-size: 20px;
      color: #45413c;
    }

    .questions-list{
      margin-top: 55px;
      li{
        width: 100%;
        height: 220px;
        background: #ffffff;
        border-radius: 20px;
        padding: 40px;
        margin-bottom: 50px;
        &:last-child{
          margin-bottom: 0;
        }
        .red{
          color:#c25449;
        }
        .question-item{
          font-weight: bold;
        }
        .answer-item{
          margin-top: 28px;
          color: #494643;
        }
        p{
          font-size: 22px;
        }
      }
    }
  }

}
</style>
