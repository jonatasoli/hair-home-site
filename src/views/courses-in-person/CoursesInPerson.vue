<template>
  <v-app>
      <NavBar />
      <v-container>
          <h1>Cursos Presencias</h1>
          <h2>Brasil</h2>
          <v-container class="cards">
            <v-col>
              <v-row class="mt-12">
              <v-card class="mx-auto card" width="274" color="#D8BC98">
                  <v-img src="https://gattorosa.nyc3.digitaloceanspaces.com/overdoser-color-brasil.jpeg"></v-img>
                  <v-card-text>
                      <p class=" display-1 text--primary">20 a 23/09</p>
                        <p class="display-1 text--primary">
                            Overdose Color
                        </p>
                  </v-card-text>
              </v-card>
              <v-card class="mx-auto card" width="274" color="#D8BC98">
                  <v-img src="https://gattorosa.nyc3.digitaloceanspaces.com/summertec-brasil.jpeg"></v-img>
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
               <v-card class="mx-auto card" width="274" color="#D8BC98">
                  <v-img src="https://gattorosa.nyc3.digitaloceanspaces.com/master-training-portugal.jpeg"></v-img> 
                  <v-card-text>
                      <p class=" display-1 text--primary">24-26/10</p>
                        <p class="display-1 text--primary">
                            Master Training
                        </p>
                  </v-card-text>
              </v-card>
                 <v-card class="mx-auto card" width="274" color="#D8BC98">
                  <v-img src="https://gattorosa.nyc3.digitaloceanspaces.com/blond-extreme-portugal.jpeg"></v-img>
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
           color="#9C8E83"  elevation="10"
           href="https://api.whatsapp.com/send?phone=5511993860382&text=Mais%20informa%C3%A7%C3%B5es%20sobre%20a%20HAIR%20SCHOOL"
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
    color: #D99938;
    font-size: 36px;
}
h2 {
    text-align: center;
    margin: 40px 0;
    color: #D99938;
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

.sold-out {
    color: red;
    font-size: 20px;
    font-weight: bold
}
@media only screen and (max-width: 600px) {
  .cards {
    display: block;
  }
  .card {
    margin-bottom: 30px;
  }
  >>> .btn span{
    width: 220px;
    word-break: break-word;
    white-space: normal;
  }
}
</style>
