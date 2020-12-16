<template>
  <div id="app">
    <div id="nav">
      <router-link to="/software">软件工程</router-link>
      <router-link to="/architecture">计算机体系结构</router-link>
      <router-link to="/database">数据库系统</router-link>
      <router-link to="/principle">编译原理</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 15px;
}

#nav {
  padding: 10px;

  a {
    margin-right: 20px;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

@media print {
  #nav {
    display: none;
  }
}
</style>
