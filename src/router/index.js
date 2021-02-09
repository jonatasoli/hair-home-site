import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/Home.vue";
import About from "../views/about/About.vue";
import OnlineCourses from "../views/online-courses/OnlineCourses.vue"
import CoursesInPerson from "../views/courses-in-person/CoursesInPerson.vue"
import Contact from "../views/contact/Contact.vue"
import Videos from "../views/videos/Videos.vue"
import News from "../views/news/News.vue"
import Thermos from "../components/Thermos.vue"
import PrivacyPolicy from "../components/PrivacyPolicy.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/quem-somos",
    name: "About",
    component: About
  },
  {
    path: "/cursos-presenciais",
    name: "CoursesInPerson",
    component: CoursesInPerson
  },
  {
    path: "/cursos-online",
    name: "Online-courses",
    component: OnlineCourses
  },
  {
    path: "/fique-por-dentro",
    name: "News",
    component: News
  },
  {
    path: "/contato",
    name: "Contact",
    component: Contact
  },
  {
    path: "/termos-de-uso",
    name: "Termos",
    component: Thermos
  },
  {
    path: "/politicas-de-privacidade",
    name: "PrivacyPolicy",
    component: PrivacyPolicy
  },
  {
    path: "/videos",
    name: "Videos",
    component: Videos
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
