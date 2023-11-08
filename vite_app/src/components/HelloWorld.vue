<template>
  <div class="alert alert-primary">
    <h1>{{ title }}</h1>
    <pre>{{ message }}</pre>
    <hr>
    <div class="alert alert-light">
      <h3>Inner Slot</h3>
      <slot />
    </div>
  </div>
</template>

<script>
export default{
  name:'HelloWorld',
  data:function(){
    return{
      title:'Slot',
      message:'This is message.',
    }
  },
}
</script>


