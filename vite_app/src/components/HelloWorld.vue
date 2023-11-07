<template>
  <div class="alert alert-primary">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
    <hr>
    <div class="form-group text-left">
      <labal>* 2:</labal>
      <input type="number" v-model="a" class="form-control">
    </div>
    <div class="form-group text-left">
      <label>^ 2:</label>
      <input type="number" v-model="b" class="form-control">
    </div>
</div>
</template>

<script>
export default{
  name:'HelloWorld',
  props:{
    title:String,
  },
  data(){
    return{
      message:'算出プロパティの利用。',
      val:5,
    }
  },
  computed:{
    a:{
      get(){
        return this.val * 2
      },
      set(value){
        this.val = Math.floor(value / 2)
      },
    },
    b:{
      get(){
        return this.val * this.val
      },
      set(value){
        this.val = Math.floor(Math.sqrt(value))
      },
    },
    created(){
      this.val = 10
    },
  }
}

</script>