<template>
  <div data-aos="fade-right" data-aos-duration="500"  class="mt-10 lg:mt-20 text-center">
    <span class="inner-font text-white uppercase text-3xl lg:text-6xl font-bold">
      PORTFOLIO
    </span>
    <h1 data-aos="fade-up" data-aos-duration="100" class="inner-font text-white uppercase text-3xl lg:text-4xl font-bold teal">
      MY PROJECTS
    </h1>
    <br />
  </div>

  <div class="grid sm:grid-cols-1 lg:p-20 sm:p-10 md:p-10 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-10">
    <!-- Task Application -->
    <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1020" class="card bg-white rounded-lg md:col-span-1 md:p-8 p-5">
      <div class="mb-5">
        <img class="card-img rounded-md" src="../assets/img/task-app.png" alt="" style="width: 100%"/>
      </div>
      <div class="">
        <h5 class="mb-2 text-2xl font-bold tracking-tight teal">
          Task Application
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          This is a task application where you can log your task for personal or for work. 
          I used Vue JS for the frontend and Node Js for the backend. Note I used
          free subscription for the login authentication and the mongo db, kindly
          contact me first before testing the application.
        </p>
        <a
          href="https://todo-frontend-dun-one.vercel.app/"
          class="text-xl inline-flex items-center py-2 text-sm font-medium text-white"
        >
          See Project
          <svg
            aria-hidden="true"
            class="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
    <!-- Weather Application -->
    <!-- <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="800" class="card bg-white border border-gray-200 rounded-lg py-10">
      <div class="border-b-2 mb-5">
        <img class="mx-auto" src="../assets/svg/task-app.svg" alt="" />
      </div>
      <div class="px-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight teal">
          Weather Application
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          This is a task application where you can log your task for personal or for work. 
          I used Vue JS for the frontend and Node Js for the backend. Note I used
          free subscription for the login authentication and the mongo db, kindly
          contact me first before testing the application.
        </p>
        <a
          href="https://todo-frontend-dun-one.vercel.app/"
          class="text-xl inline-flex items-center py-2 text-sm font-medium "
        >
          See Project
          <svg
            aria-hidden="true"
            class="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div> -->
    <!-- Batanes Travel Website -->
     <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="800" class="card bg-white rounded-lg md:col-span-1 md:p-8 p-5">
      <div class="mb-5">
        <img  class="card-img rounded-md" src="../assets/img/task-app.png" alt="" style="width: 100%"/>
      </div>
      <div>
        <h5 class="mb-2 text-2xl font-bold tracking-tight teal">
          Batanes Travel Website
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          This is a task application where you can log your task for personal or for work. 
          I used Vue JS for the frontend and Node Js for the backend. Note I used
          free subscription for the login authentication and the mongo db, kindly
          contact me first before testing the application.
        </p>
        <a
          href="https://todo-frontend-dun-one.vercel.app/"
          class="text-xl inline-flex items-center py-2 text-sm font-medium text-white"
        >
          See Project
          <svg
            aria-hidden="true"
            class="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

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

.card {
  background-color: #292E36;
}

.card-img {
  width: 100%;
  /* height: 240px; */
}
</style>
