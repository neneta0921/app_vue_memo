<template>
  <div class="editor">
    <h2>New Memo</h2>
    <textarea name="memo" v-model="memoBody"></textarea>
    <div><button @click="save">保存</button></div>
  </div>
</template>

<style scoped>
textarea {
  width: 90%;
  height: 10em;
  resize: none;
}
button {
  border: 1px solid cornflowerblue;
  background-color: cornflowerblue;
  color: #fafafafa;
  padding: 10px, 20px;
  margin-top: 10px;
}
</style>

<script>
export default {
  name: "new",
  data: function() {
    return {
      memoBody: ""
    }
  },
  methods: {
    save: function() {
      alert('Memo is saved');
      this.$router.push("/");
    }
  }
}
</script>
