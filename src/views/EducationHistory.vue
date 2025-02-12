<template>
  <div data-aos="fade-up" data-aos-duration="1000" id="Experiences">
    <h1 class="text-center inner-font text-white uppercase text-3xl lg:text-6xl font-bold mb-5 lg:mt-20">
      RESUME
    </h1>
  </div>
  <div class="grid grid-cols-2 sm:grid-cols-1 lg:px-20">
    <div class="p-10">
      <h1 class="sm:text-center inner-font text-white uppercase text-xl text font-bold border-b mb-5 py-5 teal">
        Education
      </h1>
      <div data-aos="fade-up" data-duration="800" class="accordion-education" v-for="educ in education" :key="educ.id">
        <AppAccordion>
          <template #title>
            <h2 class="text-xl font-medium text-white">{{ educ.title }}</h2>
          </template>
          <template #body>
            <div v-if="educ.college">
              <div class="mb-5">
                <span class="text-white font-semibold text-xl">University of Perpetual Help System Dalta -
                </span>
                <span class="teal text-xl font-semibold">Las Pinas, Metro Manila</span>
                <br />
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 text-lg">2015 -
                  2019</time>
              </div>
              <div>
                <span class="text-white font-semibold text-xl">
                  Asia Technological School of Science and Arts -
                </span>
                <span class="teal text-xl font-semibold">Sta.Rosa, Laguna</span>
                <br />
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 text-lg">2014 -
                  2015</time>
              </div>
            </div>
            <div v-else>
              <div>
                <span class="text-white font-semibold text-xl">
                  {{ educ.school }}</span>
                <span class="teal text-xl font-semibold">{{
                  educ.location
                }}</span>
                <br />
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 text-lg">{{
                  educ.time }}</time>
              </div>
            </div>
          </template>
        </AppAccordion>
      </div>
    </div>

    <div class="p-10">
      <h1 class="sm:text-center inner-font text-white uppercase text-xl font-bold border-b mb-5 py-5 teal">
        Experiences
      </h1>

      <div data-aos="fade-up" data-duration="800" class="accordion-experience" v-for="experience in experiences"
        :key="experience.id">
        <AppAccordion>
          <template #title>
            <h2 class="text-xl font-medium text-white">
              {{ experience.company }}
            </h2>
          </template>
          <template #body>
            <div class="mb-5">
              <span class="text-white font-semibold text-xl teal kalam">{{ experience.position }}
              </span>
              <br />
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 text-lg">{{
                experience.from }} - {{ experience.to }}</time>
              <p class="text-white text-justify">{{ experience.description }}</p>
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
    location: " - Basco, Batanes",
    time: "2010 - 2014",
  },
  {
    id: 3,
    title: "Elementary",
    school: "Diptan Elementary School",
    location: " - Basco, Batanes",
    time: "2003 - 2010",
  },
]);

const experiences = ref([
  {
    id: 1,
    company: "JFE Techno Manila",

    position: "Deputy Software Developer",
    from: "January 2022",
    to: "Present",
    role: "",
    description: "I'm a full-stack developer with experience in both frontend and backend development. I’ve been working with Vue.js 3 for the past three years and using FastAPI for about a year. I also have hands-on experience with Docker and AWS services like CloudWatch, DynamoDB, and S3. I spent six months working in Japan as an intra-company dispatch, which gave me valuable experience in a different work environment. For the past year, I’ve been focusing on Generative AI, where I’ve played a key role in developing multimodal features, refining prompt templates, and building the entire frontend experience. I enjoy creating seamless user experiences and optimizing AI-driven applications."
  },
  {
    id: 2,
    company: "Trend Micro",
    position: "Security Engineer",
    from: "February 2020",
    to: "April 2021",
    role: "",
    description: "As a Security Engineer, I provided technical assistance to customers experiencing issues with Trend Micro security products. I handled virus detection, malware removal, installation, configuration, and account management, offering support through phone, email, and chat. Staying up to date with the latest security threats and Trend Micro solutions allowed me to deliver effective and timely assistance to users."
  },
  {
    id: 3,
    company: "RBT Consulting",
    position: "Project-Based Software Developer",
    from: "September 2019",
    to: "Jabnuary 2022",
    role: "",
    description: "I was involved in developing a Human Resource System for Ateneo De Manila University, designed to streamline HR processes such as employee management, leave tracking, payroll processing, and performance evaluations. Using a structured and scalable approach, I worked on both the backend and frontend, ensuring seamless data management, secure authentication, and user-friendly interfaces. The system was built to improve efficiency, automate workflows, and provide comprehensive reporting features to support HR decision-making."
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
