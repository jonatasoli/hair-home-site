<template>
  <v-app>
       <div class="home-style">
      <v-row>
        <NavBar />
      </v-row>
    </div>
    <v-container>
       <h1>Gracielle Gatto</h1>
       <div class="box-biografy">
       <div class="img">
         <v-img src="./assets/Gracielle.jpeg"  
          max-width="440"
          max-height="580"></v-img>
       </div>
       <div class="biografy">
        <p>    CEO na Empresa Hair School Internacional, 
           a renomada Hair Stylist internacional, atua no mercado 
           da beleza há mais de 20 anos. Com vasta experiência, já 
           ministrou cursos na América do Sul , Europa e África.</p>
        <p>     Tem formação em mais de 70 cursos nacionais e internacionais. 
          Seu método de ensino tem transformado a carreira de centenas de profissionais 
          ano após ano
        </p>
        <p>     A Empresa Hair School Internacional, é hoje a MAIOR e MELHOR academia 
          de beleza ciêntifica do mundo!</p>
        <p>    Com mais de 100 mil alunos participantes entre 
            cursos profissionalizantes e especializações, surge 
            no mercado como uma academia facilitadora no setor da 
            beleza, trazendo conhecimento de forma objetiva e clara.</p>
       </div>

       </div>
    </v-container>
    <v-container class="cards">
      <v-card class="mx-auto card" width="244">
      <v-img
      class="img"
      src="./assets/alvo.png"
      max-width="130"
      max-height="200"
    ></v-img>
        <v-card-title>MISSÃO</v-card-title>
         <v-card-actions>
           <v-spacer></v-spacer>
            <v-btn
            icon
            @click="missao = !missao">
              <v-icon>{{ missao ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
        </v-card-actions>
      <v-expand-transition>
      <div v-show="missao">
      <v-divider></v-divider>
        <v-card-text>
          <ul>
            <li>Espírito de equipe</li>
            <li>Lealdade</li>
            <li>Busca de Conhecimento</li>
            <li>Inovação</li>
            <li>Excelência</li>
            <li>Ética</li>
            <li>Respeito</li>
            <li>Unidade</li>
            <li>Qualidade</li>
            <li>Integridade</li>
          </ul>
        </v-card-text>
         </div>
        </v-expand-transition>
      </v-card>
        <v-card class="mx-auto card" width="244">
           <v-img class="img"
      src="./assets/visao.png"
      max-width="130"
      max-height="200"
    ></v-img>
        <v-card-title>VISÃO</v-card-title>
         <v-card-actions>
           <v-spacer></v-spacer>
            <v-btn
            icon
            @click="visao = !visao">
              <v-icon>{{ visao ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
        </v-card-actions>
      <v-expand-transition>
      <div v-show="visao">
      <v-divider></v-divider>
        <v-card-text>
       Ser um facilitador educacional, instruindo de forma clara, 
       objetiva e de maneira rápida seus alunos com qualidade e 
       alto desempenho.
        </v-card-text>
         </div>
        </v-expand-transition>
      </v-card>
        <v-card class="mx-auto card" width="244">
           <v-img
      class="img"
      src="./assets/valor.png"
      max-width="130"
      max-height="200"
    ></v-img>
        <v-card-title >VALORES</v-card-title>
         <v-card-actions>
           <v-spacer></v-spacer>
            <v-btn
            icon
            @click="valores = !valores">
              <v-icon>{{ valores ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
        </v-card-actions>
      <v-expand-transition>
      <div v-show="valores">
      <v-divider></v-divider>
        <v-card-text>
         Alcançar maior número de alunos jamais visto em todo 
         território nacional, seja presencial ou on-line, com 
         imagem forte no mercado, respeito e qualidade, garantindo 
         a satisfação e retorno dos clientes.
        </v-card-text>
         </div>
        </v-expand-transition>
      </v-card>
    </v-container>
   <Footer />
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
export default {
components: {
    NavBar,
    Footer},
data() {
  return {
    visao: false,
    valores: false,
    missao: false
  }
},
}
</script>

<style  scoped>
@import url('https://fonts.googleapis.com/css2?family=Syne&display=swap');
h1 {
    color: #FFB74D;
    font-family: 'Syne', sans-serif;
    text-align: center;
    margin: 20px 10px;
}
.cards {
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 20px;
}
.img {
  background-size: cover;
  margin: 10px auto;
}
.biografy {
  width: 55%
}
.biografy p {
    font-size: 25px;
    text-align: justify;
    text-indent: 25px;
    font-family: 'Syne', sans-serif
}

.box-biografy {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap
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