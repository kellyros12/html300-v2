<template>
  <div class="my-header">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    <div id="navbarNav" class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <navLi
        v-for="navLink in navLinks"
        v-bind:key="navLink"
        :urlPath="navLink.urlPath"
        >
          <slot :name="'link-' + (navLink.name)"></slot>
        </navLi>
      </ul>
    </div>
    </nav>
  </div>
  <router-view></router-view>
  <!-- When I had router view on this, i forgot to remove it from app.vue so everything showed up twice -->
</template>

<script>
  import navLi from './Navli.vue';

  export default {
    name: 'my-header',
    components : {
      navLi
    },
    data() {
      return {
        navLinks: [
          {urlPath: '/', name: 'one'},
          {urlPath: '/images', name: 'two'},
          {urlPath: '/schedule', name: 'three'},
          {urlPath: '/about', name: 'four'}
        ],
      }
    }
  }
</script>
