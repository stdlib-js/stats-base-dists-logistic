// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty;function t(r){return"number"==typeof r}function e(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function i(r,n,t){var i=!1,o=n-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+e(o):e(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function a(r){var n,e,a;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=r.arg,a=parseInt(e,10),!isFinite(a)){if(!t(e))throw new Error("invalid integer. Value: "+e);a=0}return a<0&&("u"===r.specifier||10!==n)&&(a=4294967295+a+1),a<0?(e=(-a).toString(n),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=a.toString(n),a||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===n&&(r.alternate&&(e="0x"+e),e=r.specifier===u.call(r.specifier)?u.call(e):o.call(e)),8===n&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function f(r){return"string"==typeof r}var c=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,h=/e-(\d)$/,v=/^(\d+)$/,g=/^(\d+)e/,N=/\.0$/,d=/\.0*e/,m=/(\..*[^0])0*e/;function b(r){var n,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((n=r.precision)>0&&(n-=1),e=i.toExponential(n)):e=i.toPrecision(r.precision),r.alternate||(e=p.call(e,m,"$1e"),e=p.call(e,d,"e"),e=p.call(e,N,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=p.call(e,y,"e+0$1"),e=p.call(e,h,"e-0$1"),r.alternate&&(e=p.call(e,v,"$1."),e=p.call(e,g,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===l.call(r.specifier)?l.call(e):s.call(e)}function w(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}function A(r,n,t){var e=n-r.length;return e<0?r:r=t?r+w(e):w(e)+r}var _=String.fromCharCode,E=isNaN,k=Array.isArray;function S(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function U(r){var n,t,e,o,u,c,s,l,p;if(!k(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",s=1,l=0;l<r.length;l++)if(f(e=r[l]))c+=e;else{if(n=void 0!==e.precision,!(e=S(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+e+"`.");for(e.mapping&&(s=e.mapping),t=e.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[s],10),s+=1,E(e.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[s],10),s+=1,E(e.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[s],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=a(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!E(e.arg)){if((u=parseInt(e.arg,10))<0||u>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=E(u)?String(e.arg):_(u)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=b(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=A(e.arg,e.width,e.padRight)),c+=e.arg||"",s+=1}return c}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function x(r){var n,t,e,i;for(t=[],i=0,e=j.exec(r);e;)(n=r.slice(i,j.lastIndex-e[0].length)).length&&t.push(n),t.push(I(e)),i=j.lastIndex,e=j.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function T(r){return"string"==typeof r}function F(r){var n,t,e;if(!T(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=x(r),(t=new Array(arguments.length))[0]=n,e=1;e<t.length;e++)t[e]=arguments[e];return U.apply(null,t)}var O=Object.prototype,V=O.toString,P=O.__defineGetter__,$=O.__defineSetter__,G=O.__lookupGetter__,L=O.__lookupSetter__,H=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,t){var e,i,o,u;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(G.call(r,n)||L.call(r,n)?(e=r.__proto__,r.__proto__=O,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),o="get"in t,u="set"in t,i&&(o||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&P&&P.call(r,n,t.get),u&&$&&$.call(r,n,t.set),r};function M(r,n,t){H(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})}function W(r,n,t){H(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function C(r){return r!=r}var R=Math.floor,Z=Math.ceil;function q(r){return r<0?Z(r):R(r)}var X=Number,Y=X.NEGATIVE_INFINITY,z=Number.POSITIVE_INFINITY,B=1023;function D(r){return r===z||r===Y}var J=2147483647,K="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Q(){return K&&"symbol"==typeof Symbol.toStringTag}var rr,nr=Object.prototype.toString,tr=Object.prototype.hasOwnProperty,er="function"==typeof Symbol?Symbol:void 0,ir="function"==typeof er?er.toStringTag:"",or=Q()?function(r){var n,t,e,i,o;if(null==r)return nr.call(r);t=r[ir],o=ir,n=null!=(i=r)&&tr.call(i,o);try{r[ir]=void 0}catch(n){return nr.call(r)}return e=nr.call(r),n?r[ir]=t:delete r[ir],e}:function(r){return nr.call(r)},ur="function"==typeof Uint32Array,ar="function"==typeof Uint32Array?Uint32Array:null,fr="function"==typeof Uint32Array?Uint32Array:void 0;rr=function(){var r,n,t;if("function"!=typeof ar)return!1;try{n=new ar(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(ur&&t instanceof Uint32Array||"[object Uint32Array]"===or(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var cr,sr=rr,lr="function"==typeof Float64Array,pr="function"==typeof Float64Array?Float64Array:null,yr="function"==typeof Float64Array?Float64Array:void 0;cr=function(){var r,n,t;if("function"!=typeof pr)return!1;try{n=new pr([1,3.14,-3.14,NaN]),t=n,r=(lr&&t instanceof Float64Array||"[object Float64Array]"===or(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var hr,vr=cr,gr="function"==typeof Uint8Array,Nr="function"==typeof Uint8Array?Uint8Array:null,dr="function"==typeof Uint8Array?Uint8Array:void 0;hr=function(){var r,n,t;if("function"!=typeof Nr)return!1;try{n=new Nr(n=[1,3.14,-3.14,256,257]),t=n,r=(gr&&t instanceof Uint8Array||"[object Uint8Array]"===or(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?dr:function(){throw new Error("not implemented")};var mr,br=hr,wr="function"==typeof Uint16Array,Ar="function"==typeof Uint16Array?Uint16Array:null,_r="function"==typeof Uint16Array?Uint16Array:void 0;mr=function(){var r,n,t;if("function"!=typeof Ar)return!1;try{n=new Ar(n=[1,3.14,-3.14,65536,65537]),t=n,r=(wr&&t instanceof Uint16Array||"[object Uint16Array]"===or(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?_r:function(){throw new Error("not implemented")};var Er,kr={uint16:mr,uint8:br};(Er=new kr.uint16(1))[0]=4660;var Sr,Ur,jr=52===new kr.uint8(Er.buffer)[0];!0===jr?(Sr=1,Ur=0):(Sr=0,Ur=1);var Ir={HIGH:Sr,LOW:Ur},xr=new vr(1),Tr=new sr(xr.buffer),Fr=Ir.HIGH,Or=Ir.LOW;function Vr(r,n,t,e){return xr[0]=r,n[e]=Tr[Fr],n[e+t]=Tr[Or],n}function Pr(r){return Vr(r,[0,0],1,0)}W(Pr,"assign",Vr);var $r,Gr,Lr=!0===jr?1:0,Hr=new vr(1),Mr=new sr(Hr.buffer);function Wr(r){return Hr[0]=r,Mr[Lr]}!0===jr?($r=1,Gr=0):($r=0,Gr=1);var Cr={HIGH:$r,LOW:Gr},Rr=new vr(1),Zr=new sr(Rr.buffer),qr=Cr.HIGH,Xr=Cr.LOW;function Yr(r,n){return Zr[qr]=r,Zr[Xr]=n,Rr[0]}var zr=[0,0];function Br(r,n){var t,e;return Pr.assign(r,zr,1,0),t=zr[0],t&=J,e=Wr(n),Yr(t|=e&=2147483648,zr[1])}function Dr(r){return Math.abs(r)}function Jr(r,n,t,e){return C(r)||D(r)?(n[e]=r,n[e+t]=0,n):0!==r&&Dr(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}W((function(r){return Jr(r,[0,0],1,0)}),"assign",Jr);var Kr=2146435072,Qr=[0,0],rn=[0,0];function nn(r,n){var t,e;return 0===n||0===r||C(r)||D(r)?r:(Jr(r,Qr,1,0),n+=Qr[1],n+=function(r){var n=Wr(r);return(n=(n&Kr)>>>20)-B|0}(r=Qr[0]),n<-1074?Br(0,r):n>1023?r<0?Y:z:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Pr.assign(r,rn,1,0),t=rn[0],t&=2148532223,e*Yr(t|=n+B<<20,rn[1])))}var tn=1.4426950408889634,en=1/(1<<28);function on(r){var n;return C(r)||r===z?r:r===Y?0:r>709.782712893384?z:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<en?1+r:function(r,n,t){var e,i,o,u;return nn(1-(n-(e=r-n)*(o=e-(i=e*e)*(0===(u=i)?.16666666666666602:.16666666666666602+u*(u*(6613756321437934e-20+u*(4.1381367970572385e-8*u-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),t)}(r-.6931471803691238*(n=q(r<0?tn*r-.5:tn*r+.5)),1.9082149292705877e-10*n,n)}function un(r,n,t){return C(r)||C(n)||C(t)||t<0?NaN:0===t?r<n?0:1:1/(1+on(-(r-n)/t))}function an(r){return function(){return r}}function fn(r){return C(r)?an(NaN):function(n){return C(n)?NaN:n<r?0:1}}function cn(r,n,t){H(r,n,{configurable:!1,enumerable:!1,get:t})}function sn(r){return"number"==typeof r}W((function(r,n){return C(r)||C(n)?NaN:r<n?0:1}),"factory",fn),W(un,"factory",(function(r,n){return C(r)||C(n)||n<0?an(NaN):0===n?fn(r):function(t){return C(t)?NaN:1/(1+on(-(t-r)/n))}}));var ln=X.prototype.toString,pn=Q();function yn(r){return"object"==typeof r&&(r instanceof X||(pn?function(r){try{return ln.call(r),!0}catch(r){return!1}}(r):"[object Number]"===or(r)))}function hn(r){return sn(r)||yn(r)}function vn(r){return sn(r)&&r>0}function gn(r){return yn(r)&&r.valueOf()>0}function Nn(r){return vn(r)||gn(r)}function dn(r){return sn(r)&&C(r)}function mn(r){return yn(r)&&C(r.valueOf())}function bn(r){return dn(r)||mn(r)}W(hn,"isPrimitive",sn),W(hn,"isObject",yn),W(Nn,"isPrimitive",vn),W(Nn,"isObject",gn),W(bn,"isPrimitive",dn),W(bn,"isObject",mn);var wn=!0===jr?1:0,An=new vr(1),_n=new sr(An.buffer);function En(r,n){return An[0]=r,_n[wn]=n>>>0,An[0]}var kn=.6931471803691238,Sn=1.9082149292705877e-10,Un=1048575;function jn(r){var n,t,e,i,o,u,a,f,c,s,l,p;return 0===r?Y:C(r)||r<0?NaN:(o=0,(t=Wr(r))<1048576&&(o-=54,t=Wr(r*=0x40000000000000)),t>=2146435072?r+r:(o+=(t>>20)-B|0,o+=(f=614244+(t&=Un)&1048576|0)>>20|0,a=(r=En(r,t|1072693248^f))-1,(Un&2+t)<3?0===a?0===o?0:o*kn+o*Sn:(u=a*a*(.5-.3333333333333333*a),0===o?a-u:o*kn-(u-o*Sn-a)):(f=t-398458|0,c=440401-t|0,i=(l=(p=(s=a/(2+a))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),e=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),u=e+i,(f|=c)>0?(n=.5*a*a,0===o?a-(n-s*(n+u)):o*kn-(n-(s*(n+u)+o*Sn)-a)):0===o?a-s*(a-u):o*kn-(s*(a-u)-o*Sn-a))))}function In(r,n){return C(r)||C(n)||n<=0?NaN:jn(n)+2}function xn(r,n){return C(r)||C(n)||n<=0?NaN:1.2}function Tn(r,n){return C(r)||C(n)||n<=0?NaN:r}function Fn(r,n){return C(r)||C(n)||n<=0?NaN:r}function On(r,n){return C(r)||C(n)||n<=0?NaN:r}function Vn(r,n){return C(r)||C(n)||n<=0?NaN:0}var Pn=3.141592653589793;function $n(r,n){return C(r)||C(n)||n<=0?NaN:n*Pn/1.7320508075688772}function Gn(r,n){return C(r)||C(n)||n<=0?NaN:n*n*9.869604401089358/3}var Ln=.6931471803691238,Hn=1.9082149292705877e-10;function Mn(r){var n,t,e,i,o,u,a,f,c,s;if(r<-1||C(r))return NaN;if(-1===r)return Y;if(r===z)return r;if(0===r)return r;if(s=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(s=0,i=r,t=1)}return 0!==s&&(e<9007199254740992?(o=(s=((t=Wr(c=1+r))>>20)-B)>0?1-(c-r):r-(c-1),o/=c):(s=((t=Wr(c=r))>>20)-B,o=0),(t&=1048575)<434334?c=En(c,1072693248|t):(s+=1,c=En(c,1071644672|t),t=1048576-t>>2),i=c-1),n=.5*i*i,0===t?0===i?s*Ln+(o+=s*Hn):s*Ln-((f=n*(1-.6666666666666666*i))-(s*Hn+o)-i):(f=(a=(u=i/(2+i))*u)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(a),0===s?i-(n-u*(n+f)):s*Ln-(n-(u*(n+f)+(s*Hn+o))-i))}function Wn(r){return r<=18?Mn(on(r)):r>33.3?r:r+on(-r)}function Cn(r,n,t){return C(r)||C(n)||C(t)||t<0?NaN:0===t?r<n?Y:0:-Wn(-(r-n)/t)}function Rn(r){return C(r)?an(NaN):function(n){return C(n)?NaN:n<r?Y:0}}function Zn(r,n,t){var e;return C(r)||C(n)||C(t)||t<0?NaN:r===Y?Y:0===t?r===n?z:Y:(e=-Dr((r-n)/t))-2*Mn(on(e))-jn(t)}function qn(r){return C(r)?an(NaN):function(n){return C(n)?NaN:n===r?z:Y}}function Xn(r,n){var t,e,i,o;return i=(o=r*r)*o,e=o*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(o),e+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(o),(i=1-(t=.5*o))+(1-i-t+(o*e-r*n))}W((function(r,n){return C(r)||C(n)?NaN:r<n?Y:0}),"factory",Rn),W(Cn,"factory",(function(r,n){return C(r)||C(n)||n<0?an(NaN):0===n?Rn(r):function(t){return C(t)?NaN:-Wn(-(t-r)/n)}})),W((function(r,n){return C(r)||C(n)?NaN:r===n?z:Y}),"factory",qn),W(Zn,"factory",(function(r,n){var t;return C(r)||C(n)||n<0?an(NaN):0===n?qn(r):(t=jn(n),function(e){var i;return C(e)?NaN:e===Y?Y:(i=-Dr((e-r)/n))-2*Mn(on(i))-t})}));var Yn=-.16666666666666632;function zn(r,n){var t,e,i;return t=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),e=i*r,0===n?r+e*(Yn+i*t):r-(i*(.5*n-e*t)-n-e*Yn)}var Bn=1048575,Dn=!0===jr?0:1,Jn=new vr(1),Kn=new sr(Jn.buffer);function Qn(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var rt=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],nt=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],tt=16777216,et=5.960464477539063e-8,it=Qn(20),ot=Qn(20),ut=Qn(20),at=Qn(20);function ft(r,n,t,e,i,o,u,a,f){var c,s,l,p,y,h,v,g,N;for(p=o,N=e[t],g=t,y=0;g>0;y++)s=et*N|0,at[y]=N-tt*s|0,N=e[g-1]+s,g-=1;if(N=nn(N,i),N-=8*R(.125*N),N-=v=0|N,l=0,i>0?(v+=y=at[t-1]>>24-i,at[t-1]-=y<<24-i,l=at[t-1]>>23-i):0===i?l=at[t-1]>>23:N>=.5&&(l=2),l>0){for(v+=1,c=0,y=0;y<t;y++)g=at[y],0===c?0!==g&&(c=1,at[y]=16777216-g):at[y]=16777215-g;if(i>0)switch(i){case 1:at[t-1]&=8388607;break;case 2:at[t-1]&=4194303}2===l&&(N=1-N,0!==c&&(N-=nn(1,i)))}if(0===N){for(g=0,y=t-1;y>=o;y--)g|=at[y];if(0===g){for(h=1;0===at[o-h];h++);for(y=t+1;y<=t+h;y++){for(f[a+y]=rt[u+y],s=0,g=0;g<=a;g++)s+=r[g]*f[a+(y-g)];e[y]=s}return ft(r,n,t+=h,e,i,o,u,a,f)}}if(0===N)for(t-=1,i-=24;0===at[t];)t-=1,i-=24;else(N=nn(N,-i))>=tt?(s=et*N|0,at[t]=N-tt*s|0,i+=24,at[t+=1]=s):at[t]=0|N;for(s=nn(1,i),y=t;y>=0;y--)e[y]=s*at[y],s*=et;for(y=t;y>=0;y--){for(s=0,h=0;h<=p&&h<=t-y;h++)s+=nt[h]*e[y+h];ut[t-y]=s}for(s=0,y=t;y>=0;y--)s+=ut[y];for(n[0]=0===l?s:-s,s=ut[0]-s,y=1;y<=t;y++)s+=ut[y];return n[1]=0===l?s:-s,7&v}function ct(r,n,t,e){var i,o,u,a,f,c,s;for((o=(t-3)/24|0)<0&&(o=0),a=t-24*(o+1),c=o-(u=e-1),s=u+4,f=0;f<=s;f++)it[f]=c<0?0:rt[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=u;c++)i+=r[c]*it[u+(f-c)];ot[f]=i}return ft(r,n,4,ot,a,4,o,u,it)}var st=Math.round;function lt(r,n,t){var e,i,o,u,a;return o=r-1.5707963267341256*(e=st(.6366197723675814*r)),u=6077100506506192e-26*e,a=n>>20|0,t[0]=o-u,a-(Wr(t[0])>>20&2047)>16&&(u=20222662487959506e-37*e-((i=o)-(o=i-(u=6077100506303966e-26*e))-u),t[0]=o-u,a-(Wr(t[0])>>20&2047)>49&&(u=84784276603689e-45*e-((i=o)-(o=i-(u=20222662487111665e-37*e))-u),t[0]=o-u)),t[1]=o-t[0]-u,e}var pt=1.5707963267341256,yt=6077100506506192e-26,ht=2*yt,vt=3*yt,gt=4*yt,Nt=[0,0,0],dt=[0,0];function mt(r,n){var t,e,i,o,u,a,f;if((i=Wr(r)&J|0)<=1072243195)return n[0]=r,n[1]=0,0;if(i<=1074752122)return 598523==(i&Bn)?lt(r,i,n):i<=1073928572?r>0?(f=r-pt,n[0]=f-yt,n[1]=f-n[0]-yt,1):(f=r+pt,n[0]=f+yt,n[1]=f-n[0]+yt,-1):r>0?(f=r-2*pt,n[0]=f-ht,n[1]=f-n[0]-ht,2):(f=r+2*pt,n[0]=f+ht,n[1]=f-n[0]+ht,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?lt(r,i,n):r>0?(f=r-3*pt,n[0]=f-vt,n[1]=f-n[0]-vt,3):(f=r+3*pt,n[0]=f+vt,n[1]=f-n[0]+vt,-3):1075388923===i?lt(r,i,n):r>0?(f=r-4*pt,n[0]=f-gt,n[1]=f-n[0]-gt,4):(f=r+4*pt,n[0]=f+gt,n[1]=f-n[0]+gt,-4);if(i<1094263291)return lt(r,i,n);if(i>=Kr)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return Jn[0]=r,Kn[Dn]}(r),f=Yr(i-((e=(i>>20)-1046)<<20|0),t),u=0;u<2;u++)Nt[u]=0|f,f=16777216*(f-Nt[u]);for(Nt[2]=f,o=3;0===Nt[o-1];)o-=1;return a=ct(Nt,dt,e,o),r<0?(n[0]=-dt[0],n[1]=-dt[1],-a):(n[0]=dt[0],n[1]=dt[1],a)}var bt=[0,0];function wt(r){var n;if(n=Wr(r),(n&=2147483647)<=1072243195)return n<1044381696?1:Xn(r,0);if(n>=2146435072)return NaN;switch(3&mt(r,bt)){case 0:return Xn(bt[0],bt[1]);case 1:return-zn(bt[0],bt[1]);case 2:return-Xn(bt[0],bt[1]);default:return zn(bt[0],bt[1])}}var At=[0,0];function _t(r){var n;if(n=Wr(r),(n&=J)<=1072243195)return n<1045430272?r:zn(r,0);if(n>=Kr)return NaN;switch(3&mt(r,At)){case 0:return zn(At[0],At[1]);case 1:return Xn(At[0],At[1]);case 2:return-zn(At[0],At[1]);default:return-Xn(At[0],At[1])}}function Et(r){return C(r)?NaN:D(r)?0:0===r?1:function(r){var n,t;return C(r)||D(r)?NaN:0===(n=Dr(t=r%2))||1===n?Br(0,t):n<.25?_t(Pn*t):n<.75?Br(wt(Pn*(n=.5-n)),t):n<1.25?(t=Br(1,t)-t,_t(Pn*t)):n<1.75?-Br(wt(Pn*(n-=1.5)),t):(t-=Br(2,t),_t(Pn*t))}(r)/(Pn*r)}function kt(r,n,t){var e;return C(e=t*r)||C(n)||t<0||Dr(e)>1?NaN:on(n*r)/Et(e)}function St(r){return C(r)?an(NaN):function(n){return C(n)?NaN:on(r*n)}}function Ut(r){return R(r)===r}function jt(r){return Ut(r/2)}function It(r){return jt(r>0?r-1:r+1)}W((function(r,n){return C(r)||C(n)?NaN:on(n*r)}),"factory",St),W(kt,"factory",(function(r,n){return C(r)||C(n)||n<0?an(NaN):0===n?St(r):function(t){var e=n*t;return Dr(e)>1?NaN:on(r*t)/Et(e)}}));var xt=Math.sqrt,Tt=!0===jr?0:1,Ft=new vr(1),Ot=new sr(Ft.buffer);function Vt(r,n){return Ft[0]=r,Ot[Tt]=n>>>0,Ft[0]}function Pt(r){return 0|r}var $t=1048576,Gt=[1,1.5],Lt=[0,.5849624872207642],Ht=[0,1.350039202129749e-8],Mt=1048576,Wt=1083179008,Ct=1e300,Rt=1e-300,Zt=[0,0],qt=[0,0];function Xt(r,n){var t,e,i,o,u,a,f,c,s,l,p,y,h,v;if(C(r)||C(n))return NaN;if(Pr.assign(n,Zt,1,0),u=Zt[0],0===Zt[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return xt(r);if(-.5===n)return 1/xt(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(D(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Dr(r)<1==(n===z)?0:z}(r,n)}if(Pr.assign(r,Zt,1,0),o=Zt[0],0===Zt[1]){if(0===o)return function(r,n){return n===Y?z:n===z?0:n>0?It(n)?r:0:It(n)?Br(z,r):z}(r,n);if(1===r)return 1;if(-1===r&&It(n))return-1;if(D(r))return r===Y?Xt(-0,-n):n<0?0:z}if(r<0&&!1===Ut(n))return(r-r)/(r-r);if(i=Dr(r),t=o&J|0,e=u&J|0,f=u>>>31|0,a=(a=o>>>31|0)&&It(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(Wr(r)&J)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===f?a*Ct*Ct:a*Rt*Rt;if(t>1072693248)return 0===f?a*Ct*Ct:a*Rt*Rt;p=function(r,n){var t,e,i,o,u,a;return t=(u=1.9259629911266175e-8*(i=n-1)-i*i*(0===(a=i)?.5:.5+a*(.25*a-.3333333333333333))*1.4426950408889634)-((e=Vt(e=(o=1.4426950216293335*i)+u,0))-o),r[0]=e,r[1]=t,r}(qt,i)}else p=function(r,n,t){var e,i,o,u,a,f,c,s,l,p,y,h,v,g,N,d,m,b,w,A,_;return b=0,t<$t&&(b-=53,t=Wr(n*=9007199254740992)),b+=(t>>20)-B|0,t=1072693248|(w=1048575&t|0),w<=235662?A=0:w<767610?A=1:(A=0,b+=1,t-=$t),u=Vt(i=(d=(n=En(n,t))-(c=Gt[A]))*(m=1/(n+c)),0),e=524288+(t>>1|536870912),f=En(0,e+=A<<18),N=(o=i*i)*o*(0===(_=o)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=Vt(f=3+(o=u*u)+(N+=(a=m*(d-u*f-u*(n-(f-c))))*(u+i)),0),v=(y=-7.028461650952758e-9*(l=Vt(l=(d=u*f)+(m=a*f+(N-(f-3-o))*i),0))+.9617966939259756*(m-(l-d))+Ht[A])-((h=Vt(h=(p=.9617967009544373*l)+y+(s=Lt[A])+(g=b),0))-g-s-p),r[0]=h,r[1]=v,r}(qt,i,t);if(y=(l=(n-(c=Vt(n,0)))*p[0]+n*p[1])+(s=c*p[0]),Pr.assign(y,Zt,1,0),h=Pt(Zt[0]),v=Pt(Zt[1]),h>=Wt){if(0!=(h-Wt|v))return a*Ct*Ct;if(l+8008566259537294e-32>y-s)return a*Ct*Ct}else if((h&J)>=1083231232){if(0!=(h-3230714880|v))return a*Rt*Rt;if(l<=y-s)return a*Rt*Rt}return y=function(r,n,t){var e,i,o,u,a,f,c,s,l,p;return l=((s=r&J|0)>>20)-B|0,c=0,s>1071644672&&(i=En(0,((c=r+(Mt>>l+1)>>>0)&~(Bn>>(l=((c&J)>>20)-B|0)))>>>0),c=(c&Bn|Mt)>>20-l>>>0,r<0&&(c=-c),n-=i),r=Pt(r=Wr(f=1-((f=(o=.6931471824645996*(i=Vt(i=t+n,0)))+(u=.6931471805599453*(t-(i-n))+-1.904654299957768e-9*i))*(e=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((a=u-(f-o))+f*a)-f))),(r+=c<<20>>>0)>>20<=0?nn(f,c):En(f,r)}(h,s,l),a*y}function Yt(r,n,t){var e;return C(r)||C(n)||C(t)||t<0?NaN:r===Y?0:0===t?r===n?z:0:(e=on(-Dr((r-n)/t)))/(t*Xt(1+e,2))}function zt(r){return C(r)?an(NaN):function(n){return C(n)?NaN:n===r?z:0}}function Bt(r,n,t){return C(n)||C(t)||C(r)||t<0||r<0||r>1?NaN:0===t?n:n+t*jn(r/(1-r))}function Dt(r){return C(r)?an(NaN):function(n){return C(n)||n<0||n>1?NaN:r}}function Jt(){var r,n;if(!(this instanceof Jt))return 0===arguments.length?new Jt:new Jt(arguments[0],arguments[1]);if(arguments.length){if(n=arguments[1],!sn(r=arguments[0])||bn(r))throw new TypeError(F("invalid argument. Location parameter must be a number. Value: `%s`.",r));if(!vn(n))throw new TypeError(F("invalid argument. Scale parameter must be a positive number. Value: `%s`.",n))}else r=0,n=1;return H(this,"mu",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!sn(n)||bn(n))throw new TypeError(F("invalid assignment. Must be a number. Value: `%s`.",n));r=n}}),H(this,"s",{configurable:!1,enumerable:!0,get:function(){return n},set:function(r){if(!vn(r))throw new TypeError(F("invalid assignment. Must be a positive number. Value: `%s`.",r));n=r}}),this}W((function(r,n){return C(r)||C(n)?NaN:r===n?z:0}),"factory",zt),W(Yt,"factory",(function(r,n){return C(r)||C(n)||n<0?an(NaN):0===n?zt(r):function(t){var e,i;return C(t)?NaN:t===Y?0:(i=Dr((t-r)/n),(e=on(-i))/(n*Xt(1+e,2)))}})),W((function(r,n){return C(r)||r<0||r>1?NaN:n}),"factory",Dt),W(Bt,"factory",(function(r,n){return C(r)||C(n)||n<0?an(NaN):0===n?Dt(r):function(t){return C(t)||t<0||t>1?NaN:r+n*jn(t/(1-t))}})),cn(Jt.prototype,"entropy",(function(){return In(this.mu,this.s)})),cn(Jt.prototype,"kurtosis",(function(){return xn(this.mu,this.s)})),cn(Jt.prototype,"mean",(function(){return Tn(this.mu,this.s)})),cn(Jt.prototype,"median",(function(){return Fn(this.mu,this.s)})),cn(Jt.prototype,"mode",(function(){return On(this.mu,this.s)})),cn(Jt.prototype,"skewness",(function(){return Vn(this.mu,this.s)})),cn(Jt.prototype,"stdev",(function(){return $n(this.mu,this.s)})),cn(Jt.prototype,"variance",(function(){return Gn(this.mu,this.s)})),W(Jt.prototype,"cdf",(function(r){return un(r,this.mu,this.s)})),W(Jt.prototype,"logcdf",(function(r){return Cn(r,this.mu,this.s)})),W(Jt.prototype,"logpdf",(function(r){return Zn(r,this.mu,this.s)})),W(Jt.prototype,"mgf",(function(r){return kt(r,this.mu,this.s)})),W(Jt.prototype,"pdf",(function(r){return Yt(r,this.mu,this.s)})),W(Jt.prototype,"quantile",(function(r){return Bt(r,this.mu,this.s)}));var Kt={};return M(Kt,"cdf",un),M(Kt,"Logistic",Jt),M(Kt,"entropy",In),M(Kt,"kurtosis",xn),M(Kt,"logcdf",Cn),M(Kt,"logpdf",Zn),M(Kt,"mean",Tn),M(Kt,"median",Fn),M(Kt,"mgf",kt),M(Kt,"mode",On),M(Kt,"pdf",Yt),M(Kt,"quantile",Bt),M(Kt,"skewness",Vn),M(Kt,"stdev",$n),M(Kt,"variance",Gn),Kt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).logistic=n();
//# sourceMappingURL=index.js.map
