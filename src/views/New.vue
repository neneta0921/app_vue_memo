<template>
  <div class="editor">
    <h2>New Memo</h2>
    <textarea name="memo" v-model="memoBody"></textarea>
    <div>
      <button class="button" @click="save">保存</button>
    </div>
  </div>
</template>

<style scoped>
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
  name: "new",
  data: function() {
    return {
      memoBody: ""
    }
  },
  methods: {
    save: function() {
      this.$store.commit("saved", {
        body: this.memoBody
      });
      this.$router.push("/");
    }
  }
}
</script>
