<template>
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
        <v-card class="mx-auto" max-width="400" tile v-for="(item, index) in list" :key="index">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>
                <p class="text-center">{{item}}</p>
              </v-list-item-title>
              <v-list-item-subtitle>
                <v-btn color="error" class="mr-4" @click="deleteItem">Удалить дело</v-btn>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'TodoList',
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
    addToList() {
      this.list.push(this.message);
    },
    deleteItem(e) {
      const id = e.target.getAttribute('key');
      console.log(id);
      this.list.splice(id, 1);
    },
  },
};
</script>
