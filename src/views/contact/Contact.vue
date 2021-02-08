<template>
  <v-app>
      <NavBar />
      <v-container class="buttons">
          <v-btn
          class="mx-5"
          x-large
          href="mailto:relacionamento@graciellegatto.com.br ">
          <v-icon left>mdi-email</v-icon> 
          Fale Conosco</v-btn>
          <a href="https://www.instagram.com/gracielle_gatto/" target="_blank"
          ><v-img width="50" height="50" class="mx-5" src="./assets/instagram.png"></v-img></a>
          <a href="https://www.youtube.com/channel/UCe4Jy3F5L0uUXU_xYS3VteQ" target="_blank"
          ><v-img width="50" height="50" class="mx-5" src="./assets/youtube.png"></v-img></a>
      </v-container>
      <v-container class="maps">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.734233726004!2d-46.63791588547087!3d-23.54205938469249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59d51b82836d%3A0x8865909875563d0b!2sAcademia%20Hair%20School%20by%20Gracielle%20Gatto!5e0!3m2!1spt-BR!2sbr!4v1612545701229!5m2!1spt-BR!2sbr" 
          width="900" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0" class="maps"></iframe>
      </v-container>
      <Footer />
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue"
import Footer from "@/components/Footer.vue"
export default {
    components: { NavBar, Footer }

}
</script>

<style>
.buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
}

.maps {
    display: flex;
    justify-content: center;
}


</style>