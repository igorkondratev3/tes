<template>
  <v-main class="mai">
    <div>sdfsdf</div>
    <div>sdfdsfsdf</div>
    Я напишу тебе письмо
    {{ counter }}
    <button @click="inc">Увеличить</button>
    {{ a }}
    <span> {{ comA }}</span>
    {{ this.$parent.message }}
  </v-main>
</template>

<script>
import { mixinA } from "@/mixins/hell.js";

export default {
  name: "ComponentA",
  props: {
    comA: Number,
  },
  data() {
    return {
      counter: 2,
    };
  },
  methods: {
    inc: function () {
      this.counter += this.comA;
      this.$emit("dfg-gfd", 1);
    },
  },
  mixins: [mixinA],
};
</script>

<style>
.mai {
  display: flex;
  color: red;
}
</style>
