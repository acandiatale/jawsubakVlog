<template>
  <div id="app">
    <ul>
      <li v-for="item in items" v-bind:key="item.id">
        <router-link :to="item.path">{{ item.name }}</router-link>
      </li>
    </ul>
    <router-view></router-view>    
  </div>
</template>

<script>
import routerItem from './router/routerItem'

export default {
  name: 'App',
  data: function() {
    return {
      items: []
    }
  },
  created: function() {
    for(let item of routerItem){
      // console.log(item)
      if(item.name === "Post" || item.name === "NotFound" || item.name === "Main"){
        continue
      }
      this.items.push(item)
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
