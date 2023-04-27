import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/task-app",
      redirect: "https://todo-frontend-dun-one.vercel.app/"
    }
  ]
})
export default router;
