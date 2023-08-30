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
    {{ $vuetify.breakpoint.mobileBreakpoint }}
    <hello-world />
    <v-alert
      border="bottom"
      color="orange"
      dismissible
      type="error"
      class="alert-moi"
      @click="inc"
      >dhgfhfg</v-alert
    >
    <p class="red white--text">sdfdsfdsfsdflkjsdlfjsdlfjdslfjkl</p>
    <p class="pink lighten-4 red--text text-darken-4">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium,
      corrupti earum? Veniam quaerat saepe, exercitationem dolor omnis
      voluptatem, molestias nostrum magni vero laudantium architecto magnam
      atque ex rerum rem earum.d
    </p>
    <h1 class="display-4">Massive disp</h1>
    <p class="headline">this is a headline</p>
    <p class="subheading">this is a sub-heading</p>
    <p class="caption">this is a caption</p>

    <div class="buttons">
      <v-btn class="pink white--text">click me</v-btn>
      <v-btn depressed color="pink">click me</v-btn>
      <v-btn text color="pink">click me</v-btn>

      <v-btn depressed class="pink white--text">
        <v-icon left>mdi-email</v-icon>
        <span>email me</span>
      </v-btn>

      <v-btn depressed small class="pink white--text">
        <v-icon left small>mdi-email</v-icon>
        <span>email me</span>
      </v-btn>

      <v-btn depressed large class="pink white--text">
        <span>email me</span>
        <v-icon right large>mdi-email</v-icon>
      </v-btn>

      <v-btn fab dark small depressed color="purple">
        <v-icon dark>mdi-heart</v-icon>
      </v-btn>
    </div>
    <v-btn class="hidden-md-and-down">click med</v-btn>

    <v-btn class="hidden-md-and-up">click meu</v-btn>
    <v-btn class="hidden-sm-only">click meo</v-btn>

    <v-app-bar text app>
      <v-app-bar-nav-icon
        class="grey--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Ninja</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text color="grey">
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" class="indigo">
      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-item-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{
              link.text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import ComponentA from "@/components/compponentA.vue";
import HelloWorld from "../components/HelloWorld.vue";
import { mixinA, mixinB } from "@/mixins/hell.js";

export default {
  name: "HomeView",
  components: {
    ComponentA,
    HelloWorld,
  },
  created: function () {
    console.log(this.reversedMessage);
  },
  mounted: function () {
    console.log(this.$refs.hjk.style);
  },
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-view-dashboard", text: "Dashboard", route: "/" },
        { icon: "mdi-folder", text: "My Projects", route: "/projects" },
        { icon: "mdi-account", text: "Team", route: "/team" },
      ],
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

<style>
.alert-moi {
  width: 300px;
}

.buttons {
  display: flex;
  gap: 16px;
}
</style>
