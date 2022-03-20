
<template>
  <h1>POSTS</h1>
  <div v-for='entradas in entradas' :key="entradas.id">
    
    <h3>Usuario: {{ entradas.userId }} </h3> 
    <h3>Entrada: {{ entradas.id }} </h3> 
    <h3>Título: {{ entradas.title }} </h3> 
    <h3>Body: {{ entradas.body }} </h3> 

  </div>
</template>

<script>

  export default {
      name: 'Inicio',

      data () {
        return {
          apiData: null,
        };
      },

      computed: {
        entradas() {
          return this.$store.state.entradas
        },
      },

      async mounted() {
        this.$store.dispatch("getEntradas");
      },
    };
</script>