<template>
  <div id="app">
    <nav>
      <ul>
        <li v-for="item in items" v-bind:key="item.id">
          <router-link :to="item.path">{{ item.name }}</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import routerItem from './routerItem'

export default {
  name: 'App',
  data: function() {
    return {
      items: routerItem
    }
  }
}
</script>

<style>
html{
  margin: 0;
  /* height: 100%; */
}
body{
  margin: 0;
}
#app {
  display: flex;
  flex-direction: column;
  width:100%;
  /* height: 100%; */
}
ul{
  list-style: none;
}
</style>
