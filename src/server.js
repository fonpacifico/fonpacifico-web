import { createWebHistory, createRouter } from "vue-router";

const routes = [
	{ path: "/", name: "home", component: () => import("./views/HomeView.vue") },
	{
		path: "/nosotros",
		name: "nosotros",
		component: () => import("./views/NosotrosView.vue"),
	},
	{
		path: "/contratacion",
		name: "contratacion",
		component: () => import("./views/ContratacionView.vue"),
	},
	{
		path: "/transparencia",
		name: "transparencia",
		component: () => import("./views/TransparenciaView.vue"),
	},
	{
		path: "/contacto",
		name: "contacto",
		component: () => import("./views/ContactoView.vue"),
	},
	{
		path: "/servicios",
		name: "servicios",
		component: () => import("./views/ServiciosView.vue"),
	},
	{
		path: "/:pathMatch(.*)*",
		name: "notFound",
		component: () => import("./views/NotFoundView.vue"),
	},
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
