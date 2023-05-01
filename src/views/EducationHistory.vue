<template>
  <h1
    class="sm:text-center md:text-center inner-font text-white uppercase text-3xl font-bold mb-5"
  >
    RESUME
  </h1>
  <div class="grid grid-cols-2 sm:grid-cols-1">
    <div class="p-10">
      <h1
        class="sm:text-center inner-font text-white uppercase text-xl font-bold border-b mb-5 py-5 teal"
      >
        Education
      </h1>
      <div
        data-aos="fade-up"
        data-duration="800"
        class="accordion-education"
        v-for="educ in education"
        :key="educ.id"
      >
        <AppAccordion>
          <template #title>
            <h2 class="text-xl font-medium text-white">{{ educ.title }}</h2>
          </template>
          <template #body>
            <div v-if="educ.college">
              <div class="mb-5">
                <span class="text-white font-semibold text-xl"
                  >University of Perpetual Help System Dalta -
                </span>
                <span class="teal text-xl font-semibold"
                  >Las Pinas, Metro Manila</span
                >
                <br />
                <time
                  class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 text-lg"
                  >2015 - 2019</time
                >
                <p class="text-left semi-white mt-5">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Veritatis magnam dolore nisi deleniti placeat vel sed velit
                  quasi nobis, esse molestiae eum similique libero consequuntur
                  incidunt magni. Laboriosam, magni pariatur!
                </p>
              </div>
              <div>
                <span class="text-white font-semibold text-xl">
                  Asia Technological School of Science and Arts -
                </span>
                <span class="teal text-xl font-semibold">Sta.Rosa, Laguna</span>
                <br />
                <time
                  class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 text-lg"
                  >2014 - 2015</time
                >
                <p class="text-left semi-white mt-5 mb-5">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Veritatis magnam dolore nisi deleniti placeat vel sed velit
                  quasi nobis, esse molestiae eum similique libero consequuntur
                  incidunt magni. Laboriosam, magni pariatur!
                </p>
              </div>
            </div>
            <div v-else>
              <div>
                <span class="text-white font-semibold text-xl">
                  {{ educ.school }}</span
                >
                <span class="teal text-xl font-semibold">{{
                  educ.location
                }}</span>
                <br />
                <time
                  class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 text-lg"
                  >{{ educ.time }}</time
                >
                <p class="text-left semi-white mt-5 mb-5">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Veritatis magnam dolore nisi deleniti placeat vel sed velit
                  quasi nobis, esse molestiae eum similique libero consequuntur
                  incidunt magni. Laboriosam, magni pariatur!
                </p>
              </div>
            </div>
          </template>
        </AppAccordion>
      </div>
    </div>

    <div class="p-10">
      <h1
        class="sm:text-center inner-font text-white uppercase text-xl font-bold border-b mb-5 py-5 teal"
      >
        Experiences
      </h1>

      <div
        data-aos="fade-up"
        data-duration="800"
        class="accordion-experience"
        v-for="experience in experiences"
        :key="experience.id"
      >
        <AppAccordion>
          <template #title>
            <h2 class="text-xl font-medium text-white">
              {{ experience.company }}
            </h2>
          </template>
          <template #body>
            <div class="mb-5">
              <span class="text-white font-semibold text-xl teal kalam"
                >{{ experience.position }}
              </span>
              <br />
              <time
                class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 text-lg"
                >{{ experience.from }} - {{ experience.to }}</time
              >
              <p class="text-left semi-white mt-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Veritatis magnam dolore nisi deleniti placeat vel sed velit
                quasi nobis, esse molestiae eum similique libero consequuntur
                incidunt magni. Laboriosam, magni pariatur!
              </p>
            </div>
          </template>
        </AppAccordion>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import AppAccordion from "../components/AppAccordion.vue";
const isOpen = ref(false);
const education = ref([
  {
    id: 1,
    title: "College",
    college: true,
  },
  {
    id: 2,
    title: "High School",
    school: "Batanes National Science High School",
    location: "Basco, Batanes",
    time: "2010 - 2014",
  },
  {
    id: 3,
    title: "Elementary",
    school: "Diptan Elementary School",
    location: "Basco, Batanes",
    time: "2003 - 2010",
  },
]);

const experiences = ref([
  {
    id: 1,
    company: "JFE Techno Manila",

    position: "IT Developer",
    from: "January 2022",
    to: "Present",
    role: "",
  },
  {
    id: 2,
    company: "Trend Micro",
    position: "Security Engineer",
    from: "February 2020",
    to: "April 2021",
    role: "",
  },
  {
    id: 3,
    company: "RBT Consulting",
    position: "Project-Based Software Developer",
    from: "September 2019",
    to: "Jabnuary 2022",
    role: "",
  },
]);
</script>

<style scoped>
.teal {
  color: #29a587;
}

.semi-white {
  color: #eaeaea;
}

.inner-font {
  font-family: "Inter", sans-serif;
}
.kalam {
  font-family: 'Kalam', cursive;
}


</style>
