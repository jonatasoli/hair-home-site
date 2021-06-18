<template>
  <v-app>
      <NavBar />
      <v-container>
          <h1>Cursos Presencias</h1>
          <h2>Brasil</h2>
          <v-container class="cards">
            <v-col>
             <v-row>
              <v-card class="mx-auto  card" width="274">
                  <v-card-text>
                      <p class=" display-1 text--primary">29 e 30/07</p>
                        <p class="display-1 text--primary">
                            Corte de A-Z
                        </p>     
                  </v-card-text>
              </v-card>
               <v-card class="mx-auto  card" width="274">
                  <v-card-text>
                      <p class=" display-1 text--primary">01-02 e 03/08</p>
                        <p class="display-1 text--primary">
                            Master Training
                        </p>
                  </v-card-text>
              </v-card>
               <v-card class="mx-auto  card" width="274">
                  <v-card-text>
                      <p class=" display-1 text--primary">23 e 24/08</p>
                        <p class="display-1 text--primary">
                            Blond Extreme
                        </p>
                  </v-card-text>
              </v-card>
              </v-row>
              <v-row class="mt-12">
              <v-card class="mx-auto  card" width="274">
                  <v-card-text>
                      <p class=" display-1 text--primary">29/08 e 03/09</p>
                        <p class="display-1 text--primary">
                            Formação de Técnicos
                        </p>
                  </v-card-text>
              </v-card>
              <v-card class="mx-auto card" width="274">
                  <v-card-text>
                      <p class=" display-1 text--primary">20 a 23/09</p>
                        <p class="display-1 text--primary">
                            Overdose Color
                        </p>
                  </v-card-text>
              </v-card>
              <v-card class="mx-auto card" width="274">
                  <v-card-text>
                      <p class=" display-1 text--primary">26/09 a 01/10</p>
                        <p class="display-1 text--primary">
                            SUMMERTEC
                        </p>
                  </v-card-text>
              </v-card>
              </v-row>
               <h2>Portugal</h2>
               <v-row>
                  <v-card class="mx-auto card" width="274">
                  <v-card-text>
                      <p class=" display-1 text--primary">27 a 28/06</p>
                        <p class="display-1 text--primary">
                            Overdose Color
                        </p>
                  </v-card-text>
              </v-card>
               <v-card class="mx-auto card" width="274">
                  <v-card-text>
                      <p class=" display-1 text--primary">29 e 30/06</p>
                        <p class="display-1 text--primary">
                            Lisos e Ondulantes
                        </p>
                  </v-card-text>
              </v-card>
               <v-card class="mx-auto card" width="274">
                  <v-card-text>
                      <p class=" display-1 text--primary">24-26/10</p>
                        <p class="display-1 text--primary">
                            Master Training
                        </p>
                  </v-card-text>
              </v-card>
               </v-row>
              <v-row class="mt-12">
                 <v-card class="mx-auto card" width="274">
                  <v-card-text>
                      <p class=" display-1 text--primary">27 e 28/10</p>
                        <p class="display-1 text--primary">
                            Blond Extreme
                        </p>
                  </v-card-text>
              </v-card>
              </v-row>
              </v-col>
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
h2 {
    text-align: center;
    margin: 40px 0;
    color: #FFB74D;
    font-size: 28px;
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
@media only screen and (max-width: 600px) {
  .cards {
    display: block;
  }
  .card {
    margin-bottom: 30px;
  }
}
</style>