<template>
  <div id="app">
    <Card
        :cardInfo="this.cardI"
        :faction="this.fact"
    />
<!--        style="transform: rotate(180deg)"
-->
    <PlayerTables :table="appStore"/>
    <Hand :hand="appStore.currentPlayer.hand" :faction="fact" />
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import Hand from "./components/Hand.vue";
import PlayerTables from "./components/PlayerTable.vue";
import HelloWorld from "./components/HelloWorld.vue";
// import publicStore from "./publicStore";
import Card from "./components/Card.vue";
import initState from "@/initState";
import GameState from "./milito-entities/GameState";
import IRCard from "./milito-entities/IRCard"
import FactionsEnum from "./milito-entities/FactionsEnum";

// "@/assets/ancient_british/slingers.jpeg"

@Options({
  components: {
    PlayerTables,
    HelloWorld,
    Hand,
    Card,
  },
  data() {
    return {
      msg1: "Welcome to Milito!",
      appStore: initState() as GameState,
      myImage: require("@/assets/ancient_british/ab_warband_medium_infantry.jpeg"),
      cardI: new IRCard({unitType: 'light_cavalry'}),
      fact: FactionsEnum.AncientBritish,
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
