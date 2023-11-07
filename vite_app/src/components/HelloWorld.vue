<!-- <template>
  <div class="alert alert-info">
    <h2>{{ title }}</h2>
    <p>{{ message }}</p>
  </div>
</template> -->

<script>
import { h } from 'vue'
export default{
  name:'HelloWorld',
  data(){
    return{
      title: 'HelloWorld',
      message:'This is sample message.'
    }
  },
  render(){
    return h('div',{
      class:'alert alert-warning'
    },
    [
      h('h2', this.title),
      h('p', this.message)
    ])
  }
}

</script>