<template>
  <v-app>
    <v-row class="text-center">
      <v-col>
        <v-btn
          height="200px"
          width="200px"
          tile
          class="mx-2"
          fab
          dark
          color="teal"
          to="/cadastro"
        >
          <v-icon x-large dark> mdi-format-list-bulleted-square </v-icon>
        </v-btn>
        <v-btn
          height="200px"
          width="200px"
          tile
          class="mx-2"
          fab
          dark
          color="indigo"
          to="/cadastro"
        >
          <v-icon x-large dark> mdi-plus </v-icon>
        </v-btn>
        <v-col
          ><v-btn
            height="200px"
            width="200px"
            tile=""
            class="mx-2"
            fab
            dark
            large
            color="cyan"
            to="/cadastro"
          >
            <v-icon x-large dark> mdi-pencil </v-icon>
          </v-btn>
          <v-btn
            height="200px"
            width="200px"
            tile
            class="mx-2"
            fab
            dark
            large
            color="purple"
            to="/cadastro"
          >
            <v-icon x-large dark> mdi-android </v-icon>
          </v-btn>
        </v-col>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  name: "home",
  component: {},
};
</script>
