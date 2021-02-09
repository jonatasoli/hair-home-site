<template>
  <v-app>
      <NavBar />
      <v-container>
          <h1>O QUE DIZEM SOBRE NÓS</h1>
      </v-container>
    <v-carousel
    class="carousel"
    cycle
    continuous
    interval="4000"
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(slide, i) in items"
      :key="i"
    >
      <v-sheet
        :color="colors[i]"
        height="100%"
      >
        <v-row
         class="fill-height"
          align="center"
          justify="center"
        >
          <div class="item">
            {{ slide.slides }}
          </div>
          <p class="aluno">
              {{slide.aluno}}
          </p>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
      <Footer />
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue"
import Footer from "@/components/Footer.vue"
export default {
    components: { NavBar, Footer},
    data () {
    return {
    colors: [
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
    ],
    items: [
        {
            slides: '​Vocês são Top, Parabéns a todos vocês, que Deus continue abençoando a todos vocês!',
            aluno: 'Micheline Carvalho, Aluna'
        },
        {
            slides: 'A melhor academia com os melhores profissionais. Cada curso um aprendizado novo, e cada vez fico  mais encantado. Que venha novos cursos!',
            aluno: 'Carlos Eduardo, Aluno'
        },
        {
            slides: 'Gracielle Gatto você foi essencial e a Hair School um divisor de águas na minha vida!',
            aluno: 'Leisliane Rodrigues, Aluna'
        },
        {
            slides: 'Onde você passa, você brilha, parabéns pelo seu sucesso tenho muito orgulho de ter conhecido e participado do Circuito com a família Hair School, PARABÉNS sucesso sempre, bjs.',
            aluno: 'Beatriz Maia, Aluna'
        }
    ]
    }
    }
   
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
h1 {
    text-align: center;
    margin: 40px 0;
    color: #FFB74D;
    font-size: 36px;
}
.item {
    font-size: 20px;
    width: 900px;
    text-align: center;    
    
}
.aluno {
    font-size:20px;
    font-family: 'Dancing Script', cursive;
    margin-top: 20px;
    
}
.fill-height {
    flex-direction: column;

}
.carousel {
  margin-bottom: 40px;
}


</style>