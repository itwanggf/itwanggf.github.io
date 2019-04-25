<template>
  <div class="hello">
    <div>
      <label for="dabinge666">你喜欢彬哥哪一点?</label>
      <input
        @input="changed"
        name="dabinge666"
      >
    </div>
    <MyHeader :HeaderContent='headerContent'></MyHeader>

  </div>
</template>

<script>
import MyHeader from "./childA";
export default {
  name: "HelloWorld",
  data() {
    return {
      headerContent: {
        path: "/educationNews",
        title: "详情",
        login: "登录"
      }
    };
  },
  created() {
    // console.log(this.props);
  },
  components: {
    MyHeader // 父组件中注册子组件
  },
  methods: {
    changed(event) {
      this.$store.commit("change", event.target.value);
    }
  }
};
</script>
