import{b as j}from"./index-0R1ypDeo.js";import{_ as I,a as i,c as l,d as t,e as c,g as m,t as n,r as P,l as $,i as x,F as p,f as u,n as w,k as L,p as k,h as O}from"./index-BTIpcbEe.js";const S={class:"business"},y={class:"img-box"},B=["src"],C={class:"content"},M={class:"content-left"},F={class:"desc"},N={class:"title"},T={class:"phone"},U={class:"address"},V={class:"content-right"},q=["src"],z={__name:"index",props:{itemObj:{type:Object,default:()=>{}}},setup(e){return(g,v)=>{var d,o,r,h;return i(),l("div",S,[t("div",y,[t("img",{class:"image",src:c(m)((d=e.itemObj)==null?void 0:d.imgPath),alt:""},null,8,B)]),t("div",C,[t("div",M,[t("p",F,[t("span",N,n((o=e.itemObj)==null?void 0:o.title),1),t("span",T,"电话："+n((r=e.itemObj)==null?void 0:r.phone),1)]),t("p",U,n((h=e.itemObj)==null?void 0:h.address),1)]),t("div",V,[t("img",{src:c(m)("arrow-right.png"),alt:""},null,8,q)])])])}}},D=I(z,[["__scopeId","data-v-cba51f26"]]),E=[{imgPath:"storeInfo/store-info1.jpg",title:"中江桥店",phone:"0553-4828968",address:"地址：弋江区中江桥南中江新村23号门面"},{imgPath:"storeInfo/store-info2.jpg",title:"中央城店",phone:"0553-4828958",address:"地址：弋江区中央城财富街2-116号门面"},{imgPath:"storeInfo/store-info3.jpg",title:"华亭店",phone:"0553-4828928",address:"地址：镜湖区北京中路华亭阳光2.-2号门面"},{imgPath:"storeInfo/store-info4.jpg",title:"星隆店",phone:"0553-4828908",address:"地址：镜湖区福达新村10栋1号门面（星隆国际对面 华衍水务旁）"},{imgPath:"storeInfo/store-info5.jpg",title:"润安店",phone:"0553-4828618",address:"地址：镜湖区润安花园10栋2号门面（银湖路欧尚向南100米）"},{imgPath:"storeInfo/store-info6.jpg",title:"青山街店",phone:"0553-4828178",address:"地址：青山街锦天花苑1-19号门面"},{imgPath:"storeInfo/store-info7.jpg",title:"快慢里店",phone:"0553-4828966",address:"地址：鸠江区公园大道快慢里商业街S7-16号门面"},{imgPath:"storeInfo/store-info8.jpg",title:"吉和北路店",phone:"0553-4828628",address:"地址：镜湖区吉和北路泰华裕中新村1栋-08门面(老一院斜对面)"},{imgPath:"storeInfo/store-info9.jpg",title:"清水店",phone:"0553-4828191",address:"地址：鸠江区清水镇清联路438号"}],A=[{imgPath:"storeInfo/store-info10.jpg",title:"星悦广场店",phone:"0555-2227209",address:"地址：马鞍山市花山区星悦广场4楼30号（万达影院斜对面）"},{imgPath:"storeInfo/store-info11.jpg",title:"桃源路店",phone:"0555-2227279",address:"地址：马鞍山市花山区桃源路101号-2（赵一鸣零食旁）"},{imgPath:"storeInfo/store-info12.jpg",title:"西湖花园店",phone:"0555-2227286",address:"地址：西湖花园小区南门左侧100米"},{imgPath:"storeInfo/store-info13.jpg",title:"绿洲花园店",phone:"0555-2227287",address:"地址：绿洲花园1村东门对面"}],f=e=>(k("data-v-51f0e75e"),e=e(),O(),e),G={class:"wrapper"},H=f(()=>t("div",{class:"title-box animate__fadeInUp onMounted-wow"},[t("p",null,"联系我们"),t("p",null,"Contact us"),t("div",{class:"line"})],-1)),J={class:"list animate__fadeInLeft onMounted-wow"},K={class:"left-box"},Q=f(()=>t("div",{class:"left-line"},null,-1)),R={class:"content-box"},W={class:"icon"},X=["src"],Y={class:"wrapper"},Z=f(()=>t("div",{class:"title-box animate__fadeInUp onMounted-wow"},[t("p",null,"门店信息"),t("p",null,"Store info"),t("div",{class:"line"})],-1)),tt={class:"tabs"},st=["onClick"],et={class:"mapper"},ot={__name:"index",setup(e){const g=[{label:"芜湖地区",value:"1"},{label:"马鞍山地区",value:"2"}],v=[{value:"1",childList:E},{value:"2",childList:A}],d=[{imgPath:"phone.png",title:"全国免费热线：",subtitle:"400-8876-516"},{imgPath:"email.png",title:"公司邮箱：",subtitle:"13956156908@126.com"},{imgPath:"addr.png",title:"公司地址：",subtitle:"安徽省芜湖市黄山东路新华文沁苑1栋5单元4层"}],o=P("1"),r=$(()=>{var a;return((a=v.find(b=>b.value===o.value))==null?void 0:a.childList)||[]}),h=a=>{o.value=a.value};return(a,b)=>(i(),l("div",null,[x(c(j)),t("div",G,[H,t("div",J,[(i(),l(p,null,u(d,(s,_)=>t("div",{class:"list-item",key:_},[t("div",K,[Q,t("div",R,[t("p",null,n(s.title),1),t("p",null,n(s.subtitle),1)])]),t("div",W,[t("img",{src:c(m)(s.imgPath),alt:""},null,8,X)])])),64))])]),t("div",Y,[Z,t("div",tt,[(i(),l(p,null,u(g,s=>t("div",{class:w(["tab-item",{active:o.value===s.value}]),key:s.value,onClick:_=>h(s)},n(s.label),11,st)),64))]),t("div",et,[(i(!0),l(p,null,u(r.value,(s,_)=>(i(),L(c(D),{key:_,"item-obj":s},null,8,["item-obj"]))),128))])])]))}},at=I(ot,[["__scopeId","data-v-51f0e75e"]]);export{at as default};