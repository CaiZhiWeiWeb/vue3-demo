<template>
  <div ref="root">
    this is a root element
    <h2 ref="count">222</h2>
    {{count1}}
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
export default {
  setup(){
    const root = ref(null)
    const count = ref(null)
    const count1 = ref("czw")
    onMounted(()=>{
      console.log(root.value);
      console.log(count.value);
    })

    return {
      root,
      count,
      count1
    }
  }
}
</script>