// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(r){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,e=Object.prototype,i=e.toString,o=e.__defineGetter__,u=e.__defineSetter__,a=e.__lookupGetter__,f=e.__lookupSetter__,c=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?t:function(r,n,t){var c,s,l,p;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((s="value"in t)&&(a.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),l="get"in t,p="set"in t,s&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&o&&o.call(r,n,t.get),p&&u&&u.call(r,n,t.set),r};function s(r,n,t){c(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})}function l(r,n,t){c(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function p(r){return r!=r}var y=Math.floor,h=Math.ceil;function v(r){return r<0?h(r):y(r)}var d=Number,g=d.NEGATIVE_INFINITY,N=Number.POSITIVE_INFINITY,m=1023;function b(r){return r===N||r===g}var w="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function A(){return w&&"symbol"==typeof Symbol.toStringTag}var _,E=Object.prototype.toString,k=Object.prototype.hasOwnProperty,j="function"==typeof Symbol?Symbol.toStringTag:"",S=A()?function(r){var n,t,e,i,o;if(null==r)return E.call(r);t=r[j],o=j,n=null!=(i=r)&&k.call(i,o);try{r[j]=void 0}catch(n){return E.call(r)}return e=E.call(r),n?r[j]=t:delete r[j],e}:function(r){return E.call(r)},U="function"==typeof Uint32Array,x="function"==typeof Uint32Array?Uint32Array:null,I="function"==typeof Uint32Array?Uint32Array:void 0;_=function(){var r,n,t;if("function"!=typeof x)return!1;try{n=new x(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(U&&t instanceof Uint32Array||"[object Uint32Array]"===S(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?I:function(){throw new Error("not implemented")};var T,O=_,F="function"==typeof Float64Array,V="function"==typeof Float64Array?Float64Array:null,P="function"==typeof Float64Array?Float64Array:void 0;T=function(){var r,n,t;if("function"!=typeof V)return!1;try{n=new V([1,3.14,-3.14,NaN]),t=n,r=(F&&t instanceof Float64Array||"[object Float64Array]"===S(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?P:function(){throw new Error("not implemented")};var L,$=T,G="function"==typeof Uint8Array,M="function"==typeof Uint8Array?Uint8Array:null,H="function"==typeof Uint8Array?Uint8Array:void 0;L=function(){var r,n,t;if("function"!=typeof M)return!1;try{n=new M(n=[1,3.14,-3.14,256,257]),t=n,r=(G&&t instanceof Uint8Array||"[object Uint8Array]"===S(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?H:function(){throw new Error("not implemented")};var W,C=L,R="function"==typeof Uint16Array,Z="function"==typeof Uint16Array?Uint16Array:null,q="function"==typeof Uint16Array?Uint16Array:void 0;W=function(){var r,n,t;if("function"!=typeof Z)return!1;try{n=new Z(n=[1,3.14,-3.14,65536,65537]),t=n,r=(R&&t instanceof Uint16Array||"[object Uint16Array]"===S(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?q:function(){throw new Error("not implemented")};var X,Y={uint16:W,uint8:C};(X=new Y.uint16(1))[0]=4660;var z,B,D=52===new Y.uint8(X.buffer)[0];!0===D?(z=1,B=0):(z=0,B=1);var J={HIGH:z,LOW:B},K=new $(1),Q=new O(K.buffer),rr=J.HIGH,nr=J.LOW;function tr(r,n){return K[0]=n,r[0]=Q[rr],r[1]=Q[nr],r}function er(r,n){return 1===arguments.length?tr([0,0],r):tr(r,n)}var ir,or,ur=!0===D?1:0,ar=new $(1),fr=new O(ar.buffer);function cr(r){return ar[0]=r,fr[ur]}!0===D?(ir=1,or=0):(ir=0,or=1);var sr={HIGH:ir,LOW:or},lr=new $(1),pr=new O(lr.buffer),yr=sr.HIGH,hr=sr.LOW;function vr(r,n){return pr[yr]=r,pr[hr]=n,lr[0]}var dr=[0,0];function gr(r,n){var t,e;return er(dr,r),t=dr[0],t&=2147483647,e=cr(n),vr(t|=e&=2147483648,dr[1])}function Nr(r){return Math.abs(r)}function mr(r,n){return p(n)||b(n)?(r[0]=n,r[1]=0,r):0!==n&&Nr(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var br=[0,0],wr=[0,0];function Ar(r,n){var t,e;return 0===n||0===r||p(r)||b(r)?r:(function(r,n){1===arguments.length?mr([0,0],r):mr(r,n)}(br,r),n+=br[1],n+=function(r){var n=cr(r);return(n=(2146435072&n)>>>20)-m|0}(r=br[0]),n<-1074?gr(0,r):n>1023?r<0?g:N:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,er(wr,r),t=wr[0],t&=2148532223,e*vr(t|=n+m<<20,wr[1])))}var _r=1.4426950408889634,Er=1/(1<<28);function kr(r){var n;return p(r)||r===N?r:r===g?0:r>709.782712893384?N:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Er?1+r:function(r,n,t){var e,i,o,u;return Ar(1-(n-(e=r-n)*(o=e-(i=e*e)*(0===(u=i)?.16666666666666602:.16666666666666602+u*(u*(6613756321437934e-20+u*(4.1381367970572385e-8*u-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),t)}(r-.6931471803691238*(n=v(r<0?_r*r-.5:_r*r+.5)),1.9082149292705877e-10*n,n)}function jr(r,n,t){return p(r)||p(n)||p(t)||t<0?NaN:0===t?r<n?0:1:1/(1+kr(-(r-n)/t))}function Sr(r){return function(){return r}}function Ur(r){return p(r)?Sr(NaN):function(n){return p(n)?NaN:n<r?0:1}}function xr(r,n,t){c(r,n,{configurable:!1,enumerable:!1,get:t})}function Ir(r){return"number"==typeof r}l((function(r,n){return p(r)||p(n)?NaN:r<n?0:1}),"factory",Ur),l(jr,"factory",(function(r,n){return p(r)||p(n)||n<0?Sr(NaN):0===n?Ur(r):function(t){return p(t)?NaN:1/(1+kr(-(t-r)/n))}}));var Tr=d.prototype.toString,Or=A();function Fr(r){return"object"==typeof r&&(r instanceof d||(Or?function(r){try{return Tr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===S(r)))}function Vr(r){return Ir(r)||Fr(r)}function Pr(r){return Ir(r)&&r>0}function Lr(r){return Fr(r)&&r.valueOf()>0}function $r(r){return Pr(r)||Lr(r)}function Gr(r){return Ir(r)&&p(r)}function Mr(r){return Fr(r)&&p(r.valueOf())}function Hr(r){return Gr(r)||Mr(r)}l(Vr,"isPrimitive",Ir),l(Vr,"isObject",Fr),l($r,"isPrimitive",Pr),l($r,"isObject",Lr),l(Hr,"isPrimitive",Gr),l(Hr,"isObject",Mr);var Wr=!0===D?1:0,Cr=new $(1),Rr=new O(Cr.buffer);function Zr(r,n){return Cr[0]=r,Rr[Wr]=n>>>0,Cr[0]}var qr=.6931471803691238,Xr=1.9082149292705877e-10,Yr=1048575;function zr(r){var n,t,e,i,o,u,a,f,c,s,l,y;return 0===r?g:p(r)||r<0?NaN:(o=0,(t=cr(r))<1048576&&(o-=54,t=cr(r*=0x40000000000000)),t>=2146435072?r+r:(o+=(t>>20)-m|0,o+=(f=614244+(t&=Yr)&1048576|0)>>20|0,a=(r=Zr(r,t|1072693248^f))-1,(Yr&2+t)<3?0===a?0===o?0:o*qr+o*Xr:(u=a*a*(.5-.3333333333333333*a),0===o?a-u:o*qr-(u-o*Xr-a)):(f=t-398458|0,c=440401-t|0,i=(l=(y=(s=a/(2+a))*s)*y)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),e=y*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),u=e+i,(f|=c)>0?(n=.5*a*a,0===o?a-(n-s*(n+u)):o*qr-(n-(s*(n+u)+o*Xr)-a)):0===o?a-s*(a-u):o*qr-(s*(a-u)-o*Xr-a))))}function Br(r,n){return p(r)||p(n)||n<=0?NaN:zr(n)+2}function Dr(r,n){return p(r)||p(n)||n<=0?NaN:1.2}function Jr(r,n){return p(r)||p(n)||n<=0?NaN:r}function Kr(r,n){return p(r)||p(n)||n<=0?NaN:r}function Qr(r,n){return p(r)||p(n)||n<=0?NaN:r}function rn(r,n){return p(r)||p(n)||n<=0?NaN:0}var nn=3.141592653589793;function tn(r,n){return p(r)||p(n)||n<=0?NaN:n*nn/1.7320508075688772}function en(r,n){return p(r)||p(n)||n<=0?NaN:n*n*9.869604401089358/3}var on=.6931471803691238,un=1.9082149292705877e-10;function an(r){var n,t,e,i,o,u,a,f,c,s;if(r<-1||p(r))return NaN;if(-1===r)return g;if(r===N)return r;if(0===r)return r;if(s=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(s=0,i=r,t=1)}return 0!==s&&(e<9007199254740992?(o=(s=((t=cr(c=1+r))>>20)-m)>0?1-(c-r):r-(c-1),o/=c):(s=((t=cr(c=r))>>20)-m,o=0),(t&=1048575)<434334?c=Zr(c,1072693248|t):(s+=1,c=Zr(c,1071644672|t),t=1048576-t>>2),i=c-1),n=.5*i*i,0===t?0===i?s*on+(o+=s*un):s*on-((f=n*(1-.6666666666666666*i))-(s*un+o)-i):(f=(a=(u=i/(2+i))*u)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(a),0===s?i-(n-u*(n+f)):s*on-(n-(u*(n+f)+(s*un+o))-i))}function fn(r){return r<=18?an(kr(r)):r>33.3?r:r+kr(-r)}function cn(r,n,t){return p(r)||p(n)||p(t)||t<0?NaN:0===t?r<n?g:0:-fn(-(r-n)/t)}function sn(r){return p(r)?Sr(NaN):function(n){return p(n)?NaN:n<r?g:0}}function ln(r,n,t){var e;return p(r)||p(n)||p(t)||t<0?NaN:r===g?g:0===t?r===n?N:g:(e=-Nr((r-n)/t))-2*an(kr(e))-zr(t)}function pn(r){return p(r)?Sr(NaN):function(n){return p(n)?NaN:n===r?N:g}}function yn(r,n){var t,e,i,o;return i=(o=r*r)*o,e=o*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(o),e+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(o),(i=1-(t=.5*o))+(1-i-t+(o*e-r*n))}l((function(r,n){return p(r)||p(n)?NaN:r<n?g:0}),"factory",sn),l(cn,"factory",(function(r,n){return p(r)||p(n)||n<0?Sr(NaN):0===n?sn(r):function(t){return p(t)?NaN:-fn(-(t-r)/n)}})),l((function(r,n){return p(r)||p(n)?NaN:r===n?N:g}),"factory",pn),l(ln,"factory",(function(r,n){var t;return p(r)||p(n)||n<0?Sr(NaN):0===n?pn(r):(t=zr(n),function(e){var i;return p(e)?NaN:e===g?g:(i=-Nr((e-r)/n))-2*an(kr(i))-t})}));var hn=-.16666666666666632;function vn(r,n){var t,e,i;return t=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),e=i*r,0===n?r+e*(hn+i*t):r-(i*(.5*n-e*t)-n-e*hn)}var dn=!0===D?0:1,gn=new $(1),Nn=new O(gn.buffer);function mn(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var bn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],wn=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],An=16777216,_n=5.960464477539063e-8,En=mn(20),kn=mn(20),jn=mn(20),Sn=mn(20);function Un(r,n,t,e,i,o,u,a,f){var c,s,l,p,h,v,d,g,N;for(p=o,N=e[t],g=t,h=0;g>0;h++)s=_n*N|0,Sn[h]=N-An*s|0,N=e[g-1]+s,g-=1;if(N=Ar(N,i),N-=8*y(.125*N),N-=d=0|N,l=0,i>0?(d+=h=Sn[t-1]>>24-i,Sn[t-1]-=h<<24-i,l=Sn[t-1]>>23-i):0===i?l=Sn[t-1]>>23:N>=.5&&(l=2),l>0){for(d+=1,c=0,h=0;h<t;h++)g=Sn[h],0===c?0!==g&&(c=1,Sn[h]=16777216-g):Sn[h]=16777215-g;if(i>0)switch(i){case 1:Sn[t-1]&=8388607;break;case 2:Sn[t-1]&=4194303}2===l&&(N=1-N,0!==c&&(N-=Ar(1,i)))}if(0===N){for(g=0,h=t-1;h>=o;h--)g|=Sn[h];if(0===g){for(v=1;0===Sn[o-v];v++);for(h=t+1;h<=t+v;h++){for(f[a+h]=bn[u+h],s=0,g=0;g<=a;g++)s+=r[g]*f[a+(h-g)];e[h]=s}return Un(r,n,t+=v,e,i,o,u,a,f)}}if(0===N)for(t-=1,i-=24;0===Sn[t];)t-=1,i-=24;else(N=Ar(N,-i))>=An?(s=_n*N|0,Sn[t]=N-An*s|0,i+=24,Sn[t+=1]=s):Sn[t]=0|N;for(s=Ar(1,i),h=t;h>=0;h--)e[h]=s*Sn[h],s*=_n;for(h=t;h>=0;h--){for(s=0,v=0;v<=p&&v<=t-h;v++)s+=wn[v]*e[h+v];jn[t-h]=s}for(s=0,h=t;h>=0;h--)s+=jn[h];for(n[0]=0===l?s:-s,s=jn[0]-s,h=1;h<=t;h++)s+=jn[h];return n[1]=0===l?s:-s,7&d}function xn(r,n,t,e){var i,o,u,a,f,c,s;for((o=(t-3)/24|0)<0&&(o=0),a=t-24*(o+1),c=o-(u=e-1),s=u+4,f=0;f<=s;f++)En[f]=c<0?0:bn[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=u;c++)i+=r[c]*En[u+(f-c)];kn[f]=i}return Un(r,n,4,kn,a,4,o,u,En)}var In=Math.round;function Tn(r,n,t){var e,i,o,u,a;return o=r-1.5707963267341256*(e=In(.6366197723675814*r)),u=6077100506506192e-26*e,a=n>>20|0,t[0]=o-u,a-(cr(t[0])>>20&2047)>16&&(u=20222662487959506e-37*e-((i=o)-(o=i-(u=6077100506303966e-26*e))-u),t[0]=o-u,a-(cr(t[0])>>20&2047)>49&&(u=84784276603689e-45*e-((i=o)-(o=i-(u=20222662487111665e-37*e))-u),t[0]=o-u)),t[1]=o-t[0]-u,e}var On=1.5707963267341256,Fn=6077100506506192e-26,Vn=2*Fn,Pn=3*Fn,Ln=4*Fn,$n=[0,0,0],Gn=[0,0];function Mn(r,n){var t,e,i,o,u,a,f;if((i=2147483647&cr(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?Tn(r,i,n):i<=1073928572?r>0?(f=r-On,n[0]=f-Fn,n[1]=f-n[0]-Fn,1):(f=r+On,n[0]=f+Fn,n[1]=f-n[0]+Fn,-1):r>0?(f=r-2*On,n[0]=f-Vn,n[1]=f-n[0]-Vn,2):(f=r+2*On,n[0]=f+Vn,n[1]=f-n[0]+Vn,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?Tn(r,i,n):r>0?(f=r-3*On,n[0]=f-Pn,n[1]=f-n[0]-Pn,3):(f=r+3*On,n[0]=f+Pn,n[1]=f-n[0]+Pn,-3):1075388923===i?Tn(r,i,n):r>0?(f=r-4*On,n[0]=f-Ln,n[1]=f-n[0]-Ln,4):(f=r+4*On,n[0]=f+Ln,n[1]=f-n[0]+Ln,-4);if(i<1094263291)return Tn(r,i,n);if(i>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return gn[0]=r,Nn[dn]}(r),f=vr(i-((e=(i>>20)-1046)<<20|0),t),u=0;u<2;u++)$n[u]=0|f,f=16777216*(f-$n[u]);for($n[2]=f,o=3;0===$n[o-1];)o-=1;return a=xn($n,Gn,e,o),r<0?(n[0]=-Gn[0],n[1]=-Gn[1],-a):(n[0]=Gn[0],n[1]=Gn[1],a)}var Hn=[0,0];function Wn(r){var n;if(n=cr(r),(n&=2147483647)<=1072243195)return n<1044381696?1:yn(r,0);if(n>=2146435072)return NaN;switch(3&Mn(r,Hn)){case 0:return yn(Hn[0],Hn[1]);case 1:return-vn(Hn[0],Hn[1]);case 2:return-yn(Hn[0],Hn[1]);default:return vn(Hn[0],Hn[1])}}var Cn=[0,0];function Rn(r){var n;if(n=cr(r),(n&=2147483647)<=1072243195)return n<1045430272?r:vn(r,0);if(n>=2146435072)return NaN;switch(3&Mn(r,Cn)){case 0:return vn(Cn[0],Cn[1]);case 1:return yn(Cn[0],Cn[1]);case 2:return-vn(Cn[0],Cn[1]);default:return-yn(Cn[0],Cn[1])}}function Zn(r){return p(r)?NaN:b(r)?0:0===r?1:function(r){var n,t;return p(r)||b(r)?NaN:0===(n=Nr(t=r%2))||1===n?gr(0,t):n<.25?Rn(nn*t):n<.75?gr(Wn(nn*(n=.5-n)),t):n<1.25?(t=gr(1,t)-t,Rn(nn*t)):n<1.75?-gr(Wn(nn*(n-=1.5)),t):(t-=gr(2,t),Rn(nn*t))}(r)/(nn*r)}function qn(r,n,t){var e;return p(e=t*r)||p(n)||t<0||Nr(e)>1?NaN:kr(n*r)/Zn(e)}function Xn(r){return p(r)?Sr(NaN):function(n){return p(n)?NaN:kr(r*n)}}function Yn(r){return y(r)===r}function zn(r){return Yn(r/2)}function Bn(r){return zn(r>0?r-1:r+1)}l((function(r,n){return p(r)||p(n)?NaN:kr(n*r)}),"factory",Xn),l(qn,"factory",(function(r,n){return p(r)||p(n)||n<0?Sr(NaN):0===n?Xn(r):function(t){var e=n*t;return Nr(e)>1?NaN:kr(r*t)/Zn(e)}}));var Dn=Math.sqrt,Jn=!0===D?0:1,Kn=new $(1),Qn=new O(Kn.buffer);function rt(r,n){return Kn[0]=r,Qn[Jn]=n>>>0,Kn[0]}function nt(r){return 0|r}var tt=1048576,et=[1,1.5],it=[0,.5849624872207642],ot=[0,1.350039202129749e-8],ut=2147483647,at=1048575,ft=1048576,ct=2147483647,st=1083179008,lt=1e300,pt=1e-300,yt=[0,0],ht=[0,0];function vt(r,n){var t,e,i,o,u,a,f,c,s,l,y,h,v,d;if(p(r)||p(n))return NaN;if(er(yt,n),u=yt[0],0===yt[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Dn(r);if(-.5===n)return 1/Dn(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(b(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Nr(r)<1==(n===N)?0:N}(r,n)}if(er(yt,r),o=yt[0],0===yt[1]){if(0===o)return function(r,n){return n===g?N:n===N?0:n>0?Bn(n)?r:0:Bn(n)?gr(N,r):N}(r,n);if(1===r)return 1;if(-1===r&&Bn(n))return-1;if(b(r))return r===g?vt(-0,-n):n<0?0:N}if(r<0&&!1===Yn(n))return(r-r)/(r-r);if(i=Nr(r),t=o&ct|0,e=u&ct|0,f=u>>>31|0,a=(a=o>>>31|0)&&Bn(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&cr(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===f?a*lt*lt:a*pt*pt;if(t>1072693248)return 0===f?a*lt*lt:a*pt*pt;y=function(r,n){var t,e,i,o,u,a;return t=(u=1.9259629911266175e-8*(i=n-1)-i*i*(0===(a=i)?.5:.5+a*(.25*a-.3333333333333333))*1.4426950408889634)-((e=rt(e=(o=1.4426950216293335*i)+u,0))-o),r[0]=e,r[1]=t,r}(ht,i)}else y=function(r,n,t){var e,i,o,u,a,f,c,s,l,p,y,h,v,d,g,N,b,w,A,_,E;return w=0,t<tt&&(w-=53,t=cr(n*=9007199254740992)),w+=(t>>20)-m|0,t=1072693248|(A=1048575&t|0),A<=235662?_=0:A<767610?_=1:(_=0,w+=1,t-=tt),u=rt(i=(N=(n=Zr(n,t))-(c=et[_]))*(b=1/(n+c)),0),e=524288+(t>>1|536870912),f=Zr(0,e+=_<<18),g=(o=i*i)*o*(0===(E=o)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=rt(f=3+(o=u*u)+(g+=(a=b*(N-u*f-u*(n-(f-c))))*(u+i)),0),v=(y=-7.028461650952758e-9*(l=rt(l=(N=u*f)+(b=a*f+(g-(f-3-o))*i),0))+.9617966939259756*(b-(l-N))+ot[_])-((h=rt(h=(p=.9617967009544373*l)+y+(s=it[_])+(d=w),0))-d-s-p),r[0]=h,r[1]=v,r}(ht,i,t);if(l=(n-(c=rt(n,0)))*y[0]+n*y[1],s=c*y[0],er(yt,h=l+s),v=nt(yt[0]),d=nt(yt[1]),v>=st){if(0!=(v-st|d))return a*lt*lt;if(l+8008566259537294e-32>h-s)return a*lt*lt}else if((v&ct)>=1083231232){if(0!=(v-3230714880|d))return a*pt*pt;if(l<=h-s)return a*pt*pt}return h=function(r,n,t){var e,i,o,u,a,f,c,s,l,p;return l=((s=r&ut|0)>>20)-m|0,c=0,s>1071644672&&(i=Zr(0,((c=r+(ft>>l+1)>>>0)&~(at>>(l=((c&ut)>>20)-m|0)))>>>0),c=(c&at|ft)>>20-l>>>0,r<0&&(c=-c),n-=i),r=nt(r=cr(f=1-((f=(o=.6931471824645996*(i=rt(i=t+n,0)))+(u=.6931471805599453*(t-(i-n))+-1.904654299957768e-9*i))*(e=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((a=u-(f-o))+f*a)-f))),(r+=c<<20>>>0)>>20<=0?Ar(f,c):Zr(f,r)}(v,s,l),a*h}function dt(r,n,t){var e;return p(r)||p(n)||p(t)||t<0?NaN:r===g?0:0===t?r===n?N:0:(e=kr(-Nr((r-n)/t)))/(t*vt(1+e,2))}function gt(r){return p(r)?Sr(NaN):function(n){return p(n)?NaN:n===r?N:0}}function Nt(r,n,t){return p(n)||p(t)||p(r)||t<0||r<0||r>1?NaN:0===t?n:n+t*zr(r/(1-r))}function mt(r){return p(r)?Sr(NaN):function(n){return p(n)||n<0||n>1?NaN:r}}function bt(r){return"number"==typeof r}function wt(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function At(r,n,t){var e=!1,i=n-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(e=!0,r=r.substr(1)),r=t?r+wt(i):wt(i)+r,e&&(r="-"+r)),r}l((function(r,n){return p(r)||p(n)?NaN:r===n?N:0}),"factory",gt),l(dt,"factory",(function(r,n){return p(r)||p(n)||n<0?Sr(NaN):0===n?gt(r):function(t){var e,i;return p(t)?NaN:t===g?0:(i=Nr((t-r)/n),(e=kr(-i))/(n*vt(1+e,2)))}})),l((function(r,n){return p(r)||r<0||r>1?NaN:n}),"factory",mt),l(Nt,"factory",(function(r,n){return p(r)||p(n)||n<0?Sr(NaN):0===n?mt(r):function(t){return p(t)||t<0||t>1?NaN:r+n*zr(t/(1-t))}}));var _t=String.prototype.toLowerCase,Et=String.prototype.toUpperCase;function kt(r){var n,t,e;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(t=r.arg,e=parseInt(t,10),!isFinite(e)){if(!bt(t))throw new Error("invalid integer. Value: "+t);e=0}return e<0&&("u"===r.specifier||10!==n)&&(e=4294967295+e+1),e<0?(t=(-e).toString(n),r.precision&&(t=At(t,r.precision,r.padRight)),t="-"+t):(t=e.toString(n),e||r.precision?r.precision&&(t=At(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===n&&(r.alternate&&(t="0x"+t),t=r.specifier===Et.call(r.specifier)?Et.call(t):_t.call(t)),8===n&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function jt(r){return"string"==typeof r}var St=Math.abs,Ut=String.prototype.toLowerCase,xt=String.prototype.toUpperCase,It=String.prototype.replace,Tt=/e\+(\d)$/,Ot=/e-(\d)$/,Ft=/^(\d+)$/,Vt=/^(\d+)e/,Pt=/\.0$/,Lt=/\.0*e/,$t=/(\..*[^0])0*e/;function Gt(r){var n,t,e=parseFloat(r.arg);if(!isFinite(e)){if(!bt(r.arg))throw new Error("invalid floating-point number. Value: "+t);e=r.arg}switch(r.specifier){case"e":case"E":t=e.toExponential(r.precision);break;case"f":case"F":t=e.toFixed(r.precision);break;case"g":case"G":St(e)<1e-4?((n=r.precision)>0&&(n-=1),t=e.toExponential(n)):t=e.toPrecision(r.precision),r.alternate||(t=It.call(t,$t,"$1e"),t=It.call(t,Lt,"e"),t=It.call(t,Pt,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=It.call(t,Tt,"e+0$1"),t=It.call(t,Ot,"e-0$1"),r.alternate&&(t=It.call(t,Ft,"$1."),t=It.call(t,Vt,"$1.e")),e>=0&&r.sign&&(t=r.sign+t),t=r.specifier===xt.call(r.specifier)?xt.call(t):Ut.call(t)}function Mt(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}function Ht(r,n,t){var e=n-r.length;return e<0?r:r=t?r+Mt(e):Mt(e)+r}var Wt=String.fromCharCode,Ct=isNaN,Rt=Array.isArray;function Zt(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function qt(r){var n,t,e,i,o,u,a,f,c;if(!Rt(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",a=1,f=0;f<r.length;f++)if(jt(e=r[f]))u+=e;else{if(n=void 0!==e.precision,!(e=Zt(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+e+"`.");for(e.mapping&&(a=e.mapping),t=e.flags,c=0;c<t.length;c++)switch(i=t.charAt(c)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[a],10),a+=1,Ct(e.width))throw new TypeError("the argument for * width at position "+a+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[a],10),a+=1,Ct(e.precision))throw new TypeError("the argument for * precision at position "+a+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[a],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=kt(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!Ct(e.arg)){if((o=parseInt(e.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=Ct(o)?String(e.arg):Wt(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=Gt(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=At(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=Ht(e.arg,e.width,e.padRight)),u+=e.arg||"",a+=1}return u}var Xt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Yt(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function zt(r){var n,t,e,i;for(t=[],i=0,e=Xt.exec(r);e;)(n=r.slice(i,Xt.lastIndex-e[0].length)).length&&t.push(n),t.push(Yt(e)),i=Xt.lastIndex,e=Xt.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function Bt(r){return"string"==typeof r}function Dt(r){var n,t,e;if(!Bt(r))throw new TypeError(Dt("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=zt(r),(t=new Array(arguments.length))[0]=n,e=1;e<t.length;e++)t[e]=arguments[e];return qt.apply(null,t)}function Jt(){var r,n;if(!(this instanceof Jt))return 0===arguments.length?new Jt:new Jt(arguments[0],arguments[1]);if(arguments.length){if(n=arguments[1],!Ir(r=arguments[0])||Hr(r))throw new TypeError(Dt("invalid argument. Location parameter must be a number. Value: `%s`.",r));if(!Pr(n))throw new TypeError(Dt("invalid argument. Scale parameter must be a positive number. Value: `%s`.",n))}else r=0,n=1;return c(this,"mu",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!Ir(n)||Hr(n))throw new TypeError(Dt("invalid assignment. Must be a number. Value: `%s`.",n));r=n}}),c(this,"s",{configurable:!1,enumerable:!0,get:function(){return n},set:function(r){if(!Pr(r))throw new TypeError(Dt("invalid assignment. Must be a positive number. Value: `%s`.",r));n=r}}),this}xr(Jt.prototype,"entropy",(function(){return Br(this.mu,this.s)})),xr(Jt.prototype,"kurtosis",(function(){return Dr(this.mu,this.s)})),xr(Jt.prototype,"mean",(function(){return Jr(this.mu,this.s)})),xr(Jt.prototype,"median",(function(){return Kr(this.mu,this.s)})),xr(Jt.prototype,"mode",(function(){return Qr(this.mu,this.s)})),xr(Jt.prototype,"skewness",(function(){return rn(this.mu,this.s)})),xr(Jt.prototype,"stdev",(function(){return tn(this.mu,this.s)})),xr(Jt.prototype,"variance",(function(){return en(this.mu,this.s)})),l(Jt.prototype,"cdf",(function(r){return jr(r,this.mu,this.s)})),l(Jt.prototype,"logcdf",(function(r){return cn(r,this.mu,this.s)})),l(Jt.prototype,"logpdf",(function(r){return ln(r,this.mu,this.s)})),l(Jt.prototype,"mgf",(function(r){return qn(r,this.mu,this.s)})),l(Jt.prototype,"pdf",(function(r){return dt(r,this.mu,this.s)})),l(Jt.prototype,"quantile",(function(r){return Nt(r,this.mu,this.s)}));var Kt={};s(Kt,"cdf",jr),s(Kt,"Logistic",Jt),s(Kt,"entropy",Br),s(Kt,"kurtosis",Dr),s(Kt,"logcdf",cn),s(Kt,"logpdf",ln),s(Kt,"mean",Jr),s(Kt,"median",Kr),s(Kt,"mgf",qn),s(Kt,"mode",Qr),s(Kt,"pdf",dt),s(Kt,"quantile",Nt),s(Kt,"skewness",rn),s(Kt,"stdev",tn),s(Kt,"variance",en),r.Logistic=Jt,r.cdf=jr,r.default=Kt,r.entropy=Br,r.kurtosis=Dr,r.logcdf=cn,r.logpdf=ln,r.mean=Jr,r.median=Kr,r.mgf=qn,r.mode=Qr,r.pdf=dt,r.quantile=Nt,r.skewness=rn,r.stdev=tn,r.variance=en,Object.defineProperty(r,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((r="undefined"!=typeof globalThis?globalThis:r||self).logistic={});
//# sourceMappingURL=index.js.map