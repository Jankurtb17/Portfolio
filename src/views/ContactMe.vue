<template>
  <div class="p-10 px-10">
    <div >
      <h1 data-aos="fade-right" data-aos-duration="500" class="text-center inner-font text-white uppercase text-3xl lg:text-6xl font-bold mb-4">LET'S TALK </h1>
      <h1 data-aos="fade-right" data-aos-duration="1000" class="text-center kalam inner-font text-white uppercase text-3xl lg:text-4xl font-bold mb-10">ABOUT YOUR IDEAS </h1>
    </div>
    <div class="grid sm:grid-cols-1 md:grid-cols-1 lg: grid-cols-2">
      <div data-aos="fade-up" class="contact">
        <h1 class="text-center inner-font text-white uppercase text-3xl lg:text-3xl font-bold mb-10">CONTACT ME </h1>
        <form class="px-20 sm:px-0 md:px-0">
          <div class="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 gap-10">
            <div>
              <h1 class="form-txt text-white pb-2 "> Name</h1>
              <input type="text" v-model="form.name" class="inputs w-full py-4 rounded-full border-2 text-white px-5 outline-none"/>
            </div>
            <div>
              <h1 class="form-txt text-white pb-2 "> Email</h1>
              <input type="text" v-model="form.email" class="inputs w-full py-4 rounded-full  border-2 text-white px-5 outline-none"/>
            </div>
          </div>
          <div>
            <div>
              <h1 class="form-txt text-white pb-2 mt-4 "> Message</h1>
              <textarea rows="6" type="text" v-model="form.message" class="inputs w-full py-5 rounded-3xl border-2 text-white px-5 outline-none"/>
            </div>
          </div>
          <div>
            <button class="btn-send px-8 bg-white py-3 rounded-full border-2 text-white mt-5 duration-1000 uppercase font-bold">Send Message</button>
          </div>
        </form>
      </div>
      <div class="contact-info">
        <h1 class=" inner-font text-white uppercase text-3xl lg:text-3xl font-bold mb-10 sm:text-center md:text-center sm:mt-10">Info </h1>
        <!-- ICONS -->
        <div data-aos="fade-up" class="grid grid-cols-4 sm:gap-10">
          <div class="icons grid grid-cols-1 gap-y-10">
            <div class="rounded-full  w-20">
              <img src="../assets/svg/contact.svg" class="h-13 py-3 px-3" />
            </div>
            <div class="rounded-full  w-20">
              <img src="../assets/svg/email.svg" class="h-13 py-3 px-3" />
            </div>
            <div class="rounded-full  w-20">
              <img src="../assets/svg/location.svg" class="h-13 py-3 px-3" />
            </div>
          </div>
          <!-- Info -->
          <div data-aos="fade-up" class="grid grid-cols-1 gap-y-10 col-span-3">
            <div class="py-3">
              <h1 class="kalam text-2xl h-13">Phone</h1>
              <span class="text-white">0956 501 1210 / 0998 279 7228</span>
            </div>
            <div class="py-3">
              <h1 class="kalam text-2xl">Email</h1>
              <span class="text-white">j.kurtbayaras@gmail.com</span>
            </div>
            <div class="grid py-3">
              <h1 class="kalam text-2xl">Address</h1>
              <span class="text-white">9391 Felipe street, brgy. Guadalupe Nuevo</span> 
              <span class="text-white">Makati, Metro Manila</span> 
              <span class="text-white">1212</span>
            </div>
            
          </div>
        </div>
        </div>
    </div>
  </div>

</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';

interface Form {
  name: string
  email: string
  message: string
}

const form: Form = reactive({
  name: "",
  email: "",
  message: ""
})

</script>

<style scoped>


.teal {
  color: #29a587;
}

.kalam {
  font-family: "Kalam", cursive;
  color: #29a587;
}


.form-txt {
  font-family: 'Inter', sans-serif;
  text-transform: uppercase;
  font-weight: 600;
}

.btn-send {
  background-color: #1d222a;
}

.btn-send:hover{
  background-color: #29a587;
}

.inputs {
  background-color: #1d222a;
}
</style>