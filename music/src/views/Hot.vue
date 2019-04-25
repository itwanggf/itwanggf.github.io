<template>
  <div class="mv">
    <ul>
        <li v-for="(item, index) in items" :key="item.id" @click="go(item)">
            <p>{{index+1}}.{{item.creator}}({{item.title}}，共{{item.songNum}}首)</p>
            <img :src="item.coverImgUrl" alt="">
            <p class="ccc" style="font-size: 14px;">{{item.description}}</p>
        </li>
        <li>
            <span id="prevPageShows" @click="prevPageShows">上一页</span>&nbsp;
            <span id="nextPageShows" @click="nextPageShows">下一页</span>&nbsp;
            <input type="text" id="page" v-model="value" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')"
            onkeypress="if(event.keyCode==13){document.getElementsByName('getAlbumListByCategory')[0].click();return false;}" style="width:30px">
        </li>
    </ul>
  </div>
</template>

<script>

export default {
  data () {
      return {
          items:[],
          value:"0"
      }
  },
  created () {
      
  },
  methods:{
    getList(page){
      this.$ajax.get('https://api.bzqll.com/music/netease/hotSongList?key=579621905&cat=全部&limit=10&offset='+page).then((response)=>{
        console.log(response);
        this.items = response.data.data
      }).catch((response)=>{
        console.log(response);
      })
    },
    go(item){
        this.$router.push({
            path: '/',
            query:{
                id:item.id
            }
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
      let page = this.value;
    this.getList(page)
  }
}
</script>

<style scoped>
    li{
        list-style: none;
    }
    video,img{
        width: 20%;
    }
    .ccc{
      color: #ccc;
    }
</style>
