<template>
  <div class="jumbotron">
    <h1 class="display-4"> Hello{{ msg }}, welcome to the Growler's fanpage!</h1>
    <p class="lead">GSHL Div 4A Hockey Team</p>
    <hr class="my-2">
    <input type="text" placeholder="Enter your name" v-on:input="changeTitle">
    <h1 v-if="show">Go Growlers!</h1>
    <p v-else>Click the button if you're a Growler's fan!</p>
    <button type="button" v-on:click="show = !show" class="btn btn-primary" data-toggle="tooltip" data-placement="bottom" title="This button doesn't actually do anything, or does it?">
      Click here!
    </button>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        msg: '',
        show: false,
      }
    },
    methods: {
      changeTitle: function(event){
        this.msg = ' ' + event.target.value;
      }
    }
  }
</script>
