<template>
    <div class="editor">
        <h2>Edit Memo</h2>
        <textarea name="memo" v-model="memo.body"></textarea>
        <div>
            <button class="button" @click="update">保存</button>
        </div>
    </div>
</template>>

<script>
export default {
    name: 'edit',
    computed: {
        memo: function() {
            let id = this.$route.params["id"];
            return this.$store.state.memos.find(memo => memo.id == id);
        },
    },
    methods: {
        update: function() {
            this.$store.commit("updated", {
                id: this.memo.id,
                body: this.memo.body
            });
            this.$router.push('/');
        }
    }
}
</script>
