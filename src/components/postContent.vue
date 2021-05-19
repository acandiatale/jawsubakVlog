<template>
    <div>
        <button @click="test">
            test
        </button>
    
    </div>
</template>

<script>
export default {
    methods: {
        test: function() {
            fetch("http://localhost:13579/post/test?id=1", {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => { 
                console.log(res.headers['set-cookie'])
                return res.json() 
            })
            .then(json => {
                console.log(json);
            })
        }
    },
    mounted: function(){

    }
}
</script>

<style>

</style>