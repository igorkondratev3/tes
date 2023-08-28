export const mixinA = {
  data() {
    return {
      a: 345,
    };
  },
  created: function () {
    console.log(this.b);
  },
};

export const mixinB = {
  data() {
    return {
      b: 346,
    };
  },
  created: function () {
    console.log(this.message);
  },
};
