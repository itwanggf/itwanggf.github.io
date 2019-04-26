<template>
    <div class="snow">
        <div id="app">
            <div id="nav">
                <router-link to="/">Home</router-link>
                <router-link to="/about">About</router-link>
            </div>
            <div id="conter">
                <keep-alive>
                    <router-view v-if="$route.meta.keepAlive"></router-view>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "./node_modules/normalize.css/normalize";
@import "style/common.scss";
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
    display: flex;
}
#nav {
    width: 120px;
    display: flex;
    flex-direction: column;
    a {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
            color: $color-main;
        }
    }
}
#conter{
    flex: 1;
}
h3 {
    font-size: 18px;
}
body {
    margin: 0;
    padding: 0;
    background: rgba(0,0,0,.5);
}

img {
    display: block;
    width: 100%;
}

@keyframes snow {
    0% {
        background-position: 0 0, 0 0;
    }

    100% {
        background-position: 500px 500px, 1000px 500px;
    }
}

.snow {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url('assets/snow1.png'), url('assets/snow2.png');
    animation: 10s snow linear infinite;
}

.box-shadow {
    width: 200px;
    height: 100px;
    color: blue;
    padding: 20px;
    box-shadow: 0px 0.5px 10px red;
    text-align: center;
}
</style>
