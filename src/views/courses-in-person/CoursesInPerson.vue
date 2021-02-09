<template>
  <v-app>
      <NavBar />
      <v-container>
          <h1>Cursos Presencias</h1>
          <v-container class="cards">
              <v-card class="mx-auto" max-width="344">
                  <v-card-text>
                      <p class=" display-1 text--primary">07/02/2021</p>
                        <p class="display-1 text--primary">
                            Pós Latin Science
                        </p>
                        <p>6 dias</p>
                        <div class="text--primary">
                          Buenos Aires - Argentina
                        </div>
                  </v-card-text>
              </v-card>
               <v-card class="mx-auto" max-width="344">
                  <v-card-text>
                      <p class=" display-1 text--primary">10/03/2021</p>
                        <p class="display-1 text--primary">
                            Intercâmbio de Corte
                        </p>
                        <p>10 dias</p>
                        <div class="text--primary">
                          Lisboa - Portugal
                        </div>
                  </v-card-text>
              </v-card>
               <v-card class="mx-auto" max-width="344">
                  <v-card-text>
                      <p class=" display-1 text--primary">21/03/2021</p>
                        <p class="display-1 text--primary">
                            Intercâmbio mentoria.
                        </p>
                        <p>6 dias</p>
                        <div class="text--primary">
                          Espanha
                        </div>
                  </v-card-text>
              </v-card>
          </v-container>
          <v-container class="v-btn">
          <v-btn
          class="btn"
          x-large
           color="orange lighten-2" text elevation="10"
           href="https://hairschool.graciellegatto.com.br/whatsapp"
           target="_blank">
            Saiba mais sobre os nossos cursos</v-btn>
        
          </v-container>
      </v-container>
      <Footer />
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue"
import Footer from "@/components/Footer.vue"
export default {
    components: { NavBar, Footer},
 
}
</script>

<style scoped>
h1 {
    text-align: center;
    margin: 40px 0;
    color: #FFB74D;
    font-size: 36px;
}
.cards {
    display: flex;
    margin-bottom: 20px;
}
.v-btn {
    display: flex;
}
.btn {
    font-size: 18px;
    background-color:#202020;
    margin-bottom: 30px;
}
</style>