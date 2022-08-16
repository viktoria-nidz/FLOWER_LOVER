import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home-View",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/AboutView",
    name: "about-view",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/CatalogView",
    name: "catalog-view",
    component: () => import("../views/CatalogView.vue"),
  },
  {
    path: "/ProductView/:id",
    name: "product-view",
    component: () => import("../views/ProductView.vue"),
  },
  {
    path: "/ContactsView",
    name: "contacts-view",

    component: () => import("../views/ContactsView.vue"),
  },
  {
    path: "/DeliveryPaymentView",
    name: "delivery-payment-view",
    component: () => import("../views/DeliveryPaymentView.vue"),
  },
  {
    path: "/Error404View",
    name: "error-404-view",
    component: () => import("../views/Error404View.vue"),
  },
  {
    path: "/FaqView",
    name: "faq-view",
    component: () => import("../views/FaqView.vue"),
  },
  {
    path: "/PaymentFailView",
    name: "payment-fail-view",
    component: () => import("../views/PaymentFailView"),
  },
  {
    path: "/PaymentSuccessView",
    name: "payment-success-view",
    component: () => import("../views/PaymentSuccessView"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
