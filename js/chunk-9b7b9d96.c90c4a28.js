(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9b7b9d96"],{"6de7":function(t,s,e){t.exports=e.p+"img/game1.fbe7e473.jpg"},8002:function(t,s,e){},8670:function(t,s,e){"use strict";var i=e("8002"),a=e.n(i);a.a},bb51:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"home",attrs:{id:"home"}},[e("section",{staticClass:"intro",style:{"background-image":"url("+t.intro.background_image+")"}},[e("div",{staticClass:"intro__wrap"},[e("h2",{staticClass:"intro__title"},[t._v(" "+t._s(t.intro.name)+" ")]),e("div",{staticClass:"intro__metacritic"},[t._v(" "+t._s(t.intro.metacritic)+" ")]),e("div",{staticClass:"intro__btn"},[e("a",{staticClass:"btn",attrs:{href:"/best"}},[e("span",{staticClass:"btn__text"},[t._v("MORE")])])])])])])},a=[],n={name:"Home",data(){return{intro:null,background:e("6de7")}},created(){this.$store.commit("SET_LOADING"),this.$store.dispatch("getIntroGame").then(()=>{this.intro=this.$store.getters.introGame.results[Math.floor(Math.random()*this.$store.getters.introGame.results.length)],this.$store.commit("SET_LOADING")})}},r=n,o=(e("8670"),e("2877")),c=Object(o["a"])(r,i,a,!1,null,"cfc65628",null);s["default"]=c.exports}}]);
//# sourceMappingURL=chunk-9b7b9d96.c90c4a28.js.map