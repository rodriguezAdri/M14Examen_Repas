import { ref } from 'vue';
export function useEmbassaments() {
  const embassaments = ref([]);
  const fetchEmbassaments = async () => {
    const res = await fetch('https://analisi.transparenciacatalunya.cat/resource/gn9e-3qhr.json');
    const data = await res.json();
    const nomsUnics = [...new Set(data.map(e => e.estaci))];
    embassaments.value = nomsUnics;
  };
  const fetchDetallEmbassament = async (nom) => {
    const url = `https://analisi.transparenciacatalunya.cat/resource/gn9e-3qhr.json?$query=SELECT%20dia,estaci,nivell_absolut,percentatge_volum_embassat,volum_embassat%20WHERE%20estaci=%27${nom}%27%20ORDER%20BY%20dia%20DESC%20LIMIT%20100`;
    const res = await fetch(url);
    return await res.json();
  };
  return { embassaments, fetchEmbassaments, fetchDetallEmbassament };
}