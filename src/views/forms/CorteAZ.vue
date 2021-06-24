<template>
  <v-container class="container">
    <div class="titles">
      <h1>Corte de A a Z</h1>
      <h2>Faça o cadastro para mais informações</h2>
    </div>
    <Form curso="Corte de A a Z"/>
  </v-container>
</template>

<script>
import Form from "../../components/Form.vue"

export default {
  components: {Form},
}
</script>

<style scoped>
.titles {
  text-align: center;
  color: #D99938;
}

</style>