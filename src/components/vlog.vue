<template>
  <div id="vlog">
      
  </div>
</template>

<script>
export default {
    name: "vlog",
    data: function() {

    },
    methods: {

    },
    mounted: function() {
        fetch()
        .then(res=>{return res.json()})
        .then(json=>{
            console.log(json)
        })
    }
}
</script>

<style>

</style>