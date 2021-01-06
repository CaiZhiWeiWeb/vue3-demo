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
import axios from "axios";
import { ref, computed, toRefs, onMounted, watch } from "vue";
const baseUrl =
  "https://www.fastmock.site/mock/b7b50ff246861168bb69ac525a0b52c7";

export default {
  props: {
    user: { type: String },
  },
  setup(props) {
    const { user } = toRefs(props);
    const keywords = ref("");
    const initList = ref([]);

    const getList = async () => {
      let res = await axios.get(`${baseUrl}/shop/list`, { user: user.value });
      initList.value = res.data.data.list;
    };

    onMounted(getList);

    watch(user, getList);

    const searchList = computed(() =>
      initList.value.filter((el) => el.name.includes(keywords.value))
    );

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