<template>
  <div id="app">
    <div id="nav">
      <router-link to="/Assembly">汇编语言程序设计</router-link>
      <router-link to="/Composition">计算机组成原理</router-link>
      <router-link to="/Math">离散数学</router-link>
      <router-link to="/Microcomputer">微机原理与接口技术</router-link>
      <router-link to="/Net">计算机网络</router-link>
      <router-link to="/System">操作系统</router-link>
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
