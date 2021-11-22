<template>
  <v-app>
    <v-row justify="center">
      <v-form ref="form" v-model="valid" lazy-validation style="width: 400px">
        <v-col cols="12">
          <v-text-field
            v-model="name"
            label="Nome"
            required
            outlined
            dense
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="surname"
            label="Sobrenome"
            required
            outlined
            dense
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="birthDate"
            label="Data de nascimento"
            required
            outlined
            dense
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-btn
            block
            x-large
            :disabled="!valid"
            color="#00C20D"
            dark
            class="mr-4"
            @click="snackbar = true"
          >
            Enviar
          </v-btn>
        </v-col>
      </v-form>
    </v-row>

    <v-snackbar v-model="snackbar" :timeout="2000" color="green">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          X
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    surname: "",
    birthDate: "",
    snackbar: false,
    text: "Seus dados foram enviados!",
  }),

  methods: {
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style lang="stylus">
.titulo {
  font-size: 65px;
  font-family: 'Nunito', cursive;
  color: #707070;
  font-weight: 550;
}

.subtitulo {
  font-size: 26px;
  font-family: 'Nunito', cursive;
  color: #707070;
  font-weight: 200;
  font-style: italic;
}

.v-application {
background-color: #FFF3F3 !important;
}

.v-input__slot {
  background-color: white !important;
}

.titulos {
  line-height:
}
</style>
