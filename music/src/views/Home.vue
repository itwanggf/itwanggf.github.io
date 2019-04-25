<template>
  <div class="home">
    <div id="aplayer"></div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import 'aplayer/dist/APlayer.min.css'
import APlayer from 'aplayer'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
      id:'1147906982'
    }
  },
  methods:{
    getList(id){
      this.$ajax.get('https://api.bzqll.com/music/tencent/songList?key=579621905&id='+id).then((response)=>{
        console.log(typeof response,'111');
        const ap = new APlayer({
            container: document.getElementById('aplayer'),
            autoplay: true,
            // order: 'random',
            lrcType: 3,
            // fixed:true,
            audio:response.data.data.songs
        });
      }).catch((response)=>{
        console.log(response);
      })
    }
  },
  mounted() {
    // this.getList(this.id)
  },
  created(){
    if (this.$route.query.id) {
      this.id = this.$route.query.id
    }
    this.getList(this.id)
  }
}
</script>

<style scoped>

</style>

