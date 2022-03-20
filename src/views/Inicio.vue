
<template>
  <h1 id="sep" class="text-center">POSTS</h1>
  <div class="container">
    <div class="entry-scrollarea row" v-for='entradas in entradas' :key="entradas.id">
       <li class="d-flex flex-column list-group-item">

         <div class="p-2">Usuario: {{ entradas.userId }}</div>
         <div class="p-2">Entrada: {{ entradas.id }}</div>
         <div class="p-2">Titulo: {{ entradas.title }}</div>
         <div class="p-2">Body: {{ entradas.body }}</div>

      </li>
    </div>
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

<style>



</style>