import{o as a,c as r,a as e,t as $,b as u,w as s,r as C,d as h,e as t,f as c,g as x,F as y,h as b,p as M}from"./vendor.4d2819e2.js";const A=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))w(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const v of i.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&w(v)}).observe(document,{childList:!0,subtree:!0});function l(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function w(o){if(o.ep)return;o.ep=!0;const i=l(o);fetch(o.href,i)}};A();const Z={class:"o-header"},B={class:"o-header-dummy"},E={},F=Object.assign(E,{props:{msg:String},setup(_){return(n,l)=>(a(),r("div",Z,[e("div",B,$(_.msg),1)]))}});var k="https://kvlk.github.io/wine/product-image-placeholder.jpg";const f={setup(_){return(n,l)=>(a(),u(h(n.Element||"span"),{class:"a-badge"},{default:s(()=>[C(n.$slots,"default")]),_:3}))}};const O={class:"a-image"},N=e("img",{class:"a-image-image",src:k,alt:"",sizes:"",srcset:""},null,-1),S=c(" \u221225% "),I={setup(_){return(n,l)=>(a(),r("div",O,[N,t(f,{class:"a-badge-sale"},{default:s(()=>[S]),_:1})]))}};const g={props:{headingLevel:Element},setup(_){return(n,l)=>(a(),u(h("h"+_.headingLevel||"h1"),{class:"a-heading"},{default:s(()=>[C(n.$slots,"default")]),_:3}))}};const p={props:{linkElement:Element},setup(_){return(n,l)=>(a(),u(h(_.linkElement||"a"),{class:"a-link"},{default:s(()=>[C(n.$slots,"default")]),_:3}))}};const d={setup(_){return(n,l)=>(a(),u(h(n.Element||"span"),{class:"a-icon"},{default:s(()=>[C(n.$slots,"default")]),_:3}))}};const P={class:"a-border"},m={setup(_){return(n,l)=>(a(),r("hr",P))}};const D={class:"m-rating"},V={class:"m-rating-stars a-icons"},j=e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M7.61394 0.822498C7.76744 0.495478 8.23256 0.495478 8.38606 0.822497L10.0854 4.44286C10.3271 4.95784 10.8096 5.31843 11.372 5.40435L15.1796 5.9861C15.5227 6.03853 15.6628 6.45706 15.4204 6.70551L12.6012 9.59492C12.2231 9.98246 12.0514 10.5265 12.1386 11.0609L12.8029 15.1332C12.8602 15.4846 12.4872 15.7473 12.1757 15.5751L8.82529 13.7231C8.31172 13.4392 7.68828 13.4392 7.17471 13.7231L3.82435 15.5751C3.51278 15.7473 3.1398 15.4846 3.19712 15.1332L3.8614 11.0609C3.94856 10.5265 3.77687 9.98246 3.39876 9.59492L0.579606 6.70551C0.337195 6.45706 0.477307 6.03853 0.820444 5.9861L4.62804 5.40435C5.1904 5.31843 5.67292 4.95784 5.91463 4.44287L7.61394 0.822498Z",fill:"#FF9635"})],-1),H=e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M7.61394 0.822498C7.76744 0.495478 8.23256 0.495478 8.38606 0.822497L10.0854 4.44286C10.3271 4.95784 10.8096 5.31843 11.372 5.40435L15.1796 5.9861C15.5227 6.03853 15.6628 6.45706 15.4204 6.70551L12.6012 9.59492C12.2231 9.98246 12.0514 10.5265 12.1386 11.0609L12.8029 15.1332C12.8602 15.4846 12.4872 15.7473 12.1757 15.5751L8.82529 13.7231C8.31172 13.4392 7.68828 13.4392 7.17471 13.7231L3.82435 15.5751C3.51278 15.7473 3.1398 15.4846 3.19712 15.1332L3.8614 11.0609C3.94856 10.5265 3.77687 9.98246 3.39876 9.59492L0.579606 6.70551C0.337195 6.45706 0.477307 6.03853 0.820444 5.9861L4.62804 5.40435C5.1904 5.31843 5.67292 4.95784 5.91463 4.44287L7.61394 0.822498Z",fill:"#FF9635"})],-1),T=e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M7.61394 0.822498C7.76744 0.495478 8.23256 0.495478 8.38606 0.822497L10.0854 4.44286C10.3271 4.95784 10.8096 5.31843 11.372 5.40435L15.1796 5.9861C15.5227 6.03853 15.6628 6.45706 15.4204 6.70551L12.6012 9.59492C12.2231 9.98246 12.0514 10.5265 12.1386 11.0609L12.8029 15.1332C12.8602 15.4846 12.4872 15.7473 12.1757 15.5751L8.82529 13.7231C8.31172 13.4392 7.68828 13.4392 7.17471 13.7231L3.82435 15.5751C3.51278 15.7473 3.1398 15.4846 3.19712 15.1332L3.8614 11.0609C3.94856 10.5265 3.77687 9.98246 3.39876 9.59492L0.579606 6.70551C0.337195 6.45706 0.477307 6.03853 0.820444 5.9861L4.62804 5.40435C5.1904 5.31843 5.67292 4.95784 5.91463 4.44287L7.61394 0.822498Z",fill:"#FF9635"})],-1),q=e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M7.61394 0.822498C7.76744 0.495478 8.23256 0.495478 8.38606 0.822497L10.0854 4.44286C10.3271 4.95784 10.8096 5.31843 11.372 5.40435L15.1796 5.9861C15.5227 6.03853 15.6628 6.45706 15.4204 6.70551L12.6012 9.59492C12.2231 9.98246 12.0514 10.5265 12.1386 11.0609L12.8029 15.1332C12.8602 15.4846 12.4872 15.7473 12.1757 15.5751L8.82529 13.7231C8.31172 13.4392 7.68828 13.4392 7.17471 13.7231L3.82435 15.5751C3.51278 15.7473 3.1398 15.4846 3.19712 15.1332L3.8614 11.0609C3.94856 10.5265 3.77687 9.98246 3.39876 9.59492L0.579606 6.70551C0.337195 6.45706 0.477307 6.03853 0.820444 5.9861L4.62804 5.40435C5.1904 5.31843 5.67292 4.95784 5.91463 4.44287L7.61394 0.822498Z",fill:"#FF9635"})],-1),z=e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M7.61394 0.822498C7.76744 0.495478 8.23256 0.495478 8.38606 0.822497L10.0854 4.44286C10.3271 4.95784 10.8096 5.31843 11.372 5.40435L15.1796 5.9861C15.5227 6.03853 15.6628 6.45706 15.4204 6.70551L12.6012 9.59492C12.2231 9.98246 12.0514 10.5265 12.1386 11.0609L12.8029 15.1332C12.8602 15.4846 12.4872 15.7473 12.1757 15.5751L8.82529 13.7231C8.31172 13.4392 7.68828 13.4392 7.17471 13.7231L3.82435 15.5751C3.51278 15.7473 3.1398 15.4846 3.19712 15.1332L3.8614 11.0609C3.94856 10.5265 3.77687 9.98246 3.39876 9.59492L0.579606 6.70551C0.337195 6.45706 0.477307 6.03853 0.820444 5.9861L4.62804 5.40435C5.1904 5.31843 5.67292 4.95784 5.91463 4.44287L7.61394 0.822498Z",fill:"#E4E3E2"})],-1),K=c("23 \u043E\u0442\u0437\u044B\u0432\u0430"),R={setup(_){return(n,l)=>(a(),r("div",D,[e("div",V,[t(d,null,{default:s(()=>[j]),_:1}),t(d,null,{default:s(()=>[H]),_:1}),t(d,null,{default:s(()=>[T]),_:1}),t(d,null,{default:s(()=>[q]),_:1}),t(d,null,{default:s(()=>[z]),_:1})]),t(p,{href:"#reviews"},{default:s(()=>[K]),_:1})]))}};const W={class:"m-info-name"},G=c(" Chateau de la Turmeliere, Muscadet Sevre et Maine Sur Lie AOP, 2020 "),J={setup(_){return(n,l)=>(a(),r("div",W,[t(g,{"heading-level":"3"},{default:s(()=>[G]),_:1}),t(R)]))}};const Q={setup(_){return(n,l)=>(a(),u(h(n.Element||"span"),{class:"a-price"},{default:s(()=>[C(n.$slots,"default")]),_:3}))}};const L={props:{buttonElement:Element},setup(_){return(n,l)=>(a(),u(h(_.buttonElement||"a"),{class:"a-button"},{default:s(()=>[C(n.$slots,"default")]),_:3}))}};const U={class:"m-media"},X={class:"m-media-wrapper"},Y=e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.3688 1.00001C10.4037 1 9.78159 1.11498 9.06844 1.46405C8.8044 1.59329 8.55669 1.74893 8.32665 1.93051C8.10546 1.75911 7.86765 1.61061 7.61454 1.48542C6.88755 1.12585 6.23352 1 5.30303 1C2.81096 1 1 3.06484 1 5.74658C1 7.77183 2.12922 9.72819 4.23256 11.6199C5.3366 12.6129 6.74621 13.5955 7.75573 14.1183L8.33333 14.4174L8.91093 14.1183C9.92045 13.5955 11.3301 12.6129 12.4341 11.6199C14.5374 9.72819 15.6667 7.77183 15.6667 5.74658C15.6667 3.09323 13.8386 1.01024 11.3688 1.00001ZM14.3333 5.74658C14.3333 7.33327 13.3908 8.96621 11.5425 10.6286C10.5348 11.5349 9.23931 12.4406 8.33333 12.9158C7.42736 12.4406 6.13188 11.5349 5.12418 10.6286C3.27588 8.96621 2.33333 7.33327 2.33333 5.74658C2.33333 3.76515 3.58909 2.33333 5.30303 2.33333C6.04285 2.33333 6.49875 2.42106 7.02342 2.68056C7.33334 2.83385 7.60725 3.03625 7.84435 3.28918L8.33489 3.81247L8.82097 3.28503C9.0634 3.02197 9.34134 2.81496 9.65462 2.66162C10.1639 2.41233 10.5913 2.33333 11.3661 2.33334C13.0588 2.34035 14.3333 3.79264 14.3333 5.74658Z",fill:"#A3A2A1"})],-1),e1=e("span",{class:"m-media-label"},"\u0412 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435",-1),t1=e("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M5.68323 11.3665C2.54447 11.3665 0 8.82199 0 5.68323C0 2.54447 2.54447 0 5.68323 0C8.82199 0 11.3665 2.54447 11.3665 5.68323C11.3665 6.99656 10.921 8.20584 10.1729 9.16822L14 12.9953L12.9953 14L9.16822 10.1729C8.20584 10.921 6.99656 11.3665 5.68323 11.3665ZM9.94501 5.68259C9.94501 8.03666 8.03666 9.94501 5.68259 9.94501C3.32852 9.94501 1.42017 8.03666 1.42017 5.68259C1.42017 3.32852 3.32852 1.42017 5.68259 1.42017C8.03666 1.42017 9.94501 3.32852 9.94501 5.68259Z",fill:"#A3A2A1"})],-1),s1=e("span",{class:"m-media-label"},"\u041F\u043E\u0445\u043E\u0436\u0435\u0435",-1),n1=e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M2.61527 10.6154C1.16912 10.6154 -0.000113487 9.44615 -0.000113487 8C-0.000113487 6.55385 1.16912 5.38462 2.61527 5.38462C3.35373 5.38462 4.01527 5.69231 4.49219 6.18462L9.33835 3.36923C9.26143 3.13846 9.23066 2.87692 9.23066 2.61538C9.23066 1.16923 10.3999 0 11.846 0C13.2922 0 14.4614 1.16923 14.4614 2.61538C14.4614 4.06154 13.2922 5.23077 11.846 5.23077C11.1076 5.23077 10.446 4.92308 9.96912 4.43077L5.12296 7.26154C5.1845 7.49231 5.23066 7.73846 5.23066 8C5.23066 8.26154 5.1845 8.50769 5.12296 8.75385L9.96912 11.5692C10.446 11.0769 11.1076 10.7692 11.846 10.7692C13.2922 10.7692 14.4614 11.9385 14.4614 13.3846C14.4614 14.8308 13.2922 16 11.846 16C10.3999 16 9.23066 14.8308 9.23066 13.3846C9.23066 13.1231 9.27681 12.8769 9.33835 12.6308L4.49219 9.8C4.01527 10.3077 3.35373 10.6154 2.61527 10.6154ZM2.61527 6.61539C1.84604 6.61539 1.23066 7.23077 1.23066 8C1.23066 8.76923 1.84604 9.38462 2.61527 9.38462C3.3845 9.38462 3.99989 8.76923 3.99989 8C3.99989 7.23077 3.3845 6.61539 2.61527 6.61539ZM11.846 4C12.6153 4 13.2307 3.38462 13.2307 2.61538C13.2307 1.84615 12.6153 1.23077 11.846 1.23077C11.0768 1.23077 10.4614 1.84615 10.4614 2.61538C10.4614 3.38462 11.0768 4 11.846 4ZM11.846 14.7692C12.6153 14.7692 13.2307 14.1538 13.2307 13.3846C13.2307 12.6154 12.6153 12 11.846 12C11.0768 12 10.4614 12.6154 10.4614 13.3846C10.4614 14.1538 11.0768 14.7692 11.846 14.7692Z",fill:"#A3A2A1"})],-1),_1=e("span",{class:"m-media-label"},"\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F",-1),l1={setup(_){return(n,l)=>(a(),r("div",U,[t(m),e("div",X,[t(p,{"link-element":"button",type:"button"},{default:s(()=>[t(d,null,{default:s(()=>[Y]),_:1}),e1]),_:1}),t(p,{href:"/wine/824987/similar"},{default:s(()=>[t(d,null,{default:s(()=>[t1]),_:1}),s1]),_:1}),t(p,{class:"a-link-share",href:"#"},{default:s(()=>[t(d,null,{default:s(()=>[n1]),_:1}),_1]),_:1})])]))}};const a1={class:"m-offer-box"},o1=e("ins",null,"1 890 \u20BD",-1),i1=e("del",null,"2 990 \u20BD",-1),r1={class:"m-offer-box-buttons"},d1=c(" \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443 "),c1=c(" \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u0441\u043F\u0438\u0441\u043E\u043A "),u1={setup(_){return(n,l)=>(a(),r("div",a1,[t(Q,null,{default:s(()=>[o1,i1]),_:1}),e("div",r1,[t(L,{"button-element":"button",type:"button",class:"a-button-primary"},{default:s(()=>[d1]),_:1}),t(L,{"button-element":"button",type:"button",class:"a-button-outline"},{default:s(()=>[c1]),_:1})]),t(l1)]))}};const C1={class:"m-info-description"},h1=e("small",null,"\u041E \u0442\u043E\u0432\u0430\u0440\u0435",-1),p1=e("div",null,[e("p",null,"\u0411\u0435\u043B\u043E\u0435 \u0441\u0443\u0445\u043E\u0435 \u0432\u0438\u043D\u043E, \u0438\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u043E\u0435 \u0438\u0437 \u0432\u0438\u043D\u043E\u0433\u0440\u0430\u0434\u0430 \u0441\u043E\u0440\u0442\u0430 \u041C\u0435\u043B\u043E\u043D\u044C \u0434\u0435 \u0411\u0443\u0440\u0433\u043E\u043D\u044C, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u0440\u043E\u0438\u0437\u0440\u0430\u0441\u0442\u0430\u0435\u0442 \u043D\u0430 \u0432\u0438\u043D\u043E\u0433\u0440\u0430\u0434\u043D\u0438\u043A\u0430\u0445 \u0432 \u0430\u043F\u0435\u043B\u043B\u0430\u0441\u044C\u043E\u043D\u0435 \u041C\u044E\u0441\u043A\u0430\u0434\u0435 \u0421\u0435\u0432\u0440 \u044D\xA0\u041C\u0435\u043D. \u0421\u0431\u043E\u0440 \u0443\u0440\u043E\u0436\u0430\u044F \u043F\u0440\u043E\u0432\u043E\u0434\u0438\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u0438 \u044F\u0433\u043E\u0434\u0430\u043C\u0438 \u043E\u043F\u0442\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0439 \u0437\u0440\u0435\u043B\u043E\u0441\u0442\u0438.")],-1),f1=c(" \u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C "),v1={class:"space-y-4 mt-5"},g1=e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("circle",{cx:"8",cy:"8",r:"8",fill:"white"}),e("path",{d:"M8 16C12.416 16 16 12.416 16 8C16 3.584 12.416 -3.13323e-07 8 -6.99382e-07C3.584 -1.08544e-06 1.08544e-06 3.584 6.99382e-07 8C3.13323e-07 12.416 3.584 16 8 16ZM7.2 4L8.8 4L8.8 5.6L7.2 5.6L7.2 4ZM7.2 7.2L8.8 7.2L8.8 12L7.2 12L7.2 7.2Z",fill:"#C2C0BF"})],-1),m1=e("span",null,"\u041A\u0443\u043F\u0438\u043B\u0438 86 \u0440\u0430\u0437 \u0437\u0430 \u0441\u0443\u0442\u043A\u0438",-1),L1=e("small",null,"\u0422\u0438\u043F \u0432\u0438\u043D\u0430",-1),w1=e("span",{class:"a-badge-expert-label-extended"},"Wine",-1),$1=c(" 98 "),x1={setup(_){return(n,l)=>(a(),r("div",C1,[n.$grid.lg&&!n.$grid.xl?(a(),u(g,{key:0,"heading-level":"6"},{default:s(()=>[h1]),_:1})):x("",!0),p1,t(L,{class:"a-button-outline"},{default:s(()=>[f1]),_:1}),e("div",v1,[t(m),t(f,{class:"a-badge-action"},{default:s(()=>[t(d,null,{default:s(()=>[g1]),_:1}),m1]),_:1}),t(m),t(g,{"heading-level":"6"},{default:s(()=>[L1]),_:1}),t(f,{class:"a-badge-expert"},{default:s(()=>[w1,$1]),_:1})])]))}};const y1={class:"o-product-details"},b1=c(" \u0410\u0440\u0442\u0438\u043A\u0443\u043B: 824987 "),M1=e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M2.61527 10.6154C1.16912 10.6154 -0.000113487 9.44615 -0.000113487 8C-0.000113487 6.55385 1.16912 5.38462 2.61527 5.38462C3.35373 5.38462 4.01527 5.69231 4.49219 6.18462L9.33835 3.36923C9.26143 3.13846 9.23066 2.87692 9.23066 2.61538C9.23066 1.16923 10.3999 0 11.846 0C13.2922 0 14.4614 1.16923 14.4614 2.61538C14.4614 4.06154 13.2922 5.23077 11.846 5.23077C11.1076 5.23077 10.446 4.92308 9.96912 4.43077L5.12296 7.26154C5.1845 7.49231 5.23066 7.73846 5.23066 8C5.23066 8.26154 5.1845 8.50769 5.12296 8.75385L9.96912 11.5692C10.446 11.0769 11.1076 10.7692 11.846 10.7692C13.2922 10.7692 14.4614 11.9385 14.4614 13.3846C14.4614 14.8308 13.2922 16 11.846 16C10.3999 16 9.23066 14.8308 9.23066 13.3846C9.23066 13.1231 9.27681 12.8769 9.33835 12.6308L4.49219 9.8C4.01527 10.3077 3.35373 10.6154 2.61527 10.6154ZM2.61527 6.61539C1.84604 6.61539 1.23066 7.23077 1.23066 8C1.23066 8.76923 1.84604 9.38462 2.61527 9.38462C3.3845 9.38462 3.99989 8.76923 3.99989 8C3.99989 7.23077 3.3845 6.61539 2.61527 6.61539ZM11.846 4C12.6153 4 13.2307 3.38462 13.2307 2.61538C13.2307 1.84615 12.6153 1.23077 11.846 1.23077C11.0768 1.23077 10.4614 1.84615 10.4614 2.61538C10.4614 3.38462 11.0768 4 11.846 4ZM11.846 14.7692C12.6153 14.7692 13.2307 14.1538 13.2307 13.3846C13.2307 12.6154 12.6153 12 11.846 12C11.0768 12 10.4614 12.6154 10.4614 13.3846C10.4614 14.1538 11.0768 14.7692 11.846 14.7692Z",fill:"#AFACA9"})],-1),A1={setup(_){return(n,l)=>(a(),r("div",y1,[t(I),t(f,{class:"a-badge-code"},{default:s(()=>[b1,t(p,{href:"#share"},{default:s(()=>[t(d,null,{default:s(()=>[M1]),_:1})]),_:1})]),_:1}),t(J),t(u1),t(x1)]))}};const Z1={setup(_){return(n,l)=>(a(),r(y,null,[t(F,{msg:"Header"}),t(A1)],64))}};b(Z1).use(M).mount("#app");