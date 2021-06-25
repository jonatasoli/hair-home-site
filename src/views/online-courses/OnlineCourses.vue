<template>
  <v-app>
      <NavBar />
      <h1>Cursos Online</h1>
      <v-container class="cards">
        <div v-for="image in items" :key="image.src">
          <v-card
          class="mx-auto card"
          max-width="344" color="#D8BC98">
              <v-img :src="getImgUrl(image.src)" width="270" height="270"></v-img>
            <v-card-actions>
                <v-btn
                text
                :href="image.href"
                target="_blank"
                >
                Compre agora
                </v-btn>
            </v-card-actions>
        </v-card>

        </div>
      </v-container>
      <Footer />
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue"
export default {
    components: { NavBar, Footer },
    data() {
      return {
        items: [
          {src: "autoridade-alisantes.jpeg", href: "https://pay.hotmart.com/J40100831H?off=u1v3e15a"},
          {src: "autoridade-em-loiros.jpeg", href: "https://pay.hotmart.com/R11503126C?off=6dao800u"},
          {src: "desbloqueio-loiros.jpeg", href: " https://pay.hotmart.com/Y40641241J?off=l1u7x63j"},
          {src: "design-sobrancelhas.jpeg", href: "https://pay.hotmart.com/T18435426G?off=ghvrkfck"},
          {src: "dona-proprietaria-salao-de-beleza.jpeg", href: "https://pay.hotmart.com/S52238505J?off=8j8gqppg"},
          {src: "penteados.jpeg", href: "https://pay.hotmart.com/T55696019G?off=s6of1suv"},
          {src: "penteados-2.jpeg", href: "https://pay.hotmart.com/I10613380T?off=0pc6mbs4"},
          {src: "prosperity-color.jpeg", href: "https://pay.hotmart.com/X22589927C?off=nehfj6ao"},
          {src: "quimica-beleza.jpeg", href: "https://pay.hotmart.com/I9991821W?off=eiky19vc"},
          {src: "visagismo.jpeg", href: "https://pay.hotmart.com/D27704644T?off=t4gztpne"},
        ]
      }
    },
    methods: {
      getImgUrl(pic) {
        return require('./assets/'+ pic)
      }
    }
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
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 40px;
    width: 100%
    
}
.card {
  margin: 20px;
}
@media only screen and (max-width: 600px) {
  .cards {
    display: block;
  }
  .card {
    margin-bottom: 30px;
    width: 270px
  }
}
</style>