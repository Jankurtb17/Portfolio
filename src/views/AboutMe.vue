<template>
  <div class="sm:text-center md:text-center mt-20">
    <div class="mb-5">
      <span class="main-txt text-white">HELLO,</span>
      <span class="main-txt teal"> MY NAME IS </span><br />
    </div>
    <div class="mb-5">
      <span class="name main-txt teal text-3xl">JAN</span>
      <span class="name main-txt teal text-3xl">KURT</span>
      <span class="last main-txt text-3xl">BAYARAS</span>
    </div>
    <div class="mb-5">
      <span class="font-bold text-white">I'M A </span> <span class="kalam text-white">WEB DEVELOPER</span>  <br />
    </div>
  </div>
  <div class="image-profile grid md:justify-items-center sm:justify-items-center duration-400">
    <img class="sm:w-80 sm:h-80 md:w-96 md:h-96" src="../assets/img/0125.png"/>
  </div>
  <div class="description sm:px-3 sm:py-4 md:py-10">
    <p class="text-center text-white leading-loose md:text-1xl">
      from Batanes, Philippines. I have a 2-year experience  in web development. I love to <br> talk with you about your unique.
    </p>
  </div>
  <div class="contact-icon flex sm:justify-center md:justify-center gap-3 mb-10">
    <img class="h-8 md:h-12" src="../assets/svg/linkedin.svg" />
    <img class="h-8 md:h-12" src="../assets/svg/facebook.svg" />
    <img class="h-8 md:h-12" src="../assets/svg/insta.svg" />
  </div>
  <div class="btn-csv flex sm:justify-center md:justify-center">
    <button type="button" class="csv-btn py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Download CSV</button>
  </div>
</template>

<style scoped>
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
  font-family: 'Kalam', cursive;
}

.description p {
  color: #808387;
  font-size: 18px;
}

.csv-btn {
  border: 1px solid #808387;
  color: #808387;
}
</style>
