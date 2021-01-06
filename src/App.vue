<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <!-- <Demo /> -->
  <!-- <Test /> -->
  <!-- <WacthEffect/> -->
  <!-- <ZuheApi user="caizhiwei"/> -->
  <Compose user="1" />
  <SetUp>
    <template #header>
      <div class="header">我是header</div>
    </template>
    <div class="section">我是section</div>
    <template #footer>
      <div class="footer">我是footer</div>
    </template>
  </SetUp>
  <Tem/>
</template>

<script>
import { provide, ref, reactive, readonly } from "vue";
// import HelloWorld from "./components/HelloWorld.vue";
// import Demo from "./components/demo";
import Compose from "./components/compose/index1";
// import Test from "./components/test";
// import WacthEffect  from './components/WacthEffect'
// import ZuheApi from './components/zuheApi'
import SetUp from "./components/setup";
import Tem from "./components/tem"

export default {
  name: "App",
  components: {
    // HelloWorld,
    // Demo,
    Compose,
    // Test,
    // WacthEffect,
    // ZuheApi,
    SetUp,
    Tem
  },
  setup() {
    const location = ref("North Pole");
    const geolocation = reactive({
      long: 90,
      lat: 135,
    });
    const updatelocation = () => {
      location.value = "South Pole";
    };
    provide("location", readonly(location));
    provide("geolocation", readonly(geolocation));
    provide("updatelocation", updatelocation);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
