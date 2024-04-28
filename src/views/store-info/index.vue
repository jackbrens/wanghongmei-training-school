<template>
  <div>
    <breadcrumb />
    <div class="wrapper">
      <div class="title-box animate__fadeInUp onMounted-wow">
        <p>联系我们</p>
        <p>Contact us</p>
        <div class="line"></div>
      </div>
      <div class="list animate__fadeInLeft onMounted-wow">
        <div class="list-item" v-for="(item, index) in contactList" :key="index">
          <div class="left-box">
            <div class="left-line"></div>
            <div class="content-box">
              <p>{{ item.title }}</p>
              <p>{{ item.subtitle }}</p>
            </div>
          </div>
          <div class="icon">
            <img :src="requirePath(item.imgPath)" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper">
      <div class="title-box animate__fadeInUp onMounted-wow">
        <p>门店信息</p>
        <p>Store info</p>
        <div class="line"></div>
      </div>
      <div class="tabs">
        <div
          class="tab-item"
          :class="{ active: currentTab === tab.value }"
          v-for="tab in tabList"
          :key="tab.value"
          @click="handleTab(tab)"
        >
          {{ tab.label }}
        </div>
      </div>
      <div class="mapper">
        <businessItem v-for="(item, index) in hasList" :key="index" :item-obj="item" />
      </div>
    </div>
  </div>
</template>
<script setup>
import breadcrumb from '@/components/breadcrumb'
import businessItem from './components/businessItem'
import { maanshanList, wuhuList } from '@/views/store-info/config/index.js'
import { computed, ref } from 'vue'
import { requirePath } from '@/utils/index.js'

const tabList = [
  {
    label: '芜湖地区',
    value: '1'
  },
  {
    label: '马鞍山地区',
    value: '2'
  }
]

const businessList = [
  {
    value: '1',
    childList: wuhuList
  },
  {
    value: '2',
    childList: maanshanList
  }
]

const contactList = [
  {
    imgPath: 'phone.png',
    title: '全国免费热线：',
    subtitle: '400-8876-516'
  },
  {
    imgPath: 'email.png',
    title: '公司邮箱：',
    subtitle: '13956156908@126.com'
  },
  {
    imgPath: 'addr.png',
    title: '公司地址：',
    subtitle: '安徽省芜湖市黄山东路新华文沁苑1栋5单元4层'
  }
]
const currentTab = ref('1')

const hasList = computed(() => {
  return businessList.find((v) => v.value === currentTab.value)?.childList || []
})

const handleTab = (tab) => {
  currentTab.value = tab.value
}
</script>
<style lang="scss" scoped>
@import '@/assets/style/variable';
.title-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #333333;
  margin: 50px 0;
  & > p:nth-of-type(1) {
    font-size: 30px;
    @include media($breakpoint-md) {
      font-size: 30px;
    }
  }
  & > p:nth-of-type(2) {
    color: #666666;
    font-size: 20px;
    padding: 10px 0;
    @include media($breakpoint-md) {
      font-size: 18px;
    }
  }
  .line {
    width: 100px;
    height: 1px;
    background-color: $bg-color;
  }
}

.list {
  display: flex;
  align-items: center;
  @include media($breakpoint-md) {
    padding: 20px;
    flex-direction: column;
  }
  .list-item {
    flex: 33.33%;
    height: 158px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #666666;
    font-size: 20px;
    background-color: #f5f5f5;
    padding: 0 30px;
    @include media($breakpoint-md) {
      font-size: 16px;
      padding: 20px;
      width: 100%;
      margin-bottom: 20px;
    }
    &:nth-of-type(2n) {
      background-color: #9e9c99;
      margin: 0 20px;
      @include media($breakpoint-md) {
        margin-bottom: 20px;
      }
    }
    &:nth-of-type(2n) .left-box {
      background-color: #9e9c99;
      color: #ffffff;
    }
    &:nth-of-type(2n) .left-box .left-line {
      background-color: #ffffff;
    }
    .left-box {
      flex: 1;
      display: flex;
      align-items: center;
      margin-right: 20px;
      .left-line {
        width: 6px;
        height: 30px;
        background-color: #666666;
      }
      .content-box {
        flex: 1;
        margin-left: 30px;
        & > p:nth-of-type(1) {
          font-weight: bold;
          padding-bottom: 10px;
        }
      }
    }
    .icon {
      width: 70px;
      height: 70px;
      @include media($breakpoint-md) {
        width: 50px;
        height: 50px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.tabs {
  margin: 50px 0 100px;
  padding: 20px;
  box-shadow: 0 0 45px 0 rgba(228, 226, 238, 0.8);
  display: flex;
  @include media($breakpoint-md) {
    flex-direction: column;
    margin: 30px;
  }
  .tab-item {
    border: 1px solid rgb(206, 212, 218);
    border-radius: 4px;
    padding: 16px 30px;
    margin-right: 50px;
    cursor: pointer;
    @include media($breakpoint-md) {
      margin-top: 30px;
    }
    &:hover {
      background-color: $bg-color;
      color: #ffffff;
    }
    &.active {
      background-color: $bg-color;
      color: #ffffff;
    }
  }
}
.mapper {
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
}
</style>
