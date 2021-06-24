<template>
  <v-container class="container">
    <div class="titles">
      <h1>Congresso Científico Summertec</h1>
      <h2>Faça o cadastro para mais informações</h2>
    </div>
    <Form curso="Congresso Científico Summertec"/>
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