<template>
  <div class="item">
    <label class="checkbox">
      <input type="checkbox" :data-id="id" :checked="isDone" @change="toggle">
      {{ title }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'item',
  props: {
    id: {
      type: String,
      default: '0',
      required: true,
    },
    title: {
      type: String,
      default: '- no title -',
      required: true,
    },
    isDone: {
      type: Boolean,
      default: false,
      required: false,
    }
  },
  methods: {
    toggle() {
      let action = !this.isDone ? 'todo/done' : 'todo/undo';      
      this.$store.dispatch(action, this.id);
    }
  },
}
</script>

<style lang="scss" scoped>
label {
  padding: 10px 5px;
  width: 100%;
}
</style>


