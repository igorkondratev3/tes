<template>
  <v-main class="mai">
    <div>sdfsdf</div>
    <div>sdfdsfsdf</div>
    Я напишу тебе письмо
    {{ counter }}
    <button @click="inc">Увеличить</button>
    <span> {{ comA }}</span>
    {{ this.$parent.message }}
  </v-main>
</template>

<script>
export default {
  name: "ComponentA",
  props: {
    comA: Number,
  },
  data() {
    return {
      counter: 1,
    };
  },
  methods: {
    inc: function () {
      this.counter += this.comA;
      this.$emit("dfg-gfd", 1);
    },
  },
};
</script>

<style>
.mai {
  display: flex;
  color: red;
}
</style>
