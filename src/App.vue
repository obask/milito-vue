<template>
  <div id="app">
    <PlayerTables :table="appStore.table"/>
    <Hand :hand="appStore.hand"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Hand from "./components/Hand.vue";
import PlayerTables from "./components/PlayerTable.vue";
import HelloWorld from "./components/HelloWorld.vue";
import publicStore from "./publicStore";

@Options({
  components: {
    PlayerTables,
    HelloWorld,
    Hand,
  },
  data() {
    return {
      msg1: "Welcome to Milito!",
      appStore: publicStore.state,
    }
  }

})
export default class App extends Vue {
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: rebeccapurple;
}
</style>
