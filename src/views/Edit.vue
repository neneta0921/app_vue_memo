<template>
    <div class="editor">
        <h2>Edit Memo</h2>
        <textarea name="memo" v-model="memoBody"></textarea>
        <div>
            <button class="button" @click="update">保存</button>
        </div>
    </div>
</template>>

<script>
export default {
    name: 'edit',
    data: function() {
        return {
            memoBody: ''
        }
    },
    mounted: function() {
        let memo_id = this.$route.params["id"];
        let edit_memo = this.$store.state.memos.find(memo => memo.id == memo_id);
        this.memoBody = edit_memo.body;
    },
    methods: {
        update: function() {
            this.$store.commit("updated", {
                id: this.$route.params["id"],
                body: this.memoBody
            });
            this.$router.push('/');
        }
    }
}
</script>
