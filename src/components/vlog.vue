<template>
    <div id="vlog">
        <div id="post">
            <div class="listContent" v-for="post in postObj" v-bind:key="post.id">
                <a class="linkPost" @click="movePost(post.idx)">
                    <strong>
                        {{ post.idx }}
                    </strong>
                    <strong>
                        {{ post.title }}
                    </strong>
                    <p class="postTxt">
                        {{ post.content }}
                    </p>
                    <span class="date">
                        {{ post. date }}
                    </span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Vlog",
    data: function() {
        return {
            postObj: [
                {idx: 1, title: "omg", date:"2021-03-19", content: "이 글은. 어쩌고 저쩌고 블라블라 숃숑"},
                {idx: 2, title: "dodo", date:"2021-03-20", content: "avjdjvj dkhskjdfh ehiuiweur"}
            ]

        }
    },
    methods: {
        movePost: function(idx) {
            console.log(idx)
            this.$router.push({name: "Post", query: {id: idx}})
        }
    },
    created: function() {
        // fetch()
        // .then(res=>{return res.json()})
        // .then(json=>{})
    }
}
</script>

<style>

</style>