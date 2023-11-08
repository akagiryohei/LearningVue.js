<template>
  <div id = "app">
    <HelloWorld title="slot">
      <p>***this is defalut text***</p>
    </HelloWorld> 
  </div>
</template> 

<script>
import HelloWorld from './components/HelloWorld.vue';

export default{
  name:'app',
  components:{
    HelloWorld
  },
  data(){
    return {
      message:'validate',
      num:100,
    }
  }
}
</script>