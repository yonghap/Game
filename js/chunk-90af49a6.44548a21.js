(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-90af49a6"],{"20bc":function(t,s,e){},"5e7a":function(t,s,e){"use strict";var i=e("20bc"),a=e.n(i);a.a},"6de7":function(t,s,e){t.exports=e.p+"img/game1.fbe7e473.jpg"},bb51:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"home",attrs:{id:"home"}},[e("section",{staticClass:"intro",style:{"background-image":"url("+t.intro.background_image+")"}},[e("div",{staticClass:"intro__wrap"},[e("h2",{staticClass:"intro__title"},[t._v(" "+t._s(t.intro.name)+" ")]),e("div",{staticClass:"intro__metacritic"},[t._v(" "+t._s(t.intro.metacritic)+" ")]),e("div",{staticClass:"intro__btn"},[e("router-link",{staticClass:"btn",attrs:{to:"best"}},[e("span",{staticClass:"btn__text"},[t._v("MORE")])])],1)])])])},a=[],n={name:"Home",data(){return{intro:null,background:e("6de7")}},created(){this.$store.commit("SET_LOADING"),this.$store.dispatch("getIntroGame").then(()=>{this.intro=this.$store.getters.introGame.results[Math.floor(Math.random()*this.$store.getters.introGame.results.length)],this.$store.commit("SET_LOADING")})}},r=n,o=(e("5e7a"),e("2877")),c=Object(o["a"])(r,i,a,!1,null,"c0011edc",null);s["default"]=c.exports}}]);
//# sourceMappingURL=chunk-90af49a6.44548a21.js.map