<template>
  <div class="hello">sssssssssssssssss
    <video :src="items" controls autoplay></video>
    <el-button round @click="gs">返回上一页</el-button>
  </div>
</template>

<script>
export default {
  data () {
      return {
          items:''
      }
  },
  created() {
    console.log(this.$router.query.id,'sssssssssss');
    this.items = this.$route.query.id;
  },
  methods: {
    gs(){
        this.$router.push({
            path: this.$route.query.b
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
video{
  width: 100%;
}
</style>
