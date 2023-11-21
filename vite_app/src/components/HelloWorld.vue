<template>
  <section class="alert alert-primary">
    <h1>{{ data.title }}</h1>
    <p>{{ data.message }}</p>
    <div class="form-inline my-2">
      <input type="text" v-model="data.find" class="form-control">
      <button @click="getData" class="btn btn-primary">
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
import { reactive } from 'vue'

let url = "https://akigi-vue3-default-rtdb.firebaseio.com/person.json?orderBy=%22age%22" //☆

export default {
  setup(props) {
    const data = reactive({
      title: 'Firebase',
      message: 'This is Firebase sample.',
      find: '',
      fire_data: {},
    })
    const getData = () => {
      // 配列にした
      let range = data.find.split(',')
      let age_url = url + "&startAt=" + range[0]
        + "&endAt=" + range[1]
      axios.get(age_url).then((result) => {
        data.message = 'get ID=' + data.find
        if (result.data != null) {
          data.fire_data = result.data
        } else {
          data.fire_data = 'no data found...'
        }
      }).catch((error) => {
        data.message = 'ERROR!'
        data.fire_data = {}
      })
    }
    return { data, getData }
  },
}
</script>
