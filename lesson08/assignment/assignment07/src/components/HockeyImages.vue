<template>
  <div class="hockeyImages">
    <img
    :src="img"
    class="img-fluid mt-1 mb-1"
    :alt="alt"
    :title="title"
    v-on:click="toggleShow()"
    :class="{'borders': isShowing}"
    >
  </div>
</template>

<script>

import {toggle} from './mixins/toggle'

<!-- basically just moved my v-for from images.vue to here, added in a title attribute
also added a mixin to show a blue border, which is the color of my hockey team -->

export default {
  name: 'hockeyImages',
  mixins: [toggle],
  props: {
    img: String,
    alt: String,
    title: String
  }
}
<!-- Added in validation, should expect a string for img, alt, and title -->
</script>
