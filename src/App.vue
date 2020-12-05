<template>
  <v-app>
    <v-main>
        <v-container>
    <v-row class="text-center">
      <v-col>
        <h1>ДЕЛА</h1>
        <v-input>
          <v-col>
            <v-text-field v-model="message" label="Введите ваше дело сюда" required></v-text-field>
            <v-btn color="success" class="mr-4" block @click="addToList">Добавить новое дело</v-btn>
          </v-col>
        </v-input>
        <h4 class='title is-4'>Ваши дела</h4>
      </v-col>
    </v-row>
  </v-container>
      <!-- <TodoList v-bind:message="message"
                v-on:add="addToList()"/> -->
      <TodoItem v-for="(item, index) in list"
                v-bind:key="index"
                v-bind:title="item"
                v-on:delete="deleteFromList(index)"
      />
    </v-main>
  </v-app>
</template>

<script>
// import TodoList from './components/TodoList.vue';
import TodoItem from './components/TodoItem.vue';

export default {
  name: 'App',

  components: {
    // TodoList,
    TodoItem,
  },

  data() {
    return {
      message: 'Купить крекер',
      list: [
        'Найти кота',
        'починить',
      ],
    };
  },

  methods: {
    deleteFromList(e) {
      this.list.splice(e, 1);
    },
    addToList() {
      this.list.push(this.message);
    },
  },
};
</script>
