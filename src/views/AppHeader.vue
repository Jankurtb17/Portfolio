<template>
  <nav class="header relative z-10">
    <div
      class="flex flex-wrap justify-between p-4 w-full fixed md:top-0 md:left-0 md:right-0 md:px-10 lg:pr-5"
      :class="{ 'navbar-scroll': isScrolled }"
    >
      <a class="flex items-center">
        <span
          class="z-10 self-center text-2xl font-bold whitespace-nowrap dark:text-white"
          >JKWORKS</span
        >
      </a>

      <div class="cross" @click="openMenu">
        <div class="cross-line" ref="line1"></div>
        <div class="cross-line" ref="line2"></div>
        <!-- <div class="cross-line" ref="line3"></div> -->
      </div>
    </div>
  </nav>

  <transition name="slide">
    <div
      v-if="isToggle"
      class="drawer fixed top-0 right-0 lg:z-40 xl:z-40 h-screen p-4 w-96"
      tabindex="-1"
      aria-labelledby="drawer-right-label"
    >
      <div>
        <img class="-top-72 absolute" src="../assets/svg/dot-2.svg" />
      </div>
      <div>
        <img class="top-32 absolute" src="../assets/img/stick.png" />
      </div>
      <ul
        class="flex flex-col lg:mt-20 font-medium "
      >
        <li
          data-aos="fade-left"
          data-aos-duration="800"
          v-for="menu in menus"
          :key="menu.name"
          class="py-2"
        >
          <a
            class="relative duration-900 lg:top-32 md:top-44 left-14 text-2xl uppercase font-bold text-white drawer-link"
            :href="menu.id"
          >
            {{ menu.name }}
          </a>
        </li>
      </ul>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
const isToggle = ref(false);
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

const line1 = ref();
const line2 = ref();
const line3 = ref();

const openMenu = () => {
  isToggle.value = !isToggle.value;
  if (isToggle.value === true) {
    line1.value.style.transform = "rotate(45deg)";
    line2.value.style.transform = "rotate(-45deg)";
  } else {
    line1.value.style.transform = "rotate(0deg)";
    line2.value.style.transform = "rotate(0deg)";
  }
};

const menus = ref([
  {
    id: "#Skills",
    name: "Skills",
  },
  {
    id: "#Portfolio",
    name: "Portfolio",
  },
  {
    id: "#Experiences",
    name: "Experiences",
  },
  {
    id: "#Contact",
    name: "Contact",
  },
]);

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
  background-color: #31363c;
}

.drawer-link:hover {
  color: #29a587;
}

.cover {
}

.cross {
  position: relative;
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.cross-line {
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: white;
  transition: transform 0.2s ease-in-out;
}

.cross-line:nth-child(1) {
  top: 30%;
  transform-origin: 0% 40%;
}

.cross-line:nth-child(2) {
  top: 100%;
  transform-origin: 0% 40%;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-out;
}
</style>
