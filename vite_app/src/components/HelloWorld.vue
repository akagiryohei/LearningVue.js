<template>
  <section class="alert alert-primary">
    <h1>{{ data.title }}</h1>
    <p>{{ data.message }}</p>

    <div class="text-left">
      <div class="form-group">
        <label>Email</label>
        <input type="text" v-model="data.email" class="form-control">
      </div>
      <div class="form-group">
        <label>Name</label>
        <input type="text" v-model="data.username" class="form-control">
      </div>
      <div class="form-group">
        <label>Age</label>
        <input type="text" v-model="data.age" class="form-control">
      </div>
      <div class="form-group">
        <label>Tel</label>
        <input type="text" v-model="data.tel" class="form-control">
      </div>
      <button @click="addData" class="btn btn-primary my-3">
        Click</button>
    </div>
    <ul v-for="(item, key) in data.fire_data" class="list-group">
      <li class="list-group-item text-left">
        <strong>{{ key }}</strong><br>{{ item }}
      </li>
    </ul>
  </section>
</template>

<script>
import axios from 'axios'
import { onMounted, reactive } from 'vue'

let url = "https://akigi-vue3-default-rtdb.firebaseio.com/person" //☆

export default {
  setup(props) {
    const data = reactive({
      title: 'Firebase',
      message: 'This is Firebase sample.',
      email: '',
      username: '',
      tel: '',
      age: '',
      fire_data: {},
    })
    const addData = () => {
      if (data.username == '') {
        console.log('no-username!')
        return
      }
      // url作成
      let add_url = url + '/' + data.email + '.json'
      let item = {
        'name': data.username,
        'age': data.age,
        'tel': data.tel
      }
      // アクセスしてdatabaseに情報追加して、箱を空にしてからgetDataで情報取得
      axios.put(add_url, item).then((re) => {
        data.email = ''
        data.username = ''
        data.age = 0
        data.tel = ''
        getData()
      })
    }
    const getData = () => {
      let all_url = url + ".json"
      axios.get(all_url).then((result) => {
        data.message = 'get all data.'
        data.fire_data = result.data
      }).catch((error) => {
        data.message = 'ERROR!'
        data.fire_data = {}
      })
    }
    onMounted(() => {
      getData()
    })
    return { data, addData, getData }
  },
}
</script>
