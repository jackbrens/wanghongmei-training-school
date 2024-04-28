export const requirePath = (imgPath) => {
  try {
    return new URL(`../assets/${imgPath}`, import.meta.url).href
  } catch (error) {
    console.warn(error)
  }
}

export const menuList = [
  {
    label: '首页',
    routerName: 'home'
  },
  {
    label: '公司介绍',
    routerName: 'about'
  },
  {
    label: '品牌故事',
    routerName: 'brandCulture'
  },
  {
    label: '企业文化',
    routerName: 'corporateCulture'
  },
  {
    label: '业务板块',
    routerName: 'businessSegments'
  },
  {
    label: '经典项目',
    routerName: 'classicProjects'
  },
  {
    label: '新闻中心',
    routerName: 'news'
  },
  {
    label: '品牌加盟',
    routerName: 'joinUs'
  },
  {
    label: '联系我们',
    routerName: 'storeInfo'
  }
]
