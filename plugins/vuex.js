import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      todo: [
        {
          id: 'xyz',
          name: 'Study Nuxt',
          status: { done: false }
        }
      ],
    };
  },
  mutations: {
    ADD_NEW_TODO(state, todo) {
      state.todo.push(todo);
    },
    UPDATE_LIST(state, updatedTodo) {
      state.todo = updatedTodo;
    }
  },
  actions: {
    addNewTodo({ commit }, todo) {
      const randomId = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
      const newTodo = {
        id: randomId,
        name: todo,
        status: { done: false }
      };
      commit('ADD_NEW_TODO', newTodo);
    },
    updateTodoStatus({ commit, state }, id) {
      const updatedTodo = state.todo.map(item => {
        if (item.id == id) {
          item.status.done = true;
        }
        return item;
      });
      commit('UPDATE_LIST', updatedTodo);
    },
    removeDoneTodo({ commit, state }) {
      const updatedTodo = state.todo.filter(item => !item.status.done);
      commit('UPDATE_LIST', updatedTodo);
    },
    clearTodo({ commit }) {
      commit('UPDATE_LIST', []);
    },
    deleteTodo({ commit, state }, id) {
      const updatedTodo = state.todo.filter(item => item.id !== id);
      commit('UPDATE_LIST', updatedTodo);
    }
  }
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
});