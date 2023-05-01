<template>
  <div class="mt-20 text-center">
    <span class="inner-font text-white uppercase text-3xl lg:text-6xl font-bold">
      PROFESSIONAL
    </span>
    <span class="inner-font text-white uppercase text-3xl  lg:text-6xl  font-bold sm:hidden md:hidden"
      >SKILLS
    </span>
    <br />
    <span class="inner-font text-white uppercase text-3xl font-bold lg:hidden"
      >SKILLS
    </span>
  </div>

  <div class="lg:grid lg:grid-cols-3">
    <div 
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      class="skills p-10 lg:p-20 lg:grid" v-for="skill in skills" :key="skill.language">
      <div>
        <div class="flex justify-between mb-4">
          <span class="semi-white text-3xl font-bold">{{ skill.language }}</span>
          <div>
            <span class="semi-white text-3xl font-bold">{{ skill.percent }}</span>
            <span class="teal text-3xl font-bold">%</span>
          </div>
        </div>
        <div class="inner-font semi-white text-justify mb-5">
          {{ skill.text }}
        </div>
      </div>
      <div>
        <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
          <div
            class="bg-teal-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
            :style="{width: skill.percent+'%'}"
          ></div>
        </div>
      </div>
   
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const skills = ref([
  {
    language: "HTML",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex placeatdolore, beatae ipsam suscipit corrupti deserunt officia vitae eligendicumque error architecto quidem velit aliquam hic facilis eum nisi enim",
    percent: 90,
  },
  {
    language: "CSS",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex placeatdolore, beatae ipsam suscipit corrupti deserunt officia vitae eligendicumque error architecto quidem velit aliquam hic facilis eum nisi enim",
    percent: 70,
  },
  {
    language: "JAVASCRIPT",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex placeatdolore, beatae ipsam suscipit corrupti deserunt officia vitae eligendicumque error architecto quidem velit aliquam hic facilis eum nisi enim",
    percent: 70,
  },
  {
    language: "VUE JS",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex placeatdolore, beatae ipsam suscipit corrupti deserunt officia vitae eligendicumque error architecto quidem velit aliquam hic facilis eum nisi enim",
    percent: 60,
  },
  {
    language: "LARAVEL",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex placeatdolore, beatae ipsam suscipit corrupti deserunt officia vitae eligendicumque error architecto quidem velit aliquam hic facilis eum nisi enim",
    percent: 30,
  },
  {
    language: "TAILWIND",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex placeatdolore, beatae ipsam suscipit corrupti deserunt officia vitae eligendicumque error architecto quidem velit aliquam hic facilis eum nisi enim",
    percent: 50,
  },
  {
    language: "ELEMENT PLUS",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex placeatdolore, beatae ipsam suscipit corrupti deserunt officia vitae eligendicumque error architecto quidem velit aliquam hic facilis eum nisi enim",
    percent: "60",
  },
]);
</script>

<style scoped>
.teal {
  color: #29a587;
}

.semi-white {
  color: #EAEAEA;
}

.inner-font {
  font-family: "Inter", sans-serif;
}


</style>
