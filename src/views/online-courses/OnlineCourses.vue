<template>
  <v-app>
      <NavBar />
      <h1>Cursos Online</h1>
      <v-container class="cards">
          <v-card
          class="mx-auto card"
          max-width="344" color="#D8BC98">
              <v-img
              src="./assets/penteados-trancas.jpg"
              height="300">
              </v-img>
            <v-card-actions>
                <v-btn
                text
                href="https://pay.hotmart.com/I10613380T?checkoutMode=10&bid=1612533603475"
                target="_blank"
                >
                Compre agora
                </v-btn>
            </v-card-actions>
        </v-card>
        <v-card
          class="mx-auto card"
          max-width="344" color="#D8BC98">
              <v-img
              src="./assets/colorimetria-capilar.jpg"
              height="300">
              </v-img>
            <v-card-actions>
                <v-btn
                text
                href="https://pay.hotmart.com/X22589927C?checkoutMode=10&bid=1612534456453"
                target="_blank"
                >
                Compre agora
                </v-btn>
            </v-card-actions>
        </v-card>
        <v-card
          class="mx-auto card"
          max-width="344" color="#D8BC98">
              <v-img
              src="./assets/desing-sobrancelhas.jpg"
              height="300">
              </v-img>
            <v-card-actions>
                <v-btn
                text
                href="https://pay.hotmart.com/T18435426G?checkoutMode=10&bid=1612534480505"
                target="_blank"
                >
                Compre agora
                </v-btn>
            </v-card-actions>
        </v-card>
      </v-container>
      <Footer />
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue"
export default {
    components: { NavBar, Footer }
}
</script>

<style scoped>
h1 {
    text-align: center;
    margin: 40px 0;
    color: #D99938;
    font-size: 36px;
}
.cards {
    display: flex;
    margin-bottom: 40px;
    
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