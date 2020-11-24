<template>
  <div id="playertables">
    <table>
      <tr>
        <td v-for="(x, index) in table.enemy_row_2" :key="index">
          <PlaceHolder />
        </td>
      </tr>
      <tr>
        <td v-for="(x, index) in table.enemy_row_2" :key="index">
          <PlaceHolder />
        </td>
      </tr>
      <tr>
        <td v-for="(x, index) in table.territory_row" :key="index">
          <Card
            @click.native="doSomething(index)"
            v-if="-1 != x"
            :pos="x"
            style="transform: rotate(90deg)"
          />
          <PlaceHolder v-else />
        </td>
      </tr>
      <tr>
        <td v-for="(x, index) in table.player_row_1" :key="index">
          <Card @click.native="doSomething(index)" v-if="-1 != x" :pos="x" />
          <PlaceHolder @click.native="doSomething(index)" v-else />
        </td>
      </tr>
      <tr>
        <td v-for="(x, index) in table.player_row_2" :key="index">
          <Card @click.native="doSomething(index)" v-if="-1 != x" :pos="x" />
          <PlaceHolder @click.native="doSomething(index)" v-else />
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import PlaceHolder from "./PlaceHolder.vue";
import Card from "./Card.vue";
import publicStore from "../publicStore";
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    Card,
    PlaceHolder
  },
  props: {
    table: Object
  },
  methods: {
    doSomething: function(index: number) {
      publicStore.clickOnPlayerRow(index);
      console.log(index);
      return "DSAD";
    }
  }
})
export default class PlayerTable extends Vue {
  table!: Record<string, Array<number>>;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#playertables {
  position: relative;
  width: 666px;
  height: 666px;
  background-color: burlywood;
}
</style>
