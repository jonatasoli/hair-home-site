<template>
  <v-app>
    <NavBar />
    <div v-if="$vuetify.breakpoint.xlOnly">
      <v-carousel
        class="carousel"
        cycle
        height="600"
        hide-delimiter-background
        interval="4000"
        show-arrows-on-hover
      >
        <v-carousel-item class="img"
          ><v-img height="600" width="100%" src="./assets/carousel/1.png"></v-img
        ></v-carousel-item>
        <v-carousel-item
          ><v-img
            class="img"
            height="600"
            width="100%"
            src="./assets/carousel/2.png"
          ></v-img
        ></v-carousel-item>
        <v-carousel-item
          ><v-img
            class="img"
            height="600"
            width="100%"
            src="./assets/carousel/3.png"
          ></v-img
        ></v-carousel-item>
        <v-carousel-item
          ><v-img
            class="img"
            height="600"
            width="100%"
            src="./assets/carousel/4.png"
          ></v-img
        ></v-carousel-item>
        <v-carousel-item
          ><v-img
            class="img"
            height="600"
            width="100%"
            src="./assets/carousel/5.png"
          ></v-img
        ></v-carousel-item>
      </v-carousel>
    </div>
    <div v-else>
      <v-carousel
        class="carousel"
        cycle
        height="430"
        hide-delimiter-background
        interval="4000"
        show-arrows-on-hover
      >
        <v-carousel-item class="img"
          ><v-img height="430" width="100%" src="./assets/carousel/1.png"></v-img
        ></v-carousel-item>
        <v-carousel-item
          ><v-img
            class="img"
            height="430"
            width="100%"
            src="./assets/carousel/2.png"
          ></v-img
        ></v-carousel-item>
        <v-carousel-item
          ><v-img
            class="img"
            height="430"
            width="100%"
            src="./assets/carousel/3.png"
          ></v-img
        ></v-carousel-item>
        <v-carousel-item
          ><v-img
            class="img"
            height="430"
            width="100%"
            src="./assets/carousel/4.png"
          ></v-img
        ></v-carousel-item>
        <v-carousel-item
          ><v-img
            class="img"
            height="430"
            width="100%"
            src="./assets/carousel/5.png"
          ></v-img
        ></v-carousel-item>
      </v-carousel>
    </div>
    <h1>Conheça a Maior e Melhor Academia Científica de Beleza do Mundo</h1>
    <v-container class="history-hair-school mx-7" fluid>
      <div>
      <v-img src="./assets/imagem-historia.jpeg" width="500"></v-img>

      </div>
      <div class="history-text">
        <p>Criada por Gracielle Gatto na década de 90, a Hair School international 
          foi a primeira academia de beleza cientifica a abrir suas portas. 
          Hoje mais de 20 anos depois, já formou mais de 500 mil alunos, com sua 
          metodologia única e é a maior referência em educação cientifica na área da 
          beleza mundial.</p>
        <p>Sendo um dos maiores destaques globais, a Hair School abriu os olhos de 
          grandes celebridades internacionais para o mercado da beleza no Brasil .  
          Com agenda em toda América e Europa, a sua chance de ter um dos certificados 
          mais respeitados do mundo, está há apenas um passo!</p>

      </div>
    </v-container>
    <v-container>
      <v-img src="./assets/mapa.jpeg" width="600" class="mx-auto"></v-img>
    </v-container>
    <v-container class="cards" fluid>
      <v-card class="mx-auto card" max-width="344" color="#D8BC98" v-for="(image, i) in images" :key="i">
        <v-img :src="getImgUrl(image.src)" height="344"> </v-img>
        <v-card-actions>
          <v-btn text :href="image.href" target="_blank"> Saiba Mais </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>

    <v-img class="img-gatto-rosa" width="100%" src="./assets/6.png">
      <v-btn
        class="title-gatto-rosa"
        text
        href="https://loja.gattorosa.com.br/"
        target="_blank"
      >
        <v-icon size="110" class="icon">mdi-arrow-right-bold-outline</v-icon>
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
  data() {
    return {
      images: [
        { src: "cursos/overdose-color.jpeg", href: "/overdose-color" },
        { src: "cursos/blond-extreme.jpeg", href: "/blond-extreme" },
        {
          src: "cursos/summertec.jpeg",
          href: "/congresso-cientifico-summertec",
        },
        { src: "cursos/corte-az.jpeg", href: "/corte-de-a-z" },
        { src: "cursos/formacao-tecnicos.jpeg", href: "/formacao-tecnicos" },
      ],
    };
  },
  methods: {
     getImgUrl(pic) {
        return require('./assets/'+ pic)
      }
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin: 40px 0;
  color: #d99938;
  font-size: 36px;
}
.history-hair-school {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap
}
.history-text {
  width: 50%
}

.history-text p {
  font-size: 22px;
  text-align: justify;
  text-indent: 25px;
  font-family: 'Syne', sans-serif
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
  color: #d99938;
  position: relative;
  top: 35%;
  left: 87%;
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

  >>> .v-btn__content {
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
