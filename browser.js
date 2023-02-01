// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,e=t.toString,i=t.__defineGetter__,o=t.__defineSetter__,u=t.__lookupGetter__,a=t.__lookupSetter__,f=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,f){var c,s,l,p;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((s="value"in f)&&(u.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=f.value,r.__proto__=c):r[n]=f.value),l="get"in f,p="set"in f,s&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&i&&i.call(r,n,f.get),p&&o&&o.call(r,n,f.set),r};function c(r,n,t){f(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})}function s(r,n,t){f(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(r){return r!=r}var p=Math.floor,y=Math.ceil;function h(r){return r<0?y(r):p(r)}var v=Number,g=v.NEGATIVE_INFINITY,N=Number.POSITIVE_INFINITY,d=1023;function m(r){return r===N||r===g}var b=2147483647,w="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function A(){return w&&"symbol"==typeof Symbol.toStringTag}var _,E=Object.prototype.toString,k=Object.prototype.hasOwnProperty,S="function"==typeof Symbol?Symbol.toStringTag:"",U=A()?function(r){var n,t,e,i,o;if(null==r)return E.call(r);t=r[S],o=S,n=null!=(i=r)&&k.call(i,o);try{r[S]=void 0}catch(n){return E.call(r)}return e=E.call(r),n?r[S]=t:delete r[S],e}:function(r){return E.call(r)},j="function"==typeof Uint32Array,I="function"==typeof Uint32Array?Uint32Array:null,x="function"==typeof Uint32Array?Uint32Array:void 0;_=function(){var r,n,t;if("function"!=typeof I)return!1;try{n=new I(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(j&&t instanceof Uint32Array||"[object Uint32Array]"===U(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?x:function(){throw new Error("not implemented")};var T,F=_,O="function"==typeof Float64Array,V="function"==typeof Float64Array?Float64Array:null,P="function"==typeof Float64Array?Float64Array:void 0;T=function(){var r,n,t;if("function"!=typeof V)return!1;try{n=new V([1,3.14,-3.14,NaN]),t=n,r=(O&&t instanceof Float64Array||"[object Float64Array]"===U(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?P:function(){throw new Error("not implemented")};var $,G=T,L="function"==typeof Uint8Array,H="function"==typeof Uint8Array?Uint8Array:null,M="function"==typeof Uint8Array?Uint8Array:void 0;$=function(){var r,n,t;if("function"!=typeof H)return!1;try{n=new H(n=[1,3.14,-3.14,256,257]),t=n,r=(L&&t instanceof Uint8Array||"[object Uint8Array]"===U(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?M:function(){throw new Error("not implemented")};var W,C=$,R="function"==typeof Uint16Array,Z="function"==typeof Uint16Array?Uint16Array:null,q="function"==typeof Uint16Array?Uint16Array:void 0;W=function(){var r,n,t;if("function"!=typeof Z)return!1;try{n=new Z(n=[1,3.14,-3.14,65536,65537]),t=n,r=(R&&t instanceof Uint16Array||"[object Uint16Array]"===U(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?q:function(){throw new Error("not implemented")};var X,Y={uint16:W,uint8:C};(X=new Y.uint16(1))[0]=4660;var z,B,D=52===new Y.uint8(X.buffer)[0];!0===D?(z=1,B=0):(z=0,B=1);var J={HIGH:z,LOW:B},K=new G(1),Q=new F(K.buffer),rr=J.HIGH,nr=J.LOW;function tr(r,n,t,e){return K[0]=r,n[e]=Q[rr],n[e+t]=Q[nr],n}function er(r){return tr(r,[0,0],1,0)}s(er,"assign",tr);var ir,or,ur=!0===D?1:0,ar=new G(1),fr=new F(ar.buffer);function cr(r){return ar[0]=r,fr[ur]}!0===D?(ir=1,or=0):(ir=0,or=1);var sr={HIGH:ir,LOW:or},lr=new G(1),pr=new F(lr.buffer),yr=sr.HIGH,hr=sr.LOW;function vr(r,n){return pr[yr]=r,pr[hr]=n,lr[0]}var gr=[0,0];function Nr(r,n){var t,e;return er.assign(r,gr,1,0),t=gr[0],t&=b,e=cr(n),vr(t|=e&=2147483648,gr[1])}function dr(r){return Math.abs(r)}function mr(r,n,t,e){return l(r)||m(r)?(n[e]=r,n[e+t]=0,n):0!==r&&dr(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}s((function(r){return mr(r,[0,0],1,0)}),"assign",mr);var br=[0,0],wr=[0,0];function Ar(r,n){var t,e;return 0===n||0===r||l(r)||m(r)?r:(mr(r,br,1,0),n+=br[1],n+=function(r){var n=cr(r);return(n=(2146435072&n)>>>20)-d|0}(r=br[0]),n<-1074?Nr(0,r):n>1023?r<0?g:N:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,er.assign(r,wr,1,0),t=wr[0],t&=2148532223,e*vr(t|=n+d<<20,wr[1])))}var _r=1.4426950408889634,Er=1/(1<<28);function kr(r){var n;return l(r)||r===N?r:r===g?0:r>709.782712893384?N:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Er?1+r:function(r,n,t){var e,i,o,u;return Ar(1-(n-(e=r-n)*(o=e-(i=e*e)*(0===(u=i)?.16666666666666602:.16666666666666602+u*(u*(6613756321437934e-20+u*(4.1381367970572385e-8*u-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),t)}(r-.6931471803691238*(n=h(r<0?_r*r-.5:_r*r+.5)),1.9082149292705877e-10*n,n)}function Sr(r,n,t){return l(r)||l(n)||l(t)||t<0?NaN:0===t?r<n?0:1:1/(1+kr(-(r-n)/t))}function Ur(r){return function(){return r}}function jr(r){return l(r)?Ur(NaN):function(n){return l(n)?NaN:n<r?0:1}}function Ir(r,n,t){f(r,n,{configurable:!1,enumerable:!1,get:t})}function xr(r){return"number"==typeof r}s((function(r,n){return l(r)||l(n)?NaN:r<n?0:1}),"factory",jr),s(Sr,"factory",(function(r,n){return l(r)||l(n)||n<0?Ur(NaN):0===n?jr(r):function(t){return l(t)?NaN:1/(1+kr(-(t-r)/n))}}));var Tr=v.prototype.toString,Fr=A();function Or(r){return"object"==typeof r&&(r instanceof v||(Fr?function(r){try{return Tr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===U(r)))}function Vr(r){return xr(r)||Or(r)}function Pr(r){return xr(r)&&r>0}function $r(r){return Or(r)&&r.valueOf()>0}function Gr(r){return Pr(r)||$r(r)}function Lr(r){return xr(r)&&l(r)}function Hr(r){return Or(r)&&l(r.valueOf())}function Mr(r){return Lr(r)||Hr(r)}s(Vr,"isPrimitive",xr),s(Vr,"isObject",Or),s(Gr,"isPrimitive",Pr),s(Gr,"isObject",$r),s(Mr,"isPrimitive",Lr),s(Mr,"isObject",Hr);var Wr=!0===D?1:0,Cr=new G(1),Rr=new F(Cr.buffer);function Zr(r,n){return Cr[0]=r,Rr[Wr]=n>>>0,Cr[0]}var qr=.6931471803691238,Xr=1.9082149292705877e-10,Yr=1048575;function zr(r){var n,t,e,i,o,u,a,f,c,s,p,y;return 0===r?g:l(r)||r<0?NaN:(o=0,(t=cr(r))<1048576&&(o-=54,t=cr(r*=0x40000000000000)),t>=2146435072?r+r:(o+=(t>>20)-d|0,o+=(f=614244+(t&=Yr)&1048576|0)>>20|0,a=(r=Zr(r,t|1072693248^f))-1,(Yr&2+t)<3?0===a?0===o?0:o*qr+o*Xr:(u=a*a*(.5-.3333333333333333*a),0===o?a-u:o*qr-(u-o*Xr-a)):(f=t-398458|0,c=440401-t|0,i=(p=(y=(s=a/(2+a))*s)*y)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=y*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),u=e+i,(f|=c)>0?(n=.5*a*a,0===o?a-(n-s*(n+u)):o*qr-(n-(s*(n+u)+o*Xr)-a)):0===o?a-s*(a-u):o*qr-(s*(a-u)-o*Xr-a))))}function Br(r,n){return l(r)||l(n)||n<=0?NaN:zr(n)+2}function Dr(r,n){return l(r)||l(n)||n<=0?NaN:1.2}function Jr(r,n){return l(r)||l(n)||n<=0?NaN:r}function Kr(r,n){return l(r)||l(n)||n<=0?NaN:r}function Qr(r,n){return l(r)||l(n)||n<=0?NaN:r}function rn(r,n){return l(r)||l(n)||n<=0?NaN:0}var nn=3.141592653589793;function tn(r,n){return l(r)||l(n)||n<=0?NaN:n*nn/1.7320508075688772}function en(r,n){return l(r)||l(n)||n<=0?NaN:n*n*9.869604401089358/3}var on=.6931471803691238,un=1.9082149292705877e-10;function an(r){var n,t,e,i,o,u,a,f,c,s;if(r<-1||l(r))return NaN;if(-1===r)return g;if(r===N)return r;if(0===r)return r;if(s=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(s=0,i=r,t=1)}return 0!==s&&(e<9007199254740992?(o=(s=((t=cr(c=1+r))>>20)-d)>0?1-(c-r):r-(c-1),o/=c):(s=((t=cr(c=r))>>20)-d,o=0),(t&=1048575)<434334?c=Zr(c,1072693248|t):(s+=1,c=Zr(c,1071644672|t),t=1048576-t>>2),i=c-1),n=.5*i*i,0===t?0===i?s*on+(o+=s*un):s*on-((f=n*(1-.6666666666666666*i))-(s*un+o)-i):(f=(a=(u=i/(2+i))*u)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(a),0===s?i-(n-u*(n+f)):s*on-(n-(u*(n+f)+(s*un+o))-i))}function fn(r){return r<=18?an(kr(r)):r>33.3?r:r+kr(-r)}function cn(r,n,t){return l(r)||l(n)||l(t)||t<0?NaN:0===t?r<n?g:0:-fn(-(r-n)/t)}function sn(r){return l(r)?Ur(NaN):function(n){return l(n)?NaN:n<r?g:0}}function ln(r,n,t){var e;return l(r)||l(n)||l(t)||t<0?NaN:r===g?g:0===t?r===n?N:g:(e=-dr((r-n)/t))-2*an(kr(e))-zr(t)}function pn(r){return l(r)?Ur(NaN):function(n){return l(n)?NaN:n===r?N:g}}function yn(r,n){var t,e,i,o;return i=(o=r*r)*o,e=o*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(o),e+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(o),(i=1-(t=.5*o))+(1-i-t+(o*e-r*n))}s((function(r,n){return l(r)||l(n)?NaN:r<n?g:0}),"factory",sn),s(cn,"factory",(function(r,n){return l(r)||l(n)||n<0?Ur(NaN):0===n?sn(r):function(t){return l(t)?NaN:-fn(-(t-r)/n)}})),s((function(r,n){return l(r)||l(n)?NaN:r===n?N:g}),"factory",pn),s(ln,"factory",(function(r,n){var t;return l(r)||l(n)||n<0?Ur(NaN):0===n?pn(r):(t=zr(n),function(e){var i;return l(e)?NaN:e===g?g:(i=-dr((e-r)/n))-2*an(kr(i))-t})}));var hn=-.16666666666666632;function vn(r,n){var t,e,i;return t=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),e=i*r,0===n?r+e*(hn+i*t):r-(i*(.5*n-e*t)-n-e*hn)}var gn=!0===D?0:1,Nn=new G(1),dn=new F(Nn.buffer);function mn(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var bn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],wn=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],An=16777216,_n=5.960464477539063e-8,En=mn(20),kn=mn(20),Sn=mn(20),Un=mn(20);function jn(r,n,t,e,i,o,u,a,f){var c,s,l,y,h,v,g,N,d;for(y=o,d=e[t],N=t,h=0;N>0;h++)s=_n*d|0,Un[h]=d-An*s|0,d=e[N-1]+s,N-=1;if(d=Ar(d,i),d-=8*p(.125*d),d-=g=0|d,l=0,i>0?(g+=h=Un[t-1]>>24-i,Un[t-1]-=h<<24-i,l=Un[t-1]>>23-i):0===i?l=Un[t-1]>>23:d>=.5&&(l=2),l>0){for(g+=1,c=0,h=0;h<t;h++)N=Un[h],0===c?0!==N&&(c=1,Un[h]=16777216-N):Un[h]=16777215-N;if(i>0)switch(i){case 1:Un[t-1]&=8388607;break;case 2:Un[t-1]&=4194303}2===l&&(d=1-d,0!==c&&(d-=Ar(1,i)))}if(0===d){for(N=0,h=t-1;h>=o;h--)N|=Un[h];if(0===N){for(v=1;0===Un[o-v];v++);for(h=t+1;h<=t+v;h++){for(f[a+h]=bn[u+h],s=0,N=0;N<=a;N++)s+=r[N]*f[a+(h-N)];e[h]=s}return jn(r,n,t+=v,e,i,o,u,a,f)}}if(0===d)for(t-=1,i-=24;0===Un[t];)t-=1,i-=24;else(d=Ar(d,-i))>=An?(s=_n*d|0,Un[t]=d-An*s|0,i+=24,Un[t+=1]=s):Un[t]=0|d;for(s=Ar(1,i),h=t;h>=0;h--)e[h]=s*Un[h],s*=_n;for(h=t;h>=0;h--){for(s=0,v=0;v<=y&&v<=t-h;v++)s+=wn[v]*e[h+v];Sn[t-h]=s}for(s=0,h=t;h>=0;h--)s+=Sn[h];for(n[0]=0===l?s:-s,s=Sn[0]-s,h=1;h<=t;h++)s+=Sn[h];return n[1]=0===l?s:-s,7&g}function In(r,n,t,e){var i,o,u,a,f,c,s;for((o=(t-3)/24|0)<0&&(o=0),a=t-24*(o+1),c=o-(u=e-1),s=u+4,f=0;f<=s;f++)En[f]=c<0?0:bn[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=u;c++)i+=r[c]*En[u+(f-c)];kn[f]=i}return jn(r,n,4,kn,a,4,o,u,En)}var xn=Math.round;function Tn(r,n,t){var e,i,o,u,a;return o=r-1.5707963267341256*(e=xn(.6366197723675814*r)),u=6077100506506192e-26*e,a=n>>20|0,t[0]=o-u,a-(cr(t[0])>>20&2047)>16&&(u=20222662487959506e-37*e-((i=o)-(o=i-(u=6077100506303966e-26*e))-u),t[0]=o-u,a-(cr(t[0])>>20&2047)>49&&(u=84784276603689e-45*e-((i=o)-(o=i-(u=20222662487111665e-37*e))-u),t[0]=o-u)),t[1]=o-t[0]-u,e}var Fn=1.5707963267341256,On=6077100506506192e-26,Vn=2*On,Pn=3*On,$n=4*On,Gn=[0,0,0],Ln=[0,0];function Hn(r,n){var t,e,i,o,u,a,f;if((i=2147483647&cr(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?Tn(r,i,n):i<=1073928572?r>0?(f=r-Fn,n[0]=f-On,n[1]=f-n[0]-On,1):(f=r+Fn,n[0]=f+On,n[1]=f-n[0]+On,-1):r>0?(f=r-2*Fn,n[0]=f-Vn,n[1]=f-n[0]-Vn,2):(f=r+2*Fn,n[0]=f+Vn,n[1]=f-n[0]+Vn,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?Tn(r,i,n):r>0?(f=r-3*Fn,n[0]=f-Pn,n[1]=f-n[0]-Pn,3):(f=r+3*Fn,n[0]=f+Pn,n[1]=f-n[0]+Pn,-3):1075388923===i?Tn(r,i,n):r>0?(f=r-4*Fn,n[0]=f-$n,n[1]=f-n[0]-$n,4):(f=r+4*Fn,n[0]=f+$n,n[1]=f-n[0]+$n,-4);if(i<1094263291)return Tn(r,i,n);if(i>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return Nn[0]=r,dn[gn]}(r),f=vr(i-((e=(i>>20)-1046)<<20|0),t),u=0;u<2;u++)Gn[u]=0|f,f=16777216*(f-Gn[u]);for(Gn[2]=f,o=3;0===Gn[o-1];)o-=1;return a=In(Gn,Ln,e,o),r<0?(n[0]=-Ln[0],n[1]=-Ln[1],-a):(n[0]=Ln[0],n[1]=Ln[1],a)}var Mn=[0,0];function Wn(r){var n;if(n=cr(r),(n&=2147483647)<=1072243195)return n<1044381696?1:yn(r,0);if(n>=2146435072)return NaN;switch(3&Hn(r,Mn)){case 0:return yn(Mn[0],Mn[1]);case 1:return-vn(Mn[0],Mn[1]);case 2:return-yn(Mn[0],Mn[1]);default:return vn(Mn[0],Mn[1])}}var Cn=[0,0];function Rn(r){var n;if(n=cr(r),(n&=2147483647)<=1072243195)return n<1045430272?r:vn(r,0);if(n>=2146435072)return NaN;switch(3&Hn(r,Cn)){case 0:return vn(Cn[0],Cn[1]);case 1:return yn(Cn[0],Cn[1]);case 2:return-vn(Cn[0],Cn[1]);default:return-yn(Cn[0],Cn[1])}}function Zn(r){return l(r)?NaN:m(r)?0:0===r?1:function(r){var n,t;return l(r)||m(r)?NaN:0===(n=dr(t=r%2))||1===n?Nr(0,t):n<.25?Rn(nn*t):n<.75?Nr(Wn(nn*(n=.5-n)),t):n<1.25?(t=Nr(1,t)-t,Rn(nn*t)):n<1.75?-Nr(Wn(nn*(n-=1.5)),t):(t-=Nr(2,t),Rn(nn*t))}(r)/(nn*r)}function qn(r,n,t){var e;return l(e=t*r)||l(n)||t<0||dr(e)>1?NaN:kr(n*r)/Zn(e)}function Xn(r){return l(r)?Ur(NaN):function(n){return l(n)?NaN:kr(r*n)}}function Yn(r){return p(r)===r}function zn(r){return Yn(r/2)}function Bn(r){return zn(r>0?r-1:r+1)}s((function(r,n){return l(r)||l(n)?NaN:kr(n*r)}),"factory",Xn),s(qn,"factory",(function(r,n){return l(r)||l(n)||n<0?Ur(NaN):0===n?Xn(r):function(t){var e=n*t;return dr(e)>1?NaN:kr(r*t)/Zn(e)}}));var Dn=Math.sqrt,Jn=!0===D?0:1,Kn=new G(1),Qn=new F(Kn.buffer);function rt(r,n){return Kn[0]=r,Qn[Jn]=n>>>0,Kn[0]}function nt(r){return 0|r}var tt=1048576,et=[1,1.5],it=[0,.5849624872207642],ot=[0,1.350039202129749e-8],ut=1048575,at=1048576,ft=1083179008,ct=1e300,st=1e-300,lt=[0,0],pt=[0,0];function yt(r,n){var t,e,i,o,u,a,f,c,s,p,y,h,v,w;if(l(r)||l(n))return NaN;if(er.assign(n,lt,1,0),u=lt[0],0===lt[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Dn(r);if(-.5===n)return 1/Dn(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(m(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:dr(r)<1==(n===N)?0:N}(r,n)}if(er.assign(r,lt,1,0),o=lt[0],0===lt[1]){if(0===o)return function(r,n){return n===g?N:n===N?0:n>0?Bn(n)?r:0:Bn(n)?Nr(N,r):N}(r,n);if(1===r)return 1;if(-1===r&&Bn(n))return-1;if(m(r))return r===g?yt(-0,-n):n<0?0:N}if(r<0&&!1===Yn(n))return(r-r)/(r-r);if(i=dr(r),t=o&b|0,e=u&b|0,f=u>>>31|0,a=(a=o>>>31|0)&&Bn(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(cr(r)&b)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===f?a*ct*ct:a*st*st;if(t>1072693248)return 0===f?a*ct*ct:a*st*st;y=function(r,n){var t,e,i,o,u,a;return t=(u=1.9259629911266175e-8*(i=n-1)-i*i*(0===(a=i)?.5:.5+a*(.25*a-.3333333333333333))*1.4426950408889634)-((e=rt(e=(o=1.4426950216293335*i)+u,0))-o),r[0]=e,r[1]=t,r}(pt,i)}else y=function(r,n,t){var e,i,o,u,a,f,c,s,l,p,y,h,v,g,N,m,b,w,A,_,E;return w=0,t<tt&&(w-=53,t=cr(n*=9007199254740992)),w+=(t>>20)-d|0,t=1072693248|(A=1048575&t|0),A<=235662?_=0:A<767610?_=1:(_=0,w+=1,t-=tt),u=rt(i=(m=(n=Zr(n,t))-(c=et[_]))*(b=1/(n+c)),0),e=524288+(t>>1|536870912),f=Zr(0,e+=_<<18),N=(o=i*i)*o*(0===(E=o)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=rt(f=3+(o=u*u)+(N+=(a=b*(m-u*f-u*(n-(f-c))))*(u+i)),0),v=(y=-7.028461650952758e-9*(l=rt(l=(m=u*f)+(b=a*f+(N-(f-3-o))*i),0))+.9617966939259756*(b-(l-m))+ot[_])-((h=rt(h=(p=.9617967009544373*l)+y+(s=it[_])+(g=w),0))-g-s-p),r[0]=h,r[1]=v,r}(pt,i,t);if(h=(p=(n-(c=rt(n,0)))*y[0]+n*y[1])+(s=c*y[0]),er.assign(h,lt,1,0),v=nt(lt[0]),w=nt(lt[1]),v>=ft){if(0!=(v-ft|w))return a*ct*ct;if(p+8008566259537294e-32>h-s)return a*ct*ct}else if((v&b)>=1083231232){if(0!=(v-3230714880|w))return a*st*st;if(p<=h-s)return a*st*st}return h=function(r,n,t){var e,i,o,u,a,f,c,s,l,p;return l=((s=r&b|0)>>20)-d|0,c=0,s>1071644672&&(i=Zr(0,((c=r+(at>>l+1)>>>0)&~(ut>>(l=((c&b)>>20)-d|0)))>>>0),c=(c&ut|at)>>20-l>>>0,r<0&&(c=-c),n-=i),r=nt(r=cr(f=1-((f=(o=.6931471824645996*(i=rt(i=t+n,0)))+(u=.6931471805599453*(t-(i-n))+-1.904654299957768e-9*i))*(e=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((a=u-(f-o))+f*a)-f))),(r+=c<<20>>>0)>>20<=0?Ar(f,c):Zr(f,r)}(v,s,p),a*h}function ht(r,n,t){var e;return l(r)||l(n)||l(t)||t<0?NaN:r===g?0:0===t?r===n?N:0:(e=kr(-dr((r-n)/t)))/(t*yt(1+e,2))}function vt(r){return l(r)?Ur(NaN):function(n){return l(n)?NaN:n===r?N:0}}function gt(r,n,t){return l(n)||l(t)||l(r)||t<0||r<0||r>1?NaN:0===t?n:n+t*zr(r/(1-r))}function Nt(r){return l(r)?Ur(NaN):function(n){return l(n)||n<0||n>1?NaN:r}}function dt(r){return"number"==typeof r}function mt(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function bt(r,n,t){var e=!1,i=n-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(e=!0,r=r.substr(1)),r=t?r+mt(i):mt(i)+r,e&&(r="-"+r)),r}s((function(r,n){return l(r)||l(n)?NaN:r===n?N:0}),"factory",vt),s(ht,"factory",(function(r,n){return l(r)||l(n)||n<0?Ur(NaN):0===n?vt(r):function(t){var e,i;return l(t)?NaN:t===g?0:(i=dr((t-r)/n),(e=kr(-i))/(n*yt(1+e,2)))}})),s((function(r,n){return l(r)||r<0||r>1?NaN:n}),"factory",Nt),s(gt,"factory",(function(r,n){return l(r)||l(n)||n<0?Ur(NaN):0===n?Nt(r):function(t){return l(t)||t<0||t>1?NaN:r+n*zr(t/(1-t))}}));var wt=String.prototype.toLowerCase,At=String.prototype.toUpperCase;function _t(r){var n,t,e;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(t=r.arg,e=parseInt(t,10),!isFinite(e)){if(!dt(t))throw new Error("invalid integer. Value: "+t);e=0}return e<0&&("u"===r.specifier||10!==n)&&(e=4294967295+e+1),e<0?(t=(-e).toString(n),r.precision&&(t=bt(t,r.precision,r.padRight)),t="-"+t):(t=e.toString(n),e||r.precision?r.precision&&(t=bt(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===n&&(r.alternate&&(t="0x"+t),t=r.specifier===At.call(r.specifier)?At.call(t):wt.call(t)),8===n&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Et(r){return"string"==typeof r}var kt=Math.abs,St=String.prototype.toLowerCase,Ut=String.prototype.toUpperCase,jt=String.prototype.replace,It=/e\+(\d)$/,xt=/e-(\d)$/,Tt=/^(\d+)$/,Ft=/^(\d+)e/,Ot=/\.0$/,Vt=/\.0*e/,Pt=/(\..*[^0])0*e/;function $t(r){var n,t,e=parseFloat(r.arg);if(!isFinite(e)){if(!dt(r.arg))throw new Error("invalid floating-point number. Value: "+t);e=r.arg}switch(r.specifier){case"e":case"E":t=e.toExponential(r.precision);break;case"f":case"F":t=e.toFixed(r.precision);break;case"g":case"G":kt(e)<1e-4?((n=r.precision)>0&&(n-=1),t=e.toExponential(n)):t=e.toPrecision(r.precision),r.alternate||(t=jt.call(t,Pt,"$1e"),t=jt.call(t,Vt,"e"),t=jt.call(t,Ot,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=jt.call(t,It,"e+0$1"),t=jt.call(t,xt,"e-0$1"),r.alternate&&(t=jt.call(t,Tt,"$1."),t=jt.call(t,Ft,"$1.e")),e>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Ut.call(r.specifier)?Ut.call(t):St.call(t)}function Gt(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}function Lt(r,n,t){var e=n-r.length;return e<0?r:r=t?r+Gt(e):Gt(e)+r}var Ht=String.fromCharCode,Mt=isNaN,Wt=Array.isArray;function Ct(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function Rt(r){var n,t,e,i,o,u,a,f,c;if(!Wt(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",a=1,f=0;f<r.length;f++)if(Et(e=r[f]))u+=e;else{if(n=void 0!==e.precision,!(e=Ct(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+e+"`.");for(e.mapping&&(a=e.mapping),t=e.flags,c=0;c<t.length;c++)switch(i=t.charAt(c)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[a],10),a+=1,Mt(e.width))throw new TypeError("the argument for * width at position "+a+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[a],10),a+=1,Mt(e.precision))throw new TypeError("the argument for * precision at position "+a+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[a],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=_t(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!Mt(e.arg)){if((o=parseInt(e.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=Mt(o)?String(e.arg):Ht(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=$t(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=bt(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=Lt(e.arg,e.width,e.padRight)),u+=e.arg||"",a+=1}return u}var Zt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function qt(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function Xt(r){var n,t,e,i;for(t=[],i=0,e=Zt.exec(r);e;)(n=r.slice(i,Zt.lastIndex-e[0].length)).length&&t.push(n),t.push(qt(e)),i=Zt.lastIndex,e=Zt.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function Yt(r){return"string"==typeof r}function zt(r){var n,t,e;if(!Yt(r))throw new TypeError(zt("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=Xt(r),(t=new Array(arguments.length))[0]=n,e=1;e<t.length;e++)t[e]=arguments[e];return Rt.apply(null,t)}function Bt(){var r,n;if(!(this instanceof Bt))return 0===arguments.length?new Bt:new Bt(arguments[0],arguments[1]);if(arguments.length){if(n=arguments[1],!xr(r=arguments[0])||Mr(r))throw new TypeError(zt("invalid argument. Location parameter must be a number. Value: `%s`.",r));if(!Pr(n))throw new TypeError(zt("invalid argument. Scale parameter must be a positive number. Value: `%s`.",n))}else r=0,n=1;return f(this,"mu",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!xr(n)||Mr(n))throw new TypeError(zt("invalid assignment. Must be a number. Value: `%s`.",n));r=n}}),f(this,"s",{configurable:!1,enumerable:!0,get:function(){return n},set:function(r){if(!Pr(r))throw new TypeError(zt("invalid assignment. Must be a positive number. Value: `%s`.",r));n=r}}),this}Ir(Bt.prototype,"entropy",(function(){return Br(this.mu,this.s)})),Ir(Bt.prototype,"kurtosis",(function(){return Dr(this.mu,this.s)})),Ir(Bt.prototype,"mean",(function(){return Jr(this.mu,this.s)})),Ir(Bt.prototype,"median",(function(){return Kr(this.mu,this.s)})),Ir(Bt.prototype,"mode",(function(){return Qr(this.mu,this.s)})),Ir(Bt.prototype,"skewness",(function(){return rn(this.mu,this.s)})),Ir(Bt.prototype,"stdev",(function(){return tn(this.mu,this.s)})),Ir(Bt.prototype,"variance",(function(){return en(this.mu,this.s)})),s(Bt.prototype,"cdf",(function(r){return Sr(r,this.mu,this.s)})),s(Bt.prototype,"logcdf",(function(r){return cn(r,this.mu,this.s)})),s(Bt.prototype,"logpdf",(function(r){return ln(r,this.mu,this.s)})),s(Bt.prototype,"mgf",(function(r){return qn(r,this.mu,this.s)})),s(Bt.prototype,"pdf",(function(r){return ht(r,this.mu,this.s)})),s(Bt.prototype,"quantile",(function(r){return gt(r,this.mu,this.s)}));var Dt={};return c(Dt,"cdf",Sr),c(Dt,"Logistic",Bt),c(Dt,"entropy",Br),c(Dt,"kurtosis",Dr),c(Dt,"logcdf",cn),c(Dt,"logpdf",ln),c(Dt,"mean",Jr),c(Dt,"median",Kr),c(Dt,"mgf",qn),c(Dt,"mode",Qr),c(Dt,"pdf",ht),c(Dt,"quantile",gt),c(Dt,"skewness",rn),c(Dt,"stdev",tn),c(Dt,"variance",en),Dt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).logistic=n();
//# sourceMappingURL=browser.js.map
