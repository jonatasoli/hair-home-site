<template>
  <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      class="form">
        <div class="container_two">
      <v-container class="container_three">
        <v-text-field
        label="Nome"
        :rules="nameRules"
        v-model="form.name"
        filled
        rounded
        dense
        required>
        </v-text-field>
        <v-text-field
        label="Email"
        :rules="emailRules"
        v-model="form.email"
         filled
        rounded
        dense
        required>
        </v-text-field>
          <div class="phone">
            <vue-country-code
              @onSelect="onSelect"
              :preferredCountries="['br', 'us', 'gb']">
            </vue-country-code>
            <v-col cols="12" sm="6" md="2">
            <v-text-field
            v-model="countryCode"
            label="País" 
            readonly
            filled
            rounded
            dense></v-text-field>

            </v-col>
            <v-text-field
            label="Telefone"
            v-model="form.phone"
            :rules="phoneRules"
            filled
            rounded
            dense
            required>
          </v-text-field>
          </div>
        <v-text-field
        :rules="contRules"
        required
        filled
        rounded
        dense
        label="8 + 10 =">
        </v-text-field>
      </v-container>
      <v-radio-group v-model="form.option" label="Qual é o seu principal desafio como cabeleleiro(a)?">
          <v-radio value="Loiros" label="Loiros"></v-radio>
          <v-radio value="Corte" label="Corte"></v-radio>
          <v-radio value="Penteados" label="Penteados"></v-radio>
          <v-radio value="Visagismo" label="Visagismo"></v-radio>
          <v-radio value="Alisantes e Ondulantes" label="Alisantes e Ondulantes"></v-radio>
          <v-radio value="Outros" label="Outros"></v-radio>
          <v-radio value="Todos acima" label="Todos acima"></v-radio>
          <v-radio value="Nenhum" label="Nenhum"></v-radio>
        </v-radio-group>
      </div>
      <v-card 
      color="black"
      class="d-flex justify-center">
      <v-btn
        x-large
        color="pink"
       @click="validate">Confirmar</v-btn>

      </v-card>
    </v-form>
</template>

<script>
import VueCountryCode from "vue-country-code-select";
import { mapActions } from "vuex";
export default {
    props: ['curso'],
    components: { VueCountryCode },
    data() {
    return {
      countryCode: '',
      form: {
        name: '',
        email: '',
        phone: '',
        course: '',
        option: null,
      },
      valid: true,
      nameRules: [
        v => !!v || 'Campo Obrigatório',
        v => (v && v.length >= 5) || 'Nome deve conter mais de 5 caracteres',
      ],
      emailRules: [
      v => !!v || 'Campo Obrigatório',
      v => /.+@.+\..+/.test(v) || 'Email inválido',
      ],
      phoneRules: [
        v => !!v || 'Campo Obrigatório',
        v => (v && v.length >= 11) || 'Telefone deve 11 números',
      ],
      contRules: [
        v => !!v || 'Campo Obrigatório',
        v => (v == 18) || 'Resultado incorreto'
      ]
    }
  },
  methods: {
    ...mapActions(["postMail"]),
    validate () {
      if (this.$refs.form.validate()) {
        this.form.phone = this.countryCode + this.form.phone
        this.form.course = this.curso
        console.log(this.form)
        this.postMail(this.form)
        window.alert("Obrigada! Entraremos em contato em breve!")
      }
    },
    onSelect({dialCode}) {
    return this.countryCode = `+${dialCode}`;
  },
  }

}
</script>

<style scoped>
.form {
  margin-top: 50px;
}
.phone {
  display: flex;
  align-items: center;
  justify-content: center;
}
.container_two {
  display: flex;
}
.container_three {
  display: block;
}
>>> v-btn {
  margin: 0 auto
}

>>> .v-label {
  font-size: 18px;
  color: #FFB74D; 
}
>>>.v-input--radio-group legend.v-label {
  font-size: 18px;
}
>>> .vue-country-select .dropdown-item {
  background: black;
}
>>> .vue-country-select {
  margin-bottom: 20px;
  border-style: none;
}

</style>

