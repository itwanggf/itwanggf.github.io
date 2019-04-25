<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">歌单</router-link> |
      <router-link to="/about">精品歌单</router-link> |
      <router-link to="/hot">热门歌单</router-link> |
      <router-link to="/mv">MV</router-link> |
      <router-link to="/search">搜索</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  padding: 0 10px;
  font-size: 18px;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  background: url("./assets/1542702658656.png") no-repeat;
  background-size: 100%;
}
#nav {
  padding: 15px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
