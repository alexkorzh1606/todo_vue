<template>
  <v-container>
                <v-row class="text-center">
        <v-col>
        <v-input>
          <v-col>
            <v-text-field v-model="message" label="Введите ваше дело сюда" required></v-text-field>
            <v-btn color="success" class="mr-4" block @click="addToList">Добавить новое дело</v-btn>
          </v-col>
        </v-input>
        <h4 class='title is-4'>Ваши дела</h4>
      </v-col>
    </v-row>
          <TodoItem v-for="(item, index) in list"
                    v-bind:key="index"
                    v-bind:title="item"
                    v-on:delete="deleteFromList(index)"
          />
  </v-container>
</template>

<script>
import TodoItem from '../components/TodoItem.vue';

export default {
  name: 'Todo',
  components: {
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
