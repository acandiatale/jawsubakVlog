<template>
    <div>
        <button @click="test">test</button>
    </div>
</template>

<script>
export default {
    methods: {
        test: function() {
            fetch('127.0.0.1:13579/test')
            .then(res => console.log(res))
        }
    }
}
</script>

<style>

</style>