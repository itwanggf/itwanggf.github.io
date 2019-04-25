<template>
  <div class="childA">
    <ul class="myheader">
      <li>{{HeaderContent.title}}</li>
      <li>{{HeaderContent.login}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "childA",
  props: ["HeaderContent"],
  data() {
    return {
        
    };
  },
  created () {
      
  },
  methods: {
      
  }
};
</script>

<style scoped>
.childA {
  padding: 30px;
  border: 5px solid #ddd;
}
</style>
