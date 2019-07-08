<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-title>Reddit Clone</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
        <PostsList/>
    </ion-content>
    <ion-footer>
        <ion-toolbar>
            <ion-button expand="block" @click="$router.go('/')">Refresh</ion-button>
        </ion-toolbar>
    </ion-footer>
  </div>
</template>

<script>
import PostsList from '@/components/PostsList.vue'
export default {
    components: {
        PostsList
    }
}
</script>

<style>

</style>
