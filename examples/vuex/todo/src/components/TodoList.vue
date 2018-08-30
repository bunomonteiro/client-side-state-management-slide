<template>
  <ul class="todo-list has-text-left">
    <li v-for="item in items" :key="item.id">
      <TodoItem v-bind="item" />
    </li>
  </ul>
</template>

<script>
import EventBus from '@/EventBus.js';
import TodoItem from '@/components/TodoItem.vue';

export default {
  name: 'todoList',
  components: { TodoItem },
  data() {
    return {
      items: [],
    };
  },
  methods: {
    showAll() {
      this.items = this.$store.getters['todo/all'];
    },
    showDone() {
      this.items = this.$store.getters['todo/done'];
    },
    showTodo() {
      this.items = this.$store.getters['todo/todo'];
    },
  },
  mounted() {
    this.showAll();
    
    EventBus.$on('showAll', this.showAll);
    EventBus.$on('showDone', this.showDone);
    EventBus.$on('showTodo', this.showTodo);
  },
}
</script>


<style lang="scss" scoped>
.todo-list {
  li {
    border: 1px solid #eee;
    padding: 0 10px;
  }
}
</style>
