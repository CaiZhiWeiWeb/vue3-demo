import axios from "axios";
import {
  ref,
} from "vue"

const baseUrl =
  "https://www.fastmock.site/mock/b7b50ff246861168bb69ac525a0b52c7";

export default function initFun(user) {
  const initList = ref([]);
  const getList = async () => {
    let res = await axios.get(`${baseUrl}/shop/list`, {
      user: user.value
    });
    initList.value = res.data.data.list;
  };

  return {
    initList,
    getList
  }
}