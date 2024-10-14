import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { makeObjectKeysLowercase } from "./utils";

const ASOCIADOS_URL = "https://j4hvvf8.localto.net/";

export const useAsociados = defineStore("asociados", () => {
	const asociados = ref([]);

	const asociadosConAvatar = computed(() => {
		return asociados.value
			.filter((asociado) => asociado.avatar !== "")
			.map((asociado) => {
				asociado.avatarUrl = `${ASOCIADOS_URL}pdf/${asociado.avatar}`;
				return asociado;
			});
	});

	const getAsociados = async () => {
		const response = await fetch(ASOCIADOS_URL);
		let data = await response.json();

		data = data.map(makeObjectKeysLowercase);

		data.sort((a, b) => a.nombre.localeCompare(b.nombre));

		asociados.value = data;
	};

	void getAsociados();

	return {
		asociados,
		asociadosConAvatar,
	};
});
