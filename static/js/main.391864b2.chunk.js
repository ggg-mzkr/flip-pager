(this["webpackJsonpflip-pager"]=this["webpackJsonpflip-pager"]||[]).push([[0],{1:function(e,t,n){e.exports={flipPager:"style_flipPager__2lVo5",flipItem:"style_flipItem__nN-Lr",overlay:"style_overlay__3edRz",oFront:"style_oFront__2YNlx",oBack:"style_oBack__CtPOe",oOuter:"style_oOuter__pQxwJ",oBackContent:"style_oBackContent__2jMKP",oFrontContent:"style_oFrontContent__20YXz",oInner:"style_oInner__3FO3I",shadow:"style_shadow__X5aBR",flipShadow:"style_flipShadow__4pHEW",ts180:"style_ts180__3X9Ud",flipNext:"style_flipNext__1srlz",flipInitial:"style_flipInitial__1gKlq",flipPrev:"style_flipPrev__3AYv5"}},12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c,a=n(2),s=n.n(a),i=n(7),r=n.n(i),l=(n(12),n(3)),o=(n(13),n(5));!function(e){e[e.RTL=0]="RTL",e[e.LTR=1]="LTR"}(c||(c={}));var d,j=n(1),p=n.n(j),O=n(0),h=function(e){var t=e.children,n=Object(o.a)(e,["children"]);return Object(O.jsx)("div",{className:p.a.flipItem,style:{display:n.hidden?"none":"block"},children:t})},b=n(4),u=n.n(b),x=function(e){var t=e.current,n=e.next,s=e.direction,i=e.speed,r=e.shadowSide,o=e.shadowFlip,d=e.easing,j=e.onTransitionEnd,h=Object(a.useState)(s===c.LTR?p.a.overlay:u()(p.a.overlay,p.a.flipInitial)),b=Object(l.a)(h,2),x=b[0],v=b[1],f=Object(a.useState)(r),y=Object(l.a)(f,2),m=y[0],_=y[1],N=Object(a.useState)(o),g=Object(l.a)(N,2),I=g[0],T=g[1],F={transition:"opacity ".concat(i/2,"ms linear ").concat(i/2,"ms")},C={transition:"opacity ".concat(i/2,"ms linear"),opacity:m},k={transition:"opacity ".concat(i/2,"ms linear")},E={transition:"opacity ".concat(i/2,"ms linear ").concat(i/2,"ms"),opacity:I};return setTimeout((function(){v(s===c.LTR?u()(p.a.overlay,p.a.flipNext):u()(p.a.overlay,p.a.flipInitial,p.a.flipPrev)),T(0),_(0)}),25),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:u()(p.a.overlay,p.a.ts180),style:{zIndex:102},children:Object(O.jsx)("div",{className:u()(p.a.oBack,p.a.ts180),children:Object(O.jsxs)("div",{className:p.a.oOuter,children:[Object(O.jsx)("div",{className:p.a.oBackContent,children:Object(O.jsx)("div",{className:p.a.oInner,children:s===c.LTR?t:n})}),Object(O.jsx)("div",{className:p.a.shadow,style:s===c.LTR?F:C})]})})}),Object(O.jsxs)("div",{className:x,style:{zIndex:103,transitionDuration:"".concat(i,"ms"),transitionTimingFunction:d},onTransitionEnd:j,children:[Object(O.jsx)("div",{className:p.a.oFront,children:Object(O.jsxs)("div",{className:p.a.oOuter,children:[Object(O.jsx)("div",{className:p.a.oFrontContent,children:Object(O.jsx)("div",{className:p.a.oInner,children:s===c.LTR?t:n})}),Object(O.jsx)("div",{className:p.a.flipShadow,style:s===c.LTR?k:E})]})}),Object(O.jsx)("div",{className:p.a.oBack,children:Object(O.jsxs)("div",{className:p.a.oOuter,children:[Object(O.jsx)("div",{className:p.a.oBackContent,children:Object(O.jsx)("div",{className:p.a.oInner,children:s===c.LTR?n:t})}),Object(O.jsx)("div",{className:p.a.flipShadow,style:s===c.LTR?E:k})]})})]}),Object(O.jsx)("div",{className:p.a.overlay,style:{zIndex:101},children:Object(O.jsx)("div",{className:p.a.oFront,children:Object(O.jsxs)("div",{className:p.a.oOuter,children:[Object(O.jsx)("div",{className:p.a.oFrontContent,children:Object(O.jsx)("div",{className:p.a.oInner,children:s===c.LTR?n:t})}),Object(O.jsx)("div",{className:p.a.shadow,style:s===c.LTR?C:F})]})})})]})};!function(e){e[e.MOVE=0]="MOVE",e[e.ANIMATION_FINISH=1]="ANIMATION_FINISH"}(d||(d={}));var v=function(e){var t=e.children,n=e.page,s=Object(o.a)(e,["children","page"]),i=Object(a.useReducer)((function(e,t){var n=e.src,i=e.current,r=t.type,l=t.page;if(r===d.ANIMATION_FINISH||i===l){var o=n.map((function(e,t){return Object(O.jsx)(h,{hidden:t!==l,children:e})}));return s.onEndFlip(i,l),{src:n,dst:o,current:l}}s.onBeforeFlip(i);var j=n.map((function(e,t){return Object(O.jsx)(h,{hidden:!0,children:e})})),p=Object(O.jsx)(x,{current:n[i],next:n[l],direction:i<l?c.LTR:c.RTL,easing:s.easing,speed:s.speed,shadowSide:s.shadowSides,shadowFlip:s.shadowFlip,onTransitionEnd:function(){return b({type:d.ANIMATION_FINISH,page:l})}});return{src:n,dst:a.Children.toArray(p).concat(j),current:i}}),{src:a.Children.toArray(t),dst:[],current:n}),r=Object(l.a)(i,2),j=r[0],b=r[1];return Object(a.useEffect)((function(){b({type:d.MOVE,page:n})}),[n]),Object(O.jsx)("div",{className:p.a.flipPager,style:{perspective:s.perspective.toString()+"px"},children:j.dst.map((function(e,t){return Object(a.cloneElement)(e,{key:t})}))})};v.defaultProps={page:0,direction:c.LTR,speed:1e3,easing:"ease-in-out",shadows:!0,shadowSides:.2,shadowFlip:.1,perspective:1200,onBeforeFlip:function(e){},onEndFlip:function(e,t){}};var f=v;var y=function(){var e=Object(a.useState)(0),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(O.jsxs)("div",{className:"container",children:[Object(O.jsxs)(f,{page:n,children:[Object(O.jsx)("div",{style:{backgroundColor:"red"},className:"page",children:"PAGE1"}),Object(O.jsx)("div",{style:{backgroundColor:"blue"},className:"page",children:"PAGE2"}),Object(O.jsx)("div",{style:{backgroundColor:"yellow"},className:"page",children:"PAGE3"}),Object(O.jsx)("div",{style:{backgroundColor:"green"},className:"page",children:"PAGE4"}),Object(O.jsx)("div",{style:{backgroundColor:"orange"},className:"page",children:"PAGE5"})]}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsx)("span",{onClick:function(){c(0)},children:"PAGE1"})}),Object(O.jsx)("li",{children:Object(O.jsx)("span",{onClick:function(){c(1)},children:"PAGE2"})}),Object(O.jsx)("li",{children:Object(O.jsx)("span",{onClick:function(){c(2)},children:"PAGE3"})}),Object(O.jsx)("li",{children:Object(O.jsx)("span",{onClick:function(){c(3)},children:"PAGE4"})}),Object(O.jsx)("li",{children:Object(O.jsx)("span",{onClick:function(){c(4)},children:"PAGE5"})})]})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};r.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(y,{})}),document.getElementById("root")),m()}},[[15,1,2]]]);
//# sourceMappingURL=main.391864b2.chunk.js.map