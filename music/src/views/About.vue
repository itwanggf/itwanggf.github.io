<template>
  <div class="page-infinite">
    <!-- <h1 class="page-title">Infinite Scroll</h1>
    <p class="page-infinite-desc">当即将滚动至列表底部时, 自动加载更多数据</p> -->
    <div class="page-infinite-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
      <ul class="page-infinite-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading"
        infinite-scroll-distance="50">
        <li v-for="(item,index) in list" class="page-infinite-listitem" :key="index" @click="getPhotoDetail(index)">
          <p>{{index+1}}.{{item.createdAt | formatTime(2)}}</p>
          <img :src="item.url" alt="">
        </li>
      </ul>
      <p v-show="loading" class="page-infinite-loading">
        <!-- <mt-spinner type="fading-circle"></mt-spinner> -->
        <img style="width: 48px;height: 48px;" src="../assets/loading.gif" alt="">
      </p>
    </div>
  </div>
</template>

<style>
  .page-infinite-desc {
  text-align: center;
  color: #666;
  padding-bottom: 5px;
  border-bottom: solid 1px #eee;
}

.page-infinite-listitem {
  /* height: 200px; */
  /* line-height: 50px; */
  /* border-bottom: solid 1px #eee; */
  text-align: center;
}
.page-infinite-listitem:first-child {
  /* border-top: solid 1px #eee; */
}

.page-infinite-wrapper {
  margin-top: -1px;
  overflow: scroll;
}

.page-infinite-loading {
      text-align: center;
    height: 50px;
    line-height: 50px;
}
.page-infinite-loading div {
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
}
img {
  width: 100%;
}
</style>

<script type="text/babel">
  export default {
  data() {
    return {
      list: [],
      lists: [],
      loading: false,
      allLoaded: false,
      wrapperHeight: 0,
      page: -1
    };
  },
  methods: {
    getGoodsList(flag) {
      let param = {
        page: this.page
      };
      this.$ajax
        .get("https://www.apiopen.top/meituApi", { params: param })
        .then(res => {
          if (flag) {
            console.log(res);
            // 多次加载数据
            this.list = this.list.concat(res.data.data);
            if (res.data.data.length == 0) {
              this.loading = true;
            } else {
              this.loading = false;
            }
          } else {
            // 第一次加载数据
            this.list = res.data.data;
            // 当第一次加载数据完之后，把这个滚动到底部的函数触发打开
            this.loading = false;
          }
        });
    },
    loadMore() {
      this.loading = true;
      // 多次加载数据
      setTimeout(() => {
        this.page++;
        this.getGoodsList(true);
      }, 500);
    },
    getPhotoDetail(index) {
        this.$router.push({
            name: 'photo-detail',
            params: {
                id: ''
            }
        });
        // 存储一份到本地，进入图片详情页后刷新从本地获取
        var photoData = {
            'index': index,
            'photoLists': this.list
        };
        localStorage.setItem('photoData', JSON.stringify(photoData));
    },
  },
  mounted() {
    this.wrapperHeight =
      document.documentElement.clientHeight -
      this.$refs.wrapper.getBoundingClientRect().top;
  }
};
</script>