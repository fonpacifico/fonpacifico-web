import { createApp } from "vue";
import { router } from "./server";
import { createPinia } from "pinia";

import fadeIn from "./directives/fadeIn";
import Primevue from "primevue/config";
import App from "./App.vue";

import "./sass/main.scss";

createApp(App)
	.directive("fade-in", fadeIn)
	.use(Primevue, {
		unstyle: true,
	})
	.use(createPinia())
	.use(router)
	.mount("#app");
