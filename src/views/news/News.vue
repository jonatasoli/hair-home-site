<template>
  <v-app>
    <NavBar />
    <v-container>
   <carousel-3d :width="600" :height="320" :border="0" :controlsVisible="true">
    <slide v-for="(slide, i) in images" :index="i" :key="i">
        <template slot-scope="{ index, isCurrent, leftIndex, rightIndex }">
            <img :data-index="index" :class="{ current: isCurrent, onLeft: (leftIndex >= 0), onRight: (rightIndex >= 0) }" :src="getImgUrl(slide.src)">
        </template>
    </slide>
</carousel-3d>
      <h1>O QUE DIZEM SOBRE NÓS</h1>
    </v-container>
    <v-carousel class="carousel" height="440">
      <v-carousel-item v-for="video in videos" :key="video.ref">
        <v-sheet color="black" height="100%">
          <iframe
            class="iframe-youtube"
            width="900"
            height="415"
            :src="video.src"
            allow="autoplay"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <v-carousel
      class="carousel "
      cycle
      continuous
      interval="4000"
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(slide, i) in items" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <div class="item">
              {{ slide.slides }}
            </div>
            <p class="aluno">
              {{ slide.aluno }}
            </p>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <Footer />
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import { Carousel3d, Slide } from 'vue-carousel-3d';
export default {
  components: { NavBar, Footer, Carousel3d, Slide },
  data() {
    return {
      colors: ["#D99938", "#9C8E83","#D99938","#9C8E83" ],
      items: [
        {
          slides:
            "​Vocês são Top, Parabéns a todos vocês, que Deus continue abençoando a todos vocês!",
          aluno: "Micheline Carvalho, Aluna",
        },
        {
          slides:
            "A melhor academia com os melhores profissionais. Cada curso um aprendizado novo, e cada vez fico  mais encantado. Que venha novos cursos!",
          aluno: "Carlos Eduardo, Aluno",
        },
        {
          slides:
            "Gracielle Gatto você foi essencial e a Hair School um divisor de águas na minha vida!",
          aluno: "Leisliane Rodrigues, Aluna",
        },
        {
          slides:
            "Onde você passa, você brilha, parabéns pelo seu sucesso tenho muito orgulho de ter conhecido e participado do Circuito com a família Hair School, PARABÉNS sucesso sempre, bjs.",
          aluno: "Beatriz Maia, Aluna",
        },
      ],
      images: [
        {src: "1.jpg"},
        {src: "2.jpg"},
        {src: "3.jpg"},
        {src: "4.jpg"},
        {src: "5.jpg"},
        {src: "6.jpg"},
        {src: "7.jpg"},
        {src: "8.jpg"},
        {src: "9.jpg"},
        {src: "10.jpg"},
      ]
    };
  },
  methods: {
    getImgUrl(pic) {
        return require('./assets/'+ pic)
      }
  },
  computed: {
    videos() {
      return [
        {
          src: "https://www.youtube.com/embed/RBGK6aQ6NSk?rel=1&modestbranding=0&autohide=0&mute=0&showinfo=0&autoplay=0",
          ref: "video0",
        },
        {
          src: "https://www.youtube.com/embed/2Zd-qmgtzrQ?rel=0&modestbranding=1&autohide=1&mute=0&showinfo=0&autoplay=0",
          ref: "video1",
        },
        {
          src: "https://www.youtube.com/embed/AFVDsb2GV7k?rel=0&modestbranding=1&autohide=1&mute=0&showinfo=0&autoplay=0",
          ref: "video2",
        },
        {
          src: "https://www.youtube.com/embed/_YGZwOZl024?rel=0&modestbranding=1&autohide=1&mute=0&showinfo=0&autoplay=0",
          ref: "video3",
        },
        {
          src: "https://www.youtube.com/embed/F9GeOp6rARo?rel=0&modestbranding=1&autohide=1&mute=0&showinfo=0&autoplay=0",
          ref: "video4",
        },
        
        {
          src: "https://www.youtube.com/embed/u-XMUVkDSTY?rel=0&modestbranding=1&autohide=1&mute=0&showinfo=0&autoplay=0",
          ref: "video6",
        },
        {
          src: "https://www.youtube.com/embed/FJCX25UNVes?rel=0&modestbranding=1&autohide=1&mute=0&showinfo=0&autoplay=0",
          ref: "video7",
        },
        {
          src: "https://www.youtube.com/embed/L8t4ENZTH_o?rel=0&modestbranding=1&autohide=1&mute=0&showinfo=0&autoplay=0",
          ref: "video8",
        },
      ];
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap");
h1 {
  text-align: center;
  margin: 40px 0;
  color: #D99938;
  font-size: 36px;
}
.item {
  font-size: 20px;
  width: 100%;
  text-align: center;
  color: black;
}
.aluno {
  font-size: 28px;
  font-family: "Dancing Script", cursive;
  margin-top: 20px;
  color: black
}
.fill-height {
  flex-direction: column;
}
.carousel {
  margin-bottom: 40px;
}

.iframe-youtube {
  display: flex;
  margin: 0 auto;
}
</style>
