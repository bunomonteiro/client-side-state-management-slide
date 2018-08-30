const todoModule = {
  namespaced: true,
  state: {
    todoItems: [],
  },
  mutations: {
    add(state, title) {
      let item = {
        id: Math.random().toString().replace('.', ''),
        isDone: false,
        title
      };
      state.todoItems.push(item);
    },
    remove(state, id) {
      if(id){
        state.todoItems = state.todoItems.filter(i => i.id != id);
      }
    },
    done(state, id) {
      state.todoItems = state.todoItems.map(i => {
        if(i.id === id){
          i.isDone = true;
          return i;
        }
        
        return i;
      });
    },
    undo(state, id){
      state.todoItems = state.todoItems.map(i => {
        if(i.id === id){
          i.isDone = false;
          return i;
        }
        
        return i;
      });
    }
  },
  actions: {
    add: ({ commit }, title) => commit('add', title),
    remove: ({ commit }, id) => commit('remove', id),
    done: ({ commit }, id) => commit('done', id),
    undo: ({ commit }, id) => commit('undo', id),
  },
  getters: {
    done(state) {
      return state.todoItems.filter(i => i.isDone) || [];
    },
    todo(state) {
      return state.todoItems.filter(i => !i.isDone) || [];
    },
    all(state) {
      return state.todoItems;
    }
  }
}

export default todoModule;