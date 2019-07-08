<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
            <ion-button color="primary" @click="$router.go(-1)">Back</ion-button>
        </ion-buttons>
        <ion-title v-if="post">Post [ {{ post.data.id }} ]</ion-title>
        <ion-title v-else>Post Details</ion-title>
        <ion-buttons slot="end">
            <ion-back-button></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding" v-if="post">
        <img class="image" :src="post.data.preview.images[0].source.url" alt="" style="height: 300px;">
        <h6>
            {{ post.data.title }}
        </h6>
        <!-- <p>
            <ion-text>Subreddit: </ion-text>
            <a :href="`https://www.reddit.com/r/${post.data.subreddit}`">
                reddit.com/r/{{ post.data.subreddit }}
            </a>
        </p> -->
        <ion-list>
            <ion-item>
                <ion-text class="label">Subreddit: &nbsp;</ion-text>
                <a :href="`https://www.reddit.com/r/${post.data.subreddit}`">
                    reddit.com/r/{{ post.data.subreddit }}
                </a>
            </ion-item>
            <ion-item>
                <ion-text class="label">Author: &nbsp;</ion-text>
                <ion-text>{{ post.data.author }}</ion-text>
            </ion-item>
        </ion-list>
    </ion-content>
    <ion-content class="ion-padding" v-else>
        <p class="error">
            Something went wrong
        </p>
    </ion-content>
    <ion-footer>
        <ion-toolbar>
            <!-- <ion-button expand="block" @click="$router.go(-1)">Home</ion-button> -->
            <ion-button expand="block" @click="$router.push({ name: 'home' })">Home</ion-button>
        </ion-toolbar>
    </ion-footer>
  </div>
</template>

<script>
export default {
    props: ['post'],
}
</script>

<style scoped>
    .label{
        font-weight: bold;
    }
    .error{
        margin-top: 38vh;
    }
</style>
