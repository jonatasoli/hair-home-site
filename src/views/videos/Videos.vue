<template>
  <v-app>
      <NavBar />
        <h1>Vídeos</h1>
      <v-container class="videos">
          <iframe 
          width="660" 
          height="415" 
          src="https://www.youtube.com/embed/videoseries?list=UUe4Jy3F5L0uUXU_xYS3VteQ" 
          frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </v-container>
      <Footer />
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue"
import Footer from "@/components/Footer.vue"
export default {
    components: { NavBar, Footer}

}
</script>

<style scoped>
h1 {
    text-align: center;
    margin: 40px 0;
    color: #FFB74D;
    font-size: 36px;
}
.videos {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}
</style>