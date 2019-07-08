<template>
    <ion-list>
        <ion-list-header>
            <ion-label>Posts</ion-label>
        </ion-list-header>
        <ion-item v-for="post in posts" :key="post.data.id" @click="gotoPost(post)">
            <img :src="post.data.thumbnail" alt="thumb" class="thumbnail">
            <ion-label>{{ post.data.title }}</ion-label>
        </ion-item>
    </ion-list>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            posts: []
        }
    },
    created(){
        this.fetchPosts()
    }, 
    methods: {
        fetchPosts(){
            axios.get('https://www.reddit.com/r/pics.json?raw_json=1')
            .then(res => {
                this.posts = res.data.data.children
            })
        }, 
        gotoPost(post){
            this.$router.push({ name: 'post', params: { post } })
        }
    }
}
</script>

<style scoped>
    .thumbnail{
        width: 60px;
        height: 60px;
        border-radius: 30px;
        margin-right: 16px;
        margin-top: 10px;
        margin-bottom: 10px;
    }
</style>

