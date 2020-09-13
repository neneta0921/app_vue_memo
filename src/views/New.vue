<template>
  <div class="editor">
    <h2>New Memo</h2>
    <textarea name="memo" v-model="memoBody"></textarea>
    <div>
      <button class="button" @click="save">保存</button>
    </div>
  </div>
</template>

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
