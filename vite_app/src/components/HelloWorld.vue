<template>
  <div className="alert alert-primary">
    <h2>{{ title }}</h2>
    <p ref="msg">{{ message }}</p>
    <button class="btn btn-primary" v-on:click="DoAction">Click</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      title:'HelloWorld',
      message:'This is sample massage.',
    }
  },
  mounted(){
    this.counter = 0
  },
  methods:{
    DoAction(){
      this.counter++
      let element = this.$refs.msg.innerHTML
      // this.$refs.msg の中身：<p> This is sample massage. <h6>counted:1</h6> </p>
      // this.$refs.msg.innerHTMLの中身：This is sample massage.
      this.$refs.msg.innerHTML += '<h6>counted:'+ this.counter + '</h6>'
    }
  }
}
</script>
