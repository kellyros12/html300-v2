<template>
  <linkHeader>
    <template v-slot:link-one>
      Home
    </template>

    <template v-slot:link-two>
      Images
    </template>

    <template v-slot:link-three>
      Schedule
    </template>

    <template v-slot:link-four>
      About
    </template>

  </linkHeader>
</template>

<script>
  import linkHeader from './components/Header.vue';

  export default {
  name: 'app',
  components: {
    linkHeader
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.borders {
  border-style: dashed;
  border-color: blue;
  border-width: 1rem;
}

</style>
