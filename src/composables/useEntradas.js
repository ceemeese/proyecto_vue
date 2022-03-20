import { ref } from 'vue'

const useEntradas = () => {
    const entradas = ref([])
    const isLoading = ref(true)
    const errorMissage = ref()

    const getEntradas = async() => {
        
        isLoading.value = true

        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
        //podriamos hacer mixin en vez de composable pero por si en un futuro se modificara y se necesitara pasar parámetros, se genera composable
        
        if (data.data.lenght > 0) {
            entradas.value = data.data
            errorMissage.value = null
        }

        isLoading.value = false
    }

    getEntradas()

    return {

        entradas,
        isLoading,
        errorMissage,

        getEntradas,
    }
}

export default useEntradas