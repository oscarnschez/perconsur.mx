var Ih=Object.defineProperty;var aa=(i,e)=>{for(var t in e)Ih(i,t,{get:e[t],enumerable:!0})};var ul="169";var Dh=0,Ul=1,Lh=2;var Hc=1,dl=2,On=3,rn=0,jt=1,tn=2,Qn=0,qi=1,Nl=2,Fl=3,kl=4,Uh=5,_i=100,Nh=101,Fh=102,kh=103,Oh=104,Hh=200,Bh=201,zh=202,Gh=203,za=204,Ga=205,Vh=206,Wh=207,qh=208,Xh=209,Yh=210,Zh=211,Jh=212,$h=213,Kh=214,Va=0,Wa=1,qa=2,Ji=3,Xa=4,Ya=5,Za=6,Ja=7,Bc=0,jh=1,Qh=2,ei=0,eu=1,tu=2,nu=3,Ti=4,iu=5,su=6,ru=7;var zc=300,$i=301,Ki=302,$a=303,Ka=304,$r=306,Yt=1e3,bi=1001,ja=1002,pn=1003,au=1004;var Ks=1005;var En=1006,oa=1007;var vi=1008;var Gn=1009,Gc=1010,Vc=1011,Es=1012,fl=1013,Mi=1014,Bn=1015,Us=1016,pl=1017,ml=1018,ji=1020,Wc=35902,qc=1021,Xc=1022,Sn=1023,Yc=1024,Zc=1025,Xi=1026,Qi=1027,Jc=1028,gl=1029,$c=1030,_l=1031;var yl=1033,Mr=33776,Er=33777,Sr=33778,wr=33779,Qa=35840,eo=35841,to=35842,no=35843,io=36196,so=37492,ro=37496,ao=37808,oo=37809,lo=37810,co=37811,ho=37812,uo=37813,fo=37814,po=37815,mo=37816,go=37817,_o=37818,yo=37819,xo=37820,bo=37821,Tr=36492,vo=36494,Mo=36495,Kc=36283,Eo=36284,So=36285,wo=36286;var Ar=2300,To=2301,la=2302,Ol=2400,Hl=2401,Bl=2402;var ou=3200,lu=3201;var jc=0,cu=1,dt="",Rt="srgb",li="srgb-linear",xl="display-p3",Kr="display-p3-linear",Cr="linear",Lt="srgb",Pr="rec709",Ir="p3";var Ai=7680;var zl=519,hu=512,uu=513,du=514,Qc=515,fu=516,pu=517,mu=518,gu=519,Gl=35044;var Vl="300 es",zn=2e3,Dr=2001,ti=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wl=1234567,_s=Math.PI/180,Ss=180/Math.PI;function Ri(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]).toLowerCase()}function Xt(i,e,t){return Math.max(e,Math.min(t,i))}function bl(i,e){return(i%e+e)%e}function _u(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function yu(i,e,t){return i!==e?(t-i)/(e-i):0}function ys(i,e,t){return(1-t)*i+t*e}function xu(i,e,t,n){return ys(i,e,1-Math.exp(-t*n))}function bu(i,e=1){return e-Math.abs(bl(i,e*2)-e)}function vu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Mu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Eu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Su(i,e){return i+Math.random()*(e-i)}function wu(i){return i*(.5-Math.random())}function Tu(i){i!==void 0&&(Wl=i);let e=Wl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ru(i){return i*_s}function Au(i){return i*Ss}function Cu(i){return(i&i-1)===0&&i!==0}function Pu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Iu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Du(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),_=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*_,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*_,a*c);break;case"ZYZ":i.set(l*_,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Gi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Qt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var pt={DEG2RAD:_s,RAD2DEG:Ss,generateUUID:Ri,clamp:Xt,euclideanModulo:bl,mapLinear:_u,inverseLerp:yu,lerp:ys,damp:xu,pingpong:bu,smoothstep:vu,smootherstep:Mu,randInt:Eu,randFloat:Su,randFloatSpread:wu,seededRandom:Tu,degToRad:Ru,radToDeg:Au,isPowerOfTwo:Cu,ceilPowerOfTwo:Pu,floorPowerOfTwo:Iu,setQuaternionFromProperEuler:Du,normalize:Qt,denormalize:Gi},Le=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},st=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],_=n[8],v=s[0],p=s[3],m=s[6],T=s[1],M=s[4],E=s[7],C=s[2],P=s[5],R=s[8];return r[0]=o*v+a*T+l*C,r[3]=o*p+a*M+l*P,r[6]=o*m+a*E+l*R,r[1]=c*v+h*T+u*C,r[4]=c*p+h*M+u*P,r[7]=c*m+h*E+u*R,r[2]=d*v+f*T+_*C,r[5]=d*p+f*M+_*P,r[8]=d*m+f*E+_*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,_=t*u+n*d+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/_;return e[0]=u*v,e[1]=(s*c-h*n)*v,e[2]=(a*n-s*o)*v,e[3]=d*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ca.makeScale(e,t)),this}rotate(e){return this.premultiply(ca.makeRotation(-e)),this}translate(e,t){return this.premultiply(ca.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ca=new st;function eh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ws(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Lu(){let i=ws("canvas");return i.style.display="block",i}var ql={};function Rr(i){i in ql||(ql[i]=!0,console.warn(i))}function Uu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Nu(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Fu(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Xl=new st().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Yl=new st().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),hs={[li]:{transfer:Cr,primaries:Pr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Rt]:{transfer:Lt,primaries:Pr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Kr]:{transfer:Cr,primaries:Ir,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Yl),fromReference:i=>i.applyMatrix3(Xl)},[xl]:{transfer:Lt,primaries:Ir,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Yl),fromReference:i=>i.applyMatrix3(Xl).convertLinearToSRGB()}},ku=new Set([li,Kr]),xt={enabled:!0,_workingColorSpace:li,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!ku.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=hs[e].toReference,s=hs[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return hs[i].primaries},getTransfer:function(i){return i===dt?Cr:hs[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(hs[e].luminanceCoefficients)}};function Yi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ha(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ci,Ro=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ci===void 0&&(Ci=ws("canvas")),Ci.width=e.width,Ci.height=e.height;let n=Ci.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ci}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ws("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Yi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Yi(t[n]/255)*255):t[n]=Yi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ou=0,Lr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=Ri(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ua(s[o].image)):r.push(ua(s[o]))}else r=ua(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function ua(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ro.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Hu=0,an=class i extends ti{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=bi,s=bi,r=En,o=vi,a=Sn,l=Gn,c=i.DEFAULT_ANISOTROPY,h=dt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=Ri(),this.name="",this.source=new Lr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yt:e.x=e.x-Math.floor(e.x);break;case bi:e.x=e.x<0?0:1;break;case ja:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yt:e.y=e.y-Math.floor(e.y);break;case bi:e.y=e.y<0?0:1;break;case ja:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=zc;an.DEFAULT_ANISOTROPY=1;var Mt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],_=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(_+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,E=(f+1)/2,C=(m+1)/2,P=(h+d)/4,R=(u+v)/4,A=(_+p)/4;return M>E&&M>C?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=P/n,r=R/n):E>C?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=P/s,r=A/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=R/r,s=A/r),this.set(n,s,r,t),this}let T=Math.sqrt((p-_)*(p-_)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(p-_)/T,this.y=(u-v)/T,this.z=(d-h)/T,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ao=class extends ti{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new an(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Lr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vn=class extends Ao{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ur=class extends an{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Co=class extends an{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var on=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],_=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=_,e[t+3]=v;return}if(u!==v||l!==d||c!==f||h!==_){let p=1-a,m=l*d+c*f+h*_+u*v,T=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){let C=Math.sqrt(M),P=Math.atan2(C,m*T);p=Math.sin(p*P)/C,a=Math.sin(a*P)/C}let E=a*T;if(l=l*p+d*E,c=c*p+f*E,h=h*p+_*E,u=u*p+v*E,p===1-a){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],_=r[o+3];return e[t]=a*_+h*u+l*f-c*d,e[t+1]=l*_+h*d+c*u-a*f,e[t+2]=c*_+h*f+a*d-l*u,e[t+3]=h*_-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"YZX":this._x=d*h*u+c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u-d*f*_;break;case"XZY":this._x=d*h*u-c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return da.copy(this).projectOnVector(e),this.sub(da)}reflect(e){return this.sub(da.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},da=new N,Zl=new on,Zt=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,bn):bn.fromBufferAttribute(r,o),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),js.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),js.copy(n.boundingBox)),js.applyMatrix4(e.matrixWorld),this.union(js)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(us),Qs.subVectors(this.max,us),Pi.subVectors(e.a,us),Ii.subVectors(e.b,us),Di.subVectors(e.c,us),Yn.subVectors(Ii,Pi),Zn.subVectors(Di,Ii),hi.subVectors(Pi,Di);let t=[0,-Yn.z,Yn.y,0,-Zn.z,Zn.y,0,-hi.z,hi.y,Yn.z,0,-Yn.x,Zn.z,0,-Zn.x,hi.z,0,-hi.x,-Yn.y,Yn.x,0,-Zn.y,Zn.x,0,-hi.y,hi.x,0];return!fa(t,Pi,Ii,Di,Qs)||(t=[1,0,0,0,1,0,0,0,1],!fa(t,Pi,Ii,Di,Qs))?!1:(er.crossVectors(Yn,Zn),t=[er.x,er.y,er.z],fa(t,Pi,Ii,Di,Qs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ln=[new N,new N,new N,new N,new N,new N,new N,new N],bn=new N,js=new Zt,Pi=new N,Ii=new N,Di=new N,Yn=new N,Zn=new N,hi=new N,us=new N,Qs=new N,er=new N,ui=new N;function fa(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ui.fromArray(i,r);let a=s.x*Math.abs(ui.x)+s.y*Math.abs(ui.y)+s.z*Math.abs(ui.z),l=e.dot(ui),c=t.dot(ui),h=n.dot(ui);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Bu=new Zt,ds=new N,pa=new N,Ts=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Bu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ds.subVectors(e,this.center);let t=ds.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ds,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ds.copy(e.center).add(pa)),this.expandByPoint(ds.copy(e.center).sub(pa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Un=new N,ma=new N,tr=new N,Jn=new N,ga=new N,nr=new N,_a=new N,Po=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Un.copy(this.origin).addScaledVector(this.direction,t),Un.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ma.copy(e).add(t).multiplyScalar(.5),tr.copy(t).sub(e).normalize(),Jn.copy(this.origin).sub(ma);let r=e.distanceTo(t)*.5,o=-this.direction.dot(tr),a=Jn.dot(this.direction),l=-Jn.dot(tr),c=Jn.lengthSq(),h=Math.abs(1-o*o),u,d,f,_;if(h>0)if(u=o*l-a,d=o*a-l,_=r*h,u>=0)if(d>=-_)if(d<=_){let v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ma).addScaledVector(tr,d),f}intersectSphere(e,t){Un.subVectors(e.center,this.origin);let n=Un.dot(this.direction),s=Un.dot(Un)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Un)!==null}intersectTriangle(e,t,n,s,r){ga.subVectors(t,e),nr.subVectors(n,e),_a.crossVectors(ga,nr);let o=this.direction.dot(_a),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Jn.subVectors(this.origin,e);let l=a*this.direction.dot(nr.crossVectors(Jn,nr));if(l<0)return null;let c=a*this.direction.dot(ga.cross(Jn));if(c<0||l+c>o)return null;let h=-a*Jn.dot(_a);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ft=class i{constructor(e,t,n,s,r,o,a,l,c,h,u,d,f,_,v,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,d,f,_,v,p)}set(e,t,n,s,r,o,a,l,c,h,u,d,f,_,v,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=_,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Li.setFromMatrixColumn(e,0).length(),r=1/Li.setFromMatrixColumn(e,1).length(),o=1/Li.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,_=a*h,v=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+_*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=_+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,_=c*h,v=c*u;t[0]=d+v*a,t[4]=_*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-_,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,_=c*h,v=c*u;t[0]=d-v*a,t[4]=-o*u,t[8]=_+f*a,t[1]=f+_*a,t[5]=o*h,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,_=a*h,v=a*u;t[0]=l*h,t[4]=_*c-f,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=f*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,_=a*l,v=a*c;t[0]=l*h,t[4]=v-d*u,t[8]=_*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+_,t[10]=d-v*u}else if(e.order==="XZY"){let d=o*l,f=o*c,_=a*l,v=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=o*h,t[9]=f*u-_,t[2]=_*u-f,t[6]=a*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zu,e,Gu)}lookAt(e,t,n){let s=this.elements;return hn.subVectors(e,t),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),$n.crossVectors(n,hn),$n.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),$n.crossVectors(n,hn)),$n.normalize(),ir.crossVectors(hn,$n),s[0]=$n.x,s[4]=ir.x,s[8]=hn.x,s[1]=$n.y,s[5]=ir.y,s[9]=hn.y,s[2]=$n.z,s[6]=ir.z,s[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],_=n[2],v=n[6],p=n[10],m=n[14],T=n[3],M=n[7],E=n[11],C=n[15],P=s[0],R=s[4],A=s[8],z=s[12],g=s[1],x=s[5],k=s[9],F=s[13],H=s[2],X=s[6],L=s[10],Y=s[14],q=s[3],de=s[7],ae=s[11],re=s[15];return r[0]=o*P+a*g+l*H+c*q,r[4]=o*R+a*x+l*X+c*de,r[8]=o*A+a*k+l*L+c*ae,r[12]=o*z+a*F+l*Y+c*re,r[1]=h*P+u*g+d*H+f*q,r[5]=h*R+u*x+d*X+f*de,r[9]=h*A+u*k+d*L+f*ae,r[13]=h*z+u*F+d*Y+f*re,r[2]=_*P+v*g+p*H+m*q,r[6]=_*R+v*x+p*X+m*de,r[10]=_*A+v*k+p*L+m*ae,r[14]=_*z+v*F+p*Y+m*re,r[3]=T*P+M*g+E*H+C*q,r[7]=T*R+M*x+E*X+C*de,r[11]=T*A+M*k+E*L+C*ae,r[15]=T*z+M*F+E*Y+C*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],_=e[3],v=e[7],p=e[11],m=e[15];return _*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+v*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+p*(+t*c*u-t*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+m*(-s*a*h-t*l*u+t*a*d+s*o*u-n*o*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],_=e[12],v=e[13],p=e[14],m=e[15],T=u*p*c-v*d*c+v*l*f-a*p*f-u*l*m+a*d*m,M=_*d*c-h*p*c-_*l*f+o*p*f+h*l*m-o*d*m,E=h*v*c-_*u*c+_*a*f-o*v*f-h*a*m+o*u*m,C=_*u*l-h*v*l-_*a*d+o*v*d+h*a*p-o*u*p,P=t*T+n*M+s*E+r*C;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/P;return e[0]=T*R,e[1]=(v*d*r-u*p*r-v*s*f+n*p*f+u*s*m-n*d*m)*R,e[2]=(a*p*r-v*l*r+v*s*c-n*p*c-a*s*m+n*l*m)*R,e[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*R,e[4]=M*R,e[5]=(h*p*r-_*d*r+_*s*f-t*p*f-h*s*m+t*d*m)*R,e[6]=(_*l*r-o*p*r-_*s*c+t*p*c+o*s*m-t*l*m)*R,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*f+t*l*f)*R,e[8]=E*R,e[9]=(_*u*r-h*v*r-_*n*f+t*v*f+h*n*m-t*u*m)*R,e[10]=(o*v*r-_*a*r+_*n*c-t*v*c-o*n*m+t*a*m)*R,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*f-t*a*f)*R,e[12]=C*R,e[13]=(h*v*s-_*u*s+_*n*d-t*v*d-h*n*p+t*u*p)*R,e[14]=(_*a*s-o*v*s-_*n*l+t*v*l+o*n*p-t*a*p)*R,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*d+t*a*d)*R,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,_=r*u,v=o*h,p=o*u,m=a*u,T=l*c,M=l*h,E=l*u,C=n.x,P=n.y,R=n.z;return s[0]=(1-(v+m))*C,s[1]=(f+E)*C,s[2]=(_-M)*C,s[3]=0,s[4]=(f-E)*P,s[5]=(1-(d+m))*P,s[6]=(p+T)*P,s[7]=0,s[8]=(_+M)*R,s[9]=(p-T)*R,s[10]=(1-(d+v))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Li.set(s[0],s[1],s[2]).length(),o=Li.set(s[4],s[5],s[6]).length(),a=Li.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],vn.copy(this);let c=1/r,h=1/o,u=1/a;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=h,vn.elements[5]*=h,vn.elements[6]*=h,vn.elements[8]*=u,vn.elements[9]*=u,vn.elements[10]*=u,t.setFromRotationMatrix(vn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=zn){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),f,_;if(a===zn)f=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Dr)f=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=zn){let l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(o-r),d=(t+e)*c,f=(n+s)*h,_,v;if(a===zn)_=(o+r)*u,v=-2*u;else if(a===Dr)_=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Li=new N,vn=new Ft,zu=new N(0,0,0),Gu=new N(1,1,1),$n=new N,ir=new N,hn=new N,Jl=new Ft,$l=new on,An=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Jl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $l.setFromEuler(this),this.setFromQuaternion($l,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};An.DEFAULT_ORDER="XYZ";var Nr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Vu=0,Kl=new N,Ui=new on,Nn=new Ft,sr=new N,fs=new N,Wu=new N,qu=new on,jl=new N(1,0,0),Ql=new N(0,1,0),ec=new N(0,0,1),tc={type:"added"},Xu={type:"removed"},Ni={type:"childadded",child:null},ya={type:"childremoved",child:null},nn=class i extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new N,t=new An,n=new on,s=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ft},normalMatrix:{value:new st}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.premultiply(Ui),this}rotateX(e){return this.rotateOnAxis(jl,e)}rotateY(e){return this.rotateOnAxis(Ql,e)}rotateZ(e){return this.rotateOnAxis(ec,e)}translateOnAxis(e,t){return Kl.copy(e).applyQuaternion(this.quaternion),this.position.add(Kl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jl,e)}translateY(e){return this.translateOnAxis(Ql,e)}translateZ(e){return this.translateOnAxis(ec,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?sr.copy(e):sr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(fs,sr,this.up):Nn.lookAt(sr,fs,this.up),this.quaternion.setFromRotationMatrix(Nn),s&&(Nn.extractRotation(s.matrixWorld),Ui.setFromRotationMatrix(Nn),this.quaternion.premultiply(Ui.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tc),Ni.child=e,this.dispatchEvent(Ni),Ni.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xu),ya.child=e,this.dispatchEvent(ya),ya.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tc),Ni.child=e,this.dispatchEvent(Ni),Ni.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,e,Wu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,qu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};nn.DEFAULT_UP=new N(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Mn=new N,Fn=new N,xa=new N,kn=new N,Fi=new N,ki=new N,nc=new N,ba=new N,va=new N,Ma=new N,Ea=new Mt,Sa=new Mt,wa=new Mt,yi=class i{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Mn.subVectors(e,t),s.cross(Mn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Mn.subVectors(s,t),Fn.subVectors(n,t),xa.subVectors(e,t);let o=Mn.dot(Mn),a=Mn.dot(Fn),l=Mn.dot(xa),c=Fn.dot(Fn),h=Fn.dot(xa),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,_=(o*h-a*l)*d;return r.set(1-f-_,_,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,kn.x),l.addScaledVector(o,kn.y),l.addScaledVector(a,kn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Ea.setScalar(0),Sa.setScalar(0),wa.setScalar(0),Ea.fromBufferAttribute(e,t),Sa.fromBufferAttribute(e,n),wa.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ea,r.x),o.addScaledVector(Sa,r.y),o.addScaledVector(wa,r.z),o}static isFrontFacing(e,t,n,s){return Mn.subVectors(n,t),Fn.subVectors(e,t),Mn.cross(Fn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),Mn.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Fi.subVectors(s,n),ki.subVectors(r,n),ba.subVectors(e,n);let l=Fi.dot(ba),c=ki.dot(ba);if(l<=0&&c<=0)return t.copy(n);va.subVectors(e,s);let h=Fi.dot(va),u=ki.dot(va);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Fi,o);Ma.subVectors(e,r);let f=Fi.dot(Ma),_=ki.dot(Ma);if(_>=0&&f<=_)return t.copy(r);let v=f*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(ki,a);let p=h*_-f*u;if(p<=0&&u-h>=0&&f-_>=0)return nc.subVectors(r,s),a=(u-h)/(u-h+(f-_)),t.copy(s).addScaledVector(nc,a);let m=1/(p+v+d);return o=v*m,a=d*m,t.copy(n).addScaledVector(Fi,o).addScaledVector(ki,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},th={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},rr={h:0,s:0,l:0};function Ta(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var qe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=xt.workingColorSpace){return this.r=e,this.g=t,this.b=n,xt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=xt.workingColorSpace){if(e=bl(e,1),t=Xt(t,0,1),n=Xt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ta(o,r,e+1/3),this.g=Ta(o,r,e),this.b=Ta(o,r,e-1/3)}return xt.toWorkingColorSpace(this,s),this}setStyle(e,t=Rt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){let n=th[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}copyLinearToSRGB(e){return this.r=ha(e.r),this.g=ha(e.g),this.b=ha(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return xt.fromWorkingColorSpace($t.copy(this),e),Math.round(Xt($t.r*255,0,255))*65536+Math.round(Xt($t.g*255,0,255))*256+Math.round(Xt($t.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.fromWorkingColorSpace($t.copy(this),t);let n=$t.r,s=$t.g,r=$t.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=xt.workingColorSpace){return xt.fromWorkingColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=Rt){xt.fromWorkingColorSpace($t.copy(this),e);let t=$t.r,n=$t.g,s=$t.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Kn),this.setHSL(Kn.h+e,Kn.s+t,Kn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Kn),e.getHSL(rr);let n=ys(Kn.h,rr.h,t),s=ys(Kn.s,rr.s,t),r=ys(Kn.l,rr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$t=new qe;qe.NAMES=th;var Yu=0,ni=class extends ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=Ri(),this.name="",this.type="Material",this.blending=qi,this.side=rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=za,this.blendDst=Ga,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ai,this.stencilZFail=Ai,this.stencilZPass=Ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(n.blending=this.blending),this.side!==rn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==za&&(n.blendSrc=this.blendSrc),this.blendDst!==Ga&&(n.blendDst=this.blendDst),this.blendEquation!==_i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ji&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},es=class extends ni{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Bc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Gt=new N,ar=new Le,mn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Gl,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ar.fromBufferAttribute(this,t),ar.applyMatrix3(e),this.setXY(t,ar.x,ar.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Gi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),n=Qt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),n=Qt(n,this.array),s=Qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),n=Qt(n,this.array),s=Qt(s,this.array),r=Qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gl&&(e.usage=this.usage),e}};var Fr=class extends mn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var kr=class extends mn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var sn=class extends mn{constructor(e,t,n){super(new Float32Array(e),t,n)}},Zu=0,fn=new Ft,Ra=new nn,Oi=new N,un=new Zt,ps=new Zt,qt=new N,Wn=class i extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(eh(e)?kr:Fr)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new st().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,t,n){return fn.makeTranslation(e,t,n),this.applyMatrix4(fn),this}scale(e,t,n){return fn.makeScale(e,t,n),this.applyMatrix4(fn),this}lookAt(e){return Ra.lookAt(e),Ra.updateMatrix(),this.applyMatrix4(Ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new sn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];un.setFromBufferAttribute(r),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ts);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){let n=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ps.setFromBufferAttribute(a),this.morphTargetsRelative?(qt.addVectors(un.min,ps.min),un.expandByPoint(qt),qt.addVectors(un.max,ps.max),un.expandByPoint(qt)):(un.expandByPoint(ps.min),un.expandByPoint(ps.max))}un.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)qt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(qt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)qt.fromBufferAttribute(a,c),l&&(Oi.fromBufferAttribute(e,c),qt.add(Oi)),s=Math.max(s,n.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<n.count;A++)a[A]=new N,l[A]=new N;let c=new N,h=new N,u=new N,d=new Le,f=new Le,_=new Le,v=new N,p=new N;function m(A,z,g){c.fromBufferAttribute(n,A),h.fromBufferAttribute(n,z),u.fromBufferAttribute(n,g),d.fromBufferAttribute(r,A),f.fromBufferAttribute(r,z),_.fromBufferAttribute(r,g),h.sub(c),u.sub(c),f.sub(d),_.sub(d);let x=1/(f.x*_.y-_.x*f.y);isFinite(x)&&(v.copy(h).multiplyScalar(_.y).addScaledVector(u,-f.y).multiplyScalar(x),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(x),a[A].add(v),a[z].add(v),a[g].add(v),l[A].add(p),l[z].add(p),l[g].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let A=0,z=T.length;A<z;++A){let g=T[A],x=g.start,k=g.count;for(let F=x,H=x+k;F<H;F+=3)m(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let M=new N,E=new N,C=new N,P=new N;function R(A){C.fromBufferAttribute(s,A),P.copy(C);let z=a[A];M.copy(z),M.sub(C.multiplyScalar(C.dot(z))).normalize(),E.crossVectors(P,z);let x=E.dot(l[A])<0?-1:1;o.setXYZW(A,M.x,M.y,M.z,x)}for(let A=0,z=T.length;A<z;++A){let g=T[A],x=g.start,k=g.count;for(let F=x,H=x+k;F<H;F+=3)R(e.getX(F+0)),R(e.getX(F+1)),R(e.getX(F+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,h=new N,u=new N;if(e)for(let d=0,f=e.count;d<f;d+=3){let _=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,_=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let m=0;m<h;m++)d[_++]=c[f++]}return new mn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ic=new Ft,di=new Po,or=new Ts,sc=new N,lr=new N,cr=new N,hr=new N,Aa=new N,ur=new N,rc=new N,dr=new N,ne=class extends nn{constructor(e=new Wn,t=new es){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ur.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Aa.fromBufferAttribute(u,e),o?ur.addScaledVector(Aa,h):ur.addScaledVector(Aa.sub(t),h))}t.add(ur)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere),or.applyMatrix4(r),di.copy(e.ray).recast(e.near),!(or.containsPoint(di.origin)===!1&&(di.intersectSphere(or,sc)===null||di.origin.distanceToSquared(sc)>(e.far-e.near)**2))&&(ic.copy(r).invert(),di.copy(e.ray).applyMatrix4(ic),!(n.boundingBox!==null&&di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,di)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){let p=d[_],m=o[p.materialIndex],T=Math.max(p.start,f.start),M=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let E=T,C=M;E<C;E+=3){let P=a.getX(E),R=a.getX(E+1),A=a.getX(E+2);s=fr(this,m,e,n,c,h,u,P,R,A),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let _=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let p=_,m=v;p<m;p+=3){let T=a.getX(p),M=a.getX(p+1),E=a.getX(p+2);s=fr(this,o,e,n,c,h,u,T,M,E),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){let p=d[_],m=o[p.materialIndex],T=Math.max(p.start,f.start),M=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let E=T,C=M;E<C;E+=3){let P=E,R=E+1,A=E+2;s=fr(this,m,e,n,c,h,u,P,R,A),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let _=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let p=_,m=v;p<m;p+=3){let T=p,M=p+1,E=p+2;s=fr(this,o,e,n,c,h,u,T,M,E),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Ju(i,e,t,n,s,r,o,a){let l;if(e.side===jt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===rn,a),l===null)return null;dr.copy(a),dr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(dr);return c<t.near||c>t.far?null:{distance:c,point:dr.clone(),object:i}}function fr(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,lr),i.getVertexPosition(l,cr),i.getVertexPosition(c,hr);let h=Ju(i,e,t,n,lr,cr,hr,rc);if(h){let u=new N;yi.getBarycoord(rc,lr,cr,hr,u),s&&(h.uv=yi.getInterpolatedAttribute(s,a,l,c,u,new Le)),r&&(h.uv1=yi.getInterpolatedAttribute(r,a,l,c,u,new Le)),o&&(h.normal=yi.getInterpolatedAttribute(o,a,l,c,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new N,materialIndex:0};yi.getNormal(lr,cr,hr,d.normal),h.face=d,h.barycoord=u}return h}var Ie=class i extends Wn{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,s,o,2),_("x","z","y",1,-1,e,n,-t,s,o,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new sn(c,3)),this.setAttribute("normal",new sn(h,3)),this.setAttribute("uv",new sn(u,2));function _(v,p,m,T,M,E,C,P,R,A,z){let g=E/R,x=C/A,k=E/2,F=C/2,H=P/2,X=R+1,L=A+1,Y=0,q=0,de=new N;for(let ae=0;ae<L;ae++){let re=ae*x-F;for(let Je=0;Je<X;Je++){let ze=Je*g-k;de[v]=ze*T,de[p]=re*M,de[m]=H,c.push(de.x,de.y,de.z),de[v]=0,de[p]=0,de[m]=P>0?1:-1,h.push(de.x,de.y,de.z),u.push(Je/R),u.push(1-ae/A),Y+=1}}for(let ae=0;ae<A;ae++)for(let re=0;re<R;re++){let Je=d+re+X*ae,ze=d+re+X*(ae+1),G=d+(re+1)+X*(ae+1),Z=d+(re+1)+X*ae;l.push(Je,ze,Z),l.push(ze,G,Z),q+=6}a.addGroup(f,q,z),f+=q,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ts(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function en(i){let e={};for(let t=0;t<i.length;t++){let n=ts(i[t]);for(let s in n)e[s]=n[s]}return e}function $u(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function nh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}var Ku={clone:ts,merge:en},ju=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Cn=class extends ni{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ju,this.fragmentShader=Qu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ts(e.uniforms),this.uniformsGroups=$u(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Or=class extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=zn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},jn=new N,ac=new Le,oc=new Le,Kt=class extends Or{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ss*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(_s*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ss*2*Math.atan(Math.tan(_s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(jn.x,jn.y).multiplyScalar(-e/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(jn.x,jn.y).multiplyScalar(-e/jn.z)}getViewSize(e,t){return this.getViewBounds(e,ac,oc),t.subVectors(oc,ac)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(_s*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Hi=-90,Bi=1,Io=class extends nn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Kt(Hi,Bi,e,t);s.layers=this.layers,this.add(s);let r=new Kt(Hi,Bi,e,t);r.layers=this.layers,this.add(r);let o=new Kt(Hi,Bi,e,t);o.layers=this.layers,this.add(o);let a=new Kt(Hi,Bi,e,t);a.layers=this.layers,this.add(a);let l=new Kt(Hi,Bi,e,t);l.layers=this.layers,this.add(l);let c=new Kt(Hi,Bi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Hr=class extends an{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:$i,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Do=class extends Vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Hr(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:En}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ie(5,5,5),r=new Cn({name:"CubemapFromEquirect",uniforms:ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jt,blending:Qn});r.uniforms.tEquirect.value=t;let o=new ne(s,r),a=t.minFilter;return t.minFilter===vi&&(t.minFilter=En),new Io(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Ca=new N,ed=new N,td=new st,Hn=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ca.subVectors(n,t).cross(ed.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ca),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||td.getNormalMatrix(e),s=this.coplanarPoint(Ca).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},fi=new Ts,pr=new N,Rs=class{constructor(e=new Hn,t=new Hn,n=new Hn,s=new Hn,r=new Hn,o=new Hn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=zn){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],_=s[9],v=s[10],p=s[11],m=s[12],T=s[13],M=s[14],E=s[15];if(n[0].setComponents(l-r,d-c,p-f,E-m).normalize(),n[1].setComponents(l+r,d+c,p+f,E+m).normalize(),n[2].setComponents(l+o,d+h,p+_,E+T).normalize(),n[3].setComponents(l-o,d-h,p-_,E-T).normalize(),n[4].setComponents(l-a,d-u,p-v,E-M).normalize(),t===zn)n[5].setComponents(l+a,d+u,p+v,E+M).normalize();else if(t===Dr)n[5].setComponents(a,u,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(e){return fi.center.set(0,0,0),fi.radius=.7071067811865476,fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(pr.x=s.normal.x>0?e.max.x:e.min.x,pr.y=s.normal.y>0?e.max.y:e.min.y,pr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(pr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ih(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function nd(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<u.length;f++){let _=u[d],v=u[f];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,_=u.length;f<_;f++){let v=u[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var gn=class i extends Wn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,f=[],_=[],v=[],p=[];for(let m=0;m<h;m++){let T=m*d-o;for(let M=0;M<c;M++){let E=M*u-r;_.push(E,-T,0),v.push(0,0,1),p.push(M/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let T=0;T<a;T++){let M=T+c*m,E=T+c*(m+1),C=T+1+c*(m+1),P=T+1+c*m;f.push(M,E,P),f.push(E,C,P)}this.setIndex(f),this.setAttribute("position",new sn(_,3)),this.setAttribute("normal",new sn(v,3)),this.setAttribute("uv",new sn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},id=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,rd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ad=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,od=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ld=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ud=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,dd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,md=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_d=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Md=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ed=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Td=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Rd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ad=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Cd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Id=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ld="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ud=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Fd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Od=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Bd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Jd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$d=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ef=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,af=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,of=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,df=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ff=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_f=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,bf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Mf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ef=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Rf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Af=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,If=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Df=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Lf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Uf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ff=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Of=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Bf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Gf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Vf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Yf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$f=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,e0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,t0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,n0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,i0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,s0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,h0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,u0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,d0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,f0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,p0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,g0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,y0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,M0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,S0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,w0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,A0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,D0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,L0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,N0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,F0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,it={alphahash_fragment:id,alphahash_pars_fragment:sd,alphamap_fragment:rd,alphamap_pars_fragment:ad,alphatest_fragment:od,alphatest_pars_fragment:ld,aomap_fragment:cd,aomap_pars_fragment:hd,batching_pars_vertex:ud,batching_vertex:dd,begin_vertex:fd,beginnormal_vertex:pd,bsdfs:md,iridescence_fragment:gd,bumpmap_pars_fragment:_d,clipping_planes_fragment:yd,clipping_planes_pars_fragment:xd,clipping_planes_pars_vertex:bd,clipping_planes_vertex:vd,color_fragment:Md,color_pars_fragment:Ed,color_pars_vertex:Sd,color_vertex:wd,common:Td,cube_uv_reflection_fragment:Rd,defaultnormal_vertex:Ad,displacementmap_pars_vertex:Cd,displacementmap_vertex:Pd,emissivemap_fragment:Id,emissivemap_pars_fragment:Dd,colorspace_fragment:Ld,colorspace_pars_fragment:Ud,envmap_fragment:Nd,envmap_common_pars_fragment:Fd,envmap_pars_fragment:kd,envmap_pars_vertex:Od,envmap_physical_pars_fragment:Jd,envmap_vertex:Hd,fog_vertex:Bd,fog_pars_vertex:zd,fog_fragment:Gd,fog_pars_fragment:Vd,gradientmap_pars_fragment:Wd,lightmap_pars_fragment:qd,lights_lambert_fragment:Xd,lights_lambert_pars_fragment:Yd,lights_pars_begin:Zd,lights_toon_fragment:$d,lights_toon_pars_fragment:Kd,lights_phong_fragment:jd,lights_phong_pars_fragment:Qd,lights_physical_fragment:ef,lights_physical_pars_fragment:tf,lights_fragment_begin:nf,lights_fragment_maps:sf,lights_fragment_end:rf,logdepthbuf_fragment:af,logdepthbuf_pars_fragment:of,logdepthbuf_pars_vertex:lf,logdepthbuf_vertex:cf,map_fragment:hf,map_pars_fragment:uf,map_particle_fragment:df,map_particle_pars_fragment:ff,metalnessmap_fragment:pf,metalnessmap_pars_fragment:mf,morphinstance_vertex:gf,morphcolor_vertex:_f,morphnormal_vertex:yf,morphtarget_pars_vertex:xf,morphtarget_vertex:bf,normal_fragment_begin:vf,normal_fragment_maps:Mf,normal_pars_fragment:Ef,normal_pars_vertex:Sf,normal_vertex:wf,normalmap_pars_fragment:Tf,clearcoat_normal_fragment_begin:Rf,clearcoat_normal_fragment_maps:Af,clearcoat_pars_fragment:Cf,iridescence_pars_fragment:Pf,opaque_fragment:If,packing:Df,premultiplied_alpha_fragment:Lf,project_vertex:Uf,dithering_fragment:Nf,dithering_pars_fragment:Ff,roughnessmap_fragment:kf,roughnessmap_pars_fragment:Of,shadowmap_pars_fragment:Hf,shadowmap_pars_vertex:Bf,shadowmap_vertex:zf,shadowmask_pars_fragment:Gf,skinbase_vertex:Vf,skinning_pars_vertex:Wf,skinning_vertex:qf,skinnormal_vertex:Xf,specularmap_fragment:Yf,specularmap_pars_fragment:Zf,tonemapping_fragment:Jf,tonemapping_pars_fragment:$f,transmission_fragment:Kf,transmission_pars_fragment:jf,uv_pars_fragment:Qf,uv_pars_vertex:e0,uv_vertex:t0,worldpos_vertex:n0,background_vert:i0,background_frag:s0,backgroundCube_vert:r0,backgroundCube_frag:a0,cube_vert:o0,cube_frag:l0,depth_vert:c0,depth_frag:h0,distanceRGBA_vert:u0,distanceRGBA_frag:d0,equirect_vert:f0,equirect_frag:p0,linedashed_vert:m0,linedashed_frag:g0,meshbasic_vert:_0,meshbasic_frag:y0,meshlambert_vert:x0,meshlambert_frag:b0,meshmatcap_vert:v0,meshmatcap_frag:M0,meshnormal_vert:E0,meshnormal_frag:S0,meshphong_vert:w0,meshphong_frag:T0,meshphysical_vert:R0,meshphysical_frag:A0,meshtoon_vert:C0,meshtoon_frag:P0,points_vert:I0,points_frag:D0,shadow_vert:L0,shadow_frag:U0,sprite_vert:N0,sprite_frag:F0},De={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Rn={basic:{uniforms:en([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:en([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new qe(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:en([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:en([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:en([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new qe(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:en([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:en([De.points,De.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:en([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:en([De.common,De.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:en([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:en([De.sprite,De.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:en([De.common,De.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:en([De.lights,De.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Rn.physical={uniforms:en([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};var mr={r:0,b:0,g:0},pi=new An,k0=new Ft;function O0(i,e,t,n,s,r,o){let a=new qe(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function _(T){let M=T.isScene===!0?T.background:null;return M&&M.isTexture&&(M=(T.backgroundBlurriness>0?t:e).get(M)),M}function v(T){let M=!1,E=_(T);E===null?m(a,l):E&&E.isColor&&(m(E,1),M=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(T,M){let E=_(M);E&&(E.isCubeTexture||E.mapping===$r)?(h===void 0&&(h=new ne(new Ie(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:ts(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,P,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),pi.copy(M.backgroundRotation),pi.x*=-1,pi.y*=-1,pi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(k0.makeRotationFromEuler(pi)),h.material.toneMapped=xt.getTransfer(E.colorSpace)!==Lt,(u!==E||d!==E.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,f=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new ne(new gn(2,2),new Cn({name:"BackgroundMaterial",uniforms:ts(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=xt.getTransfer(E.colorSpace)!==Lt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,f=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function m(T,M){T.getRGB(mr,nh(i)),n.buffers.color.setClear(mr.r,mr.g,mr.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(T,M=1){a.set(T),l=M,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,m(a,l)},render:v,addToRenderList:p}}function H0(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(g,x,k,F,H){let X=!1,L=u(F,k,x);r!==L&&(r=L,c(r.object)),X=f(g,F,k,H),X&&_(g,F,k,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,E(g,x,k,F),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return i.createVertexArray()}function c(g){return i.bindVertexArray(g)}function h(g){return i.deleteVertexArray(g)}function u(g,x,k){let F=k.wireframe===!0,H=n[g.id];H===void 0&&(H={},n[g.id]=H);let X=H[x.id];X===void 0&&(X={},H[x.id]=X);let L=X[F];return L===void 0&&(L=d(l()),X[F]=L),L}function d(g){let x=[],k=[],F=[];for(let H=0;H<t;H++)x[H]=0,k[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:x,enabledAttributes:k,attributeDivisors:F,object:g,attributes:{},index:null}}function f(g,x,k,F){let H=r.attributes,X=x.attributes,L=0,Y=k.getAttributes();for(let q in Y)if(Y[q].location>=0){let ae=H[q],re=X[q];if(re===void 0&&(q==="instanceMatrix"&&g.instanceMatrix&&(re=g.instanceMatrix),q==="instanceColor"&&g.instanceColor&&(re=g.instanceColor)),ae===void 0||ae.attribute!==re||re&&ae.data!==re.data)return!0;L++}return r.attributesNum!==L||r.index!==F}function _(g,x,k,F){let H={},X=x.attributes,L=0,Y=k.getAttributes();for(let q in Y)if(Y[q].location>=0){let ae=X[q];ae===void 0&&(q==="instanceMatrix"&&g.instanceMatrix&&(ae=g.instanceMatrix),q==="instanceColor"&&g.instanceColor&&(ae=g.instanceColor));let re={};re.attribute=ae,ae&&ae.data&&(re.data=ae.data),H[q]=re,L++}r.attributes=H,r.attributesNum=L,r.index=F}function v(){let g=r.newAttributes;for(let x=0,k=g.length;x<k;x++)g[x]=0}function p(g){m(g,0)}function m(g,x){let k=r.newAttributes,F=r.enabledAttributes,H=r.attributeDivisors;k[g]=1,F[g]===0&&(i.enableVertexAttribArray(g),F[g]=1),H[g]!==x&&(i.vertexAttribDivisor(g,x),H[g]=x)}function T(){let g=r.newAttributes,x=r.enabledAttributes;for(let k=0,F=x.length;k<F;k++)x[k]!==g[k]&&(i.disableVertexAttribArray(k),x[k]=0)}function M(g,x,k,F,H,X,L){L===!0?i.vertexAttribIPointer(g,x,k,H,X):i.vertexAttribPointer(g,x,k,F,H,X)}function E(g,x,k,F){v();let H=F.attributes,X=k.getAttributes(),L=x.defaultAttributeValues;for(let Y in X){let q=X[Y];if(q.location>=0){let de=H[Y];if(de===void 0&&(Y==="instanceMatrix"&&g.instanceMatrix&&(de=g.instanceMatrix),Y==="instanceColor"&&g.instanceColor&&(de=g.instanceColor)),de!==void 0){let ae=de.normalized,re=de.itemSize,Je=e.get(de);if(Je===void 0)continue;let ze=Je.buffer,G=Je.type,Z=Je.bytesPerElement,Se=G===i.INT||G===i.UNSIGNED_INT||de.gpuType===fl;if(de.isInterleavedBufferAttribute){let se=de.data,Re=se.stride,we=de.offset;if(se.isInstancedInterleavedBuffer){for(let Ze=0;Ze<q.locationSize;Ze++)m(q.location+Ze,se.meshPerAttribute);g.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ze=0;Ze<q.locationSize;Ze++)p(q.location+Ze);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let Ze=0;Ze<q.locationSize;Ze++)M(q.location+Ze,re/q.locationSize,G,ae,Re*Z,(we+re/q.locationSize*Ze)*Z,Se)}else{if(de.isInstancedBufferAttribute){for(let se=0;se<q.locationSize;se++)m(q.location+se,de.meshPerAttribute);g.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let se=0;se<q.locationSize;se++)p(q.location+se);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let se=0;se<q.locationSize;se++)M(q.location+se,re/q.locationSize,G,ae,re*Z,re/q.locationSize*se*Z,Se)}}else if(L!==void 0){let ae=L[Y];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(q.location,ae);break;case 3:i.vertexAttrib3fv(q.location,ae);break;case 4:i.vertexAttrib4fv(q.location,ae);break;default:i.vertexAttrib1fv(q.location,ae)}}}}T()}function C(){A();for(let g in n){let x=n[g];for(let k in x){let F=x[k];for(let H in F)h(F[H].object),delete F[H];delete x[k]}delete n[g]}}function P(g){if(n[g.id]===void 0)return;let x=n[g.id];for(let k in x){let F=x[k];for(let H in F)h(F[H].object),delete F[H];delete x[k]}delete n[g.id]}function R(g){for(let x in n){let k=n[x];if(k[g.id]===void 0)continue;let F=k[g.id];for(let H in F)h(F[H].object),delete F[H];delete k[g.id]}}function A(){z(),o=!0,r!==s&&(r=s,c(r.object))}function z(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:z,dispose:C,releaseStatesOfGeometry:P,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:p,disableUnusedAttributes:T}}function B0(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let _=0;_<u;_++)f+=h[_];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)o(c[_],h[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let _=0;for(let v=0;v<u;v++)_+=h[v];for(let v=0;v<d.length;v++)t.update(_,n,d[v])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function z0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Sn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let A=R===Us&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Gn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Bn&&!A)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){let R=e.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:T,maxVaryings:M,maxFragmentUniforms:E,vertexTextures:C,maxSamples:P}}function G0(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Hn,a=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let _=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||_===null||_.length===0||r&&!p)r?h(null):c();else{let T=r?0:n,M=T*4,E=m.clippingState||null;l.value=E,E=h(_,d,M,f);for(let C=0;C!==M;++C)E[C]=t[C];m.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,_){let v=u!==null?u.length:0,p=null;if(v!==0){if(p=l.value,_!==!0||p===null){let m=f+v*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(p===null||p.length<m)&&(p=new Float32Array(m));for(let M=0,E=f;M!==v;++M,E+=4)o.copy(u[M]).applyMatrix4(T,a),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function V0(i){let e=new WeakMap;function t(o,a){return a===$a?o.mapping=$i:a===Ka&&(o.mapping=Ki),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===$a||a===Ka)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Do(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Br=class extends Or{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Vi=4,lc=[.125,.215,.35,.446,.526,.582],xi=20,Pa=new Br,cc=new qe,Ia=null,Da=0,La=0,Ua=!1,gi=(1+Math.sqrt(5))/2,zi=1/gi,hc=[new N(-gi,zi,0),new N(gi,zi,0),new N(-zi,0,gi),new N(zi,0,gi),new N(0,gi,-zi),new N(0,gi,zi),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],Pn=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Ia=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),La=this._renderer.getActiveMipmapLevel(),Ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ia,Da,La),this._renderer.xr.enabled=Ua,e.scissorTest=!1,gr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$i||e.mapping===Ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ia=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),La=this._renderer.getActiveMipmapLevel(),Ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:En,minFilter:En,generateMipmaps:!1,type:Us,format:Sn,colorSpace:li,depthBuffer:!1},s=uc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uc(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=W0(r)),this._blurMaterial=q0(r,e,t)}return s}_compileMaterial(e){let t=new ne(this._lodPlanes[0],e);this._renderer.compile(t,Pa)}_sceneToCubeUV(e,t,n,s){let a=new Kt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(cc),h.toneMapping=ei,h.autoClear=!1;let f=new es({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),_=new ne(new Ie,f),v=!1,p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,v=!0):(f.color.copy(cc),v=!0);for(let m=0;m<6;m++){let T=m%3;T===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):T===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let M=this._cubeSize;gr(s,T*M,m>2?M:0,M,M),h.setRenderTarget(s),v&&h.render(_,a),h.render(e,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===$i||e.mapping===Ki;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dc());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ne(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;gr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Pa)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=hc[(s-r-1)%hc.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ne(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*xi-1),v=r/_,p=isFinite(r)?1+Math.floor(h*v):xi;p>xi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${xi}`);let m=[],T=0;for(let R=0;R<xi;++R){let A=R/v,z=Math.exp(-A*A/2);m.push(z),R===0?T+=z:R<p&&(T+=2*z)}for(let R=0;R<m.length;R++)m[R]=m[R]/T;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:M}=this;d.dTheta.value=_,d.mipInt.value=M-n;let E=this._sizeLods[s],C=3*E*(s>M-Vi?s-M+Vi:0),P=4*(this._cubeSize-E);gr(t,C,P,3*E,2*E),l.setRenderTarget(t),l.render(u,Pa)}};function W0(i){let e=[],t=[],n=[],s=i,r=i-Vi+1+lc.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Vi?l=lc[o-i+Vi-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,v=3,p=2,m=1,T=new Float32Array(v*_*f),M=new Float32Array(p*_*f),E=new Float32Array(m*_*f);for(let P=0;P<f;P++){let R=P%3*2/3-1,A=P>2?0:-1,z=[R,A,0,R+2/3,A,0,R+2/3,A+1,0,R,A,0,R+2/3,A+1,0,R,A+1,0];T.set(z,v*_*P),M.set(d,p*_*P);let g=[P,P,P,P,P,P];E.set(g,m*_*P)}let C=new Wn;C.setAttribute("position",new mn(T,v)),C.setAttribute("uv",new mn(M,p)),C.setAttribute("faceIndex",new mn(E,m)),e.push(C),s>Vi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function uc(i,e,t){let n=new Vn(i,e,t);return n.texture.mapping=$r,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function gr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function q0(i,e,t){let n=new Float32Array(xi),s=new N(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function dc(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function fc(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function vl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function X0(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===$a||l===Ka,h=l===$i||l===Ki;if(c||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Pn(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new Pn(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Y0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Rr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Z0(i,e,t,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let _ in d.attributes)e.remove(d.attributes[_]);for(let _ in d.morphAttributes){let v=d.morphAttributes[_];for(let p=0,m=v.length;p<m;p++)e.remove(v[p])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let _ in d)e.update(d[_],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let _ in f){let v=f[_];for(let p=0,m=v.length;p<m;p++)e.update(v[p],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,_=u.attributes.position,v=0;if(f!==null){let T=f.array;v=f.version;for(let M=0,E=T.length;M<E;M+=3){let C=T[M+0],P=T[M+1],R=T[M+2];d.push(C,P,P,R,R,C)}}else if(_!==void 0){let T=_.array;v=_.version;for(let M=0,E=T.length/3-1;M<E;M+=3){let C=M+0,P=M+1,R=M+2;d.push(C,P,P,R,R,C)}}else return;let p=new(eh(d)?kr:Fr)(d,1);p.version=v;let m=r.get(u);m&&e.remove(m),r.set(u,p)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function J0(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,_){_!==0&&(i.drawElementsInstanced(n,f,r,d*o,_),t.update(f,n,_))}function h(d,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,_);let p=0;for(let m=0;m<_;m++)p+=f[m];t.update(p,n,1)}function u(d,f,_,v){if(_===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],v[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,_);let m=0;for(let T=0;T<_;T++)m+=f[T];for(let T=0;T<v.length;T++)t.update(m,n,v[T])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function $0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function K0(i,e,t){let n=new WeakMap,s=new Mt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let z=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",z)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],T=a.morphAttributes.color||[],M=0;f===!0&&(M=1),_===!0&&(M=2),v===!0&&(M=3);let E=a.attributes.position.count*M,C=1;E>e.maxTextureSize&&(C=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let P=new Float32Array(E*C*4*u),R=new Ur(P,E,C,u);R.type=Bn,R.needsUpdate=!0;let A=M*4;for(let g=0;g<u;g++){let x=p[g],k=m[g],F=T[g],H=E*C*4*g;for(let X=0;X<x.count;X++){let L=X*A;f===!0&&(s.fromBufferAttribute(x,X),P[H+L+0]=s.x,P[H+L+1]=s.y,P[H+L+2]=s.z,P[H+L+3]=0),_===!0&&(s.fromBufferAttribute(k,X),P[H+L+4]=s.x,P[H+L+5]=s.y,P[H+L+6]=s.z,P[H+L+7]=0),v===!0&&(s.fromBufferAttribute(F,X),P[H+L+8]=s.x,P[H+L+9]=s.y,P[H+L+10]=s.z,P[H+L+11]=F.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new Le(E,C)},n.set(a,d),a.addEventListener("dispose",z)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let _=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function j0(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var zr=class extends an{constructor(e,t,n,s,r,o,a,l,c,h=Xi){if(h!==Xi&&h!==Qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Xi&&(n=Mi),n===void 0&&h===Qi&&(n=ji),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:pn,this.minFilter=l!==void 0?l:pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},sh=new an,pc=new zr(1,1),rh=new Ur,ah=new Co,oh=new Hr,mc=[],gc=[],_c=new Float32Array(16),yc=new Float32Array(9),xc=new Float32Array(4);function ss(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=mc[s];if(r===void 0&&(r=new Float32Array(s),mc[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function jr(i,e){let t=gc[e];t===void 0&&(t=new Int32Array(e),gc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Q0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ep(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2fv(this.addr,e),Wt(t,e)}}function tp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;i.uniform3fv(this.addr,e),Wt(t,e)}}function np(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4fv(this.addr,e),Wt(t,e)}}function ip(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;xc.set(n),i.uniformMatrix2fv(this.addr,!1,xc),Wt(t,n)}}function sp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;yc.set(n),i.uniformMatrix3fv(this.addr,!1,yc),Wt(t,n)}}function rp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;_c.set(n),i.uniformMatrix4fv(this.addr,!1,_c),Wt(t,n)}}function ap(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function op(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2iv(this.addr,e),Wt(t,e)}}function lp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3iv(this.addr,e),Wt(t,e)}}function cp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4iv(this.addr,e),Wt(t,e)}}function hp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function up(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2uiv(this.addr,e),Wt(t,e)}}function dp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3uiv(this.addr,e),Wt(t,e)}}function fp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4uiv(this.addr,e),Wt(t,e)}}function pp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(pc.compareFunction=Qc,r=pc):r=sh,t.setTexture2D(e||r,s)}function mp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||ah,s)}function gp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||oh,s)}function _p(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||rh,s)}function yp(i){switch(i){case 5126:return Q0;case 35664:return ep;case 35665:return tp;case 35666:return np;case 35674:return ip;case 35675:return sp;case 35676:return rp;case 5124:case 35670:return ap;case 35667:case 35671:return op;case 35668:case 35672:return lp;case 35669:case 35673:return cp;case 5125:return hp;case 36294:return up;case 36295:return dp;case 36296:return fp;case 35678:case 36198:case 36298:case 36306:case 35682:return pp;case 35679:case 36299:case 36307:return mp;case 35680:case 36300:case 36308:case 36293:return gp;case 36289:case 36303:case 36311:case 36292:return _p}}function xp(i,e){i.uniform1fv(this.addr,e)}function bp(i,e){let t=ss(e,this.size,2);i.uniform2fv(this.addr,t)}function vp(i,e){let t=ss(e,this.size,3);i.uniform3fv(this.addr,t)}function Mp(i,e){let t=ss(e,this.size,4);i.uniform4fv(this.addr,t)}function Ep(i,e){let t=ss(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Sp(i,e){let t=ss(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function wp(i,e){let t=ss(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Tp(i,e){i.uniform1iv(this.addr,e)}function Rp(i,e){i.uniform2iv(this.addr,e)}function Ap(i,e){i.uniform3iv(this.addr,e)}function Cp(i,e){i.uniform4iv(this.addr,e)}function Pp(i,e){i.uniform1uiv(this.addr,e)}function Ip(i,e){i.uniform2uiv(this.addr,e)}function Dp(i,e){i.uniform3uiv(this.addr,e)}function Lp(i,e){i.uniform4uiv(this.addr,e)}function Up(i,e,t){let n=this.cache,s=e.length,r=jr(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||sh,r[o])}function Np(i,e,t){let n=this.cache,s=e.length,r=jr(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||ah,r[o])}function Fp(i,e,t){let n=this.cache,s=e.length,r=jr(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||oh,r[o])}function kp(i,e,t){let n=this.cache,s=e.length,r=jr(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||rh,r[o])}function Op(i){switch(i){case 5126:return xp;case 35664:return bp;case 35665:return vp;case 35666:return Mp;case 35674:return Ep;case 35675:return Sp;case 35676:return wp;case 5124:case 35670:return Tp;case 35667:case 35671:return Rp;case 35668:case 35672:return Ap;case 35669:case 35673:return Cp;case 5125:return Pp;case 36294:return Ip;case 36295:return Dp;case 36296:return Lp;case 35678:case 36198:case 36298:case 36306:case 35682:return Up;case 35679:case 36299:case 36307:return Np;case 35680:case 36300:case 36308:case 36293:return Fp;case 36289:case 36303:case 36311:case 36292:return kp}}var Lo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=yp(t.type)}},Uo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Op(t.type)}},No=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Na=/(\w+)(\])?(\[|\.)?/g;function bc(i,e){i.seq.push(e),i.map[e.id]=e}function Hp(i,e,t){let n=i.name,s=n.length;for(Na.lastIndex=0;;){let r=Na.exec(n),o=Na.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){bc(t,c===void 0?new Lo(a,i,e):new Uo(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new No(a),bc(t,u)),t=u}}}var Zi=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Hp(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function vc(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Bp=37297,zp=0;function Gp(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Vp(i){let e=xt.getPrimaries(xt.workingColorSpace),t=xt.getPrimaries(i),n;switch(e===t?n="":e===Ir&&t===Pr?n="LinearDisplayP3ToLinearSRGB":e===Pr&&t===Ir&&(n="LinearSRGBToLinearDisplayP3"),i){case li:case Kr:return[n,"LinearTransferOETF"];case Rt:case xl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Mc(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Gp(i.getShaderSource(e),o)}else return s}function Wp(i,e){let t=Vp(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function qp(i,e){let t;switch(e){case eu:t="Linear";break;case tu:t="Reinhard";break;case nu:t="Cineon";break;case Ti:t="ACESFilmic";break;case su:t="AgX";break;case ru:t="Neutral";break;case iu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var _r=new N;function Xp(){xt.getLuminanceCoefficients(_r);let i=_r.x.toFixed(4),e=_r.y.toFixed(4),t=_r.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gs).join(`
`)}function Zp(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Jp(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function gs(i){return i!==""}function Ec(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var $p=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fo(i){return i.replace($p,jp)}var Kp=new Map;function jp(i,e){let t=it[e];if(t===void 0){let n=Kp.get(e);if(n!==void 0)t=it[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Fo(t)}var Qp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wc(i){return i.replace(Qp,em)}function em(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Tc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Hc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===dl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===On&&(e="SHADOWMAP_TYPE_VSM"),e}function nm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case $i:case Ki:e="ENVMAP_TYPE_CUBE";break;case $r:e="ENVMAP_TYPE_CUBE_UV";break}return e}function im(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ki:e="ENVMAP_MODE_REFRACTION";break}return e}function sm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Bc:e="ENVMAP_BLENDING_MULTIPLY";break;case jh:e="ENVMAP_BLENDING_MIX";break;case Qh:e="ENVMAP_BLENDING_ADD";break}return e}function rm(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function am(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=tm(t),c=nm(t),h=im(t),u=sm(t),d=rm(t),f=Yp(t),_=Zp(r),v=s.createProgram(),p,m,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(gs).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(gs).join(`
`),m.length>0&&(m+=`
`)):(p=[Tc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),m=[Tc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ei?"#define TONE_MAPPING":"",t.toneMapping!==ei?it.tonemapping_pars_fragment:"",t.toneMapping!==ei?qp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,Wp("linearToOutputTexel",t.outputColorSpace),Xp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gs).join(`
`)),o=Fo(o),o=Ec(o,t),o=Sc(o,t),a=Fo(a),a=Ec(a,t),a=Sc(a,t),o=wc(o),a=wc(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Vl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=T+p+o,E=T+m+a,C=vc(s,s.VERTEX_SHADER,M),P=vc(s,s.FRAGMENT_SHADER,E);s.attachShader(v,C),s.attachShader(v,P),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(x){if(i.debug.checkShaderErrors){let k=s.getProgramInfoLog(v).trim(),F=s.getShaderInfoLog(C).trim(),H=s.getShaderInfoLog(P).trim(),X=!0,L=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,C,P);else{let Y=Mc(s,C,"vertex"),q=Mc(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+x.name+`
Material Type: `+x.type+`

Program Info Log: `+k+`
`+Y+`
`+q)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(F===""||H==="")&&(L=!1);L&&(x.diagnostics={runnable:X,programLog:k,vertexShader:{log:F,prefix:p},fragmentShader:{log:H,prefix:m}})}s.deleteShader(C),s.deleteShader(P),A=new Zi(s,v),z=Jp(s,v)}let A;this.getUniforms=function(){return A===void 0&&R(this),A};let z;this.getAttributes=function(){return z===void 0&&R(this),z};let g=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=s.getProgramParameter(v,Bp)),g},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zp++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=P,this}var om=0,ko=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Oo(e),t.set(e,n)),n}},Oo=class{constructor(e){this.id=om++,this.code=e,this.usedTimes=0}};function lm(i,e,t,n,s,r,o){let a=new Nr,l=new ko,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures,_=s.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(g){return c.add(g),g===0?"uv":`uv${g}`}function m(g,x,k,F,H){let X=F.fog,L=H.geometry,Y=g.isMeshStandardMaterial?F.environment:null,q=(g.isMeshStandardMaterial?t:e).get(g.envMap||Y),de=q&&q.mapping===$r?q.image.height:null,ae=v[g.type];g.precision!==null&&(_=s.getMaxPrecision(g.precision),_!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",_,"instead."));let re=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,Je=re!==void 0?re.length:0,ze=0;L.morphAttributes.position!==void 0&&(ze=1),L.morphAttributes.normal!==void 0&&(ze=2),L.morphAttributes.color!==void 0&&(ze=3);let G,Z,Se,se;if(ae){let Ke=Rn[ae];G=Ke.vertexShader,Z=Ke.fragmentShader}else G=g.vertexShader,Z=g.fragmentShader,l.update(g),Se=l.getVertexShaderID(g),se=l.getFragmentShaderID(g);let Re=i.getRenderTarget(),we=H.isInstancedMesh===!0,Ze=H.isBatchedMesh===!0,Ge=!!g.map,$=!!g.matcap,w=!!q,Me=!!g.aoMap,oe=!!g.lightMap,ee=!!g.bumpMap,ie=!!g.normalMap,He=!!g.displacementMap,xe=!!g.emissiveMap,S=!!g.metalnessMap,y=!!g.roughnessMap,B=g.anisotropy>0,J=g.clearcoat>0,K=g.dispersion>0,W=g.iridescence>0,ke=g.sheen>0,fe=g.transmission>0,pe=B&&!!g.anisotropyMap,Ne=J&&!!g.clearcoatMap,ge=J&&!!g.clearcoatNormalMap,ve=J&&!!g.clearcoatRoughnessMap,$e=W&&!!g.iridescenceMap,Ce=W&&!!g.iridescenceThicknessMap,me=ke&&!!g.sheenColorMap,et=ke&&!!g.sheenRoughnessMap,Oe=!!g.specularMap,bt=!!g.specularColorMap,I=!!g.specularIntensityMap,le=fe&&!!g.transmissionMap,j=fe&&!!g.thicknessMap,Q=!!g.gradientMap,Ue=!!g.alphaMap,ue=g.alphaTest>0,Fe=!!g.alphaHash,vt=!!g.extensions,at=ei;g.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(at=i.toneMapping);let ft={shaderID:ae,shaderType:g.type,shaderName:g.name,vertexShader:G,fragmentShader:Z,defines:g.defines,customVertexShaderID:Se,customFragmentShaderID:se,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:_,batching:Ze,batchingColor:Ze&&H._colorsTexture!==null,instancing:we,instancingColor:we&&H.instanceColor!==null,instancingMorph:we&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Re===null?i.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:li,alphaToCoverage:!!g.alphaToCoverage,map:Ge,matcap:$,envMap:w,envMapMode:w&&q.mapping,envMapCubeUVHeight:de,aoMap:Me,lightMap:oe,bumpMap:ee,normalMap:ie,displacementMap:f&&He,emissiveMap:xe,normalMapObjectSpace:ie&&g.normalMapType===cu,normalMapTangentSpace:ie&&g.normalMapType===jc,metalnessMap:S,roughnessMap:y,anisotropy:B,anisotropyMap:pe,clearcoat:J,clearcoatMap:Ne,clearcoatNormalMap:ge,clearcoatRoughnessMap:ve,dispersion:K,iridescence:W,iridescenceMap:$e,iridescenceThicknessMap:Ce,sheen:ke,sheenColorMap:me,sheenRoughnessMap:et,specularMap:Oe,specularColorMap:bt,specularIntensityMap:I,transmission:fe,transmissionMap:le,thicknessMap:j,gradientMap:Q,opaque:g.transparent===!1&&g.blending===qi&&g.alphaToCoverage===!1,alphaMap:Ue,alphaTest:ue,alphaHash:Fe,combine:g.combine,mapUv:Ge&&p(g.map.channel),aoMapUv:Me&&p(g.aoMap.channel),lightMapUv:oe&&p(g.lightMap.channel),bumpMapUv:ee&&p(g.bumpMap.channel),normalMapUv:ie&&p(g.normalMap.channel),displacementMapUv:He&&p(g.displacementMap.channel),emissiveMapUv:xe&&p(g.emissiveMap.channel),metalnessMapUv:S&&p(g.metalnessMap.channel),roughnessMapUv:y&&p(g.roughnessMap.channel),anisotropyMapUv:pe&&p(g.anisotropyMap.channel),clearcoatMapUv:Ne&&p(g.clearcoatMap.channel),clearcoatNormalMapUv:ge&&p(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&p(g.clearcoatRoughnessMap.channel),iridescenceMapUv:$e&&p(g.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&p(g.iridescenceThicknessMap.channel),sheenColorMapUv:me&&p(g.sheenColorMap.channel),sheenRoughnessMapUv:et&&p(g.sheenRoughnessMap.channel),specularMapUv:Oe&&p(g.specularMap.channel),specularColorMapUv:bt&&p(g.specularColorMap.channel),specularIntensityMapUv:I&&p(g.specularIntensityMap.channel),transmissionMapUv:le&&p(g.transmissionMap.channel),thicknessMapUv:j&&p(g.thicknessMap.channel),alphaMapUv:Ue&&p(g.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(ie||B),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!L.attributes.uv&&(Ge||Ue),fog:!!X,useFog:g.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:g.flatShading===!0,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:H.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:Je,morphTextureStride:ze,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:at,decodeVideoTexture:Ge&&g.map.isVideoTexture===!0&&xt.getTransfer(g.map.colorSpace)===Lt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===tn,flipSided:g.side===jt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:vt&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&g.extensions.multiDraw===!0||Ze)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return ft.vertexUv1s=c.has(1),ft.vertexUv2s=c.has(2),ft.vertexUv3s=c.has(3),c.clear(),ft}function T(g){let x=[];if(g.shaderID?x.push(g.shaderID):(x.push(g.customVertexShaderID),x.push(g.customFragmentShaderID)),g.defines!==void 0)for(let k in g.defines)x.push(k),x.push(g.defines[k]);return g.isRawShaderMaterial===!1&&(M(x,g),E(x,g),x.push(i.outputColorSpace)),x.push(g.customProgramCacheKey),x.join()}function M(g,x){g.push(x.precision),g.push(x.outputColorSpace),g.push(x.envMapMode),g.push(x.envMapCubeUVHeight),g.push(x.mapUv),g.push(x.alphaMapUv),g.push(x.lightMapUv),g.push(x.aoMapUv),g.push(x.bumpMapUv),g.push(x.normalMapUv),g.push(x.displacementMapUv),g.push(x.emissiveMapUv),g.push(x.metalnessMapUv),g.push(x.roughnessMapUv),g.push(x.anisotropyMapUv),g.push(x.clearcoatMapUv),g.push(x.clearcoatNormalMapUv),g.push(x.clearcoatRoughnessMapUv),g.push(x.iridescenceMapUv),g.push(x.iridescenceThicknessMapUv),g.push(x.sheenColorMapUv),g.push(x.sheenRoughnessMapUv),g.push(x.specularMapUv),g.push(x.specularColorMapUv),g.push(x.specularIntensityMapUv),g.push(x.transmissionMapUv),g.push(x.thicknessMapUv),g.push(x.combine),g.push(x.fogExp2),g.push(x.sizeAttenuation),g.push(x.morphTargetsCount),g.push(x.morphAttributeCount),g.push(x.numDirLights),g.push(x.numPointLights),g.push(x.numSpotLights),g.push(x.numSpotLightMaps),g.push(x.numHemiLights),g.push(x.numRectAreaLights),g.push(x.numDirLightShadows),g.push(x.numPointLightShadows),g.push(x.numSpotLightShadows),g.push(x.numSpotLightShadowsWithMaps),g.push(x.numLightProbes),g.push(x.shadowMapType),g.push(x.toneMapping),g.push(x.numClippingPlanes),g.push(x.numClipIntersection),g.push(x.depthPacking)}function E(g,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),g.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.alphaToCoverage&&a.enable(20),g.push(a.mask)}function C(g){let x=v[g.type],k;if(x){let F=Rn[x];k=Ku.clone(F.uniforms)}else k=g.uniforms;return k}function P(g,x){let k;for(let F=0,H=h.length;F<H;F++){let X=h[F];if(X.cacheKey===x){k=X,++k.usedTimes;break}}return k===void 0&&(k=new am(i,x,g,r),h.push(k)),k}function R(g){if(--g.usedTimes===0){let x=h.indexOf(g);h[x]=h[h.length-1],h.pop(),g.destroy()}}function A(g){l.remove(g)}function z(){l.dispose()}return{getParameters:m,getProgramCacheKey:T,getUniforms:C,acquireProgram:P,releaseProgram:R,releaseShaderCache:A,programs:h,dispose:z}}function cm(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function hm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Rc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ac(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,f,_,v,p){let m=i[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:v,group:p},i[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=_,m.renderOrder=u.renderOrder,m.z=v,m.group=p),e++,m}function a(u,d,f,_,v,p){let m=o(u,d,f,_,v,p);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):t.push(m)}function l(u,d,f,_,v,p){let m=o(u,d,f,_,v,p);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function c(u,d){t.length>1&&t.sort(u||hm),n.length>1&&n.sort(d||Rc),s.length>1&&s.sort(d||Rc)}function h(){for(let u=e,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function um(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Ac,i.set(n,[o])):s>=r.length?(o=new Ac,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function dm(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new qe};break;case"SpotLight":t={position:new N,direction:new N,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function fm(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var pm=0;function mm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function gm(i){let e=new dm,t=fm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let s=new N,r=new Ft,o=new Ft;function a(c){let h=0,u=0,d=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let f=0,_=0,v=0,p=0,m=0,T=0,M=0,E=0,C=0,P=0,R=0;c.sort(mm);for(let z=0,g=c.length;z<g;z++){let x=c[z],k=x.color,F=x.intensity,H=x.distance,X=x.shadow&&x.shadow.map?x.shadow.map.texture:null;if(x.isAmbientLight)h+=k.r*F,u+=k.g*F,d+=k.b*F;else if(x.isLightProbe){for(let L=0;L<9;L++)n.probe[L].addScaledVector(x.sh.coefficients[L],F);R++}else if(x.isDirectionalLight){let L=e.get(x);if(L.color.copy(x.color).multiplyScalar(x.intensity),x.castShadow){let Y=x.shadow,q=t.get(x);q.shadowIntensity=Y.intensity,q.shadowBias=Y.bias,q.shadowNormalBias=Y.normalBias,q.shadowRadius=Y.radius,q.shadowMapSize=Y.mapSize,n.directionalShadow[f]=q,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=x.shadow.matrix,T++}n.directional[f]=L,f++}else if(x.isSpotLight){let L=e.get(x);L.position.setFromMatrixPosition(x.matrixWorld),L.color.copy(k).multiplyScalar(F),L.distance=H,L.coneCos=Math.cos(x.angle),L.penumbraCos=Math.cos(x.angle*(1-x.penumbra)),L.decay=x.decay,n.spot[v]=L;let Y=x.shadow;if(x.map&&(n.spotLightMap[C]=x.map,C++,Y.updateMatrices(x),x.castShadow&&P++),n.spotLightMatrix[v]=Y.matrix,x.castShadow){let q=t.get(x);q.shadowIntensity=Y.intensity,q.shadowBias=Y.bias,q.shadowNormalBias=Y.normalBias,q.shadowRadius=Y.radius,q.shadowMapSize=Y.mapSize,n.spotShadow[v]=q,n.spotShadowMap[v]=X,E++}v++}else if(x.isRectAreaLight){let L=e.get(x);L.color.copy(k).multiplyScalar(F),L.halfWidth.set(x.width*.5,0,0),L.halfHeight.set(0,x.height*.5,0),n.rectArea[p]=L,p++}else if(x.isPointLight){let L=e.get(x);if(L.color.copy(x.color).multiplyScalar(x.intensity),L.distance=x.distance,L.decay=x.decay,x.castShadow){let Y=x.shadow,q=t.get(x);q.shadowIntensity=Y.intensity,q.shadowBias=Y.bias,q.shadowNormalBias=Y.normalBias,q.shadowRadius=Y.radius,q.shadowMapSize=Y.mapSize,q.shadowCameraNear=Y.camera.near,q.shadowCameraFar=Y.camera.far,n.pointShadow[_]=q,n.pointShadowMap[_]=X,n.pointShadowMatrix[_]=x.shadow.matrix,M++}n.point[_]=L,_++}else if(x.isHemisphereLight){let L=e.get(x);L.skyColor.copy(x.color).multiplyScalar(F),L.groundColor.copy(x.groundColor).multiplyScalar(F),n.hemi[m]=L,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=De.LTC_FLOAT_1,n.rectAreaLTC2=De.LTC_FLOAT_2):(n.rectAreaLTC1=De.LTC_HALF_1,n.rectAreaLTC2=De.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let A=n.hash;(A.directionalLength!==f||A.pointLength!==_||A.spotLength!==v||A.rectAreaLength!==p||A.hemiLength!==m||A.numDirectionalShadows!==T||A.numPointShadows!==M||A.numSpotShadows!==E||A.numSpotMaps!==C||A.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=p,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=E+C-P,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=R,A.directionalLength=f,A.pointLength=_,A.spotLength=v,A.rectAreaLength=p,A.hemiLength=m,A.numDirectionalShadows=T,A.numPointShadows=M,A.numSpotShadows=E,A.numSpotMaps=C,A.numLightProbes=R,n.version=pm++)}function l(c,h){let u=0,d=0,f=0,_=0,v=0,p=h.matrixWorldInverse;for(let m=0,T=c.length;m<T;m++){let M=c[m];if(M.isDirectionalLight){let E=n.directional[u];E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),u++}else if(M.isSpotLight){let E=n.spot[f];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),f++}else if(M.isRectAreaLight){let E=n.rectArea[_];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),o.identity(),r.copy(M.matrixWorld),r.premultiply(p),o.extractRotation(r),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){let E=n.point[d];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){let E=n.hemi[v];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:n}}function Cc(i){let e=new gm(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function _m(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Cc(i),e.set(s,[a])):r>=o.length?(a=new Cc(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Ho=class extends ni{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ou,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Bo=class extends ni{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},ym=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function bm(i,e,t){let n=new Rs,s=new Le,r=new Le,o=new Mt,a=new Ho({depthPacking:lu}),l=new Bo,c={},h=t.maxTextureSize,u={[rn]:jt,[jt]:rn,[tn]:tn},d=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:ym,fragmentShader:xm}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let _=new Wn;_.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new ne(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hc;let m=this.type;this.render=function(P,R,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||P.length===0)return;let z=i.getRenderTarget(),g=i.getActiveCubeFace(),x=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Qn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let F=m!==On&&this.type===On,H=m===On&&this.type!==On;for(let X=0,L=P.length;X<L;X++){let Y=P[X],q=Y.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let de=q.getFrameExtents();if(s.multiply(de),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/de.x),s.x=r.x*de.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/de.y),s.y=r.y*de.y,q.mapSize.y=r.y)),q.map===null||F===!0||H===!0){let re=this.type!==On?{minFilter:pn,magFilter:pn}:{};q.map!==null&&q.map.dispose(),q.map=new Vn(s.x,s.y,re),q.map.texture.name=Y.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();let ae=q.getViewportCount();for(let re=0;re<ae;re++){let Je=q.getViewport(re);o.set(r.x*Je.x,r.y*Je.y,r.x*Je.z,r.y*Je.w),k.viewport(o),q.updateMatrices(Y,re),n=q.getFrustum(),E(R,A,q.camera,Y,this.type)}q.isPointLightShadow!==!0&&this.type===On&&T(q,A),q.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(z,g,x)};function T(P,R){let A=e.update(v);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Vn(s.x,s.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(R,null,A,d,v,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(R,null,A,f,v,null)}function M(P,R,A,z){let g=null,x=A.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(x!==void 0)g=x;else if(g=A.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let k=g.uuid,F=R.uuid,H=c[k];H===void 0&&(H={},c[k]=H);let X=H[F];X===void 0&&(X=g.clone(),H[F]=X,R.addEventListener("dispose",C)),g=X}if(g.visible=R.visible,g.wireframe=R.wireframe,z===On?g.side=R.shadowSide!==null?R.shadowSide:R.side:g.side=R.shadowSide!==null?R.shadowSide:u[R.side],g.alphaMap=R.alphaMap,g.alphaTest=R.alphaTest,g.map=R.map,g.clipShadows=R.clipShadows,g.clippingPlanes=R.clippingPlanes,g.clipIntersection=R.clipIntersection,g.displacementMap=R.displacementMap,g.displacementScale=R.displacementScale,g.displacementBias=R.displacementBias,g.wireframeLinewidth=R.wireframeLinewidth,g.linewidth=R.linewidth,A.isPointLight===!0&&g.isMeshDistanceMaterial===!0){let k=i.properties.get(g);k.light=A}return g}function E(P,R,A,z,g){if(P.visible===!1)return;if(P.layers.test(R.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&g===On)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,P.matrixWorld);let F=e.update(P),H=P.material;if(Array.isArray(H)){let X=F.groups;for(let L=0,Y=X.length;L<Y;L++){let q=X[L],de=H[q.materialIndex];if(de&&de.visible){let ae=M(P,de,z,g);P.onBeforeShadow(i,P,R,A,F,ae,q),i.renderBufferDirect(A,null,F,ae,P,q),P.onAfterShadow(i,P,R,A,F,ae,q)}}}else if(H.visible){let X=M(P,H,z,g);P.onBeforeShadow(i,P,R,A,F,X,null),i.renderBufferDirect(A,null,F,X,P,null),P.onAfterShadow(i,P,R,A,F,X,null)}}let k=P.children;for(let F=0,H=k.length;F<H;F++)E(k[F],R,A,z,g)}function C(P){P.target.removeEventListener("dispose",C);for(let A in c){let z=c[A],g=P.target.uuid;g in z&&(z[g].dispose(),delete z[g])}}}var vm={[Va]:Wa,[qa]:Za,[Xa]:Ja,[Ji]:Ya,[Wa]:Va,[Za]:qa,[Ja]:Xa,[Ya]:Ji};function Mm(i){function e(){let I=!1,le=new Mt,j=null,Q=new Mt(0,0,0,0);return{setMask:function(Ue){j!==Ue&&!I&&(i.colorMask(Ue,Ue,Ue,Ue),j=Ue)},setLocked:function(Ue){I=Ue},setClear:function(Ue,ue,Fe,vt,at){at===!0&&(Ue*=vt,ue*=vt,Fe*=vt),le.set(Ue,ue,Fe,vt),Q.equals(le)===!1&&(i.clearColor(Ue,ue,Fe,vt),Q.copy(le))},reset:function(){I=!1,j=null,Q.set(-1,0,0,0)}}}function t(){let I=!1,le=!1,j=null,Q=null,Ue=null;return{setReversed:function(ue){le=ue},setTest:function(ue){ue?Se(i.DEPTH_TEST):se(i.DEPTH_TEST)},setMask:function(ue){j!==ue&&!I&&(i.depthMask(ue),j=ue)},setFunc:function(ue){if(le&&(ue=vm[ue]),Q!==ue){switch(ue){case Va:i.depthFunc(i.NEVER);break;case Wa:i.depthFunc(i.ALWAYS);break;case qa:i.depthFunc(i.LESS);break;case Ji:i.depthFunc(i.LEQUAL);break;case Xa:i.depthFunc(i.EQUAL);break;case Ya:i.depthFunc(i.GEQUAL);break;case Za:i.depthFunc(i.GREATER);break;case Ja:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=ue}},setLocked:function(ue){I=ue},setClear:function(ue){Ue!==ue&&(i.clearDepth(ue),Ue=ue)},reset:function(){I=!1,j=null,Q=null,Ue=null}}}function n(){let I=!1,le=null,j=null,Q=null,Ue=null,ue=null,Fe=null,vt=null,at=null;return{setTest:function(ft){I||(ft?Se(i.STENCIL_TEST):se(i.STENCIL_TEST))},setMask:function(ft){le!==ft&&!I&&(i.stencilMask(ft),le=ft)},setFunc:function(ft,Ke,je){(j!==ft||Q!==Ke||Ue!==je)&&(i.stencilFunc(ft,Ke,je),j=ft,Q=Ke,Ue=je)},setOp:function(ft,Ke,je){(ue!==ft||Fe!==Ke||vt!==je)&&(i.stencilOp(ft,Ke,je),ue=ft,Fe=Ke,vt=je)},setLocked:function(ft){I=ft},setClear:function(ft){at!==ft&&(i.clearStencil(ft),at=ft)},reset:function(){I=!1,le=null,j=null,Q=null,Ue=null,ue=null,Fe=null,vt=null,at=null}}}let s=new e,r=new t,o=new n,a=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,d=[],f=null,_=!1,v=null,p=null,m=null,T=null,M=null,E=null,C=null,P=new qe(0,0,0),R=0,A=!1,z=null,g=null,x=null,k=null,F=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,L=0,Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=L>=1):Y.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=L>=2);let q=null,de={},ae=i.getParameter(i.SCISSOR_BOX),re=i.getParameter(i.VIEWPORT),Je=new Mt().fromArray(ae),ze=new Mt().fromArray(re);function G(I,le,j,Q){let Ue=new Uint8Array(4),ue=i.createTexture();i.bindTexture(I,ue),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<j;Fe++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(le,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,Ue):i.texImage2D(le+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ue);return ue}let Z={};Z[i.TEXTURE_2D]=G(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=G(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=G(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=G(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Se(i.DEPTH_TEST),r.setFunc(Ji),oe(!1),ee(Ul),Se(i.CULL_FACE),w(Qn);function Se(I){c[I]!==!0&&(i.enable(I),c[I]=!0)}function se(I){c[I]!==!1&&(i.disable(I),c[I]=!1)}function Re(I,le){return h[I]!==le?(i.bindFramebuffer(I,le),h[I]=le,I===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=le),I===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=le),!0):!1}function we(I,le){let j=d,Q=!1;if(I){j=u.get(le),j===void 0&&(j=[],u.set(le,j));let Ue=I.textures;if(j.length!==Ue.length||j[0]!==i.COLOR_ATTACHMENT0){for(let ue=0,Fe=Ue.length;ue<Fe;ue++)j[ue]=i.COLOR_ATTACHMENT0+ue;j.length=Ue.length,Q=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,Q=!0);Q&&i.drawBuffers(j)}function Ze(I){return f!==I?(i.useProgram(I),f=I,!0):!1}let Ge={[_i]:i.FUNC_ADD,[Nh]:i.FUNC_SUBTRACT,[Fh]:i.FUNC_REVERSE_SUBTRACT};Ge[kh]=i.MIN,Ge[Oh]=i.MAX;let $={[Hh]:i.ZERO,[Bh]:i.ONE,[zh]:i.SRC_COLOR,[za]:i.SRC_ALPHA,[Yh]:i.SRC_ALPHA_SATURATE,[qh]:i.DST_COLOR,[Vh]:i.DST_ALPHA,[Gh]:i.ONE_MINUS_SRC_COLOR,[Ga]:i.ONE_MINUS_SRC_ALPHA,[Xh]:i.ONE_MINUS_DST_COLOR,[Wh]:i.ONE_MINUS_DST_ALPHA,[Zh]:i.CONSTANT_COLOR,[Jh]:i.ONE_MINUS_CONSTANT_COLOR,[$h]:i.CONSTANT_ALPHA,[Kh]:i.ONE_MINUS_CONSTANT_ALPHA};function w(I,le,j,Q,Ue,ue,Fe,vt,at,ft){if(I===Qn){_===!0&&(se(i.BLEND),_=!1);return}if(_===!1&&(Se(i.BLEND),_=!0),I!==Uh){if(I!==v||ft!==A){if((p!==_i||M!==_i)&&(i.blendEquation(i.FUNC_ADD),p=_i,M=_i),ft)switch(I){case qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nl:i.blendFunc(i.ONE,i.ONE);break;case Fl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Fl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}m=null,T=null,E=null,C=null,P.set(0,0,0),R=0,v=I,A=ft}return}Ue=Ue||le,ue=ue||j,Fe=Fe||Q,(le!==p||Ue!==M)&&(i.blendEquationSeparate(Ge[le],Ge[Ue]),p=le,M=Ue),(j!==m||Q!==T||ue!==E||Fe!==C)&&(i.blendFuncSeparate($[j],$[Q],$[ue],$[Fe]),m=j,T=Q,E=ue,C=Fe),(vt.equals(P)===!1||at!==R)&&(i.blendColor(vt.r,vt.g,vt.b,at),P.copy(vt),R=at),v=I,A=!1}function Me(I,le){I.side===tn?se(i.CULL_FACE):Se(i.CULL_FACE);let j=I.side===jt;le&&(j=!j),oe(j),I.blending===qi&&I.transparent===!1?w(Qn):w(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),r.setFunc(I.depthFunc),r.setTest(I.depthTest),r.setMask(I.depthWrite),s.setMask(I.colorWrite);let Q=I.stencilWrite;o.setTest(Q),Q&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),He(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Se(i.SAMPLE_ALPHA_TO_COVERAGE):se(i.SAMPLE_ALPHA_TO_COVERAGE)}function oe(I){z!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),z=I)}function ee(I){I!==Dh?(Se(i.CULL_FACE),I!==g&&(I===Ul?i.cullFace(i.BACK):I===Lh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):se(i.CULL_FACE),g=I}function ie(I){I!==x&&(X&&i.lineWidth(I),x=I)}function He(I,le,j){I?(Se(i.POLYGON_OFFSET_FILL),(k!==le||F!==j)&&(i.polygonOffset(le,j),k=le,F=j)):se(i.POLYGON_OFFSET_FILL)}function xe(I){I?Se(i.SCISSOR_TEST):se(i.SCISSOR_TEST)}function S(I){I===void 0&&(I=i.TEXTURE0+H-1),q!==I&&(i.activeTexture(I),q=I)}function y(I,le,j){j===void 0&&(q===null?j=i.TEXTURE0+H-1:j=q);let Q=de[j];Q===void 0&&(Q={type:void 0,texture:void 0},de[j]=Q),(Q.type!==I||Q.texture!==le)&&(q!==j&&(i.activeTexture(j),q=j),i.bindTexture(I,le||Z[I]),Q.type=I,Q.texture=le)}function B(){let I=de[q];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function W(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ke(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ne(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $e(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ce(I){Je.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Je.copy(I))}function me(I){ze.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),ze.copy(I))}function et(I,le){let j=l.get(le);j===void 0&&(j=new WeakMap,l.set(le,j));let Q=j.get(I);Q===void 0&&(Q=i.getUniformBlockIndex(le,I.name),j.set(I,Q))}function Oe(I,le){let Q=l.get(le).get(I);a.get(le)!==Q&&(i.uniformBlockBinding(le,Q,I.__bindingPointIndex),a.set(le,Q))}function bt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},q=null,de={},h={},u=new WeakMap,d=[],f=null,_=!1,v=null,p=null,m=null,T=null,M=null,E=null,C=null,P=new qe(0,0,0),R=0,A=!1,z=null,g=null,x=null,k=null,F=null,Je.set(0,0,i.canvas.width,i.canvas.height),ze.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:Se,disable:se,bindFramebuffer:Re,drawBuffers:we,useProgram:Ze,setBlending:w,setMaterial:Me,setFlipSided:oe,setCullFace:ee,setLineWidth:ie,setPolygonOffset:He,setScissorTest:xe,activeTexture:S,bindTexture:y,unbindTexture:B,compressedTexImage2D:J,compressedTexImage3D:K,texImage2D:ve,texImage3D:$e,updateUBOMapping:et,uniformBlockBinding:Oe,texStorage2D:Ne,texStorage3D:ge,texSubImage2D:W,texSubImage3D:ke,compressedTexSubImage2D:fe,compressedTexSubImage3D:pe,scissor:Ce,viewport:me,reset:bt}}function Pc(i,e,t,n){let s=Em(n);switch(t){case qc:return i*e;case Yc:return i*e;case Zc:return i*e*2;case Jc:return i*e/s.components*s.byteLength;case gl:return i*e/s.components*s.byteLength;case $c:return i*e*2/s.components*s.byteLength;case _l:return i*e*2/s.components*s.byteLength;case Xc:return i*e*3/s.components*s.byteLength;case Sn:return i*e*4/s.components*s.byteLength;case yl:return i*e*4/s.components*s.byteLength;case Mr:case Er:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Sr:case wr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case eo:case no:return Math.max(i,16)*Math.max(e,8)/4;case Qa:case to:return Math.max(i,8)*Math.max(e,8)/2;case io:case so:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ro:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case oo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case lo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case co:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ho:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case uo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case fo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case po:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case mo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case go:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case _o:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case yo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case xo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case bo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Tr:case vo:case Mo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Kc:case Eo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case So:case wo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Em(i){switch(i){case Gn:case Gc:return{byteLength:1,components:1};case Es:case Vc:case Us:return{byteLength:2,components:1};case pl:case ml:return{byteLength:2,components:4};case Mi:case fl:case Bn:return{byteLength:4,components:1};case Wc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Sm(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Le,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(S,y){return f?new OffscreenCanvas(S,y):ws("canvas")}function v(S,y,B){let J=1,K=xe(S);if((K.width>B||K.height>B)&&(J=B/Math.max(K.width,K.height)),J<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let W=Math.floor(J*K.width),ke=Math.floor(J*K.height);u===void 0&&(u=_(W,ke));let fe=y?_(W,ke):u;return fe.width=W,fe.height=ke,fe.getContext("2d").drawImage(S,0,0,W,ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+W+"x"+ke+")."),fe}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),S;return S}function p(S){return S.generateMipmaps&&S.minFilter!==pn&&S.minFilter!==En}function m(S){i.generateMipmap(S)}function T(S,y,B,J,K=!1){if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let W=y;if(y===i.RED&&(B===i.FLOAT&&(W=i.R32F),B===i.HALF_FLOAT&&(W=i.R16F),B===i.UNSIGNED_BYTE&&(W=i.R8)),y===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(W=i.R8UI),B===i.UNSIGNED_SHORT&&(W=i.R16UI),B===i.UNSIGNED_INT&&(W=i.R32UI),B===i.BYTE&&(W=i.R8I),B===i.SHORT&&(W=i.R16I),B===i.INT&&(W=i.R32I)),y===i.RG&&(B===i.FLOAT&&(W=i.RG32F),B===i.HALF_FLOAT&&(W=i.RG16F),B===i.UNSIGNED_BYTE&&(W=i.RG8)),y===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(W=i.RG8UI),B===i.UNSIGNED_SHORT&&(W=i.RG16UI),B===i.UNSIGNED_INT&&(W=i.RG32UI),B===i.BYTE&&(W=i.RG8I),B===i.SHORT&&(W=i.RG16I),B===i.INT&&(W=i.RG32I)),y===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(W=i.RGB8UI),B===i.UNSIGNED_SHORT&&(W=i.RGB16UI),B===i.UNSIGNED_INT&&(W=i.RGB32UI),B===i.BYTE&&(W=i.RGB8I),B===i.SHORT&&(W=i.RGB16I),B===i.INT&&(W=i.RGB32I)),y===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),B===i.UNSIGNED_INT&&(W=i.RGBA32UI),B===i.BYTE&&(W=i.RGBA8I),B===i.SHORT&&(W=i.RGBA16I),B===i.INT&&(W=i.RGBA32I)),y===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),y===i.RGBA){let ke=K?Cr:xt.getTransfer(J);B===i.FLOAT&&(W=i.RGBA32F),B===i.HALF_FLOAT&&(W=i.RGBA16F),B===i.UNSIGNED_BYTE&&(W=ke===Lt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function M(S,y){let B;return S?y===null||y===Mi||y===ji?B=i.DEPTH24_STENCIL8:y===Bn?B=i.DEPTH32F_STENCIL8:y===Es&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Mi||y===ji?B=i.DEPTH_COMPONENT24:y===Bn?B=i.DEPTH_COMPONENT32F:y===Es&&(B=i.DEPTH_COMPONENT16),B}function E(S,y){return p(S)===!0||S.isFramebufferTexture&&S.minFilter!==pn&&S.minFilter!==En?Math.log2(Math.max(y.width,y.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?y.mipmaps.length:1}function C(S){let y=S.target;y.removeEventListener("dispose",C),R(y),y.isVideoTexture&&h.delete(y)}function P(S){let y=S.target;y.removeEventListener("dispose",P),z(y)}function R(S){let y=n.get(S);if(y.__webglInit===void 0)return;let B=S.source,J=d.get(B);if(J){let K=J[y.__cacheKey];K.usedTimes--,K.usedTimes===0&&A(S),Object.keys(J).length===0&&d.delete(B)}n.remove(S)}function A(S){let y=n.get(S);i.deleteTexture(y.__webglTexture);let B=S.source,J=d.get(B);delete J[y.__cacheKey],o.memory.textures--}function z(S){let y=n.get(S);if(S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(y.__webglFramebuffer[J]))for(let K=0;K<y.__webglFramebuffer[J].length;K++)i.deleteFramebuffer(y.__webglFramebuffer[J][K]);else i.deleteFramebuffer(y.__webglFramebuffer[J]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[J])}else{if(Array.isArray(y.__webglFramebuffer))for(let J=0;J<y.__webglFramebuffer.length;J++)i.deleteFramebuffer(y.__webglFramebuffer[J]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let J=0;J<y.__webglColorRenderbuffer.length;J++)y.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[J]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let B=S.textures;for(let J=0,K=B.length;J<K;J++){let W=n.get(B[J]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),o.memory.textures--),n.remove(B[J])}n.remove(S)}let g=0;function x(){g=0}function k(){let S=g;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),g+=1,S}function F(S){let y=[];return y.push(S.wrapS),y.push(S.wrapT),y.push(S.wrapR||0),y.push(S.magFilter),y.push(S.minFilter),y.push(S.anisotropy),y.push(S.internalFormat),y.push(S.format),y.push(S.type),y.push(S.generateMipmaps),y.push(S.premultiplyAlpha),y.push(S.flipY),y.push(S.unpackAlignment),y.push(S.colorSpace),y.join()}function H(S,y){let B=n.get(S);if(S.isVideoTexture&&ie(S),S.isRenderTargetTexture===!1&&S.version>0&&B.__version!==S.version){let J=S.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ze(B,S,y);return}}t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+y)}function X(S,y){let B=n.get(S);if(S.version>0&&B.__version!==S.version){ze(B,S,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+y)}function L(S,y){let B=n.get(S);if(S.version>0&&B.__version!==S.version){ze(B,S,y);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+y)}function Y(S,y){let B=n.get(S);if(S.version>0&&B.__version!==S.version){G(B,S,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+y)}let q={[Yt]:i.REPEAT,[bi]:i.CLAMP_TO_EDGE,[ja]:i.MIRRORED_REPEAT},de={[pn]:i.NEAREST,[au]:i.NEAREST_MIPMAP_NEAREST,[Ks]:i.NEAREST_MIPMAP_LINEAR,[En]:i.LINEAR,[oa]:i.LINEAR_MIPMAP_NEAREST,[vi]:i.LINEAR_MIPMAP_LINEAR},ae={[hu]:i.NEVER,[gu]:i.ALWAYS,[uu]:i.LESS,[Qc]:i.LEQUAL,[du]:i.EQUAL,[mu]:i.GEQUAL,[fu]:i.GREATER,[pu]:i.NOTEQUAL};function re(S,y){if(y.type===Bn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===En||y.magFilter===oa||y.magFilter===Ks||y.magFilter===vi||y.minFilter===En||y.minFilter===oa||y.minFilter===Ks||y.minFilter===vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(S,i.TEXTURE_WRAP_S,q[y.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,q[y.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,q[y.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,de[y.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,de[y.minFilter]),y.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,ae[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===pn||y.minFilter!==Ks&&y.minFilter!==vi||y.type===Bn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(S,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Je(S,y){let B=!1;S.__webglInit===void 0&&(S.__webglInit=!0,y.addEventListener("dispose",C));let J=y.source,K=d.get(J);K===void 0&&(K={},d.set(J,K));let W=F(y);if(W!==S.__cacheKey){K[W]===void 0&&(K[W]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),K[W].usedTimes++;let ke=K[S.__cacheKey];ke!==void 0&&(K[S.__cacheKey].usedTimes--,ke.usedTimes===0&&A(y)),S.__cacheKey=W,S.__webglTexture=K[W].texture}return B}function ze(S,y,B){let J=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(J=i.TEXTURE_3D);let K=Je(S,y),W=y.source;t.bindTexture(J,S.__webglTexture,i.TEXTURE0+B);let ke=n.get(W);if(W.version!==ke.__version||K===!0){t.activeTexture(i.TEXTURE0+B);let fe=xt.getPrimaries(xt.workingColorSpace),pe=y.colorSpace===dt?null:xt.getPrimaries(y.colorSpace),Ne=y.colorSpace===dt||fe===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let ge=v(y.image,!1,s.maxTextureSize);ge=He(y,ge);let ve=r.convert(y.format,y.colorSpace),$e=r.convert(y.type),Ce=T(y.internalFormat,ve,$e,y.colorSpace,y.isVideoTexture);re(J,y);let me,et=y.mipmaps,Oe=y.isVideoTexture!==!0,bt=ke.__version===void 0||K===!0,I=W.dataReady,le=E(y,ge);if(y.isDepthTexture)Ce=M(y.format===Qi,y.type),bt&&(Oe?t.texStorage2D(i.TEXTURE_2D,1,Ce,ge.width,ge.height):t.texImage2D(i.TEXTURE_2D,0,Ce,ge.width,ge.height,0,ve,$e,null));else if(y.isDataTexture)if(et.length>0){Oe&&bt&&t.texStorage2D(i.TEXTURE_2D,le,Ce,et[0].width,et[0].height);for(let j=0,Q=et.length;j<Q;j++)me=et[j],Oe?I&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,me.width,me.height,ve,$e,me.data):t.texImage2D(i.TEXTURE_2D,j,Ce,me.width,me.height,0,ve,$e,me.data);y.generateMipmaps=!1}else Oe?(bt&&t.texStorage2D(i.TEXTURE_2D,le,Ce,ge.width,ge.height),I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge.width,ge.height,ve,$e,ge.data)):t.texImage2D(i.TEXTURE_2D,0,Ce,ge.width,ge.height,0,ve,$e,ge.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Oe&&bt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,Ce,et[0].width,et[0].height,ge.depth);for(let j=0,Q=et.length;j<Q;j++)if(me=et[j],y.format!==Sn)if(ve!==null)if(Oe){if(I)if(y.layerUpdates.size>0){let Ue=Pc(me.width,me.height,y.format,y.type);for(let ue of y.layerUpdates){let Fe=me.data.subarray(ue*Ue/me.data.BYTES_PER_ELEMENT,(ue+1)*Ue/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,ue,me.width,me.height,1,ve,Fe,0,0)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,me.width,me.height,ge.depth,ve,me.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,Ce,me.width,me.height,ge.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?I&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,me.width,me.height,ge.depth,ve,$e,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,Ce,me.width,me.height,ge.depth,0,ve,$e,me.data)}else{Oe&&bt&&t.texStorage2D(i.TEXTURE_2D,le,Ce,et[0].width,et[0].height);for(let j=0,Q=et.length;j<Q;j++)me=et[j],y.format!==Sn?ve!==null?Oe?I&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,me.width,me.height,ve,me.data):t.compressedTexImage2D(i.TEXTURE_2D,j,Ce,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?I&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,me.width,me.height,ve,$e,me.data):t.texImage2D(i.TEXTURE_2D,j,Ce,me.width,me.height,0,ve,$e,me.data)}else if(y.isDataArrayTexture)if(Oe){if(bt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,Ce,ge.width,ge.height,ge.depth),I)if(y.layerUpdates.size>0){let j=Pc(ge.width,ge.height,y.format,y.type);for(let Q of y.layerUpdates){let Ue=ge.data.subarray(Q*j/ge.data.BYTES_PER_ELEMENT,(Q+1)*j/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,ge.width,ge.height,1,ve,$e,Ue)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,ve,$e,ge.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ce,ge.width,ge.height,ge.depth,0,ve,$e,ge.data);else if(y.isData3DTexture)Oe?(bt&&t.texStorage3D(i.TEXTURE_3D,le,Ce,ge.width,ge.height,ge.depth),I&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,ve,$e,ge.data)):t.texImage3D(i.TEXTURE_3D,0,Ce,ge.width,ge.height,ge.depth,0,ve,$e,ge.data);else if(y.isFramebufferTexture){if(bt)if(Oe)t.texStorage2D(i.TEXTURE_2D,le,Ce,ge.width,ge.height);else{let j=ge.width,Q=ge.height;for(let Ue=0;Ue<le;Ue++)t.texImage2D(i.TEXTURE_2D,Ue,Ce,j,Q,0,ve,$e,null),j>>=1,Q>>=1}}else if(et.length>0){if(Oe&&bt){let j=xe(et[0]);t.texStorage2D(i.TEXTURE_2D,le,Ce,j.width,j.height)}for(let j=0,Q=et.length;j<Q;j++)me=et[j],Oe?I&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,ve,$e,me):t.texImage2D(i.TEXTURE_2D,j,Ce,ve,$e,me);y.generateMipmaps=!1}else if(Oe){if(bt){let j=xe(ge);t.texStorage2D(i.TEXTURE_2D,le,Ce,j.width,j.height)}I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,$e,ge)}else t.texImage2D(i.TEXTURE_2D,0,Ce,ve,$e,ge);p(y)&&m(J),ke.__version=W.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function G(S,y,B){if(y.image.length!==6)return;let J=Je(S,y),K=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+B);let W=n.get(K);if(K.version!==W.__version||J===!0){t.activeTexture(i.TEXTURE0+B);let ke=xt.getPrimaries(xt.workingColorSpace),fe=y.colorSpace===dt?null:xt.getPrimaries(y.colorSpace),pe=y.colorSpace===dt||ke===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let Ne=y.isCompressedTexture||y.image[0].isCompressedTexture,ge=y.image[0]&&y.image[0].isDataTexture,ve=[];for(let Q=0;Q<6;Q++)!Ne&&!ge?ve[Q]=v(y.image[Q],!0,s.maxCubemapSize):ve[Q]=ge?y.image[Q].image:y.image[Q],ve[Q]=He(y,ve[Q]);let $e=ve[0],Ce=r.convert(y.format,y.colorSpace),me=r.convert(y.type),et=T(y.internalFormat,Ce,me,y.colorSpace),Oe=y.isVideoTexture!==!0,bt=W.__version===void 0||J===!0,I=K.dataReady,le=E(y,$e);re(i.TEXTURE_CUBE_MAP,y);let j;if(Ne){Oe&&bt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,le,et,$e.width,$e.height);for(let Q=0;Q<6;Q++){j=ve[Q].mipmaps;for(let Ue=0;Ue<j.length;Ue++){let ue=j[Ue];y.format!==Sn?Ce!==null?Oe?I&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ue,0,0,ue.width,ue.height,Ce,ue.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ue,et,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ue,0,0,ue.width,ue.height,Ce,me,ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ue,et,ue.width,ue.height,0,Ce,me,ue.data)}}}else{if(j=y.mipmaps,Oe&&bt){j.length>0&&le++;let Q=xe(ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,le,et,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ge){Oe?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ve[Q].width,ve[Q].height,Ce,me,ve[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,et,ve[Q].width,ve[Q].height,0,Ce,me,ve[Q].data);for(let Ue=0;Ue<j.length;Ue++){let Fe=j[Ue].image[Q].image;Oe?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ue+1,0,0,Fe.width,Fe.height,Ce,me,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ue+1,et,Fe.width,Fe.height,0,Ce,me,Fe.data)}}else{Oe?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ce,me,ve[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,et,Ce,me,ve[Q]);for(let Ue=0;Ue<j.length;Ue++){let ue=j[Ue];Oe?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ue+1,0,0,Ce,me,ue.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ue+1,et,Ce,me,ue.image[Q])}}}p(y)&&m(i.TEXTURE_CUBE_MAP),W.__version=K.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function Z(S,y,B,J,K,W){let ke=r.convert(B.format,B.colorSpace),fe=r.convert(B.type),pe=T(B.internalFormat,ke,fe,B.colorSpace);if(!n.get(y).__hasExternalTextures){let ge=Math.max(1,y.width>>W),ve=Math.max(1,y.height>>W);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,W,pe,ge,ve,y.depth,0,ke,fe,null):t.texImage2D(K,W,pe,ge,ve,0,ke,fe,null)}t.bindFramebuffer(i.FRAMEBUFFER,S),ee(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,K,n.get(B).__webglTexture,0,oe(y)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,K,n.get(B).__webglTexture,W),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Se(S,y,B){if(i.bindRenderbuffer(i.RENDERBUFFER,S),y.depthBuffer){let J=y.depthTexture,K=J&&J.isDepthTexture?J.type:null,W=M(y.stencilBuffer,K),ke=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=oe(y);ee(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,W,y.width,y.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,W,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,W,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ke,i.RENDERBUFFER,S)}else{let J=y.textures;for(let K=0;K<J.length;K++){let W=J[K],ke=r.convert(W.format,W.colorSpace),fe=r.convert(W.type),pe=T(W.internalFormat,ke,fe,W.colorSpace),Ne=oe(y);B&&ee(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,pe,y.width,y.height):ee(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ne,pe,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,pe,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function se(S,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,S),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),H(y.depthTexture,0);let J=n.get(y.depthTexture).__webglTexture,K=oe(y);if(y.depthTexture.format===Xi)ee(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(y.depthTexture.format===Qi)ee(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Re(S){let y=n.get(S),B=S.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==S.depthTexture){let J=S.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),J){let K=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,J.removeEventListener("dispose",K)};J.addEventListener("dispose",K),y.__depthDisposeCallback=K}y.__boundDepthTexture=J}if(S.depthTexture&&!y.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");se(y.__webglFramebuffer,S)}else if(B){y.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[J]),y.__webglDepthbuffer[J]===void 0)y.__webglDepthbuffer[J]=i.createRenderbuffer(),Se(y.__webglDepthbuffer[J],S,!1);else{let K=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=y.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,W)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Se(y.__webglDepthbuffer,S,!1);else{let J=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,K)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function we(S,y,B){let J=n.get(S);y!==void 0&&Z(J.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Re(S)}function Ze(S){let y=S.texture,B=n.get(S),J=n.get(y);S.addEventListener("dispose",P);let K=S.textures,W=S.isWebGLCubeRenderTarget===!0,ke=K.length>1;if(ke||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=y.version,o.memory.textures++),W){B.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[fe]=[];for(let pe=0;pe<y.mipmaps.length;pe++)B.__webglFramebuffer[fe][pe]=i.createFramebuffer()}else B.__webglFramebuffer[fe]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let fe=0;fe<y.mipmaps.length;fe++)B.__webglFramebuffer[fe]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(ke)for(let fe=0,pe=K.length;fe<pe;fe++){let Ne=n.get(K[fe]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=i.createTexture(),o.memory.textures++)}if(S.samples>0&&ee(S)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let fe=0;fe<K.length;fe++){let pe=K[fe];B.__webglColorRenderbuffer[fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[fe]);let Ne=r.convert(pe.format,pe.colorSpace),ge=r.convert(pe.type),ve=T(pe.internalFormat,Ne,ge,pe.colorSpace,S.isXRRenderTarget===!0),$e=oe(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,$e,ve,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,B.__webglColorRenderbuffer[fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Se(B.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),re(i.TEXTURE_CUBE_MAP,y);for(let fe=0;fe<6;fe++)if(y.mipmaps&&y.mipmaps.length>0)for(let pe=0;pe<y.mipmaps.length;pe++)Z(B.__webglFramebuffer[fe][pe],S,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,pe);else Z(B.__webglFramebuffer[fe],S,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);p(y)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ke){for(let fe=0,pe=K.length;fe<pe;fe++){let Ne=K[fe],ge=n.get(Ne);t.bindTexture(i.TEXTURE_2D,ge.__webglTexture),re(i.TEXTURE_2D,Ne),Z(B.__webglFramebuffer,S,Ne,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,0),p(Ne)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let fe=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(fe=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,J.__webglTexture),re(fe,y),y.mipmaps&&y.mipmaps.length>0)for(let pe=0;pe<y.mipmaps.length;pe++)Z(B.__webglFramebuffer[pe],S,y,i.COLOR_ATTACHMENT0,fe,pe);else Z(B.__webglFramebuffer,S,y,i.COLOR_ATTACHMENT0,fe,0);p(y)&&m(fe),t.unbindTexture()}S.depthBuffer&&Re(S)}function Ge(S){let y=S.textures;for(let B=0,J=y.length;B<J;B++){let K=y[B];if(p(K)){let W=S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ke=n.get(K).__webglTexture;t.bindTexture(W,ke),m(W),t.unbindTexture()}}}let $=[],w=[];function Me(S){if(S.samples>0){if(ee(S)===!1){let y=S.textures,B=S.width,J=S.height,K=i.COLOR_BUFFER_BIT,W=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ke=n.get(S),fe=y.length>1;if(fe)for(let pe=0;pe<y.length;pe++)t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let pe=0;pe<y.length;pe++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),fe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ke.__webglColorRenderbuffer[pe]);let Ne=n.get(y[pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ne,0)}i.blitFramebuffer(0,0,B,J,0,0,B,J,K,i.NEAREST),l===!0&&($.length=0,w.length=0,$.push(i.COLOR_ATTACHMENT0+pe),S.depthBuffer&&S.resolveDepthBuffer===!1&&($.push(W),w.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,w)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),fe)for(let pe=0;pe<y.length;pe++){t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,ke.__webglColorRenderbuffer[pe]);let Ne=n.get(y[pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,Ne,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){let y=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function oe(S){return Math.min(s.maxSamples,S.samples)}function ee(S){let y=n.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ie(S){let y=o.render.frame;h.get(S)!==y&&(h.set(S,y),S.update())}function He(S,y){let B=S.colorSpace,J=S.format,K=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||B!==li&&B!==dt&&(xt.getTransfer(B)===Lt?(J!==Sn||K!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),y}function xe(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=x,this.setTexture2D=H,this.setTexture2DArray=X,this.setTexture3D=L,this.setTextureCube=Y,this.rebindTextures=we,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=ee}function wm(i,e){function t(n,s=dt){let r,o=xt.getTransfer(s);if(n===Gn)return i.UNSIGNED_BYTE;if(n===pl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ml)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Gc)return i.BYTE;if(n===Vc)return i.SHORT;if(n===Es)return i.UNSIGNED_SHORT;if(n===fl)return i.INT;if(n===Mi)return i.UNSIGNED_INT;if(n===Bn)return i.FLOAT;if(n===Us)return i.HALF_FLOAT;if(n===qc)return i.ALPHA;if(n===Xc)return i.RGB;if(n===Sn)return i.RGBA;if(n===Yc)return i.LUMINANCE;if(n===Zc)return i.LUMINANCE_ALPHA;if(n===Xi)return i.DEPTH_COMPONENT;if(n===Qi)return i.DEPTH_STENCIL;if(n===Jc)return i.RED;if(n===gl)return i.RED_INTEGER;if(n===$c)return i.RG;if(n===_l)return i.RG_INTEGER;if(n===yl)return i.RGBA_INTEGER;if(n===Mr||n===Er||n===Sr||n===wr)if(o===Lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Mr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Mr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Sr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qa||n===eo||n===to||n===no)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Qa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===eo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===to)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===no)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===io||n===so||n===ro)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===io||n===so)return o===Lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ro)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ao||n===oo||n===lo||n===co||n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===_o||n===yo||n===xo||n===bo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ao)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===oo)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===lo)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===co)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ho)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===uo)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fo)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===po)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===mo)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===go)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_o)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yo)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xo)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bo)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Tr||n===vo||n===Mo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Tr)return o===Lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Mo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kc||n===Eo||n===So||n===wo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Tr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Eo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===So)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ji?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var zo=class extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ce=class extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Tm={type:"move"},xs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let p=t.getJointPose(v,n),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Tm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ce;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Rm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Am=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Go=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new an,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Cn({vertexShader:Rm,fragmentShader:Am,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ne(new gn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Vo=class extends ti{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,_=null,v=new Go,p=t.getContextAttributes(),m=null,T=null,M=[],E=[],C=new Le,P=null,R=new Kt;R.layers.enable(1),R.viewport=new Mt;let A=new Kt;A.layers.enable(2),A.viewport=new Mt;let z=[R,A],g=new zo;g.layers.enable(1),g.layers.enable(2);let x=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Z=M[G];return Z===void 0&&(Z=new xs,M[G]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(G){let Z=M[G];return Z===void 0&&(Z=new xs,M[G]=Z),Z.getGripSpace()},this.getHand=function(G){let Z=M[G];return Z===void 0&&(Z=new xs,M[G]=Z),Z.getHandSpace()};function F(G){let Z=E.indexOf(G.inputSource);if(Z===-1)return;let Se=M[Z];Se!==void 0&&(Se.update(G.inputSource,G.frame,c||o),Se.dispatchEvent({type:G.type,data:G.inputSource}))}function H(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",X);for(let G=0;G<M.length;G++){let Z=E[G];Z!==null&&(E[G]=null,M[G].disconnect(Z))}x=null,k=null,v.reset(),e.setRenderTarget(m),f=null,d=null,u=null,s=null,T=null,ze.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",H),s.addEventListener("inputsourceschange",X),p.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0){let Z={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Z),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),T=new Vn(f.framebufferWidth,f.framebufferHeight,{format:Sn,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let Z=null,Se=null,se=null;p.depth&&(se=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=p.stencil?Qi:Xi,Se=p.stencil?ji:Mi);let Re={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Re),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new Vn(d.textureWidth,d.textureHeight,{format:Sn,type:Gn,depthTexture:new zr(d.textureWidth,d.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ze.setContext(s),ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function X(G){for(let Z=0;Z<G.removed.length;Z++){let Se=G.removed[Z],se=E.indexOf(Se);se>=0&&(E[se]=null,M[se].disconnect(Se))}for(let Z=0;Z<G.added.length;Z++){let Se=G.added[Z],se=E.indexOf(Se);if(se===-1){for(let we=0;we<M.length;we++)if(we>=E.length){E.push(Se),se=we;break}else if(E[we]===null){E[we]=Se,se=we;break}if(se===-1)break}let Re=M[se];Re&&Re.connect(Se)}}let L=new N,Y=new N;function q(G,Z,Se){L.setFromMatrixPosition(Z.matrixWorld),Y.setFromMatrixPosition(Se.matrixWorld);let se=L.distanceTo(Y),Re=Z.projectionMatrix.elements,we=Se.projectionMatrix.elements,Ze=Re[14]/(Re[10]-1),Ge=Re[14]/(Re[10]+1),$=(Re[9]+1)/Re[5],w=(Re[9]-1)/Re[5],Me=(Re[8]-1)/Re[0],oe=(we[8]+1)/we[0],ee=Ze*Me,ie=Ze*oe,He=se/(-Me+oe),xe=He*-Me;if(Z.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(xe),G.translateZ(He),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Re[10]===-1)G.projectionMatrix.copy(Z.projectionMatrix),G.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{let S=Ze+He,y=Ge+He,B=ee-xe,J=ie+(se-xe),K=$*Ge/y*S,W=w*Ge/y*S;G.projectionMatrix.makePerspective(B,J,K,W,S,y),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function de(G,Z){Z===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Z.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let Z=G.near,Se=G.far;v.texture!==null&&(v.depthNear>0&&(Z=v.depthNear),v.depthFar>0&&(Se=v.depthFar)),g.near=A.near=R.near=Z,g.far=A.far=R.far=Se,(x!==g.near||k!==g.far)&&(s.updateRenderState({depthNear:g.near,depthFar:g.far}),x=g.near,k=g.far);let se=G.parent,Re=g.cameras;de(g,se);for(let we=0;we<Re.length;we++)de(Re[we],se);Re.length===2?q(g,R,A):g.projectionMatrix.copy(R.projectionMatrix),ae(G,g,se)};function ae(G,Z,Se){Se===null?G.matrix.copy(Z.matrixWorld):(G.matrix.copy(Se.matrixWorld),G.matrix.invert(),G.matrix.multiply(Z.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Z.projectionMatrix),G.projectionMatrixInverse.copy(Z.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Ss*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return g},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(g)};let re=null;function Je(G,Z){if(h=Z.getViewerPose(c||o),_=Z,h!==null){let Se=h.views;f!==null&&(e.setRenderTargetFramebuffer(T,f.framebuffer),e.setRenderTarget(T));let se=!1;Se.length!==g.cameras.length&&(g.cameras.length=0,se=!0);for(let we=0;we<Se.length;we++){let Ze=Se[we],Ge=null;if(f!==null)Ge=f.getViewport(Ze);else{let w=u.getViewSubImage(d,Ze);Ge=w.viewport,we===0&&(e.setRenderTargetTextures(T,w.colorTexture,d.ignoreDepthValues?void 0:w.depthStencilTexture),e.setRenderTarget(T))}let $=z[we];$===void 0&&($=new Kt,$.layers.enable(we),$.viewport=new Mt,z[we]=$),$.matrix.fromArray(Ze.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(Ze.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),we===0&&(g.matrix.copy($.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale)),se===!0&&g.cameras.push($)}let Re=s.enabledFeatures;if(Re&&Re.includes("depth-sensing")){let we=u.getDepthInformation(Se[0]);we&&we.isValid&&we.texture&&v.init(e,we,s.renderState)}}for(let Se=0;Se<M.length;Se++){let se=E[Se],Re=M[Se];se!==null&&Re!==void 0&&Re.update(se,Z,c||o)}re&&re(G,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),_=null}let ze=new ih;ze.setAnimationLoop(Je),this.setAnimationLoop=function(G){re=G},this.dispose=function(){}}},mi=new An,Cm=new Ft;function Pm(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,nh(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,T,M,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,E)):m.isMeshMatcapMaterial?(r(p,m),_(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,T,M):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===jt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===jt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let T=e.get(m),M=T.envMap,E=T.envMapRotation;M&&(p.envMap.value=M,mi.copy(E),mi.x*=-1,mi.y*=-1,mi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),p.envMapRotation.value.setFromMatrix4(Cm.makeRotationFromEuler(mi)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,T,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*T,p.scale.value=M*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,T){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===jt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){let T=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Im(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,M){let E=M.program;n.uniformBlockBinding(T,E)}function c(T,M){let E=s[T.id];E===void 0&&(_(T),E=h(T),s[T.id]=E,T.addEventListener("dispose",p));let C=M.program;n.updateUBOMapping(T,C);let P=e.render.frame;r[T.id]!==P&&(d(T),r[T.id]=P)}function h(T){let M=u();T.__bindingPointIndex=M;let E=i.createBuffer(),C=T.__size,P=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,C,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,E),E}function u(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){let M=s[T.id],E=T.uniforms,C=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let P=0,R=E.length;P<R;P++){let A=Array.isArray(E[P])?E[P]:[E[P]];for(let z=0,g=A.length;z<g;z++){let x=A[z];if(f(x,P,z,C)===!0){let k=x.__offset,F=Array.isArray(x.value)?x.value:[x.value],H=0;for(let X=0;X<F.length;X++){let L=F[X],Y=v(L);typeof L=="number"||typeof L=="boolean"?(x.__data[0]=L,i.bufferSubData(i.UNIFORM_BUFFER,k+H,x.__data)):L.isMatrix3?(x.__data[0]=L.elements[0],x.__data[1]=L.elements[1],x.__data[2]=L.elements[2],x.__data[3]=0,x.__data[4]=L.elements[3],x.__data[5]=L.elements[4],x.__data[6]=L.elements[5],x.__data[7]=0,x.__data[8]=L.elements[6],x.__data[9]=L.elements[7],x.__data[10]=L.elements[8],x.__data[11]=0):(L.toArray(x.__data,H),H+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,x.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(T,M,E,C){let P=T.value,R=M+"_"+E;if(C[R]===void 0)return typeof P=="number"||typeof P=="boolean"?C[R]=P:C[R]=P.clone(),!0;{let A=C[R];if(typeof P=="number"||typeof P=="boolean"){if(A!==P)return C[R]=P,!0}else if(A.equals(P)===!1)return A.copy(P),!0}return!1}function _(T){let M=T.uniforms,E=0,C=16;for(let R=0,A=M.length;R<A;R++){let z=Array.isArray(M[R])?M[R]:[M[R]];for(let g=0,x=z.length;g<x;g++){let k=z[g],F=Array.isArray(k.value)?k.value:[k.value];for(let H=0,X=F.length;H<X;H++){let L=F[H],Y=v(L),q=E%C,de=q%Y.boundary,ae=q+de;E+=de,ae!==0&&C-ae<Y.storage&&(E+=C-ae),k.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=E,E+=Y.storage}}}let P=E%C;return P>0&&(E+=C-P),T.__size=E,T.__cache={},this}function v(T){let M={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(M.boundary=4,M.storage=4):T.isVector2?(M.boundary=8,M.storage=8):T.isVector3||T.isColor?(M.boundary=16,M.storage=12):T.isVector4?(M.boundary=16,M.storage=16):T.isMatrix3?(M.boundary=48,M.storage=48):T.isMatrix4?(M.boundary=64,M.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),M}function p(T){let M=T.target;M.removeEventListener("dispose",p);let E=o.indexOf(M.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function m(){for(let T in s)i.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var Gr=class{constructor(e={}){let{canvas:t=Lu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let f=new Uint32Array(4),_=new Int32Array(4),v=null,p=null,m=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rt,this.toneMapping=ei,this.toneMappingExposure=1;let M=this,E=!1,C=0,P=0,R=null,A=-1,z=null,g=new Mt,x=new Mt,k=null,F=new qe(0),H=0,X=t.width,L=t.height,Y=1,q=null,de=null,ae=new Mt(0,0,X,L),re=new Mt(0,0,X,L),Je=!1,ze=new Rs,G=!1,Z=!1,Se=new Ft,se=new Ft,Re=new N,we=new Mt,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ge=!1;function $(){return R===null?Y:1}let w=n;function Me(b,D){return t.getContext(b,D)}try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ul}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",ue,!1),w===null){let D="webgl2";if(w=Me(D,b),w===null)throw Me(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let oe,ee,ie,He,xe,S,y,B,J,K,W,ke,fe,pe,Ne,ge,ve,$e,Ce,me,et,Oe,bt,I;function le(){oe=new Y0(w),oe.init(),Oe=new wm(w,oe),ee=new z0(w,oe,e,Oe),ie=new Mm(w),ee.reverseDepthBuffer&&ie.buffers.depth.setReversed(!0),He=new $0(w),xe=new cm,S=new Sm(w,oe,ie,xe,ee,Oe,He),y=new V0(M),B=new X0(M),J=new nd(w),bt=new H0(w,J),K=new Z0(w,J,He,bt),W=new j0(w,K,J,He),Ce=new K0(w,ee,S),ge=new G0(xe),ke=new lm(M,y,B,oe,ee,bt,ge),fe=new Pm(M,xe),pe=new um,Ne=new _m(oe),$e=new O0(M,y,B,ie,W,d,l),ve=new bm(M,W,ee),I=new Im(w,He,ee,ie),me=new B0(w,oe,He),et=new J0(w,oe,He),He.programs=ke.programs,M.capabilities=ee,M.extensions=oe,M.properties=xe,M.renderLists=pe,M.shadowMap=ve,M.state=ie,M.info=He}le();let j=new Vo(M,w);this.xr=j,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){let b=oe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=oe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(b){b!==void 0&&(Y=b,this.setSize(X,L,!1))},this.getSize=function(b){return b.set(X,L)},this.setSize=function(b,D,V=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=b,L=D,t.width=Math.floor(b*Y),t.height=Math.floor(D*Y),V===!0&&(t.style.width=b+"px",t.style.height=D+"px"),this.setViewport(0,0,b,D)},this.getDrawingBufferSize=function(b){return b.set(X*Y,L*Y).floor()},this.setDrawingBufferSize=function(b,D,V){X=b,L=D,Y=V,t.width=Math.floor(b*V),t.height=Math.floor(D*V),this.setViewport(0,0,b,D)},this.getCurrentViewport=function(b){return b.copy(g)},this.getViewport=function(b){return b.copy(ae)},this.setViewport=function(b,D,V,O){b.isVector4?ae.set(b.x,b.y,b.z,b.w):ae.set(b,D,V,O),ie.viewport(g.copy(ae).multiplyScalar(Y).round())},this.getScissor=function(b){return b.copy(re)},this.setScissor=function(b,D,V,O){b.isVector4?re.set(b.x,b.y,b.z,b.w):re.set(b,D,V,O),ie.scissor(x.copy(re).multiplyScalar(Y).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(b){ie.setScissorTest(Je=b)},this.setOpaqueSort=function(b){q=b},this.setTransparentSort=function(b){de=b},this.getClearColor=function(b){return b.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(b=!0,D=!0,V=!0){let O=0;if(b){let U=!1;if(R!==null){let te=R.texture.format;U=te===yl||te===_l||te===gl}if(U){let te=R.texture.type,Pe=te===Gn||te===Mi||te===Es||te===ji||te===pl||te===ml,Ee=$e.getClearColor(),ye=$e.getClearAlpha(),Te=Ee.r,Xe=Ee.g,Ae=Ee.b;Pe?(f[0]=Te,f[1]=Xe,f[2]=Ae,f[3]=ye,w.clearBufferuiv(w.COLOR,0,f)):(_[0]=Te,_[1]=Xe,_[2]=Ae,_[3]=ye,w.clearBufferiv(w.COLOR,0,_))}else O|=w.COLOR_BUFFER_BIT}D&&(O|=w.DEPTH_BUFFER_BIT,w.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),V&&(O|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),pe.dispose(),Ne.dispose(),xe.dispose(),y.dispose(),B.dispose(),W.dispose(),bt.dispose(),I.dispose(),ke.dispose(),j.dispose(),j.removeEventListener("sessionstart",yn),j.removeEventListener("sessionend",At),nt.stop()};function Q(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let b=He.autoReset,D=ve.enabled,V=ve.autoUpdate,O=ve.needsUpdate,U=ve.type;le(),He.autoReset=b,ve.enabled=D,ve.autoUpdate=V,ve.needsUpdate=O,ve.type=U}function ue(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Fe(b){let D=b.target;D.removeEventListener("dispose",Fe),vt(D)}function vt(b){at(b),xe.remove(b)}function at(b){let D=xe.get(b).programs;D!==void 0&&(D.forEach(function(V){ke.releaseProgram(V)}),b.isShaderMaterial&&ke.releaseShaderCache(b))}this.renderBufferDirect=function(b,D,V,O,U,te){D===null&&(D=Ze);let Pe=U.isMesh&&U.matrixWorld.determinant()<0,Ee=ct(b,D,V,O,U);ie.setMaterial(O,Pe);let ye=V.index,Te=1;if(O.wireframe===!0){if(ye=K.getWireframeAttribute(V),ye===void 0)return;Te=2}let Xe=V.drawRange,Ae=V.attributes.position,Ve=Xe.start*Te,We=(Xe.start+Xe.count)*Te;te!==null&&(Ve=Math.max(Ve,te.start*Te),We=Math.min(We,(te.start+te.count)*Te)),ye!==null?(Ve=Math.max(Ve,0),We=Math.min(We,ye.count)):Ae!=null&&(Ve=Math.max(Ve,0),We=Math.min(We,Ae.count));let mt=We-Ve;if(mt<0||mt===1/0)return;bt.setup(U,O,Ee,V,ye);let ht,Be=me;if(ye!==null&&(ht=J.get(ye),Be=et,Be.setIndex(ht)),U.isMesh)O.wireframe===!0?(ie.setLineWidth(O.wireframeLinewidth*$()),Be.setMode(w.LINES)):Be.setMode(w.TRIANGLES);else if(U.isLine){let be=O.linewidth;be===void 0&&(be=1),ie.setLineWidth(be*$()),U.isLineSegments?Be.setMode(w.LINES):U.isLineLoop?Be.setMode(w.LINE_LOOP):Be.setMode(w.LINE_STRIP)}else U.isPoints?Be.setMode(w.POINTS):U.isSprite&&Be.setMode(w.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Be.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))Be.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let be=U._multiDrawStarts,It=U._multiDrawCounts,Ye=U._multiDrawCount,Qe=ye?J.get(ye).bytesPerElement:1,tt=xe.get(O).currentProgram.getUniforms();for(let kt=0;kt<Ye;kt++)tt.setValue(w,"_gl_DrawID",kt),Be.render(be[kt]/Qe,It[kt])}else if(U.isInstancedMesh)Be.renderInstances(Ve,mt,U.count);else if(V.isInstancedBufferGeometry){let be=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,It=Math.min(V.instanceCount,be);Be.renderInstances(Ve,mt,It)}else Be.render(Ve,mt)};function ft(b,D,V){b.transparent===!0&&b.side===tn&&b.forceSinglePass===!1?(b.side=jt,b.needsUpdate=!0,cn(b,D,V),b.side=rn,b.needsUpdate=!0,cn(b,D,V),b.side=tn):cn(b,D,V)}this.compile=function(b,D,V=null){V===null&&(V=b),p=Ne.get(V),p.init(D),T.push(p),V.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),b!==V&&b.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();let O=new Set;return b.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let te=U.material;if(te)if(Array.isArray(te))for(let Pe=0;Pe<te.length;Pe++){let Ee=te[Pe];ft(Ee,V,U),O.add(Ee)}else ft(te,V,U),O.add(te)}),T.pop(),p=null,O},this.compileAsync=function(b,D,V=null){let O=this.compile(b,D,V);return new Promise(U=>{function te(){if(O.forEach(function(Pe){xe.get(Pe).currentProgram.isReady()&&O.delete(Pe)}),O.size===0){U(b);return}setTimeout(te,10)}oe.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let Ke=null;function je(b){Ke&&Ke(b)}function yn(){nt.stop()}function At(){nt.start()}let nt=new ih;nt.setAnimationLoop(je),typeof self<"u"&&nt.setContext(self),this.setAnimationLoop=function(b){Ke=b,j.setAnimationLoop(b),b===null?nt.stop():nt.start()},j.addEventListener("sessionstart",yn),j.addEventListener("sessionend",At),this.render=function(b,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(D),D=j.getCamera()),b.isScene===!0&&b.onBeforeRender(M,b,D,R),p=Ne.get(b,T.length),p.init(D),T.push(p),se.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),ze.setFromProjectionMatrix(se),Z=this.localClippingEnabled,G=ge.init(this.clippingPlanes,Z),v=pe.get(b,m.length),v.init(),m.push(v),j.enabled===!0&&j.isPresenting===!0){let te=M.xr.getDepthSensingMesh();te!==null&&rt(te,D,-1/0,M.sortObjects)}rt(b,D,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(q,de),Ge=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Ge&&$e.addToRenderList(v,b),this.info.render.frame++,G===!0&&ge.beginShadows();let V=p.state.shadowsArray;ve.render(V,b,D),G===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();let O=v.opaque,U=v.transmissive;if(p.setupLights(),D.isArrayCamera){let te=D.cameras;if(U.length>0)for(let Pe=0,Ee=te.length;Pe<Ee;Pe++){let ye=te[Pe];Ct(O,U,b,ye)}Ge&&$e.render(b);for(let Pe=0,Ee=te.length;Pe<Ee;Pe++){let ye=te[Pe];xn(v,b,ye,ye.viewport)}}else U.length>0&&Ct(O,U,b,D),Ge&&$e.render(b),xn(v,b,D);R!==null&&(S.updateMultisampleRenderTarget(R),S.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(M,b,D),bt.resetDefaultState(),A=-1,z=null,T.pop(),T.length>0?(p=T[T.length-1],G===!0&&ge.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function rt(b,D,V,O){if(b.visible===!1)return;if(b.layers.test(D.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(D);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ze.intersectsSprite(b)){O&&we.setFromMatrixPosition(b.matrixWorld).applyMatrix4(se);let Pe=W.update(b),Ee=b.material;Ee.visible&&v.push(b,Pe,Ee,V,we.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ze.intersectsObject(b))){let Pe=W.update(b),Ee=b.material;if(O&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),we.copy(b.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),we.copy(Pe.boundingSphere.center)),we.applyMatrix4(b.matrixWorld).applyMatrix4(se)),Array.isArray(Ee)){let ye=Pe.groups;for(let Te=0,Xe=ye.length;Te<Xe;Te++){let Ae=ye[Te],Ve=Ee[Ae.materialIndex];Ve&&Ve.visible&&v.push(b,Pe,Ve,V,we.z,Ae)}}else Ee.visible&&v.push(b,Pe,Ee,V,we.z,null)}}let te=b.children;for(let Pe=0,Ee=te.length;Pe<Ee;Pe++)rt(te[Pe],D,V,O)}function xn(b,D,V,O){let U=b.opaque,te=b.transmissive,Pe=b.transparent;p.setupLightsView(V),G===!0&&ge.setGlobalState(M.clippingPlanes,V),O&&ie.viewport(g.copy(O)),U.length>0&&lt(U,D,V),te.length>0&&lt(te,D,V),Pe.length>0&&lt(Pe,D,V),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function Ct(b,D,V,O){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[O.id]===void 0&&(p.state.transmissionRenderTarget[O.id]=new Vn(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float")?Us:Gn,minFilter:vi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace}));let te=p.state.transmissionRenderTarget[O.id],Pe=O.viewport||g;te.setSize(Pe.z,Pe.w);let Ee=M.getRenderTarget();M.setRenderTarget(te),M.getClearColor(F),H=M.getClearAlpha(),H<1&&M.setClearColor(16777215,.5),M.clear(),Ge&&$e.render(V);let ye=M.toneMapping;M.toneMapping=ei;let Te=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),p.setupLightsView(O),G===!0&&ge.setGlobalState(M.clippingPlanes,O),lt(b,V,O),S.updateMultisampleRenderTarget(te),S.updateRenderTargetMipmap(te),oe.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let Ae=0,Ve=D.length;Ae<Ve;Ae++){let We=D[Ae],mt=We.object,ht=We.geometry,Be=We.material,be=We.group;if(Be.side===tn&&mt.layers.test(O.layers)){let It=Be.side;Be.side=jt,Be.needsUpdate=!0,ot(mt,V,O,ht,Be,be),Be.side=It,Be.needsUpdate=!0,Xe=!0}}Xe===!0&&(S.updateMultisampleRenderTarget(te),S.updateRenderTargetMipmap(te))}M.setRenderTarget(Ee),M.setClearColor(F,H),Te!==void 0&&(O.viewport=Te),M.toneMapping=ye}function lt(b,D,V){let O=D.isScene===!0?D.overrideMaterial:null;for(let U=0,te=b.length;U<te;U++){let Pe=b[U],Ee=Pe.object,ye=Pe.geometry,Te=O===null?Pe.material:O,Xe=Pe.group;Ee.layers.test(V.layers)&&ot(Ee,D,V,ye,Te,Xe)}}function ot(b,D,V,O,U,te){b.onBeforeRender(M,D,V,O,U,te),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),U.onBeforeRender(M,D,V,O,b,te),U.transparent===!0&&U.side===tn&&U.forceSinglePass===!1?(U.side=jt,U.needsUpdate=!0,M.renderBufferDirect(V,D,O,U,b,te),U.side=rn,U.needsUpdate=!0,M.renderBufferDirect(V,D,O,U,b,te),U.side=tn):M.renderBufferDirect(V,D,O,U,b,te),b.onAfterRender(M,D,V,O,U,te)}function cn(b,D,V){D.isScene!==!0&&(D=Ze);let O=xe.get(b),U=p.state.lights,te=p.state.shadowsArray,Pe=U.state.version,Ee=ke.getParameters(b,U.state,te,D,V),ye=ke.getProgramCacheKey(Ee),Te=O.programs;O.environment=b.isMeshStandardMaterial?D.environment:null,O.fog=D.fog,O.envMap=(b.isMeshStandardMaterial?B:y).get(b.envMap||O.environment),O.envMapRotation=O.environment!==null&&b.envMap===null?D.environmentRotation:b.envMapRotation,Te===void 0&&(b.addEventListener("dispose",Fe),Te=new Map,O.programs=Te);let Xe=Te.get(ye);if(Xe!==void 0){if(O.currentProgram===Xe&&O.lightsStateVersion===Pe)return ut(b,Ee),Xe}else Ee.uniforms=ke.getUniforms(b),b.onBeforeCompile(Ee,M),Xe=ke.acquireProgram(Ee,ye),Te.set(ye,Xe),O.uniforms=Ee.uniforms;let Ae=O.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ae.clippingPlanes=ge.uniform),ut(b,Ee),O.needsLights=Dt(b),O.lightsStateVersion=Pe,O.needsLights&&(Ae.ambientLightColor.value=U.state.ambient,Ae.lightProbe.value=U.state.probe,Ae.directionalLights.value=U.state.directional,Ae.directionalLightShadows.value=U.state.directionalShadow,Ae.spotLights.value=U.state.spot,Ae.spotLightShadows.value=U.state.spotShadow,Ae.rectAreaLights.value=U.state.rectArea,Ae.ltc_1.value=U.state.rectAreaLTC1,Ae.ltc_2.value=U.state.rectAreaLTC2,Ae.pointLights.value=U.state.point,Ae.pointLightShadows.value=U.state.pointShadow,Ae.hemisphereLights.value=U.state.hemi,Ae.directionalShadowMap.value=U.state.directionalShadowMap,Ae.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ae.spotShadowMap.value=U.state.spotShadowMap,Ae.spotLightMatrix.value=U.state.spotLightMatrix,Ae.spotLightMap.value=U.state.spotLightMap,Ae.pointShadowMap.value=U.state.pointShadowMap,Ae.pointShadowMatrix.value=U.state.pointShadowMatrix),O.currentProgram=Xe,O.uniformsList=null,Xe}function Pt(b){if(b.uniformsList===null){let D=b.currentProgram.getUniforms();b.uniformsList=Zi.seqWithValue(D.seq,b.uniforms)}return b.uniformsList}function ut(b,D){let V=xe.get(b);V.outputColorSpace=D.outputColorSpace,V.batching=D.batching,V.batchingColor=D.batchingColor,V.instancing=D.instancing,V.instancingColor=D.instancingColor,V.instancingMorph=D.instancingMorph,V.skinning=D.skinning,V.morphTargets=D.morphTargets,V.morphNormals=D.morphNormals,V.morphColors=D.morphColors,V.morphTargetsCount=D.morphTargetsCount,V.numClippingPlanes=D.numClippingPlanes,V.numIntersection=D.numClipIntersection,V.vertexAlphas=D.vertexAlphas,V.vertexTangents=D.vertexTangents,V.toneMapping=D.toneMapping}function ct(b,D,V,O,U){D.isScene!==!0&&(D=Ze),S.resetTextureUnits();let te=D.fog,Pe=O.isMeshStandardMaterial?D.environment:null,Ee=R===null?M.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:li,ye=(O.isMeshStandardMaterial?B:y).get(O.envMap||Pe),Te=O.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Xe=!!V.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Ae=!!V.morphAttributes.position,Ve=!!V.morphAttributes.normal,We=!!V.morphAttributes.color,mt=ei;O.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(mt=M.toneMapping);let ht=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Be=ht!==void 0?ht.length:0,be=xe.get(O),It=p.state.lights;if(G===!0&&(Z===!0||b!==z)){let dn=b===z&&O.id===A;ge.setState(O,b,dn)}let Ye=!1;O.version===be.__version?(be.needsLights&&be.lightsStateVersion!==It.state.version||be.outputColorSpace!==Ee||U.isBatchedMesh&&be.batching===!1||!U.isBatchedMesh&&be.batching===!0||U.isBatchedMesh&&be.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&be.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&be.instancing===!1||!U.isInstancedMesh&&be.instancing===!0||U.isSkinnedMesh&&be.skinning===!1||!U.isSkinnedMesh&&be.skinning===!0||U.isInstancedMesh&&be.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&be.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&be.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&be.instancingMorph===!1&&U.morphTexture!==null||be.envMap!==ye||O.fog===!0&&be.fog!==te||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==ge.numPlanes||be.numIntersection!==ge.numIntersection)||be.vertexAlphas!==Te||be.vertexTangents!==Xe||be.morphTargets!==Ae||be.morphNormals!==Ve||be.morphColors!==We||be.toneMapping!==mt||be.morphTargetsCount!==Be)&&(Ye=!0):(Ye=!0,be.__version=O.version);let Qe=be.currentProgram;Ye===!0&&(Qe=cn(O,D,U));let tt=!1,kt=!1,Tt=!1,Ot=Qe.getUniforms(),Xn=be.uniforms;if(ie.useProgram(Qe.program)&&(tt=!0,kt=!0,Tt=!0),O.id!==A&&(A=O.id,kt=!0),tt||z!==b){ee.reverseDepthBuffer?(Se.copy(b.projectionMatrix),Nu(Se),Fu(Se),Ot.setValue(w,"projectionMatrix",Se)):Ot.setValue(w,"projectionMatrix",b.projectionMatrix),Ot.setValue(w,"viewMatrix",b.matrixWorldInverse);let dn=Ot.map.cameraPosition;dn!==void 0&&dn.setValue(w,Re.setFromMatrixPosition(b.matrixWorld)),ee.logarithmicDepthBuffer&&Ot.setValue(w,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Ot.setValue(w,"isOrthographic",b.isOrthographicCamera===!0),z!==b&&(z=b,kt=!0,Tt=!0)}if(U.isSkinnedMesh){Ot.setOptional(w,U,"bindMatrix"),Ot.setOptional(w,U,"bindMatrixInverse");let dn=U.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),Ot.setValue(w,"boneTexture",dn.boneTexture,S))}U.isBatchedMesh&&(Ot.setOptional(w,U,"batchingTexture"),Ot.setValue(w,"batchingTexture",U._matricesTexture,S),Ot.setOptional(w,U,"batchingIdTexture"),Ot.setValue(w,"batchingIdTexture",U._indirectTexture,S),Ot.setOptional(w,U,"batchingColorTexture"),U._colorsTexture!==null&&Ot.setValue(w,"batchingColorTexture",U._colorsTexture,S));let sa=V.morphAttributes;if((sa.position!==void 0||sa.normal!==void 0||sa.color!==void 0)&&Ce.update(U,V,Qe),(kt||be.receiveShadow!==U.receiveShadow)&&(be.receiveShadow=U.receiveShadow,Ot.setValue(w,"receiveShadow",U.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Xn.envMap.value=ye,Xn.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&D.environment!==null&&(Xn.envMapIntensity.value=D.environmentIntensity),kt&&(Ot.setValue(w,"toneMappingExposure",M.toneMappingExposure),be.needsLights&&Tn(Xn,Tt),te&&O.fog===!0&&fe.refreshFogUniforms(Xn,te),fe.refreshMaterialUniforms(Xn,O,Y,L,p.state.transmissionRenderTarget[b.id]),Zi.upload(w,Pt(be),Xn,S)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Zi.upload(w,Pt(be),Xn,S),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Ot.setValue(w,"center",U.center),Ot.setValue(w,"modelViewMatrix",U.modelViewMatrix),Ot.setValue(w,"normalMatrix",U.normalMatrix),Ot.setValue(w,"modelMatrix",U.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){let dn=O.uniformsGroups;for(let ra=0,Ph=dn.length;ra<Ph;ra++){let Ll=dn[ra];I.update(Ll,Qe),I.bind(Ll,Qe)}}return Qe}function Tn(b,D){b.ambientLightColor.needsUpdate=D,b.lightProbe.needsUpdate=D,b.directionalLights.needsUpdate=D,b.directionalLightShadows.needsUpdate=D,b.pointLights.needsUpdate=D,b.pointLightShadows.needsUpdate=D,b.spotLights.needsUpdate=D,b.spotLightShadows.needsUpdate=D,b.rectAreaLights.needsUpdate=D,b.hemisphereLights.needsUpdate=D}function Dt(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,D,V){xe.get(b.texture).__webglTexture=D,xe.get(b.depthTexture).__webglTexture=V;let O=xe.get(b);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=V===void 0,O.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,D){let V=xe.get(b);V.__webglFramebuffer=D,V.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(b,D=0,V=0){R=b,C=D,P=V;let O=!0,U=null,te=!1,Pe=!1;if(b){let ye=xe.get(b);if(ye.__useDefaultFramebuffer!==void 0)ie.bindFramebuffer(w.FRAMEBUFFER,null),O=!1;else if(ye.__webglFramebuffer===void 0)S.setupRenderTarget(b);else if(ye.__hasExternalTextures)S.rebindTextures(b,xe.get(b.texture).__webglTexture,xe.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Ae=b.depthTexture;if(ye.__boundDepthTexture!==Ae){if(Ae!==null&&xe.has(Ae)&&(b.width!==Ae.image.width||b.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(b)}}let Te=b.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(Pe=!0);let Xe=xe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Xe[D])?U=Xe[D][V]:U=Xe[D],te=!0):b.samples>0&&S.useMultisampledRTT(b)===!1?U=xe.get(b).__webglMultisampledFramebuffer:Array.isArray(Xe)?U=Xe[V]:U=Xe,g.copy(b.viewport),x.copy(b.scissor),k=b.scissorTest}else g.copy(ae).multiplyScalar(Y).floor(),x.copy(re).multiplyScalar(Y).floor(),k=Je;if(ie.bindFramebuffer(w.FRAMEBUFFER,U)&&O&&ie.drawBuffers(b,U),ie.viewport(g),ie.scissor(x),ie.setScissorTest(k),te){let ye=xe.get(b.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+D,ye.__webglTexture,V)}else if(Pe){let ye=xe.get(b.texture),Te=D||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,ye.__webglTexture,V||0,Te)}A=-1},this.readRenderTargetPixels=function(b,D,V,O,U,te,Pe){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=xe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ee=Ee[Pe]),Ee){ie.bindFramebuffer(w.FRAMEBUFFER,Ee);try{let ye=b.texture,Te=ye.format,Xe=ye.type;if(!ee.textureFormatReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=b.width-O&&V>=0&&V<=b.height-U&&w.readPixels(D,V,O,U,Oe.convert(Te),Oe.convert(Xe),te)}finally{let ye=R!==null?xe.get(R).__webglFramebuffer:null;ie.bindFramebuffer(w.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(b,D,V,O,U,te,Pe){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=xe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ee=Ee[Pe]),Ee){let ye=b.texture,Te=ye.format,Xe=ye.type;if(!ee.textureFormatReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=b.width-O&&V>=0&&V<=b.height-U){ie.bindFramebuffer(w.FRAMEBUFFER,Ee);let Ae=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Ae),w.bufferData(w.PIXEL_PACK_BUFFER,te.byteLength,w.STREAM_READ),w.readPixels(D,V,O,U,Oe.convert(Te),Oe.convert(Xe),0);let Ve=R!==null?xe.get(R).__webglFramebuffer:null;ie.bindFramebuffer(w.FRAMEBUFFER,Ve);let We=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await Uu(w,We,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Ae),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,te),w.deleteBuffer(Ae),w.deleteSync(We),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,D=null,V=0){b.isTexture!==!0&&(Rr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,b=arguments[1]);let O=Math.pow(2,-V),U=Math.floor(b.image.width*O),te=Math.floor(b.image.height*O),Pe=D!==null?D.x:0,Ee=D!==null?D.y:0;S.setTexture2D(b,0),w.copyTexSubImage2D(w.TEXTURE_2D,V,0,0,Pe,Ee,U,te),ie.unbindTexture()},this.copyTextureToTexture=function(b,D,V=null,O=null,U=0){b.isTexture!==!0&&(Rr("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,b=arguments[1],D=arguments[2],U=arguments[3]||0,V=null);let te,Pe,Ee,ye,Te,Xe;V!==null?(te=V.max.x-V.min.x,Pe=V.max.y-V.min.y,Ee=V.min.x,ye=V.min.y):(te=b.image.width,Pe=b.image.height,Ee=0,ye=0),O!==null?(Te=O.x,Xe=O.y):(Te=0,Xe=0);let Ae=Oe.convert(D.format),Ve=Oe.convert(D.type);S.setTexture2D(D,0),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,D.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,D.unpackAlignment);let We=w.getParameter(w.UNPACK_ROW_LENGTH),mt=w.getParameter(w.UNPACK_IMAGE_HEIGHT),ht=w.getParameter(w.UNPACK_SKIP_PIXELS),Be=w.getParameter(w.UNPACK_SKIP_ROWS),be=w.getParameter(w.UNPACK_SKIP_IMAGES),It=b.isCompressedTexture?b.mipmaps[U]:b.image;w.pixelStorei(w.UNPACK_ROW_LENGTH,It.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,It.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ee),w.pixelStorei(w.UNPACK_SKIP_ROWS,ye),b.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,U,Te,Xe,te,Pe,Ae,Ve,It.data):b.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,U,Te,Xe,It.width,It.height,Ae,It.data):w.texSubImage2D(w.TEXTURE_2D,U,Te,Xe,te,Pe,Ae,Ve,It),w.pixelStorei(w.UNPACK_ROW_LENGTH,We),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,mt),w.pixelStorei(w.UNPACK_SKIP_PIXELS,ht),w.pixelStorei(w.UNPACK_SKIP_ROWS,Be),w.pixelStorei(w.UNPACK_SKIP_IMAGES,be),U===0&&D.generateMipmaps&&w.generateMipmap(w.TEXTURE_2D),ie.unbindTexture()},this.copyTextureToTexture3D=function(b,D,V=null,O=null,U=0){b.isTexture!==!0&&(Rr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,O=arguments[1]||null,b=arguments[2],D=arguments[3],U=arguments[4]||0);let te,Pe,Ee,ye,Te,Xe,Ae,Ve,We,mt=b.isCompressedTexture?b.mipmaps[U]:b.image;V!==null?(te=V.max.x-V.min.x,Pe=V.max.y-V.min.y,Ee=V.max.z-V.min.z,ye=V.min.x,Te=V.min.y,Xe=V.min.z):(te=mt.width,Pe=mt.height,Ee=mt.depth,ye=0,Te=0,Xe=0),O!==null?(Ae=O.x,Ve=O.y,We=O.z):(Ae=0,Ve=0,We=0);let ht=Oe.convert(D.format),Be=Oe.convert(D.type),be;if(D.isData3DTexture)S.setTexture3D(D,0),be=w.TEXTURE_3D;else if(D.isDataArrayTexture||D.isCompressedArrayTexture)S.setTexture2DArray(D,0),be=w.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,D.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,D.unpackAlignment);let It=w.getParameter(w.UNPACK_ROW_LENGTH),Ye=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Qe=w.getParameter(w.UNPACK_SKIP_PIXELS),tt=w.getParameter(w.UNPACK_SKIP_ROWS),kt=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,mt.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,mt.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,ye),w.pixelStorei(w.UNPACK_SKIP_ROWS,Te),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Xe),b.isDataTexture||b.isData3DTexture?w.texSubImage3D(be,U,Ae,Ve,We,te,Pe,Ee,ht,Be,mt.data):D.isCompressedArrayTexture?w.compressedTexSubImage3D(be,U,Ae,Ve,We,te,Pe,Ee,ht,mt.data):w.texSubImage3D(be,U,Ae,Ve,We,te,Pe,Ee,ht,Be,mt),w.pixelStorei(w.UNPACK_ROW_LENGTH,It),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Ye),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Qe),w.pixelStorei(w.UNPACK_SKIP_ROWS,tt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,kt),U===0&&D.generateMipmaps&&w.generateMipmap(be),ie.unbindTexture()},this.initRenderTarget=function(b){xe.get(b).__webglFramebuffer===void 0&&S.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?S.setTextureCube(b,0):b.isData3DTexture?S.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?S.setTexture2DArray(b,0):S.setTexture2D(b,0),ie.unbindTexture()},this.resetState=function(){C=0,P=0,R=null,ie.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===xl?"display-p3":"srgb",t.unpackColorSpace=xt.workingColorSpace===Kr?"display-p3":"srgb"}};var ns=class extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var In=class extends an{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},_n=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Le:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new N,s=[],r=[],o=[],a=new N,l=new Ft;for(let f=0;f<=e;f++){let _=f/e;s[f]=this.getTangentAt(_,new N)}r[0]=new N,o[0]=new N;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let _=Math.acos(Xt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,_))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Xt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],f*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},As=class extends _n{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Le){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Wo=class extends As{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ml(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var yr=new N,Fa=new Ml,ka=new Ml,Oa=new Ml,qo=class extends _n{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new N){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(yr.subVectors(s[0],s[1]).add(s[0]),c=yr);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(yr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=yr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),_<1e-4&&(_=v),p<1e-4&&(p=v),Fa.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,_,v,p),ka.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,_,v,p),Oa.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,_,v,p)}else this.curveType==="catmullrom"&&(Fa.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),ka.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Oa.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Fa.calc(l),ka.calc(l),Oa.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new N().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ic(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Dm(i,e){let t=1-i;return t*t*e}function Lm(i,e){return 2*(1-i)*i*e}function Um(i,e){return i*i*e}function bs(i,e,t,n){return Dm(i,e)+Lm(i,t)+Um(i,n)}function Nm(i,e){let t=1-i;return t*t*t*e}function Fm(i,e){let t=1-i;return 3*t*t*i*e}function km(i,e){return 3*(1-i)*i*i*e}function Om(i,e){return i*i*i*e}function vs(i,e,t,n,s){return Nm(i,e)+Fm(i,t)+km(i,n)+Om(i,s)}var Vr=class extends _n{constructor(e=new Le,t=new Le,n=new Le,s=new Le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Le){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(vs(e,s.x,r.x,o.x,a.x),vs(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Xo=class extends _n{constructor(e=new N,t=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new N){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(vs(e,s.x,r.x,o.x,a.x),vs(e,s.y,r.y,o.y,a.y),vs(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Wr=class extends _n{constructor(e=new Le,t=new Le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Le){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Yo=class extends _n{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qr=class extends _n{constructor(e=new Le,t=new Le,n=new Le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Le){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(bs(e,s.x,r.x,o.x),bs(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zo=class extends _n{constructor(e=new N,t=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new N){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(bs(e,s.x,r.x,o.x),bs(e,s.y,r.y,o.y),bs(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xr=class extends _n{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Le){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Ic(a,l.x,c.x,h.x,u.x),Ic(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Le().fromArray(s))}return this}},Jo=Object.freeze({__proto__:null,ArcCurve:Wo,CatmullRomCurve3:qo,CubicBezierCurve:Vr,CubicBezierCurve3:Xo,EllipseCurve:As,LineCurve:Wr,LineCurve3:Yo,QuadraticBezierCurve:qr,QuadraticBezierCurve3:Zo,SplineCurve:Xr}),$o=class extends _n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Jo[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Jo[s.type]().fromJSON(s))}return this}},Dn=class extends $o{constructor(e){super(),this.type="Path",this.currentPoint=new Le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Wr(this.currentPoint.clone(),new Le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new qr(this.currentPoint.clone(),new Le(e,t),new Le(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Vr(this.currentPoint.clone(),new Le(e,t),new Le(n,s),new Le(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Xr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new As(e,t,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var he=class i extends Wn{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],_=0,v=[],p=n/2,m=0;T(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new sn(u,3)),this.setAttribute("normal",new sn(d,3)),this.setAttribute("uv",new sn(f,2));function T(){let E=new N,C=new N,P=0,R=(t-e)/n;for(let A=0;A<=r;A++){let z=[],g=A/r,x=g*(t-e)+e;for(let k=0;k<=s;k++){let F=k/s,H=F*l+a,X=Math.sin(H),L=Math.cos(H);C.x=x*X,C.y=-g*n+p,C.z=x*L,u.push(C.x,C.y,C.z),E.set(X,R,L).normalize(),d.push(E.x,E.y,E.z),f.push(F,1-g),z.push(_++)}v.push(z)}for(let A=0;A<s;A++)for(let z=0;z<r;z++){let g=v[z][A],x=v[z+1][A],k=v[z+1][A+1],F=v[z][A+1];e>0&&(h.push(g,x,F),P+=3),t>0&&(h.push(x,k,F),P+=3)}c.addGroup(m,P,0),m+=P}function M(E){let C=_,P=new Le,R=new N,A=0,z=E===!0?e:t,g=E===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,p*g,0),d.push(0,g,0),f.push(.5,.5),_++;let x=_;for(let k=0;k<=s;k++){let H=k/s*l+a,X=Math.cos(H),L=Math.sin(H);R.x=z*L,R.y=p*g,R.z=z*X,u.push(R.x,R.y,R.z),d.push(0,g,0),P.x=X*.5+.5,P.y=L*.5*g+.5,f.push(P.x,P.y),_++}for(let k=0;k<s;k++){let F=C+k,H=x+k;E===!0?h.push(H,H+1,F):h.push(H+1,H,F),A+=3}c.addGroup(m,A,E===!0?1:2),m+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var qn=class extends Dn{constructor(e){super(e),this.uuid=Ri(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Dn().fromJSON(s))}return this}},Hm={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=lh(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,f;if(n&&(r=Wm(i,e,r,t)),i.length>80*t){a=c=i[0],l=h=i[1];for(let _=t;_<s;_+=t)u=i[_],d=i[_+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return Cs(r,o,t,a,l,f,0),o}};function lh(i,e,t,n,s){let r,o;if(s===tg(i,e,t,n)>0)for(r=e;r<t;r+=n)o=Dc(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=Dc(r,i[r],i[r+1],o);return o&&Qr(o,o.next)&&(Is(o),o=o.next),o}function Ei(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Qr(t,t.next)||Nt(t.prev,t,t.next)===0)){if(Is(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Cs(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Jm(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?zm(i,n,s,r):Bm(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Is(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Gm(Ei(i),e,t),Cs(i,e,t,n,s,r,2)):o===2&&Vm(i,e,t,n,s,r):Cs(Ei(i),e,t,n,s,r,1);break}}}function Bm(i){let e=i.prev,t=i,n=i.next;if(Nt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,_=n.next;for(;_!==e;){if(_.x>=h&&_.x<=d&&_.y>=u&&_.y<=f&&Wi(s,a,r,l,o,c,_.x,_.y)&&Nt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function zm(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Nt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,_=h<u?h<d?h:d:u<d?u:d,v=a>l?a>c?a:c:l>c?l:c,p=h>u?h>d?h:d:u>d?u:d,m=Ko(f,_,e,t,n),T=Ko(v,p,e,t,n),M=i.prevZ,E=i.nextZ;for(;M&&M.z>=m&&E&&E.z<=T;){if(M.x>=f&&M.x<=v&&M.y>=_&&M.y<=p&&M!==s&&M!==o&&Wi(a,h,l,u,c,d,M.x,M.y)&&Nt(M.prev,M,M.next)>=0||(M=M.prevZ,E.x>=f&&E.x<=v&&E.y>=_&&E.y<=p&&E!==s&&E!==o&&Wi(a,h,l,u,c,d,E.x,E.y)&&Nt(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;M&&M.z>=m;){if(M.x>=f&&M.x<=v&&M.y>=_&&M.y<=p&&M!==s&&M!==o&&Wi(a,h,l,u,c,d,M.x,M.y)&&Nt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;E&&E.z<=T;){if(E.x>=f&&E.x<=v&&E.y>=_&&E.y<=p&&E!==s&&E!==o&&Wi(a,h,l,u,c,d,E.x,E.y)&&Nt(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function Gm(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!Qr(s,r)&&ch(s,n,n.next,r)&&Ps(s,r)&&Ps(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Is(n),Is(n.next),n=i=r),n=n.next}while(n!==i);return Ei(n)}function Vm(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&jm(o,a)){let l=hh(o,a);o=Ei(o,o.next),l=Ei(l,l.next),Cs(o,e,t,n,s,r,0),Cs(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Wm(i,e,t,n){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=lh(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Km(c));for(s.sort(qm),r=0;r<s.length;r++)t=Xm(s[r],t);return t}function qm(i,e){return i.x-e.x}function Xm(i,e){let t=Ym(i,e);if(!t)return e;let n=hh(t,i);return Ei(n,n.next),Ei(t,t.next)}function Ym(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Wi(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),Ps(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&Zm(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function Zm(i,e){return Nt(i.prev,i,e.prev)<0&&Nt(e.next,i,i.next)<0}function Jm(i,e,t,n){let s=i;do s.z===0&&(s.z=Ko(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,$m(s)}function $m(i){let e,t,n,s,r,o,a,l,c=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(o>1);return i}function Ko(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Km(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Wi(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function jm(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Qm(i,e)&&(Ps(i,e)&&Ps(e,i)&&eg(i,e)&&(Nt(i.prev,i,e.prev)||Nt(i,e.prev,e))||Qr(i,e)&&Nt(i.prev,i,i.next)>0&&Nt(e.prev,e,e.next)>0)}function Nt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Qr(i,e){return i.x===e.x&&i.y===e.y}function ch(i,e,t,n){let s=br(Nt(i,e,t)),r=br(Nt(i,e,n)),o=br(Nt(t,n,i)),a=br(Nt(t,n,e));return!!(s!==r&&o!==a||s===0&&xr(i,t,e)||r===0&&xr(i,n,e)||o===0&&xr(t,i,n)||a===0&&xr(t,e,n))}function xr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function br(i){return i>0?1:i<0?-1:0}function Qm(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&ch(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ps(i,e){return Nt(i.prev,i,i.next)<0?Nt(i,e,i.next)>=0&&Nt(i,i.prev,e)>=0:Nt(i,e,i.prev)<0||Nt(i,i.next,e)<0}function eg(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function hh(i,e){let t=new jo(i.i,i.x,i.y),n=new jo(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Dc(i,e,t,n){let s=new jo(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Is(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function jo(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function tg(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Ms=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Lc(e),Uc(n,e);let o=e.length;t.forEach(Lc);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Uc(n,t[l]);let a=Hm.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Lc(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Uc(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var ii=class i extends Wn{constructor(e=new qn([new Le(.5,.5),new Le(-.5,.5),new Le(-.5,-.5),new Le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new sn(s,3)),this.setAttribute("uv",new sn(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,T=t.UVGenerator!==void 0?t.UVGenerator:ng,M,E=!1,C,P,R,A;m&&(M=m.getSpacedPoints(h),E=!0,d=!1,C=m.computeFrenetFrames(h,!1),P=new N,R=new N,A=new N),d||(p=0,f=0,_=0,v=0);let z=a.extractPoints(c),g=z.shape,x=z.holes;if(!Ms.isClockWise(g)){g=g.reverse();for(let $=0,w=x.length;$<w;$++){let Me=x[$];Ms.isClockWise(Me)&&(x[$]=Me.reverse())}}let F=Ms.triangulateShape(g,x),H=g;for(let $=0,w=x.length;$<w;$++){let Me=x[$];g=g.concat(Me)}function X($,w,Me){return w||console.error("THREE.ExtrudeGeometry: vec does not exist"),$.clone().addScaledVector(w,Me)}let L=g.length,Y=F.length;function q($,w,Me){let oe,ee,ie,He=$.x-w.x,xe=$.y-w.y,S=Me.x-$.x,y=Me.y-$.y,B=He*He+xe*xe,J=He*y-xe*S;if(Math.abs(J)>Number.EPSILON){let K=Math.sqrt(B),W=Math.sqrt(S*S+y*y),ke=w.x-xe/K,fe=w.y+He/K,pe=Me.x-y/W,Ne=Me.y+S/W,ge=((pe-ke)*y-(Ne-fe)*S)/(He*y-xe*S);oe=ke+He*ge-$.x,ee=fe+xe*ge-$.y;let ve=oe*oe+ee*ee;if(ve<=2)return new Le(oe,ee);ie=Math.sqrt(ve/2)}else{let K=!1;He>Number.EPSILON?S>Number.EPSILON&&(K=!0):He<-Number.EPSILON?S<-Number.EPSILON&&(K=!0):Math.sign(xe)===Math.sign(y)&&(K=!0),K?(oe=-xe,ee=He,ie=Math.sqrt(B)):(oe=He,ee=xe,ie=Math.sqrt(B/2))}return new Le(oe/ie,ee/ie)}let de=[];for(let $=0,w=H.length,Me=w-1,oe=$+1;$<w;$++,Me++,oe++)Me===w&&(Me=0),oe===w&&(oe=0),de[$]=q(H[$],H[Me],H[oe]);let ae=[],re,Je=de.concat();for(let $=0,w=x.length;$<w;$++){let Me=x[$];re=[];for(let oe=0,ee=Me.length,ie=ee-1,He=oe+1;oe<ee;oe++,ie++,He++)ie===ee&&(ie=0),He===ee&&(He=0),re[oe]=q(Me[oe],Me[ie],Me[He]);ae.push(re),Je=Je.concat(re)}for(let $=0;$<p;$++){let w=$/p,Me=f*Math.cos(w*Math.PI/2),oe=_*Math.sin(w*Math.PI/2)+v;for(let ee=0,ie=H.length;ee<ie;ee++){let He=X(H[ee],de[ee],oe);se(He.x,He.y,-Me)}for(let ee=0,ie=x.length;ee<ie;ee++){let He=x[ee];re=ae[ee];for(let xe=0,S=He.length;xe<S;xe++){let y=X(He[xe],re[xe],oe);se(y.x,y.y,-Me)}}}let ze=_+v;for(let $=0;$<L;$++){let w=d?X(g[$],Je[$],ze):g[$];E?(R.copy(C.normals[0]).multiplyScalar(w.x),P.copy(C.binormals[0]).multiplyScalar(w.y),A.copy(M[0]).add(R).add(P),se(A.x,A.y,A.z)):se(w.x,w.y,0)}for(let $=1;$<=h;$++)for(let w=0;w<L;w++){let Me=d?X(g[w],Je[w],ze):g[w];E?(R.copy(C.normals[$]).multiplyScalar(Me.x),P.copy(C.binormals[$]).multiplyScalar(Me.y),A.copy(M[$]).add(R).add(P),se(A.x,A.y,A.z)):se(Me.x,Me.y,u/h*$)}for(let $=p-1;$>=0;$--){let w=$/p,Me=f*Math.cos(w*Math.PI/2),oe=_*Math.sin(w*Math.PI/2)+v;for(let ee=0,ie=H.length;ee<ie;ee++){let He=X(H[ee],de[ee],oe);se(He.x,He.y,u+Me)}for(let ee=0,ie=x.length;ee<ie;ee++){let He=x[ee];re=ae[ee];for(let xe=0,S=He.length;xe<S;xe++){let y=X(He[xe],re[xe],oe);E?se(y.x,y.y+M[h-1].y,M[h-1].x+Me):se(y.x,y.y,u+Me)}}}G(),Z();function G(){let $=s.length/3;if(d){let w=0,Me=L*w;for(let oe=0;oe<Y;oe++){let ee=F[oe];Re(ee[2]+Me,ee[1]+Me,ee[0]+Me)}w=h+p*2,Me=L*w;for(let oe=0;oe<Y;oe++){let ee=F[oe];Re(ee[0]+Me,ee[1]+Me,ee[2]+Me)}}else{for(let w=0;w<Y;w++){let Me=F[w];Re(Me[2],Me[1],Me[0])}for(let w=0;w<Y;w++){let Me=F[w];Re(Me[0]+L*h,Me[1]+L*h,Me[2]+L*h)}}n.addGroup($,s.length/3-$,0)}function Z(){let $=s.length/3,w=0;Se(H,w),w+=H.length;for(let Me=0,oe=x.length;Me<oe;Me++){let ee=x[Me];Se(ee,w),w+=ee.length}n.addGroup($,s.length/3-$,1)}function Se($,w){let Me=$.length;for(;--Me>=0;){let oe=Me,ee=Me-1;ee<0&&(ee=$.length-1);for(let ie=0,He=h+p*2;ie<He;ie++){let xe=L*ie,S=L*(ie+1),y=w+oe+xe,B=w+ee+xe,J=w+ee+S,K=w+oe+S;we(y,B,J,K)}}}function se($,w,Me){l.push($),l.push(w),l.push(Me)}function Re($,w,Me){Ze($),Ze(w),Ze(Me);let oe=s.length/3,ee=T.generateTopUV(n,s,oe-3,oe-2,oe-1);Ge(ee[0]),Ge(ee[1]),Ge(ee[2])}function we($,w,Me,oe){Ze($),Ze(w),Ze(oe),Ze(w),Ze(Me),Ze(oe);let ee=s.length/3,ie=T.generateSideWallUV(n,s,ee-6,ee-3,ee-2,ee-1);Ge(ie[0]),Ge(ie[1]),Ge(ie[3]),Ge(ie[1]),Ge(ie[2]),Ge(ie[3])}function Ze($){s.push(l[$*3+0]),s.push(l[$*3+1]),s.push(l[$*3+2])}function Ge($){r.push($.x),r.push($.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return ig(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Jo[s.type]().fromJSON(s)),new i(n,e.options)}},ng={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new Le(r,o),new Le(a,l),new Le(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],_=e[s*3+2],v=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Le(o,1-l),new Le(c,1-u),new Le(d,1-_),new Le(v,1-m)]:[new Le(a,1-l),new Le(h,1-u),new Le(f,1-_),new Le(p,1-m)]}};function ig(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var si=class extends ni{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new qe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};var _e=class extends ni{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jc,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ri=class extends _e{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function vr(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function sg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var is=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Qo=class extends is{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ol,endingEnd:Ol}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Hl:r=e,a=2*t-n;break;case Bl:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Hl:o=e,l=2*n-t;break;case Bl:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,_=(n-t)/(s-t),v=_*_,p=v*_,m=-d*p+2*d*v-d*_,T=(1+d)*p+(-1.5-2*d)*v+(-.5+d)*_+1,M=(-1-f)*p+(1.5+f)*v+.5*_,E=f*p-f*v;for(let C=0;C!==a;++C)r[C]=m*o[h+C]+T*o[c+C]+M*o[l+C]+E*o[u+C];return r}},el=class extends is{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},tl=class extends is{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},wn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=vr(t,this.TimeBufferType),this.values=vr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:vr(e.times,Array),values:vr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new tl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new el(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Qo(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ar:t=this.InterpolantFactoryMethodDiscrete;break;case To:t=this.InterpolantFactoryMethodLinear;break;case la:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ar;case this.InterpolantFactoryMethodLinear:return To;case this.InterpolantFactoryMethodSmooth:return la}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&sg(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===la,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let _=0;_!==n;++_){let v=t[u+_];if(v!==t[d+_]||v!==t[f+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=To;var Si=class extends wn{constructor(e,t,n){super(e,t,n)}};Si.prototype.ValueTypeName="bool";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=Ar;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var nl=class extends wn{};nl.prototype.ValueTypeName="color";var il=class extends wn{};il.prototype.ValueTypeName="number";var sl=class extends is{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)on.slerpFlat(r,0,o,c-a,o,c,l);return r}},Yr=class extends wn{InterpolantFactoryMethodLinear(e){return new sl(this.times,this.values,this.getValueSize(),e)}};Yr.prototype.ValueTypeName="quaternion";Yr.prototype.InterpolantFactoryMethodSmooth=void 0;var wi=class extends wn{constructor(e,t,n){super(e,t,n)}};wi.prototype.ValueTypeName="string";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=Ar;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;var rl=class extends wn{};rl.prototype.ValueTypeName="vector";var Nc={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},al=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],_=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null}}},rg=new al,Ds=class{constructor(e){this.manager=e!==void 0?e:rg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ds.DEFAULT_MATERIAL_NAME="__DEFAULT";var ol=class extends Ds{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Nc.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=ws("img");function l(){h(),Nc.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var ai=class extends Ds{constructor(e){super(e)}load(e,t,n,s){let r=new an,o=new ol(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Ls=class extends nn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},oi=class extends Ls{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ha=new Ft,Fc=new N,kc=new N,Zr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.map=null,this.mapPass=null,this.matrix=new Ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rs,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Fc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fc),kc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kc),t.updateMatrixWorld(),Ha.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ha),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ha)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Oc=new Ft,ms=new N,Ba=new N,ll=class extends Zr{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Le(4,2),this._viewportCount=6,this._viewports=[new Mt(2,1,1,1),new Mt(0,1,1,1),new Mt(3,1,1,1),new Mt(1,1,1,1),new Mt(3,0,1,1),new Mt(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ms.setFromMatrixPosition(e.matrixWorld),n.position.copy(ms),Ba.copy(n.position),Ba.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ba),n.updateMatrixWorld(),s.makeTranslation(-ms.x,-ms.y,-ms.z),Oc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oc)}},Jr=class extends Ls{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ll}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},cl=class extends Zr{constructor(){super(new Br(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ln=class extends Ls{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.shadow=new cl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var El="\\[\\]\\.:\\/",ag=new RegExp("["+El+"]","g"),Sl="[^"+El+"]",og="[^"+El.replace("\\.","")+"]",lg=/((?:WC+[\/:])*)/.source.replace("WC",Sl),cg=/(WCOD+)?/.source.replace("WCOD",og),hg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sl),ug=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sl),dg=new RegExp("^"+lg+cg+hg+ug+"$"),fg=["material","materials","bones","map"],hl=class{constructor(e,t,n){let s=n||Ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ut=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ag,"")}static parseTrackName(e){let t=dg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);fg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ut.Composite=hl;Ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ut.prototype.GetterByBindingType=[Ut.prototype._getValue_direct,Ut.prototype._getValue_array,Ut.prototype._getValue_arrayElement,Ut.prototype._getValue_toArray];Ut.prototype.SetterByBindingTypeAndVersioning=[[Ut.prototype._setValue_direct,Ut.prototype._setValue_direct_setNeedsUpdate,Ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_array,Ut.prototype._setValue_array_setNeedsUpdate,Ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_arrayElement,Ut.prototype._setValue_arrayElement_setNeedsUpdate,Ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_fromArray,Ut.prototype._setValue_fromArray_setNeedsUpdate,Ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var v_=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ul}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ul);var Rl={};aa(Rl,{configureISO20ftDryContainerRenderer:()=>Dg,createISO20ftDryContainerEnvironment:()=>Pg,createISO20ftDryContainerLookDevLights:()=>Cg,createISO20ftDryContainerModel:()=>Ag,frameISO20ftDryContainerCamera:()=>Ig});var ci=class extends ns{constructor(){super();let e=new Ie;e.deleteAttribute("uv");let t=new _e({side:jt}),n=new _e,s=new Jr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new ne(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new ne(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new ne(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new ne(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new ne(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new ne(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new ne(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let d=new ne(e,rs(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let f=new ne(e,rs(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let _=new ne(e,rs(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);let v=new ne(e,rs(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);let p=new ne(e,rs(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);let m=new ne(e,rs(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function rs(i){let e=new es;return e.color.setScalar(i),e}function pg(i,e){let t=new qn;if(i.length>0){t.moveTo(i[0][0],i[0][1]);for(let n=1;n<i.length;n+=1)t.lineTo(i[n][0],i[n][1])}for(let n of e??[]){if(n.length<3)continue;let s=new Dn;s.moveTo(n[0][0],n[0][1]);for(let r=1;r<n.length;r+=1)s.lineTo(n[r][0],n[r][1]);s.closePath(),t.holes.push(s)}return t}function mg(i,e,t,n,s=24){let r=[];for(let o=0;o<s;o+=1){let a=o/s*Math.PI*2;r.push([i+Math.cos(a)*t,e+Math.sin(a)*n])}return r}function uh(i){let e=[...i.holes??[],...(i.ovalHoles??[]).map(n=>mg(n.cx,n.cy,n.rx,n.ry))],t=pg(i.points,e);return new ii(t,{depth:i.depth,bevelEnabled:!1,steps:1})}function gg(i){let e=2166136261;for(let t=0;t<i.length;t+=1)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function gt(i,e,t){if(typeof i=="number")return i;if(i&&typeof i=="object"){let n=i;for(let s of e)if(typeof n[s]=="number")return n[s]}return t}function _g(i){let e=/^#[0-9a-f]{3}$/i.test(i)?"#"+i.slice(1).split("").map(n=>n+n).join(""):i,t=/^#[0-9a-f]{6}$/i.test(e)?Number.parseInt(e.slice(1),16):9075295;return[as(t>>16&255),as(t>>8&255),as(t&255)]}function yg(i){let e=i.colorVariation?.palette;if(Array.isArray(e)&&e.length>0)return e.filter(s=>typeof s=="string");let t=i.albedo?.secondary;return[i.baseColor??i.color??i.albedo?.dominant,...Array.isArray(t)?t:[]].filter(s=>typeof s=="string"&&s.startsWith("#"))}function Ht(i){return Math.max(0,Math.min(1,i))}function as(i){return Math.max(30,Math.min(240,Math.round(i)))}function xg(i){return Math.max(.02,Math.min(1,i))}function dh(i){return Math.max(1,Math.min(2.5,i))}function bg(i){return i>=.5?1:0}function vg(i){let e=typeof i.baseColor=="string"?i.baseColor:"#8A7A5F";return new qe().setStyle(e,Rt)}function fh(i){return i*i*(3-2*i)}function ea(i,e,t,n,s){let r=(i%n+n)%n,o=(e%s+s)%s,a=Math.imul(r+t*17,374761393)^Math.imul(o+t*31,668265263);return a=Math.imul(a^a>>>13,1274126177),((a^a>>>16)>>>0)/4294967295}function Mg(i,e,t,n,s){let r=i*n,o=e*s,a=Math.floor(r),l=Math.floor(o),c=fh(r-a),h=fh(o-l),u=ea(a,l,t,n,s),d=ea(a+1,l,t,n,s),f=ea(a,l+1,t,n,s),_=ea(a+1,l+1,t,n,s);return pt.lerp(pt.lerp(u,d,c),pt.lerp(f,_,c),h)}function Eg(i){let t=(Array.isArray(i.surfaceFrequencyBands)?i.surfaceFrequencyBands:[]).flatMap(n=>{if(!n||typeof n!="object")return[];let s=n,r=typeof s.frequency=="number"?s.frequency:0,o=typeof s.amplitude=="number"?s.amplitude:0;if(r<=0||o<=0)return[];let a=Array.isArray(s.stretch)?s.stretch:[1,1],l=`${String(s.pattern??"")} ${String(s.role??"")}`.toLowerCase();return[{frequency:r,amplitude:o,stretchX:typeof a[0]=="number"?Math.max(.1,a[0]):1,stretchY:typeof a[1]=="number"?Math.max(.1,a[1]):1,ridge:/(ridge|groove|grain|fiber|striated|crack)/.test(l)}]});return t.length>0?t:[{frequency:2,amplitude:.42,stretchX:1,stretchY:1,ridge:!1},{frequency:12,amplitude:.22,stretchX:1,stretchY:1,ridge:!1},{frequency:56,amplitude:.08,stretchX:1,stretchY:1,ridge:!1}]}function wl(i,e,t,n){let s=0,r=0;for(let o=0;o<t.length;o+=1){let a=t[o],l=Math.max(1,Math.round(a.frequency*a.stretchX)),c=Math.max(1,Math.round(a.frequency*a.stretchY)),h=Mg(i,e,n+o*1013,l,c);a.ridge&&(h=1-Math.abs(h*2-1)),s+=h*a.amplitude,r+=a.amplitude}return r>0?Ht(s/r):.5}function Sg(i,e){if(i.length===1)return i[0];let t=Ht(e)*(i.length-1),n=Math.min(i.length-2,Math.floor(t)),s=t-n,r=i[n],o=i[n+1];return[Math.round(pt.lerp(r[0],o[0],s)),Math.round(pt.lerp(r[1],o[1],s)),Math.round(pt.lerp(r[2],o[2],s))]}function ph(i){let e=/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/.exec(i);return e?[as(Number(e[1])),as(Number(e[2])),as(Number(e[3]))]:[138,122,95]}function wg(i,e,t){let n=i.stops.length>=2?i.stops:[{offset:0,color:"rgba(138,122,95,1)"},{offset:1,color:"rgba(138,122,95,1)"}],s;if(i.type==="radial"){let[h,u]=i.axis,d=e-h,f=t-u,_=Math.max(.001,Math.hypot(Math.max(h,1-h),Math.max(u,1-u)));s=Ht(Math.hypot(d,f)/_)}else{let[h,u]=i.axis,d=(e-.5)*h+(t-.5)*u,f=.5*(Math.abs(h)+Math.abs(u))||.5;s=Ht(d/f+.5)}let r=s*(n.length-1),o=Math.min(n.length-2,Math.max(0,Math.floor(r))),a=r-o,l=ph(n[o].color),c=ph(n[o+1].color);return[pt.lerp(l[0],c[0],a),pt.lerp(l[1],c[1],a),pt.lerp(l[2],c[2],a)]}function Fs(i,e,t,n,s){i[e]=Math.max(0,Math.min(255,Math.round(t))),i[e+1]=Math.max(0,Math.min(255,Math.round(n))),i[e+2]=Math.max(0,Math.min(255,Math.round(s))),i[e+3]=255}function ks(i){let e=document.createElement("canvas");return e.width=i,e.height=i,e}function Os(i,e,t,n){let s=new In(i),r=t.textureProjection&&typeof t.textureProjection=="object"?t.textureProjection:{},o=Array.isArray(r.repeat)?r.repeat:[2,2];return s.colorSpace=e,s.wrapS=Yt,s.wrapT=Yt,s.repeat.set(typeof o[0]=="number"?o[0]:2,typeof o[1]=="number"?o[1]:2),s.anisotropy=Math.max(1,Math.round(n.textureAnisotropy??r.anisotropy??8)),s.needsUpdate=!0,s}function Hs(i,e){let t=i.referencePbr;if(!t||typeof t!="object"||t.usable===!1)return null;let n=typeof t.confidence=="number"?t.confidence:typeof t.estimatedFidelity=="number"?t.estimatedFidelity:0,s=typeof t.targetThreshold=="number"?t.targetThreshold:.7;if(n<s)return null;let r=t.maps;if(!r||typeof r!="object")return null;let o=r[e];if(!o||typeof o!="object")return null;let a=o,l=typeof a.url=="string"&&a.url.trim()?a.url:a.path;return typeof l=="string"&&l.trim()?l:null}function Bs(i,e,t,n){let s=new ai().load(i),r=t.textureProjection&&typeof t.textureProjection=="object"?t.textureProjection:{},o=Array.isArray(r.repeat)?r.repeat:[1,1];return s.colorSpace=e,s.wrapS=Yt,s.wrapT=Yt,s.repeat.set(typeof o[0]=="number"?o[0]:1,typeof o[1]=="number"?o[1]:1),s.anisotropy=Math.max(1,Math.round(n.textureAnisotropy??r.anisotropy??8)),s.needsUpdate=!0,s}function Tg(i,e){let t=Hs(i,"albedo"),n=Hs(i,"roughness"),s=Hs(i,"height"),r=Hs(i,"normal"),o=Hs(i,"ao");return!t||!n||!s||!r||!o?null:{albedo:Bs(t,Rt,i,e),roughness:Bs(n,dt,i,e),height:Bs(s,dt,i,e),normal:Bs(r,dt,i,e),ao:Bs(o,dt,i,e),source:"reference-pixel-extraction"}}function Rg(i,e,t){if(typeof document>"u")return null;let n=(t.qualityPriority??"reference-fidelity")==="reference-fidelity",s=t.textureSize??e.textureResolution,r=typeof s=="number"&&Number.isFinite(s)?s:n?1024:512,o=Math.max(256,Math.min(2048,2**Math.round(Math.log2(r)))),a={albedo:ks(o),roughness:ks(o),height:ks(o),normal:ks(o),ao:ks(o)},l={albedo:a.albedo.getContext("2d"),roughness:a.roughness.getContext("2d"),height:a.height.getContext("2d"),normal:a.normal.getContext("2d"),ao:a.ao.getContext("2d")};if(!l.albedo||!l.roughness||!l.height||!l.normal||!l.ao)return null;let c={albedo:l.albedo.createImageData(o,o),roughness:l.roughness.createImageData(o,o),height:l.height.createImageData(o,o),normal:l.normal.createImageData(o,o),ao:l.ao.createImageData(o,o)},h=gg(i),u=Eg(e),d=new Float32Array(o*o),f=new Float32Array(o*o),_=yg(e),v=typeof e.baseColor=="string"?e.baseColor:"#8A7A5F",p=(_.length>=2?_:[v,"#6E614B","#A08F70"]).map(_g),m=Ht(gt(e.roughness,["base"],.76)),T=Ht(gt(e.roughness,["variation"],.18)),M=Ht(gt(e.colorVariation,["amplitude","variation"],.18)),E=Ht(gt(e.colorVariation,["heightCorrelation"],.3)),C=e.colorGradient;for(let A=0;A<o;A+=1){let z=A/o;for(let g=0;g<o;g+=1){let x=g/o,k=A*o+g,F=wl(x,z,u,h+101),H=wl(x,z,u,h+7001),X=wl(x,z,u,h+15013);d[k]=F,f[k]=Ht(m+(H-.5)*T*2);let L;if(C)L=wg(C,x,z);else{let Y=Ht(.5+(X-.5)*M*2+(F-.5)*E);L=Sg(p,Y)}Fs(c.albedo.data,k*4,L[0],L[1],L[2])}}let P=Math.max(.05,gt(e.normal,["strength","amplitude"],.35)),R=Ht(gt(e.ambientOcclusion,["cavityStrength","strength"],.35));for(let A=0;A<o;A+=1){let z=(A-1+o)%o*o,g=(A+1)%o*o;for(let x=0;x<o;x+=1){let k=(x-1+o)%o,F=(x+1)%o,H=A*o+x,X=d[H],L=(d[A*o+F]-d[A*o+k])*P*6,Y=(d[g+x]-d[z+x])*P*6,q=1/Math.sqrt(L*L+Y*Y+1),de=-L*q,ae=-Y*q,re=q,Je=(d[A*o+k]+d[A*o+F]+d[z+x]+d[g+x])*.25,ze=Math.max(0,Je-X),G=Ht(1-R*(ze*12+(1-X)*.16)),Z=H*4,Se=X*255,se=f[H]*255;Fs(c.height.data,Z,Se,Se,Se),Fs(c.roughness.data,Z,se,se,se),Fs(c.normal.data,Z,(de*.5+.5)*255,(ae*.5+.5)*255,(re*.5+.5)*255),Fs(c.ao.data,Z,G*255,G*255,G*255)}}return l.albedo.putImageData(c.albedo,0,0),l.roughness.putImageData(c.roughness,0,0),l.height.putImageData(c.height,0,0),l.normal.putImageData(c.normal,0,0),l.ao.putImageData(c.ao,0,0),{albedo:Os(a.albedo,Rt,e,t),roughness:Os(a.roughness,dt,e,t),height:Os(a.height,dt,e,t),normal:Os(a.normal,dt,e,t),ao:Os(a.ao,dt,e,t),source:"procedural"}}function Tl(i,e,t,n=!1){let r=e.textureless?.declared===!0?null:Tg(e,t)??Rg(i,e,t),o=new ri({color:r?16777215:vg(e),roughness:r?1:Ht(gt(e.roughness,["base"],.76)),metalness:bg(gt(e.metalness,["base"],0)),clearcoat:Ht(gt(e.clearcoat,["base","amount"],0)),clearcoatRoughness:Ht(gt(e.clearcoatRoughness,["base"],.25)),transmission:Ht(gt(e.transmission,["base","amount"],0)),ior:dh(gt(e.ior,["base","value"],1.5)),thickness:Math.max(0,gt(e.thickness,["base","amount"],0)),attenuationDistance:Math.max(.001,gt(e.attenuationDistance,["base","value"],1/0)),attenuationColor:new qe(typeof e.attenuationColor=="string"?e.attenuationColor:"#ffffff"),sheen:Ht(gt(e.sheen,["base","amount"],0)),sheenColor:new qe(typeof e.sheenColor=="string"?e.sheenColor:"#ffffff"),sheenRoughness:Ht(gt(e.sheenRoughness,["base"],1)),iridescence:Ht(gt(e.iridescence,["base","amount"],0)),iridescenceIOR:dh(gt(e.iridescenceIOR,["base","value"],1.3)),anisotropy:Ht(gt(e.anisotropy,["base","amount"],0)),anisotropyRotation:gt(e.anisotropy,["rotation"],0),specularIntensity:xg(gt(e.specularF0??e.f0??e.specularIntensity,["base","value"],1)),specularColor:new qe(typeof e.specularColor=="string"?e.specularColor:"#ffffff"),emissive:new qe(typeof e.emissive=="string"?e.emissive:"#000000"),emissiveIntensity:Math.max(0,gt(e.emissiveIntensity,["base"],1)),opacity:Ht(gt(e.opacity,["base"],1)),transparent:gt(e.transmission,["base","amount"],0)>0||gt(e.opacity,["base"],1)<1,alphaTest:Math.max(0,gt(e.alpha,["cutoff","alphaTest"],0)),wireframe:t.wireframe??!1,side:e.doubleSided===!0?tn:rn,flatShading:e.flatShading===!0});if(r){o.map=r.albedo,o.roughnessMap=r.roughness,o.normalMap=r.normal,o.normalScale.setScalar(Math.max(.05,gt(e.normal,["strength","amplitude"],.35))),o.aoMap=r.ao,o.aoMap.channel=0,o.aoMapIntensity=gt(e.ambientOcclusion,["cavityStrength","strength"],.35);let a=n||e.denseMesh===!0||e.geometryDensity==="dense"||e.topologyClass==="dense",l=Math.max(0,gt(e.bump,["amplitude","strength"],0)),c=a?Math.max(.05,l):l;c>0&&(o.bumpMap=r.height,o.bumpScale=c);let h=Math.max(0,gt(e.displacement,["amplitude","strength"],0)),u=a?Math.max(.005,h):h;u>0&&(o.displacementMap=r.height,o.displacementScale=u,o.displacementBias=-u*.5)}return o.envMapIntensity=gt(e,["envMapIntensity"],.8),o.userData.sculptMaterial=e,o.userData.proceduralMapsIndependent=!0,o.userData.pbrConstraints={albedoRange:[30,240],binaryMetalness:!0,f0Range:[.02,1],iorRange:[1,2.5]},o.userData.pbrTextureSource=r?.source??"flat-fallback",o.userData.referencePbr=e.referencePbr??null,o.userData.referenceMaterialId=e.referenceMaterialId??e.materialReference?.profileId??null,o.userData.materialEvidence=e.materialEvidence??null,o.userData.validationViews=e.materialReference?.validationViews??[],o.needsUpdate=!0,o}function mh(i,e){return Array.isArray(i)&&i.length===3&&i.every(t=>typeof t=="number")?new N(i[0],i[1],i[2]):new N(e[0],e[1],e[2])}function gh(i,e){return typeof i=="number"&&Number.isFinite(i)?i:e}function Et(i){if(!i||typeof i!="object")return null;let e=i,t=mh(e.localStart,[0,0,0]),s=mh(e.localEnd,[0,1,0]).clone().sub(t),r=s.length();if(r<=1e-4)return null;let o=s.clone().normalize(),a=new on().setFromUnitVectors(new N(0,1,0),o),l=Math.max(.005,gh(e.baseRadius,.06)),c=Math.max(.003,gh(e.endRadius,l*.55));return{start:t,midpoint:s.multiplyScalar(.5),quaternion:a,length:r,baseRadius:l,endRadius:c}}function Ag(i={}){let e=new ce;e.name="ISO 20ft dry container",e.userData.reconstructionEvidence={itemFamily:null,subtype:null,componentAdapter:null,route:null,exactnessTier:null,referenceCamera:{solved:!1,fovDegrees:40,aspect:1,orientation:{yaw:0,pitch:0,roll:0},positionHint:[0,0,3],note:"For likeness work, solve the reference camera (forge/stage1_intake/solve_camera_pose.py) so the review render aligns with the photo and the reference can be projected. Confirm by overlay review."},approximationNotes:[]},e.userData.materialPipeline={},e.userData.materialReferenceRegistry=null;let t={};t.paint=Tl("paint",{id:"paint",name:"Oxide-red marine paint on corten steel",type:"standard",shaderModel:"MeshStandardMaterial / PBR approximation",baseColor:"#8E3B30",color:"#8E3B30",albedo:{dominant:"#8E3B30",secondary:["#8E3B30"],samplingNotes:"Base albedo with lighting removed; ridge/valley tone comes from corrugation geometry, not paint."},colorVariation:{palette:["#8E3B30"],pattern:"uniform satin paint",amplitude:.04,heightCorrelation:0},roughness:{base:.5,variation:.05,map:"independent-procedural-field",localResponse:"slightly lower on rails polished by twistlocks"},metalness:{base:0,variation:0},ambientOcclusion:{mode:"geometry-and-lighting",strength:.6,notes:"valley darkening from corrugation geometry and contact shadow under rails"},localOverrides:[{id:"data-plate",region:"left wall, near door end, 0.5 m above bottom rail",albedo:"#C9A79F",roughness:.5,notes:"CSC safety approval plate (light painted aluminium)"},{id:"size-type-code",region:"both side walls, upper corner at the door end",albedo:"#F4F5F4",roughness:.55,notes:"ISO 6346 size-type code (22G1 / 42G1 / 45G1) with underline; rendered by the site runtime as a canvas decal because the factory emits no text"}],materialClass:"metal",finishClass:"painted-metal",texturePalette:["#7A342B","#75332A","#99574F","#6F3128","#86392F"],clearcoat:{base:1,variation:0},clearcoatRoughness:{base:.05,variation:0},transmission:{base:0,variation:0},ior:{base:1.5,value:1.5},envMapIntensity:1,textureless:{declared:!0,evidence:["extract_pbr_evidence on crop-paint.png: confidence 0.751 (pass); palette ['#78352C', '#6D2F26', '#853C32', '#98544A', '#8F473D']","material-pass render: reference crop used as albedo map tiled the drawing's painted rib highlights over the modelled ribs (double stripes, horizontal banding) \u2014 the reference's tone variation is lighting on corrugation geometry, not paint","ISO dry containers are finished in a single uniform marine paint coat; identity is silhouette, rib relief and frame/casting colour regions"],pbrEvidenceFile:"pbr-paint.json"}},i),t["frame-paint"]=Tl("frame-paint",{id:"frame-paint",name:"Frame members, darker red",type:"standard",shaderModel:"MeshStandardMaterial / PBR approximation",baseColor:"#7D342A",color:"#7D342A",albedo:{dominant:"#7D342A",secondary:["#7D342A"],samplingNotes:"Base albedo with lighting removed; ridge/valley tone comes from corrugation geometry, not paint."},colorVariation:{palette:["#7D342A"],pattern:"uniform satin paint",amplitude:.04,heightCorrelation:0},roughness:{base:.5,variation:.05,map:"independent-procedural-field",localResponse:"slightly lower on rails polished by twistlocks"},metalness:{base:0,variation:0},ambientOcclusion:{mode:"geometry-and-lighting",strength:.6,notes:"valley darkening from corrugation geometry and contact shadow under rails"},localOverrides:[{id:"rail-wear",region:"top rail upper face",albedo:"#9C5349",roughness:.5,notes:"lighter worn top face"}],materialClass:"metal",finishClass:"painted-metal",texturePalette:["#7E3A30","#6B2F26","#7D342A","#7D342A","#7D342A"],clearcoat:{base:1,variation:0},clearcoatRoughness:{base:.05,variation:0},transmission:{base:0,variation:0},ior:{base:1.5,value:1.5},envMapIntensity:1,textureless:{declared:!0,evidence:["extract_pbr_evidence on crop-frame-paint.png: confidence 0.729 (pass); palette ['#7D342A', '#8E4E46', '#6C2F27', '#7A382F']","material-pass render: reference crop used as albedo map tiled the drawing's painted rib highlights over the modelled ribs (double stripes, horizontal banding) \u2014 the reference's tone variation is lighting on corrugation geometry, not paint","ISO dry containers are finished in a single uniform marine paint coat; identity is silhouette, rib relief and frame/casting colour regions"],pbrEvidenceFile:"pbr-frame-paint.json"}},i),t.casting=Tl("casting",{id:"casting",name:"Cast steel corner fittings",type:"standard",shaderModel:"MeshStandardMaterial / PBR approximation",baseColor:"#58251E",color:"#58251E",albedo:{dominant:"#58251E",secondary:["#58251E"],samplingNotes:"Base albedo with lighting removed; ridge/valley tone comes from corrugation geometry, not paint."},colorVariation:{palette:["#58251E"],pattern:"uniform satin paint",amplitude:.04,heightCorrelation:0},roughness:{base:.5,variation:.05,map:"independent-procedural-field",localResponse:"slightly lower on rails polished by twistlocks"},metalness:{base:0,variation:0},ambientOcclusion:{mode:"geometry-and-lighting",strength:.6,notes:"valley darkening from corrugation geometry and contact shadow under rails"},localOverrides:[{id:"aperture",region:"outer faces of castings",albedo:"#101114",roughness:.8,notes:"dark oval apertures"}],materialClass:"metal",finishClass:"painted-metal",texturePalette:["#78433C","#59261F","#50231E","#59251E","#662C25"],clearcoat:{base:1,variation:0},clearcoatRoughness:{base:.05,variation:0},transmission:{base:0,variation:0},ior:{base:1.5,value:1.5},envMapIntensity:1,textureless:{declared:!0,evidence:["extract_pbr_evidence on crop-casting.png: confidence 0.778 (pass); palette ['#58251E', '#7F3D34', '#652A23', '#121114']","material-pass render: reference crop used as albedo map tiled the drawing's painted rib highlights over the modelled ribs (double stripes, horizontal banding) \u2014 the reference's tone variation is lighting on corrugation geometry, not paint","ISO dry containers are finished in a single uniform marine paint coat; identity is silhouette, rib relief and frame/casting colour regions"],pbrEvidenceFile:"pbr-casting.json"}},i);let n={root:e},s={},r={},o={},a={},l=Et(null),c=new ce;c.name="Floor and bottom cross-member deck__pivot",c.scale.set(1,1,1),l?(c.position.copy(l.start),c.rotation.set(0,0,0)):(c.position.set(0,.08,0),c.rotation.set(0,0,0)),c.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[2.398,.16,6.038],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"floor-deck",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"frame-paint"}},(n.root??e).add(c),n["floor-deck"]=c;let h=l?new he(l.endRadius,l.baseRadius,l.length,16,6):new Ie(1,1,1,4,4,4);l||h.scale(2.398,.16,6.038);let u=new ne(h,t["frame-paint"]??new _e({color:8947848}));u.name="Floor and bottom cross-member deck",l&&(u.position.copy(l.midpoint),u.quaternion.copy(l.quaternion)),u.castShadow=i.castShadow??!0,u.receiveShadow=i.receiveShadow??!0,c.add(u),s["floor-deck"]=u,o["floor-deck"]={type:"box",offset:[0,0,0],scale:[2.398,.16,6.038],isTrigger:!1,notes:"box proxy"},a["floor-deck"]??(a["floor-deck"]=[]),a["floor-deck"].push(c);let d=Et(null),f=new ce;f.name="Left corrugated side wall__pivot",f.scale.set(1,1,1),d?(f.position.copy(d.start),f.rotation.set(-1.5707963267948966,0,-1.5707963267948966)):(f.position.set(1.183,.07,0),f.rotation.set(-1.5707963267948966,0,-1.5707963267948966)),f.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.036,2.2910000000000004,5.7379999999999995],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"side-wall-l",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"paint"}},(n["floor-deck"]??e).add(f),n["side-wall-l"]=f;let _=d?new he(d.endRadius,d.baseRadius,d.length,16,6):uh({points:[[-2.869,0],[-2.828,.036],[-2.7324,.036],[-2.6914,0],[-2.5958,0],[-2.5548,.036],[-2.4591,.036],[-2.4182,0],[-2.3225,0],[-2.2815,.036],[-2.1859,.036],[-2.1449,0],[-2.0493,0],[-2.0083,.036],[-1.9127,.036],[-1.8717,0],[-1.776,0],[-1.7351,.036],[-1.6394,.036],[-1.5984,0],[-1.5028,0],[-1.4618,.036],[-1.3662,.036],[-1.3252,0],[-1.2296,0],[-1.1886,.036],[-1.093,.036],[-1.052,0],[-.9563,0],[-.9153,.036],[-.8197,.036],[-.7787,0],[-.6831,0],[-.6421,.036],[-.5465,.036],[-.5055,0],[-.4099,0],[-.3689,.036],[-.2732,.036],[-.2323,0],[-.1366,0],[-.0956,.036],[0,.036],[.041,0],[.1366,0],[.1776,.036],[.2732,.036],[.3142,0],[.4099,0],[.4508,.036],[.5465,.036],[.5875,0],[.6831,0],[.7241,.036],[.8197,.036],[.8607,0],[.9563,0],[.9973,.036],[1.093,.036],[1.1339,0],[1.2296,0],[1.2706,.036],[1.3662,.036],[1.4072,0],[1.5028,0],[1.5438,.036],[1.6394,.036],[1.6804,0],[1.776,0],[1.817,.036],[1.9127,.036],[1.9537,0],[2.0493,0],[2.0903,.036],[2.1859,.036],[2.2269,0],[2.3225,0],[2.3635,.036],[2.4591,.036],[2.5001,0],[2.5958,0],[2.6367,.036],[2.7324,.036],[2.7734,0],[2.869,0],[2.869,-.02],[2.7734,-.02],[2.7324,.016],[2.6367,.016],[2.5958,-.02],[2.5001,-.02],[2.4591,.016],[2.3635,.016],[2.3225,-.02],[2.2269,-.02],[2.1859,.016],[2.0903,.016],[2.0493,-.02],[1.9537,-.02],[1.9127,.016],[1.817,.016],[1.776,-.02],[1.6804,-.02],[1.6394,.016],[1.5438,.016],[1.5028,-.02],[1.4072,-.02],[1.3662,.016],[1.2706,.016],[1.2296,-.02],[1.1339,-.02],[1.093,.016],[.9973,.016],[.9563,-.02],[.8607,-.02],[.8197,.016],[.7241,.016],[.6831,-.02],[.5875,-.02],[.5465,.016],[.4508,.016],[.4099,-.02],[.3142,-.02],[.2732,.016],[.1776,.016],[.1366,-.02],[.041,-.02],[0,.016],[-.0956,.016],[-.1366,-.02],[-.2323,-.02],[-.2732,.016],[-.3689,.016],[-.4099,-.02],[-.5055,-.02],[-.5465,.016],[-.6421,.016],[-.6831,-.02],[-.7787,-.02],[-.8197,.016],[-.9153,.016],[-.9563,-.02],[-1.052,-.02],[-1.093,.016],[-1.1886,.016],[-1.2296,-.02],[-1.3252,-.02],[-1.3662,.016],[-1.4618,.016],[-1.5028,-.02],[-1.5984,-.02],[-1.6394,.016],[-1.7351,.016],[-1.776,-.02],[-1.8717,-.02],[-1.9127,.016],[-2.0083,.016],[-2.0493,-.02],[-2.1449,-.02],[-2.1859,.016],[-2.2815,.016],[-2.3225,-.02],[-2.4182,-.02],[-2.4591,.016],[-2.5548,.016],[-2.5958,-.02],[-2.6914,-.02],[-2.7324,.016],[-2.828,.016],[-2.869,-.02]],depth:2.291});d||_.scale(1,1,1);let v=new ne(_,t.paint??new _e({color:8947848}));v.name="Left corrugated side wall",d&&(v.position.copy(d.midpoint),v.quaternion.copy(d.quaternion)),v.castShadow=i.castShadow??!0,v.receiveShadow=i.receiveShadow??!0,f.add(v),s["side-wall-l"]=v,o["side-wall-l"]={type:"box",offset:[0,0,0],scale:[.036,2.2910000000000004,5.7379999999999995],isTrigger:!1,notes:"box proxy"},a["side-wall-l"]??(a["side-wall-l"]=[]),a["side-wall-l"].push(f);let p=Et(null),m=new ce;m.name="Right corrugated side wall__pivot",m.scale.set(1,1,1),p?(m.position.copy(p.start),m.rotation.set(-1.5707963267948966,0,1.5707963267948966)):(m.position.set(-1.183,.07,0),m.rotation.set(-1.5707963267948966,0,1.5707963267948966)),m.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.036,2.2910000000000004,5.7379999999999995],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"side-wall-r",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"paint"}},(n["floor-deck"]??e).add(m),n["side-wall-r"]=m;let T=p?new he(p.endRadius,p.baseRadius,p.length,16,6):uh({points:[[-2.869,0],[-2.828,.036],[-2.7324,.036],[-2.6914,0],[-2.5958,0],[-2.5548,.036],[-2.4591,.036],[-2.4182,0],[-2.3225,0],[-2.2815,.036],[-2.1859,.036],[-2.1449,0],[-2.0493,0],[-2.0083,.036],[-1.9127,.036],[-1.8717,0],[-1.776,0],[-1.7351,.036],[-1.6394,.036],[-1.5984,0],[-1.5028,0],[-1.4618,.036],[-1.3662,.036],[-1.3252,0],[-1.2296,0],[-1.1886,.036],[-1.093,.036],[-1.052,0],[-.9563,0],[-.9153,.036],[-.8197,.036],[-.7787,0],[-.6831,0],[-.6421,.036],[-.5465,.036],[-.5055,0],[-.4099,0],[-.3689,.036],[-.2732,.036],[-.2323,0],[-.1366,0],[-.0956,.036],[0,.036],[.041,0],[.1366,0],[.1776,.036],[.2732,.036],[.3142,0],[.4099,0],[.4508,.036],[.5465,.036],[.5875,0],[.6831,0],[.7241,.036],[.8197,.036],[.8607,0],[.9563,0],[.9973,.036],[1.093,.036],[1.1339,0],[1.2296,0],[1.2706,.036],[1.3662,.036],[1.4072,0],[1.5028,0],[1.5438,.036],[1.6394,.036],[1.6804,0],[1.776,0],[1.817,.036],[1.9127,.036],[1.9537,0],[2.0493,0],[2.0903,.036],[2.1859,.036],[2.2269,0],[2.3225,0],[2.3635,.036],[2.4591,.036],[2.5001,0],[2.5958,0],[2.6367,.036],[2.7324,.036],[2.7734,0],[2.869,0],[2.869,-.02],[2.7734,-.02],[2.7324,.016],[2.6367,.016],[2.5958,-.02],[2.5001,-.02],[2.4591,.016],[2.3635,.016],[2.3225,-.02],[2.2269,-.02],[2.1859,.016],[2.0903,.016],[2.0493,-.02],[1.9537,-.02],[1.9127,.016],[1.817,.016],[1.776,-.02],[1.6804,-.02],[1.6394,.016],[1.5438,.016],[1.5028,-.02],[1.4072,-.02],[1.3662,.016],[1.2706,.016],[1.2296,-.02],[1.1339,-.02],[1.093,.016],[.9973,.016],[.9563,-.02],[.8607,-.02],[.8197,.016],[.7241,.016],[.6831,-.02],[.5875,-.02],[.5465,.016],[.4508,.016],[.4099,-.02],[.3142,-.02],[.2732,.016],[.1776,.016],[.1366,-.02],[.041,-.02],[0,.016],[-.0956,.016],[-.1366,-.02],[-.2323,-.02],[-.2732,.016],[-.3689,.016],[-.4099,-.02],[-.5055,-.02],[-.5465,.016],[-.6421,.016],[-.6831,-.02],[-.7787,-.02],[-.8197,.016],[-.9153,.016],[-.9563,-.02],[-1.052,-.02],[-1.093,.016],[-1.1886,.016],[-1.2296,-.02],[-1.3252,-.02],[-1.3662,.016],[-1.4618,.016],[-1.5028,-.02],[-1.5984,-.02],[-1.6394,.016],[-1.7351,.016],[-1.776,-.02],[-1.8717,-.02],[-1.9127,.016],[-2.0083,.016],[-2.0493,-.02],[-2.1449,-.02],[-2.1859,.016],[-2.2815,.016],[-2.3225,-.02],[-2.4182,-.02],[-2.4591,.016],[-2.5548,.016],[-2.5958,-.02],[-2.6914,-.02],[-2.7324,.016],[-2.828,.016],[-2.869,-.02]],depth:2.291});p||T.scale(1,1,1);let M=new ne(T,t.paint??new _e({color:8947848}));M.name="Right corrugated side wall",p&&(M.position.copy(p.midpoint),M.quaternion.copy(p.quaternion)),M.castShadow=i.castShadow??!0,M.receiveShadow=i.receiveShadow??!0,m.add(M),s["side-wall-r"]=M,o["side-wall-r"]={type:"box",offset:[0,0,0],scale:[.036,2.2910000000000004,5.7379999999999995],isTrigger:!1,notes:"box proxy"},a["side-wall-r"]??(a["side-wall-r"]=[]),a["side-wall-r"].push(m);let E=Et(null),C=new ce;C.name="Roof panel with shallow transverse corrugation__pivot",C.scale.set(1,1,1),E?(C.position.copy(E.start),C.rotation.set(0,0,0)):(C.position.set(0,2.481,0),C.rotation.set(0,0,0)),C.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[2.378,.03,5.7379999999999995],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"roof",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"paint"}},(n["floor-deck"]??e).add(C),n.roof=C;let P=E?new he(E.endRadius,E.baseRadius,E.length,16,6):new Ie(1,1,1,4,4,4);E||P.scale(2.378,.03,5.7379999999999995);let R=new ne(P,t.paint??new _e({color:8947848}));R.name="Roof panel with shallow transverse corrugation",E&&(R.position.copy(E.midpoint),R.quaternion.copy(E.quaternion)),R.castShadow=i.castShadow??!0,R.receiveShadow=i.receiveShadow??!0,C.add(R),s.roof=R,o.roof={type:"box",offset:[0,0,0],scale:[2.378,.03,5.7379999999999995],isTrigger:!1,notes:"box proxy"},a.roof??(a.roof=[]),a.roof.push(C);let A=Et(null),z=new ce;z.name="Front end wall (blind end)__pivot",z.scale.set(1,1,1),A?(z.position.copy(A.start),z.rotation.set(0,0,0)):(z.position.set(0,1.2155,-2.969),z.rotation.set(0,0,0)),z.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[2.1180000000000003,2.2910000000000004,.04],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"front-wall",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"paint"}},(n["floor-deck"]??e).add(z),n["front-wall"]=z;let g=A?new he(A.endRadius,A.baseRadius,A.length,16,6):new Ie(1,1,1,4,4,4);A||g.scale(2.1180000000000003,2.2910000000000004,.04);let x=new ne(g,t.paint??new _e({color:8947848}));x.name="Front end wall (blind end)",A&&(x.position.copy(A.midpoint),x.quaternion.copy(A.quaternion)),x.castShadow=i.castShadow??!0,x.receiveShadow=i.receiveShadow??!0,z.add(x),s["front-wall"]=x,o["front-wall"]={type:"box",offset:[0,0,0],scale:[2.1180000000000003,2.2910000000000004,.04],isTrigger:!1,notes:"box proxy"},a["front-wall"]??(a["front-wall"]=[]),a["front-wall"].push(z);let k=Et(null),F=new ce;F.name="Corner post rear l__pivot",F.scale.set(1,1,1),k?(F.position.copy(k.start),F.rotation.set(0,0,0)):(F.position.set(1.139,1.2155,2.949),F.rotation.set(0,0,0)),F.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.16,2.3550000000000004,.16],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"post-rear-l",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"frame-paint"}},(n["floor-deck"]??e).add(F),n["post-rear-l"]=F;let H=k?new he(k.endRadius,k.baseRadius,k.length,16,6):new Ie(1,1,1,4,4,4);k||H.scale(.16,2.3550000000000004,.16);let X=new ne(H,t["frame-paint"]??new _e({color:8947848}));X.name="Corner post rear l",k&&(X.position.copy(k.midpoint),X.quaternion.copy(k.quaternion)),X.castShadow=i.castShadow??!0,X.receiveShadow=i.receiveShadow??!0,F.add(X),s["post-rear-l"]=X,o["post-rear-l"]={type:"box",offset:[0,0,0],scale:[.16,2.3550000000000004,.16],isTrigger:!1,notes:"box proxy"},a["post-rear-l"]??(a["post-rear-l"]=[]),a["post-rear-l"].push(F);let L=Et(null),Y=new ce;Y.name="Corner post rear r__pivot",Y.scale.set(1,1,1),L?(Y.position.copy(L.start),Y.rotation.set(0,0,0)):(Y.position.set(-1.139,1.2155,2.949),Y.rotation.set(0,0,0)),Y.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.16,2.3550000000000004,.16],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"post-rear-r",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"frame-paint"}},(n["floor-deck"]??e).add(Y),n["post-rear-r"]=Y;let q=L?new he(L.endRadius,L.baseRadius,L.length,16,6):new Ie(1,1,1,4,4,4);L||q.scale(.16,2.3550000000000004,.16);let de=new ne(q,t["frame-paint"]??new _e({color:8947848}));de.name="Corner post rear r",L&&(de.position.copy(L.midpoint),de.quaternion.copy(L.quaternion)),de.castShadow=i.castShadow??!0,de.receiveShadow=i.receiveShadow??!0,Y.add(de),s["post-rear-r"]=de,o["post-rear-r"]={type:"box",offset:[0,0,0],scale:[.16,2.3550000000000004,.16],isTrigger:!1,notes:"box proxy"},a["post-rear-r"]??(a["post-rear-r"]=[]),a["post-rear-r"].push(Y);let ae=Et(null),re=new ce;re.name="Corner post front l__pivot",re.scale.set(1,1,1),ae?(re.position.copy(ae.start),re.rotation.set(0,0,0)):(re.position.set(1.139,1.2155,-2.949),re.rotation.set(0,0,0)),re.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.16,2.3550000000000004,.16],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"post-front-l",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"frame-paint"}},(n["floor-deck"]??e).add(re),n["post-front-l"]=re;let Je=ae?new he(ae.endRadius,ae.baseRadius,ae.length,16,6):new Ie(1,1,1,4,4,4);ae||Je.scale(.16,2.3550000000000004,.16);let ze=new ne(Je,t["frame-paint"]??new _e({color:8947848}));ze.name="Corner post front l",ae&&(ze.position.copy(ae.midpoint),ze.quaternion.copy(ae.quaternion)),ze.castShadow=i.castShadow??!0,ze.receiveShadow=i.receiveShadow??!0,re.add(ze),s["post-front-l"]=ze,o["post-front-l"]={type:"box",offset:[0,0,0],scale:[.16,2.3550000000000004,.16],isTrigger:!1,notes:"box proxy"},a["post-front-l"]??(a["post-front-l"]=[]),a["post-front-l"].push(re);let G=Et(null),Z=new ce;Z.name="Corner post front r__pivot",Z.scale.set(1,1,1),G?(Z.position.copy(G.start),Z.rotation.set(0,0,0)):(Z.position.set(-1.139,1.2155,-2.949),Z.rotation.set(0,0,0)),Z.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.16,2.3550000000000004,.16],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"post-front-r",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"frame-paint"}},(n["floor-deck"]??e).add(Z),n["post-front-r"]=Z;let Se=G?new he(G.endRadius,G.baseRadius,G.length,16,6):new Ie(1,1,1,4,4,4);G||Se.scale(.16,2.3550000000000004,.16);let se=new ne(Se,t["frame-paint"]??new _e({color:8947848}));se.name="Corner post front r",G&&(se.position.copy(G.midpoint),se.quaternion.copy(G.quaternion)),se.castShadow=i.castShadow??!0,se.receiveShadow=i.receiveShadow??!0,Z.add(se),s["post-front-r"]=se,o["post-front-r"]={type:"box",offset:[0,0,0],scale:[.16,2.3550000000000004,.16],isTrigger:!1,notes:"box proxy"},a["post-front-r"]??(a["post-front-r"]=[]),a["post-front-r"].push(Z);let Re=Et(null),we=new ce;we.name="Top side rail l__pivot",we.scale.set(1,1,1),Re?(we.position.copy(Re.start),we.rotation.set(0,0,0)):(we.position.set(1.184,2.4585,0),we.rotation.set(0,0,0)),we.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.07,.105,5.702],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"top-rail-l",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"frame-paint"}},(n["floor-deck"]??e).add(we),n["top-rail-l"]=we;let Ze=Re?new he(Re.endRadius,Re.baseRadius,Re.length,16,6):new Ie(1,1,1,4,4,4);Re||Ze.scale(.07,.105,5.702);let Ge=new ne(Ze,t["frame-paint"]??new _e({color:8947848}));Ge.name="Top side rail l",Re&&(Ge.position.copy(Re.midpoint),Ge.quaternion.copy(Re.quaternion)),Ge.castShadow=i.castShadow??!0,Ge.receiveShadow=i.receiveShadow??!0,we.add(Ge),s["top-rail-l"]=Ge,o["top-rail-l"]={type:"box",offset:[0,0,0],scale:[.07,.105,5.702],isTrigger:!1,notes:"box proxy"},a["top-rail-l"]??(a["top-rail-l"]=[]),a["top-rail-l"].push(we);let $=Et(null),w=new ce;w.name="Bottom side rail l__pivot",w.scale.set(1,1,1),$?(w.position.copy($.start),w.rotation.set(0,0,0)):(w.position.set(1.184,-.005,0),w.rotation.set(0,0,0)),w.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.07,.15,5.702],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"bottom-rail-l",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"frame-paint"}},(n["floor-deck"]??e).add(w),n["bottom-rail-l"]=w;let Me=$?new he($.endRadius,$.baseRadius,$.length,16,6):new Ie(1,1,1,4,4,4);$||Me.scale(.07,.15,5.702);let oe=new ne(Me,t["frame-paint"]??new _e({color:8947848}));oe.name="Bottom side rail l",$&&(oe.position.copy($.midpoint),oe.quaternion.copy($.quaternion)),oe.castShadow=i.castShadow??!0,oe.receiveShadow=i.receiveShadow??!0,w.add(oe),s["bottom-rail-l"]=oe,o["bottom-rail-l"]={type:"box",offset:[0,0,0],scale:[.07,.15,5.702],isTrigger:!1,notes:"box proxy"},a["bottom-rail-l"]??(a["bottom-rail-l"]=[]),a["bottom-rail-l"].push(w);let ee=Et(null),ie=new ce;ie.name="Top side rail r__pivot",ie.scale.set(1,1,1),ee?(ie.position.copy(ee.start),ie.rotation.set(0,0,0)):(ie.position.set(-1.184,2.4585,0),ie.rotation.set(0,0,0)),ie.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.07,.105,5.702],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"top-rail-r",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"frame-paint"}},(n["floor-deck"]??e).add(ie),n["top-rail-r"]=ie;let He=ee?new he(ee.endRadius,ee.baseRadius,ee.length,16,6):new Ie(1,1,1,4,4,4);ee||He.scale(.07,.105,5.702);let xe=new ne(He,t["frame-paint"]??new _e({color:8947848}));xe.name="Top side rail r",ee&&(xe.position.copy(ee.midpoint),xe.quaternion.copy(ee.quaternion)),xe.castShadow=i.castShadow??!0,xe.receiveShadow=i.receiveShadow??!0,ie.add(xe),s["top-rail-r"]=xe,o["top-rail-r"]={type:"box",offset:[0,0,0],scale:[.07,.105,5.702],isTrigger:!1,notes:"box proxy"},a["top-rail-r"]??(a["top-rail-r"]=[]),a["top-rail-r"].push(ie);let S=Et(null),y=new ce;y.name="Bottom side rail r__pivot",y.scale.set(1,1,1),S?(y.position.copy(S.start),y.rotation.set(0,0,0)):(y.position.set(-1.184,-.005,0),y.rotation.set(0,0,0)),y.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.07,.15,5.702],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"bottom-rail-r",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"frame-paint"}},(n["floor-deck"]??e).add(y),n["bottom-rail-r"]=y;let B=S?new he(S.endRadius,S.baseRadius,S.length,16,6):new Ie(1,1,1,4,4,4);S||B.scale(.07,.15,5.702);let J=new ne(B,t["frame-paint"]??new _e({color:8947848}));J.name="Bottom side rail r",S&&(J.position.copy(S.midpoint),J.quaternion.copy(S.quaternion)),J.castShadow=i.castShadow??!0,J.receiveShadow=i.receiveShadow??!0,y.add(J),s["bottom-rail-r"]=J,o["bottom-rail-r"]={type:"box",offset:[0,0,0],scale:[.07,.15,5.702],isTrigger:!1,notes:"box proxy"},a["bottom-rail-r"]??(a["bottom-rail-r"]=[]),a["bottom-rail-r"].push(y);let K=Et(null),W=new ce;W.name="Rear door leaf (left)__pivot",W.scale.set(1,1,1),K?(W.position.copy(K.start),W.rotation.set(0,0,0)):(W.position.set(.5295,1.2155,2.989),W.rotation.set(0,0,0)),W.userData.actionProfile={animationRole:"hinged",pivot:{mode:"edge",localPosition:[.5295000000000001,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!0,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1.0590000000000002,2.2910000000000004,.05],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"door-leaf-l",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"paint"}},(n["floor-deck"]??e).add(W),n["door-leaf-l"]=W;let ke=K?new he(K.endRadius,K.baseRadius,K.length,16,6):new Ie(1,1,1,4,4,4);K||ke.scale(1.0590000000000002,2.2910000000000004,.05);let fe=new ne(ke,t.paint??new _e({color:8947848}));fe.name="Rear door leaf (left)",K&&(fe.position.copy(K.midpoint),fe.quaternion.copy(K.quaternion)),fe.castShadow=i.castShadow??!0,fe.receiveShadow=i.receiveShadow??!0,W.add(fe),s["door-leaf-l"]=fe,o["door-leaf-l"]={type:"box",offset:[0,0,0],scale:[1.0590000000000002,2.2910000000000004,.05],isTrigger:!1,notes:"box proxy"},a["door-leaf-l"]??(a["door-leaf-l"]=[]),a["door-leaf-l"].push(W);let pe=Et(null),Ne=new ce;Ne.name="Rear door leaf (right)__pivot",Ne.scale.set(1,1,1),pe?(Ne.position.copy(pe.start),Ne.rotation.set(0,0,0)):(Ne.position.set(-.5295,1.2155,2.989),Ne.rotation.set(0,0,0)),Ne.userData.actionProfile={animationRole:"hinged",pivot:{mode:"edge",localPosition:[-.5295000000000001,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!0,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1.0590000000000002,2.2910000000000004,.05],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"door-leaf-r",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"paint"}},(n["floor-deck"]??e).add(Ne),n["door-leaf-r"]=Ne;let ge=pe?new he(pe.endRadius,pe.baseRadius,pe.length,16,6):new Ie(1,1,1,4,4,4);pe||ge.scale(1.0590000000000002,2.2910000000000004,.05);let ve=new ne(ge,t.paint??new _e({color:8947848}));ve.name="Rear door leaf (right)",pe&&(ve.position.copy(pe.midpoint),ve.quaternion.copy(pe.quaternion)),ve.castShadow=i.castShadow??!0,ve.receiveShadow=i.receiveShadow??!0,Ne.add(ve),s["door-leaf-r"]=ve,o["door-leaf-r"]={type:"box",offset:[0,0,0],scale:[1.0590000000000002,2.2910000000000004,.05],isTrigger:!1,notes:"box proxy"},a["door-leaf-r"]??(a["door-leaf-r"]=[]),a["door-leaf-r"].push(Ne);let Ce=Et({parentSocket:"door-leaf-l.surface",localStart:[.2965,0,.035],localEnd:[.2965,0,.035],contactType:"weld",embedDepth:0,overlap:.002,gapTolerance:.003}),me=new ce;me.name="Door locking bar 1__pivot",me.scale.set(1,1,1),Ce?(me.position.copy(Ce.start),me.rotation.set(0,0,0)):(me.position.set(.2965,0,.035),me.rotation.set(0,0,0)),me.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.034,2.1993600000000004,.034],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"lock-bar-1",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"frame-paint"}},(n["door-leaf-l"]??e).add(me),n["lock-bar-1"]=me;let et=Ce?new he(Ce.endRadius,Ce.baseRadius,Ce.length,16,6):new he(.5,.5,1,24,8);Ce||et.scale(.034,2.1993600000000004,.034);let Oe=new ne(et,t["frame-paint"]??new _e({color:8947848}));Oe.name="Door locking bar 1",Ce&&(Oe.position.copy(Ce.midpoint),Oe.quaternion.copy(Ce.quaternion)),Oe.castShadow=i.castShadow??!0,Oe.receiveShadow=i.receiveShadow??!0,me.add(Oe),s["lock-bar-1"]=Oe,o["lock-bar-1"]={type:"box",offset:[0,0,0],scale:[.034,2.1993600000000004,.034],isTrigger:!1,notes:"box proxy"},a["lock-bar-1"]??(a["lock-bar-1"]=[]),a["lock-bar-1"].push(me);let I=Et({parentSocket:"door-leaf-l.surface",localStart:[-.2965,0,.035],localEnd:[-.2965,0,.035],contactType:"weld",embedDepth:0,overlap:.002,gapTolerance:.003}),le=new ce;le.name="Door locking bar 2__pivot",le.scale.set(1,1,1),I?(le.position.copy(I.start),le.rotation.set(0,0,0)):(le.position.set(-.2965,0,.035),le.rotation.set(0,0,0)),le.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.034,2.1993600000000004,.034],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"lock-bar-2",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"frame-paint"}},(n["door-leaf-l"]??e).add(le),n["lock-bar-2"]=le;let j=I?new he(I.endRadius,I.baseRadius,I.length,16,6):new he(.5,.5,1,24,8);I||j.scale(.034,2.1993600000000004,.034);let Q=new ne(j,t["frame-paint"]??new _e({color:8947848}));Q.name="Door locking bar 2",I&&(Q.position.copy(I.midpoint),Q.quaternion.copy(I.quaternion)),Q.castShadow=i.castShadow??!0,Q.receiveShadow=i.receiveShadow??!0,le.add(Q),s["lock-bar-2"]=Q,o["lock-bar-2"]={type:"box",offset:[0,0,0],scale:[.034,2.1993600000000004,.034],isTrigger:!1,notes:"box proxy"},a["lock-bar-2"]??(a["lock-bar-2"]=[]),a["lock-bar-2"].push(le);let ue=Et({parentSocket:"door-leaf-r.surface",localStart:[.2965,0,.035],localEnd:[.2965,0,.035],contactType:"weld",embedDepth:0,overlap:.002,gapTolerance:.003}),Fe=new ce;Fe.name="Door locking bar 3__pivot",Fe.scale.set(1,1,1),ue?(Fe.position.copy(ue.start),Fe.rotation.set(0,0,0)):(Fe.position.set(.2965,0,.035),Fe.rotation.set(0,0,0)),Fe.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.034,2.1993600000000004,.034],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"lock-bar-3",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"frame-paint"}},(n["door-leaf-r"]??e).add(Fe),n["lock-bar-3"]=Fe;let vt=ue?new he(ue.endRadius,ue.baseRadius,ue.length,16,6):new he(.5,.5,1,24,8);ue||vt.scale(.034,2.1993600000000004,.034);let at=new ne(vt,t["frame-paint"]??new _e({color:8947848}));at.name="Door locking bar 3",ue&&(at.position.copy(ue.midpoint),at.quaternion.copy(ue.quaternion)),at.castShadow=i.castShadow??!0,at.receiveShadow=i.receiveShadow??!0,Fe.add(at),s["lock-bar-3"]=at,o["lock-bar-3"]={type:"box",offset:[0,0,0],scale:[.034,2.1993600000000004,.034],isTrigger:!1,notes:"box proxy"},a["lock-bar-3"]??(a["lock-bar-3"]=[]),a["lock-bar-3"].push(Fe);let Ke=Et({parentSocket:"door-leaf-r.surface",localStart:[-.2965,0,.035],localEnd:[-.2965,0,.035],contactType:"weld",embedDepth:0,overlap:.002,gapTolerance:.003}),je=new ce;je.name="Door locking bar 4__pivot",je.scale.set(1,1,1),Ke?(je.position.copy(Ke.start),je.rotation.set(0,0,0)):(je.position.set(-.2965,0,.035),je.rotation.set(0,0,0)),je.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.034,2.1993600000000004,.034],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"lock-bar-4",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"frame-paint"}},(n["door-leaf-r"]??e).add(je),n["lock-bar-4"]=je;let yn=Ke?new he(Ke.endRadius,Ke.baseRadius,Ke.length,16,6):new he(.5,.5,1,24,8);Ke||yn.scale(.034,2.1993600000000004,.034);let At=new ne(yn,t["frame-paint"]??new _e({color:8947848}));At.name="Door locking bar 4",Ke&&(At.position.copy(Ke.midpoint),At.quaternion.copy(Ke.quaternion)),At.castShadow=i.castShadow??!0,At.receiveShadow=i.receiveShadow??!0,je.add(At),s["lock-bar-4"]=At,o["lock-bar-4"]={type:"box",offset:[0,0,0],scale:[.034,2.1993600000000004,.034],isTrigger:!1,notes:"box proxy"},a["lock-bar-4"]??(a["lock-bar-4"]=[]),a["lock-bar-4"].push(je);let nt=Et(null),rt=new ce;rt.name="Corner casting 1__pivot",rt.scale.set(1,1,1),nt?(rt.position.copy(nt.start),rt.rotation.set(0,0,0)):(rt.position.set(1.138,-.021,2.94),rt.rotation.set(0,0,0)),rt.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.162,.118,.178],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"casting-1",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"casting"}},(n["floor-deck"]??e).add(rt),n["casting-1"]=rt;let xn=nt?new he(nt.endRadius,nt.baseRadius,nt.length,16,6):new Ie(1,1,1,4,4,4);nt||xn.scale(.162,.118,.178);let Ct=new ne(xn,t.casting??new _e({color:8947848}));Ct.name="Corner casting 1",nt&&(Ct.position.copy(nt.midpoint),Ct.quaternion.copy(nt.quaternion)),Ct.castShadow=i.castShadow??!0,Ct.receiveShadow=i.receiveShadow??!0,rt.add(Ct),s["casting-1"]=Ct,o["casting-1"]={type:"box",offset:[0,0,0],scale:[.162,.118,.178],isTrigger:!1,notes:"box proxy"},a["casting-1"]??(a["casting-1"]=[]),a["casting-1"].push(rt);let lt=Et(null),ot=new ce;ot.name="Corner casting 2__pivot",ot.scale.set(1,1,1),lt?(ot.position.copy(lt.start),ot.rotation.set(0,0,0)):(ot.position.set(-1.138,-.021,2.94),ot.rotation.set(0,0,0)),ot.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.162,.118,.178],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"casting-2",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"casting"}},(n["floor-deck"]??e).add(ot),n["casting-2"]=ot;let cn=lt?new he(lt.endRadius,lt.baseRadius,lt.length,16,6):new Ie(1,1,1,4,4,4);lt||cn.scale(.162,.118,.178);let Pt=new ne(cn,t.casting??new _e({color:8947848}));Pt.name="Corner casting 2",lt&&(Pt.position.copy(lt.midpoint),Pt.quaternion.copy(lt.quaternion)),Pt.castShadow=i.castShadow??!0,Pt.receiveShadow=i.receiveShadow??!0,ot.add(Pt),s["casting-2"]=Pt,o["casting-2"]={type:"box",offset:[0,0,0],scale:[.162,.118,.178],isTrigger:!1,notes:"box proxy"},a["casting-2"]??(a["casting-2"]=[]),a["casting-2"].push(ot);let ut=Et(null),ct=new ce;ct.name="Corner casting 3__pivot",ct.scale.set(1,1,1),ut?(ct.position.copy(ut.start),ct.rotation.set(0,0,0)):(ct.position.set(1.138,2.452,2.94),ct.rotation.set(0,0,0)),ct.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.162,.118,.178],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"casting-3",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"casting"}},(n["floor-deck"]??e).add(ct),n["casting-3"]=ct;let Tn=ut?new he(ut.endRadius,ut.baseRadius,ut.length,16,6):new Ie(1,1,1,4,4,4);ut||Tn.scale(.162,.118,.178);let Dt=new ne(Tn,t.casting??new _e({color:8947848}));Dt.name="Corner casting 3",ut&&(Dt.position.copy(ut.midpoint),Dt.quaternion.copy(ut.quaternion)),Dt.castShadow=i.castShadow??!0,Dt.receiveShadow=i.receiveShadow??!0,ct.add(Dt),s["casting-3"]=Dt,o["casting-3"]={type:"box",offset:[0,0,0],scale:[.162,.118,.178],isTrigger:!1,notes:"box proxy"},a["casting-3"]??(a["casting-3"]=[]),a["casting-3"].push(ct);let b=Et(null),D=new ce;D.name="Corner casting 4__pivot",D.scale.set(1,1,1),b?(D.position.copy(b.start),D.rotation.set(0,0,0)):(D.position.set(-1.138,2.452,2.94),D.rotation.set(0,0,0)),D.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.162,.118,.178],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"casting-4",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"casting"}},(n["floor-deck"]??e).add(D),n["casting-4"]=D;let V=b?new he(b.endRadius,b.baseRadius,b.length,16,6):new Ie(1,1,1,4,4,4);b||V.scale(.162,.118,.178);let O=new ne(V,t.casting??new _e({color:8947848}));O.name="Corner casting 4",b&&(O.position.copy(b.midpoint),O.quaternion.copy(b.quaternion)),O.castShadow=i.castShadow??!0,O.receiveShadow=i.receiveShadow??!0,D.add(O),s["casting-4"]=O,o["casting-4"]={type:"box",offset:[0,0,0],scale:[.162,.118,.178],isTrigger:!1,notes:"box proxy"},a["casting-4"]??(a["casting-4"]=[]),a["casting-4"].push(D);let U=Et(null),te=new ce;te.name="Corner casting 5__pivot",te.scale.set(1,1,1),U?(te.position.copy(U.start),te.rotation.set(0,0,0)):(te.position.set(1.138,-.021,-2.94),te.rotation.set(0,0,0)),te.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.162,.118,.178],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"casting-5",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"casting"}},(n["floor-deck"]??e).add(te),n["casting-5"]=te;let Pe=U?new he(U.endRadius,U.baseRadius,U.length,16,6):new Ie(1,1,1,4,4,4);U||Pe.scale(.162,.118,.178);let Ee=new ne(Pe,t.casting??new _e({color:8947848}));Ee.name="Corner casting 5",U&&(Ee.position.copy(U.midpoint),Ee.quaternion.copy(U.quaternion)),Ee.castShadow=i.castShadow??!0,Ee.receiveShadow=i.receiveShadow??!0,te.add(Ee),s["casting-5"]=Ee,o["casting-5"]={type:"box",offset:[0,0,0],scale:[.162,.118,.178],isTrigger:!1,notes:"box proxy"},a["casting-5"]??(a["casting-5"]=[]),a["casting-5"].push(te);let ye=Et(null),Te=new ce;Te.name="Corner casting 6__pivot",Te.scale.set(1,1,1),ye?(Te.position.copy(ye.start),Te.rotation.set(0,0,0)):(Te.position.set(-1.138,-.021,-2.94),Te.rotation.set(0,0,0)),Te.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.162,.118,.178],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"casting-6",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"casting"}},(n["floor-deck"]??e).add(Te),n["casting-6"]=Te;let Xe=ye?new he(ye.endRadius,ye.baseRadius,ye.length,16,6):new Ie(1,1,1,4,4,4);ye||Xe.scale(.162,.118,.178);let Ae=new ne(Xe,t.casting??new _e({color:8947848}));Ae.name="Corner casting 6",ye&&(Ae.position.copy(ye.midpoint),Ae.quaternion.copy(ye.quaternion)),Ae.castShadow=i.castShadow??!0,Ae.receiveShadow=i.receiveShadow??!0,Te.add(Ae),s["casting-6"]=Ae,o["casting-6"]={type:"box",offset:[0,0,0],scale:[.162,.118,.178],isTrigger:!1,notes:"box proxy"},a["casting-6"]??(a["casting-6"]=[]),a["casting-6"].push(Te);let Ve=Et(null),We=new ce;We.name="Corner casting 7__pivot",We.scale.set(1,1,1),Ve?(We.position.copy(Ve.start),We.rotation.set(0,0,0)):(We.position.set(1.138,2.452,-2.94),We.rotation.set(0,0,0)),We.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.162,.118,.178],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"casting-7",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"casting"}},(n["floor-deck"]??e).add(We),n["casting-7"]=We;let mt=Ve?new he(Ve.endRadius,Ve.baseRadius,Ve.length,16,6):new Ie(1,1,1,4,4,4);Ve||mt.scale(.162,.118,.178);let ht=new ne(mt,t.casting??new _e({color:8947848}));ht.name="Corner casting 7",Ve&&(ht.position.copy(Ve.midpoint),ht.quaternion.copy(Ve.quaternion)),ht.castShadow=i.castShadow??!0,ht.receiveShadow=i.receiveShadow??!0,We.add(ht),s["casting-7"]=ht,o["casting-7"]={type:"box",offset:[0,0,0],scale:[.162,.118,.178],isTrigger:!1,notes:"box proxy"},a["casting-7"]??(a["casting-7"]=[]),a["casting-7"].push(We);let Be=Et(null),be=new ce;be.name="Corner casting 8__pivot",be.scale.set(1,1,1),Be?(be.position.copy(Be.start),be.rotation.set(0,0,0)):(be.position.set(-1.138,2.452,-2.94),be.rotation.set(0,0,0)),be.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.162,.118,.178],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"casting-8",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"casting"}},(n["floor-deck"]??e).add(be),n["casting-8"]=be;let It=Be?new he(Be.endRadius,Be.baseRadius,Be.length,16,6):new Ie(1,1,1,4,4,4);Be||It.scale(.162,.118,.178);let Ye=new ne(It,t.casting??new _e({color:8947848}));Ye.name="Corner casting 8",Be&&(Ye.position.copy(Be.midpoint),Ye.quaternion.copy(Be.quaternion)),Ye.castShadow=i.castShadow??!0,Ye.receiveShadow=i.receiveShadow??!0,be.add(Ye),s["casting-8"]=Ye,o["casting-8"]={type:"box",offset:[0,0,0],scale:[.162,.118,.178],isTrigger:!1,notes:"box proxy"},a["casting-8"]??(a["casting-8"]=[]),a["casting-8"].push(be);let Qe=Et(null),tt=new ce;tt.name="CSC data plate__pivot",tt.scale.set(1,1,1),Qe?(tt.position.copy(Qe.start),tt.rotation.set(0,0,0)):(tt.position.set(1.223,.62,1.829),tt.rotation.set(0,0,0)),tt.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.006,.2,.32],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"data-plate-mesh",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"paint"}},(n["floor-deck"]??e).add(tt),n["data-plate-mesh"]=tt;let kt=Qe?new he(Qe.endRadius,Qe.baseRadius,Qe.length,16,6):new Ie(1,1,1,4,4,4);Qe||kt.scale(.006,.2,.32);let Tt=new ne(kt,t.paint??new _e({color:8947848}));return Tt.name="CSC data plate",Qe&&(Tt.position.copy(Qe.midpoint),Tt.quaternion.copy(Qe.quaternion)),Tt.castShadow=i.castShadow??!0,Tt.receiveShadow=i.receiveShadow??!0,tt.add(Tt),s["data-plate-mesh"]=Tt,o["data-plate-mesh"]={type:"box",offset:[0,0,0],scale:[.006,.2,.32],isTrigger:!1,notes:"box proxy"},a["data-plate-mesh"]??(a["data-plate-mesh"]=[]),a["data-plate-mesh"].push(tt),e.userData.sculptRuntime={nodes:n,meshes:s,sockets:r,colliders:o,destructionGroups:a},e.userData.lookDevTargets={},e.userData.actionReadiness={note:"Use root.userData.sculptRuntime.nodes for transforms, sockets for attachments, colliders for physics proxies, and destructionGroups for breakable sets."},e}function Cg(i="neutral"){let e=new ce;e.name="ISO 20ft dry container look-dev lights";let t=new oi(i==="reference"?16773334:15922431,3554114,i==="grazing"?.28:i==="reference"?.72:.6);e.add(t);let n=new ln(i==="reference"?16764810:16774376,i==="grazing"?4.2:i==="reference"?2.6:1.7);i==="grazing"?n.position.set(7.5,1.1,4):i==="reference"?n.position.set(-4.5,7.5,5):n.position.set(-9,13,11),n.castShadow=!0,n.shadow.mapSize.set(4096,4096),n.shadow.bias=-25e-5,n.shadow.normalBias=.018,n.shadow.radius=7,n.shadow.blurSamples=24,n.shadow.camera.near=.5,n.shadow.camera.far=60,n.shadow.camera.left=-9,n.shadow.camera.right=9,n.shadow.camera.top=9,n.shadow.camera.bottom=-9,n.shadow.camera.updateProjectionMatrix(),e.add(n);let s=new ln(11060479,i==="grazing"?.12:.42);s.position.set(4,3,3.5),e.add(s);let r=new ln(16773572,i==="grazing"?.28:.85);r.position.set(.5,4.5,-6),e.add(r);let o=new ne(new gn(40,40),new si({opacity:.25}));return o.rotation.x=-Math.PI/2,o.position.y=-.001,o.receiveShadow=!0,o.name="contact-shadow",e.add(o),e.userData.reviewMode=i,e.userData.lightingFromPhoto=["key: directional sun from upper-left-front, intensity 2.4, warm white #FFF4E6, casts soft shadow","fill: hemisphere sky #DCE6F2 / ground #6E6A60, intensity 0.9","rim: directional from behind-right, intensity 0.6, cool #CFE0FF to separate the box from the page ground","exposure 1.0 with ACES filmic tone mapping, sRGB output","contact shadow: soft ground shadow plane under the box (shadow-only material, opacity 0.25)"],e.userData.lookDevTargets={},e}function Pg(i){let e=new Pn(i),t=e.fromScene(new ci,.04).texture;return e.dispose(),t}function Ig(i,e,t={}){let n=new Zt().setFromObject(e);if(n.isEmpty())return;let s=n.getSize(new N),r=n.getCenter(new N),o=t.margin??1.15,a=Math.max(s.x,s.y,s.z)*o,l=i.fov*Math.PI/180,c=a/2/Math.tan(l/2),h=(t.azimuthDeg??0)*Math.PI/180,u=(t.elevationDeg??0)*Math.PI/180,d=new N(Math.sin(h)*Math.cos(u),Math.sin(u),Math.cos(h)*Math.cos(u));i.position.copy(r).addScaledVector(d,c),i.near=Math.max(.01,c-a),i.far=c+a*2,i.lookAt(r),i.updateProjectionMatrix()}function Dg(i){i.toneMapping=Ti,i.outputColorSpace=Rt}var ls={};aa(ls,{configureISO40ftDryContainerRenderer:()=>Kg,createISO40ftDryContainerEnvironment:()=>Jg,createISO40ftDryContainerLookDevLights:()=>Zg,createISO40ftDryContainerModel:()=>Yg,frameISO40ftDryContainerCamera:()=>$g});function Lg(i,e){let t=new qn;if(i.length>0){t.moveTo(i[0][0],i[0][1]);for(let n=1;n<i.length;n+=1)t.lineTo(i[n][0],i[n][1])}for(let n of e??[]){if(n.length<3)continue;let s=new Dn;s.moveTo(n[0][0],n[0][1]);for(let r=1;r<n.length;r+=1)s.lineTo(n[r][0],n[r][1]);s.closePath(),t.holes.push(s)}return t}function Ug(i,e,t,n,s=24){let r=[];for(let o=0;o<s;o+=1){let a=o/s*Math.PI*2;r.push([i+Math.cos(a)*t,e+Math.sin(a)*n])}return r}function _h(i){let e=[...i.holes??[],...(i.ovalHoles??[]).map(n=>Ug(n.cx,n.cy,n.rx,n.ry))],t=Lg(i.points,e);return new ii(t,{depth:i.depth,bevelEnabled:!1,steps:1})}function Ng(i){let e=2166136261;for(let t=0;t<i.length;t+=1)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function _t(i,e,t){if(typeof i=="number")return i;if(i&&typeof i=="object"){let n=i;for(let s of e)if(typeof n[s]=="number")return n[s]}return t}function Fg(i){let e=/^#[0-9a-f]{3}$/i.test(i)?"#"+i.slice(1).split("").map(n=>n+n).join(""):i,t=/^#[0-9a-f]{6}$/i.test(e)?Number.parseInt(e.slice(1),16):9075295;return[os(t>>16&255),os(t>>8&255),os(t&255)]}function kg(i){let e=i.colorVariation?.palette;if(Array.isArray(e)&&e.length>0)return e.filter(s=>typeof s=="string");let t=i.albedo?.secondary;return[i.baseColor??i.color??i.albedo?.dominant,...Array.isArray(t)?t:[]].filter(s=>typeof s=="string"&&s.startsWith("#"))}function Bt(i){return Math.max(0,Math.min(1,i))}function os(i){return Math.max(30,Math.min(240,Math.round(i)))}function Og(i){return Math.max(.02,Math.min(1,i))}function yh(i){return Math.max(1,Math.min(2.5,i))}function Hg(i){return i>=.5?1:0}function Bg(i){let e=typeof i.baseColor=="string"?i.baseColor:"#8A7A5F";return new qe().setStyle(e,Rt)}function xh(i){return i*i*(3-2*i)}function ta(i,e,t,n,s){let r=(i%n+n)%n,o=(e%s+s)%s,a=Math.imul(r+t*17,374761393)^Math.imul(o+t*31,668265263);return a=Math.imul(a^a>>>13,1274126177),((a^a>>>16)>>>0)/4294967295}function zg(i,e,t,n,s){let r=i*n,o=e*s,a=Math.floor(r),l=Math.floor(o),c=xh(r-a),h=xh(o-l),u=ta(a,l,t,n,s),d=ta(a+1,l,t,n,s),f=ta(a,l+1,t,n,s),_=ta(a+1,l+1,t,n,s);return pt.lerp(pt.lerp(u,d,c),pt.lerp(f,_,c),h)}function Gg(i){let t=(Array.isArray(i.surfaceFrequencyBands)?i.surfaceFrequencyBands:[]).flatMap(n=>{if(!n||typeof n!="object")return[];let s=n,r=typeof s.frequency=="number"?s.frequency:0,o=typeof s.amplitude=="number"?s.amplitude:0;if(r<=0||o<=0)return[];let a=Array.isArray(s.stretch)?s.stretch:[1,1],l=`${String(s.pattern??"")} ${String(s.role??"")}`.toLowerCase();return[{frequency:r,amplitude:o,stretchX:typeof a[0]=="number"?Math.max(.1,a[0]):1,stretchY:typeof a[1]=="number"?Math.max(.1,a[1]):1,ridge:/(ridge|groove|grain|fiber|striated|crack)/.test(l)}]});return t.length>0?t:[{frequency:2,amplitude:.42,stretchX:1,stretchY:1,ridge:!1},{frequency:12,amplitude:.22,stretchX:1,stretchY:1,ridge:!1},{frequency:56,amplitude:.08,stretchX:1,stretchY:1,ridge:!1}]}function Al(i,e,t,n){let s=0,r=0;for(let o=0;o<t.length;o+=1){let a=t[o],l=Math.max(1,Math.round(a.frequency*a.stretchX)),c=Math.max(1,Math.round(a.frequency*a.stretchY)),h=zg(i,e,n+o*1013,l,c);a.ridge&&(h=1-Math.abs(h*2-1)),s+=h*a.amplitude,r+=a.amplitude}return r>0?Bt(s/r):.5}function Vg(i,e){if(i.length===1)return i[0];let t=Bt(e)*(i.length-1),n=Math.min(i.length-2,Math.floor(t)),s=t-n,r=i[n],o=i[n+1];return[Math.round(pt.lerp(r[0],o[0],s)),Math.round(pt.lerp(r[1],o[1],s)),Math.round(pt.lerp(r[2],o[2],s))]}function bh(i){let e=/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/.exec(i);return e?[os(Number(e[1])),os(Number(e[2])),os(Number(e[3]))]:[138,122,95]}function Wg(i,e,t){let n=i.stops.length>=2?i.stops:[{offset:0,color:"rgba(138,122,95,1)"},{offset:1,color:"rgba(138,122,95,1)"}],s;if(i.type==="radial"){let[h,u]=i.axis,d=e-h,f=t-u,_=Math.max(.001,Math.hypot(Math.max(h,1-h),Math.max(u,1-u)));s=Bt(Math.hypot(d,f)/_)}else{let[h,u]=i.axis,d=(e-.5)*h+(t-.5)*u,f=.5*(Math.abs(h)+Math.abs(u))||.5;s=Bt(d/f+.5)}let r=s*(n.length-1),o=Math.min(n.length-2,Math.max(0,Math.floor(r))),a=r-o,l=bh(n[o].color),c=bh(n[o+1].color);return[pt.lerp(l[0],c[0],a),pt.lerp(l[1],c[1],a),pt.lerp(l[2],c[2],a)]}function zs(i,e,t,n,s){i[e]=Math.max(0,Math.min(255,Math.round(t))),i[e+1]=Math.max(0,Math.min(255,Math.round(n))),i[e+2]=Math.max(0,Math.min(255,Math.round(s))),i[e+3]=255}function Gs(i){let e=document.createElement("canvas");return e.width=i,e.height=i,e}function Vs(i,e,t,n){let s=new In(i),r=t.textureProjection&&typeof t.textureProjection=="object"?t.textureProjection:{},o=Array.isArray(r.repeat)?r.repeat:[2,2];return s.colorSpace=e,s.wrapS=Yt,s.wrapT=Yt,s.repeat.set(typeof o[0]=="number"?o[0]:2,typeof o[1]=="number"?o[1]:2),s.anisotropy=Math.max(1,Math.round(n.textureAnisotropy??r.anisotropy??8)),s.needsUpdate=!0,s}function Ws(i,e){let t=i.referencePbr;if(!t||typeof t!="object"||t.usable===!1)return null;let n=typeof t.confidence=="number"?t.confidence:typeof t.estimatedFidelity=="number"?t.estimatedFidelity:0,s=typeof t.targetThreshold=="number"?t.targetThreshold:.7;if(n<s)return null;let r=t.maps;if(!r||typeof r!="object")return null;let o=r[e];if(!o||typeof o!="object")return null;let a=o,l=typeof a.url=="string"&&a.url.trim()?a.url:a.path;return typeof l=="string"&&l.trim()?l:null}function qs(i,e,t,n){let s=new ai().load(i),r=t.textureProjection&&typeof t.textureProjection=="object"?t.textureProjection:{},o=Array.isArray(r.repeat)?r.repeat:[1,1];return s.colorSpace=e,s.wrapS=Yt,s.wrapT=Yt,s.repeat.set(typeof o[0]=="number"?o[0]:1,typeof o[1]=="number"?o[1]:1),s.anisotropy=Math.max(1,Math.round(n.textureAnisotropy??r.anisotropy??8)),s.needsUpdate=!0,s}function qg(i,e){let t=Ws(i,"albedo"),n=Ws(i,"roughness"),s=Ws(i,"height"),r=Ws(i,"normal"),o=Ws(i,"ao");return!t||!n||!s||!r||!o?null:{albedo:qs(t,Rt,i,e),roughness:qs(n,dt,i,e),height:qs(s,dt,i,e),normal:qs(r,dt,i,e),ao:qs(o,dt,i,e),source:"reference-pixel-extraction"}}function Xg(i,e,t){if(typeof document>"u")return null;let n=(t.qualityPriority??"reference-fidelity")==="reference-fidelity",s=t.textureSize??e.textureResolution,r=typeof s=="number"&&Number.isFinite(s)?s:n?1024:512,o=Math.max(256,Math.min(2048,2**Math.round(Math.log2(r)))),a={albedo:Gs(o),roughness:Gs(o),height:Gs(o),normal:Gs(o),ao:Gs(o)},l={albedo:a.albedo.getContext("2d"),roughness:a.roughness.getContext("2d"),height:a.height.getContext("2d"),normal:a.normal.getContext("2d"),ao:a.ao.getContext("2d")};if(!l.albedo||!l.roughness||!l.height||!l.normal||!l.ao)return null;let c={albedo:l.albedo.createImageData(o,o),roughness:l.roughness.createImageData(o,o),height:l.height.createImageData(o,o),normal:l.normal.createImageData(o,o),ao:l.ao.createImageData(o,o)},h=Ng(i),u=Gg(e),d=new Float32Array(o*o),f=new Float32Array(o*o),_=kg(e),v=typeof e.baseColor=="string"?e.baseColor:"#8A7A5F",p=(_.length>=2?_:[v,"#6E614B","#A08F70"]).map(Fg),m=Bt(_t(e.roughness,["base"],.76)),T=Bt(_t(e.roughness,["variation"],.18)),M=Bt(_t(e.colorVariation,["amplitude","variation"],.18)),E=Bt(_t(e.colorVariation,["heightCorrelation"],.3)),C=e.colorGradient;for(let A=0;A<o;A+=1){let z=A/o;for(let g=0;g<o;g+=1){let x=g/o,k=A*o+g,F=Al(x,z,u,h+101),H=Al(x,z,u,h+7001),X=Al(x,z,u,h+15013);d[k]=F,f[k]=Bt(m+(H-.5)*T*2);let L;if(C)L=Wg(C,x,z);else{let Y=Bt(.5+(X-.5)*M*2+(F-.5)*E);L=Vg(p,Y)}zs(c.albedo.data,k*4,L[0],L[1],L[2])}}let P=Math.max(.05,_t(e.normal,["strength","amplitude"],.35)),R=Bt(_t(e.ambientOcclusion,["cavityStrength","strength"],.35));for(let A=0;A<o;A+=1){let z=(A-1+o)%o*o,g=(A+1)%o*o;for(let x=0;x<o;x+=1){let k=(x-1+o)%o,F=(x+1)%o,H=A*o+x,X=d[H],L=(d[A*o+F]-d[A*o+k])*P*6,Y=(d[g+x]-d[z+x])*P*6,q=1/Math.sqrt(L*L+Y*Y+1),de=-L*q,ae=-Y*q,re=q,Je=(d[A*o+k]+d[A*o+F]+d[z+x]+d[g+x])*.25,ze=Math.max(0,Je-X),G=Bt(1-R*(ze*12+(1-X)*.16)),Z=H*4,Se=X*255,se=f[H]*255;zs(c.height.data,Z,Se,Se,Se),zs(c.roughness.data,Z,se,se,se),zs(c.normal.data,Z,(de*.5+.5)*255,(ae*.5+.5)*255,(re*.5+.5)*255),zs(c.ao.data,Z,G*255,G*255,G*255)}}return l.albedo.putImageData(c.albedo,0,0),l.roughness.putImageData(c.roughness,0,0),l.height.putImageData(c.height,0,0),l.normal.putImageData(c.normal,0,0),l.ao.putImageData(c.ao,0,0),{albedo:Vs(a.albedo,Rt,e,t),roughness:Vs(a.roughness,dt,e,t),height:Vs(a.height,dt,e,t),normal:Vs(a.normal,dt,e,t),ao:Vs(a.ao,dt,e,t),source:"procedural"}}function Cl(i,e,t,n=!1){let r=e.textureless?.declared===!0?null:qg(e,t)??Xg(i,e,t),o=new ri({color:r?16777215:Bg(e),roughness:r?1:Bt(_t(e.roughness,["base"],.76)),metalness:Hg(_t(e.metalness,["base"],0)),clearcoat:Bt(_t(e.clearcoat,["base","amount"],0)),clearcoatRoughness:Bt(_t(e.clearcoatRoughness,["base"],.25)),transmission:Bt(_t(e.transmission,["base","amount"],0)),ior:yh(_t(e.ior,["base","value"],1.5)),thickness:Math.max(0,_t(e.thickness,["base","amount"],0)),attenuationDistance:Math.max(.001,_t(e.attenuationDistance,["base","value"],1/0)),attenuationColor:new qe(typeof e.attenuationColor=="string"?e.attenuationColor:"#ffffff"),sheen:Bt(_t(e.sheen,["base","amount"],0)),sheenColor:new qe(typeof e.sheenColor=="string"?e.sheenColor:"#ffffff"),sheenRoughness:Bt(_t(e.sheenRoughness,["base"],1)),iridescence:Bt(_t(e.iridescence,["base","amount"],0)),iridescenceIOR:yh(_t(e.iridescenceIOR,["base","value"],1.3)),anisotropy:Bt(_t(e.anisotropy,["base","amount"],0)),anisotropyRotation:_t(e.anisotropy,["rotation"],0),specularIntensity:Og(_t(e.specularF0??e.f0??e.specularIntensity,["base","value"],1)),specularColor:new qe(typeof e.specularColor=="string"?e.specularColor:"#ffffff"),emissive:new qe(typeof e.emissive=="string"?e.emissive:"#000000"),emissiveIntensity:Math.max(0,_t(e.emissiveIntensity,["base"],1)),opacity:Bt(_t(e.opacity,["base"],1)),transparent:_t(e.transmission,["base","amount"],0)>0||_t(e.opacity,["base"],1)<1,alphaTest:Math.max(0,_t(e.alpha,["cutoff","alphaTest"],0)),wireframe:t.wireframe??!1,side:e.doubleSided===!0?tn:rn,flatShading:e.flatShading===!0});if(r){o.map=r.albedo,o.roughnessMap=r.roughness,o.normalMap=r.normal,o.normalScale.setScalar(Math.max(.05,_t(e.normal,["strength","amplitude"],.35))),o.aoMap=r.ao,o.aoMap.channel=0,o.aoMapIntensity=_t(e.ambientOcclusion,["cavityStrength","strength"],.35);let a=n||e.denseMesh===!0||e.geometryDensity==="dense"||e.topologyClass==="dense",l=Math.max(0,_t(e.bump,["amplitude","strength"],0)),c=a?Math.max(.05,l):l;c>0&&(o.bumpMap=r.height,o.bumpScale=c);let h=Math.max(0,_t(e.displacement,["amplitude","strength"],0)),u=a?Math.max(.005,h):h;u>0&&(o.displacementMap=r.height,o.displacementScale=u,o.displacementBias=-u*.5)}return o.envMapIntensity=_t(e,["envMapIntensity"],.8),o.userData.sculptMaterial=e,o.userData.proceduralMapsIndependent=!0,o.userData.pbrConstraints={albedoRange:[30,240],binaryMetalness:!0,f0Range:[.02,1],iorRange:[1,2.5]},o.userData.pbrTextureSource=r?.source??"flat-fallback",o.userData.referencePbr=e.referencePbr??null,o.userData.referenceMaterialId=e.referenceMaterialId??e.materialReference?.profileId??null,o.userData.materialEvidence=e.materialEvidence??null,o.userData.validationViews=e.materialReference?.validationViews??[],o.needsUpdate=!0,o}function vh(i,e){return Array.isArray(i)&&i.length===3&&i.every(t=>typeof t=="number")?new N(i[0],i[1],i[2]):new N(e[0],e[1],e[2])}function Mh(i,e){return typeof i=="number"&&Number.isFinite(i)?i:e}function St(i){if(!i||typeof i!="object")return null;let e=i,t=vh(e.localStart,[0,0,0]),s=vh(e.localEnd,[0,1,0]).clone().sub(t),r=s.length();if(r<=1e-4)return null;let o=s.clone().normalize(),a=new on().setFromUnitVectors(new N(0,1,0),o),l=Math.max(.005,Mh(e.baseRadius,.06)),c=Math.max(.003,Mh(e.endRadius,l*.55));return{start:t,midpoint:s.multiplyScalar(.5),quaternion:a,length:r,baseRadius:l,endRadius:c}}function Yg(i={}){let e=new ce;e.name="ISO 40ft dry container",e.userData.reconstructionEvidence={itemFamily:null,subtype:null,componentAdapter:null,route:null,exactnessTier:null,referenceCamera:{solved:!1,fovDegrees:40,aspect:1,orientation:{yaw:0,pitch:0,roll:0},positionHint:[0,0,3],note:"For likeness work, solve the reference camera (forge/stage1_intake/solve_camera_pose.py) so the review render aligns with the photo and the reference can be projected. Confirm by overlay review."},approximationNotes:[]},e.userData.materialPipeline={},e.userData.materialReferenceRegistry=null;let t={};t.paint=Cl("paint",{id:"paint",name:"Oxide-red marine paint on corten steel",type:"standard",shaderModel:"MeshStandardMaterial / PBR approximation",baseColor:"#8E3B30",color:"#8E3B30",albedo:{dominant:"#8E3B30",secondary:["#8E3B30"],samplingNotes:"Base albedo with lighting removed; ridge/valley tone comes from corrugation geometry, not paint."},colorVariation:{palette:["#8E3B30"],pattern:"uniform satin paint",amplitude:.04,heightCorrelation:0},roughness:{base:.5,variation:.05,map:"independent-procedural-field",localResponse:"slightly lower on rails polished by twistlocks"},metalness:{base:0,variation:0},ambientOcclusion:{mode:"geometry-and-lighting",strength:.6,notes:"valley darkening from corrugation geometry and contact shadow under rails"},localOverrides:[{id:"data-plate",region:"left wall, near door end, 0.5 m above bottom rail",albedo:"#C9A79F",roughness:.5,notes:"CSC safety approval plate (light painted aluminium)"},{id:"wordmark",region:"both side walls, upper third",albedo:"#F4F5F4",roughness:.55,notes:"PERCONSUR wordmark painted on the side (site branding)"}],materialClass:"metal",finishClass:"painted-metal",texturePalette:["#7A342B","#75332A","#99574F","#6F3128","#86392F"],clearcoat:{base:1,variation:0},clearcoatRoughness:{base:.05,variation:0},transmission:{base:0,variation:0},ior:{base:1.5,value:1.5},envMapIntensity:1,textureless:{declared:!0,evidence:["extract_pbr_evidence on crop-paint.png: confidence 0.751 (pass); palette ['#78352C', '#6D2F26', '#853C32', '#98544A', '#8F473D']","material-pass render: reference crop used as albedo map tiled the drawing's painted rib highlights over the modelled ribs (double stripes, horizontal banding) \u2014 the reference's tone variation is lighting on corrugation geometry, not paint","ISO dry containers are finished in a single uniform marine paint coat; identity is silhouette, rib relief and frame/casting colour regions"],pbrEvidenceFile:"pbr-paint.json"}},i),t["frame-paint"]=Cl("frame-paint",{id:"frame-paint",name:"Frame members, darker red",type:"standard",shaderModel:"MeshStandardMaterial / PBR approximation",baseColor:"#7D342A",color:"#7D342A",albedo:{dominant:"#7D342A",secondary:["#7D342A"],samplingNotes:"Base albedo with lighting removed; ridge/valley tone comes from corrugation geometry, not paint."},colorVariation:{palette:["#7D342A"],pattern:"uniform satin paint",amplitude:.04,heightCorrelation:0},roughness:{base:.5,variation:.05,map:"independent-procedural-field",localResponse:"slightly lower on rails polished by twistlocks"},metalness:{base:0,variation:0},ambientOcclusion:{mode:"geometry-and-lighting",strength:.6,notes:"valley darkening from corrugation geometry and contact shadow under rails"},localOverrides:[{id:"rail-wear",region:"top rail upper face",albedo:"#9C5349",roughness:.5,notes:"lighter worn top face"}],materialClass:"metal",finishClass:"painted-metal",texturePalette:["#7E3A30","#6B2F26","#7D342A","#7D342A","#7D342A"],clearcoat:{base:1,variation:0},clearcoatRoughness:{base:.05,variation:0},transmission:{base:0,variation:0},ior:{base:1.5,value:1.5},envMapIntensity:1,textureless:{declared:!0,evidence:["extract_pbr_evidence on crop-frame-paint.png: confidence 0.729 (pass); palette ['#7D342A', '#8E4E46', '#6C2F27', '#7A382F']","material-pass render: reference crop used as albedo map tiled the drawing's painted rib highlights over the modelled ribs (double stripes, horizontal banding) \u2014 the reference's tone variation is lighting on corrugation geometry, not paint","ISO dry containers are finished in a single uniform marine paint coat; identity is silhouette, rib relief and frame/casting colour regions"],pbrEvidenceFile:"pbr-frame-paint.json"}},i),t.casting=Cl("casting",{id:"casting",name:"Cast steel corner fittings",type:"standard",shaderModel:"MeshStandardMaterial / PBR approximation",baseColor:"#58251E",color:"#58251E",albedo:{dominant:"#58251E",secondary:["#58251E"],samplingNotes:"Base albedo with lighting removed; ridge/valley tone comes from corrugation geometry, not paint."},colorVariation:{palette:["#58251E"],pattern:"uniform satin paint",amplitude:.04,heightCorrelation:0},roughness:{base:.5,variation:.05,map:"independent-procedural-field",localResponse:"slightly lower on rails polished by twistlocks"},metalness:{base:0,variation:0},ambientOcclusion:{mode:"geometry-and-lighting",strength:.6,notes:"valley darkening from corrugation geometry and contact shadow under rails"},localOverrides:[{id:"aperture",region:"outer faces of castings",albedo:"#101114",roughness:.8,notes:"dark oval apertures"}],materialClass:"metal",finishClass:"painted-metal",texturePalette:["#78433C","#59261F","#50231E","#59251E","#662C25"],clearcoat:{base:1,variation:0},clearcoatRoughness:{base:.05,variation:0},transmission:{base:0,variation:0},ior:{base:1.5,value:1.5},envMapIntensity:1,textureless:{declared:!0,evidence:["extract_pbr_evidence on crop-casting.png: confidence 0.778 (pass); palette ['#58251E', '#7F3D34', '#652A23', '#121114']","material-pass render: reference crop used as albedo map tiled the drawing's painted rib highlights over the modelled ribs (double stripes, horizontal banding) \u2014 the reference's tone variation is lighting on corrugation geometry, not paint","ISO dry containers are finished in a single uniform marine paint coat; identity is silhouette, rib relief and frame/casting colour regions"],pbrEvidenceFile:"pbr-casting.json"}},i);let n={root:e},s={},r={},o={},a={},l=St(null),c=new ce;c.name="Floor and bottom cross-member deck__pivot",c.scale.set(1,1,1),l?(c.position.copy(l.start),c.rotation.set(0,0,0)):(c.position.set(0,.08,0),c.rotation.set(0,0,0)),c.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[2.398,.16,12.172],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"floor-deck",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"frame-paint"}},(n.root??e).add(c),n["floor-deck"]=c;let h=l?new he(l.endRadius,l.baseRadius,l.length,16,6):new Ie(1,1,1,4,4,4);l||h.scale(2.398,.16,12.172);let u=new ne(h,t["frame-paint"]??new _e({color:8947848}));u.name="Floor and bottom cross-member deck",l&&(u.position.copy(l.midpoint),u.quaternion.copy(l.quaternion)),u.castShadow=i.castShadow??!0,u.receiveShadow=i.receiveShadow??!0,c.add(u),s["floor-deck"]=u,o["floor-deck"]={type:"box",offset:[0,0,0],scale:[2.398,.16,12.172],isTrigger:!1,notes:"box proxy"},a["floor-deck"]??(a["floor-deck"]=[]),a["floor-deck"].push(c);let d=St(null),f=new ce;f.name="Left corrugated side wall__pivot",f.scale.set(1,1,1),d?(f.position.copy(d.start),f.rotation.set(-1.5707963267948966,0,-1.5707963267948966)):(f.position.set(1.183,.07,0),f.rotation.set(-1.5707963267948966,0,-1.5707963267948966)),f.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.036,2.2910000000000004,11.872],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"side-wall-l",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"paint"}},(n["floor-deck"]??e).add(f),n["side-wall-l"]=f;let _=d?new he(d.endRadius,d.baseRadius,d.length,16,6):_h({points:[[-5.936,0],[-5.8946,.036],[-5.798,.036],[-5.7565,0],[-5.6599,0],[-5.6185,.036],[-5.5219,.036],[-5.4804,0],[-5.3838,0],[-5.3424,.036],[-5.2458,.036],[-5.2044,0],[-5.1077,0],[-5.0663,.036],[-4.9697,.036],[-4.9283,0],[-4.8316,0],[-4.7902,.036],[-4.6936,.036],[-4.6522,0],[-4.5555,0],[-4.5141,.036],[-4.4175,.036],[-4.3761,0],[-4.2794,0],[-4.238,.036],[-4.1414,.036],[-4.1,0],[-4.0033,0],[-3.9619,.036],[-3.8653,.036],[-3.8239,0],[-3.7273,0],[-3.6858,.036],[-3.5892,.036],[-3.5478,0],[-3.4512,0],[-3.4097,.036],[-3.3131,.036],[-3.2717,0],[-3.1751,0],[-3.1337,.036],[-3.037,.036],[-2.9956,0],[-2.899,0],[-2.8576,.036],[-2.7609,.036],[-2.7195,0],[-2.6229,0],[-2.5815,.036],[-2.4848,.036],[-2.4434,0],[-2.3468,0],[-2.3054,.036],[-2.2087,.036],[-2.1673,0],[-2.0707,0],[-2.0293,.036],[-1.9327,.036],[-1.8912,0],[-1.7946,0],[-1.7532,.036],[-1.6566,.036],[-1.6151,0],[-1.5185,0],[-1.4771,.036],[-1.3805,.036],[-1.3391,0],[-1.2424,0],[-1.201,.036],[-1.1044,.036],[-1.063,0],[-.9663,0],[-.9249,.036],[-.8283,.036],[-.7869,0],[-.6902,0],[-.6488,.036],[-.5522,.036],[-.5108,0],[-.4141,0],[-.3727,.036],[-.2761,.036],[-.2347,0],[-.138,0],[-.0966,.036],[0,.036],[.0414,0],[.138,0],[.1795,.036],[.2761,.036],[.3175,0],[.4141,0],[.4556,.036],[.5522,.036],[.5936,0],[.6902,0],[.7316,.036],[.8283,.036],[.8697,0],[.9663,0],[1.0077,.036],[1.1044,.036],[1.1458,0],[1.2424,0],[1.2838,.036],[1.3805,.036],[1.4219,0],[1.5185,0],[1.5599,.036],[1.6566,.036],[1.698,0],[1.7946,0],[1.836,.036],[1.9327,.036],[1.9741,0],[2.0707,0],[2.1121,.036],[2.2087,.036],[2.2502,0],[2.3468,0],[2.3882,.036],[2.4848,.036],[2.5263,0],[2.6229,0],[2.6643,.036],[2.7609,.036],[2.8023,0],[2.899,0],[2.9404,.036],[3.037,.036],[3.0784,0],[3.1751,0],[3.2165,.036],[3.3131,.036],[3.3545,0],[3.4512,0],[3.4926,.036],[3.5892,.036],[3.6306,0],[3.7273,0],[3.7687,.036],[3.8653,.036],[3.9067,0],[4.0033,0],[4.0448,.036],[4.1414,.036],[4.1828,0],[4.2794,0],[4.3209,.036],[4.4175,.036],[4.4589,0],[4.5555,0],[4.5969,.036],[4.6936,.036],[4.735,0],[4.8316,0],[4.873,.036],[4.9697,.036],[5.0111,0],[5.1077,0],[5.1491,.036],[5.2458,.036],[5.2872,0],[5.3838,0],[5.4252,.036],[5.5219,.036],[5.5633,0],[5.6599,0],[5.7013,.036],[5.798,.036],[5.8394,0],[5.936,0],[5.936,-.02],[5.8394,-.02],[5.798,.016],[5.7013,.016],[5.6599,-.02],[5.5633,-.02],[5.5219,.016],[5.4252,.016],[5.3838,-.02],[5.2872,-.02],[5.2458,.016],[5.1491,.016],[5.1077,-.02],[5.0111,-.02],[4.9697,.016],[4.873,.016],[4.8316,-.02],[4.735,-.02],[4.6936,.016],[4.5969,.016],[4.5555,-.02],[4.4589,-.02],[4.4175,.016],[4.3209,.016],[4.2794,-.02],[4.1828,-.02],[4.1414,.016],[4.0448,.016],[4.0033,-.02],[3.9067,-.02],[3.8653,.016],[3.7687,.016],[3.7273,-.02],[3.6306,-.02],[3.5892,.016],[3.4926,.016],[3.4512,-.02],[3.3545,-.02],[3.3131,.016],[3.2165,.016],[3.1751,-.02],[3.0784,-.02],[3.037,.016],[2.9404,.016],[2.899,-.02],[2.8023,-.02],[2.7609,.016],[2.6643,.016],[2.6229,-.02],[2.5263,-.02],[2.4848,.016],[2.3882,.016],[2.3468,-.02],[2.2502,-.02],[2.2087,.016],[2.1121,.016],[2.0707,-.02],[1.9741,-.02],[1.9327,.016],[1.836,.016],[1.7946,-.02],[1.698,-.02],[1.6566,.016],[1.5599,.016],[1.5185,-.02],[1.4219,-.02],[1.3805,.016],[1.2838,.016],[1.2424,-.02],[1.1458,-.02],[1.1044,.016],[1.0077,.016],[.9663,-.02],[.8697,-.02],[.8283,.016],[.7316,.016],[.6902,-.02],[.5936,-.02],[.5522,.016],[.4556,.016],[.4141,-.02],[.3175,-.02],[.2761,.016],[.1795,.016],[.138,-.02],[.0414,-.02],[0,.016],[-.0966,.016],[-.138,-.02],[-.2347,-.02],[-.2761,.016],[-.3727,.016],[-.4141,-.02],[-.5108,-.02],[-.5522,.016],[-.6488,.016],[-.6902,-.02],[-.7869,-.02],[-.8283,.016],[-.9249,.016],[-.9663,-.02],[-1.063,-.02],[-1.1044,.016],[-1.201,.016],[-1.2424,-.02],[-1.3391,-.02],[-1.3805,.016],[-1.4771,.016],[-1.5185,-.02],[-1.6151,-.02],[-1.6566,.016],[-1.7532,.016],[-1.7946,-.02],[-1.8912,-.02],[-1.9327,.016],[-2.0293,.016],[-2.0707,-.02],[-2.1673,-.02],[-2.2087,.016],[-2.3054,.016],[-2.3468,-.02],[-2.4434,-.02],[-2.4848,.016],[-2.5815,.016],[-2.6229,-.02],[-2.7195,-.02],[-2.7609,.016],[-2.8576,.016],[-2.899,-.02],[-2.9956,-.02],[-3.037,.016],[-3.1337,.016],[-3.1751,-.02],[-3.2717,-.02],[-3.3131,.016],[-3.4097,.016],[-3.4512,-.02],[-3.5478,-.02],[-3.5892,.016],[-3.6858,.016],[-3.7273,-.02],[-3.8239,-.02],[-3.8653,.016],[-3.9619,.016],[-4.0033,-.02],[-4.1,-.02],[-4.1414,.016],[-4.238,.016],[-4.2794,-.02],[-4.3761,-.02],[-4.4175,.016],[-4.5141,.016],[-4.5555,-.02],[-4.6522,-.02],[-4.6936,.016],[-4.7902,.016],[-4.8316,-.02],[-4.9283,-.02],[-4.9697,.016],[-5.0663,.016],[-5.1077,-.02],[-5.2044,-.02],[-5.2458,.016],[-5.3424,.016],[-5.3838,-.02],[-5.4804,-.02],[-5.5219,.016],[-5.6185,.016],[-5.6599,-.02],[-5.7565,-.02],[-5.798,.016],[-5.8946,.016],[-5.936,-.02]],depth:2.291});d||_.scale(1,1,1);let v=new ne(_,t.paint??new _e({color:8947848}));v.name="Left corrugated side wall",d&&(v.position.copy(d.midpoint),v.quaternion.copy(d.quaternion)),v.castShadow=i.castShadow??!0,v.receiveShadow=i.receiveShadow??!0,f.add(v),s["side-wall-l"]=v,o["side-wall-l"]={type:"box",offset:[0,0,0],scale:[.036,2.2910000000000004,11.872],isTrigger:!1,notes:"box proxy"},a["side-wall-l"]??(a["side-wall-l"]=[]),a["side-wall-l"].push(f);let p=St(null),m=new ce;m.name="Right corrugated side wall__pivot",m.scale.set(1,1,1),p?(m.position.copy(p.start),m.rotation.set(-1.5707963267948966,0,1.5707963267948966)):(m.position.set(-1.183,.07,0),m.rotation.set(-1.5707963267948966,0,1.5707963267948966)),m.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.036,2.2910000000000004,11.872],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"side-wall-r",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"paint"}},(n["floor-deck"]??e).add(m),n["side-wall-r"]=m;let T=p?new he(p.endRadius,p.baseRadius,p.length,16,6):_h({points:[[-5.936,0],[-5.8946,.036],[-5.798,.036],[-5.7565,0],[-5.6599,0],[-5.6185,.036],[-5.5219,.036],[-5.4804,0],[-5.3838,0],[-5.3424,.036],[-5.2458,.036],[-5.2044,0],[-5.1077,0],[-5.0663,.036],[-4.9697,.036],[-4.9283,0],[-4.8316,0],[-4.7902,.036],[-4.6936,.036],[-4.6522,0],[-4.5555,0],[-4.5141,.036],[-4.4175,.036],[-4.3761,0],[-4.2794,0],[-4.238,.036],[-4.1414,.036],[-4.1,0],[-4.0033,0],[-3.9619,.036],[-3.8653,.036],[-3.8239,0],[-3.7273,0],[-3.6858,.036],[-3.5892,.036],[-3.5478,0],[-3.4512,0],[-3.4097,.036],[-3.3131,.036],[-3.2717,0],[-3.1751,0],[-3.1337,.036],[-3.037,.036],[-2.9956,0],[-2.899,0],[-2.8576,.036],[-2.7609,.036],[-2.7195,0],[-2.6229,0],[-2.5815,.036],[-2.4848,.036],[-2.4434,0],[-2.3468,0],[-2.3054,.036],[-2.2087,.036],[-2.1673,0],[-2.0707,0],[-2.0293,.036],[-1.9327,.036],[-1.8912,0],[-1.7946,0],[-1.7532,.036],[-1.6566,.036],[-1.6151,0],[-1.5185,0],[-1.4771,.036],[-1.3805,.036],[-1.3391,0],[-1.2424,0],[-1.201,.036],[-1.1044,.036],[-1.063,0],[-.9663,0],[-.9249,.036],[-.8283,.036],[-.7869,0],[-.6902,0],[-.6488,.036],[-.5522,.036],[-.5108,0],[-.4141,0],[-.3727,.036],[-.2761,.036],[-.2347,0],[-.138,0],[-.0966,.036],[0,.036],[.0414,0],[.138,0],[.1795,.036],[.2761,.036],[.3175,0],[.4141,0],[.4556,.036],[.5522,.036],[.5936,0],[.6902,0],[.7316,.036],[.8283,.036],[.8697,0],[.9663,0],[1.0077,.036],[1.1044,.036],[1.1458,0],[1.2424,0],[1.2838,.036],[1.3805,.036],[1.4219,0],[1.5185,0],[1.5599,.036],[1.6566,.036],[1.698,0],[1.7946,0],[1.836,.036],[1.9327,.036],[1.9741,0],[2.0707,0],[2.1121,.036],[2.2087,.036],[2.2502,0],[2.3468,0],[2.3882,.036],[2.4848,.036],[2.5263,0],[2.6229,0],[2.6643,.036],[2.7609,.036],[2.8023,0],[2.899,0],[2.9404,.036],[3.037,.036],[3.0784,0],[3.1751,0],[3.2165,.036],[3.3131,.036],[3.3545,0],[3.4512,0],[3.4926,.036],[3.5892,.036],[3.6306,0],[3.7273,0],[3.7687,.036],[3.8653,.036],[3.9067,0],[4.0033,0],[4.0448,.036],[4.1414,.036],[4.1828,0],[4.2794,0],[4.3209,.036],[4.4175,.036],[4.4589,0],[4.5555,0],[4.5969,.036],[4.6936,.036],[4.735,0],[4.8316,0],[4.873,.036],[4.9697,.036],[5.0111,0],[5.1077,0],[5.1491,.036],[5.2458,.036],[5.2872,0],[5.3838,0],[5.4252,.036],[5.5219,.036],[5.5633,0],[5.6599,0],[5.7013,.036],[5.798,.036],[5.8394,0],[5.936,0],[5.936,-.02],[5.8394,-.02],[5.798,.016],[5.7013,.016],[5.6599,-.02],[5.5633,-.02],[5.5219,.016],[5.4252,.016],[5.3838,-.02],[5.2872,-.02],[5.2458,.016],[5.1491,.016],[5.1077,-.02],[5.0111,-.02],[4.9697,.016],[4.873,.016],[4.8316,-.02],[4.735,-.02],[4.6936,.016],[4.5969,.016],[4.5555,-.02],[4.4589,-.02],[4.4175,.016],[4.3209,.016],[4.2794,-.02],[4.1828,-.02],[4.1414,.016],[4.0448,.016],[4.0033,-.02],[3.9067,-.02],[3.8653,.016],[3.7687,.016],[3.7273,-.02],[3.6306,-.02],[3.5892,.016],[3.4926,.016],[3.4512,-.02],[3.3545,-.02],[3.3131,.016],[3.2165,.016],[3.1751,-.02],[3.0784,-.02],[3.037,.016],[2.9404,.016],[2.899,-.02],[2.8023,-.02],[2.7609,.016],[2.6643,.016],[2.6229,-.02],[2.5263,-.02],[2.4848,.016],[2.3882,.016],[2.3468,-.02],[2.2502,-.02],[2.2087,.016],[2.1121,.016],[2.0707,-.02],[1.9741,-.02],[1.9327,.016],[1.836,.016],[1.7946,-.02],[1.698,-.02],[1.6566,.016],[1.5599,.016],[1.5185,-.02],[1.4219,-.02],[1.3805,.016],[1.2838,.016],[1.2424,-.02],[1.1458,-.02],[1.1044,.016],[1.0077,.016],[.9663,-.02],[.8697,-.02],[.8283,.016],[.7316,.016],[.6902,-.02],[.5936,-.02],[.5522,.016],[.4556,.016],[.4141,-.02],[.3175,-.02],[.2761,.016],[.1795,.016],[.138,-.02],[.0414,-.02],[0,.016],[-.0966,.016],[-.138,-.02],[-.2347,-.02],[-.2761,.016],[-.3727,.016],[-.4141,-.02],[-.5108,-.02],[-.5522,.016],[-.6488,.016],[-.6902,-.02],[-.7869,-.02],[-.8283,.016],[-.9249,.016],[-.9663,-.02],[-1.063,-.02],[-1.1044,.016],[-1.201,.016],[-1.2424,-.02],[-1.3391,-.02],[-1.3805,.016],[-1.4771,.016],[-1.5185,-.02],[-1.6151,-.02],[-1.6566,.016],[-1.7532,.016],[-1.7946,-.02],[-1.8912,-.02],[-1.9327,.016],[-2.0293,.016],[-2.0707,-.02],[-2.1673,-.02],[-2.2087,.016],[-2.3054,.016],[-2.3468,-.02],[-2.4434,-.02],[-2.4848,.016],[-2.5815,.016],[-2.6229,-.02],[-2.7195,-.02],[-2.7609,.016],[-2.8576,.016],[-2.899,-.02],[-2.9956,-.02],[-3.037,.016],[-3.1337,.016],[-3.1751,-.02],[-3.2717,-.02],[-3.3131,.016],[-3.4097,.016],[-3.4512,-.02],[-3.5478,-.02],[-3.5892,.016],[-3.6858,.016],[-3.7273,-.02],[-3.8239,-.02],[-3.8653,.016],[-3.9619,.016],[-4.0033,-.02],[-4.1,-.02],[-4.1414,.016],[-4.238,.016],[-4.2794,-.02],[-4.3761,-.02],[-4.4175,.016],[-4.5141,.016],[-4.5555,-.02],[-4.6522,-.02],[-4.6936,.016],[-4.7902,.016],[-4.8316,-.02],[-4.9283,-.02],[-4.9697,.016],[-5.0663,.016],[-5.1077,-.02],[-5.2044,-.02],[-5.2458,.016],[-5.3424,.016],[-5.3838,-.02],[-5.4804,-.02],[-5.5219,.016],[-5.6185,.016],[-5.6599,-.02],[-5.7565,-.02],[-5.798,.016],[-5.8946,.016],[-5.936,-.02]],depth:2.291});p||T.scale(1,1,1);let M=new ne(T,t.paint??new _e({color:8947848}));M.name="Right corrugated side wall",p&&(M.position.copy(p.midpoint),M.quaternion.copy(p.quaternion)),M.castShadow=i.castShadow??!0,M.receiveShadow=i.receiveShadow??!0,m.add(M),s["side-wall-r"]=M,o["side-wall-r"]={type:"box",offset:[0,0,0],scale:[.036,2.2910000000000004,11.872],isTrigger:!1,notes:"box proxy"},a["side-wall-r"]??(a["side-wall-r"]=[]),a["side-wall-r"].push(m);let E=St(null),C=new ce;C.name="Roof panel with shallow transverse corrugation__pivot",C.scale.set(1,1,1),E?(C.position.copy(E.start),C.rotation.set(0,0,0)):(C.position.set(0,2.481,0),C.rotation.set(0,0,0)),C.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[2.378,.03,11.872],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"roof",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"paint"}},(n["floor-deck"]??e).add(C),n.roof=C;let P=E?new he(E.endRadius,E.baseRadius,E.length,16,6):new Ie(1,1,1,4,4,4);E||P.scale(2.378,.03,11.872);let R=new ne(P,t.paint??new _e({color:8947848}));R.name="Roof panel with shallow transverse corrugation",E&&(R.position.copy(E.midpoint),R.quaternion.copy(E.quaternion)),R.castShadow=i.castShadow??!0,R.receiveShadow=i.receiveShadow??!0,C.add(R),s.roof=R,o.roof={type:"box",offset:[0,0,0],scale:[2.378,.03,11.872],isTrigger:!1,notes:"box proxy"},a.roof??(a.roof=[]),a.roof.push(C);let A=St(null),z=new ce;z.name="Front end wall (blind end)__pivot",z.scale.set(1,1,1),A?(z.position.copy(A.start),z.rotation.set(0,0,0)):(z.position.set(0,1.2155,-6.036),z.rotation.set(0,0,0)),z.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[2.1180000000000003,2.2910000000000004,.04],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"front-wall",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"paint"}},(n["floor-deck"]??e).add(z),n["front-wall"]=z;let g=A?new he(A.endRadius,A.baseRadius,A.length,16,6):new Ie(1,1,1,4,4,4);A||g.scale(2.1180000000000003,2.2910000000000004,.04);let x=new ne(g,t.paint??new _e({color:8947848}));x.name="Front end wall (blind end)",A&&(x.position.copy(A.midpoint),x.quaternion.copy(A.quaternion)),x.castShadow=i.castShadow??!0,x.receiveShadow=i.receiveShadow??!0,z.add(x),s["front-wall"]=x,o["front-wall"]={type:"box",offset:[0,0,0],scale:[2.1180000000000003,2.2910000000000004,.04],isTrigger:!1,notes:"box proxy"},a["front-wall"]??(a["front-wall"]=[]),a["front-wall"].push(z);let k=St(null),F=new ce;F.name="Corner post rear l__pivot",F.scale.set(1,1,1),k?(F.position.copy(k.start),F.rotation.set(0,0,0)):(F.position.set(1.139,1.2155,6.016),F.rotation.set(0,0,0)),F.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.16,2.3550000000000004,.16],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"post-rear-l",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"frame-paint"}},(n["floor-deck"]??e).add(F),n["post-rear-l"]=F;let H=k?new he(k.endRadius,k.baseRadius,k.length,16,6):new Ie(1,1,1,4,4,4);k||H.scale(.16,2.3550000000000004,.16);let X=new ne(H,t["frame-paint"]??new _e({color:8947848}));X.name="Corner post rear l",k&&(X.position.copy(k.midpoint),X.quaternion.copy(k.quaternion)),X.castShadow=i.castShadow??!0,X.receiveShadow=i.receiveShadow??!0,F.add(X),s["post-rear-l"]=X,o["post-rear-l"]={type:"box",offset:[0,0,0],scale:[.16,2.3550000000000004,.16],isTrigger:!1,notes:"box proxy"},a["post-rear-l"]??(a["post-rear-l"]=[]),a["post-rear-l"].push(F);let L=St(null),Y=new ce;Y.name="Corner post rear r__pivot",Y.scale.set(1,1,1),L?(Y.position.copy(L.start),Y.rotation.set(0,0,0)):(Y.position.set(-1.139,1.2155,6.016),Y.rotation.set(0,0,0)),Y.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.16,2.3550000000000004,.16],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"post-rear-r",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"frame-paint"}},(n["floor-deck"]??e).add(Y),n["post-rear-r"]=Y;let q=L?new he(L.endRadius,L.baseRadius,L.length,16,6):new Ie(1,1,1,4,4,4);L||q.scale(.16,2.3550000000000004,.16);let de=new ne(q,t["frame-paint"]??new _e({color:8947848}));de.name="Corner post rear r",L&&(de.position.copy(L.midpoint),de.quaternion.copy(L.quaternion)),de.castShadow=i.castShadow??!0,de.receiveShadow=i.receiveShadow??!0,Y.add(de),s["post-rear-r"]=de,o["post-rear-r"]={type:"box",offset:[0,0,0],scale:[.16,2.3550000000000004,.16],isTrigger:!1,notes:"box proxy"},a["post-rear-r"]??(a["post-rear-r"]=[]),a["post-rear-r"].push(Y);let ae=St(null),re=new ce;re.name="Corner post front l__pivot",re.scale.set(1,1,1),ae?(re.position.copy(ae.start),re.rotation.set(0,0,0)):(re.position.set(1.139,1.2155,-6.016),re.rotation.set(0,0,0)),re.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.16,2.3550000000000004,.16],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"post-front-l",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"frame-paint"}},(n["floor-deck"]??e).add(re),n["post-front-l"]=re;let Je=ae?new he(ae.endRadius,ae.baseRadius,ae.length,16,6):new Ie(1,1,1,4,4,4);ae||Je.scale(.16,2.3550000000000004,.16);let ze=new ne(Je,t["frame-paint"]??new _e({color:8947848}));ze.name="Corner post front l",ae&&(ze.position.copy(ae.midpoint),ze.quaternion.copy(ae.quaternion)),ze.castShadow=i.castShadow??!0,ze.receiveShadow=i.receiveShadow??!0,re.add(ze),s["post-front-l"]=ze,o["post-front-l"]={type:"box",offset:[0,0,0],scale:[.16,2.3550000000000004,.16],isTrigger:!1,notes:"box proxy"},a["post-front-l"]??(a["post-front-l"]=[]),a["post-front-l"].push(re);let G=St(null),Z=new ce;Z.name="Corner post front r__pivot",Z.scale.set(1,1,1),G?(Z.position.copy(G.start),Z.rotation.set(0,0,0)):(Z.position.set(-1.139,1.2155,-6.016),Z.rotation.set(0,0,0)),Z.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.16,2.3550000000000004,.16],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"post-front-r",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"frame-paint"}},(n["floor-deck"]??e).add(Z),n["post-front-r"]=Z;let Se=G?new he(G.endRadius,G.baseRadius,G.length,16,6):new Ie(1,1,1,4,4,4);G||Se.scale(.16,2.3550000000000004,.16);let se=new ne(Se,t["frame-paint"]??new _e({color:8947848}));se.name="Corner post front r",G&&(se.position.copy(G.midpoint),se.quaternion.copy(G.quaternion)),se.castShadow=i.castShadow??!0,se.receiveShadow=i.receiveShadow??!0,Z.add(se),s["post-front-r"]=se,o["post-front-r"]={type:"box",offset:[0,0,0],scale:[.16,2.3550000000000004,.16],isTrigger:!1,notes:"box proxy"},a["post-front-r"]??(a["post-front-r"]=[]),a["post-front-r"].push(Z);let Re=St(null),we=new ce;we.name="Top side rail l__pivot",we.scale.set(1,1,1),Re?(we.position.copy(Re.start),we.rotation.set(0,0,0)):(we.position.set(1.184,2.4585,0),we.rotation.set(0,0,0)),we.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.07,.105,11.836],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"top-rail-l",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"frame-paint"}},(n["floor-deck"]??e).add(we),n["top-rail-l"]=we;let Ze=Re?new he(Re.endRadius,Re.baseRadius,Re.length,16,6):new Ie(1,1,1,4,4,4);Re||Ze.scale(.07,.105,11.836);let Ge=new ne(Ze,t["frame-paint"]??new _e({color:8947848}));Ge.name="Top side rail l",Re&&(Ge.position.copy(Re.midpoint),Ge.quaternion.copy(Re.quaternion)),Ge.castShadow=i.castShadow??!0,Ge.receiveShadow=i.receiveShadow??!0,we.add(Ge),s["top-rail-l"]=Ge,o["top-rail-l"]={type:"box",offset:[0,0,0],scale:[.07,.105,11.836],isTrigger:!1,notes:"box proxy"},a["top-rail-l"]??(a["top-rail-l"]=[]),a["top-rail-l"].push(we);let $=St(null),w=new ce;w.name="Bottom side rail l__pivot",w.scale.set(1,1,1),$?(w.position.copy($.start),w.rotation.set(0,0,0)):(w.position.set(1.184,-.005,0),w.rotation.set(0,0,0)),w.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.07,.15,11.836],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"bottom-rail-l",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"frame-paint"}},(n["floor-deck"]??e).add(w),n["bottom-rail-l"]=w;let Me=$?new he($.endRadius,$.baseRadius,$.length,16,6):new Ie(1,1,1,4,4,4);$||Me.scale(.07,.15,11.836);let oe=new ne(Me,t["frame-paint"]??new _e({color:8947848}));oe.name="Bottom side rail l",$&&(oe.position.copy($.midpoint),oe.quaternion.copy($.quaternion)),oe.castShadow=i.castShadow??!0,oe.receiveShadow=i.receiveShadow??!0,w.add(oe),s["bottom-rail-l"]=oe,o["bottom-rail-l"]={type:"box",offset:[0,0,0],scale:[.07,.15,11.836],isTrigger:!1,notes:"box proxy"},a["bottom-rail-l"]??(a["bottom-rail-l"]=[]),a["bottom-rail-l"].push(w);let ee=St(null),ie=new ce;ie.name="Top side rail r__pivot",ie.scale.set(1,1,1),ee?(ie.position.copy(ee.start),ie.rotation.set(0,0,0)):(ie.position.set(-1.184,2.4585,0),ie.rotation.set(0,0,0)),ie.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.07,.105,11.836],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"top-rail-r",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"frame-paint"}},(n["floor-deck"]??e).add(ie),n["top-rail-r"]=ie;let He=ee?new he(ee.endRadius,ee.baseRadius,ee.length,16,6):new Ie(1,1,1,4,4,4);ee||He.scale(.07,.105,11.836);let xe=new ne(He,t["frame-paint"]??new _e({color:8947848}));xe.name="Top side rail r",ee&&(xe.position.copy(ee.midpoint),xe.quaternion.copy(ee.quaternion)),xe.castShadow=i.castShadow??!0,xe.receiveShadow=i.receiveShadow??!0,ie.add(xe),s["top-rail-r"]=xe,o["top-rail-r"]={type:"box",offset:[0,0,0],scale:[.07,.105,11.836],isTrigger:!1,notes:"box proxy"},a["top-rail-r"]??(a["top-rail-r"]=[]),a["top-rail-r"].push(ie);let S=St(null),y=new ce;y.name="Bottom side rail r__pivot",y.scale.set(1,1,1),S?(y.position.copy(S.start),y.rotation.set(0,0,0)):(y.position.set(-1.184,-.005,0),y.rotation.set(0,0,0)),y.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.07,.15,11.836],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"bottom-rail-r",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"frame-paint"}},(n["floor-deck"]??e).add(y),n["bottom-rail-r"]=y;let B=S?new he(S.endRadius,S.baseRadius,S.length,16,6):new Ie(1,1,1,4,4,4);S||B.scale(.07,.15,11.836);let J=new ne(B,t["frame-paint"]??new _e({color:8947848}));J.name="Bottom side rail r",S&&(J.position.copy(S.midpoint),J.quaternion.copy(S.quaternion)),J.castShadow=i.castShadow??!0,J.receiveShadow=i.receiveShadow??!0,y.add(J),s["bottom-rail-r"]=J,o["bottom-rail-r"]={type:"box",offset:[0,0,0],scale:[.07,.15,11.836],isTrigger:!1,notes:"box proxy"},a["bottom-rail-r"]??(a["bottom-rail-r"]=[]),a["bottom-rail-r"].push(y);let K=St(null),W=new ce;W.name="Rear door leaf (left)__pivot",W.scale.set(1,1,1),K?(W.position.copy(K.start),W.rotation.set(0,0,0)):(W.position.set(.5295,1.2155,6.056),W.rotation.set(0,0,0)),W.userData.actionProfile={animationRole:"hinged",pivot:{mode:"edge",localPosition:[.5295000000000001,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!0,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1.0590000000000002,2.2910000000000004,.05],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"door-leaf-l",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"paint"}},(n["floor-deck"]??e).add(W),n["door-leaf-l"]=W;let ke=K?new he(K.endRadius,K.baseRadius,K.length,16,6):new Ie(1,1,1,4,4,4);K||ke.scale(1.0590000000000002,2.2910000000000004,.05);let fe=new ne(ke,t.paint??new _e({color:8947848}));fe.name="Rear door leaf (left)",K&&(fe.position.copy(K.midpoint),fe.quaternion.copy(K.quaternion)),fe.castShadow=i.castShadow??!0,fe.receiveShadow=i.receiveShadow??!0,W.add(fe),s["door-leaf-l"]=fe,o["door-leaf-l"]={type:"box",offset:[0,0,0],scale:[1.0590000000000002,2.2910000000000004,.05],isTrigger:!1,notes:"box proxy"},a["door-leaf-l"]??(a["door-leaf-l"]=[]),a["door-leaf-l"].push(W);let pe=St(null),Ne=new ce;Ne.name="Rear door leaf (right)__pivot",Ne.scale.set(1,1,1),pe?(Ne.position.copy(pe.start),Ne.rotation.set(0,0,0)):(Ne.position.set(-.5295,1.2155,6.056),Ne.rotation.set(0,0,0)),Ne.userData.actionProfile={animationRole:"hinged",pivot:{mode:"edge",localPosition:[-.5295000000000001,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!0,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1.0590000000000002,2.2910000000000004,.05],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"door-leaf-r",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"paint"}},(n["floor-deck"]??e).add(Ne),n["door-leaf-r"]=Ne;let ge=pe?new he(pe.endRadius,pe.baseRadius,pe.length,16,6):new Ie(1,1,1,4,4,4);pe||ge.scale(1.0590000000000002,2.2910000000000004,.05);let ve=new ne(ge,t.paint??new _e({color:8947848}));ve.name="Rear door leaf (right)",pe&&(ve.position.copy(pe.midpoint),ve.quaternion.copy(pe.quaternion)),ve.castShadow=i.castShadow??!0,ve.receiveShadow=i.receiveShadow??!0,Ne.add(ve),s["door-leaf-r"]=ve,o["door-leaf-r"]={type:"box",offset:[0,0,0],scale:[1.0590000000000002,2.2910000000000004,.05],isTrigger:!1,notes:"box proxy"},a["door-leaf-r"]??(a["door-leaf-r"]=[]),a["door-leaf-r"].push(Ne);let Ce=St({parentSocket:"door-leaf-l.surface",localStart:[.2965,0,.035],localEnd:[.2965,0,.035],contactType:"weld",embedDepth:0,overlap:.002,gapTolerance:.003}),me=new ce;me.name="Door locking bar 1__pivot",me.scale.set(1,1,1),Ce?(me.position.copy(Ce.start),me.rotation.set(0,0,0)):(me.position.set(.2965,0,.035),me.rotation.set(0,0,0)),me.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.034,2.1993600000000004,.034],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"lock-bar-1",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"frame-paint"}},(n["door-leaf-l"]??e).add(me),n["lock-bar-1"]=me;let et=Ce?new he(Ce.endRadius,Ce.baseRadius,Ce.length,16,6):new he(.5,.5,1,24,8);Ce||et.scale(.034,2.1993600000000004,.034);let Oe=new ne(et,t["frame-paint"]??new _e({color:8947848}));Oe.name="Door locking bar 1",Ce&&(Oe.position.copy(Ce.midpoint),Oe.quaternion.copy(Ce.quaternion)),Oe.castShadow=i.castShadow??!0,Oe.receiveShadow=i.receiveShadow??!0,me.add(Oe),s["lock-bar-1"]=Oe,o["lock-bar-1"]={type:"box",offset:[0,0,0],scale:[.034,2.1993600000000004,.034],isTrigger:!1,notes:"box proxy"},a["lock-bar-1"]??(a["lock-bar-1"]=[]),a["lock-bar-1"].push(me);let I=St({parentSocket:"door-leaf-l.surface",localStart:[-.2965,0,.035],localEnd:[-.2965,0,.035],contactType:"weld",embedDepth:0,overlap:.002,gapTolerance:.003}),le=new ce;le.name="Door locking bar 2__pivot",le.scale.set(1,1,1),I?(le.position.copy(I.start),le.rotation.set(0,0,0)):(le.position.set(-.2965,0,.035),le.rotation.set(0,0,0)),le.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.034,2.1993600000000004,.034],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"lock-bar-2",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"frame-paint"}},(n["door-leaf-l"]??e).add(le),n["lock-bar-2"]=le;let j=I?new he(I.endRadius,I.baseRadius,I.length,16,6):new he(.5,.5,1,24,8);I||j.scale(.034,2.1993600000000004,.034);let Q=new ne(j,t["frame-paint"]??new _e({color:8947848}));Q.name="Door locking bar 2",I&&(Q.position.copy(I.midpoint),Q.quaternion.copy(I.quaternion)),Q.castShadow=i.castShadow??!0,Q.receiveShadow=i.receiveShadow??!0,le.add(Q),s["lock-bar-2"]=Q,o["lock-bar-2"]={type:"box",offset:[0,0,0],scale:[.034,2.1993600000000004,.034],isTrigger:!1,notes:"box proxy"},a["lock-bar-2"]??(a["lock-bar-2"]=[]),a["lock-bar-2"].push(le);let ue=St({parentSocket:"door-leaf-r.surface",localStart:[.2965,0,.035],localEnd:[.2965,0,.035],contactType:"weld",embedDepth:0,overlap:.002,gapTolerance:.003}),Fe=new ce;Fe.name="Door locking bar 3__pivot",Fe.scale.set(1,1,1),ue?(Fe.position.copy(ue.start),Fe.rotation.set(0,0,0)):(Fe.position.set(.2965,0,.035),Fe.rotation.set(0,0,0)),Fe.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.034,2.1993600000000004,.034],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"lock-bar-3",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"frame-paint"}},(n["door-leaf-r"]??e).add(Fe),n["lock-bar-3"]=Fe;let vt=ue?new he(ue.endRadius,ue.baseRadius,ue.length,16,6):new he(.5,.5,1,24,8);ue||vt.scale(.034,2.1993600000000004,.034);let at=new ne(vt,t["frame-paint"]??new _e({color:8947848}));at.name="Door locking bar 3",ue&&(at.position.copy(ue.midpoint),at.quaternion.copy(ue.quaternion)),at.castShadow=i.castShadow??!0,at.receiveShadow=i.receiveShadow??!0,Fe.add(at),s["lock-bar-3"]=at,o["lock-bar-3"]={type:"box",offset:[0,0,0],scale:[.034,2.1993600000000004,.034],isTrigger:!1,notes:"box proxy"},a["lock-bar-3"]??(a["lock-bar-3"]=[]),a["lock-bar-3"].push(Fe);let Ke=St({parentSocket:"door-leaf-r.surface",localStart:[-.2965,0,.035],localEnd:[-.2965,0,.035],contactType:"weld",embedDepth:0,overlap:.002,gapTolerance:.003}),je=new ce;je.name="Door locking bar 4__pivot",je.scale.set(1,1,1),Ke?(je.position.copy(Ke.start),je.rotation.set(0,0,0)):(je.position.set(-.2965,0,.035),je.rotation.set(0,0,0)),je.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.034,2.1993600000000004,.034],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"lock-bar-4",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"frame-paint"}},(n["door-leaf-r"]??e).add(je),n["lock-bar-4"]=je;let yn=Ke?new he(Ke.endRadius,Ke.baseRadius,Ke.length,16,6):new he(.5,.5,1,24,8);Ke||yn.scale(.034,2.1993600000000004,.034);let At=new ne(yn,t["frame-paint"]??new _e({color:8947848}));At.name="Door locking bar 4",Ke&&(At.position.copy(Ke.midpoint),At.quaternion.copy(Ke.quaternion)),At.castShadow=i.castShadow??!0,At.receiveShadow=i.receiveShadow??!0,je.add(At),s["lock-bar-4"]=At,o["lock-bar-4"]={type:"box",offset:[0,0,0],scale:[.034,2.1993600000000004,.034],isTrigger:!1,notes:"box proxy"},a["lock-bar-4"]??(a["lock-bar-4"]=[]),a["lock-bar-4"].push(je);let nt=St(null),rt=new ce;rt.name="Corner casting 1__pivot",rt.scale.set(1,1,1),nt?(rt.position.copy(nt.start),rt.rotation.set(0,0,0)):(rt.position.set(1.138,-.021,6.007),rt.rotation.set(0,0,0)),rt.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.162,.118,.178],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"casting-1",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"casting"}},(n["floor-deck"]??e).add(rt),n["casting-1"]=rt;let xn=nt?new he(nt.endRadius,nt.baseRadius,nt.length,16,6):new Ie(1,1,1,4,4,4);nt||xn.scale(.162,.118,.178);let Ct=new ne(xn,t.casting??new _e({color:8947848}));Ct.name="Corner casting 1",nt&&(Ct.position.copy(nt.midpoint),Ct.quaternion.copy(nt.quaternion)),Ct.castShadow=i.castShadow??!0,Ct.receiveShadow=i.receiveShadow??!0,rt.add(Ct),s["casting-1"]=Ct,o["casting-1"]={type:"box",offset:[0,0,0],scale:[.162,.118,.178],isTrigger:!1,notes:"box proxy"},a["casting-1"]??(a["casting-1"]=[]),a["casting-1"].push(rt);let lt=St(null),ot=new ce;ot.name="Corner casting 2__pivot",ot.scale.set(1,1,1),lt?(ot.position.copy(lt.start),ot.rotation.set(0,0,0)):(ot.position.set(-1.138,-.021,6.007),ot.rotation.set(0,0,0)),ot.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.162,.118,.178],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"casting-2",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"casting"}},(n["floor-deck"]??e).add(ot),n["casting-2"]=ot;let cn=lt?new he(lt.endRadius,lt.baseRadius,lt.length,16,6):new Ie(1,1,1,4,4,4);lt||cn.scale(.162,.118,.178);let Pt=new ne(cn,t.casting??new _e({color:8947848}));Pt.name="Corner casting 2",lt&&(Pt.position.copy(lt.midpoint),Pt.quaternion.copy(lt.quaternion)),Pt.castShadow=i.castShadow??!0,Pt.receiveShadow=i.receiveShadow??!0,ot.add(Pt),s["casting-2"]=Pt,o["casting-2"]={type:"box",offset:[0,0,0],scale:[.162,.118,.178],isTrigger:!1,notes:"box proxy"},a["casting-2"]??(a["casting-2"]=[]),a["casting-2"].push(ot);let ut=St(null),ct=new ce;ct.name="Corner casting 3__pivot",ct.scale.set(1,1,1),ut?(ct.position.copy(ut.start),ct.rotation.set(0,0,0)):(ct.position.set(1.138,2.452,6.007),ct.rotation.set(0,0,0)),ct.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.162,.118,.178],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"casting-3",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"casting"}},(n["floor-deck"]??e).add(ct),n["casting-3"]=ct;let Tn=ut?new he(ut.endRadius,ut.baseRadius,ut.length,16,6):new Ie(1,1,1,4,4,4);ut||Tn.scale(.162,.118,.178);let Dt=new ne(Tn,t.casting??new _e({color:8947848}));Dt.name="Corner casting 3",ut&&(Dt.position.copy(ut.midpoint),Dt.quaternion.copy(ut.quaternion)),Dt.castShadow=i.castShadow??!0,Dt.receiveShadow=i.receiveShadow??!0,ct.add(Dt),s["casting-3"]=Dt,o["casting-3"]={type:"box",offset:[0,0,0],scale:[.162,.118,.178],isTrigger:!1,notes:"box proxy"},a["casting-3"]??(a["casting-3"]=[]),a["casting-3"].push(ct);let b=St(null),D=new ce;D.name="Corner casting 4__pivot",D.scale.set(1,1,1),b?(D.position.copy(b.start),D.rotation.set(0,0,0)):(D.position.set(-1.138,2.452,6.007),D.rotation.set(0,0,0)),D.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.162,.118,.178],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"casting-4",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"casting"}},(n["floor-deck"]??e).add(D),n["casting-4"]=D;let V=b?new he(b.endRadius,b.baseRadius,b.length,16,6):new Ie(1,1,1,4,4,4);b||V.scale(.162,.118,.178);let O=new ne(V,t.casting??new _e({color:8947848}));O.name="Corner casting 4",b&&(O.position.copy(b.midpoint),O.quaternion.copy(b.quaternion)),O.castShadow=i.castShadow??!0,O.receiveShadow=i.receiveShadow??!0,D.add(O),s["casting-4"]=O,o["casting-4"]={type:"box",offset:[0,0,0],scale:[.162,.118,.178],isTrigger:!1,notes:"box proxy"},a["casting-4"]??(a["casting-4"]=[]),a["casting-4"].push(D);let U=St(null),te=new ce;te.name="Corner casting 5__pivot",te.scale.set(1,1,1),U?(te.position.copy(U.start),te.rotation.set(0,0,0)):(te.position.set(1.138,-.021,-6.007),te.rotation.set(0,0,0)),te.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.162,.118,.178],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"casting-5",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"casting"}},(n["floor-deck"]??e).add(te),n["casting-5"]=te;let Pe=U?new he(U.endRadius,U.baseRadius,U.length,16,6):new Ie(1,1,1,4,4,4);U||Pe.scale(.162,.118,.178);let Ee=new ne(Pe,t.casting??new _e({color:8947848}));Ee.name="Corner casting 5",U&&(Ee.position.copy(U.midpoint),Ee.quaternion.copy(U.quaternion)),Ee.castShadow=i.castShadow??!0,Ee.receiveShadow=i.receiveShadow??!0,te.add(Ee),s["casting-5"]=Ee,o["casting-5"]={type:"box",offset:[0,0,0],scale:[.162,.118,.178],isTrigger:!1,notes:"box proxy"},a["casting-5"]??(a["casting-5"]=[]),a["casting-5"].push(te);let ye=St(null),Te=new ce;Te.name="Corner casting 6__pivot",Te.scale.set(1,1,1),ye?(Te.position.copy(ye.start),Te.rotation.set(0,0,0)):(Te.position.set(-1.138,-.021,-6.007),Te.rotation.set(0,0,0)),Te.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.162,.118,.178],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"casting-6",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"casting"}},(n["floor-deck"]??e).add(Te),n["casting-6"]=Te;let Xe=ye?new he(ye.endRadius,ye.baseRadius,ye.length,16,6):new Ie(1,1,1,4,4,4);ye||Xe.scale(.162,.118,.178);let Ae=new ne(Xe,t.casting??new _e({color:8947848}));Ae.name="Corner casting 6",ye&&(Ae.position.copy(ye.midpoint),Ae.quaternion.copy(ye.quaternion)),Ae.castShadow=i.castShadow??!0,Ae.receiveShadow=i.receiveShadow??!0,Te.add(Ae),s["casting-6"]=Ae,o["casting-6"]={type:"box",offset:[0,0,0],scale:[.162,.118,.178],isTrigger:!1,notes:"box proxy"},a["casting-6"]??(a["casting-6"]=[]),a["casting-6"].push(Te);let Ve=St(null),We=new ce;We.name="Corner casting 7__pivot",We.scale.set(1,1,1),Ve?(We.position.copy(Ve.start),We.rotation.set(0,0,0)):(We.position.set(1.138,2.452,-6.007),We.rotation.set(0,0,0)),We.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.162,.118,.178],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"casting-7",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"casting"}},(n["floor-deck"]??e).add(We),n["casting-7"]=We;let mt=Ve?new he(Ve.endRadius,Ve.baseRadius,Ve.length,16,6):new Ie(1,1,1,4,4,4);Ve||mt.scale(.162,.118,.178);let ht=new ne(mt,t.casting??new _e({color:8947848}));ht.name="Corner casting 7",Ve&&(ht.position.copy(Ve.midpoint),ht.quaternion.copy(Ve.quaternion)),ht.castShadow=i.castShadow??!0,ht.receiveShadow=i.receiveShadow??!0,We.add(ht),s["casting-7"]=ht,o["casting-7"]={type:"box",offset:[0,0,0],scale:[.162,.118,.178],isTrigger:!1,notes:"box proxy"},a["casting-7"]??(a["casting-7"]=[]),a["casting-7"].push(We);let Be=St(null),be=new ce;be.name="Corner casting 8__pivot",be.scale.set(1,1,1),Be?(be.position.copy(Be.start),be.rotation.set(0,0,0)):(be.position.set(-1.138,2.452,-6.007),be.rotation.set(0,0,0)),be.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.162,.118,.178],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"casting-8",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"casting"}},(n["floor-deck"]??e).add(be),n["casting-8"]=be;let It=Be?new he(Be.endRadius,Be.baseRadius,Be.length,16,6):new Ie(1,1,1,4,4,4);Be||It.scale(.162,.118,.178);let Ye=new ne(It,t.casting??new _e({color:8947848}));Ye.name="Corner casting 8",Be&&(Ye.position.copy(Be.midpoint),Ye.quaternion.copy(Be.quaternion)),Ye.castShadow=i.castShadow??!0,Ye.receiveShadow=i.receiveShadow??!0,be.add(Ye),s["casting-8"]=Ye,o["casting-8"]={type:"box",offset:[0,0,0],scale:[.162,.118,.178],isTrigger:!1,notes:"box proxy"},a["casting-8"]??(a["casting-8"]=[]),a["casting-8"].push(be);let Qe=St(null),tt=new ce;tt.name="CSC data plate__pivot",tt.scale.set(1,1,1),Qe?(tt.position.copy(Qe.start),tt.rotation.set(0,0,0)):(tt.position.set(1.223,.62,4.896),tt.rotation.set(0,0,0)),tt.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.006,.2,.32],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"data-plate-mesh",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"paint"}},(n["floor-deck"]??e).add(tt),n["data-plate-mesh"]=tt;let kt=Qe?new he(Qe.endRadius,Qe.baseRadius,Qe.length,16,6):new Ie(1,1,1,4,4,4);Qe||kt.scale(.006,.2,.32);let Tt=new ne(kt,t.paint??new _e({color:8947848}));return Tt.name="CSC data plate",Qe&&(Tt.position.copy(Qe.midpoint),Tt.quaternion.copy(Qe.quaternion)),Tt.castShadow=i.castShadow??!0,Tt.receiveShadow=i.receiveShadow??!0,tt.add(Tt),s["data-plate-mesh"]=Tt,o["data-plate-mesh"]={type:"box",offset:[0,0,0],scale:[.006,.2,.32],isTrigger:!1,notes:"box proxy"},a["data-plate-mesh"]??(a["data-plate-mesh"]=[]),a["data-plate-mesh"].push(tt),e.userData.sculptRuntime={nodes:n,meshes:s,sockets:r,colliders:o,destructionGroups:a},e.userData.lookDevTargets={},e.userData.actionReadiness={note:"Use root.userData.sculptRuntime.nodes for transforms, sockets for attachments, colliders for physics proxies, and destructionGroups for breakable sets."},e}function Zg(i="neutral"){let e=new ce;e.name="ISO 40ft dry container look-dev lights";let t=new oi(i==="reference"?16773334:15922431,3554114,i==="grazing"?.28:i==="reference"?.72:.6);e.add(t);let n=new ln(i==="reference"?16764810:16774376,i==="grazing"?4.2:i==="reference"?2.6:1.7);i==="grazing"?n.position.set(7.5,1.1,4):i==="reference"?n.position.set(-4.5,7.5,5):n.position.set(-9,13,11),n.castShadow=!0,n.shadow.mapSize.set(4096,4096),n.shadow.bias=-25e-5,n.shadow.normalBias=.018,n.shadow.radius=7,n.shadow.blurSamples=24,n.shadow.camera.near=.5,n.shadow.camera.far=60,n.shadow.camera.left=-9,n.shadow.camera.right=9,n.shadow.camera.top=9,n.shadow.camera.bottom=-9,n.shadow.camera.updateProjectionMatrix(),e.add(n);let s=new ln(11060479,i==="grazing"?.12:.42);s.position.set(4,3,3.5),e.add(s);let r=new ln(16773572,i==="grazing"?.28:.85);r.position.set(.5,4.5,-6),e.add(r);let o=new ne(new gn(40,40),new si({opacity:.25}));return o.rotation.x=-Math.PI/2,o.position.y=-.001,o.receiveShadow=!0,o.name="contact-shadow",e.add(o),e.userData.reviewMode=i,e.userData.lightingFromPhoto=["key: directional sun from upper-left-front, intensity 2.4, warm white #FFF4E6, casts soft shadow","fill: hemisphere sky #DCE6F2 / ground #6E6A60, intensity 0.9","rim: directional from behind-right, intensity 0.6, cool #CFE0FF to separate the box from the page ground","exposure 1.0 with ACES filmic tone mapping, sRGB output","contact shadow: soft ground shadow plane under the box (shadow-only material, opacity 0.25)"],e.userData.lookDevTargets={},e}function Jg(i){let e=new Pn(i),t=e.fromScene(new ci,.04).texture;return e.dispose(),t}function $g(i,e,t={}){let n=new Zt().setFromObject(e);if(n.isEmpty())return;let s=n.getSize(new N),r=n.getCenter(new N),o=t.margin??1.15,a=Math.max(s.x,s.y,s.z)*o,l=i.fov*Math.PI/180,c=a/2/Math.tan(l/2),h=(t.azimuthDeg??0)*Math.PI/180,u=(t.elevationDeg??0)*Math.PI/180,d=new N(Math.sin(h)*Math.cos(u),Math.sin(u),Math.cos(h)*Math.cos(u));i.position.copy(r).addScaledVector(d,c),i.near=Math.max(.01,c-a),i.far=c+a*2,i.lookAt(r),i.updateProjectionMatrix()}function Kg(i){i.toneMapping=Ti,i.outputColorSpace=Rt}var Dl={};aa(Dl,{configureISO40ftHighCubeDryContainerRenderer:()=>g_,createISO40ftHighCubeDryContainerEnvironment:()=>p_,createISO40ftHighCubeDryContainerLookDevLights:()=>f_,createISO40ftHighCubeDryContainerModel:()=>d_,frameISO40ftHighCubeDryContainerCamera:()=>m_});function jg(i,e){let t=new qn;if(i.length>0){t.moveTo(i[0][0],i[0][1]);for(let n=1;n<i.length;n+=1)t.lineTo(i[n][0],i[n][1])}for(let n of e??[]){if(n.length<3)continue;let s=new Dn;s.moveTo(n[0][0],n[0][1]);for(let r=1;r<n.length;r+=1)s.lineTo(n[r][0],n[r][1]);s.closePath(),t.holes.push(s)}return t}function Qg(i,e,t,n,s=24){let r=[];for(let o=0;o<s;o+=1){let a=o/s*Math.PI*2;r.push([i+Math.cos(a)*t,e+Math.sin(a)*n])}return r}function Eh(i){let e=[...i.holes??[],...(i.ovalHoles??[]).map(n=>Qg(n.cx,n.cy,n.rx,n.ry))],t=jg(i.points,e);return new ii(t,{depth:i.depth,bevelEnabled:!1,steps:1})}function e_(i){let e=2166136261;for(let t=0;t<i.length;t+=1)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function yt(i,e,t){if(typeof i=="number")return i;if(i&&typeof i=="object"){let n=i;for(let s of e)if(typeof n[s]=="number")return n[s]}return t}function t_(i){let e=/^#[0-9a-f]{3}$/i.test(i)?"#"+i.slice(1).split("").map(n=>n+n).join(""):i,t=/^#[0-9a-f]{6}$/i.test(e)?Number.parseInt(e.slice(1),16):9075295;return[cs(t>>16&255),cs(t>>8&255),cs(t&255)]}function n_(i){let e=i.colorVariation?.palette;if(Array.isArray(e)&&e.length>0)return e.filter(s=>typeof s=="string");let t=i.albedo?.secondary;return[i.baseColor??i.color??i.albedo?.dominant,...Array.isArray(t)?t:[]].filter(s=>typeof s=="string"&&s.startsWith("#"))}function zt(i){return Math.max(0,Math.min(1,i))}function cs(i){return Math.max(30,Math.min(240,Math.round(i)))}function i_(i){return Math.max(.02,Math.min(1,i))}function Sh(i){return Math.max(1,Math.min(2.5,i))}function s_(i){return i>=.5?1:0}function r_(i){let e=typeof i.baseColor=="string"?i.baseColor:"#8A7A5F";return new qe().setStyle(e,Rt)}function wh(i){return i*i*(3-2*i)}function na(i,e,t,n,s){let r=(i%n+n)%n,o=(e%s+s)%s,a=Math.imul(r+t*17,374761393)^Math.imul(o+t*31,668265263);return a=Math.imul(a^a>>>13,1274126177),((a^a>>>16)>>>0)/4294967295}function a_(i,e,t,n,s){let r=i*n,o=e*s,a=Math.floor(r),l=Math.floor(o),c=wh(r-a),h=wh(o-l),u=na(a,l,t,n,s),d=na(a+1,l,t,n,s),f=na(a,l+1,t,n,s),_=na(a+1,l+1,t,n,s);return pt.lerp(pt.lerp(u,d,c),pt.lerp(f,_,c),h)}function o_(i){let t=(Array.isArray(i.surfaceFrequencyBands)?i.surfaceFrequencyBands:[]).flatMap(n=>{if(!n||typeof n!="object")return[];let s=n,r=typeof s.frequency=="number"?s.frequency:0,o=typeof s.amplitude=="number"?s.amplitude:0;if(r<=0||o<=0)return[];let a=Array.isArray(s.stretch)?s.stretch:[1,1],l=`${String(s.pattern??"")} ${String(s.role??"")}`.toLowerCase();return[{frequency:r,amplitude:o,stretchX:typeof a[0]=="number"?Math.max(.1,a[0]):1,stretchY:typeof a[1]=="number"?Math.max(.1,a[1]):1,ridge:/(ridge|groove|grain|fiber|striated|crack)/.test(l)}]});return t.length>0?t:[{frequency:2,amplitude:.42,stretchX:1,stretchY:1,ridge:!1},{frequency:12,amplitude:.22,stretchX:1,stretchY:1,ridge:!1},{frequency:56,amplitude:.08,stretchX:1,stretchY:1,ridge:!1}]}function Pl(i,e,t,n){let s=0,r=0;for(let o=0;o<t.length;o+=1){let a=t[o],l=Math.max(1,Math.round(a.frequency*a.stretchX)),c=Math.max(1,Math.round(a.frequency*a.stretchY)),h=a_(i,e,n+o*1013,l,c);a.ridge&&(h=1-Math.abs(h*2-1)),s+=h*a.amplitude,r+=a.amplitude}return r>0?zt(s/r):.5}function l_(i,e){if(i.length===1)return i[0];let t=zt(e)*(i.length-1),n=Math.min(i.length-2,Math.floor(t)),s=t-n,r=i[n],o=i[n+1];return[Math.round(pt.lerp(r[0],o[0],s)),Math.round(pt.lerp(r[1],o[1],s)),Math.round(pt.lerp(r[2],o[2],s))]}function Th(i){let e=/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/.exec(i);return e?[cs(Number(e[1])),cs(Number(e[2])),cs(Number(e[3]))]:[138,122,95]}function c_(i,e,t){let n=i.stops.length>=2?i.stops:[{offset:0,color:"rgba(138,122,95,1)"},{offset:1,color:"rgba(138,122,95,1)"}],s;if(i.type==="radial"){let[h,u]=i.axis,d=e-h,f=t-u,_=Math.max(.001,Math.hypot(Math.max(h,1-h),Math.max(u,1-u)));s=zt(Math.hypot(d,f)/_)}else{let[h,u]=i.axis,d=(e-.5)*h+(t-.5)*u,f=.5*(Math.abs(h)+Math.abs(u))||.5;s=zt(d/f+.5)}let r=s*(n.length-1),o=Math.min(n.length-2,Math.max(0,Math.floor(r))),a=r-o,l=Th(n[o].color),c=Th(n[o+1].color);return[pt.lerp(l[0],c[0],a),pt.lerp(l[1],c[1],a),pt.lerp(l[2],c[2],a)]}function Xs(i,e,t,n,s){i[e]=Math.max(0,Math.min(255,Math.round(t))),i[e+1]=Math.max(0,Math.min(255,Math.round(n))),i[e+2]=Math.max(0,Math.min(255,Math.round(s))),i[e+3]=255}function Ys(i){let e=document.createElement("canvas");return e.width=i,e.height=i,e}function Zs(i,e,t,n){let s=new In(i),r=t.textureProjection&&typeof t.textureProjection=="object"?t.textureProjection:{},o=Array.isArray(r.repeat)?r.repeat:[2,2];return s.colorSpace=e,s.wrapS=Yt,s.wrapT=Yt,s.repeat.set(typeof o[0]=="number"?o[0]:2,typeof o[1]=="number"?o[1]:2),s.anisotropy=Math.max(1,Math.round(n.textureAnisotropy??r.anisotropy??8)),s.needsUpdate=!0,s}function Js(i,e){let t=i.referencePbr;if(!t||typeof t!="object"||t.usable===!1)return null;let n=typeof t.confidence=="number"?t.confidence:typeof t.estimatedFidelity=="number"?t.estimatedFidelity:0,s=typeof t.targetThreshold=="number"?t.targetThreshold:.7;if(n<s)return null;let r=t.maps;if(!r||typeof r!="object")return null;let o=r[e];if(!o||typeof o!="object")return null;let a=o,l=typeof a.url=="string"&&a.url.trim()?a.url:a.path;return typeof l=="string"&&l.trim()?l:null}function $s(i,e,t,n){let s=new ai().load(i),r=t.textureProjection&&typeof t.textureProjection=="object"?t.textureProjection:{},o=Array.isArray(r.repeat)?r.repeat:[1,1];return s.colorSpace=e,s.wrapS=Yt,s.wrapT=Yt,s.repeat.set(typeof o[0]=="number"?o[0]:1,typeof o[1]=="number"?o[1]:1),s.anisotropy=Math.max(1,Math.round(n.textureAnisotropy??r.anisotropy??8)),s.needsUpdate=!0,s}function h_(i,e){let t=Js(i,"albedo"),n=Js(i,"roughness"),s=Js(i,"height"),r=Js(i,"normal"),o=Js(i,"ao");return!t||!n||!s||!r||!o?null:{albedo:$s(t,Rt,i,e),roughness:$s(n,dt,i,e),height:$s(s,dt,i,e),normal:$s(r,dt,i,e),ao:$s(o,dt,i,e),source:"reference-pixel-extraction"}}function u_(i,e,t){if(typeof document>"u")return null;let n=(t.qualityPriority??"reference-fidelity")==="reference-fidelity",s=t.textureSize??e.textureResolution,r=typeof s=="number"&&Number.isFinite(s)?s:n?1024:512,o=Math.max(256,Math.min(2048,2**Math.round(Math.log2(r)))),a={albedo:Ys(o),roughness:Ys(o),height:Ys(o),normal:Ys(o),ao:Ys(o)},l={albedo:a.albedo.getContext("2d"),roughness:a.roughness.getContext("2d"),height:a.height.getContext("2d"),normal:a.normal.getContext("2d"),ao:a.ao.getContext("2d")};if(!l.albedo||!l.roughness||!l.height||!l.normal||!l.ao)return null;let c={albedo:l.albedo.createImageData(o,o),roughness:l.roughness.createImageData(o,o),height:l.height.createImageData(o,o),normal:l.normal.createImageData(o,o),ao:l.ao.createImageData(o,o)},h=e_(i),u=o_(e),d=new Float32Array(o*o),f=new Float32Array(o*o),_=n_(e),v=typeof e.baseColor=="string"?e.baseColor:"#8A7A5F",p=(_.length>=2?_:[v,"#6E614B","#A08F70"]).map(t_),m=zt(yt(e.roughness,["base"],.76)),T=zt(yt(e.roughness,["variation"],.18)),M=zt(yt(e.colorVariation,["amplitude","variation"],.18)),E=zt(yt(e.colorVariation,["heightCorrelation"],.3)),C=e.colorGradient;for(let A=0;A<o;A+=1){let z=A/o;for(let g=0;g<o;g+=1){let x=g/o,k=A*o+g,F=Pl(x,z,u,h+101),H=Pl(x,z,u,h+7001),X=Pl(x,z,u,h+15013);d[k]=F,f[k]=zt(m+(H-.5)*T*2);let L;if(C)L=c_(C,x,z);else{let Y=zt(.5+(X-.5)*M*2+(F-.5)*E);L=l_(p,Y)}Xs(c.albedo.data,k*4,L[0],L[1],L[2])}}let P=Math.max(.05,yt(e.normal,["strength","amplitude"],.35)),R=zt(yt(e.ambientOcclusion,["cavityStrength","strength"],.35));for(let A=0;A<o;A+=1){let z=(A-1+o)%o*o,g=(A+1)%o*o;for(let x=0;x<o;x+=1){let k=(x-1+o)%o,F=(x+1)%o,H=A*o+x,X=d[H],L=(d[A*o+F]-d[A*o+k])*P*6,Y=(d[g+x]-d[z+x])*P*6,q=1/Math.sqrt(L*L+Y*Y+1),de=-L*q,ae=-Y*q,re=q,Je=(d[A*o+k]+d[A*o+F]+d[z+x]+d[g+x])*.25,ze=Math.max(0,Je-X),G=zt(1-R*(ze*12+(1-X)*.16)),Z=H*4,Se=X*255,se=f[H]*255;Xs(c.height.data,Z,Se,Se,Se),Xs(c.roughness.data,Z,se,se,se),Xs(c.normal.data,Z,(de*.5+.5)*255,(ae*.5+.5)*255,(re*.5+.5)*255),Xs(c.ao.data,Z,G*255,G*255,G*255)}}return l.albedo.putImageData(c.albedo,0,0),l.roughness.putImageData(c.roughness,0,0),l.height.putImageData(c.height,0,0),l.normal.putImageData(c.normal,0,0),l.ao.putImageData(c.ao,0,0),{albedo:Zs(a.albedo,Rt,e,t),roughness:Zs(a.roughness,dt,e,t),height:Zs(a.height,dt,e,t),normal:Zs(a.normal,dt,e,t),ao:Zs(a.ao,dt,e,t),source:"procedural"}}function Il(i,e,t,n=!1){let r=e.textureless?.declared===!0?null:h_(e,t)??u_(i,e,t),o=new ri({color:r?16777215:r_(e),roughness:r?1:zt(yt(e.roughness,["base"],.76)),metalness:s_(yt(e.metalness,["base"],0)),clearcoat:zt(yt(e.clearcoat,["base","amount"],0)),clearcoatRoughness:zt(yt(e.clearcoatRoughness,["base"],.25)),transmission:zt(yt(e.transmission,["base","amount"],0)),ior:Sh(yt(e.ior,["base","value"],1.5)),thickness:Math.max(0,yt(e.thickness,["base","amount"],0)),attenuationDistance:Math.max(.001,yt(e.attenuationDistance,["base","value"],1/0)),attenuationColor:new qe(typeof e.attenuationColor=="string"?e.attenuationColor:"#ffffff"),sheen:zt(yt(e.sheen,["base","amount"],0)),sheenColor:new qe(typeof e.sheenColor=="string"?e.sheenColor:"#ffffff"),sheenRoughness:zt(yt(e.sheenRoughness,["base"],1)),iridescence:zt(yt(e.iridescence,["base","amount"],0)),iridescenceIOR:Sh(yt(e.iridescenceIOR,["base","value"],1.3)),anisotropy:zt(yt(e.anisotropy,["base","amount"],0)),anisotropyRotation:yt(e.anisotropy,["rotation"],0),specularIntensity:i_(yt(e.specularF0??e.f0??e.specularIntensity,["base","value"],1)),specularColor:new qe(typeof e.specularColor=="string"?e.specularColor:"#ffffff"),emissive:new qe(typeof e.emissive=="string"?e.emissive:"#000000"),emissiveIntensity:Math.max(0,yt(e.emissiveIntensity,["base"],1)),opacity:zt(yt(e.opacity,["base"],1)),transparent:yt(e.transmission,["base","amount"],0)>0||yt(e.opacity,["base"],1)<1,alphaTest:Math.max(0,yt(e.alpha,["cutoff","alphaTest"],0)),wireframe:t.wireframe??!1,side:e.doubleSided===!0?tn:rn,flatShading:e.flatShading===!0});if(r){o.map=r.albedo,o.roughnessMap=r.roughness,o.normalMap=r.normal,o.normalScale.setScalar(Math.max(.05,yt(e.normal,["strength","amplitude"],.35))),o.aoMap=r.ao,o.aoMap.channel=0,o.aoMapIntensity=yt(e.ambientOcclusion,["cavityStrength","strength"],.35);let a=n||e.denseMesh===!0||e.geometryDensity==="dense"||e.topologyClass==="dense",l=Math.max(0,yt(e.bump,["amplitude","strength"],0)),c=a?Math.max(.05,l):l;c>0&&(o.bumpMap=r.height,o.bumpScale=c);let h=Math.max(0,yt(e.displacement,["amplitude","strength"],0)),u=a?Math.max(.005,h):h;u>0&&(o.displacementMap=r.height,o.displacementScale=u,o.displacementBias=-u*.5)}return o.envMapIntensity=yt(e,["envMapIntensity"],.8),o.userData.sculptMaterial=e,o.userData.proceduralMapsIndependent=!0,o.userData.pbrConstraints={albedoRange:[30,240],binaryMetalness:!0,f0Range:[.02,1],iorRange:[1,2.5]},o.userData.pbrTextureSource=r?.source??"flat-fallback",o.userData.referencePbr=e.referencePbr??null,o.userData.referenceMaterialId=e.referenceMaterialId??e.materialReference?.profileId??null,o.userData.materialEvidence=e.materialEvidence??null,o.userData.validationViews=e.materialReference?.validationViews??[],o.needsUpdate=!0,o}function Rh(i,e){return Array.isArray(i)&&i.length===3&&i.every(t=>typeof t=="number")?new N(i[0],i[1],i[2]):new N(e[0],e[1],e[2])}function Ah(i,e){return typeof i=="number"&&Number.isFinite(i)?i:e}function wt(i){if(!i||typeof i!="object")return null;let e=i,t=Rh(e.localStart,[0,0,0]),s=Rh(e.localEnd,[0,1,0]).clone().sub(t),r=s.length();if(r<=1e-4)return null;let o=s.clone().normalize(),a=new on().setFromUnitVectors(new N(0,1,0),o),l=Math.max(.005,Ah(e.baseRadius,.06)),c=Math.max(.003,Ah(e.endRadius,l*.55));return{start:t,midpoint:s.multiplyScalar(.5),quaternion:a,length:r,baseRadius:l,endRadius:c}}function d_(i={}){let e=new ce;e.name="ISO 40ft high cube dry container",e.userData.reconstructionEvidence={itemFamily:null,subtype:null,componentAdapter:null,route:null,exactnessTier:null,referenceCamera:{solved:!1,fovDegrees:40,aspect:1,orientation:{yaw:0,pitch:0,roll:0},positionHint:[0,0,3],note:"For likeness work, solve the reference camera (forge/stage1_intake/solve_camera_pose.py) so the review render aligns with the photo and the reference can be projected. Confirm by overlay review."},approximationNotes:[]},e.userData.materialPipeline={},e.userData.materialReferenceRegistry=null;let t={};t.paint=Il("paint",{id:"paint",name:"Oxide-red marine paint on corten steel",type:"standard",shaderModel:"MeshStandardMaterial / PBR approximation",baseColor:"#8E3B30",color:"#8E3B30",albedo:{dominant:"#8E3B30",secondary:["#8E3B30"],samplingNotes:"Base albedo with lighting removed; ridge/valley tone comes from corrugation geometry, not paint."},colorVariation:{palette:["#8E3B30"],pattern:"uniform satin paint",amplitude:.04,heightCorrelation:0},roughness:{base:.5,variation:.05,map:"independent-procedural-field",localResponse:"slightly lower on rails polished by twistlocks"},metalness:{base:0,variation:0},ambientOcclusion:{mode:"geometry-and-lighting",strength:.6,notes:"valley darkening from corrugation geometry and contact shadow under rails"},localOverrides:[{id:"data-plate",region:"left wall, near door end, 0.5 m above bottom rail",albedo:"#C9A79F",roughness:.5,notes:"CSC safety approval plate (light painted aluminium)"},{id:"size-type-code",region:"both side walls, upper corner at the door end",albedo:"#F4F5F4",roughness:.55,notes:"ISO 6346 size-type code (22G1 / 42G1 / 45G1) with underline; rendered by the site runtime as a canvas decal because the factory emits no text"}],materialClass:"metal",finishClass:"painted-metal",texturePalette:["#7A342B","#75332A","#99574F","#6F3128","#86392F"],clearcoat:{base:1,variation:0},clearcoatRoughness:{base:.05,variation:0},transmission:{base:0,variation:0},ior:{base:1.5,value:1.5},envMapIntensity:1,textureless:{declared:!0,evidence:["extract_pbr_evidence on crop-paint.png: confidence 0.751 (pass); palette ['#78352C', '#6D2F26', '#853C32', '#98544A', '#8F473D']","material-pass render: reference crop used as albedo map tiled the drawing's painted rib highlights over the modelled ribs (double stripes, horizontal banding) \u2014 the reference's tone variation is lighting on corrugation geometry, not paint","ISO dry containers are finished in a single uniform marine paint coat; identity is silhouette, rib relief and frame/casting colour regions"],pbrEvidenceFile:"pbr-paint.json"}},i),t["frame-paint"]=Il("frame-paint",{id:"frame-paint",name:"Frame members, darker red",type:"standard",shaderModel:"MeshStandardMaterial / PBR approximation",baseColor:"#7D342A",color:"#7D342A",albedo:{dominant:"#7D342A",secondary:["#7D342A"],samplingNotes:"Base albedo with lighting removed; ridge/valley tone comes from corrugation geometry, not paint."},colorVariation:{palette:["#7D342A"],pattern:"uniform satin paint",amplitude:.04,heightCorrelation:0},roughness:{base:.5,variation:.05,map:"independent-procedural-field",localResponse:"slightly lower on rails polished by twistlocks"},metalness:{base:0,variation:0},ambientOcclusion:{mode:"geometry-and-lighting",strength:.6,notes:"valley darkening from corrugation geometry and contact shadow under rails"},localOverrides:[{id:"rail-wear",region:"top rail upper face",albedo:"#9C5349",roughness:.5,notes:"lighter worn top face"}],materialClass:"metal",finishClass:"painted-metal",texturePalette:["#7E3A30","#6B2F26","#7D342A","#7D342A","#7D342A"],clearcoat:{base:1,variation:0},clearcoatRoughness:{base:.05,variation:0},transmission:{base:0,variation:0},ior:{base:1.5,value:1.5},envMapIntensity:1,textureless:{declared:!0,evidence:["extract_pbr_evidence on crop-frame-paint.png: confidence 0.729 (pass); palette ['#7D342A', '#8E4E46', '#6C2F27', '#7A382F']","material-pass render: reference crop used as albedo map tiled the drawing's painted rib highlights over the modelled ribs (double stripes, horizontal banding) \u2014 the reference's tone variation is lighting on corrugation geometry, not paint","ISO dry containers are finished in a single uniform marine paint coat; identity is silhouette, rib relief and frame/casting colour regions"],pbrEvidenceFile:"pbr-frame-paint.json"}},i),t.casting=Il("casting",{id:"casting",name:"Cast steel corner fittings",type:"standard",shaderModel:"MeshStandardMaterial / PBR approximation",baseColor:"#58251E",color:"#58251E",albedo:{dominant:"#58251E",secondary:["#58251E"],samplingNotes:"Base albedo with lighting removed; ridge/valley tone comes from corrugation geometry, not paint."},colorVariation:{palette:["#58251E"],pattern:"uniform satin paint",amplitude:.04,heightCorrelation:0},roughness:{base:.5,variation:.05,map:"independent-procedural-field",localResponse:"slightly lower on rails polished by twistlocks"},metalness:{base:0,variation:0},ambientOcclusion:{mode:"geometry-and-lighting",strength:.6,notes:"valley darkening from corrugation geometry and contact shadow under rails"},localOverrides:[{id:"aperture",region:"outer faces of castings",albedo:"#101114",roughness:.8,notes:"dark oval apertures"}],materialClass:"metal",finishClass:"painted-metal",texturePalette:["#78433C","#59261F","#50231E","#59251E","#662C25"],clearcoat:{base:1,variation:0},clearcoatRoughness:{base:.05,variation:0},transmission:{base:0,variation:0},ior:{base:1.5,value:1.5},envMapIntensity:1,textureless:{declared:!0,evidence:["extract_pbr_evidence on crop-casting.png: confidence 0.778 (pass); palette ['#58251E', '#7F3D34', '#652A23', '#121114']","material-pass render: reference crop used as albedo map tiled the drawing's painted rib highlights over the modelled ribs (double stripes, horizontal banding) \u2014 the reference's tone variation is lighting on corrugation geometry, not paint","ISO dry containers are finished in a single uniform marine paint coat; identity is silhouette, rib relief and frame/casting colour regions"],pbrEvidenceFile:"pbr-casting.json"}},i);let n={root:e},s={},r={},o={},a={},l=wt(null),c=new ce;c.name="Floor and bottom cross-member deck__pivot",c.scale.set(1,1,1),l?(c.position.copy(l.start),c.rotation.set(0,0,0)):(c.position.set(0,.08,0),c.rotation.set(0,0,0)),c.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[2.398,.16,12.172],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"floor-deck",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"frame-paint"}},(n.root??e).add(c),n["floor-deck"]=c;let h=l?new he(l.endRadius,l.baseRadius,l.length,16,6):new Ie(1,1,1,4,4,4);l||h.scale(2.398,.16,12.172);let u=new ne(h,t["frame-paint"]??new _e({color:8947848}));u.name="Floor and bottom cross-member deck",l&&(u.position.copy(l.midpoint),u.quaternion.copy(l.quaternion)),u.castShadow=i.castShadow??!0,u.receiveShadow=i.receiveShadow??!0,c.add(u),s["floor-deck"]=u,o["floor-deck"]={type:"box",offset:[0,0,0],scale:[2.398,.16,12.172],isTrigger:!1,notes:"box proxy"},a["floor-deck"]??(a["floor-deck"]=[]),a["floor-deck"].push(c);let d=wt(null),f=new ce;f.name="Left corrugated side wall__pivot",f.scale.set(1,1,1),d?(f.position.copy(d.start),f.rotation.set(-1.5707963267948966,0,-1.5707963267948966)):(f.position.set(1.183,.07,0),f.rotation.set(-1.5707963267948966,0,-1.5707963267948966)),f.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.036,2.596,11.872],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"side-wall-l",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"paint"}},(n["floor-deck"]??e).add(f),n["side-wall-l"]=f;let _=d?new he(d.endRadius,d.baseRadius,d.length,16,6):Eh({points:[[-5.936,0],[-5.8946,.036],[-5.798,.036],[-5.7565,0],[-5.6599,0],[-5.6185,.036],[-5.5219,.036],[-5.4804,0],[-5.3838,0],[-5.3424,.036],[-5.2458,.036],[-5.2044,0],[-5.1077,0],[-5.0663,.036],[-4.9697,.036],[-4.9283,0],[-4.8316,0],[-4.7902,.036],[-4.6936,.036],[-4.6522,0],[-4.5555,0],[-4.5141,.036],[-4.4175,.036],[-4.3761,0],[-4.2794,0],[-4.238,.036],[-4.1414,.036],[-4.1,0],[-4.0033,0],[-3.9619,.036],[-3.8653,.036],[-3.8239,0],[-3.7273,0],[-3.6858,.036],[-3.5892,.036],[-3.5478,0],[-3.4512,0],[-3.4097,.036],[-3.3131,.036],[-3.2717,0],[-3.1751,0],[-3.1337,.036],[-3.037,.036],[-2.9956,0],[-2.899,0],[-2.8576,.036],[-2.7609,.036],[-2.7195,0],[-2.6229,0],[-2.5815,.036],[-2.4848,.036],[-2.4434,0],[-2.3468,0],[-2.3054,.036],[-2.2087,.036],[-2.1673,0],[-2.0707,0],[-2.0293,.036],[-1.9327,.036],[-1.8912,0],[-1.7946,0],[-1.7532,.036],[-1.6566,.036],[-1.6151,0],[-1.5185,0],[-1.4771,.036],[-1.3805,.036],[-1.3391,0],[-1.2424,0],[-1.201,.036],[-1.1044,.036],[-1.063,0],[-.9663,0],[-.9249,.036],[-.8283,.036],[-.7869,0],[-.6902,0],[-.6488,.036],[-.5522,.036],[-.5108,0],[-.4141,0],[-.3727,.036],[-.2761,.036],[-.2347,0],[-.138,0],[-.0966,.036],[0,.036],[.0414,0],[.138,0],[.1795,.036],[.2761,.036],[.3175,0],[.4141,0],[.4556,.036],[.5522,.036],[.5936,0],[.6902,0],[.7316,.036],[.8283,.036],[.8697,0],[.9663,0],[1.0077,.036],[1.1044,.036],[1.1458,0],[1.2424,0],[1.2838,.036],[1.3805,.036],[1.4219,0],[1.5185,0],[1.5599,.036],[1.6566,.036],[1.698,0],[1.7946,0],[1.836,.036],[1.9327,.036],[1.9741,0],[2.0707,0],[2.1121,.036],[2.2087,.036],[2.2502,0],[2.3468,0],[2.3882,.036],[2.4848,.036],[2.5263,0],[2.6229,0],[2.6643,.036],[2.7609,.036],[2.8023,0],[2.899,0],[2.9404,.036],[3.037,.036],[3.0784,0],[3.1751,0],[3.2165,.036],[3.3131,.036],[3.3545,0],[3.4512,0],[3.4926,.036],[3.5892,.036],[3.6306,0],[3.7273,0],[3.7687,.036],[3.8653,.036],[3.9067,0],[4.0033,0],[4.0448,.036],[4.1414,.036],[4.1828,0],[4.2794,0],[4.3209,.036],[4.4175,.036],[4.4589,0],[4.5555,0],[4.5969,.036],[4.6936,.036],[4.735,0],[4.8316,0],[4.873,.036],[4.9697,.036],[5.0111,0],[5.1077,0],[5.1491,.036],[5.2458,.036],[5.2872,0],[5.3838,0],[5.4252,.036],[5.5219,.036],[5.5633,0],[5.6599,0],[5.7013,.036],[5.798,.036],[5.8394,0],[5.936,0],[5.936,-.02],[5.8394,-.02],[5.798,.016],[5.7013,.016],[5.6599,-.02],[5.5633,-.02],[5.5219,.016],[5.4252,.016],[5.3838,-.02],[5.2872,-.02],[5.2458,.016],[5.1491,.016],[5.1077,-.02],[5.0111,-.02],[4.9697,.016],[4.873,.016],[4.8316,-.02],[4.735,-.02],[4.6936,.016],[4.5969,.016],[4.5555,-.02],[4.4589,-.02],[4.4175,.016],[4.3209,.016],[4.2794,-.02],[4.1828,-.02],[4.1414,.016],[4.0448,.016],[4.0033,-.02],[3.9067,-.02],[3.8653,.016],[3.7687,.016],[3.7273,-.02],[3.6306,-.02],[3.5892,.016],[3.4926,.016],[3.4512,-.02],[3.3545,-.02],[3.3131,.016],[3.2165,.016],[3.1751,-.02],[3.0784,-.02],[3.037,.016],[2.9404,.016],[2.899,-.02],[2.8023,-.02],[2.7609,.016],[2.6643,.016],[2.6229,-.02],[2.5263,-.02],[2.4848,.016],[2.3882,.016],[2.3468,-.02],[2.2502,-.02],[2.2087,.016],[2.1121,.016],[2.0707,-.02],[1.9741,-.02],[1.9327,.016],[1.836,.016],[1.7946,-.02],[1.698,-.02],[1.6566,.016],[1.5599,.016],[1.5185,-.02],[1.4219,-.02],[1.3805,.016],[1.2838,.016],[1.2424,-.02],[1.1458,-.02],[1.1044,.016],[1.0077,.016],[.9663,-.02],[.8697,-.02],[.8283,.016],[.7316,.016],[.6902,-.02],[.5936,-.02],[.5522,.016],[.4556,.016],[.4141,-.02],[.3175,-.02],[.2761,.016],[.1795,.016],[.138,-.02],[.0414,-.02],[0,.016],[-.0966,.016],[-.138,-.02],[-.2347,-.02],[-.2761,.016],[-.3727,.016],[-.4141,-.02],[-.5108,-.02],[-.5522,.016],[-.6488,.016],[-.6902,-.02],[-.7869,-.02],[-.8283,.016],[-.9249,.016],[-.9663,-.02],[-1.063,-.02],[-1.1044,.016],[-1.201,.016],[-1.2424,-.02],[-1.3391,-.02],[-1.3805,.016],[-1.4771,.016],[-1.5185,-.02],[-1.6151,-.02],[-1.6566,.016],[-1.7532,.016],[-1.7946,-.02],[-1.8912,-.02],[-1.9327,.016],[-2.0293,.016],[-2.0707,-.02],[-2.1673,-.02],[-2.2087,.016],[-2.3054,.016],[-2.3468,-.02],[-2.4434,-.02],[-2.4848,.016],[-2.5815,.016],[-2.6229,-.02],[-2.7195,-.02],[-2.7609,.016],[-2.8576,.016],[-2.899,-.02],[-2.9956,-.02],[-3.037,.016],[-3.1337,.016],[-3.1751,-.02],[-3.2717,-.02],[-3.3131,.016],[-3.4097,.016],[-3.4512,-.02],[-3.5478,-.02],[-3.5892,.016],[-3.6858,.016],[-3.7273,-.02],[-3.8239,-.02],[-3.8653,.016],[-3.9619,.016],[-4.0033,-.02],[-4.1,-.02],[-4.1414,.016],[-4.238,.016],[-4.2794,-.02],[-4.3761,-.02],[-4.4175,.016],[-4.5141,.016],[-4.5555,-.02],[-4.6522,-.02],[-4.6936,.016],[-4.7902,.016],[-4.8316,-.02],[-4.9283,-.02],[-4.9697,.016],[-5.0663,.016],[-5.1077,-.02],[-5.2044,-.02],[-5.2458,.016],[-5.3424,.016],[-5.3838,-.02],[-5.4804,-.02],[-5.5219,.016],[-5.6185,.016],[-5.6599,-.02],[-5.7565,-.02],[-5.798,.016],[-5.8946,.016],[-5.936,-.02]],depth:2.596});d||_.scale(1,1,1);let v=new ne(_,t.paint??new _e({color:8947848}));v.name="Left corrugated side wall",d&&(v.position.copy(d.midpoint),v.quaternion.copy(d.quaternion)),v.castShadow=i.castShadow??!0,v.receiveShadow=i.receiveShadow??!0,f.add(v),s["side-wall-l"]=v,o["side-wall-l"]={type:"box",offset:[0,0,0],scale:[.036,2.596,11.872],isTrigger:!1,notes:"box proxy"},a["side-wall-l"]??(a["side-wall-l"]=[]),a["side-wall-l"].push(f);let p=wt(null),m=new ce;m.name="Right corrugated side wall__pivot",m.scale.set(1,1,1),p?(m.position.copy(p.start),m.rotation.set(-1.5707963267948966,0,1.5707963267948966)):(m.position.set(-1.183,.07,0),m.rotation.set(-1.5707963267948966,0,1.5707963267948966)),m.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.036,2.596,11.872],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"side-wall-r",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"paint"}},(n["floor-deck"]??e).add(m),n["side-wall-r"]=m;let T=p?new he(p.endRadius,p.baseRadius,p.length,16,6):Eh({points:[[-5.936,0],[-5.8946,.036],[-5.798,.036],[-5.7565,0],[-5.6599,0],[-5.6185,.036],[-5.5219,.036],[-5.4804,0],[-5.3838,0],[-5.3424,.036],[-5.2458,.036],[-5.2044,0],[-5.1077,0],[-5.0663,.036],[-4.9697,.036],[-4.9283,0],[-4.8316,0],[-4.7902,.036],[-4.6936,.036],[-4.6522,0],[-4.5555,0],[-4.5141,.036],[-4.4175,.036],[-4.3761,0],[-4.2794,0],[-4.238,.036],[-4.1414,.036],[-4.1,0],[-4.0033,0],[-3.9619,.036],[-3.8653,.036],[-3.8239,0],[-3.7273,0],[-3.6858,.036],[-3.5892,.036],[-3.5478,0],[-3.4512,0],[-3.4097,.036],[-3.3131,.036],[-3.2717,0],[-3.1751,0],[-3.1337,.036],[-3.037,.036],[-2.9956,0],[-2.899,0],[-2.8576,.036],[-2.7609,.036],[-2.7195,0],[-2.6229,0],[-2.5815,.036],[-2.4848,.036],[-2.4434,0],[-2.3468,0],[-2.3054,.036],[-2.2087,.036],[-2.1673,0],[-2.0707,0],[-2.0293,.036],[-1.9327,.036],[-1.8912,0],[-1.7946,0],[-1.7532,.036],[-1.6566,.036],[-1.6151,0],[-1.5185,0],[-1.4771,.036],[-1.3805,.036],[-1.3391,0],[-1.2424,0],[-1.201,.036],[-1.1044,.036],[-1.063,0],[-.9663,0],[-.9249,.036],[-.8283,.036],[-.7869,0],[-.6902,0],[-.6488,.036],[-.5522,.036],[-.5108,0],[-.4141,0],[-.3727,.036],[-.2761,.036],[-.2347,0],[-.138,0],[-.0966,.036],[0,.036],[.0414,0],[.138,0],[.1795,.036],[.2761,.036],[.3175,0],[.4141,0],[.4556,.036],[.5522,.036],[.5936,0],[.6902,0],[.7316,.036],[.8283,.036],[.8697,0],[.9663,0],[1.0077,.036],[1.1044,.036],[1.1458,0],[1.2424,0],[1.2838,.036],[1.3805,.036],[1.4219,0],[1.5185,0],[1.5599,.036],[1.6566,.036],[1.698,0],[1.7946,0],[1.836,.036],[1.9327,.036],[1.9741,0],[2.0707,0],[2.1121,.036],[2.2087,.036],[2.2502,0],[2.3468,0],[2.3882,.036],[2.4848,.036],[2.5263,0],[2.6229,0],[2.6643,.036],[2.7609,.036],[2.8023,0],[2.899,0],[2.9404,.036],[3.037,.036],[3.0784,0],[3.1751,0],[3.2165,.036],[3.3131,.036],[3.3545,0],[3.4512,0],[3.4926,.036],[3.5892,.036],[3.6306,0],[3.7273,0],[3.7687,.036],[3.8653,.036],[3.9067,0],[4.0033,0],[4.0448,.036],[4.1414,.036],[4.1828,0],[4.2794,0],[4.3209,.036],[4.4175,.036],[4.4589,0],[4.5555,0],[4.5969,.036],[4.6936,.036],[4.735,0],[4.8316,0],[4.873,.036],[4.9697,.036],[5.0111,0],[5.1077,0],[5.1491,.036],[5.2458,.036],[5.2872,0],[5.3838,0],[5.4252,.036],[5.5219,.036],[5.5633,0],[5.6599,0],[5.7013,.036],[5.798,.036],[5.8394,0],[5.936,0],[5.936,-.02],[5.8394,-.02],[5.798,.016],[5.7013,.016],[5.6599,-.02],[5.5633,-.02],[5.5219,.016],[5.4252,.016],[5.3838,-.02],[5.2872,-.02],[5.2458,.016],[5.1491,.016],[5.1077,-.02],[5.0111,-.02],[4.9697,.016],[4.873,.016],[4.8316,-.02],[4.735,-.02],[4.6936,.016],[4.5969,.016],[4.5555,-.02],[4.4589,-.02],[4.4175,.016],[4.3209,.016],[4.2794,-.02],[4.1828,-.02],[4.1414,.016],[4.0448,.016],[4.0033,-.02],[3.9067,-.02],[3.8653,.016],[3.7687,.016],[3.7273,-.02],[3.6306,-.02],[3.5892,.016],[3.4926,.016],[3.4512,-.02],[3.3545,-.02],[3.3131,.016],[3.2165,.016],[3.1751,-.02],[3.0784,-.02],[3.037,.016],[2.9404,.016],[2.899,-.02],[2.8023,-.02],[2.7609,.016],[2.6643,.016],[2.6229,-.02],[2.5263,-.02],[2.4848,.016],[2.3882,.016],[2.3468,-.02],[2.2502,-.02],[2.2087,.016],[2.1121,.016],[2.0707,-.02],[1.9741,-.02],[1.9327,.016],[1.836,.016],[1.7946,-.02],[1.698,-.02],[1.6566,.016],[1.5599,.016],[1.5185,-.02],[1.4219,-.02],[1.3805,.016],[1.2838,.016],[1.2424,-.02],[1.1458,-.02],[1.1044,.016],[1.0077,.016],[.9663,-.02],[.8697,-.02],[.8283,.016],[.7316,.016],[.6902,-.02],[.5936,-.02],[.5522,.016],[.4556,.016],[.4141,-.02],[.3175,-.02],[.2761,.016],[.1795,.016],[.138,-.02],[.0414,-.02],[0,.016],[-.0966,.016],[-.138,-.02],[-.2347,-.02],[-.2761,.016],[-.3727,.016],[-.4141,-.02],[-.5108,-.02],[-.5522,.016],[-.6488,.016],[-.6902,-.02],[-.7869,-.02],[-.8283,.016],[-.9249,.016],[-.9663,-.02],[-1.063,-.02],[-1.1044,.016],[-1.201,.016],[-1.2424,-.02],[-1.3391,-.02],[-1.3805,.016],[-1.4771,.016],[-1.5185,-.02],[-1.6151,-.02],[-1.6566,.016],[-1.7532,.016],[-1.7946,-.02],[-1.8912,-.02],[-1.9327,.016],[-2.0293,.016],[-2.0707,-.02],[-2.1673,-.02],[-2.2087,.016],[-2.3054,.016],[-2.3468,-.02],[-2.4434,-.02],[-2.4848,.016],[-2.5815,.016],[-2.6229,-.02],[-2.7195,-.02],[-2.7609,.016],[-2.8576,.016],[-2.899,-.02],[-2.9956,-.02],[-3.037,.016],[-3.1337,.016],[-3.1751,-.02],[-3.2717,-.02],[-3.3131,.016],[-3.4097,.016],[-3.4512,-.02],[-3.5478,-.02],[-3.5892,.016],[-3.6858,.016],[-3.7273,-.02],[-3.8239,-.02],[-3.8653,.016],[-3.9619,.016],[-4.0033,-.02],[-4.1,-.02],[-4.1414,.016],[-4.238,.016],[-4.2794,-.02],[-4.3761,-.02],[-4.4175,.016],[-4.5141,.016],[-4.5555,-.02],[-4.6522,-.02],[-4.6936,.016],[-4.7902,.016],[-4.8316,-.02],[-4.9283,-.02],[-4.9697,.016],[-5.0663,.016],[-5.1077,-.02],[-5.2044,-.02],[-5.2458,.016],[-5.3424,.016],[-5.3838,-.02],[-5.4804,-.02],[-5.5219,.016],[-5.6185,.016],[-5.6599,-.02],[-5.7565,-.02],[-5.798,.016],[-5.8946,.016],[-5.936,-.02]],depth:2.596});p||T.scale(1,1,1);let M=new ne(T,t.paint??new _e({color:8947848}));M.name="Right corrugated side wall",p&&(M.position.copy(p.midpoint),M.quaternion.copy(p.quaternion)),M.castShadow=i.castShadow??!0,M.receiveShadow=i.receiveShadow??!0,m.add(M),s["side-wall-r"]=M,o["side-wall-r"]={type:"box",offset:[0,0,0],scale:[.036,2.596,11.872],isTrigger:!1,notes:"box proxy"},a["side-wall-r"]??(a["side-wall-r"]=[]),a["side-wall-r"].push(m);let E=wt(null),C=new ce;C.name="Roof panel with shallow transverse corrugation__pivot",C.scale.set(1,1,1),E?(C.position.copy(E.start),C.rotation.set(0,0,0)):(C.position.set(0,2.786,0),C.rotation.set(0,0,0)),C.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[2.378,.03,11.872],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"roof",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"paint"}},(n["floor-deck"]??e).add(C),n.roof=C;let P=E?new he(E.endRadius,E.baseRadius,E.length,16,6):new Ie(1,1,1,4,4,4);E||P.scale(2.378,.03,11.872);let R=new ne(P,t.paint??new _e({color:8947848}));R.name="Roof panel with shallow transverse corrugation",E&&(R.position.copy(E.midpoint),R.quaternion.copy(E.quaternion)),R.castShadow=i.castShadow??!0,R.receiveShadow=i.receiveShadow??!0,C.add(R),s.roof=R,o.roof={type:"box",offset:[0,0,0],scale:[2.378,.03,11.872],isTrigger:!1,notes:"box proxy"},a.roof??(a.roof=[]),a.roof.push(C);let A=wt(null),z=new ce;z.name="Front end wall (blind end)__pivot",z.scale.set(1,1,1),A?(z.position.copy(A.start),z.rotation.set(0,0,0)):(z.position.set(0,1.368,-6.036),z.rotation.set(0,0,0)),z.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[2.1180000000000003,2.596,.04],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"front-wall",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"paint"}},(n["floor-deck"]??e).add(z),n["front-wall"]=z;let g=A?new he(A.endRadius,A.baseRadius,A.length,16,6):new Ie(1,1,1,4,4,4);A||g.scale(2.1180000000000003,2.596,.04);let x=new ne(g,t.paint??new _e({color:8947848}));x.name="Front end wall (blind end)",A&&(x.position.copy(A.midpoint),x.quaternion.copy(A.quaternion)),x.castShadow=i.castShadow??!0,x.receiveShadow=i.receiveShadow??!0,z.add(x),s["front-wall"]=x,o["front-wall"]={type:"box",offset:[0,0,0],scale:[2.1180000000000003,2.596,.04],isTrigger:!1,notes:"box proxy"},a["front-wall"]??(a["front-wall"]=[]),a["front-wall"].push(z);let k=wt(null),F=new ce;F.name="Corner post rear l__pivot",F.scale.set(1,1,1),k?(F.position.copy(k.start),F.rotation.set(0,0,0)):(F.position.set(1.139,1.368,6.016),F.rotation.set(0,0,0)),F.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.16,2.66,.16],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"post-rear-l",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"frame-paint"}},(n["floor-deck"]??e).add(F),n["post-rear-l"]=F;let H=k?new he(k.endRadius,k.baseRadius,k.length,16,6):new Ie(1,1,1,4,4,4);k||H.scale(.16,2.66,.16);let X=new ne(H,t["frame-paint"]??new _e({color:8947848}));X.name="Corner post rear l",k&&(X.position.copy(k.midpoint),X.quaternion.copy(k.quaternion)),X.castShadow=i.castShadow??!0,X.receiveShadow=i.receiveShadow??!0,F.add(X),s["post-rear-l"]=X,o["post-rear-l"]={type:"box",offset:[0,0,0],scale:[.16,2.66,.16],isTrigger:!1,notes:"box proxy"},a["post-rear-l"]??(a["post-rear-l"]=[]),a["post-rear-l"].push(F);let L=wt(null),Y=new ce;Y.name="Corner post rear r__pivot",Y.scale.set(1,1,1),L?(Y.position.copy(L.start),Y.rotation.set(0,0,0)):(Y.position.set(-1.139,1.368,6.016),Y.rotation.set(0,0,0)),Y.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.16,2.66,.16],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"post-rear-r",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"frame-paint"}},(n["floor-deck"]??e).add(Y),n["post-rear-r"]=Y;let q=L?new he(L.endRadius,L.baseRadius,L.length,16,6):new Ie(1,1,1,4,4,4);L||q.scale(.16,2.66,.16);let de=new ne(q,t["frame-paint"]??new _e({color:8947848}));de.name="Corner post rear r",L&&(de.position.copy(L.midpoint),de.quaternion.copy(L.quaternion)),de.castShadow=i.castShadow??!0,de.receiveShadow=i.receiveShadow??!0,Y.add(de),s["post-rear-r"]=de,o["post-rear-r"]={type:"box",offset:[0,0,0],scale:[.16,2.66,.16],isTrigger:!1,notes:"box proxy"},a["post-rear-r"]??(a["post-rear-r"]=[]),a["post-rear-r"].push(Y);let ae=wt(null),re=new ce;re.name="Corner post front l__pivot",re.scale.set(1,1,1),ae?(re.position.copy(ae.start),re.rotation.set(0,0,0)):(re.position.set(1.139,1.368,-6.016),re.rotation.set(0,0,0)),re.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.16,2.66,.16],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"post-front-l",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"frame-paint"}},(n["floor-deck"]??e).add(re),n["post-front-l"]=re;let Je=ae?new he(ae.endRadius,ae.baseRadius,ae.length,16,6):new Ie(1,1,1,4,4,4);ae||Je.scale(.16,2.66,.16);let ze=new ne(Je,t["frame-paint"]??new _e({color:8947848}));ze.name="Corner post front l",ae&&(ze.position.copy(ae.midpoint),ze.quaternion.copy(ae.quaternion)),ze.castShadow=i.castShadow??!0,ze.receiveShadow=i.receiveShadow??!0,re.add(ze),s["post-front-l"]=ze,o["post-front-l"]={type:"box",offset:[0,0,0],scale:[.16,2.66,.16],isTrigger:!1,notes:"box proxy"},a["post-front-l"]??(a["post-front-l"]=[]),a["post-front-l"].push(re);let G=wt(null),Z=new ce;Z.name="Corner post front r__pivot",Z.scale.set(1,1,1),G?(Z.position.copy(G.start),Z.rotation.set(0,0,0)):(Z.position.set(-1.139,1.368,-6.016),Z.rotation.set(0,0,0)),Z.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.16,2.66,.16],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"post-front-r",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"frame-paint"}},(n["floor-deck"]??e).add(Z),n["post-front-r"]=Z;let Se=G?new he(G.endRadius,G.baseRadius,G.length,16,6):new Ie(1,1,1,4,4,4);G||Se.scale(.16,2.66,.16);let se=new ne(Se,t["frame-paint"]??new _e({color:8947848}));se.name="Corner post front r",G&&(se.position.copy(G.midpoint),se.quaternion.copy(G.quaternion)),se.castShadow=i.castShadow??!0,se.receiveShadow=i.receiveShadow??!0,Z.add(se),s["post-front-r"]=se,o["post-front-r"]={type:"box",offset:[0,0,0],scale:[.16,2.66,.16],isTrigger:!1,notes:"box proxy"},a["post-front-r"]??(a["post-front-r"]=[]),a["post-front-r"].push(Z);let Re=wt(null),we=new ce;we.name="Top side rail l__pivot",we.scale.set(1,1,1),Re?(we.position.copy(Re.start),we.rotation.set(0,0,0)):(we.position.set(1.184,2.7635,0),we.rotation.set(0,0,0)),we.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.07,.105,11.836],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"top-rail-l",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"frame-paint"}},(n["floor-deck"]??e).add(we),n["top-rail-l"]=we;let Ze=Re?new he(Re.endRadius,Re.baseRadius,Re.length,16,6):new Ie(1,1,1,4,4,4);Re||Ze.scale(.07,.105,11.836);let Ge=new ne(Ze,t["frame-paint"]??new _e({color:8947848}));Ge.name="Top side rail l",Re&&(Ge.position.copy(Re.midpoint),Ge.quaternion.copy(Re.quaternion)),Ge.castShadow=i.castShadow??!0,Ge.receiveShadow=i.receiveShadow??!0,we.add(Ge),s["top-rail-l"]=Ge,o["top-rail-l"]={type:"box",offset:[0,0,0],scale:[.07,.105,11.836],isTrigger:!1,notes:"box proxy"},a["top-rail-l"]??(a["top-rail-l"]=[]),a["top-rail-l"].push(we);let $=wt(null),w=new ce;w.name="Bottom side rail l__pivot",w.scale.set(1,1,1),$?(w.position.copy($.start),w.rotation.set(0,0,0)):(w.position.set(1.184,-.005,0),w.rotation.set(0,0,0)),w.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.07,.15,11.836],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"bottom-rail-l",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"frame-paint"}},(n["floor-deck"]??e).add(w),n["bottom-rail-l"]=w;let Me=$?new he($.endRadius,$.baseRadius,$.length,16,6):new Ie(1,1,1,4,4,4);$||Me.scale(.07,.15,11.836);let oe=new ne(Me,t["frame-paint"]??new _e({color:8947848}));oe.name="Bottom side rail l",$&&(oe.position.copy($.midpoint),oe.quaternion.copy($.quaternion)),oe.castShadow=i.castShadow??!0,oe.receiveShadow=i.receiveShadow??!0,w.add(oe),s["bottom-rail-l"]=oe,o["bottom-rail-l"]={type:"box",offset:[0,0,0],scale:[.07,.15,11.836],isTrigger:!1,notes:"box proxy"},a["bottom-rail-l"]??(a["bottom-rail-l"]=[]),a["bottom-rail-l"].push(w);let ee=wt(null),ie=new ce;ie.name="Top side rail r__pivot",ie.scale.set(1,1,1),ee?(ie.position.copy(ee.start),ie.rotation.set(0,0,0)):(ie.position.set(-1.184,2.7635,0),ie.rotation.set(0,0,0)),ie.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.07,.105,11.836],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"top-rail-r",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"frame-paint"}},(n["floor-deck"]??e).add(ie),n["top-rail-r"]=ie;let He=ee?new he(ee.endRadius,ee.baseRadius,ee.length,16,6):new Ie(1,1,1,4,4,4);ee||He.scale(.07,.105,11.836);let xe=new ne(He,t["frame-paint"]??new _e({color:8947848}));xe.name="Top side rail r",ee&&(xe.position.copy(ee.midpoint),xe.quaternion.copy(ee.quaternion)),xe.castShadow=i.castShadow??!0,xe.receiveShadow=i.receiveShadow??!0,ie.add(xe),s["top-rail-r"]=xe,o["top-rail-r"]={type:"box",offset:[0,0,0],scale:[.07,.105,11.836],isTrigger:!1,notes:"box proxy"},a["top-rail-r"]??(a["top-rail-r"]=[]),a["top-rail-r"].push(ie);let S=wt(null),y=new ce;y.name="Bottom side rail r__pivot",y.scale.set(1,1,1),S?(y.position.copy(S.start),y.rotation.set(0,0,0)):(y.position.set(-1.184,-.005,0),y.rotation.set(0,0,0)),y.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.07,.15,11.836],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"bottom-rail-r",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"frame-paint"}},(n["floor-deck"]??e).add(y),n["bottom-rail-r"]=y;let B=S?new he(S.endRadius,S.baseRadius,S.length,16,6):new Ie(1,1,1,4,4,4);S||B.scale(.07,.15,11.836);let J=new ne(B,t["frame-paint"]??new _e({color:8947848}));J.name="Bottom side rail r",S&&(J.position.copy(S.midpoint),J.quaternion.copy(S.quaternion)),J.castShadow=i.castShadow??!0,J.receiveShadow=i.receiveShadow??!0,y.add(J),s["bottom-rail-r"]=J,o["bottom-rail-r"]={type:"box",offset:[0,0,0],scale:[.07,.15,11.836],isTrigger:!1,notes:"box proxy"},a["bottom-rail-r"]??(a["bottom-rail-r"]=[]),a["bottom-rail-r"].push(y);let K=wt(null),W=new ce;W.name="Rear door leaf (left)__pivot",W.scale.set(1,1,1),K?(W.position.copy(K.start),W.rotation.set(0,0,0)):(W.position.set(.5295,1.368,6.056),W.rotation.set(0,0,0)),W.userData.actionProfile={animationRole:"hinged",pivot:{mode:"edge",localPosition:[.5295000000000001,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!0,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1.0590000000000002,2.596,.05],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"door-leaf-l",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"paint"}},(n["floor-deck"]??e).add(W),n["door-leaf-l"]=W;let ke=K?new he(K.endRadius,K.baseRadius,K.length,16,6):new Ie(1,1,1,4,4,4);K||ke.scale(1.0590000000000002,2.596,.05);let fe=new ne(ke,t.paint??new _e({color:8947848}));fe.name="Rear door leaf (left)",K&&(fe.position.copy(K.midpoint),fe.quaternion.copy(K.quaternion)),fe.castShadow=i.castShadow??!0,fe.receiveShadow=i.receiveShadow??!0,W.add(fe),s["door-leaf-l"]=fe,o["door-leaf-l"]={type:"box",offset:[0,0,0],scale:[1.0590000000000002,2.596,.05],isTrigger:!1,notes:"box proxy"},a["door-leaf-l"]??(a["door-leaf-l"]=[]),a["door-leaf-l"].push(W);let pe=wt(null),Ne=new ce;Ne.name="Rear door leaf (right)__pivot",Ne.scale.set(1,1,1),pe?(Ne.position.copy(pe.start),Ne.rotation.set(0,0,0)):(Ne.position.set(-.5295,1.368,6.056),Ne.rotation.set(0,0,0)),Ne.userData.actionProfile={animationRole:"hinged",pivot:{mode:"edge",localPosition:[-.5295000000000001,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!0,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[1.0590000000000002,2.596,.05],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"door-leaf-r",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"paint"}},(n["floor-deck"]??e).add(Ne),n["door-leaf-r"]=Ne;let ge=pe?new he(pe.endRadius,pe.baseRadius,pe.length,16,6):new Ie(1,1,1,4,4,4);pe||ge.scale(1.0590000000000002,2.596,.05);let ve=new ne(ge,t.paint??new _e({color:8947848}));ve.name="Rear door leaf (right)",pe&&(ve.position.copy(pe.midpoint),ve.quaternion.copy(pe.quaternion)),ve.castShadow=i.castShadow??!0,ve.receiveShadow=i.receiveShadow??!0,Ne.add(ve),s["door-leaf-r"]=ve,o["door-leaf-r"]={type:"box",offset:[0,0,0],scale:[1.0590000000000002,2.596,.05],isTrigger:!1,notes:"box proxy"},a["door-leaf-r"]??(a["door-leaf-r"]=[]),a["door-leaf-r"].push(Ne);let Ce=wt({parentSocket:"door-leaf-l.surface",localStart:[.2965,0,.035],localEnd:[.2965,0,.035],contactType:"weld",embedDepth:0,overlap:.002,gapTolerance:.003}),me=new ce;me.name="Door locking bar 1__pivot",me.scale.set(1,1,1),Ce?(me.position.copy(Ce.start),me.rotation.set(0,0,0)):(me.position.set(.2965,0,.035),me.rotation.set(0,0,0)),me.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.034,2.49216,.034],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"lock-bar-1",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"frame-paint"}},(n["door-leaf-l"]??e).add(me),n["lock-bar-1"]=me;let et=Ce?new he(Ce.endRadius,Ce.baseRadius,Ce.length,16,6):new he(.5,.5,1,24,8);Ce||et.scale(.034,2.49216,.034);let Oe=new ne(et,t["frame-paint"]??new _e({color:8947848}));Oe.name="Door locking bar 1",Ce&&(Oe.position.copy(Ce.midpoint),Oe.quaternion.copy(Ce.quaternion)),Oe.castShadow=i.castShadow??!0,Oe.receiveShadow=i.receiveShadow??!0,me.add(Oe),s["lock-bar-1"]=Oe,o["lock-bar-1"]={type:"box",offset:[0,0,0],scale:[.034,2.49216,.034],isTrigger:!1,notes:"box proxy"},a["lock-bar-1"]??(a["lock-bar-1"]=[]),a["lock-bar-1"].push(me);let I=wt({parentSocket:"door-leaf-l.surface",localStart:[-.2965,0,.035],localEnd:[-.2965,0,.035],contactType:"weld",embedDepth:0,overlap:.002,gapTolerance:.003}),le=new ce;le.name="Door locking bar 2__pivot",le.scale.set(1,1,1),I?(le.position.copy(I.start),le.rotation.set(0,0,0)):(le.position.set(-.2965,0,.035),le.rotation.set(0,0,0)),le.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.034,2.49216,.034],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"lock-bar-2",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"frame-paint"}},(n["door-leaf-l"]??e).add(le),n["lock-bar-2"]=le;let j=I?new he(I.endRadius,I.baseRadius,I.length,16,6):new he(.5,.5,1,24,8);I||j.scale(.034,2.49216,.034);let Q=new ne(j,t["frame-paint"]??new _e({color:8947848}));Q.name="Door locking bar 2",I&&(Q.position.copy(I.midpoint),Q.quaternion.copy(I.quaternion)),Q.castShadow=i.castShadow??!0,Q.receiveShadow=i.receiveShadow??!0,le.add(Q),s["lock-bar-2"]=Q,o["lock-bar-2"]={type:"box",offset:[0,0,0],scale:[.034,2.49216,.034],isTrigger:!1,notes:"box proxy"},a["lock-bar-2"]??(a["lock-bar-2"]=[]),a["lock-bar-2"].push(le);let ue=wt({parentSocket:"door-leaf-r.surface",localStart:[.2965,0,.035],localEnd:[.2965,0,.035],contactType:"weld",embedDepth:0,overlap:.002,gapTolerance:.003}),Fe=new ce;Fe.name="Door locking bar 3__pivot",Fe.scale.set(1,1,1),ue?(Fe.position.copy(ue.start),Fe.rotation.set(0,0,0)):(Fe.position.set(.2965,0,.035),Fe.rotation.set(0,0,0)),Fe.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.034,2.49216,.034],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"lock-bar-3",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"frame-paint"}},(n["door-leaf-r"]??e).add(Fe),n["lock-bar-3"]=Fe;let vt=ue?new he(ue.endRadius,ue.baseRadius,ue.length,16,6):new he(.5,.5,1,24,8);ue||vt.scale(.034,2.49216,.034);let at=new ne(vt,t["frame-paint"]??new _e({color:8947848}));at.name="Door locking bar 3",ue&&(at.position.copy(ue.midpoint),at.quaternion.copy(ue.quaternion)),at.castShadow=i.castShadow??!0,at.receiveShadow=i.receiveShadow??!0,Fe.add(at),s["lock-bar-3"]=at,o["lock-bar-3"]={type:"box",offset:[0,0,0],scale:[.034,2.49216,.034],isTrigger:!1,notes:"box proxy"},a["lock-bar-3"]??(a["lock-bar-3"]=[]),a["lock-bar-3"].push(Fe);let Ke=wt({parentSocket:"door-leaf-r.surface",localStart:[-.2965,0,.035],localEnd:[-.2965,0,.035],contactType:"weld",embedDepth:0,overlap:.002,gapTolerance:.003}),je=new ce;je.name="Door locking bar 4__pivot",je.scale.set(1,1,1),Ke?(je.position.copy(Ke.start),je.rotation.set(0,0,0)):(je.position.set(-.2965,0,.035),je.rotation.set(0,0,0)),je.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.034,2.49216,.034],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"lock-bar-4",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"frame-paint"}},(n["door-leaf-r"]??e).add(je),n["lock-bar-4"]=je;let yn=Ke?new he(Ke.endRadius,Ke.baseRadius,Ke.length,16,6):new he(.5,.5,1,24,8);Ke||yn.scale(.034,2.49216,.034);let At=new ne(yn,t["frame-paint"]??new _e({color:8947848}));At.name="Door locking bar 4",Ke&&(At.position.copy(Ke.midpoint),At.quaternion.copy(Ke.quaternion)),At.castShadow=i.castShadow??!0,At.receiveShadow=i.receiveShadow??!0,je.add(At),s["lock-bar-4"]=At,o["lock-bar-4"]={type:"box",offset:[0,0,0],scale:[.034,2.49216,.034],isTrigger:!1,notes:"box proxy"},a["lock-bar-4"]??(a["lock-bar-4"]=[]),a["lock-bar-4"].push(je);let nt=wt(null),rt=new ce;rt.name="Corner casting 1__pivot",rt.scale.set(1,1,1),nt?(rt.position.copy(nt.start),rt.rotation.set(0,0,0)):(rt.position.set(1.138,-.021,6.007),rt.rotation.set(0,0,0)),rt.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.162,.118,.178],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"casting-1",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"casting"}},(n["floor-deck"]??e).add(rt),n["casting-1"]=rt;let xn=nt?new he(nt.endRadius,nt.baseRadius,nt.length,16,6):new Ie(1,1,1,4,4,4);nt||xn.scale(.162,.118,.178);let Ct=new ne(xn,t.casting??new _e({color:8947848}));Ct.name="Corner casting 1",nt&&(Ct.position.copy(nt.midpoint),Ct.quaternion.copy(nt.quaternion)),Ct.castShadow=i.castShadow??!0,Ct.receiveShadow=i.receiveShadow??!0,rt.add(Ct),s["casting-1"]=Ct,o["casting-1"]={type:"box",offset:[0,0,0],scale:[.162,.118,.178],isTrigger:!1,notes:"box proxy"},a["casting-1"]??(a["casting-1"]=[]),a["casting-1"].push(rt);let lt=wt(null),ot=new ce;ot.name="Corner casting 2__pivot",ot.scale.set(1,1,1),lt?(ot.position.copy(lt.start),ot.rotation.set(0,0,0)):(ot.position.set(-1.138,-.021,6.007),ot.rotation.set(0,0,0)),ot.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.162,.118,.178],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"casting-2",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"casting"}},(n["floor-deck"]??e).add(ot),n["casting-2"]=ot;let cn=lt?new he(lt.endRadius,lt.baseRadius,lt.length,16,6):new Ie(1,1,1,4,4,4);lt||cn.scale(.162,.118,.178);let Pt=new ne(cn,t.casting??new _e({color:8947848}));Pt.name="Corner casting 2",lt&&(Pt.position.copy(lt.midpoint),Pt.quaternion.copy(lt.quaternion)),Pt.castShadow=i.castShadow??!0,Pt.receiveShadow=i.receiveShadow??!0,ot.add(Pt),s["casting-2"]=Pt,o["casting-2"]={type:"box",offset:[0,0,0],scale:[.162,.118,.178],isTrigger:!1,notes:"box proxy"},a["casting-2"]??(a["casting-2"]=[]),a["casting-2"].push(ot);let ut=wt(null),ct=new ce;ct.name="Corner casting 3__pivot",ct.scale.set(1,1,1),ut?(ct.position.copy(ut.start),ct.rotation.set(0,0,0)):(ct.position.set(1.138,2.757,6.007),ct.rotation.set(0,0,0)),ct.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.162,.118,.178],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"casting-3",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"casting"}},(n["floor-deck"]??e).add(ct),n["casting-3"]=ct;let Tn=ut?new he(ut.endRadius,ut.baseRadius,ut.length,16,6):new Ie(1,1,1,4,4,4);ut||Tn.scale(.162,.118,.178);let Dt=new ne(Tn,t.casting??new _e({color:8947848}));Dt.name="Corner casting 3",ut&&(Dt.position.copy(ut.midpoint),Dt.quaternion.copy(ut.quaternion)),Dt.castShadow=i.castShadow??!0,Dt.receiveShadow=i.receiveShadow??!0,ct.add(Dt),s["casting-3"]=Dt,o["casting-3"]={type:"box",offset:[0,0,0],scale:[.162,.118,.178],isTrigger:!1,notes:"box proxy"},a["casting-3"]??(a["casting-3"]=[]),a["casting-3"].push(ct);let b=wt(null),D=new ce;D.name="Corner casting 4__pivot",D.scale.set(1,1,1),b?(D.position.copy(b.start),D.rotation.set(0,0,0)):(D.position.set(-1.138,2.757,6.007),D.rotation.set(0,0,0)),D.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.162,.118,.178],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"casting-4",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"casting"}},(n["floor-deck"]??e).add(D),n["casting-4"]=D;let V=b?new he(b.endRadius,b.baseRadius,b.length,16,6):new Ie(1,1,1,4,4,4);b||V.scale(.162,.118,.178);let O=new ne(V,t.casting??new _e({color:8947848}));O.name="Corner casting 4",b&&(O.position.copy(b.midpoint),O.quaternion.copy(b.quaternion)),O.castShadow=i.castShadow??!0,O.receiveShadow=i.receiveShadow??!0,D.add(O),s["casting-4"]=O,o["casting-4"]={type:"box",offset:[0,0,0],scale:[.162,.118,.178],isTrigger:!1,notes:"box proxy"},a["casting-4"]??(a["casting-4"]=[]),a["casting-4"].push(D);let U=wt(null),te=new ce;te.name="Corner casting 5__pivot",te.scale.set(1,1,1),U?(te.position.copy(U.start),te.rotation.set(0,0,0)):(te.position.set(1.138,-.021,-6.007),te.rotation.set(0,0,0)),te.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.162,.118,.178],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"casting-5",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"casting"}},(n["floor-deck"]??e).add(te),n["casting-5"]=te;let Pe=U?new he(U.endRadius,U.baseRadius,U.length,16,6):new Ie(1,1,1,4,4,4);U||Pe.scale(.162,.118,.178);let Ee=new ne(Pe,t.casting??new _e({color:8947848}));Ee.name="Corner casting 5",U&&(Ee.position.copy(U.midpoint),Ee.quaternion.copy(U.quaternion)),Ee.castShadow=i.castShadow??!0,Ee.receiveShadow=i.receiveShadow??!0,te.add(Ee),s["casting-5"]=Ee,o["casting-5"]={type:"box",offset:[0,0,0],scale:[.162,.118,.178],isTrigger:!1,notes:"box proxy"},a["casting-5"]??(a["casting-5"]=[]),a["casting-5"].push(te);let ye=wt(null),Te=new ce;Te.name="Corner casting 6__pivot",Te.scale.set(1,1,1),ye?(Te.position.copy(ye.start),Te.rotation.set(0,0,0)):(Te.position.set(-1.138,-.021,-6.007),Te.rotation.set(0,0,0)),Te.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.162,.118,.178],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"casting-6",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"casting"}},(n["floor-deck"]??e).add(Te),n["casting-6"]=Te;let Xe=ye?new he(ye.endRadius,ye.baseRadius,ye.length,16,6):new Ie(1,1,1,4,4,4);ye||Xe.scale(.162,.118,.178);let Ae=new ne(Xe,t.casting??new _e({color:8947848}));Ae.name="Corner casting 6",ye&&(Ae.position.copy(ye.midpoint),Ae.quaternion.copy(ye.quaternion)),Ae.castShadow=i.castShadow??!0,Ae.receiveShadow=i.receiveShadow??!0,Te.add(Ae),s["casting-6"]=Ae,o["casting-6"]={type:"box",offset:[0,0,0],scale:[.162,.118,.178],isTrigger:!1,notes:"box proxy"},a["casting-6"]??(a["casting-6"]=[]),a["casting-6"].push(Te);let Ve=wt(null),We=new ce;We.name="Corner casting 7__pivot",We.scale.set(1,1,1),Ve?(We.position.copy(Ve.start),We.rotation.set(0,0,0)):(We.position.set(1.138,2.757,-6.007),We.rotation.set(0,0,0)),We.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.162,.118,.178],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"casting-7",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"casting"}},(n["floor-deck"]??e).add(We),n["casting-7"]=We;let mt=Ve?new he(Ve.endRadius,Ve.baseRadius,Ve.length,16,6):new Ie(1,1,1,4,4,4);Ve||mt.scale(.162,.118,.178);let ht=new ne(mt,t.casting??new _e({color:8947848}));ht.name="Corner casting 7",Ve&&(ht.position.copy(Ve.midpoint),ht.quaternion.copy(Ve.quaternion)),ht.castShadow=i.castShadow??!0,ht.receiveShadow=i.receiveShadow??!0,We.add(ht),s["casting-7"]=ht,o["casting-7"]={type:"box",offset:[0,0,0],scale:[.162,.118,.178],isTrigger:!1,notes:"box proxy"},a["casting-7"]??(a["casting-7"]=[]),a["casting-7"].push(We);let Be=wt(null),be=new ce;be.name="Corner casting 8__pivot",be.scale.set(1,1,1),Be?(be.position.copy(Be.start),be.rotation.set(0,0,0)):(be.position.set(-1.138,2.757,-6.007),be.rotation.set(0,0,0)),be.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.162,.118,.178],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"casting-8",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"casting"}},(n["floor-deck"]??e).add(be),n["casting-8"]=be;let It=Be?new he(Be.endRadius,Be.baseRadius,Be.length,16,6):new Ie(1,1,1,4,4,4);Be||It.scale(.162,.118,.178);let Ye=new ne(It,t.casting??new _e({color:8947848}));Ye.name="Corner casting 8",Be&&(Ye.position.copy(Be.midpoint),Ye.quaternion.copy(Be.quaternion)),Ye.castShadow=i.castShadow??!0,Ye.receiveShadow=i.receiveShadow??!0,be.add(Ye),s["casting-8"]=Ye,o["casting-8"]={type:"box",offset:[0,0,0],scale:[.162,.118,.178],isTrigger:!1,notes:"box proxy"},a["casting-8"]??(a["casting-8"]=[]),a["casting-8"].push(be);let Qe=wt(null),tt=new ce;tt.name="CSC data plate__pivot",tt.scale.set(1,1,1),Qe?(tt.position.copy(Qe.start),tt.rotation.set(0,0,0)):(tt.position.set(1.223,.62,4.896),tt.rotation.set(0,0,0)),tt.userData.actionProfile={animationRole:"static",pivot:{mode:"center",localPosition:[0,0,0],axis:[0,1,0],confidence:.8},transformChannels:{translate:!1,rotate:!1,scale:!1,bend:!1,twist:!1,detach:!1,visibility:!0,materialState:!1},sockets:[],collider:{type:"box",offset:[0,0,0],scale:[.006,.2,.32],isTrigger:!1,notes:"box proxy"},constraints:[],destruction:{breakable:!1,fractureGroup:"data-plate-mesh",seamRefs:[],detachableFragments:[],breakImpulse:0,debrisMaterial:"paint"}},(n["floor-deck"]??e).add(tt),n["data-plate-mesh"]=tt;let kt=Qe?new he(Qe.endRadius,Qe.baseRadius,Qe.length,16,6):new Ie(1,1,1,4,4,4);Qe||kt.scale(.006,.2,.32);let Tt=new ne(kt,t.paint??new _e({color:8947848}));return Tt.name="CSC data plate",Qe&&(Tt.position.copy(Qe.midpoint),Tt.quaternion.copy(Qe.quaternion)),Tt.castShadow=i.castShadow??!0,Tt.receiveShadow=i.receiveShadow??!0,tt.add(Tt),s["data-plate-mesh"]=Tt,o["data-plate-mesh"]={type:"box",offset:[0,0,0],scale:[.006,.2,.32],isTrigger:!1,notes:"box proxy"},a["data-plate-mesh"]??(a["data-plate-mesh"]=[]),a["data-plate-mesh"].push(tt),e.userData.sculptRuntime={nodes:n,meshes:s,sockets:r,colliders:o,destructionGroups:a},e.userData.lookDevTargets={},e.userData.actionReadiness={note:"Use root.userData.sculptRuntime.nodes for transforms, sockets for attachments, colliders for physics proxies, and destructionGroups for breakable sets."},e}function f_(i="neutral"){let e=new ce;e.name="ISO 40ft high cube dry container look-dev lights";let t=new oi(i==="reference"?16773334:15922431,3554114,i==="grazing"?.28:i==="reference"?.72:.6);e.add(t);let n=new ln(i==="reference"?16764810:16774376,i==="grazing"?4.2:i==="reference"?2.6:1.7);i==="grazing"?n.position.set(7.5,1.1,4):i==="reference"?n.position.set(-4.5,7.5,5):n.position.set(-9,13,11),n.castShadow=!0,n.shadow.mapSize.set(4096,4096),n.shadow.bias=-25e-5,n.shadow.normalBias=.018,n.shadow.radius=7,n.shadow.blurSamples=24,n.shadow.camera.near=.5,n.shadow.camera.far=60,n.shadow.camera.left=-9,n.shadow.camera.right=9,n.shadow.camera.top=9,n.shadow.camera.bottom=-9,n.shadow.camera.updateProjectionMatrix(),e.add(n);let s=new ln(11060479,i==="grazing"?.12:.42);s.position.set(4,3,3.5),e.add(s);let r=new ln(16773572,i==="grazing"?.28:.85);r.position.set(.5,4.5,-6),e.add(r);let o=new ne(new gn(40,40),new si({opacity:.25}));return o.rotation.x=-Math.PI/2,o.position.y=-.001,o.receiveShadow=!0,o.name="contact-shadow",e.add(o),e.userData.reviewMode=i,e.userData.lightingFromPhoto=["key: directional sun from upper-left-front, intensity 2.4, warm white #FFF4E6, casts soft shadow","fill: hemisphere sky #DCE6F2 / ground #6E6A60, intensity 0.9","rim: directional from behind-right, intensity 0.6, cool #CFE0FF to separate the box from the page ground","exposure 1.0 with ACES filmic tone mapping, sRGB output","contact shadow: soft ground shadow plane under the box (shadow-only material, opacity 0.25)"],e.userData.lookDevTargets={},e}function p_(i){let e=new Pn(i),t=e.fromScene(new ci,.04).texture;return e.dispose(),t}function m_(i,e,t={}){let n=new Zt().setFromObject(e);if(n.isEmpty())return;let s=n.getSize(new N),r=n.getCenter(new N),o=t.margin??1.15,a=Math.max(s.x,s.y,s.z)*o,l=i.fov*Math.PI/180,c=a/2/Math.tan(l/2),h=(t.azimuthDeg??0)*Math.PI/180,u=(t.elevationDeg??0)*Math.PI/180,d=new N(Math.sin(h)*Math.cos(u),Math.sin(u),Math.cos(h)*Math.cos(u));i.position.copy(r).addScaledVector(d,c),i.near=Math.max(.01,c-a),i.far=c+a*2,i.lookAt(r),i.updateProjectionMatrix()}function g_(i){i.toneMapping=Ti,i.outputColorSpace=Rt}function Ch(i){let e=i.userData.sculptRuntime,t=e?.nodes??{},n=[];for(let[s,r]of[["door-leaf-l",1],["door-leaf-r",-1]]){let o=t[s];if(!o)continue;let a=e.meshes[s],l=new Zt().setFromObject(a),c=(l.max.x-l.min.x)/2,h=new ce;h.name=s+"__hinge",o.parent.add(h),h.position.copy(o.position).add(new N(r*c,0,0)),h.add(o),o.position.set(-r*c,0,0),n.push([h,r])}return s=>{for(let[r,o]of n)r.rotation.y=o*s*pt.degToRad(110)}}var __={20:Rl,40:ls,"40hc":Dl},y_={20:"22G1",40:"42G1","40hc":"45G1"},ia=(i,e)=>i[Object.keys(i).find(e)];function x_(i,e,t,n,s){let r=document.createElement("canvas");r.width=256,r.height=96;let o=r.getContext("2d");o.fillStyle="#F4F5F4",o.font='700 54px "Space Grotesk", Arial, sans-serif',o.textAlign="right",o.fillText(i,246,58),o.fillRect(96,72,150,6);let a=new In(r);a.colorSpace=Rt,a.anisotropy=4;let l=new ne(new gn(.62,.23),new _e({map:a,transparent:!0,roughness:.55}));return l.position.set(e+s*.045,t,n),l.rotation.y=s*Math.PI/2,l.name="size-type-code",l}function P_(i,e){let t=new Gr({antialias:!0,alpha:!0,powerPreference:"low-power"});t.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),t.shadowMap.enabled=!0,t.shadowMap.type=dl,ia(ls,C=>C.startsWith("configure"))(t),t.domElement.setAttribute("aria-hidden","true"),i.appendChild(t.domElement);let n=new ns;n.environment=ia(ls,C=>C.endsWith("Environment"))(t),n.add(ia(ls,C=>C.endsWith("LookDevLights"))("neutral"));let s=new Kt(24,1,.1,200),r=new ce;n.add(r);let o=null,a=C=>{},l=0,c=0,h=-.62,u=-.62,d="40";function f(C){o&&(r.remove(o),o.traverse(g=>{g.isMesh&&g.geometry.dispose()})),d=C,o=ia(__[C],g=>g.startsWith("create")&&g.endsWith("Model"))({});let P=new Zt().setFromObject(o),R=P.max.z-P.min.z,A=P.max.y-P.min.y,z=P.max.x-P.min.x;for(let g of[1,-1])o.add(x_(y_[C],g*z/2,A-.42,R/2-.75,g));o.position.z=-(P.max.z+P.min.z)/2,r.add(o),a=Ch(o),a(l),_()}function _(){let C=i.clientWidth,P=i.clientHeight;if(!C||!P)return;t.setSize(C,P,!1),s.aspect=C/P;let R=12.6,A=R/2/Math.tan(s.fov*Math.PI/180/2)/Math.min(1,s.aspect)*.62;s.position.set(0,A*.42,A),s.lookAt(0,1,0),s.updateProjectionMatrix()}let v=0,p=!0,m=()=>{v=0,h+=(u-h)*(e.reduce?1:.12),l+=(c-l)*(e.reduce?1:.1),r.rotation.y=h,a(l),t.render(n,s),p&&(Math.abs(u-h)>5e-4||Math.abs(c-l)>.001)&&(v=requestAnimationFrame(m))},T=()=>{v||(v=requestAnimationFrame(m))},M=null;i.addEventListener("pointerdown",C=>{M=C.clientX,i.setPointerCapture(C.pointerId),i.classList.add("arrastrando")}),i.addEventListener("pointermove",C=>{M!==null&&(u+=(C.clientX-M)*.008,M=C.clientX,T())});let E=()=>{M=null,i.classList.remove("arrastrando")};return i.addEventListener("pointerup",E),i.addEventListener("pointercancel",E),i.addEventListener("keydown",C=>{C.key==="ArrowLeft"&&(u-=.3,T(),C.preventDefault()),C.key==="ArrowRight"&&(u+=.3,T(),C.preventDefault())}),new ResizeObserver(()=>{_(),T()}).observe(i),new IntersectionObserver(C=>{p=C.some(P=>P.isIntersecting),p&&T()}).observe(i),f("40"),T(),e.onReady?.(),{setSize(C){C!==d&&(f(C),T())},setDoors(C){c=C?1:0,T()},rotate(C){u+=C,T()}}}export{P_ as mount};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
