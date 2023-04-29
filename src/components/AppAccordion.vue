<template>
  <div
    class="flex justify-between items-center border-b py-5 px-2 duration-400"
    :class="{ 'border-none': isOpen }"
  >
    <div class="text-xl font-medium text-white">
      <slot name="title"></slot>
    </div>
    <button
      @click="isOpen = !isOpen"
      :class="{ 'rotate-180': isOpen }"
      class="transform transition-transform duration-400 text-white hover:text-gray-800 focus:outline-none focus:text-gray-800"
    >
      <svg
        class="h-5 w-5"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="white"
      >
        <path d="M19 9l-7 7-7-7"></path>
      </svg>
    </button>
  </div>
  <Transition name="slide">
    <div
      v-show="isOpen"
      class="px-4 py-2"
      :class="{ 'border-b duration-400': isOpen }"
    >
      <slot name="body"></slot>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import { ref } from "vue";

defineProps({
  title: {
    type: String,
    required: false,
  },
});

const isOpen = ref(false);
</script>

<style scoped>
.slide-enter-from,
.slide-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s ease-in-out;
}
</style>
