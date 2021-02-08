<template>
  <div>
    <v-app-bar id="home-app-bar" app elevation="1" color="#18121E" height="80">
      <v-img
        src="@/assets/logo.png"
        class="mx-3 hidden-xs-only"
        max-width="200"
        contain
      />

      <v-img
        src="@/assets/logo.png"
        class="d-flex d-sm-none"
        max-width="80"
        contain
      />
      <v-toolbar-items class="toolbar">
        <v-btn color="#18121E" elevation="0" @click="goHome">INICIO</v-btn>
        <span>|</span>
        <v-btn color="#18121E" elevation="0" @click="goCoursesInPerson">CURSOS PRESENCIAIS</v-btn>
        <span>|</span>
        <v-btn color="#18121E" elevation="0" @click="goOnlineCourses">CURSOS ONLINE</v-btn>
        <span>|</span>
        <v-btn color="#18121E" elevation="0">FIQUE POR DENTRO</v-btn><span>|</span>
        <v-btn color="#18121E" elevation="0" @click="goVideos">VIDEOS</v-btn><span>|</span>
        <v-btn color="#18121E" elevation="0" @click="goAbout">
          QUEM SOMOS
        </v-btn><span>|</span>
         <v-btn color="#18121E" elevation="0" @click="goContact">
          CONTATO
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "MainNavBar",
  methods: {
    goAbout() {
        this.$router.push({
        name: 'About'
    })
    },
    goHome() {
        this.$router.push({
            name: 'Home'
        });
    },
    goOnlineCourses() {
      this.$router.push({
        name: 'Online-courses'
      })
    },
    goContact() {
      this.$router.push({
        name: 'Contact'
      })
    },
    goVideos() {
      this.$router.push({
        name: 'Videos'
      })
    },
    goCoursesInPerson() {
      this.$router.push({
        name: 'CoursesInPerson'
      })
    }
  }
};
</script>

<style lang="scss" scoped> 
.has-margin-top-1 {
    margin-top: 1.5rem
}

.v-btn.v-size--default {
    font-size: 1rem;
}
span {
    font-size: 30px;
    display: flex;
    align-items: center;
}

.toolbar {
  margin-right:100px;
}

</style>
