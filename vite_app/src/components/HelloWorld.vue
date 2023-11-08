<template>
  <div class="alert alert-primary">
    <h1>{{ title }}</h1>
    <pre v-on:click="clear">{{ message }}</pre>
    <hr>
    <div>
      <input type="text" v-on:keydown="type" class="form-control">
    </div>
  </div>
</template>

<script>
export default{
  name:'HelloWorld',
  data:function(){
    return{
      title:'Event',
      message:'',
    }
  },
  methods:{
    // eventの中にはkeyboadeventというものが入ってる
    type(event){
      this.message += event.key + ''
      if(event.key == "Escape"){
        this.message = ''
      }
      // <input>の中身をその都度からにしている？
      event.target.value = ''
    },
    clear(){
      this.message=''
    }
  },
}
</script>

