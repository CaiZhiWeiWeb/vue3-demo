<template>
  <div>test页面</div>
  <button @click="ctest">click</button>
  <p>reactive : {{ reactiveObj.count }}</p>
  <p>refs:</p>
</template>

<script>
import { reactive, ref, toRefs, computed, watchEffect } from "vue";
const refobj = ref(0);
console.log(refobj.value, "refobj.value");

const obj = reactive({
  count: 0,
});
console.log(obj.count, "obj.count");

const count1 = ref(0);
const state1 = reactive({
  count1,
});

console.log(state1.count1); // 0

state1.count1 = 1;
console.log(state1.count1, "count1");
console.log(count1.value, "count1.value"); // 1

const books = reactive([ref("Vue 3 Guide")]);
// 这里需要 .value
console.log(books[0].value, "books");
//解构
const book = reactive({
  autor: "czw",
  year: "2021",
  title: "vue",
  price: 0,
  desc: "you are",
});

let { autor, price } = toRefs(book);
price.value = 10;
console.log(autor.value, price.value, book.price, "czwtest");

//computed
const ct = ref(1);
const plusOne = computed(() => ct.value++);

console.log(plusOne.value, 'plusOne.value'); // 2

//wacth
const count2 = ref(0)
watchEffect(() => console.log(count2.value,'count2'))
// -> logs 0

setTimeout(() => {
  count2.value++
  // -> logs 1
}, 2000)

export default {
  setup() {
    const reactiveObj = reactive({
      count: 0,
    });
    const refobjSetup = ref(0);
    return {
      reactiveObj,
      refobjSetup,
    };
  },
  methods: {
    ctest() {
      this.state.count = 1;
    },
  },
  created() {
    console.log(this.reactiveObj.count, "reactiveObj.count");
    console.log(this.refobjSetup, "refobjSetup");
  },
};
</script>