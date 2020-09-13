<template>
  <div class="editor">
    <Header>New Memo</Header>
    <textarea name="memo" v-model="memoBody"></textarea>
    <div>
      <button class="button" @click="save">保存</button>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
export default {
  name: "new",
  components: {
    Header
  },
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
