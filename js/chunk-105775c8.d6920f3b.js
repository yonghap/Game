(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-105775c8"],{"183e":function(e,a,t){"use strict";var s=t("ffac"),i=t.n(s);i.a},4238:function(e,a,t){"use strict";var s=t("49df"),i=t.n(s);i.a},"49df":function(e,a,t){},"7d36":function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"detail",attrs:{id:"detail"}},[t("section",{staticClass:"game"},[e.game.name?t("h2",{staticClass:"title",style:{"background-image":"url("+e.game.background_image+")"}},[t("div",{staticClass:"row"},[e._v(" "+e._s(e.game.name)+" ")])]):e._e(),t("div",{staticClass:"inner"},[t("div",{staticClass:"row"},[t("section",{staticClass:"game__wrap"},[t("article",{staticClass:"meta"},[t("div",{staticClass:"meta__content"},[t("img",{attrs:{src:e.sc.results[0].image}})]),t("div",{staticClass:"meta__info"},[t("div",{staticClass:"info"},[t("ul",{staticClass:"info__list"},[e.game.developers.length>0?t("li",[t("span",[e._v("개발사")]),e._v(" "+e._s(e.game.developers[0].name)+" ")]):e._e(),e.game.publishers.length>0?t("li",[t("span",[e._v("배급사")]),e._v(" "+e._s(e.game.publishers[0].name)+" ")]):e._e(),e.game.released?t("li",[t("span",[e._v("출시일")]),e._v(" "+e._s(e.game.released)+" ")]):e._e(),e.game.website?t("li",[t("span",[e._v("웹사이트")]),t("a",{attrs:{href:e.game.website,target:"_blank"}},[e._v(" "+e._s(e.game.website)+" ")])]):e._e()]),t("div",{staticClass:"info__metacritic"},[e._v(" "+e._s(e.game.metacritic)+" ")]),t("div",{staticClass:"info__meta"},[t("Tag",{attrs:{genres:e.game.genres}})],1)])])]),t("article",{staticClass:"game__article desc",domProps:{innerHTML:e._s(e.game.description)}}),t("article",{staticClass:"game__article"},[t("ul",{staticClass:"game__image"},e._l(e.sc.results,(function(e){return t("li",[t("img",{attrs:{src:e.image}})])})),0)])])])])])])},i=[],r=t("c009"),n={components:{Tag:r["a"]},name:"Home",data(){return{id:this.$route.params.id,game:null,sc:null}},created(){this.$http.all([this.$http.get("https://api.rawg.io/api/games/"+this.id),this.$http.get("https://api.rawg.io/api/games/"+this.id+"/screenshots")]).then(this.$http.spread((e,a)=>{this.game=e.data,this.sc=a.data}))}},c=n,l=(t("4238"),t("2877")),u=Object(l["a"])(c,s,i,!1,null,"1a64bf8d",null);a["default"]=u.exports},c009:function(e,a,t){"use strict";var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"tag"},e._l(e.genres,(function(a){return t("span",[e._v(" "+e._s(e.translate(a.slug))+" ")])})),0)},i=[],r=function(e){switch(e){case"default":return"인기 제품";case"date":return"신규 출시";case"action":return"액션";case"sports":return"스포츠";case"casual":return"캐주얼";case"massively-multiplayer":return"대규모 멀티플레이어";case"indie":return"인디";case"role-playing-games-rpg":return"RPG";case"adventure":return"어드벤쳐";case"shooter":return"FPS";case"puzzle":return"퍼즐";case"strategy":return"전략";case"simulation":return"시뮬레이션";case"arcade":return"아케이드 ";default:break}},n={props:{genres:Array},data(){return{translate:r}}},c=n,l=(t("183e"),t("2877")),u=Object(l["a"])(c,s,i,!1,null,"30ba2800",null);a["a"]=u.exports},ffac:function(e,a,t){}}]);
//# sourceMappingURL=chunk-105775c8.d6920f3b.js.map