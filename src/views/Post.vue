<template>
  <div class="post">
    <PostDetail :post="post"/>
  </div>
</template>

<script>
// @ is an alias to /src
import PostDetail from '@/components/PostDetail.vue'

export default {
  name: 'home',
  props: ['post'],
  components: {
    PostDetail
  }
}
</script>