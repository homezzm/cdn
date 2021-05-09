/**
* http://www.xarg.org/2010/03/generate-client-side-png-files-using-javascript/
* PNGlib
*/
!function(){function i(i,t){for(var s=2;s<arguments.length;s++)for(var h=0;h<arguments[s].length;h++)i[t++]=arguments[s].charAt(h)}function t(i){return String.fromCharCode(i>>24&255,i>>16&255,i>>8&255,255&i)}function s(i){return String.fromCharCode(255&i,i>>8&255)}var h=function(h,f,e){this.width=h,this.height=f,this.depth=e,this.pix_size=f*(h+1),this.data_size=2+this.pix_size+5*Math.floor((65534+this.pix_size)/65535)+4,this.ihdr_offs=0,this.ihdr_size=25,this.plte_offs=this.ihdr_offs+this.ihdr_size,this.plte_size=8+3*e+4,this.trns_offs=this.plte_offs+this.plte_size,this.trns_size=8+e+4,this.idat_offs=this.trns_offs+this.trns_size,this.idat_size=8+this.data_size+4,this.iend_offs=this.idat_offs+this.idat_size,this.iend_size=12,this.buffer_size=this.iend_offs+this.iend_size,this.buffer=new Array,this.palette=new Object,this.pindex=0;for(var r=new Array,o=0;o<this.buffer_size;o++)this.buffer[o]="\0";i(this.buffer,this.ihdr_offs,t(this.ihdr_size-12),"IHDR",t(h),t(f),"\b"),i(this.buffer,this.plte_offs,t(this.plte_size-12),"PLTE"),i(this.buffer,this.trns_offs,t(this.trns_size-12),"tRNS"),i(this.buffer,this.idat_offs,t(this.idat_size-12),"IDAT"),i(this.buffer,this.iend_offs,t(this.iend_size-12),"IEND");var n,d=30912;d+=31-d%31,i(this.buffer,this.idat_offs+8,(n=d,String.fromCharCode(n>>8&255,255&n)));for(o=0;(o<<16)-1<this.pix_size;o++){var a,_;o+65535<this.pix_size?(a=65535,_="\0"):(a=this.pix_size-(o<<16)-o,_=""),i(this.buffer,this.idat_offs+8+2+(o<<16)+(o<<2),_,s(a),s(~a))}for(o=0;o<256;o++){for(var u=o,p=0;p<8;p++)u=1&u?-306674912^u>>1&2147483647:u>>1&2147483647;r[o]=u}this.index=function(i,t){var s=t*(this.width+1)+i+1;return this.idat_offs+8+2+5*Math.floor(s/65535+1)+s},this.color=function(i,t,s,h){var f=(((h=h>=0?h:255)<<8|i)<<8|t)<<8|s;if(void 0===this.palette[f]){if(this.pindex==this.depth)return"\0";var e=this.plte_offs+8+3*this.pindex;this.buffer[e+0]=String.fromCharCode(i),this.buffer[e+1]=String.fromCharCode(t),this.buffer[e+2]=String.fromCharCode(s),this.buffer[this.trns_offs+8+this.pindex]=String.fromCharCode(h),this.palette[f]=String.fromCharCode(this.pindex++)}return this.palette[f]},this.getBase64=function(){var i,t,s,h,f,e,r,o=this.getDump(),n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",d=o.length,a=0,_="";do{h=(i=o.charCodeAt(a))>>2,f=(3&i)<<4|(t=o.charCodeAt(a+1))>>4,s=o.charCodeAt(a+2),e=d<a+2?64:(15&t)<<2|s>>6,r=d<a+3?64:63&s,_+=n.charAt(h)+n.charAt(f)+n.charAt(e)+n.charAt(r)}while((a+=3)<d);return _},this.getDump=function(){for(var s=65521,h=1,f=0,e=5552,o=0;o<this.height;o++)for(var n=-1;n<this.width;n++)f+=h+=this.buffer[this.index(n,o)].charCodeAt(0),0==(e-=1)&&(h%=s,f%=s,e=5552);function d(s,h,f){for(var e=-1,o=4;o<f-4;o+=1)e=r[255&(e^s[h+o].charCodeAt(0))]^e>>8&16777215;i(s,h+f-4,t(-1^e))}return h%=s,f%=s,i(this.buffer,this.idat_offs+this.idat_size-8,t(f<<16|h)),d(this.buffer,this.ihdr_offs,this.ihdr_size),d(this.buffer,this.plte_offs,this.plte_size),d(this.buffer,this.trns_offs,this.trns_size),d(this.buffer,this.idat_offs,this.idat_size),d(this.buffer,this.iend_offs,this.iend_size),"PNG\r\n\n"+this.buffer.join("")}};"undefined"!=typeof module&&void 0!==module.exports?module.exports=h:window.PNGlib=h}();

/**
 * https://github.com/stewartlord/identicon.js
 * identicon.js@2.3.3
 */
!function(){var t;t="undefined"!=typeof module&&void 0!==module.exports?require("./pnglib"):window.PNGlib;var i=function(t,i){if("string"!=typeof t||t.length<15)throw"A hash of at least 15 characters is required.";this.defaults={background:[240,240,240,255],margin:.08,size:64,saturation:.7,brightness:.5,format:"png"},this.options="object"==typeof i?i:this.defaults,"number"==typeof arguments[1]&&(this.options.size=arguments[1]),arguments[2]&&(this.options.margin=arguments[2]),this.hash=t,this.background=this.options.background||this.defaults.background,this.size=this.options.size||this.defaults.size,this.format=this.options.format||this.defaults.format,this.margin=void 0!==this.options.margin?this.options.margin:this.defaults.margin;var s=parseInt(this.hash.substr(-7),16)/268435455,r=this.options.saturation||this.defaults.saturation,o=this.options.brightness||this.defaults.brightness;this.foreground=this.options.foreground||this.hsl2rgb(s,r,o)};i.prototype={background:null,foreground:null,hash:null,margin:null,size:null,format:null,image:function(){return this.isSvg()?new s(this.size,this.foreground,this.background):new t(this.size,this.size,256)},render:function(){var t,i,s=this.image(),r=this.size,o=Math.floor(r*this.margin),e=Math.floor((r-2*o)/5),n=Math.floor((r-5*e)/2),h=s.color.apply(s,this.background),a=s.color.apply(s,this.foreground);for(t=0;t<15;t++)i=parseInt(this.hash.charAt(t),16)%2?h:a,t<5?this.rectangle(2*e+n,t*e+n,e,e,i,s):t<10?(this.rectangle(1*e+n,(t-5)*e+n,e,e,i,s),this.rectangle(3*e+n,(t-5)*e+n,e,e,i,s)):t<15&&(this.rectangle(0*e+n,(t-10)*e+n,e,e,i,s),this.rectangle(4*e+n,(t-10)*e+n,e,e,i,s));return s},rectangle:function(t,i,s,r,o,e){var n,h;if(this.isSvg())e.rectangles.push({x:t,y:i,w:s,h:r,color:o});else for(n=t;n<t+s;n++)for(h=i;h<i+r;h++)e.buffer[e.index(n,h)]=o},hsl2rgb:function(t,i,s){return[255*(i=[s+=i*=s<.5?s:1-s,s-(t*=6)%1*i*2,s-=i*=2,s,s+t%1*i,s+i])[~~t%6],255*i[(16|t)%6],255*i[(8|t)%6]]},toString:function(t){return t?this.render().getDump():this.render().getBase64()},isSvg:function(){return this.format.match(/svg/i)}};var s=function(t,i,s){this.size=t,this.foreground=this.color.apply(this,i),this.background=this.color.apply(this,s),this.rectangles=[]};s.prototype={size:null,foreground:null,background:null,rectangles:null,color:function(t,i,s,r){var o=[t,i,s].map(Math.round);return o.push(r>=0&&r<=255?r/255:1),"rgba("+o.join(",")+")"},getDump:function(){var t,i,s,r=this.foreground,o=this.background,e=.005*this.size;for(i="<svg xmlns='http://www.w3.org/2000/svg' width='"+this.size+"' height='"+this.size+"' style='background-color:"+o+";'><g style='fill:"+r+"; stroke:"+r+"; stroke-width:"+e+";'>",t=0;t<this.rectangles.length;t++)(s=this.rectangles[t]).color!=o&&(i+="<rect  x='"+s.x+"' y='"+s.y+"' width='"+s.w+"' height='"+s.h+"'/>");return i+="</g></svg>"},getBase64:function(){if("function"==typeof btoa)return btoa(this.getDump());if(Buffer)return new Buffer(this.getDump(),"binary").toString("base64");throw"Cannot generate base64 output"}},"undefined"!=typeof module&&void 0!==module.exports?module.exports=i:window.Identicon=i}();

/** 
 * https://github.com/blueimp/JavaScript-MD5
 * blueimp-md5@2.18.0
*/
!function(n){"use strict";function t(n,t){var r=(65535&n)+(65535&t);return(n>>16)+(t>>16)+(r>>16)<<16|65535&r}function r(n,r,e,o,u,c){return t((f=t(t(r,n),t(o,c)))<<(i=u)|f>>>32-i,e);var f,i}function e(n,t,e,o,u,c,f){return r(t&e|~t&o,n,t,u,c,f)}function o(n,t,e,o,u,c,f){return r(t&o|e&~o,n,t,u,c,f)}function u(n,t,e,o,u,c,f){return r(t^e^o,n,t,u,c,f)}function c(n,t,e,o,u,c,f){return r(e^(t|~o),n,t,u,c,f)}function f(n,r){var f,i,a,h,d;n[r>>5]|=128<<r%32,n[14+(r+64>>>9<<4)]=r;var l=1732584193,g=-271733879,v=-1732584194,m=271733878;for(f=0;f<n.length;f+=16)i=l,a=g,h=v,d=m,l=e(l,g,v,m,n[f],7,-680876936),m=e(m,l,g,v,n[f+1],12,-389564586),v=e(v,m,l,g,n[f+2],17,606105819),g=e(g,v,m,l,n[f+3],22,-1044525330),l=e(l,g,v,m,n[f+4],7,-176418897),m=e(m,l,g,v,n[f+5],12,1200080426),v=e(v,m,l,g,n[f+6],17,-1473231341),g=e(g,v,m,l,n[f+7],22,-45705983),l=e(l,g,v,m,n[f+8],7,1770035416),m=e(m,l,g,v,n[f+9],12,-1958414417),v=e(v,m,l,g,n[f+10],17,-42063),g=e(g,v,m,l,n[f+11],22,-1990404162),l=e(l,g,v,m,n[f+12],7,1804603682),m=e(m,l,g,v,n[f+13],12,-40341101),v=e(v,m,l,g,n[f+14],17,-1502002290),l=o(l,g=e(g,v,m,l,n[f+15],22,1236535329),v,m,n[f+1],5,-165796510),m=o(m,l,g,v,n[f+6],9,-1069501632),v=o(v,m,l,g,n[f+11],14,643717713),g=o(g,v,m,l,n[f],20,-373897302),l=o(l,g,v,m,n[f+5],5,-701558691),m=o(m,l,g,v,n[f+10],9,38016083),v=o(v,m,l,g,n[f+15],14,-660478335),g=o(g,v,m,l,n[f+4],20,-405537848),l=o(l,g,v,m,n[f+9],5,568446438),m=o(m,l,g,v,n[f+14],9,-1019803690),v=o(v,m,l,g,n[f+3],14,-187363961),g=o(g,v,m,l,n[f+8],20,1163531501),l=o(l,g,v,m,n[f+13],5,-1444681467),m=o(m,l,g,v,n[f+2],9,-51403784),v=o(v,m,l,g,n[f+7],14,1735328473),l=u(l,g=o(g,v,m,l,n[f+12],20,-1926607734),v,m,n[f+5],4,-378558),m=u(m,l,g,v,n[f+8],11,-2022574463),v=u(v,m,l,g,n[f+11],16,1839030562),g=u(g,v,m,l,n[f+14],23,-35309556),l=u(l,g,v,m,n[f+1],4,-1530992060),m=u(m,l,g,v,n[f+4],11,1272893353),v=u(v,m,l,g,n[f+7],16,-155497632),g=u(g,v,m,l,n[f+10],23,-1094730640),l=u(l,g,v,m,n[f+13],4,681279174),m=u(m,l,g,v,n[f],11,-358537222),v=u(v,m,l,g,n[f+3],16,-722521979),g=u(g,v,m,l,n[f+6],23,76029189),l=u(l,g,v,m,n[f+9],4,-640364487),m=u(m,l,g,v,n[f+12],11,-421815835),v=u(v,m,l,g,n[f+15],16,530742520),l=c(l,g=u(g,v,m,l,n[f+2],23,-995338651),v,m,n[f],6,-198630844),m=c(m,l,g,v,n[f+7],10,1126891415),v=c(v,m,l,g,n[f+14],15,-1416354905),g=c(g,v,m,l,n[f+5],21,-57434055),l=c(l,g,v,m,n[f+12],6,1700485571),m=c(m,l,g,v,n[f+3],10,-1894986606),v=c(v,m,l,g,n[f+10],15,-1051523),g=c(g,v,m,l,n[f+1],21,-2054922799),l=c(l,g,v,m,n[f+8],6,1873313359),m=c(m,l,g,v,n[f+15],10,-30611744),v=c(v,m,l,g,n[f+6],15,-1560198380),g=c(g,v,m,l,n[f+13],21,1309151649),l=c(l,g,v,m,n[f+4],6,-145523070),m=c(m,l,g,v,n[f+11],10,-1120210379),v=c(v,m,l,g,n[f+2],15,718787259),g=c(g,v,m,l,n[f+9],21,-343485551),l=t(l,i),g=t(g,a),v=t(v,h),m=t(m,d);return[l,g,v,m]}function i(n){var t,r="",e=32*n.length;for(t=0;t<e;t+=8)r+=String.fromCharCode(n[t>>5]>>>t%32&255);return r}function a(n){var t,r=[];for(r[(n.length>>2)-1]=void 0,t=0;t<r.length;t+=1)r[t]=0;var e=8*n.length;for(t=0;t<e;t+=8)r[t>>5]|=(255&n.charCodeAt(t/8))<<t%32;return r}function h(n){var t,r,e="0123456789abcdef",o="";for(r=0;r<n.length;r+=1)t=n.charCodeAt(r),o+=e.charAt(t>>>4&15)+e.charAt(15&t);return o}function d(n){return unescape(encodeURIComponent(n))}function l(n){return function(n){return i(f(a(n),8*n.length))}(d(n))}function g(n,t){return function(n,t){var r,e,o=a(n),u=[],c=[];for(u[15]=c[15]=void 0,o.length>16&&(o=f(o,8*n.length)),r=0;r<16;r+=1)u[r]=909522486^o[r],c[r]=1549556828^o[r];return e=f(u.concat(a(t)),512+8*t.length),i(f(c.concat(e),640))}(d(n),d(t))}function v(n,t,r){return t?r?g(t,n):h(g(t,n)):r?l(n):h(l(n))}"function"==typeof define&&define.amd?define((function(){return v})):"object"==typeof module&&module.exports?module.exports=v:n.md5=v}(this);

/**
 * return svg DOM
 * @param args value size ...
 * @returns 
 */
function iisvg(args) {
    args = args || {};
    args.format = "svg";
    var dv = document.createElement("div");
    dv.innerHTML = decodeURI(atob(new Identicon(md5(args.value), args).toString()));
    var iv = dv.firstChild;
    iv.removeAttribute('style');
    return iv;
}