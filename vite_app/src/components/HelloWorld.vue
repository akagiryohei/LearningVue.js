<template>
  <section class="alert alert-primary">
    <h1>{{ data.title }}</h1>
    <p>{{ data.message }}</p>
    <div class="form-inline my-2">
      <input type="text" v-model="data.find"
        class="form-control">
      <button @click="getData" class="btn btn-primary">
        Click</button>
    </div>
    <div class="alert alert-light">
      {{ data.fire_data }}
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import { onMounted, reactive } from 'vue'

// let url = "https://jsonplaceholder.typicode.com/posts/"
let url = "https://akigi-vue3-default-rtdb.firebaseio.com/person/"

export default {
  setup(props) {
    const data = reactive({
      title: 'Firebase',
      message: 'This is Firebase sample.',
      find:'',
      fire_data: {},
    })
    const getData = () => {
      let id_url = url + data.find + '.json'
      axios.get(id_url).then((result) => {
        data.message = 'get ID=' + data.find
        if(result.data != null){
          data.fire_data = result.data
        }else{
          data.fire_data = 'no data found...'
        }
      }).catch((error)=>{
        data.message = 'ERROR!'
        data.fire_data = {}
      })
    }
    onMounted(() => {
      getData()
    })
    return { data, getData }
  },
}
</script>
