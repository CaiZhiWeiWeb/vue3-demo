<template>
  <div class="compose">
    <p>实时更新 <input type="text" v-model="keywords" /></p>

    <button @click="search">搜索</button>
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
const baseUrl =
  "https://www.fastmock.site/mock/b7b50ff246861168bb69ac525a0b52c7";

export default {
  data() {
    return {
      initList: [],
      keywords: "",
    };
  },
  props: {
    user: { type: String },
  },
  computed: {
    computedList() {
      return this.initList.filter((el) => el.name === "czw0");
    },
    searchList() {
      return this.initList.filter((el) => el.name.includes(this.keywords));
    },
  },
  watch: {
    user: "getList",
  },
  methods: {
    async getList() {
      let res = await axios.get(`${baseUrl}/shop/list`, { user: this.user });
      this.initList = res.data.data.list;
      console.log(this.initList, "initList");
    },
  },
  mounted() {
    this.getList();
  },
};
</script>

<style lang="css">
li {
  list-style: none;
}
</style>