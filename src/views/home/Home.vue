<template>
  <v-app>
    <NavBar />
    <v-carousel
      class="carousel"
      cycle
      height="420"
      hide-delimiter-background
      interval="4000"
      show-arrows-on-hover
    >
      <v-carousel-item
        ><v-img class="img" height="420" src="./assets/1.png"></v-img
      ></v-carousel-item>
      <v-carousel-item
        ><v-img class="img" height="420" src="./assets/2.png"></v-img
      ></v-carousel-item>
      <v-carousel-item
        ><v-img class="img" height="420" src="./assets/3.png"></v-img
      ></v-carousel-item>
       <v-carousel-item
        ><v-img class="img" height="420" src="./assets/4.png"></v-img
      ></v-carousel-item>
       <v-carousel-item
        ><v-img class="img" height="420" src="./assets/5.png"></v-img
      ></v-carousel-item>
    </v-carousel>
    <h1>Conheça a Maior e Melhor Academia Científica de Beleza do Mundo</h1>
    <v-container class="cards">
      <v-card class="mx-auto card" max-width="344" color="#D8BC98">
        <v-img src="./assets/overdose-color.jpeg" height="350"> </v-img>
        <v-card-actions>
          <v-btn  text href="/overdose-color" target="_blank">
            Saiba Mais
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card class="mx-auto card" max-width="344" color="#D8BC98">
        <v-img src="./assets/blond-extreme.jpeg" height="350"> </v-img>
        <v-card-actions>
          <v-btn  text href="/blond-extreme" target="_blank">
            Saiba Mais
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card class="mx-auto card" max-width="344" color="#D8BC98">
        <v-img src="./assets/summertec.jpeg" height="350"> </v-img>
        <v-card-actions>
          <v-btn
            text
            href="/congresso-cientifico-summertec"
            target="_blank"
          >
            Saiba Mais
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card class="mx-auto card" max-width="344" color="#D8BC98">
        <v-img src="./assets/corte-az.jpeg" height="350"> </v-img>
        <v-card-actions>
          <v-btn text href="/corte-de-a-z" target="_blank">
            Saiba Mais
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card class="mx-auto card" max-width="344" color="#D8BC98">
        <v-img src="./assets/formacao-tecnicos.jpeg" height="350"> </v-img>
        <v-card-actions>
          <v-btn text href="/formacao-tecnicos" target="_blank">
            Saiba Mais
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
    <v-img class="img-gatto-rosa" src="./assets/6.png">
      
      <v-btn
        class="title-gatto-rosa"
        text
        href="https://loja.gattorosa.com.br/"
        target="_blank"
      >
        <v-icon size="150" class="icon">mdi-arrow-right-bold-outline</v-icon>
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
  color: #D99938;
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
  color: #D99938;
  position: relative;
  top: 30%;
  left: 87%;
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
    height: 280px !important;
  }
  .img {
    height: 430px !important;
  }
  

  >>>.v-btn__content {
    width: 180px;
    word-break: break-word;
    white-space: normal;
    
  }
  .title-gatto-rosa {
    top: 20%;
    left: 65%;
  }
  .icon {
    font-size: 40px !important;
  }

  >>> .img-gatto-rosa .v-image__image {
    background-size: 100% 150px;
  }
  >>> .carousel .v-image__image {
    background-size: 100% 130px;
  }
}
</style>
