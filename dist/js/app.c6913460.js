(function(e){function t(t){for(var o,a,c=t[0],l=t[1],s=t[2],v=0,p=[];v<c.length;v++)a=c[v],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(t);while(p.length)p.shift()();return n.push.apply(n,s||[]),i()}function i(){for(var e,t=0;t<n.length;t++){for(var i=n[t],o=!0,c=1;c<i.length;c++){var l=i[c];0!==r[l]&&(o=!1)}o&&(n.splice(t--,1),e=a(a.s=i[0]))}return e}var o={},r={app:0},n=[];function a(t){if(o[t])return o[t].exports;var i=o[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=o,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(i,o,function(t){return e[t]}.bind(null,o));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var u=l;n.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034f":function(e,t,i){"use strict";var o=i("85ec"),r=i.n(o);r.a},"0aa1":function(e,t,i){var o={"./ballata.jpg":"4cf9","./brian.jpg":"1dac","./cuculo.jpg":"e912","./district.jpg":"1632","./fantozzi.jpg":"baee","./interview.jpg":"43f6","./kynodontas.jpg":"e8ac","./machina.jpg":"6036","./parasite.jpg":"55e7","./pod.jpg":"6ba3"};function r(e){var t=n(e);return i(t)}function n(e){if(!i.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=n,e.exports=r,r.id="0aa1"},"162d":function(e,t,i){"use strict";var o=i("97cf"),r=i.n(o);r.a},1632:function(e,t,i){e.exports=i.p+"img/district.a2280115.jpg"},"1dac":function(e,t,i){e.exports=i.p+"img/brian.8617b05f.jpg"},"43f6":function(e,t,i){e.exports=i.p+"img/interview.2bda2b85.jpg"},"496b":function(e,t,i){},"4cf9":function(e,t,i){e.exports=i.p+"img/ballata.1e64d0b7.jpg"},"55e7":function(e,t,i){e.exports=i.p+"img/parasite.137a8af3.jpg"},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var o=i("2b0e"),r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("nav",[i("router-link",{attrs:{to:"/list"}},[i("button",{staticClass:"left-button"},[e._v("List")])]),i("router-link",{attrs:{to:"/grid"}},[i("button",[e._v("Grid")])]),i("button",{staticClass:"right-button"},[e._v("Add")])],1),i("router-view")],1)},n=[],a={name:"App",components:{}},c=a,l=(i("034f"),i("2877")),s=Object(l["a"])(c,r,n,!1,null,null,null),u=s.exports,v=i("2f62"),p=[{movieId:0,movieTitle:"The Ballad of Buster Scruggs",movieDirector:"Joel and Ethan Coen",movieYear:"2018",moviePaybill:"ballata.jpg"},{movieId:1,movieTitle:"Ex Machina",movieDirector:"Alex Garland",movieYear:"2015",moviePaybill:"machina.jpg"},{movieId:2,movieTitle:"Fantozzi",movieDirector:"Luciano Salce",movieYear:"1975",moviePaybill:"fantozzi.jpg"},{movieId:3,movieTitle:"One Flew Over the Cuckoo's Nest",movieDirector:"Miloš Forman",movieYear:"1975",moviePaybill:"cuculo.jpg"},{movieId:4,movieTitle:"Monty Python's Life of Brian",movieDirector:"Terry Jones",movieYear:"1979",moviePaybill:"brian.jpg"},{movieId:5,movieTitle:"District 9",movieDirector:"Neill Blomkamp",movieYear:"2009",moviePaybill:"district.jpg"},{movieId:6,movieTitle:"Parasite",movieDirector:"Bong Joon-ho.",movieYear:"2019",moviePaybill:"parasite.jpg"},{movieId:7,movieTitle:"Kynodontas",movieDirector:"Yorgos Lanthimos",movieYear:"2009",moviePaybill:"kynodontas.jpg"},{movieId:8,movieTitle:"The Interview",movieDirector:"Evan Goldberg, Seth Rogen",movieYear:"2014",moviePaybill:"interview.jpg"},{movieId:9,movieTitle:"Tenacious D in The Pick of Destiny",movieDirector:"Liam Lynch",movieYear:"2006",moviePaybill:"pod.jpg"}];o["a"].use(v["a"]);var m=new v["a"].Store({state:{movies:p},mutations:{},actions:{},modules:{}}),f=i("8c4f"),d=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("h1",[e._v("Movie List")]),i("table",[e._m(0),e._l(e.movies,(function(t){return i("tr",{key:t.movieId},[i("td",[e._v(e._s(t.movieTitle))]),i("td",[e._v(e._s(t.movieDirector))]),i("td",[e._v(e._s(t.movieYear))])])}))],2)])},b=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("tr",{staticClass:"table-header"},[i("td",[e._v("Movie Title")]),i("td",[e._v("Director")]),i("td",[e._v("Release Date")])])}],g=i("5530"),j={data:function(){return{}},computed:Object(g["a"])({},Object(v["b"])(["movies"]))},y=j,h=(i("162d"),Object(l["a"])(y,d,b,!1,null,"5e7f1aa0",null)),_=h.exports,x=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"box-container"},[i("h1",[e._v("Movie Grid")]),i("div",{staticClass:"movie-collection"},e._l(e.movies,(function(e){return i("movieBox",{key:e.movieId,attrs:{paybill:e.moviePaybill,title:e.movieTitle,director:e.movieDirector,releaseYear:e.movieYear}})})),1)])},O=[],T=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("figure",{staticClass:"movie-box"},[o("img",{attrs:{src:i("0aa1")("./"+e.paybill)}}),o("figcaption",{staticClass:"info-layer"},[o("p",{attrs:{id:"title"}},[e._v(e._s(e.title))]),o("p",{attrs:{id:"director"}},[e._v(e._s(e.director))]),o("p",{attrs:{id:"releaseYear"}},[e._v(e._s(e.releaseYear))])])])])},w=[],P={props:{paybill:String,title:String,director:String,releaseYear:String},data:function(){return{}}},D=P,Y=(i("945a"),Object(l["a"])(D,T,w,!1,null,"469acb12",null)),k=Y.exports,I={data:function(){return{}},components:{movieBox:k},computed:Object(g["a"])({},Object(v["b"])(["movies"])),method:{}},S=I,M=(i("ba39"),Object(l["a"])(S,x,O,!1,null,"122d8b62",null)),C=M.exports;o["a"].use(f["a"]);var E=[{path:"/",redirect:"/grid"},{path:"/list",name:"List",component:_},{path:"/grid",name:"Grid",component:C}],L=new f["a"]({mode:"history",base:"/",routes:E}),z=L;o["a"].config.productionTip=!1,new o["a"]({router:z,store:m,render:function(e){return e(u)}}).$mount("#app")},6036:function(e,t,i){e.exports=i.p+"img/machina.9385328e.jpg"},"6ba3":function(e,t,i){e.exports=i.p+"img/pod.2287a080.jpg"},"85ec":function(e,t,i){},"945a":function(e,t,i){"use strict";var o=i("496b"),r=i.n(o);r.a},"97cf":function(e,t,i){},a432:function(e,t,i){},ba39:function(e,t,i){"use strict";var o=i("a432"),r=i.n(o);r.a},baee:function(e,t,i){e.exports=i.p+"img/fantozzi.e3d8d06e.jpg"},e8ac:function(e,t,i){e.exports=i.p+"img/kynodontas.03fc917b.jpg"},e912:function(e,t,i){e.exports=i.p+"img/cuculo.16ca2f18.jpg"}});
//# sourceMappingURL=app.c6913460.js.map