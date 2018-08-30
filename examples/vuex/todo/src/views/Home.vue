<template>
  <div class="home">
    <div class="field">
      <div class="control has-icons-left">
        <input class="input is-large" type="text" placeholder="What needs to be done?" v-model="newItem" @keyup.enter="createItem">
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
      </div>
    </div>
    <TodoList />
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue';
export default {
  name: 'home',
  components: { TodoList },
  data() {
    return {
      newItem: '',
    };
  },  
  methods: {
    createItem() {
      if(this.newItem.trim().length > 0) {
        this.$store.dispatch('todo/add', this.newItem);
        this.newItem = '';
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.home{  
  background: #fff;
  
  .field {
    margin-bottom: 0;
  }
}
</style>
