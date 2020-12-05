<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="mx-auto" max-width="400" tile>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>
                <p class="text-center">{{title}}</p>
              </v-list-item-title>
              <v-list-item-subtitle class="text-center">
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
  name: 'TodoItem',
  props: {
    title: String,
  },
  methods: {
    deleteItem() {
      this.$emit('delete');
    },
  },
};
</script>
