<template>
  <ul id="hand">
    <li v-for="(x, index) in hand" :key="index">
      <Card :pos="x" @click="doSomething(index)"/>
      <!--      <Placeholder/>-->
    </li>
  </ul>
</template>

<script lang="ts">
import Card from "./Card.vue";
import publicStore from "@/publicStore";
import {Options, Vue} from "vue-class-component";
// import Placeholder from "@/components/Placeholder";

@Options({
  props: {
    hand: Array
  },
  components: {
    // Placeholder,
    Card,
  },
  methods: {
    doSomething: function (index: number) {
      publicStore.clickOnHand(index)
      console.log(index)
      return "DSAD"
    },
  },
})

export default class Hand extends Vue {
  hand!: Array<number>;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul#hand li {
  display: inline;
  list-style: none;
  background-color: dimgrey;
}
</style>
