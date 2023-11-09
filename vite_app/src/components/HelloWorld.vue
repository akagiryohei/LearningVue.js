<template>
  <div class="alert alert-primary">
    <h2>{{ title }}</h2>
    <p>{{ message }}</p>
    <button class="btn btn-primary m-3" v-on:click="doAction">{{ btn }}</button>
    <transition name="transit">
      <p v-if="flg" class="alert alert-light h5">
        Transition 
      </p>
    </transition>
  </div>
</template>

<script>
export default{
  name:'HelloWorld',
  data(){
    return{
      title:'Trans&Anim',
      message:'This is Transition sample!',
      flg:true,
      btn:'Show/Hide',
    }
  },
  methods:{
    doAction(){
      this.flg = !this.flg
    },
  },
}
</script>


