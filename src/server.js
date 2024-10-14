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
		path: "/programas-y-cursos",
		name: "programasYCursos",
		component: () => import("./views/ProgramasYCursosView.vue"),
	},
	{
		path: "/convocatorias",
		name: "convocatorias",
		component: () => import("./views/ConvocatoriasView.vue"),
	},
	{
		path: "/inscripcion",
		name: "inscripcion",
		component: () => import("./views/InscripcionView.vue"),
	},
	{
		path: "/pqrsd",
		name: "pqrsd",
		component: () => import("./views/PQRSDView.vue"),
	},
	{
		path: "/politicas",
		name: "politicas",
		component: () => import("./views/PoliticasView.vue"),
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
	scrollBehavior(to, from, savedPosition) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve({ left: 0, top: 0 });
			}, 500);
		});
	},
});
