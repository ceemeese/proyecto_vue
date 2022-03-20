<template>
  <div>
    <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-light">
      <span class="navbar-brand mb-0 h1">
        <img id="vue" alt="Vue logo" src="../src/assets/logo.png" class="d-inline-block align-top" width="30" height="30">
        PROYECTO GEEKSHUBS VUE
      </span>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
              <router-link class="nav-link" :to="{ name: 'inicio'}">Inicio</router-link> 
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'contacto'}">Contacto</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'autor'}">Autor</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>

  <router-view/>
</template>

<script>
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 20px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #da2f76;
}
</style>
