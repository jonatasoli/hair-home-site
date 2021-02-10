<template>
  <v-app>
    <NavBar />
    <v-carousel
            class="carousel"
            cycle
            height="400"
            hide-delimiter-background
            interval="4000"
            show-arrows-on-hover>
            <v-carousel-item ><v-img class="img" src="./assets/img1.jpg"></v-img></v-carousel-item>
            <v-carousel-item ><v-img class="img" src="./assets/img2.jpg"></v-img></v-carousel-item>
            <v-carousel-item ><v-img class="img" src="./assets/img3.jpg"></v-img></v-carousel-item>
          </v-carousel>
    <h1>Conheça a Maior e Melhor Academia Científica 
      de Beleza do Mundo</h1>
  <v-container class="cards">
      <v-card class="mx-auto card" max-width="344">
                  <v-card-text>
                        <p class="display-1 text--primary">
                            Overdose Color Plus
                        </p>
                        <div>Curso de Aperfeiçoamento em Colorimetria</div>
                        <div>Inclui: Certificado e Apostila</div>
                  </v-card-text>
                  <v-btn
                    color="orange lighten-2"
                    text
                    href="https://hairschool.graciellegatto.com.br/curso-presencial-overdose-color-plus"
                    target="_blank"
                    >
                    Saiba Mais
                  </v-btn>
              </v-card>
              <v-card class="mx-auto card" max-width="344">
                  <v-card-text>
                        <p class="display-1 text--primary">
                            Summertec
                        </p>
                        <div>Congresso Cíentifico</div>
                        <div>Inclui: Certificado e Hospedagem</div>
                  </v-card-text>
                  <v-btn
                    color="orange lighten-2"
                    text
                    href="https://hairschool.graciellegatto.com.br/congresso-cientifico-summertec"
                    target="_blank"
                    >
                    Saiba Mais
                  </v-btn>
              </v-card>
              <v-card class="mx-auto card" max-width="344">
                  <v-card-text>
                        <p class="display-1 text--primary">
                            Blond Extreme
                        </p>
                        <div>Curso de Aperfeiçoamento em Louros</div>
                        <div>Inclui: Certificado e Apostila</div>
                  </v-card-text>
                  <v-btn
                    color="orange lighten-2"
                    text
                    href="https://hairschool.graciellegatto.com.br/curso-presencial-blond-extreme"
                    target="_blank"
                    >
                    Saiba Mais
                  </v-btn>
              </v-card>
  </v-container>
    <Footer />
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue"
import Footer from "@/components/Footer.vue"
export default {
  components:{ NavBar, Footer}

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
    margin-bottom: 40px;
}

@media only screen and (max-width: 600px) {
  .cards {
    display: block;
  }
  .card {
    margin-bottom: 30px;
  }
  .carousel {
    margin-top: -150px
  }
  .img {
    width: 600px;
    height: 200px;
    margin-top: 150px
  }

}
</style>
