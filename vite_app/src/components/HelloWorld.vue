<template>
  <div class="hello">
    <h1>{{title}}</h1>
    <p>{{message}}</p>
    <hr/>
    <button v-on:click="doAction">
    {{btn}}
    </button>
    <transition name="transit" 
        v-on:before-enter="startAction"
        v-on:before-leave="startAction"
        v-on:after-enter="endAction" 
        v-on:after-leave="endAction">
      <p v-if="flg" class="trans">Transition!</p>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    title:String,
  },
  data: function() {
    return {
      message:'Transition Sample!',
      flg:true,
      btn:'Hide',
    }
  },
  methods:{
    doAction: function(){
      this.flg = !this.flg
    },
    startAction: function(){
      if (this.flg){
        this.message = '現れます……'
      } else {
        this.message = '消えます……'
      }
    },
    endAction: function(){
      if (this.flg){
        this.btn = 'Hide'
        this.message = '現れました。'
      } else {
        this.btn = 'Show'
        this.message = '消えました。'
      }
    }
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
  transition:opacity 0.5s;
}
.transit-leave-active{
  transition: opacity 5.0s;
}
.transit-enter{
  opacity: 0;
}
.transit-enter-from{
  opacity:0;
}
.transit-enter-to{
  opacity: 1.0;
}
.transit-leave{
  opacity: 1.0;
}
.transit-leave-to{
  opacity: 0;
}
</style>


