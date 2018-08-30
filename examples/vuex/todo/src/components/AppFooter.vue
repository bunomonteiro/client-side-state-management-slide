<template>
  <footer class="app-footer">
    <div class="columns">
      <div class="column is-4">
        <span class="is-size-7">{{itemsLeftMessage}}</span>
      </div>

      <div class="column is-2">
        <a class="button is-light is-small" @click.prevent="showAll">All</a>
      </div>
      
      <div class="column is-3">
        <a class="button is-light is-small"  @click.prevent="showTodo">Active</a>
      </div>

      <div class="column is-2">
        <a class="button is-light is-small"  @click.prevent="showDone">Complete</a>
      </div>
    </div>
  </footer>
</template>

<script>
import EventBus from '@/EventBus.js';

export default {
  name: 'appFooter',
  computed: {
    itemsLeftMessage() {
      let count = this.$store.getters['todo/todo'].length;
      return count <= 1 ? `${count} item left` : `${count} items left`;
    }
  },
  methods: {
    showAll:  () => EventBus.$emit('showAll'),
    showTodo: () => EventBus.$emit('showTodo'),
    showDone: () => EventBus.$emit('showDone'),
  }
}
</script>


<style lang="scss" scoped>
.app-footer{
  background: #fff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 10px 5px;
}
</style>

