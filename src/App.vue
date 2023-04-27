<script setup>
import AOS from "aos";
import AppHeader from "./components/AppHeader.vue";
import AboutMe from "./components/AboutMe.vue";
import MyProjects from "./components/MyProjects.vue";
import ProfSkills from "./components/ProfSkills.vue";
import { ref, onMounted } from "vue";
import EducationHistory from "./components/EducationHistory.vue";

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
