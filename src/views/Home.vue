<template>
  <v-container>
    <v-row class="text-center">
    <v-col>
       <h1 v-text="description" class="text-center"></h1>
      <img v-bind:src="img_src">
         </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      description: 'Добро пожаловать в моё первое приложение на Vue с использованием библиотек Vuetify и Vue-router. Выберите раздел в меню сверху.',
      img_src: 'https://images.unsplash.com/photo-1593987011155-542d44e8660e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
    };
  },
};
</script>
