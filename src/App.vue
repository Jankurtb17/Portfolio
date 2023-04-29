<script setup>
import AOS from "aos";
import AppHeader from "./views/AppHeader.vue";
import AboutMe from "./views/AboutMe.vue";
import MyProjects from "./views/MyProjects.vue";
import ProfSkills from "./views/ProfSkills.vue";
import { ref, onMounted } from "vue";
import EducationHistory from "./views/EducationHistory.vue";

onMounted(() => {
  AOS.init();
});
</script>

<template>
  <div class="nav-header">
    <AppHeader />
  </div>
  <AboutMe />
  <ProfSkills />
  <MyProjects />
  <EducationHistory />
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kalam&display=swap");
@font-face {
  font-family: "Inter", sans-serif;
  src: url("../src/assets/fonts/Inter/static/Inter-Regular.ttf")
    format("truetype");
}

@font-face {
  font-family: "Kalam", cursive;
  src: url("../src/assets/fonts/Kalam/Kalam-Regular.ttf") format("woff");
}
</style>
