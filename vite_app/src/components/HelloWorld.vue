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

    <hr>
    <h1>DeleteKey</h1>
    <div class="text-left">
      <div class="form-group">
        <label>Email</label>
        <input type="text" v-model="data.delEmail" class="form-control">
      </div>
      <button @click="delData" class="btn btn-primary my-3">
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
      delEmail:'',
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
    const delData = ()=>{
      if(data.delEmail == ''){
        console.log('no-username!')
        return
      }
      let del_url = url + '/' + data.delEmail + '.json'
      axios.delete(del_url).then((re)=>{
        data.message = data.delEmail + 'を削除しました。'
        data.delEmail = ''
        getData()
      })
    }
    // データの取得
    const getData = () => {
      let all_url = url + ".json"
      // 指定のURLでアクセスして取得
      axios.get(all_url).then((result) => {
        data.fire_data = result.data
      }).catch((error) => {
        data.message = 'ERROR!'
        data.fire_data = {}
      })
    }
    onMounted(() => {
      data.message = 'get all data.'
      getData()
    })
    return { data, addData,delData, getData }
  },
}
</script>
