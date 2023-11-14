<template>
  <div class="alert alert-primary">
    <h1>{{data.title}}</h1>
    <p class="mt-3 h5">{{$store.state.message}}</p>
    <hr>
    <!-- type:'count'これはstore.jsで定義したミューテーション名です。 -->
    <div class="alert alert-secondary"
      @click.exact="$store.commit({type:'count',message:'add 1!',add:1})"
      @click.shift.exact="$store.commit({type:'count',message:'add 5!',add:5})"
      @click.ctrl.exact="$store.commit({type:'count',message:'add 10!',add:10})">
      <a class="h5"
      @click.stop="$store.commit('reset')">
        clicked:{{ $store.state.counter }}
      </a>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  setup(props) {
    const data = reactive({
      title: 'Vuex',
    })
    return {
      data
    }
  }
}
</script>
