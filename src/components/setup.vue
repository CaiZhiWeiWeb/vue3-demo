<template>
  <div class="setUp">
    <header>
      <slot name="header"></slot>
    </header>
    <section>
      <slot></slot>
    </section>
    <footer>
      <slot name="footer"></slot>
    </footer>
    <p>{{userLocation}}--{{userGeolocation.long}}</p>
    <button @click="updatelocation">更换</button>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  setup(props, context) {
    console.log(context.slots.default()[0]);
    const userLocation = inject('location');
    const userGeolocation = inject('geolocation');
    const updatelocation =  inject('updatelocation');
    console.log(userLocation.value);
    // const readersNumber = ref(0);
    // const book = reactive({ title: "Vue 3 Guide" });
    // Please note that we need to explicitly expose ref value here
    // return () => h("div", [readersNumber.value, book.title]);
    return {
      userLocation,
      userGeolocation,
      updatelocation
    }
  },
};
</script>