<template>
<div>
  <div class="cards">
    <Card
      v-for="pokemon in pokemons"
      :key="pokemon.id"
      @click="fetchEvolutions(pokemon)"
    >
    <template v-slot:title>
      {{ pokemon.name }}
    </template>
    <template v-slot:content>
      <img :src="pokemon.sprite" :alt="pokemon.name">
    </template>
    <template v-slot:description>
      <div v-for="type in pokemon.types" :key="type">
        {{ type }}
      </div>
    </template>
    </Card>
  </div>
  <div class="cards">
    <Card
      v-for="pokemon in evolutions"
      :key="pokemon.id"
    >
    <template v-slot:title>
      {{ pokemon.name }}
    </template>
    <template v-slot:content>
      <img :src="pokemon.sprite" :alt="pokemon.name">
    </template>
    <template v-slot:description>
      <div v-for="type in pokemon.types" :key="type">
        {{ type }}
      </div>
    </template>
    </Card>
  </div>
</div>
</template>

<script>

import Card from '@/components/Card'

const axios = require('axios')

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
})

const ids =  [1, 4, 7, 393, 501]

export default {
  name: 'App',
  components: {
    Card
  },
  data(){
    return {
      pokemons: [],
      evolutions: []
    }
  },
  methods: {
    async fetchData(ids) {
      const resp = await Promise.all(
        ids.map(id => api.get(`pokemon/${ id }`))
      )
      return resp.map( resp => ({
        id: resp.data.id,
        name: resp.data.name,
        sprite: resp.data.sprites.front_shiny,
        types: resp.data.types.map( type => type.type.name )
      }))
    },
    async fetchEvolutions(pokemon) {
      this.evolutions = await this.fetchData(
        [pokemon.id+1, pokemon.id+2]
       )
    }
  },
  async created() {
    this.pokemons = await this.fetchData(ids)
  }
}
</script>
