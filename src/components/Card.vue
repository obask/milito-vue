<template>
  <div class="cardontable" v-bind:style="ololo"></div>
</template>

<script lang="ts">

import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    pos: Number
  },
  computed: {
    ololo: function(): string {
      return "background-position:-" + 80 * this.pos + "px -0px";
    }
  }
})

export default class Card extends Vue {
  pos!: number;
}

</script>

<style scoped>
.cardontable {
  /*position: absolute;*/
  display: inline-block;
  margin-top: 2px;
  margin-left: 38px;
  width: 80px;
  height: 112px;
  background-image: url("../assets/cards.jpg");
  background-size: 320px 224px;
}
</style>
