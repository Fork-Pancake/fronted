(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[11],{1109:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Ze}));var c,a,r,i,s,o,j,b,l,u,d,O,x,m,h,p,g,f,v,k,w,y,C,S,z=n(19),F=n(0),A=n(8),E=n(12),N=n(45),T=n(155),L=n(3),K=n.n(L),B=n(13),Q=n(25),H=n(29),D=n(257),M=n(17),P=n(15),R=n.n(P),W=n(59),U=n(22),_=n(92),q=n(251),I=n(156),J=function(){var e=Object(F.useState)([]),t=Object(Q.a)(e,2),n=t[0],c=t[1],a=Object(H.c)().account,r=Object(I.a)().fastRefresh;return Object(F.useEffect)((function(){a&&function(){var e=Object(B.a)(K.a.mark((function e(){var t,n,r;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=q.b.map((function(e){return{address:Object(U.h)(),name:"pendingCake",params:[e.pid,a]}})),e.next=3,Object(W.a)(_,t);case 3:n=e.sent,r=q.b.map((function(e,t){return Object(M.a)(Object(M.a)({},e),{},{balance:new R.a(n[t])})})),c(r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a,r]),n},V=n(249),$=function(){var e=Object(F.useState)([]),t=Object(Q.a)(e,2),n=t[0],c=t[1],a=Object(H.c)().account,r=Object(I.a)().fastRefresh;return Object(F.useEffect)((function(){a&&function(){var e=Object(B.a)(K.a.mark((function e(){var t,n;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=q.b.map((function(e){return{address:Object(U.h)(),name:"pendingCake",params:[e.pid,a]}})),e.next=3,Object(W.a)(_,t);case 3:n=e.sent,c(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a,r]),n},X=n(46),Y=n(869),G=n(867),Z=n(5),ee=A.e.div(c||(c=Object(z.a)(["\n  margin-bottom: 24px;\n"]))),te=function(){var e=Object(N.a)(),t=Object(H.c)().account,n=$().reduce((function(e,t){return e+new R.a(t).div(new R.a(10).pow(18)).toNumber()}),0),c=new R.a(n).multipliedBy(Object(X.m)()).toNumber();return t?Object(Z.jsxs)(ee,{children:[Object(Z.jsx)(Y.a,{value:n,lineHeight:"1.5"}),Object(Z.jsx)(G.a,{value:c})]}):Object(Z.jsx)(E.db,{color:"textDisabled",style:{lineHeight:"76px"},children:e(298,"Locked")})},ne=n(860),ce=n(73),ae=function(){var e=Object(N.a)(),t=Object(ne.a)(Object(U.d)()),n=new P.BigNumber(Object(ce.a)(t)).multipliedBy(Object(X.m)()).toNumber();return Object(H.c)().account?Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)(Y.a,{value:Object(ce.a)(t),decimals:4,fontSize:"24px",lineHeight:"36px"}),Object(Z.jsx)(G.a,{value:n})]}):Object(Z.jsx)(E.db,{color:"textDisabled",style:{lineHeight:"54px"},children:e(298,"Locked")})},re=Object(A.e)(E.o)(a||(a=Object(z.a)(["\n  background-image: url('/images/cake-bg.svg');\n  background-repeat: no-repeat;\n  background-position: top right;\n  min-height: 376px;\n"]))),ie=A.e.div(r||(r=Object(z.a)(["\n  margin-bottom: 16px;\n"]))),se=A.e.img(i||(i=Object(z.a)(["\n  margin-bottom: 16px;\n"]))),oe=A.e.div(s||(s=Object(z.a)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(e){return e.theme.colors.textSubtle})),je=A.e.div(o||(o=Object(z.a)(["\n  margin-top: 24px;\n"]))),be=function(){var e=Object(F.useState)(!1),t=Object(Q.a)(e,2),n=t[0],c=t[1],a=Object(H.c)().account,r=Object(N.a)(),i=J().filter((function(e){return e.balance.toNumber()>0})),s=Object(D.a)(i.map((function(e){return e.pid}))).onReward,o=Object(F.useCallback)(Object(B.a)(K.a.mark((function e(){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.prev=1,e.next=4,s();case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.prev=8,c(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[1,6,8,11]])}))),[s]);return Object(Z.jsx)(re,{children:Object(Z.jsxs)(E.p,{children:[Object(Z.jsx)(E.F,{size:"xl",mb:"24px",children:r(542,"Farms & Staking")}),Object(Z.jsx)(se,{src:"/images/cake.svg",alt:"cake logo",width:64,height:64}),Object(Z.jsxs)(ie,{children:[Object(Z.jsxs)(oe,{children:[r(544,"CAKE to Harvest"),":"]}),Object(Z.jsx)(te,{})]}),Object(Z.jsxs)(ie,{children:[Object(Z.jsxs)(oe,{children:[r(546,"CAKE in Wallet"),":"]}),Object(Z.jsx)(ae,{})]}),Object(Z.jsx)(je,{children:a?Object(Z.jsx)(E.k,{id:"harvest-all",disabled:i.length<=0||n,onClick:o,width:"100%",children:n?r(548,"Collecting CAKE"):r(532,"Harvest all (".concat(i.length,")"),{count:i.length})}):Object(Z.jsx)(V.a,{width:"100%"})})]})})},le=n(870),ue=n(884),de=n(857),Oe=n(936),xe=n(879),me=n(906),he=n(907),pe=A.e.div(j||(j=Object(z.a)(["\n  margin-bottom: 24px;\n"]))),ge=function(){var e=Object(N.a)(),t=Object(H.c)().account,n=Object(de.c)().claimAmount,c=Object(ce.a)(n),a=new P.BigNumber(c).multipliedBy(Object(X.m)()).toNumber();return t?Object(Z.jsxs)(pe,{children:[Object(Z.jsx)(Y.a,{value:c,lineHeight:"1.5"}),0!==a&&Object(Z.jsx)(G.a,{value:a,decimals:2})]}):Object(Z.jsx)(E.db,{color:"textDisabled",style:{lineHeight:"76px"},children:e(298,"Locked")})},fe=function(){var e=Object(N.a)(),t=Object(de.d)(),n=Object(ce.a)(t),c=n.toLocaleString(void 0,{maximumFractionDigits:2}),a=new P.BigNumber(n).multipliedBy(Object(X.m)()).toNumber();return Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)(E.db,{bold:!0,fontSize:"24px",style:{lineHeight:"1.5"},children:e(999,"".concat(c," CAKE"),{amount:c})}),0!==a&&Object(Z.jsx)(G.a,{value:a})]})},ve=Object(A.e)(E.o)(b||(b=Object(z.a)(["\n  background-image: url('/images/ticket-bg.svg');\n  background-repeat: no-repeat;\n  background-position: top right;\n  min-height: 376px;\n"]))),ke=A.e.div(l||(l=Object(z.a)(["\n  margin-bottom: 16px;\n"]))),we=A.e.img(u||(u=Object(z.a)(["\n  margin-bottom: 16px;\n"]))),ye=A.e.div(d||(d=Object(z.a)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(e){return e.theme.colors.textSubtle})),Ce=A.e.div(O||(O=Object(z.a)(["\n  display: flex;\n  margin-top: 24px;\n  button {\n    flex: 1 0 50%;\n  }\n"]))),Se=function(){var e=Object(H.c)().account,t=Object(le.a)(),n=Object(F.useState)(!1),c=Object(Q.a)(n,2),a=c[0],r=c[1],i=Object(N.a)(),s=Object(xe.b)(),o=Object(E.sb)(Object(Z.jsx)(he.a,{})),j=Object(Q.a)(o,1)[0],b=Object(de.c)().claimAmount,l=Object(ue.c)().onMultiClaim,u=Object(ne.a)(Object(U.d)()),d=Object(me.a)(j),O=d.handleApprove,x=d.requestedApproval,m=Object(F.useCallback)(Object(B.a)(K.a.mark((function e(){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r(!0),e.next=4,l();case 4:e.sent&&r(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[l,r]),h=Object(E.sb)(Object(Z.jsx)(Oe.a,{max:u,tokenName:"CAKE"})),p=Object(Q.a)(h,1)[0];return Object(Z.jsx)(ve,{children:Object(Z.jsxs)(E.p,{children:[Object(Z.jsx)(E.F,{size:"xl",mb:"24px",children:i(550,"Your Lottery Winnings")}),Object(Z.jsx)(we,{src:"/images/ticket.svg",alt:"cake logo",width:64,height:64}),Object(Z.jsxs)(ke,{children:[Object(Z.jsxs)(ye,{children:[i(552,"CAKE to Collect"),":"]}),Object(Z.jsx)(ge,{})]}),Object(Z.jsxs)(ke,{children:[Object(Z.jsxs)(ye,{children:[i(554,"Total jackpot this round"),":"]}),Object(Z.jsx)(fe,{})]}),e?Object(Z.jsxs)(Ce,{children:[Object(Z.jsx)(E.k,{id:"dashboard-collect-winnings",disabled:0===Object(ce.a)(b)||a,onClick:m,style:{marginRight:"8px"},children:i(556,"Collect Winnings")}),s.toNumber()?Object(Z.jsx)(E.k,{id:"dashboard-buy-tickets",variant:"secondary",onClick:p,disabled:t,children:i(558,"Buy Tickets")}):Object(Z.jsx)(E.k,{width:"100%",disabled:x,onClick:O,children:i(494,"Approve CAKE")})]}):Object(Z.jsx)(Ce,{children:Object(Z.jsx)(V.a,{width:"100%"})})]})})},ze=Object(A.e)(E.o)(x||(x=Object(z.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),Fe=A.e.div(m||(m=Object(z.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),Ae=function(){var e=Object(N.a)(),t=Object(ne.c)(),n=Object(ce.a)(Object(ne.b)(Object(U.d)())),c=t?Object(ce.a)(t)-n:0;return Object(Z.jsx)(ze,{children:Object(Z.jsxs)(E.p,{children:[Object(Z.jsx)(E.F,{size:"xl",mb:"24px",children:e(534,"Cake Stats")}),Object(Z.jsxs)(Fe,{children:[Object(Z.jsx)(E.db,{fontSize:"14px",children:e(536,"Total CAKE Supply")}),c&&Object(Z.jsx)(Y.a,{fontSize:"14px",value:c})]}),Object(Z.jsxs)(Fe,{children:[Object(Z.jsx)(E.db,{fontSize:"14px",children:e(538,"Total CAKE Burned")}),Object(Z.jsx)(Y.a,{fontSize:"14px",decimals:0,value:n})]}),Object(Z.jsxs)(Fe,{children:[Object(Z.jsx)(E.db,{fontSize:"14px",children:e(540,"New CAKE/block")}),Object(Z.jsx)(Y.a,{fontSize:"14px",decimals:0,value:22})]})]})})},Ee=Object(A.e)(E.o)(h||(h=Object(z.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n"]))),Ne=function(){var e=Object(N.a)(),t=function(){var e=Object(F.useState)(null),t=Object(Q.a)(e,2),n=t[0],c=t[1];return Object(F.useEffect)((function(){!function(){var e=Object(B.a)(K.a.mark((function e(){var t,n;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://api.pancakeswap.com/api/v1","/tvl"));case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,c(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Unable to fetch data:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()()}),[c]),n}(),n=t?t.total_value_locked_all.toLocaleString("en-US",{maximumFractionDigits:0}):null;return Object(Z.jsx)(Ee,{children:Object(Z.jsxs)(E.p,{children:[Object(Z.jsx)(E.F,{size:"lg",mb:"24px",children:e(762,"Total Value Locked (TVL)")}),t?Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)(E.F,{size:"xl",children:"$".concat(n)}),Object(Z.jsx)(E.db,{color:"textSubtle",children:e(764,"Across all LPs and Syrup Pools")})]}):Object(Z.jsx)(Z.Fragment,{children:Object(Z.jsx)(E.ab,{height:66})})]})})},Te=n(937),Le=n.n(Te),Ke=n(67),Be=n(267),Qe=Object(A.e)(E.o)(p||(p=Object(z.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n\n  "," {\n    margin: 0;\n    max-width: none;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),He=Object(A.e)(E.F).attrs({size:"xl"})(g||(g=Object(z.a)(["\n  line-height: 44px;\n"]))),De=function(){var e=Object(N.a)(),t=Object(X.e)(),n=Object(X.k)(),c=Object(X.m)(),a=Object(F.useMemo)((function(){var e=t.filter((function(e){return 0!==e.pid&&"0X"!==e.multiplier})).map((function(e){if(e.lpTotalInQuoteToken&&n){var t=n[e.quoteToken.symbol.toLowerCase()],a=new R.a(e.lpTotalInQuoteToken).times(t);return Object(Be.a)(e.poolWeight,c,a)}return null})),a=Le()(e);return null===a||void 0===a?void 0:a.toLocaleString("en-US",{maximumFractionDigits:2})}),[c,t,n]);return Object(Z.jsx)(Qe,{children:Object(Z.jsxs)(E.p,{children:[Object(Z.jsx)(E.F,{color:"contrast",size:"lg",children:"Earn up to"}),Object(Z.jsx)(He,{color:"#7645d9",children:a?"".concat(a,"% ").concat(e(736,"APR")):Object(Z.jsx)(E.ab,{animation:"pulse",variant:"rect",height:"44px"})}),Object(Z.jsxs)(E.E,{justifyContent:"space-between",children:[Object(Z.jsx)(E.F,{color:"contrast",size:"lg",children:"in Farms"}),Object(Z.jsx)(Ke.b,{exact:!0,activeClassName:"active",to:"/farms",id:"farm-apy-cta",children:Object(Z.jsx)(E.c,{mt:30,color:"primary"})})]})]})})},Me=n(62),Pe=n(175),Re=n.n(Pe),We=n(65),Ue=Object(A.e)(E.o)(f||(f=Object(z.a)(["\n  background: linear-gradient(#53dee9, #7645d9);\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  "," {\n    margin: 0;\n    max-width: none;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),_e=Object(A.e)(E.F).attrs({size:"xl"})(v||(v=Object(z.a)(["\n  line-height: 44px;\n"]))),qe=function(){var e=We.a.filter((function(e){return!e.isFinished&&!e.earningToken.symbol.includes("CAKE")})),t=Re()(e,["sortOrder","pid"],["desc","desc"]).slice(0,3),n=["CAKE"].concat(Object(Me.a)(t.map((function(e){return e.earningToken.symbol})))).join(", ");return Object(Z.jsx)(Ue,{children:Object(Z.jsxs)(E.p,{children:[Object(Z.jsx)(E.F,{color:"contrast",size:"lg",children:"Earn"}),Object(Z.jsx)(_e,{color:"invertedContrast",children:n}),Object(Z.jsxs)(E.E,{justifyContent:"space-between",children:[Object(Z.jsx)(E.F,{color:"contrast",size:"lg",children:"in Pools"}),Object(Z.jsx)(Ke.b,{exact:!0,activeClassName:"active",to:"/syrup",id:"pool-cta",children:Object(Z.jsx)(E.c,{mt:30,color:"primary"})})]})]})})},Ie=function(){var e=Object(de.d)();return Object(ce.a)(e)*Object(X.m)().toNumber()},Je=Object(A.e)(E.o)(k||(k=Object(z.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n\n  "," {\n    margin: 0;\n    max-width: none;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),Ve=Object(A.e)(E.F).attrs({size:"xl"})(w||(w=Object(z.a)(["\n  line-height: 44px;\n"]))),$e=function(){var e=Math.round(Ie());return Object(Z.jsx)(Je,{children:Object(Z.jsxs)(E.p,{children:[Object(Z.jsx)(E.F,{color:"contrast",size:"lg",children:"Lottery with"}),Object(Z.jsx)(Ve,{color:"#7645d9",children:0!==e?"$".concat(e.toLocaleString()):Object(Z.jsx)(E.ab,{animation:"pulse",variant:"rect",height:"44px"})}),Object(Z.jsxs)(E.E,{justifyContent:"space-between",children:[Object(Z.jsx)(E.F,{color:"contrast",size:"lg",children:"up for grabs"}),Object(Z.jsx)(Ke.b,{exact:!0,activeClassName:"active",to:"/lottery",id:"lottery-pot-cta",children:Object(Z.jsx)(E.c,{mt:30,color:"primary"})})]})]})})},Xe=A.e.div(y||(y=Object(z.a)(["\n  align-items: center;\n  background-image: url('/images/pan-bg-mobile.svg');\n  background-repeat: no-repeat;\n  background-position: top center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 116px;\n  text-align: center;\n\n  "," {\n    background-image: url('/images/pan-bg2.svg'), url('/images/pan-bg.svg');\n    background-position: left center, right center;\n    height: 165px;\n    padding-top: 0;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),Ye=Object(A.e)(E.e)(C||(C=Object(z.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 32px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),Ge=Object(A.e)(E.e)(S||(S=Object(z.a)(["\n  align-items: start;\n  margin-bottom: 32px;\n\n  & > div {\n    grid-column: span 6;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 4;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),Ze=function(){var e=Object(N.a)();return Object(Z.jsxs)(T.a,{children:[Object(Z.jsxs)(Xe,{children:[Object(Z.jsx)(E.F,{as:"h1",size:"xl",mb:"24px",color:"secondary",children:e(576,"PancakeSwap")}),Object(Z.jsx)(E.db,{children:e(578,"The #1 AMM and yield farm on Binance Smart Chain.")})]}),Object(Z.jsxs)("div",{children:[Object(Z.jsxs)(Ye,{children:[Object(Z.jsx)(be,{}),Object(Z.jsx)(Se,{})]}),Object(Z.jsxs)(Ge,{children:[Object(Z.jsx)(De,{}),Object(Z.jsx)(qe,{}),Object(Z.jsx)($e,{})]}),Object(Z.jsxs)(Ye,{children:[Object(Z.jsx)(Ae,{}),Object(Z.jsx)(Ne,{})]})]})]})}},937:function(e,t,n){var c=n(938),a=n(939),r=n(159);e.exports=function(e){return e&&e.length?c(e,r,a):void 0}},938:function(e,t,n){var c=n(133);e.exports=function(e,t,n){for(var a=-1,r=e.length;++a<r;){var i=e[a],s=t(i);if(null!=s&&(void 0===o?s===s&&!c(s):n(s,o)))var o=s,j=i}return j}},939:function(e,t){e.exports=function(e,t){return e>t}}}]);
//# sourceMappingURL=11.46b793c8.chunk.js.map