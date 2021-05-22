<template>
    <div>
        <button @click="jwtTest">jwt</button>
        <form>
            <a>ID</a>
            <input type="text" />
            <a>PASSWORD</a>
            <input type="password" />
            <input type="submit" value="LOG-IN">
        </form>
    </div>
</template>

<script>
export default {
    methods: {
        jwtTest: function(){
            fetch("http://localhost:13579/jwt",{
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res=>{return res.json()})
            .then(json=>{console.log(json)})
        }
    }
}
</script>

<style>

</style>