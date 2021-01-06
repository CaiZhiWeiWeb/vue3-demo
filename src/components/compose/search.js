import {
  ref,
  computed
} from "vue"
export default function seachListFun(initList) {
  const keywords = ref("");
  const searchList = computed(() => initList.value.filter((el) => el.name.includes(keywords.value)))
  
  return {
    keywords,
    searchList
  }
}