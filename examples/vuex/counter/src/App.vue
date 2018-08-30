<template>
  <div id="app">
    <button @click.prevent="increment">
      <img class="logo" alt="Vue logo" src="./assets/logo.png">
    </button>
    <span> {{ currentDetails }} </span>
  </div>
</template>

<script>

export default {
  name: 'app',
  computed: {
    currentDetails() {
      return `${this.$store.state.count} (${this.$store.getters.isEvenOrOdd})`;
    }
  },
  methods: {
    increment() {
      this.$store.dispatch('increment');
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  margin: 0 auto;
  width: 150px;

  .logo { height: 32px; width: 32px; }
}
</style>
