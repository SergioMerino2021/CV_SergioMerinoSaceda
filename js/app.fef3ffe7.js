(function(){"use strict";var e={8534:function(e,l,t){var i=t(9242),s=t(3396);function r(e,l,t,i,r,a){const o=(0,s.up)("NavBar"),n=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(o),(0,s.Wm)(n)],64)}function a(e,l,t,i,r,a){return(0,s.wg)(),(0,s.iD)("h1",null,"T")}var o={name:"Mi",components:{}},n=t(89);const c=(0,n.Z)(o,[["render",a]]);var d=c;const u={class:"w-full flex flex-row items-center bg-slate-500/20 py-5 flex-wrap gap-3 justify-evenly"},p=(0,s.Uk)("Inicio"),f=(0,s.Uk)("Sobre Mi"),v=(0,s.Uk)("Habilidades"),x=(0,s.Uk)("Educación"),w=(0,s.Uk)("Experencia"),h=(0,s.Uk)("Proyectos");function m(e,l,t,i,r,a){const o=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",u,[(0,s.Wm)(o,{class:"px-10 py-3 bg-green-500 rounded-md hover:scale-110 hover:bg-green-700 hover:text-white transition-all flex-1",to:"/"},{default:(0,s.w5)((()=>[p])),_:1}),(0,s.Wm)(o,{class:"px-10 py-3 bg-green-500 rounded-md hover:scale-110 hover:bg-green-700 hover:text-white transition-all flex-1",to:"/info"},{default:(0,s.w5)((()=>[f])),_:1}),(0,s.Wm)(o,{class:"px-10 py-3 bg-green-500 rounded-md hover:scale-110 hover:bg-green-700 hover:text-white transition-all flex-1",to:"/habilidades"},{default:(0,s.w5)((()=>[v])),_:1}),(0,s.Wm)(o,{class:"px-10 py-3 bg-green-500 rounded-md hover:scale-110 hover:bg-green-700 hover:text-white transition-all flex-1",to:"/educacion"},{default:(0,s.w5)((()=>[x])),_:1}),(0,s.Wm)(o,{class:"px-10 py-3 bg-green-500 rounded-md hover:scale-110 hover:bg-green-700 hover:text-white transition-all flex-1",to:"/experiencias"},{default:(0,s.w5)((()=>[w])),_:1}),(0,s.Wm)(o,{class:"px-10 py-3 bg-green-500 rounded-md hover:scale-110 hover:bg-green-700 hover:text-white transition-all flex-1",to:"/proyectos"},{default:(0,s.w5)((()=>[h])),_:1})])}var g={};const b=(0,n.Z)(g,[["render",m]]);var y=b,_={name:"Home",components:{HomeView:d,NavBar:y}};const E=(0,n.Z)(_,[["render",r]]);var S=E,D=t(2483);const j={class:"w-full flex justify-center items-center flex-col h-screen bg-slate-500"},O=(0,s._)("div",{class:"w-8/12 py-10 bg-white"},[(0,s._)("div",{class:"py-10"},[(0,s._)("h1",{class:"text-3xl md:text-5xl underline decoration-4"},"Sobre mí")]),(0,s._)("div",null,[(0,s._)("p",{class:"text-md md:text-2xl"}," Persona responsable y dinamico. Mi objetivo es aprender lo maximo posible de programación y servicios para dar buenas soluciones e optimizar todos los procesos al maximo. Tengo habilidad de programación en Python y otros lenjuages como JavaScript. Siempre que puedo intento automatizar todo tipo de procesos, ya sea para servicios como para webs. ")])],-1),k=[O];function M(e,l,t,i,r,a){return(0,s.wg)(),(0,s.iD)("div",j,k)}var C={};const I=(0,n.Z)(C,[["render",M]]);var P=I,A=t(7139);const R={class:"w-full flex justify-center items-center flex-col md:flex-row h-screen bg-gradient-to-r from-cyan-300 to-blue-800"},G=(0,s._)("div",{class:"w-full md:w-6/12 flex flex-col justify-center items-center gap-10"},[(0,s._)("h1",{class:"text-6xl"},"SERGIO"),(0,s._)("h1",{class:"text-6xl"},"Merino Saceda")],-1),T={class:"w-full md:w-6/12 flex flex-col justify-center items-start gap-9"},H={class:"bg-slate-500 rounded-md text-white p-10 flex flex-col items-start gap-3 hover:scale-105 text-md md:text-3xl transition-all hover:shadow-xl m-auto"},U=(0,s._)("p",null,"Tel: 644802030",-1),L=(0,s._)("p",null,"Ubi.: L'Hospitalet de LLobregat (Centro)",-1),W=(0,s._)("p",null,"Email: sergio.comsace@gmail.com",-1);function Z(e,l,t,i,r,a){return(0,s.wg)(),(0,s.iD)("div",R,[G,(0,s._)("div",T,[(0,s._)("div",H,[U,L,W,(0,s._)("p",null,"Edad: "+(0,A.zw)(r.edad),1)])])])}var B={data(){return{edad:0}},mounted(){var e=2001,l=new Date,t=l.getFullYear(),i=t-e;this.edad=i}};const N=(0,n.Z)(B,[["render",Z]]);var z=N;const F={class:"w-full flex justify-center items-center flex-col h-full gap-5 py-10 bg-gradient-to-r from-yellow-600 to-blue-500"},Y=(0,s.uE)('<div class="w-8/12 py-10 bg-white"><div class="py-10"><h1 class="text-3xl md:text-5xl underline decoration-4">HABILIDADES</h1></div></div><div class="w-8/12 py-10 flex flex-col md:flex-row gap-7 bg-white item-center"><div class="w-full md:w-3/12"><h1 class="text-3xl">Python:</h1></div><div class="w-full md:w-9/12"><ul><li>Tensorflow</li><li>Keras</li><li>Flask</li><li>Django</li></ul></div></div><div class="w-8/12 py-10 flex flex-col md:flex-row gap-7 bg-white item-center"><div class="w-full md:w-3/12"><h1 class="text-3xl">JavaScript:</h1></div><div class="w-full md:w-9/12"><ul><li>Node.js</li><li>VUE</li></ul></div></div><div class="w-8/12 py-10 flex flex-col md:flex-row gap-7 bg-white item-center"><div class="w-full md:w-3/12"><h1 class="text-3xl">WEB:</h1></div><div class="w-full md:w-9/12"><ul><li>Tailwind</li><li>PHP</li><li>HTML</li></ul></div></div><div class="w-8/12 py-10 flex flex-col md:flex-row gap-7 bg-white item-center"><div class="w-full md:w-3/12"><h1 class="text-3xl">SERVICIOS:</h1></div><div class="w-full md:w-9/12"><ul><li>Docker</li><li>Doker compose</li><li>Kubernetes</li></ul></div></div><div class="w-8/12 py-10 flex flex-col md:flex-row gap-7 bg-white item-center"><div class="w-full md:w-3/12"><h1 class="text-3xl">BASES DE DATOS:</h1></div><div class="w-full md:w-9/12"><ul><li>MySQL</li><li>MongoDB</li><li>Redis</li></ul></div></div>',6),V=[Y];function q(e,l,t,i,r,a){return(0,s.wg)(),(0,s.iD)("div",F,V)}var J={};const K=(0,n.Z)(J,[["render",q]]);var Q=K;const X={class:"w-full h-full md:h-screen flex flex-col justify-center items-center bg-slate-800 gap-10 py-10"},$=(0,s.uE)('<div class="w-8/12 py-10 bg-white"><div class="py-3"><h1 class="text-3xl md:text-5xl underline decoration-4">EDUCACIÓN</h1></div></div><div class="w-8/12 py-10 flex flex-col md:flex-row bg-white item-center gap-7"><div class="w-full md:w-3/12"><h1 class="text-2xl">2022 – En curso</h1></div><div class="w-full md:w-9/12"><p class="text-2xl">GRADO SUPERIOR: DESARROLLO DE APLICACIONES WEB</p></div></div><div class="w-8/12 py-10 flex flex-col md:flex-row bg-white item-center gap-7"><div class="w-full md:w-3/12"><h1 class="text-2xl">2020 – 2022</h1></div><div class="w-full md:w-9/12"><p class="text-2xl">GRADO SUPERIOR: SISTEMAS MICROINFORMATICOS Y REDES</p></div></div><div class="w-8/12 py-10 flex flex-col md:flex-row bg-white item-center gap-7"><div class="w-full md:w-3/12"><h1 class="text-2xl">2018 - 2020</h1></div><div class="w-full md:w-9/12"><p class="text-2xl">GRADO MEDIO: SISTEMAS MICROINFORMATICOS Y REDES</p></div></div>',4),ee=[$];function le(e,l,t,i,r,a){return(0,s.wg)(),(0,s.iD)("div",X,ee)}var te={};const ie=(0,n.Z)(te,[["render",le]]);var se=ie;const re={class:"w-full h-full flex flex-col justify-center items-center bg-gradient-to-r from-red-100 to-red-500 gap-10 py-10"},ae=(0,s.uE)('<div class="w-8/12 py-10 bg-white"><div class="py-10"><h1 class="text-3xl md:text-5xl underline decoration-4">EXPERIENCIA PROFESIONAL</h1></div></div><div class="w-8/12 py-10 flex flex-col md:flex-row bg-white items-center gap-5"><div class="w-full md:w-3/12"><h1 class="text-2xl">Mayo 2021 – Mayo 2022</h1><p>Molins de Rei</p></div><div class="w-9/12"><p class="text-2xl">AMES</p><p class="text-xl">DUAL FP Grado Superior</p><div class="w-full flex flex-col md:flex-row justify-center items-center pt-5"><div class="w-full md:w-2/6"><p class="text-2xl">Tareas:</p></div><div class="w-full md:w-2/6"><ul><li>- Crear Docker</li><li>- Conectividad con PLCs</li><li>- Gestion de datos de sensores</li><li>- Crear cerradura electronica para PCD</li></ul></div></div></div></div><div class="w-8/12 py-10 flex flex-col md:flex-row gap-7 bg-white items-center"><div class="w-3/12"><h1 class="text-2xl">Agosto 2018</h1><p>Molins de Rei</p></div><div class="w-9/12"><p class="text-2xl">AMES</p><p class="text-xl">Hijo del trabajador</p><div class="w-full flex flex-col md:flex-row gap-7 justify-center items-center pt-5"><div class="w-2/6"><p class="text-2xl">Tareas:</p></div><div class="w-full md:w-2/6"><ul><li>- Impresión 3D</li><li>- Creación de Apps</li><li>- Creación de sistema para impresora 3D</li></ul></div></div></div></div><div class="w-8/12 py-10 flex flex-col md:flex-row bg-white items-center"><div class="w-3/12"><h1 class="text-2xl">Agosto 2017</h1><p>Molins de Rei</p></div><div class="w-9/12"><p class="text-2xl">AMES</p><p class="text-xl">Hijo del trabajador</p><div class="w-full flex flex-col md:flex-row justify-center items-center pt-5"><div class="w-2/6"><p class="text-2xl">Tareas:</p></div><div class="w-full md:w-2/6"><ul><li>- Ordenar cajas</li><li>- Mantener el estado de las cajas</li></ul></div></div></div></div>',4),oe=[ae];function ne(e,l,t,i,r,a){return(0,s.wg)(),(0,s.iD)("div",re,oe)}var ce={};const de=(0,n.Z)(ce,[["render",ne]]);var ue=de;const pe={class:"w-full py-3 flex flex-row justify-around justify-items-center"},fe={class:"w-full h-full flex flex-col justify-center items-center bg-slate-800 gap-10 py-10"},ve={class:"w-8/12 py-10 bg-white"},xe={class:"py-10"},we={class:"text-3xl md:text-5xl underline decoration-4"};function he(e,l,t,i,r,a){const o=(0,s.up)("GitHub");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",pe,[(0,s._)("button",{onClick:l[0]||(l[0]=(...e)=>a.GitEscuela&&a.GitEscuela(...e)),class:"bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"},"Escuela"),(0,s._)("button",{onClick:l[1]||(l[1]=(...e)=>a.GitPersonal&&a.GitPersonal(...e)),class:"bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"},"Personal")]),(0,s._)("div",fe,[(0,s._)("div",ve,[(0,s._)("div",xe,[(0,s._)("h1",we,"Proyectos ("+(0,A.zw)(r.cuenta)+")",1)])]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.respo,(e=>((0,s.wg)(),(0,s.j4)(o,{key:e.id,repo:e},null,8,["repo"])))),128))])],64)}t(7658);var me=t(70);const ge=(0,s.Uk)("Generar"),be=(0,s._)("canvas",{id:"canvas"},null,-1);function ye(e,l,t,i,r,a){const o=(0,s.up)("bottom");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("p",null,[(0,s.Wm)(o,{onClick:e.h5},{default:(0,s.w5)((()=>[ge])),_:1},8,["onClick"])]),be],64)}var _e={data(){return{}},methods:{}};const Ee=(0,n.Z)(_e,[["render",ye]]);var Se=Ee;const De={class:"w-8/12 py-10 flex flex-col md:flex-row gap-7 bg-white item-center"},je={class:"w-full md:w-3/12 flex flex-col justify-center justify-items-center items-center gap-8"},Oe={class:"w-full"},ke={class:"text-2xl break-words"},Me={key:0},Ce=["href"],Ie=(0,s._)("svg",{class:"",xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewBox:"0 0 24 24"},[(0,s._)("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})],-1),Pe=[Ie],Ae={class:"w-full md:w-9/12"},Re={class:"text-xl w-full break-words"},Ge={key:0,class:"text-xl w-full break-words"};function Te(e,l,t,i,r,a){return(0,s.wg)(),(0,s.iD)("div",De,[(0,s._)("div",je,[(0,s._)("div",Oe,[(0,s._)("h1",ke,(0,A.zw)(r.titulo),1)]),r.url_repo?((0,s.wg)(),(0,s.iD)("div",Me,[(0,s._)("a",{href:r.url_repo,target:"_blank"},Pe,8,Ce)])):(0,s.kq)("",!0)]),(0,s._)("div",Ae,[(0,s._)("p",Re,(0,A.zw)(r.description),1),r.homepage?((0,s.wg)(),(0,s.iD)("p",Ge," WEB: "+(0,A.zw)(r.homepage),1)):(0,s.kq)("",!0)])])}var He={props:{repo:String},data(){return{homepage:null,url_repo:null,titulo:null,description:null}},mounted(){console.log(this.repo),this.homepage=this.repo.homepage,this.url_repo=this.repo.url,this.description=this.repo.desc,this.titulo=this.repo.url.split("/").slice(-1)[0]}};const Ue=(0,n.Z)(He,[["render",Te]]);var Le=Ue,We={components:{TensorflowJs:Se,GitHub:Le},data(){return{Git:"SergioMerinoSaceda",respo:null,cuenta:null}},methods:{GitEscuela(){this.Git="SergioMerino2021",this.cuenta="Escuela",this.respo=null,this.Cargar()},GitPersonal(){this.Git="SergioMerinoSaceda",this.cuenta="Personal",this.respo=null,this.Cargar()},async Cargar(){const e="https://api.github.com/users/"+this.Git+"/repos",l=await(0,me.Z)({method:"get",url:e});var t=[];for(let i=0;i<l.data.length;i++)t.push({url:l.data[i].html_url,desc:l.data[i].description,homepage:l.data[i].homepage});this.respo=t}},mounted(){this.GitPersonal()}};const Ze=(0,n.Z)(We,[["render",he]]);var Be=Ze;const Ne=[{path:"/",name:"Ini",component:z},{path:"/info",name:"Info",component:P},{path:"/habilidades",name:"Habilidad",component:Q},{path:"/educacion",name:"Educacion",component:se},{path:"/experiencias",name:"Experiencia",component:ue},{path:"/proyectos",name:"Proyectos",component:Be}],ze=(0,D.p7)({history:(0,D.PO)("/CV_SergioMerinoSaceda"),routes:Ne});var Fe=ze,Ye=t(65),Ve=(0,Ye.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,i.ri)(S).use(Ve).use(Fe).mount("#app")}},l={};function t(i){var s=l[i];if(void 0!==s)return s.exports;var r=l[i]={exports:{}};return e[i](r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(l,i,s,r){if(!i){var a=1/0;for(d=0;d<e.length;d++){i=e[d][0],s=e[d][1],r=e[d][2];for(var o=!0,n=0;n<i.length;n++)(!1&r||a>=r)&&Object.keys(t.O).every((function(e){return t.O[e](i[n])}))?i.splice(n--,1):(o=!1,r<a&&(a=r));if(o){e.splice(d--,1);var c=s();void 0!==c&&(l=c)}}return l}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[i,s,r]}}(),function(){t.n=function(e){var l=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(l,{a:l}),l}}(),function(){t.d=function(e,l){for(var i in l)t.o(l,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:l[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,l){return Object.prototype.hasOwnProperty.call(e,l)}}(),function(){var e={143:0};t.O.j=function(l){return 0===e[l]};var l=function(l,i){var s,r,a=i[0],o=i[1],n=i[2],c=0;if(a.some((function(l){return 0!==e[l]}))){for(s in o)t.o(o,s)&&(t.m[s]=o[s]);if(n)var d=n(t)}for(l&&l(i);c<a.length;c++)r=a[c],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(d)},i=self["webpackChunktest"]=self["webpackChunktest"]||[];i.forEach(l.bind(null,0)),i.push=l.bind(null,i.push.bind(i))}();var i=t.O(void 0,[998],(function(){return t(8534)}));i=t.O(i)})();
//# sourceMappingURL=app.fef3ffe7.js.map