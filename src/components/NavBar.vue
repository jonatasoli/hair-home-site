<template>
  <div >
    <v-app-bar class="navbar"  app elevation="1" color="black" height="80">
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
      <v-spacer></v-spacer>

        <v-menu offset-y v-if="$vuetify.breakpoint.xsOnly">
          <template v-slot:activator="{ attrs, on }"> 
            <v-btn v-bind="attrs" v-on="on"><v-icon>mdi-menu</v-icon></v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in itens" :key="index" link @click="item.to">
              <v-list-item-title>{{item.title}}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

      <v-toolbar-items class="toolbar" v-for="(item, index) in itens" :key="index" v-else>
        <v-btn color="white" text elevation="0" @click="item.to">{{item.title}}</v-btn>
        
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "MainNavBar",
   data() {
    return {
      itens: [
        {title: "INICIO", to:this.goHome},
        {title: "CURSOS PRESENCIAIS", to:this.goCoursesInPerson},
        {title: "CURSOS ONLINE", to:this.goOnlineCourses},
        {title: "FIQUE POR DENTRO", to:this.goNews},
        {title: "VIDEOS", to:this.goVideos},
        {title: "QUEM SOMOS", to:this.goAbout},
        {title: "CONTATO", to:this.goContact}
      ]
    }
  },    
  
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
    },
    goNews() {
      this.$router.push({
        name: 'News'
      })
    }
  }
};
</script>

<style  scoped> 
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


</style>
