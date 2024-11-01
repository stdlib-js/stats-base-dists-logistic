// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty;function t(r){return"number"==typeof r}function e(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function i(r,n,t){var i=!1,a=n-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+e(a):e(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function o(r){var n,e,o;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=r.arg,o=parseInt(e,10),!isFinite(o)){if(!t(e))throw new Error("invalid integer. Value: "+e);o=0}return o<0&&("u"===r.specifier||10!==n)&&(o=4294967295+o+1),o<0?(e=(-o).toString(n),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=o.toString(n),o||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===n&&(r.alternate&&(e="0x"+e),e=r.specifier===u.call(r.specifier)?u.call(e):a.call(e)),8===n&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}var f=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,l=/e\+(\d)$/,v=/e-(\d)$/,y=/^(\d+)$/,g=/^(\d+)e/,h=/\.0$/,N=/\.0*e/,d=/(\..*[^0])0*e/;function m(r){var n,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((n=r.precision)>0&&(n-=1),e=i.toExponential(n)):e=i.toPrecision(r.precision),r.alternate||(e=p.call(e,d,"$1e"),e=p.call(e,N,"e"),e=p.call(e,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=p.call(e,l,"e+0$1"),e=p.call(e,v,"e-0$1"),r.alternate&&(e=p.call(e,y,"$1."),e=p.call(e,g,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):c.call(e)}function w(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}var b=String.fromCharCode,A=Array.isArray;function _(r){return r!=r}function E(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function S(r){var n,t,e,a,u,f,c,s,p,l,v,y,g;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,s=0;s<r.length;s++)if(e=r[s],"string"==typeof e)f+=e;else{if(n=void 0!==e.precision,!(e=E(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(c=e.mapping),t=e.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===e.width){if(e.width=parseInt(arguments[c],10),c+=1,_(e.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[c],10),c+=1,_(e.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[c],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=o(e);break;case"s":e.maxWidth=n?e.precision:-1,e.arg=String(e.arg);break;case"c":if(!_(e.arg)){if((u=parseInt(e.arg,10))<0||u>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=_(u)?String(e.arg):b(u)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=m(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=(l=e.arg,v=e.width,y=e.padRight,g=void 0,(g=v-l.length)<0?l:l=y?l+w(g):w(g)+l)),f+=e.arg||"",c+=1}return f}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function j(r){var n,t,e,i;for(t=[],i=0,e=k.exec(r);e;)(n=r.slice(i,k.lastIndex-e[0].length)).length&&t.push(n),t.push(U(e)),i=k.lastIndex,e=k.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function I(r){var n,t;if("string"!=typeof r)throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=[j(r)],t=1;t<arguments.length;t++)n.push(arguments[t]);return S.apply(null,n)}var x=Object.prototype,F=x.toString,O=x.__defineGetter__,T=x.__defineSetter__,V=x.__lookupGetter__,P=x.__lookupSetter__;var $=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,t){var e,i,a,u;if("object"!=typeof r||null===r||"[object Array]"===F.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(V.call(r,n)||P.call(r,n)?(e=r.__proto__,r.__proto__=x,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),a="get"in t,u="set"in t,i&&(a||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&O&&O.call(r,n,t.get),u&&T&&T.call(r,n,t.set),r};function G(r,n,t){$(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})}function L(r,n,t){$(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function H(r){return r!=r}var M=Math.floor,W=Math.ceil;function C(r){return r<0?W(r):M(r)}var R=Number,Z=R.NEGATIVE_INFINITY,q=Number.POSITIVE_INFINITY,X=1023,Y=1023,z=-1023,B=-1074;function D(r){return r===q||r===Z}var J=2147483648,K=2147483647;var Q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function rr(){return Q&&"symbol"==typeof Symbol.toStringTag}var nr=Object.prototype.toString;var tr=Object.prototype.hasOwnProperty;var er="function"==typeof Symbol?Symbol:void 0,ir="function"==typeof er?er.toStringTag:"";var ar=rr()?function(r){var n,t,e,i,a;if(null==r)return nr.call(r);t=r[ir],a=ir,n=null!=(i=r)&&tr.call(i,a);try{r[ir]=void 0}catch(n){return nr.call(r)}return e=nr.call(r),n?r[ir]=t:delete r[ir],e}:function(r){return nr.call(r)},ur="function"==typeof Uint32Array;var or="function"==typeof Uint32Array?Uint32Array:null;var fr,cr="function"==typeof Uint32Array?Uint32Array:void 0;fr=function(){var r,n,t;if("function"!=typeof or)return!1;try{n=new or(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(ur&&t instanceof Uint32Array||"[object Uint32Array]"===ar(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?cr:function(){throw new Error("not implemented")};var sr=fr,pr="function"==typeof Float64Array;var lr="function"==typeof Float64Array?Float64Array:null;var vr,yr="function"==typeof Float64Array?Float64Array:void 0;vr=function(){var r,n,t;if("function"!=typeof lr)return!1;try{n=new lr([1,3.14,-3.14,NaN]),t=n,r=(pr&&t instanceof Float64Array||"[object Float64Array]"===ar(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var gr=vr,hr="function"==typeof Uint8Array;var Nr="function"==typeof Uint8Array?Uint8Array:null;var dr,mr="function"==typeof Uint8Array?Uint8Array:void 0;dr=function(){var r,n,t;if("function"!=typeof Nr)return!1;try{n=new Nr(n=[1,3.14,-3.14,256,257]),t=n,r=(hr&&t instanceof Uint8Array||"[object Uint8Array]"===ar(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var wr=dr,br="function"==typeof Uint16Array;var Ar="function"==typeof Uint16Array?Uint16Array:null;var _r,Er="function"==typeof Uint16Array?Uint16Array:void 0;_r=function(){var r,n,t;if("function"!=typeof Ar)return!1;try{n=new Ar(n=[1,3.14,-3.14,65536,65537]),t=n,r=(br&&t instanceof Uint16Array||"[object Uint16Array]"===ar(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Er:function(){throw new Error("not implemented")};var Sr,kr={uint16:_r,uint8:wr};(Sr=new kr.uint16(1))[0]=4660;var Ur,jr,Ir=52===new kr.uint8(Sr.buffer)[0];!0===Ir?(Ur=1,jr=0):(Ur=0,jr=1);var xr={HIGH:Ur,LOW:jr},Fr=new gr(1),Or=new sr(Fr.buffer),Tr=xr.HIGH,Vr=xr.LOW;function Pr(r,n,t,e){return Fr[0]=r,n[e]=Or[Tr],n[e+t]=Or[Vr],n}function $r(r){return Pr(r,[0,0],1,0)}L($r,"assign",Pr);var Gr,Lr,Hr=!0===Ir?1:0,Mr=new gr(1),Wr=new sr(Mr.buffer);function Cr(r){return Mr[0]=r,Wr[Hr]}!0===Ir?(Gr=1,Lr=0):(Gr=0,Lr=1);var Rr={HIGH:Gr,LOW:Lr},Zr=new gr(1),qr=new sr(Zr.buffer),Xr=Rr.HIGH,Yr=Rr.LOW;function zr(r,n){return qr[Xr]=r,qr[Yr]=n,Zr[0]}var Br=[0,0];function Dr(r,n){var t,e;return $r.assign(r,Br,1,0),t=Br[0],t&=K,e=Cr(n),zr(t|=e&=J,Br[1])}var Jr=22250738585072014e-324;function Kr(r){return Math.abs(r)}var Qr=4503599627370496;function rn(r,n,t,e){return H(r)||D(r)?(n[e]=r,n[e+t]=0,n):0!==r&&Kr(r)<Jr?(n[e]=r*Qr,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}L((function(r){return rn(r,[0,0],1,0)}),"assign",rn);var nn=2146435072;var tn=2220446049250313e-31,en=2148532223,an=[0,0],un=[0,0];function on(r,n){var t,e;return 0===n||0===r||H(r)||D(r)?r:(rn(r,an,1,0),r=an[0],n+=an[1],n+=function(r){var n=Cr(r);return(n=(n&nn)>>>20)-X|0}(r),n<B?Dr(0,r):n>Y?r<0?Z:q:(n<=z?(n+=52,e=tn):e=1,$r.assign(r,un,1,0),t=un[0],t&=en,e*zr(t|=n+X<<20,un[1])))}var fn=.6931471803691238,cn=1.9082149292705877e-10,sn=1.4426950408889634,pn=709.782712893384,ln=-745.1332191019411,vn=1/(1<<28),yn=-vn;function gn(r){var n;return H(r)||r===q?r:r===Z?0:r>pn?q:r<ln?0:r>yn&&r<vn?1+r:function(r,n,t){var e,i,a,u;return on(1-(n-(e=r-n)*(a=e-(i=e*e)*(0===(u=i)?.16666666666666602:.16666666666666602+u*(u*(6613756321437934e-20+u*(4.1381367970572385e-8*u-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),t)}(r-(n=C(r<0?sn*r-.5:sn*r+.5))*fn,n*cn,n)}function hn(r,n,t){return H(r)||H(n)||H(t)||t<0?NaN:0===t?r<n?0:1:1/(1+gn(-((r-n)/t)))}function Nn(r){return function(){return r}}function dn(r){return H(r)?Nn(NaN):function(n){if(H(n))return NaN;return n<r?0:1}}function mn(r,n,t){$(r,n,{configurable:!1,enumerable:!1,get:t})}function wn(r){return"number"==typeof r}L((function(r,n){return H(r)||H(n)?NaN:r<n?0:1}),"factory",dn),L(hn,"factory",(function(r,n){return H(r)||H(n)||n<0?Nn(NaN):0===n?dn(r):function(t){if(H(t))return NaN;return 1/(1+gn(-((t-r)/n)))}}));var bn=R.prototype.toString;var An=rr();function _n(r){return"object"==typeof r&&(r instanceof R||(An?function(r){try{return bn.call(r),!0}catch(r){return!1}}(r):"[object Number]"===ar(r)))}function En(r){return wn(r)||_n(r)}function Sn(r){return wn(r)&&r>0}function kn(r){return _n(r)&&r.valueOf()>0}function Un(r){return Sn(r)||kn(r)}function jn(r){return wn(r)&&H(r)}function In(r){return _n(r)&&H(r.valueOf())}function xn(r){return jn(r)||In(r)}L(En,"isPrimitive",wn),L(En,"isObject",_n),L(Un,"isPrimitive",Sn),L(Un,"isObject",kn),L(xn,"isPrimitive",jn),L(xn,"isObject",In);var Fn=!0===Ir?1:0,On=new gr(1),Tn=new sr(On.buffer);function Vn(r,n){return On[0]=r,Tn[Fn]=n>>>0,On[0]}var Pn=.6931471803691238,$n=1.9082149292705877e-10,Gn=0x40000000000000,Ln=.3333333333333333,Hn=1048575,Mn=2146435072,Wn=1048576,Cn=1072693248;function Rn(r){var n,t,e,i,a,u,o,f,c,s,p,l;return 0===r?Z:H(r)||r<0?NaN:(a=0,(t=Cr(r))<Wn&&(a-=54,t=Cr(r*=Gn)),t>=Mn?r+r:(a+=(t>>20)-X|0,a+=(f=(t&=Hn)+614244&1048576|0)>>20|0,o=(r=Vn(r,t|f^Cn))-1,(Hn&2+t)<3?0===o?0===a?0:a*Pn+a*$n:(u=o*o*(.5-Ln*o),0===a?o-u:a*Pn-(u-a*$n-o)):(f=t-398458|0,c=440401-t|0,i=(p=(l=(s=o/(2+o))*s)*l)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=l*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),u=e+i,(f|=c)>0?(n=.5*o*o,0===a?o-(n-s*(n+u)):a*Pn-(n-(s*(n+u)+a*$n)-o)):0===a?o-s*(o-u):a*Pn-(s*(o-u)-a*$n-o))))}function Zn(r,n){return H(r)||H(n)||n<=0?NaN:Rn(n)+2}function qn(r,n){return H(r)||H(n)||n<=0?NaN:1.2}function Xn(r,n){return H(r)||H(n)||n<=0?NaN:r}function Yn(r,n){return H(r)||H(n)||n<=0?NaN:r}function zn(r,n){return H(r)||H(n)||n<=0?NaN:r}function Bn(r,n){return H(r)||H(n)||n<=0?NaN:0}var Dn=3.141592653589793;function Jn(r,n){return H(r)||H(n)||n<=0?NaN:n*Dn/1.7320508075688772}function Kn(r,n){return H(r)||H(n)||n<=0?NaN:n*n*9.869604401089358/3}var Qn=.6931471803691238,rt=1.9082149292705877e-10,nt=.41421356237309503,tt=-.2928932188134525,et=1.862645149230957e-9,it=5551115123125783e-32,at=9007199254740992,ut=.6666666666666666;function ot(r){var n,t,e,i,a,u,o,f,c,s;if(r<-1||H(r))return NaN;if(-1===r)return Z;if(r===q)return r;if(0===r)return r;if(s=1,(e=r<0?-r:r)<nt){if(e<et)return e<it?r:r-r*r*.5;r>tt&&(s=0,i=r,t=1)}return 0!==s&&(e<at?(a=(s=((t=Cr(c=1+r))>>20)-X)>0?1-(c-r):r-(c-1),a/=c):(s=((t=Cr(c=r))>>20)-X,a=0),(t&=1048575)<434334?c=Vn(c,1072693248|t):(s+=1,c=Vn(c,1071644672|t),t=1048576-t>>2),i=c-1),n=.5*i*i,0===t?0===i?s*Qn+(a+=s*rt):s*Qn-((f=n*(1-ut*i))-(s*rt+a)-i):(f=(o=(u=i/(2+i))*u)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(o),0===s?i-(n-u*(n+f)):s*Qn-(n-(u*(n+f)+(s*rt+a))-i))}function ft(r){return r<=18?ot(gn(r)):r>33.3?r:r+gn(-r)}function ct(r,n,t){return H(r)||H(n)||H(t)||t<0?NaN:0===t?r<n?Z:0:-ft(-((r-n)/t))}function st(r){return H(r)?Nn(NaN):function(n){if(H(n))return NaN;return n<r?Z:0}}function pt(r,n,t){var e;return H(r)||H(n)||H(t)||t<0?NaN:r===Z?Z:0===t?r===n?q:Z:(e=-Kr((r-n)/t))-2*ot(gn(e))-Rn(t)}function lt(r){return H(r)?Nn(NaN):function(n){if(H(n))return NaN;return n===r?q:Z}}function vt(r,n){var t,e,i,a;return i=(a=r*r)*a,e=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),e+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(t=.5*a))+(1-i-t+(a*e-r*n))}L((function(r,n){return H(r)||H(n)?NaN:r<n?Z:0}),"factory",st),L(ct,"factory",(function(r,n){return H(r)||H(n)||n<0?Nn(NaN):0===n?st(r):function(t){if(H(t))return NaN;return-ft(-((t-r)/n))}})),L((function(r,n){return H(r)||H(n)?NaN:r===n?q:Z}),"factory",lt),L(pt,"factory",(function(r,n){var t;return H(r)||H(n)||n<0?Nn(NaN):0===n?lt(r):(t=Rn(n),function(e){var i;if(H(e))return NaN;if(e===Z)return Z;return(i=-Kr((e-r)/n))-2*ot(gn(i))-t})}));var yt=-.16666666666666632,gt=.00833333333332249,ht=-.0001984126982985795,Nt=27557313707070068e-22,dt=-2.5050760253406863e-8,mt=1.58969099521155e-10;function wt(r,n){var t,e,i;return t=gt+(i=r*r)*(ht+i*Nt)+i*(i*i)*(dt+i*mt),e=i*r,0===n?r+e*(yt+i*t):r-(i*(.5*n-e*t)-n-e*yt)}var bt=1048575,At=!0===Ir?0:1,_t=new gr(1),Et=new sr(_t.buffer);function St(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var kt=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Ut=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],jt=16777216,It=5.960464477539063e-8,xt=St(20),Ft=St(20),Ot=St(20),Tt=St(20);function Vt(r,n,t,e,i,a,u,o,f){var c,s,p,l,v,y,g,h,N;for(l=a,N=e[t],h=t,v=0;h>0;v++)s=It*N|0,Tt[v]=N-jt*s|0,N=e[h-1]+s,h-=1;if(N=on(N,i),N-=8*M(.125*N),N-=g=0|N,p=0,i>0?(g+=v=Tt[t-1]>>24-i,Tt[t-1]-=v<<24-i,p=Tt[t-1]>>23-i):0===i?p=Tt[t-1]>>23:N>=.5&&(p=2),p>0){for(g+=1,c=0,v=0;v<t;v++)h=Tt[v],0===c?0!==h&&(c=1,Tt[v]=16777216-h):Tt[v]=16777215-h;if(i>0)switch(i){case 1:Tt[t-1]&=8388607;break;case 2:Tt[t-1]&=4194303}2===p&&(N=1-N,0!==c&&(N-=on(1,i)))}if(0===N){for(h=0,v=t-1;v>=a;v--)h|=Tt[v];if(0===h){for(y=1;0===Tt[a-y];y++);for(v=t+1;v<=t+y;v++){for(f[o+v]=kt[u+v],s=0,h=0;h<=o;h++)s+=r[h]*f[o+(v-h)];e[v]=s}return Vt(r,n,t+=y,e,i,a,u,o,f)}}if(0===N)for(t-=1,i-=24;0===Tt[t];)t-=1,i-=24;else(N=on(N,-i))>=jt?(s=It*N|0,Tt[t]=N-jt*s|0,i+=24,Tt[t+=1]=s):Tt[t]=0|N;for(s=on(1,i),v=t;v>=0;v--)e[v]=s*Tt[v],s*=It;for(v=t;v>=0;v--){for(s=0,y=0;y<=l&&y<=t-v;y++)s+=Ut[y]*e[v+y];Ot[t-v]=s}for(s=0,v=t;v>=0;v--)s+=Ot[v];for(n[0]=0===p?s:-s,s=Ot[0]-s,v=1;v<=t;v++)s+=Ot[v];return n[1]=0===p?s:-s,7&g}function Pt(r,n,t,e){var i,a,u,o,f,c,s;for(4,(a=(t-3)/24|0)<0&&(a=0),o=t-24*(a+1),c=a-(u=e-1),s=u+4,f=0;f<=s;f++)xt[f]=c<0?0:kt[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=u;c++)i+=r[c]*xt[u+(f-c)];Ft[f]=i}return 4,Vt(r,n,4,Ft,o,4,a,u,xt)}var $t=Math.round,Gt=.6366197723675814,Lt=1.5707963267341256,Ht=6077100506506192e-26,Mt=6077100506303966e-26,Wt=20222662487959506e-37,Ct=20222662487111665e-37,Rt=84784276603689e-45,Zt=2047;function qt(r,n,t){var e,i,a,u,o;return a=r-(e=$t(r*Gt))*Lt,u=e*Ht,o=n>>20|0,t[0]=a-u,o-(Cr(t[0])>>20&Zt)>16&&(u=e*Wt-((i=a)-(a=i-(u=e*Mt))-u),t[0]=a-u,o-(Cr(t[0])>>20&Zt)>49&&(u=e*Rt-((i=a)-(a=i-(u=e*Ct))-u),t[0]=a-u)),t[1]=a-t[0]-u,e}var Xt=0,Yt=16777216,zt=1.5707963267341256,Bt=6077100506506192e-26,Dt=2*Bt,Jt=3*Bt,Kt=4*Bt,Qt=598523,re=1072243195,ne=1073928572,te=1074752122,ee=1074977148,ie=1075183036,ae=1075388923,ue=1075594811,oe=1094263291,fe=[0,0,0],ce=[0,0];function se(r,n){var t,e,i,a,u,o,f;if((i=Cr(r)&K|0)<=re)return n[0]=r,n[1]=0,0;if(i<=te)return(i&bt)===Qt?qt(r,i,n):i<=ne?r>0?(f=r-zt,n[0]=f-Bt,n[1]=f-n[0]-Bt,1):(f=r+zt,n[0]=f+Bt,n[1]=f-n[0]+Bt,-1):r>0?(f=r-2*zt,n[0]=f-Dt,n[1]=f-n[0]-Dt,2):(f=r+2*zt,n[0]=f+Dt,n[1]=f-n[0]+Dt,-2);if(i<=ue)return i<=ie?i===ee?qt(r,i,n):r>0?(f=r-3*zt,n[0]=f-Jt,n[1]=f-n[0]-Jt,3):(f=r+3*zt,n[0]=f+Jt,n[1]=f-n[0]+Jt,-3):i===ae?qt(r,i,n):r>0?(f=r-4*zt,n[0]=f-Kt,n[1]=f-n[0]-Kt,4):(f=r+4*zt,n[0]=f+Kt,n[1]=f-n[0]+Kt,-4);if(i<oe)return qt(r,i,n);if(i>=nn)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return _t[0]=r,Et[At]}(r),f=zr(i-((e=(i>>20)-1046)<<20|0),t),u=0;u<2;u++)fe[u]=0|f,f=(f-fe[u])*Yt;for(fe[2]=f,a=3;fe[a-1]===Xt;)a-=1;return o=Pt(fe,ce,e,a),r<0?(n[0]=-ce[0],n[1]=-ce[1],-o):(n[0]=ce[0],n[1]=ce[1],o)}var pe=[0,0],le=2147483647,ve=1072243195,ye=1044381696,ge=2146435072;function he(r){var n;if(n=Cr(r),(n&=le)<=ve)return n<ye?1:vt(r,0);if(n>=ge)return NaN;switch(3&se(r,pe)){case 0:return vt(pe[0],pe[1]);case 1:return-wt(pe[0],pe[1]);case 2:return-vt(pe[0],pe[1]);default:return wt(pe[0],pe[1])}}var Ne=1072243195,de=1045430272,me=[0,0];function we(r){var n;if(n=Cr(r),(n&=K)<=Ne)return n<de?r:wt(r,0);if(n>=nn)return NaN;switch(3&se(r,me)){case 0:return wt(me[0],me[1]);case 1:return vt(me[0],me[1]);case 2:return-wt(me[0],me[1]);default:return-vt(me[0],me[1])}}function be(r){return H(r)?NaN:D(r)?0:0===r?1:function(r){var n,t;return H(r)||D(r)?NaN:0===(n=Kr(t=r%2))||1===n?Dr(0,t):n<.25?we(Dn*t):n<.75?Dr(he(Dn*(n=.5-n)),t):n<1.25?(t=Dr(1,t)-t,we(Dn*t)):n<1.75?-Dr(he(Dn*(n-=1.5)),t):(t-=Dr(2,t),we(Dn*t))}(r)/(Dn*r)}function Ae(r,n,t){var e;return H(e=t*r)||H(n)||t<0||Kr(e)>1?NaN:gn(n*r)/be(e)}function _e(r){return H(r)?Nn(NaN):function(n){if(H(n))return NaN;return gn(r*n)}}function Ee(r){return M(r)===r}function Se(r){return Ee(r/2)}function ke(r){return Se(r>0?r-1:r+1)}L((function(r,n){return H(r)||H(n)?NaN:gn(n*r)}),"factory",_e),L(Ae,"factory",(function(r,n){return H(r)||H(n)||n<0?Nn(NaN):0===n?_e(r):function(t){var e=n*t;if(Kr(e)>1)return NaN;return gn(r*t)/be(e)}}));var Ue=Math.sqrt,je=!0===Ir?0:1,Ie=new gr(1),xe=new sr(Ie.buffer);function Fe(r,n){return Ie[0]=r,xe[je]=n>>>0,Ie[0]}function Oe(r){return 0|r}var Te=1072693247,Ve=1e300,Pe=1e-300;var $e=1048575,Ge=1048576,Le=1072693248,He=536870912,Me=524288,We=20,Ce=9007199254740992,Re=.9617966939259756,Ze=.9617967009544373,qe=-7.028461650952758e-9,Xe=[1,1.5],Ye=[0,.5849624872207642],ze=[0,1.350039202129749e-8];var Be=1.4426950408889634,De=1.4426950216293335,Je=1.9259629911266175e-8;var Ke=.6931471805599453;var Qe=1048576,ri=1071644672,ni=20,ti=.6931471824645996,ei=-1.904654299957768e-9;var ii=1072693247,ai=1105199104,ui=1139802112,oi=1083179008,fi=1072693248,ci=1083231232,si=3230714880,pi=31,li=1e300,vi=1e-300,yi=8008566259537294e-32,gi=[0,0],hi=[0,0];function Ni(r,n){var t,e,i,a,u,o,f,c,s,p,l,v,y,g;if(H(r)||H(n))return NaN;if($r.assign(n,gi,1,0),u=gi[0],0===gi[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Ue(r);if(-.5===n)return 1/Ue(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(D(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Kr(r)<1==(n===q)?0:q}(r,n)}if($r.assign(r,gi,1,0),a=gi[0],0===gi[1]){if(0===a)return function(r,n){return n===Z?q:n===q?0:n>0?ke(n)?r:0:ke(n)?Dr(q,r):q}(r,n);if(1===r)return 1;if(-1===r&&ke(n))return-1;if(D(r))return r===Z?Ni(-0,-n):n<0?0:q}if(r<0&&!1===Ee(n))return(r-r)/(r-r);if(i=Kr(r),t=a&K|0,e=u&K|0,f=u>>>pi|0,o=(o=a>>>pi|0)&&ke(n)?-1:1,e>ai){if(e>ui)return function(r,n){return(Cr(r)&K)<=Te?n<0?Ve*Ve:Pe*Pe:n>0?Ve*Ve:Pe*Pe}(r,n);if(t<ii)return 1===f?o*li*li:o*vi*vi;if(t>fi)return 0===f?o*li*li:o*vi*vi;l=function(r,n){var t,e,i,a,u,o,f;return a=(i=n-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),t=(o=i*Je-a*Be)-((e=Fe(e=(u=De*i)+o,0))-u),r[0]=e,r[1]=t,r}(hi,i)}else l=function(r,n,t){var e,i,a,u,o,f,c,s,p,l,v,y,g,h,N,d,m,w,b,A,_;return w=0,t<Ge&&(w-=53,t=Cr(n*=Ce)),w+=(t>>We)-X|0,t=(b=t&$e|0)|Le|0,b<=235662?A=0:b<767610?A=1:(A=0,w+=1,t-=Ge),u=Fe(i=(d=(n=Vn(n,t))-(c=Xe[A]))*(m=1/(n+c)),0),e=(t>>1|He)+Me,f=Vn(0,e+=A<<18),N=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=Fe(f=3+(a=u*u)+(N+=(o=m*(d-u*f-u*(n-(f-c))))*(u+i)),0),p=Fe(p=(d=u*f)+(m=o*f+(N-(f-3-a))*i),0),l=Ze*p,g=(v=qe*p+(m-(p-d))*Re+ze[A])-((y=Fe(y=l+v+(s=Ye[A])+(h=w),0))-h-s-l),r[0]=y,r[1]=g,r}(hi,i,t);if(v=(p=(n-(c=Fe(n,0)))*l[0]+n*l[1])+(s=c*l[0]),$r.assign(v,gi,1,0),y=Oe(gi[0]),g=Oe(gi[1]),y>=oi){if(0!=(y-oi|g))return o*li*li;if(p+yi>v-s)return o*li*li}else if((y&K)>=ci){if(0!=(y-si|g))return o*vi*vi;if(p<=v-s)return o*vi*vi}return v=function(r,n,t){var e,i,a,u,o,f,c,s,p,l;return p=((s=r&K|0)>>ni)-X|0,c=0,s>ri&&(i=Vn(0,((c=r+(Qe>>p+1)>>>0)&~(bt>>(p=((c&K)>>ni)-X|0)))>>>0),c=(c&bt|Qe)>>ni-p>>>0,r<0&&(c=-c),n-=i),r=Oe(r=Cr(f=1-((f=(a=(i=Fe(i=t+n,0))*ti)+(u=(t-(i-n))*Ke+i*ei))*(e=f-(i=f*f)*(0===(l=i)?.16666666666666602:.16666666666666602+l*(l*(6613756321437934e-20+l*(4.1381367970572385e-8*l-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((o=u-(f-a))+f*o)-f))),(r+=c<<ni>>>0)>>ni<=0?on(f,c):Vn(f,r)}(y,s,p),o*v}function di(r,n,t){var e;return H(r)||H(n)||H(t)||t<0?NaN:r===Z?0:0===t?r===n?q:0:(e=gn(-Kr((r-n)/t)))/(t*Ni(1+e,2))}function mi(r){return H(r)?Nn(NaN):function(n){if(H(n))return NaN;return n===r?q:0}}function wi(r,n,t){return H(n)||H(t)||H(r)||t<0||r<0||r>1?NaN:0===t?n:n+t*Rn(r/(1-r))}function bi(r){return H(r)?Nn(NaN):function(n){if(H(n)||n<0||n>1)return NaN;return r}}function Ai(){var r,n;if(!(this instanceof Ai))return 0===arguments.length?new Ai:new Ai(arguments[0],arguments[1]);if(arguments.length){if(n=arguments[1],!wn(r=arguments[0])||xn(r))throw new TypeError(I("invalid argument. Location parameter must be a number. Value: `%s`.",r));if(!Sn(n))throw new TypeError(I("invalid argument. Scale parameter must be a positive number. Value: `%s`.",n))}else r=0,n=1;return $(this,"mu",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!wn(n)||xn(n))throw new TypeError(I("invalid assignment. Must be a number. Value: `%s`.",n));r=n}}),$(this,"s",{configurable:!1,enumerable:!0,get:function(){return n},set:function(r){if(!Sn(r))throw new TypeError(I("invalid assignment. Must be a positive number. Value: `%s`.",r));n=r}}),this}L((function(r,n){return H(r)||H(n)?NaN:r===n?q:0}),"factory",mi),L(di,"factory",(function(r,n){return H(r)||H(n)||n<0?Nn(NaN):0===n?mi(r):function(t){var e,i;if(H(t))return NaN;if(t===Z)return 0;return i=Kr((t-r)/n),(e=gn(-i))/(n*Ni(1+e,2))}})),L((function(r,n){return H(r)||r<0||r>1?NaN:n}),"factory",bi),L(wi,"factory",(function(r,n){return H(r)||H(n)||n<0?Nn(NaN):0===n?bi(r):function(t){if(H(t)||t<0||t>1)return NaN;return r+n*Rn(t/(1-t))}})),mn(Ai.prototype,"entropy",(function(){return Zn(this.mu,this.s)})),mn(Ai.prototype,"kurtosis",(function(){return qn(this.mu,this.s)})),mn(Ai.prototype,"mean",(function(){return Xn(this.mu,this.s)})),mn(Ai.prototype,"median",(function(){return Yn(this.mu,this.s)})),mn(Ai.prototype,"mode",(function(){return zn(this.mu,this.s)})),mn(Ai.prototype,"skewness",(function(){return Bn(this.mu,this.s)})),mn(Ai.prototype,"stdev",(function(){return Jn(this.mu,this.s)})),mn(Ai.prototype,"variance",(function(){return Kn(this.mu,this.s)})),L(Ai.prototype,"cdf",(function(r){return hn(r,this.mu,this.s)})),L(Ai.prototype,"logcdf",(function(r){return ct(r,this.mu,this.s)})),L(Ai.prototype,"logpdf",(function(r){return pt(r,this.mu,this.s)})),L(Ai.prototype,"mgf",(function(r){return Ae(r,this.mu,this.s)})),L(Ai.prototype,"pdf",(function(r){return di(r,this.mu,this.s)})),L(Ai.prototype,"quantile",(function(r){return wi(r,this.mu,this.s)}));var _i={};G(_i,"cdf",hn),G(_i,"Logistic",Ai),G(_i,"entropy",Zn),G(_i,"kurtosis",qn),G(_i,"logcdf",ct),G(_i,"logpdf",pt),G(_i,"mean",Xn),G(_i,"median",Yn),G(_i,"mgf",Ae),G(_i,"mode",zn),G(_i,"pdf",di),G(_i,"quantile",wi),G(_i,"skewness",Bn),G(_i,"stdev",Jn),G(_i,"variance",Kn);export{Ai as Logistic,hn as cdf,_i as default,Zn as entropy,qn as kurtosis,ct as logcdf,pt as logpdf,Xn as mean,Yn as median,Ae as mgf,zn as mode,di as pdf,wi as quantile,Bn as skewness,Jn as stdev,Kn as variance};
//# sourceMappingURL=mod.js.map
