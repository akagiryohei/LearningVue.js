<template>
  <div class="alert alert-primary">
    <h1>{{ data.title }}</h1>
    <p class="mt-3 h5">{{ data.msg }}</p>
  </div>
</template>

<script>
import { ref, reactive} from 'vue'
export default{
  name:'HelloWorld',
  // setupで変数を用意できる
  setup(props,context){
    // reactive:リアクティブ可能な値のコピー
    const data = reactive({
      title:'HelloWorld',
      msg:'This is HelloWorld component.',
    })
    return{
      data
    }
  }
}
</script>