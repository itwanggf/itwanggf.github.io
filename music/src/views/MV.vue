<template>
  <div class="mv">
    <ul>
        <p>地区</p>
        <li>
            <el-checkbox-group v-model="checkList" lable-width="100px">
                <el-checkbox v-for="(item) in items" :key="item.id" :label="item.id">{{item.title}}</el-checkbox>
            </el-checkbox-group>
        </li>
        <p>分类</p>
        <li>
            <el-checkbox-group v-model="checkList1">
                <el-checkbox v-for="(item) in items1" :key="item.id" :label="item.id">{{item.title}}</el-checkbox>
            </el-checkbox-group>
        </li>
        <p>年份</p>
        <li>
            <el-checkbox-group v-model="checkList2" @change="go">
                <el-checkbox v-for="(item) in items2" :key="item.id" :label="item.id">{{item.title}}</el-checkbox>
            </el-checkbox-group>
        </li>
        <li>
            <span id="prevPageShows" @click="prevPageShows">上一页</span>&nbsp;
            <span id="nextPageShows" @click="nextPageShows">下一页</span>&nbsp;
            <input type="text" id="page" v-model="value" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')"
            onkeypress="if(event.keyCode==13){document.getElementsByName('getAlbumListByCategory')[0].click();return false;}" style="width:30px">
        </li>
    </ul>
    <ul>
        <li v-for="(item, index) in items3" :key="index" @click="view(item)">
            <p>{{index+1}}.{{item.name}}({{item.singer}})[{{item.publictime}}]</p>
            <img :src="item.pic" alt="">
        </li>
        <router-view></router-view>
    </ul>
    <div id="video">
        <div class="btnDel" @click="close" v-if="show">close</div>
        <video :src="ite" controls autoplay v-if="seeMedia"></video>
    </div>
                
  </div>
</template>

<script>
export default {
  data () {
      return {
          ite:'',
          items:[],
          items1:[],
          items2:[],
          items3:[],
          checkList2:[],
          checkList1:[],
          value:"0",
          checkList: [],
          seeMedia:false,
          show:false
      }
  },
  created () {
      
  },
  methods:{
    
    getList(){
      this.$ajax.get('https://api.bzqll.com/music/tencent/mvListCategory?key=579621905').then((response)=>{
        console.log(response);
        this.items = response.data.data.area
        this.items1 = response.data.data.tag
        this.items2 = response.data.data.year
      }).catch((response)=>{
        console.log(response);
      })
    },
    go(){
        this.$ajax.get('https://api.bzqll.com/music/tencent/hotMvList?key=579621905&year='+this.checkList2+'&tag='+this.checkList1+'&area='+this.checkList+'&limit=10&offset=0').then((response)=>{
            console.log(response);
            this.items3 = response.data.data
        }).catch((response)=>{
            console.log(response);
        })
    },
    gopage(page){
        this.$ajax.get('https://api.bzqll.com/music/tencent/hotMvList?key=579621905&year='+this.checkList2+'&tag='+this.checkList1+'&area='+this.checkList+'&limit=10&offset='+page).then((response)=>{
            console.log(response);
            this.items3 = response.data.data
        }).catch((response)=>{
            console.log(response);
        })
    },
    view(item){
        this.ite = item.url
        this.seeMedia = true
        this.show = true
    },
    close(){
        this.ite = ''
        this.seeMedia = false
        this.show = false
    },
    prevPageShows() {
        let page = this.value;
        if (page > 1) {
            for (let i = 0; i < 10; i++) {
                page--;
            }
            this.value = page;
            this.gopage(page)
        }
    },
    nextPageShows() {
        let page = this.value;
        for (let i = 0; i < 10; i++) {
            page++;
        }
        this.value = page;
        this.gopage(page)
    }
  },
  mounted() {
      let page = this.value;
    this.getList()
  }
}
</script>
<style>
    .el-cascader-menu {
        height: auto;
    }
</style>
<style scoped>
    li{
        list-style: none;
    }
    video,img{
        width: 100%;
    }
    #video{
        width: 100%;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        z-index: 10000;
    }
    #video .btnDel{
        position: absolute;
        top: -32px;
        z-index: 10001;
        right: 0;
        /* width: 50px; */
        border: 1px solid;
        background: yellowgreen;
        border-radius: 3px;
        padding: 5px;
    }
    .el-checkbox+.el-checkbox {
    margin-left: 0;
}
.el-checkbox{
    width: 100px;
}
</style>
