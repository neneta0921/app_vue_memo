<template>
  <div class="home">
    <ul v-for="memo in memo_lists" :key="memo.id">
      <li>
        <router-link :to="{name: 'Edit', params: { id: memo.id }}">
          {{ memo.body }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style>
li {
  list-style: none;
}
textarea {
  width: 90%;
  height: 10em;
  resize: none;
}
button {
  background-color: cornflowerblue;
  border: none;
  color: #fafafafa;
  text-align: center;
  padding: 0.25rem, 0.5rem;
  margin-top: 10px;
  text-decoration: none;
  display: inline-block;
  font-size: 1.4rem;
  line-height: 1.2;
  cursor: pointer;
}
</style>

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
