exact-active-class"active" class="nav-link"<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span></button>
    <div id="navbarNav" class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <li class="nav-item"><router-link exact-active-class="active" class="nav-link" to="/">Home</router-link></li>
        <li class="nav-item"><router-link exact-active-class="active" class="nav-link" to="/images">Images</router-link></li>
        <li class="nav-item"><router-link exact-active-class="active" class="nav-link" to="/schedule">Schedule</router-link></li>
        <li class="nav-item"><router-link exact-active-class="active" class="nav-link" to="/about">About</router-link></li>
      </ul>
    </div>
  </nav>
  <router-view></router-view>
</template>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
