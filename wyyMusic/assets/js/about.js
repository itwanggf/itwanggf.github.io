(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"743a":function(t,e,a){"use strict";var i=a("cbb7"),n=a.n(i);n.a},cbb7:function(t,e,a){},f820:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mv"},[a("ul",t._l(t.items,function(e,i){return a("li",{key:e.id,on:{click:function(a){t.go(e)}}},[a("p",[t._v(t._s(i+1)+"."+t._s(e.creator)+"("+t._s(e.title)+")["+t._s(e.tag)+"]")]),a("img",{attrs:{src:e.coverImgUrl,alt:""}}),a("p",{staticClass:"ccc"},[t._v(t._s(e.description))])])})),a("div",{staticClass:"fenye"},[a("div",{staticClass:"fenye_title ellipsis"},[t._v("共 "+t._s(t.total)+" 条数据 每页 "+t._s(t.pageSize)+" 条数据 共 "+t._s(Math.floor(t.total/t.pageSize)+(t.total%t.pageSize!=0?1:0))+" 页")]),a("el-pagination",{attrs:{"current-page":t.currentPage,"pager-count":5,small:"","page-size":t.pageSize,layout:"prev, pager, next, jumper",total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"current-change":t.getList}})],1)])},n=[],s=(a("cadf"),a("551c"),a("097d"),{data:function(){return{items:[],value:"0",pageSize:100,total:100,currentPage:1}},created:function(){},methods:{getList:function(){var t=this;this.$ajax.get("https://api.bzqll.com/music/netease/highQualitySongList?key=579621905&cat=全部&limit="+this.pageSize+"&offset="+this.currentPage).then(function(e){console.log(e),t.items=e.data.data.playlists}).catch(function(t){console.log(t)})},go:function(t){this.$router.push({path:"/",query:{id:t.id}})}},mounted:function(){this.getList()}}),c=s,o=(a("743a"),a("2877")),r=Object(o["a"])(c,i,n,!1,null,"a07dc304",null);r.options.__file="About.vue";e["default"]=r.exports}}]);