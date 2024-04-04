import LoginView from "@/views/LoginView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: LoginView,
  },
  {
    path: "/game",
    name: "game",
    component: () => import("@/views/GameView.vue"),
  },
  // Default route for incorrect paths
  { path: '/:pathMatch(.*)', component: LoginView },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
