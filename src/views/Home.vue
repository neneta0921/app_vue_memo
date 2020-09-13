<template>
  <div class="home">
    <ul v-for="memo in memo_lists" :key="memo.id">
      <li>{{ memo.body }}</li>
    </ul>
  </div>
</template>

<style scoped>
li {
  list-style: none;
}
</style>>

<script>
export default {
  name: "home",
  computed: {
    memo_lists: function() {
      return this.$store.state.memos.slice().reverse();
    }
  }
}
</script>
