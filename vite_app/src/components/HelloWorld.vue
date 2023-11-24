<template>
  <section class="alert alert-primary">
    <h1>{{data.title}}</h1>
    <p>{{data.message}}</p>
    <table class="table table-light table-striped">
      <thead class="text-center">
        <tr><th>Name</th><th>Mail</th><th>Age</th></tr>
      </thead>
      <tbody class="text-left">
      <tr v-for="(data, key) in data.fire_data">
        <td>{{data.name}}</td>
        <td>{{data.age}}</td>
        <td>{{key}}</td>
      </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import { onMounted, reactive } from 'vue'

//firebaseはFirebaseのオブジェクト：使用するサービスのオブジェクトを取り出す
const person = firebase.database().ref('person/')

export default {
  setup(props) {
    const data = reactive({
      title:'Firebase',
      message:'This is Firebase sample.',
      id:0,
      fire_data: null,
    })
    const getData = ()=> {
      person.once('value', (snapshot)=>{
        data.fire_data = snapshot.val()
      })
    }
    onMounted(()=> {
      getData()
    })
    return { data, getData }
  },
}
</script>
