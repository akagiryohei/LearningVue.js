<template>
  <section class="alert alert-primary">
    <h1>{{ data.title }}</h1>
    <p>{{ data.message }}</p>
    <table class="table-light table-striped">
      <tbody class="text-left">
        <tr>
          <th style="width: 200px;">User ID</th>
          <td>{{ data.json_data ? data.json_data.userId : '-' }}</td>
        </tr>
        <tr>
          <th>ID</th>
          <td>{{ data.json_data ? data.json_data.id :'-' }}</td>
        </tr>
        <tr>
          <th>Title</th>
          <td>{{ data.json_data ? data.json_data.title :'-' }}</td>
        </tr>
        <tr>
          <th>Body</th>
          <td>{{ data.json_data ? data.json_data.body :'-' }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import axios from 'axios'
import { onMounted, reactive } from 'vue'

let url = "https://jsonplaceholder.typicode.com/posts/"

export default {
  setup(props) {
    const data = reactive({
      title: 'Axios',
      message: 'This is axios sample.',
      json_data:null,
    })
    const getData = () => {
      let id = 2 // ★ID番号
      // .get()：配列ならキーを入れるととれる。
      // axios.get()のときにpromiseオブジェクトを返す
      // .then():resultの中にdata.txtの中身が入ってる
      // idの指定をするときは(url + id)と記述すると該当するIDの物を取得できる。
      axios.get(url + id).then((result) => {
        console.log(result.data)
        data.json_data = result.data
      })
    }
    // マウントしたときに該当のメソッドの呼び出し
    onMounted(() => {
      getData()
    })
    return { data, getData }
  },
}
</script>
