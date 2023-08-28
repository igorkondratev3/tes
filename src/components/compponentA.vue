<template>
  <div>
    Я напишу тебе письмо
    {{ counter }}
    <button @click="inc">Увеличить</button>
    {{ comA }}
    {{ this.$parent.message }}
  </div>
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

<style></style>
