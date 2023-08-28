<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
-->
    {{ message }}
    <input v-model="message" />
    <div v-bind:title="message2">
      Hover your mouse over me for a few seconds to see my dynamically bound
      title!
    </div>
    <div v-if="seen">Now you see me</div>
    <ol>
      <li v-for="todo in todos" :key="todo.text">
        {{ todo.text }}
      </li>
    </ol>
    <button ref="hjk" :disabled="false" v-on:click="reverseMessage">
      Reverse Message
    </button>
    {{ reversedMessage }}
    <input type="checkbox" v-model="toggle" true-value="yes" false-value="no" />
    {{ toggle }}
    <ComponentA :comA="2" @dfg-gfd="fun" />
    {{ a }}
    <button @click="fgt">Yf</button>
    {{ arr }}
    {{ sum }}
    <button @click="ch">change</button>
    {{ this.$store.state.count }}
    <button @click="inc">knopka</button>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import ComponentA from "@/components/compponentA.vue";
import { mixinA, mixinB } from "@/mixins/hell.js";

export default {
  name: "HomeView",
  components: {
    ComponentA,
  },
  created: function () {
    console.log(this.reversedMessage);
  },
  mounted: function () {
    console.log(this.$refs.hjk.style);
  },
  data() {
    return {
      arr: [1, 2, 3, 4],
      toggle: "no",
      message: "hello",
      message2: "You loaded this page on " + new Date().toLocaleString(),
      seen: true,
      todos: [
        { text: "Learn JavaScript" },
        { text: "Learn Vue" },
        { text: "Build something awesome" },
      ],
    };
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split("").reverse().join("");
    },
    fun: function (v) {
      console.log(v);
    },
    fgt: function () {
      console.log(this.a);
      console.log(this.$data);
    },
    ch: function () {
      //this.arr[0] = 10;
      this.$set(this.arr, 0, 10);
    },
    inc: function () {
      this.$store.commit("increment");
    },
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split("").reverse().join("");
    },
    sum: function () {
      return this.arr[0] + this.arr[1];
    },
  },
  mixins: [mixinA, mixinB],
};
</script>
