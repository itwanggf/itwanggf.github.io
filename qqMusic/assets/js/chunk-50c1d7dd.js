(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50c1d7dd"],{"08a3":function(t,e,i){"use strict";var s=i("daf5"),c=i.n(s);c.a},"2ac3":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mv"},[i("ul",[i("p",[t._v("地区")]),i("li",[i("el-checkbox-group",{model:{value:t.checkList,callback:function(e){t.checkList=e},expression:"checkList"}},t._l(t.items,function(e){return i("el-checkbox",{key:e.id,attrs:{label:e.id}},[t._v(t._s(e.title))])}))],1),i("p",[t._v("分类")]),i("li",[i("el-checkbox-group",{model:{value:t.checkList1,callback:function(e){t.checkList1=e},expression:"checkList1"}},t._l(t.items1,function(e){return i("el-checkbox",{key:e.id,attrs:{label:e.id}},[t._v(t._s(e.title))])}))],1),i("p",[t._v("年份")]),i("li",[i("el-checkbox-group",{on:{change:t.go},model:{value:t.checkList2,callback:function(e){t.checkList2=e},expression:"checkList2"}},t._l(t.items2,function(e){return i("el-checkbox",{key:e.id,attrs:{label:e.id}},[t._v(t._s(e.title))])}))],1),i("li",[i("span",{attrs:{id:"prevPageShows"},on:{click:t.prevPageShows}},[t._v("上一页")]),t._v(" \n          "),i("span",{attrs:{id:"nextPageShows"},on:{click:t.nextPageShows}},[t._v("下一页")]),t._v(" \n          "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticStyle:{width:"30px"},attrs:{type:"text",id:"page",onkeyup:"this.value=this.value.replace(/\\D/g,'')",onafterpaste:"this.value=this.value.replace(/\\D/g,'')",onkeypress:"if(event.keyCode==13){document.getElementsByName('getAlbumListByCategory')[0].click();return false;}"},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}})])]),i("ul",[t._l(t.items3,function(e,s){return i("li",{key:s,on:{click:function(i){t.view(e)}}},[i("p",[t._v(t._s(s+1)+"."+t._s(e.name)+"("+t._s(e.singer)+")["+t._s(e.publictime)+"]")]),i("img",{attrs:{src:e.pic,alt:""}})])}),i("router-view")],2),i("div",{attrs:{id:"video"}},[t.show?i("div",{staticClass:"btnDel",on:{click:t.close}},[t._v("close")]):t._e(),t.seeMedia?i("video",{attrs:{src:t.ite,controls:"",autoplay:""}}):t._e()])])},c=[],a=(i("cadf"),i("551c"),i("097d"),{data:function(){return{ite:"",items:[],items1:[],items2:[],items3:[],checkList2:[],checkList1:[],value:"0",checkList:[],seeMedia:!1,show:!1}},created:function(){},methods:{getList:function(){var t=this;this.$ajax.get("https://api.bzqll.com/music/tencent/mvListCategory?key=579621905").then(function(e){console.log(e),t.items=e.data.data.area,t.items1=e.data.data.tag,t.items2=e.data.data.year}).catch(function(t){console.log(t)})},go:function(){var t=this;this.$ajax.get("https://api.bzqll.com/music/tencent/hotMvList?key=579621905&year="+this.checkList2+"&tag="+this.checkList1+"&area="+this.checkList+"&limit=10&offset=0").then(function(e){console.log(e),t.items3=e.data.data}).catch(function(t){console.log(t)})},gopage:function(t){var e=this;this.$ajax.get("https://api.bzqll.com/music/tencent/hotMvList?key=579621905&year="+this.checkList2+"&tag="+this.checkList1+"&area="+this.checkList+"&limit=10&offset="+t).then(function(t){console.log(t),e.items3=t.data.data}).catch(function(t){console.log(t)})},view:function(t){this.ite=t.url,this.seeMedia=!0,this.show=!0},close:function(){this.ite="",this.seeMedia=!1,this.show=!1},prevPageShows:function(){var t=this.value;if(t>1){for(var e=0;e<10;e++)t--;this.value=t,this.gopage(t)}},nextPageShows:function(){for(var t=this.value,e=0;e<10;e++)t++;this.value=t,this.gopage(t)}},mounted:function(){this.value;this.getList()}}),n=a,o=(i("6cc5"),i("08a3"),i("2877")),l=Object(o["a"])(n,s,c,!1,null,"6adf4cc2",null);l.options.__file="MV.vue";e["default"]=l.exports},"6cc5":function(t,e,i){"use strict";var s=i("c6d0"),c=i.n(s);c.a},c6d0:function(t,e,i){},daf5:function(t,e,i){}}]);