(self["webpackChunkflower_lover"]=self["webpackChunkflower_lover"]||[]).push([[580],{6580:function(e,t,n){"use strict";n.d(t,{Z:function(){return q}});var i=n(3396),o=n(7139);const a={class:"carousel"},s={class:"flag_wrap"},r={key:0,class:"sale"},l={key:1,class:"new"},u={class:"flower_card"},c=["src","alt"],d={class:"bouquet_name"},p={class:"price"},v={key:0,class:"old_price"},g=["onClick"];function f(e,t,f,m,h,w){const j=(0,i.up)("slide"),S=(0,i.up)("navigation"),b=(0,i.up)("pagination"),x=(0,i.up)("carousel");return(0,i.wg)(),(0,i.iD)("div",a,[(0,i.Wm)(x,{"items-to-show":3,settings:h.sliderSettings,breakpoints:h.breakpoints},{addons:(0,i.w5)((()=>[(0,i.Wm)(S),(0,i.Wm)(b)])),default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(h.flowers,(e=>((0,i.wg)(),(0,i.j4)(j,{key:e},{default:(0,i.w5)((()=>[(0,i._)("div",s,[e.isSale?((0,i.wg)(),(0,i.iD)("div",r,"SALE")):(0,i.kq)("",!0),e.isNew?((0,i.wg)(),(0,i.iD)("div",l,"NEW")):(0,i.kq)("",!0)]),(0,i._)("div",u,[(0,i._)("img",{src:n(9265)(`./${e.images[0]}`),class:"card-img-top",alt:e.title},null,8,c),(0,i._)("div",d,(0,o.zw)(e.title),1),(0,i._)("div",p,[(0,i.Uk)((0,o.zw)(e.price)+" UAN ",1),e.isSale?((0,i.wg)(),(0,i.iD)("span",v,(0,o.zw)(e.old_price)+" UAN",1)):(0,i.kq)("",!0)]),(0,i._)("button",{class:"transparent_btn",type:"button",onClick:t=>w.addToCart(e.id,e.price,e.title)}," У корзину ",8,g)])])),_:2},1024)))),128))])),_:1},8,["settings","breakpoints"])])}var m=n(6265),h=n.n(m),w=n(4870),j=n(9242);
/**
 * Vue 3 Carousel 0.1.46
 * (c) 2022
 * @license MIT
 */
const S={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0},b={itemsToShow:{default:S.itemsToShow,type:Number},itemsToScroll:{default:S.itemsToScroll,type:Number},wrapAround:{default:S.wrapAround,type:Boolean},snapAlign:{default:S.snapAlign,validator(e){return["start","end","center","center-even","center-odd"].includes(e)}},transition:{default:S.transition,type:Number},breakpoints:{default:S.breakpoints,type:Object},autoplay:{default:S.autoplay,type:Number},pauseAutoplayOnHover:{default:S.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:S.mouseDrag,type:Boolean},touchDrag:{default:S.touchDrag,type:Boolean},dir:{default:S.dir,validator(e){return["rtl","ltr"].includes(e)}},settings:{default(){return{}},type:Object}};function x(e,t){let n;return function(...i){n&&clearTimeout(n),n=setTimeout((()=>{e(...i),n=null}),t)}}function y(e,t){let n;return function(...i){const o=this;n||(e.apply(o,i),n=!0,setTimeout((()=>n=!1),t))}}function _(e){var t,n,i;return e?"CarouselSlide"===(null===(n=null===(t=e[0])||void 0===t?void 0:t.type)||void 0===n?void 0:n.name)?e:(null===(i=e[0])||void 0===i?void 0:i.children)||[]:[]}function T(e,t){if(e.wrapAround)return t-1;switch(e.snapAlign){case"start":return t-e.itemsToShow;case"end":return t-1;case"center":case"center-odd":return t-Math.ceil(e.itemsToShow/2);case"center-even":return t-Math.ceil(e.itemsToShow/2);default:return 0}}function k(e){if(e.wrapAround)return 0;switch(e.snapAlign){case"start":return 0;case"end":return e.itemsToShow-1;case"center":case"center-odd":return Math.floor((e.itemsToShow-1)/2);case"center-even":return Math.floor((e.itemsToShow-2)/2);default:return 0}}function A(e,t,n,i){return e.wrapAround?t:Math.min(Math.max(t,i),n)}function M({slidesBuffer:e,currentSlide:t,snapAlign:n,itemsToShow:i,wrapAround:o,slidesCount:a}){let s=e.indexOf(t);if(-1===s&&(s=e.indexOf(Math.ceil(t))),"center"===n||"center-odd"===n?s-=(i-1)/2:"center-even"===n?s-=(i-2)/2:"end"===n&&(s-=i-1),!o){const e=a-i,t=0;s=Math.max(Math.min(s,e),t)}return s}var O=(0,i.aZ)({name:"Carousel",props:b,setup(e,{slots:t,emit:n,expose:o}){var a;const s=(0,w.iH)(null),r=(0,w.iH)([]),l=(0,w.iH)([]),u=(0,w.iH)(0),c=(0,w.iH)(1);let d,p,v=(0,w.iH)({}),g=Object.assign({},S);const f=(0,w.qj)(Object.assign({},g)),m=(0,w.iH)(null!==(a=f.modelValue)&&void 0!==a?a:0),h=(0,w.iH)(0),O=(0,w.iH)(0),H=(0,w.iH)(0),N=(0,w.iH)(0);function C(){const t=Object.assign(Object.assign({},e),e.settings);v=(0,w.iH)(Object.assign({},t.breakpoints)),g=Object.assign(Object.assign({},t),{settings:void 0,breakpoints:void 0}),L(g)}function J(){const e=Object.keys(v.value).map((e=>Number(e))).sort(((e,t)=>+t-+e));let t=Object.assign({},g);e.some((e=>{const n=window.matchMedia(`(min-width: ${e}px)`).matches;return!!n&&(t=Object.assign(Object.assign({},t),v.value[e]),!0)})),L(t)}function L(e){for(let t in e)f[t]=e[t]}(0,i.JJ)("config",f),(0,i.JJ)("slidesBuffer",l),(0,i.JJ)("slidesCount",c),(0,i.JJ)("currentSlide",m),(0,i.JJ)("maxSlide",H),(0,i.JJ)("minSlide",N);const D=x((()=>{v.value&&(J(),E()),B()}),16);function B(){if(!s.value)return;const e=s.value.getBoundingClientRect();u.value=e.width/f.itemsToShow}function E(){c.value=Math.max(r.value.length,1),c.value<=0||(O.value=Math.ceil((c.value-1)/2),H.value=T(f,c.value),N.value=k(f),m.value=A(f,m.value,H.value,N.value))}function q(){const e=[...Array(c.value).keys()],t=f.wrapAround&&f.itemsToShow+1<=c.value;if(t){const t=1!==f.itemsToShow?Math.round((c.value-f.itemsToShow)/2):0;let n=t-m.value;if("end"===f.snapAlign?n+=Math.floor(f.itemsToShow-1):"center"!==f.snapAlign&&"center-odd"!==f.snapAlign||n++,n<0)for(let i=n;i<0;i++)e.push(Number(e.shift()));else for(let i=0;i<n;i++)e.unshift(Number(e.pop()))}l.value=e}(0,i.bv)((()=>{v.value&&(J(),E()),(0,i.Y3)((()=>setTimeout(B,16))),R(),window.addEventListener("resize",D,{passive:!0})})),(0,i.Ah)((()=>{p&&clearTimeout(p),d&&clearInterval(d)}));let I=!1;const F={x:0,y:0},z={x:0,y:0},V=(0,w.qj)({x:0,y:0}),Y=(0,w.iH)(!1),U=()=>{Y.value=!0},W=()=>{Y.value=!1};function X(e){I="touchstart"===e.type,!I&&0!==e.button||G.value||(I||e.preventDefault(),F.x=I?e.touches[0].clientX:e.clientX,F.y=I?e.touches[0].clientY:e.clientY,document.addEventListener(I?"touchmove":"mousemove",$,!0),document.addEventListener(I?"touchend":"mouseup",P,!0))}const $=y((e=>{z.x=I?e.touches[0].clientX:e.clientX,z.y=I?e.touches[0].clientY:e.clientY;const t=z.x-F.x,n=z.y-F.y;V.y=n,V.x=t}),16);function P(){const e="rtl"===f.dir?-1:1,t=.4*Math.sign(V.x),n=Math.round(V.x/u.value+t)*e;let i=A(f,m.value-n,H.value,N.value);if(n&&!I){const e=t=>{t.stopPropagation(),window.removeEventListener("click",e,!0)};window.addEventListener("click",e,!0)}K(i),V.x=0,V.y=0,document.removeEventListener(I?"touchmove":"mousemove",$,!0),document.removeEventListener(I?"touchend":"mouseup",P,!0)}function R(){!f.autoplay||f.autoplay<=0||(d=setInterval((()=>{f.pauseAutoplayOnHover&&Y.value||Q()}),f.autoplay))}function Z(){d&&(clearInterval(d),d=null),R()}const G=(0,w.iH)(!1);function K(e,t=!1){if(m.value===e||G.value)return;Z();const i=c.value-1;return e>i?K(e-c.value):e<0?K(e+c.value):(G.value=!0,h.value=m.value,m.value=e,t||n("update:modelValue",m.value),void(p=setTimeout((()=>{f.wrapAround&&q(),G.value=!1}),f.transition)))}function Q(){let e=m.value+f.itemsToScroll;f.wrapAround||(e=Math.min(e,H.value)),K(e)}function ee(){let e=m.value-f.itemsToScroll;f.wrapAround||(e=Math.max(e,N.value)),K(e)}const te={slideTo:K,next:Q,prev:ee};(0,i.JJ)("nav",te);const ne=(0,i.Fl)((()=>M({slidesBuffer:l.value,itemsToShow:f.itemsToShow,snapAlign:f.snapAlign,wrapAround:Boolean(f.wrapAround),currentSlide:m.value,slidesCount:c.value})));(0,i.JJ)("slidesToScroll",ne);const ie=(0,i.Fl)((()=>{const e="rtl"===f.dir?-1:1,t=ne.value*u.value*e;return{transform:`translateX(${V.x-t}px)`,transition:`${G.value?f.transition:0}ms`}}));function oe(){C()}function ae(){C(),J(),E(),q(),B(),Z()}function se(){E(),q()}Object.keys(b).forEach((t=>{["modelValue"].includes(t)||(0,i.YP)((()=>e[t]),ae)})),oe(),(0,i.m0)((()=>{const t=c.value!==r.value.length,n=void 0!==e.modelValue&&m.value!==e.modelValue;n&&K(Number(e.modelValue),!0),t&&se()}));const re={config:f,slidesBuffer:l,slidesCount:c,slideWidth:u,currentSlide:m,maxSlide:H,minSlide:N,middleSlide:O};o({updateBreakpointsConfigs:J,updateSlidesData:E,updateSlideWidth:B,updateSlidesBuffer:q,initCarousel:oe,restartCarousel:ae,updateCarousel:se,slideTo:K,next:Q,prev:ee,nav:te,data:re});const le=t.default||t.slides,ue=t.addons,ce=(0,w.qj)(re);return()=>{const e=_(null===le||void 0===le?void 0:le(ce)),t=(null===ue||void 0===ue?void 0:ue(ce))||[];r.value=e,e.forEach(((e,t)=>e.props.index=t));const n=(0,i.h)("ol",{class:"carousel__track",style:ie.value,onMousedown:f.mouseDrag?(0,j.iM)(X,["capture"]):null,onTouchstart:f.touchDrag?(0,j.iM)(X,["capture"]):null},e),o=(0,i.h)("div",{class:"carousel__viewport"},n);return(0,i.h)("section",{ref:s,class:{carousel:!0,"carousel--rtl":"rtl"===f.dir},dir:f.dir,"aria-label":"Gallery",onMouseenter:U,onMouseleave:W},[o,t])}}});const H={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"},N=e=>{const t=e.name;if(!t||"string"!==typeof t)return;const n=H[t],o=(0,i.h)("path",{d:n}),a=e.title||t,s=(0,i.h)("title",a);return(0,i.h)("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img",ariaLabel:a},[s,o])};N.props={name:String,title:String};const C=(e,{slots:t,attrs:n})=>{const{next:o,prev:a}=t||{},s=(0,i.f3)("config",(0,w.qj)(Object.assign({},S))),r=(0,i.f3)("maxSlide",(0,w.iH)(1)),l=(0,i.f3)("minSlide",(0,w.iH)(1)),u=(0,i.f3)("currentSlide",(0,w.iH)(1)),c=(0,i.f3)("nav",{}),d="rtl"===s.dir,p=(0,i.h)("button",{type:"button",class:["carousel__prev",!s.wrapAround&&u.value<=l.value&&"carousel__prev--in-active",null===n||void 0===n?void 0:n.class],"aria-label":"Navigate to previous slide",onClick:c.prev},(null===a||void 0===a?void 0:a())||(0,i.h)(N,{name:d?"arrowRight":"arrowLeft"})),v=(0,i.h)("button",{type:"button",class:["carousel__next",!s.wrapAround&&u.value>=r.value&&"carousel__next--in-active",null===n||void 0===n?void 0:n.class],"aria-label":"Navigate to next slide",onClick:c.next},(null===o||void 0===o?void 0:o())||(0,i.h)(N,{name:d?"arrowLeft":"arrowRight"}));return[p,v]};var J=(0,i.aZ)({name:"CarouselSlide",props:{index:{type:Number,default:1}},setup(e,{slots:t}){const n=(0,i.f3)("config",(0,w.qj)(Object.assign({},S))),o=(0,i.f3)("slidesBuffer",(0,w.iH)([])),a=(0,i.f3)("currentSlide",(0,w.iH)(0)),s=(0,i.f3)("slidesToScroll",(0,w.iH)(0)),r=(0,w.iH)(e.index);function l(){r.value=o.value.indexOf(e.index)}n.wrapAround&&(l(),(0,i.YP)(o,l));const u=(0,i.Fl)((()=>{const e=n.itemsToShow,t=1/e*100+"%";return{width:t,order:r.value.toString()}})),c=()=>e.index===a.value,d=()=>{const t=Math.ceil(s.value),i=Math.floor(s.value+n.itemsToShow),a=o.value.slice(t,i);return a.includes(e.index)},p=()=>e.index===o.value[Math.ceil(s.value)-1],v=()=>e.index===o.value[Math.floor(s.value+n.itemsToShow)];return()=>{var e;return(0,i.h)("li",{style:u.value,class:{carousel__slide:!0,"carousel__slide--active":c(),"carousel__slide--visible":d(),"carousel__slide--prev":p(),"carousel__slide--next":v()}},null===(e=t.default)||void 0===e?void 0:e.call(t))}}});const L=()=>{const e=(0,i.f3)("maxSlide",(0,w.iH)(1)),t=(0,i.f3)("minSlide",(0,w.iH)(1)),n=(0,i.f3)("currentSlide",(0,w.iH)(1)),o=(0,i.f3)("nav",{});function a(e){o.slideTo(e)}const s=i=>{const o=n.value;return o===i||o>e.value&&i>=e.value||o<t.value&&i<=t.value},r=[];for(let l=t.value;l<e.value+1;l++){const e=(0,i.h)("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":s(l)},"aria-label":`Navigate to slide ${l+1}`,onClick:()=>a(l)}),t=(0,i.h)("li",{class:"carousel__pagination-item",key:l},e);r.push(t)}return(0,i.h)("ol",{class:"carousel__pagination"},r)};var D={name:"sliderFavorite",components:{Carousel:O,Slide:J,Pagination:L,Navigation:C},data(){return{cart:[],flowers:[],newQtyItem:0,sliderSettings:{itemsToShow:3},breakpoints:{1024:{itemsToShow:3},700:{itemsToShow:2},480:{itemsToShow:1}}}},created(){h().get("/data/flowers.json").then((e=>{this.flowers=e.data})),this.cart=JSON.parse(localStorage.getItem("products in cart"))||[]},methods:{addToCart(e,t,n){let i=1;if(void 0===this.cart.find((t=>t.id===e)))this.cart.push({name:n,id:e,qty:i,isBuy:!1,price:t,total:parseFloat((i*t).toFixed(2))}),localStorage.setItem("products in cart",JSON.stringify(this.cart)),this.cart=JSON.parse(localStorage.getItem("products in cart"))||[];else{if(void 0!==this.cart.findIndex((t=>t.id===e))){const t=this.cart.findIndex((t=>t.id===e)),n=this.cart[t].qty+1;this.cart[t].qty=n,this.cart[t].total=parseFloat((n*this.cart[t].price).toFixed(2))}localStorage.setItem("products in cart",JSON.stringify(this.cart)),this.cart=JSON.parse(localStorage.getItem("products in cart"))||[]}}}},B=n(89);const E=(0,B.Z)(D,[["render",f],["__scopeId","data-v-61d792f0"]]);var q=E},9265:function(e,t,n){var i={"./1.1.jpg":9436,"./1.2.jpg":4249,"./1.3.jpg":3529,"./10.1.jpg":3044,"./10.2.jpg":411,"./10.3.jpg":4842,"./11.1.jpg":2351,"./11.2.jpg":1203,"./11.3.jpg":2585,"./12.1.jpg":5055,"./12.2.jpg":3098,"./12.3.jpg":9467,"./2.1.jpg":2524,"./2.2.jpg":183,"./2.3.jpg":3083,"./3.1.jpg":4657,"./3.2.jpg":989,"./3.3.jpg":384,"./4.1.jpg":2292,"./4.2.jpg":3556,"./4.3.jpg":6983,"./5.1.jpg":5557,"./5.2.jpg":3793,"./6.1.jpg":4731,"./6.2.jpg":7527,"./6.3.jpg":9019,"./7.1.jpg":4103,"./7.2.jpg":8358,"./7.3.jpg":1992,"./8.1.jpg":2249,"./8.2.jpg":7565,"./8.3.jpg":4816,"./9.1.jpg":9534,"./9.2.jpg":2503,"./9.3.jpg":2430,"./Screenshot_1.jpg":9635};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}o.keys=function(){return Object.keys(i)},o.resolve=a,e.exports=o,o.id=9265},4249:function(e,t,n){"use strict";e.exports=n.p+"img/1.2.84057bd1.jpg"},3529:function(e,t,n){"use strict";e.exports=n.p+"img/1.3.da5975b3.jpg"},411:function(e,t,n){"use strict";e.exports=n.p+"img/10.2.55b956f6.jpg"},4842:function(e,t,n){"use strict";e.exports=n.p+"img/10.3.2b58c7a8.jpg"},1203:function(e,t,n){"use strict";e.exports=n.p+"img/11.2.d41ca5d7.jpg"},2585:function(e,t,n){"use strict";e.exports=n.p+"img/11.3.a840109b.jpg"},3098:function(e,t,n){"use strict";e.exports=n.p+"img/12.2.1d3de262.jpg"},9467:function(e,t,n){"use strict";e.exports=n.p+"img/12.3.745e5854.jpg"},183:function(e,t,n){"use strict";e.exports=n.p+"img/2.2.94ab488c.jpg"},3083:function(e,t,n){"use strict";e.exports=n.p+"img/2.3.79b3d114.jpg"},989:function(e,t,n){"use strict";e.exports=n.p+"img/3.2.e5712f83.jpg"},384:function(e,t,n){"use strict";e.exports=n.p+"img/3.3.a42aecfd.jpg"},3556:function(e,t,n){"use strict";e.exports=n.p+"img/4.2.1c9142cd.jpg"},6983:function(e,t,n){"use strict";e.exports=n.p+"img/4.3.76bb4d4c.jpg"},3793:function(e,t,n){"use strict";e.exports=n.p+"img/5.2.9030c495.jpg"},7527:function(e,t,n){"use strict";e.exports=n.p+"img/6.2.72bfc967.jpg"},9019:function(e,t,n){"use strict";e.exports=n.p+"img/6.3.680bb6f7.jpg"},8358:function(e,t,n){"use strict";e.exports=n.p+"img/7.2.f812a654.jpg"},1992:function(e,t,n){"use strict";e.exports=n.p+"img/7.3.0e59460e.jpg"},7565:function(e,t,n){"use strict";e.exports=n.p+"img/8.2.85f02431.jpg"},4816:function(e,t,n){"use strict";e.exports=n.p+"img/8.3.bcc76645.jpg"},2503:function(e,t,n){"use strict";e.exports=n.p+"img/9.2.8c3135a3.jpg"},2430:function(e,t,n){"use strict";e.exports=n.p+"img/9.3.1cc9f4bf.jpg"},9635:function(e,t,n){"use strict";e.exports=n.p+"img/Screenshot_1.79506ff7.jpg"}}]);
//# sourceMappingURL=580.bb4c2e53.js.map