<template>
    <div id="photo-detail">
        <transition name="slideT">
            <div class="login-tip" v-show="tipFlag" v-text="tip"></div>
        </transition>
        <v-touch v-on:swipeleft="onSwipeLeft" v-on:swiperight="onSwipeRight">
            <img :src="photoList[index]['url']">
        </v-touch>
    </div>
</template>
<script>
// import headerBack from "@/components/header_back.vue"

export default {
  data() {
    return {
      localData: JSON.parse(localStorage.getItem("photoData")),
      tip: "",
      tipFlag: false
    };
  },
  computed: {
    index() {
      return this.localData.index;
    },
    photoList() {
      return this.localData.photoLists;
    }
  },
  created() {
    console.log(this.localData);
    console.log(this.$route);
  },
  watch: {},
  methods: {
    onSwipeLeft() {
      if (this.localData.index === this.photoList.length - 1) {
        this.tip = "这是最后一张图";
        this.tipFlag = true;
        setTimeout(
          function() {
            this.tipFlag = false;
          }.bind(this),
          2000
        );
        return;
      }
      this.localData.index++;
    },
    onSwipeRight() {
      if (this.localData.index === 0) {
        this.tip = "这是第一张图";
        this.tipFlag = true;
        setTimeout(
          function() {
            this.tipFlag = false;
          }.bind(this),
          2000
        );
        return;
      }
      this.localData.index--;
    }
  },
  components: {
    // headerBack
  }
};
</script>
<style scoped>
#photo-detail {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#photo-detail img {
  max-width: 100%;
  max-height: 100%;
}

.login-tip {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  min-height: 64px;
  line-height: 64px;
  text-align: center;
  background-color: #3f51b5;
  color: #fff;
}

.slideT-enter-active,
.slideT-leave-active {
  transition: all 0.5s;
}

.slideT-enter-active {
  transform: translateY(0);
}

.slideT-enter,
.slideT-leave-active {
  transform: translateY(100%);
}
</style>



