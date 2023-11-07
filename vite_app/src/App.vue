
<template>
  <div id = "app">
    <helloJSX title="OK, Vue3" msg="※属性で設定したメッセージ。" />
  </div>
</template> 

<script>
import helloJSX from './components/helloJSX.jsx';

export default{
  name:'app',
  components:{
    helloJSX
  }
}
</script>