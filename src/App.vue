<template>
  <v-app>
    <v-main>
        <v-container>
          <v-app-bar
            color="#6A76AB"
            dark
            src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1352&q=80"
          >
            <template v-slot:img="{ props }">
              <v-img
                v-bind="props"
                gradient="to top right, rgba(232,114,57,.7), rgba(2,20,74,.7)"
              ></v-img>
            </template>
            <v-toolbar-title class="d-flex justify-space-between" style="width: 100%">
              <!-- <v-row>
                <v-col> -->
                  <h1>ДЕЛА</h1>
                  <!-- </v-col>
                <v-col> -->
                  <h2>Дел в списке: {{todoList.length}}</h2>
                  <!-- </v-col>
              </v-row> -->
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <template v-slot:extension>
              <v-tabs align-with-title>
                <v-tab><router-link to="/" class="white--text">Главная</router-link></v-tab>
                <v-tab><router-link to="/todo" class="white--text">Дела</router-link></v-tab>
                <v-tab><router-link to="/about" class="white--text">
                О разработчике</router-link></v-tab>
                </v-tabs>
              </template>
            </v-app-bar>
          <router-view></router-view>
        </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'App',

  components: {
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
  computed: {
    ...mapGetters([
      'todoList',
    ]),
  },
};
</script>
