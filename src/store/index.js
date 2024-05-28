import { defineStore } from "pinia";
import { ref } from 'vue';

export default defineStore('main', () => {

  const data = ref([]);

  let promise;

  const getData = () => {
    if (!promise) {
      promise = new Promise(async (res) => {
        const fetchData = await fetch('https://pokeapi.co/api/v2/pokemon/')
          .then(d => d.json());
        
        data.value = fetchData.results;
        res();
      });
    }
    return promise;
  }

  return {
    data,
    getData
  }
});