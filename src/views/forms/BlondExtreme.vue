<template>
  <v-container class="container">
    <div class="titles">
      <h1>Blond Extreme</h1>
      <h2>Faça o cadastro para mais informações</h2>
    </div>
    <Form curso="Blond Extreme"/>
  </v-container>
</template>

<script>
import Form from "../../components/Form.vue"

export default {
  components: {Form},
}
</script>

<style scoped>
.container {
  background: black;
}
.titles {
  text-align: center;
  color: #FFB74D;
}

</style>