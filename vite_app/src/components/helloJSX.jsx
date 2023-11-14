import { ref, reactive } from 'vue'

export default {
  name: 'HelloJSX',
    // ここでnameを宣言していないと18行目でnameを使えない
    // App.vueのparamsのnameのパラメータをこちらで受け止めている形？

  props:{
    name: String
  },
  setup(props) {
    const data = reactive({
      title: 'Router',
      msg: 'This is JSX component sample.',
    })
    return () => (
      <div class="alert alert-warning">
        <h1>{data.title} [{props.name}]</h1>
        <p>{data.msg}</p>
      </div>
    )
  }
}


