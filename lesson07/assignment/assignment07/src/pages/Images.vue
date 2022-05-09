<template>
  <h1 class="display-4 ml-4">Growlers vs Skeletons</h1>
<!--
  <div id="growlersCarousel" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#growlersCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#growlersCarousel" data-slide-to="1"></li>
      <li data-target="#growlersCarousel" data-slide-to="2"></li>
      <li data-target="#growlersCarousel" data-slide-to="3"></li>
      <li data-target="#growlersCarousel" data-slide-to="4"></li>
    </ol>
    <div class="carousel-inner">
      <div v-for="(image, index) in images" class="carousel-item" :class="{ active: index==0 }" v-bind:key="image">
        <img :src="image.img" class="img-fluid" :alt="image.alt">
      </div>
    </div>
    <a class="carousel-control-prev" href="#growlersCarousel" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#growlersCarousel" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>

I couldn't get my carousel to work like in the previous assignment... so I just put out the photos :/
-->

<div v-for="image in images" v-bind:key="image">
  <img :src="image.img" class="img-fluid mt-1 mb-1" :alt="image.alt">
</div>
</template>

<script>
  import Image1 from '@/assets/Growlers-1.jpg'
  import Image2 from '@/assets/Growlers-2.jpg'
  import Image3 from '@/assets/Growlers-3.jpg'
  import Image4 from '@/assets/Growlers-4.jpg'
  import Image5 from '@/assets/Growlers-5.jpg'

  export default {
    data() {
      return {
        images: [
        { img: Image1, alt: 'Close up of Luke Sulek' },
        { img: Image2, alt: 'Marc Chaflant chasing a loose puck' },
        { img: Image3, alt: 'Growlers player about to lose the puck' },
        { img: Image4, alt: 'Beau Lynn-Miller getting hooked' },
        { img: Image5, alt: 'Beau Lynn-Miller reaching for the puck' }
        ]
      }
    }
  }
</script>
