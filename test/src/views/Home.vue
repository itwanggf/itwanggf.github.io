<template>
  <div class="home">
    <div>
      <p>我喜欢彬哥： {{ $store.getters.love }}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  created() {
    console.log(this.$store);
  },
}
</script>

