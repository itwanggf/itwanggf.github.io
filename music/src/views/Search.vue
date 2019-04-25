<template>
  <div class="mv">
    <el-input
    placeholder="请输入内容"
    prefix-icon="el-icon-search"
    @change="getList(0)"
    v-model="input21">
    </el-input>
    <div id="aplayer"></div>
    <div class="fenye">
      <span id="prevPageShows" @click="prevPageShows">上一页</span>&nbsp;
            <span id="nextPageShows" @click="nextPageShows">下一页</span>&nbsp;
            <input type="text" id="page" v-model="value" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')"
            style="width:30px">
    </div>
  </div>
</template>

<script>
import 'aplayer/dist/APlayer.min.css'
import APlayer from 'aplayer'
export default {
  data () {
      return {
          items:[],
          input21:'123',
          value:"0"
      }
  },
  created () {
        let page = this.value;
    this.getList(page)
  },
  methods:{
    getList(page){
      this.$ajax.get('https://api.bzqll.com/music/tencent/search?key=579621905&s='+this.input21+'&limit=10&type=song&offset='+page).then((response)=>{
        console.log(response);
        const ap = new APlayer({
            container: document.getElementById('aplayer'),
            autoplay: true,
            order: 'list',
            lrcType: 3,
            // fixed:true,
            audio:response.data.data
        });
      }).catch((response)=>{
        console.log(response);
      })
    },
    prevPageShows() {
        let page = this.value;
        if (page > 1) {
            for (let i = 0; i < 10; i++) {
                page--;
            }
            this.value = page;
            this.getList(page)
        }
    },
    nextPageShows() {
        let page = this.value;
        for (let i = 0; i < 10; i++) {
            page++;
        }
        this.value = page;
        this.getList(page)
    }
  },
  mounted() {
    
  }
}
</script>

<style scoped>
    li{
        list-style: none;
    }
    video,img{
        width: 100%;
    }
    .ccc{
      color: #ccc;
    }
</style>
