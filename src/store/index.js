import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoList: [
      'Найти кота',
      'починить',
    ],
  },
  getters: {
    todoList: (state) => state.todoList,
  },
  mutations: {
    SET_TODOLIST(state, todoItem) {
      state.todoList.push(todoItem);
    },
    DELETE_ITEM(state, index) {
      state.todoList.splice(index, 1);
    },
  },
});
