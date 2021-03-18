<template>
  <div id="app">
    <ul>
      <li v-for="item in items" v-bind:key="item.id">
        <router-link :to="item.path">{{ item.path }}</router-link>
      </li>
    </ul>
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
  height: 100%;
}
#app {
  display: flex;
  flex-direction: row;
  width:100%;
  height: 100%;
}
</style>
