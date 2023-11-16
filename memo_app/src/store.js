import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate"

export const store = createStore({
    state: () => {
        return {
            memo: [],
            page: 0,
        }
    },
    // 関数をまとめておいている場所
    mutations: {
        insert: (state, obj) => {
            // new Date():引数の指定がない場合は、現在日時でDateオブジェクトと生成する
            var d = new Date() //現在日時が入ってる状況
            var fmt = d.getFullYear() + '-' + (d.getMonth() + 1)
                + '-' + d.getDate() + ' ' + d.getHours() + ':'
                + d.getMinutes()
            state.memo.unshift({
                title: obj.title,
                content: obj.content, // ここのobj.contentとは？あとから規定するのか？
                created: fmt
            })
        },
        //表示するページの移動、引数Ｐは整数値
        set_page: (state, p) => {
            state.page = p;
        },

        // メモの削除を行うためのもの。引数objには、削除するメモのオブジェクトが渡されている。
        remove: (state, obj) => {
            for (let i = 0; i < state.memo.length; i++) {
                const ob = state.memo[i]
                if (ob.title == obj.title
                    && ob.content == obj.content
                    && ob.created == obj.created) {
                    alert('remove it! --' + ob.title)
                    // splice(start,deleteCount(いくつ消す),item1(追加する要素))
                    state.memo.splice(i, 1)
                    return
                }
            }
        },
    },
    // 値の保持
    plugins: [
        createPersistedState(),
    ],
})
