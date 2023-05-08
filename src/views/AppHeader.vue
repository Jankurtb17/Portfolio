<template>
  <nav class="header relative z-10">
    <div
      class="flex flex-wrap justify-between p-4 w-full fixed md:top-0 md:left-0 md:right-0 md:px-10 lg:pr-5 "
      :class="{ 'navbar-scroll': isScrolled }"
    >
      <a class="flex items-center">
        <span
          class="z-10 self-center text-2xl font-bold whitespace-nowrap dark:text-white"
          >JKWORKS</span
        >
      </a>
      <button
        @click="openMenu"
        id="mega-menu-full-image-button"
        data-collapse-toggle="mega-menu-full-image"
        type="button"
        class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="mega-menu-full-image"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      </div>
    </nav>

      <div
        data-aos="fade-left"
        v-if="isToggle"
        class="drawer fixed top-0 right-0 lg:z-40 xl:z-40 h-screen p-4 transition ease-in-out translate-x-full w-96 "
        tabindex="-1" aria-labelledby="drawer-right-label">
        <ul
          class="flex flex-col lg:mt-20 font-medium md:flex-row md:space-x-8 md:mt-0"
        >
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              aria-current="page"
              >Skills</a
            >
          </li>
          <li>
            <button
              id="mega-menu-full-cta-image-button"
              data-collapse-toggle="mega-menu-full-image-dropdown"
              class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Porftolio
            </button>
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >Resume</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >Contact</a
            >
          </li>
        </ul>
      </div>

</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
const isToggle = ref(false)
const Menu = (e) => {
  let list: any = document.querySelector("ul");
  e.name === "menu"
    ? ((e.name = "close"),
      list.classList.add("top-[80px]"),
      list.classList.add("opacity-100"))
    : ((e.name = "menu"),
      list.classList.remove("top-[80px]"),
      list.classList.remove("opacity-100"));
};
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.pageYOffset > 0;
};

const openMenu = () => {
  isToggle.value = !isToggle.value
}

// onMounted(() => {
//   window.addEventListener("scroll", handleScroll);
// });
</script>

<style scoped>
nav {
  transition: background-color 0.3s ease-in;
  z-index: 999;
}

.navbar-scroll {
  background-color: #1d222a; /* change background color */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* add box shadow */
}

.drawer {
  background-color: #31363C;
}
</style>
