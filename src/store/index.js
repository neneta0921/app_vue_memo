import Vue from 'vue'
import Vuex from 'vuex'
import createdPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [createdPersistedState()],
    state: {
        memos: [
            {id: 1, body: 'This is sample.'}
        ]
    },
    mutations: {
        saved(state, memo) {
            // 現在の最大値のIDを取り出して、新しいIDを割り振る
            var max = state.memos[state.memos.length - 1].id;
            memo.id = max + 1;
            state.memos.push(memo);
        },
        updated(state, data) {
            let updated_memo = state.memos.find(memo => memo.id == data.id);
            updated_memo.body = data.body
        }
    }
})
