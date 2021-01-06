<template>
  <div>{{ count }}</div>
  <button @click="cs">stop</button>
</template>

<script>
import { watchEffect, ref, watch, reactive } from "vue";
export default {
  setup() {
    const count = ref(0);
    const state = reactive({ count: 0 });

    const stop = watchEffect(
      () => {
        console.log(count.value);
      },
      {
        onTrack(e) {
          console.log(e, "track");
        },
        onTrigger(e) {
          console.log(e);
        },
      }
    );

    const stopWatch =watch(
      () => state.count,
      (count, prevCount) => {
        console.log(count, prevCount,'1');
      }
    );

    setInterval(() => {
      state.count++;
      count.value++;
      // -> logs 1
    }, 1000);
    // later
    // watchEffect(() => {
    //   console.log(count.value);
    // },{
    //   onTrigger(e){
    //     // eslint-disable-next-line no-debugger
    //     debugger
    //     console.log(e);
    //   }
    // });

    return {
      count,
      stop,
      stopWatch
    };
  },
  methods: {
    cs() {
      this.stop();
      this.stopWatch()
    },
  },
};
</script>