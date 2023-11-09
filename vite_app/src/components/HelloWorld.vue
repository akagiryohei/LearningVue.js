<template>
  <div class="alert alert-primary">
    <h1>{{title}}</h1>
    <p>{{message}}</p>
    <button class="btn btn-primary mb-3" v-on:click="doAction">
    Show/Hide
    </button>
    <transition name="transit" >
      <p v-if="flg" class="trans">Transition!</p>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function() {
    return {
      title:'Trans&Anim',
      message:'Transition Sample!',
      flg:true,
      btn:'Hide',
    }
  },
  methods:{
    doAction(){
      this.flg = !this.flg;
    },
  },
}
</script>


<style>
.trans{
  background-color: black;
  color:white;
  padding:10px;
  font-size:20pt;
}
.transit-enter-active{
  transition: 1.0s;
}
.transit-leave-active{
  transition: 1.0s;
  opacity: 0.5;
}
.transit-enter, .transit-leave-to{
  transform:rotateZ(360deg);
  opacity:0.1;
}
</style>


