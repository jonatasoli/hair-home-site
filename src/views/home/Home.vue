<template>
  <v-app>
    <NavBar />
    <v-carousel
      class="carousel"
      cycle
      height="400"
      hide-delimiter-background
      interval="4000"
      show-arrows-on-hover
    >
      <v-carousel-item
        ><v-img class="img" src="./assets/img1.jpg"></v-img
      ></v-carousel-item>
      <v-carousel-item
        ><v-img class="img" src="./assets/img2.jpg"></v-img
      ></v-carousel-item>
      <v-carousel-item
        ><v-img class="img" src="./assets/img3.jpg"></v-img
      ></v-carousel-item>
    </v-carousel>
    <h1>Conheça a Maior e Melhor Academia Científica de Beleza do Mundo</h1>
    <v-container class="cards">
      <v-card class="mx-auto card" max-width="344">
        <v-img src="./assets/overdose-color.jpeg" height="350"> </v-img>
        <v-card-actions>
          <v-btn color="orange lighten-2" text href="/overdose-color" target="_blank">
            Saiba Mais
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card class="mx-auto card" max-width="344">
        <v-img src="./assets/blond-extreme.jpeg" height="350"> </v-img>
        <v-card-actions>
          <v-btn color="orange lighten-2" text href="/blond-extreme" target="_blank">
            Saiba Mais
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card class="mx-auto card" max-width="344">
        <v-img src="./assets/summertec.jpeg" height="350"> </v-img>
        <v-card-actions>
          <v-btn
            color="orange lighten-2"
            text
            href="/congresso-cientifico-summertec"
            target="_blank"
          >
            Saiba Mais
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card class="mx-auto card" max-width="344">
        <v-img src="./assets/corte-az.jpeg" height="350"> </v-img>
        <v-card-actions>
          <v-btn color="orange lighten-2" text href="/corte-de-a-z" target="_blank">
            Saiba Mais
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card class="mx-auto card" max-width="344">
        <v-img src="./assets/formacao-tecnicos.jpeg" height="350"> </v-img>
        <v-card-actions>
          <v-btn color="orange lighten-2" text href="/formacao-tecnicos" target="_blank">
            Saiba Mais
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
    <v-img class="img-gatto-rosa" src="./assets/01-Banner.jpg">
      
      <v-btn
        class="title-gatto-rosa"
        text
        href="https://loja.gattorosa.com.br/"
        target="_blank"
      >
        Conheça a nossa Loja!
        <v-icon x-large>mdi-arrow-right-bold-outline</v-icon>
</v-btn>
      
      </v-img>
    <Footer />
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: { NavBar, Footer },
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin: 40px 0;
  color: #ffb74d;
  font-size: 36px;
}
.cards {
  display: flex;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.card {
  margin: 20px;
}
.title-gatto-rosa {
  word-wrap: break-word;
  font-size: 40px;
  color: #ffb74d;
  position: relative;
  top: 60%;
  left: 52%;
}

.img-gatto-rosa {
  height: 600px;
  object-fit: contain;
}

>>> .img-gatto-rosa .v-image__image {
  background-size: 100% 800px;
}

@media only screen and (max-width: 600px) {
  .cards {
    display: block;
  }
  .card {
    margin-bottom: 30px;
  }
  .carousel {
    margin-top: -150px;
  }
  .img {
    width: 600px;
    height: 200px;
    margin-top: 150px;
  }

  >>>.v-btn__content {
    width: 180px;
    word-break: break-word;
    white-space: normal;
    
  }
  .title-gatto-rosa {
    font-size: 25px;
    color: #ffb74d;
    top: 50%;
    left: 45%;
  }

  >>> .img-gatto-rosa .v-image__image {
    background-size: 100% 400px;
  }
}
</style>
