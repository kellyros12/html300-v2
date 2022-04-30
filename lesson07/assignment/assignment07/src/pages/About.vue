<template>
  <h1 class="display-4">Meet (some) of the team!</h1>
  <div id="accordion">
    <div class="card" v-for="person in persons" v-bind:key="person">
      <div class="card-header" :id="'heading'+ person.card">
        <h5 class="mb-0">
          <button class="btn btn-link" data-toggle="collapse" :data-target="'#collapse' + person.card" aria-expanded="true" :aria-controls="'collapse' + person.card">
            {{ person.name }}
          </button>
        </h5>
      </div>
      <div :id="'collapse' + person.card" class="collapse show" :aria-labelledby="'heading' + person.card" data-parent="#accordion">
        <p class="ml-5">Number: {{ person.number }}</p>
        <p class="ml-5">Position: {{ person.position }} </p>
        <p class="ml-5">Shoots: {{person.shoots }} </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        persons:[
          {name: 'Kelly Ros', number: '12', position: 'Defense', shoots: 'Right', card: 1},
          {name: 'Darren Gordon', number: '42', position: 'Defense', shoots: 'Right', card: 2},
          {name: 'Beau Lynn-Miller', number: '00', position: 'Center', shoots: 'Left', card: 3}
        ]
      }
    }
  }
</script>


<!-- I'm not sure why this isn't collapsing anymore I entered the bootstrap accordion parameters the same as last assignment -->
