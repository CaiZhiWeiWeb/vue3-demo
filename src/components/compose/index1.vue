<template>
  <div class="compose">
    <p>实时更新 <input type="text" v-model="keywords" /></p>

    <button @click="search">搜索</button>
    <ul>
      <h2>initList:</h2>
      <li v-for="(item, index) in initList" :key="index">
        <p>name:{{ item.name }}</p>
        <p>age:{{ item.age }}</p>
        <p>hobby:{{ item.hobby }}</p>
      </li>
    </ul>
    <ul>
      <h2>searchList:</h2>
      <li v-for="(item, index) in searchList" :key="index">
        <p>name:{{ item.name }}</p>
        <p>age:{{ item.age }}</p>
        <p>hobby:{{ item.hobby }}</p>
      </li>
    </ul>
    <ul>
      <h2>computedList:</h2>
      <li v-for="(item, index) in computedList" :key="index">
        <p>name:{{ item.name }}</p>
        <p>age:{{ item.age }}</p>
        <p>hobby:{{ item.hobby }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import {computed, toRefs, onMounted, watch} from "vue";
import initFun from "./init";
import seachListFun from "./search";

export default {
  props: {
    user: { type: String },
  },
  setup(props) {
    const { user } = toRefs(props);
    const { initList, getList } = initFun(user);
    const { keywords, searchList } = seachListFun(initList);

    onMounted(getList);
    watch(user, getList);

    const computedList = computed(() =>
      initList.value.filter((el) => el.name === "czw0")
    );

    return {
      keywords,
      initList,
      getList,
      searchList,
      computedList,
    };
  },
};
</script>

<style lang="css">
li {
  list-style: none;
}
</style>