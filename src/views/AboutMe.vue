<template>
  <div class="cover lg:grid lg:grid-cols-2 lg:pr-20 lg:pl-20 lg:mb-32">
    <div
      class="about sm:text-center md:text-center sm:pt-20 lg:mt-44 md:mt-20 lg:px-20 lg:pl-28"
    >
      <div class="mb-5">
        <span class="main-txt text-white">HELLO,</span>
        <span class="main-txt teal"> MY NAME IS </span><br />
      </div>
      <div class="mb-5">
        <span class="name main-txt teal text-3xl lg:text-7xl">JAN</span>
        <span class="name main-txt teal text-3xl lg:text-7xl">KURT</span>
        <span class="last main-txt text-3xl lg:text-7xl">BAYARAS</span>
      </div>
      <div class="mb-5">
        <span class="font-bold text-white text-2xl">I'M A </span>
        <span class="kalam text-white text-3xl">WEB DEVELOPER</span> <br />
      </div>

      <div class="icons-msg sm:hidden md:hidden lg:block">
        <div class="description sm:px-3 sm:py-4 md:py-10">
          <p
            class="text-center lg:text-left text-white leading-loose md:text-1xl"
          >
            from Batanes, Philippines. I have a 2-year experience in web
            development. I love to <br />
            talk with you about your unique.
          </p>
        </div>
        <div
          class="contact-icon flex sm:justify-center md:justify-center gap-3 mb-10 lg:mt-5"
        >
          <img
            class="h-8 md:h-12 cursor-pointer"
            src="../assets/svg/linkedin.svg"
            @click="linkedin"
          />
          <img
            class="h-8 md:h-12 cursor-pointer"
            src="../assets/svg/facebook.svg"
            @click="facebook"
          />
          <img
            class="h-8 md:h-12 cursor-pointer"
            src="../assets/svg/insta.svg"
            @click="instagram"
          />
        </div>
        <div class="btn-csv flex sm:justify-center md:justify-center">
          <button
            type="button"
            class="csv-btn py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            DOWNLOAD CV
          </button>
        </div>
      </div>
    </div>
    <div
      class="image-profile grid md:justify-items-center sm:justify-items-center lg:justify-items-center duration-400 lg:mt-10"
    >
      <img
        class="sm:w-80 sm:h-80 md:w-96 md:h-96 lg:mt-20"
        src="../assets/svg/me.png"
      />
    </div>
    <div class="icons-msg lg:hidden">
      <div class="description sm:px-3 sm:py-4 md:py-10">
        <p class="text-center text-white leading-loose md:text-1xl">
          from Batanes, Philippines. I have a 2-year experience in web
          development. I love to <br />
          talk with you about your unique.
        </p>
      </div>
      <div
        class="contact-icon flex sm:justify-center md:justify-center gap-3 mb-10"
      >
        <img class="h-8 md:h-12" src="../assets/svg/linkedin.svg" />
        <img class="h-8 md:h-12" src="../assets/svg/facebook.svg" />
        <img class="h-8 md:h-12" src="../assets/svg/insta.svg" />
      </div>
      <div class="btn-csv flex sm:justify-center md:justify-center">
        <button
          type="button"
          class="csv-btn py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Download CSV
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const linkedin = () => {
  window.location.href = "https://www.linkedin.com/in/jan-kurt-bayaras-25a10b16a/"
}

const facebook = () => {
  window.location.href = "https://www.facebook.com/JankurtB/"
}

const instagram = () => {
  window.location.href = "https://www.instagram.com/jan_kurt/"
}
</script>

<style scoped>
.about {
  border-left: 3px solid white;
}

.main-txt {
  font-family: "Inter", sans-serif;
  font-weight: 800;
}

.teal {
  color: #29a587;
}

.name {
  font-weight: 800;
  text-shadow: 3px 3px 0 black, -1px -1px 0 black, 1px -1px 0 black,
    -1px 1px 0 black;
}

.last {
  margin-left: 10px;
  font-weight: 800;
  text-shadow: 2px 2px 0 black, -1px -1px 0 black, 1px -1px 0 black,
    -1px 1px 0 black;
  color: #fff;
}

.image-profile {
  transition: width 1s ease-in-out;
}

.kalam {
  font-family: "Kalam", cursive;
}

.description p {
  color: #808387;
  font-size: 18px;
}

.csv-btn {
  border: 1px solid #808387;
  color: #808387;
}

@media only screen and (min-width: 320px) and (max-width: 480px) {
  .about {
    border-left: none;
  }
}

@media only screen and (min-width: 481px) and (max-width: 820px) {
  .about {
    border-left: none;
  }
}
</style>
