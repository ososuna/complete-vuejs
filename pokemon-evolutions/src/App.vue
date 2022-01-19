<template>
<div>
  <Card
    v-for="pokemon in pokemons"
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
      pokemons: []
    }
  },
  methods: {
    async fetchData() {
      const resp = await Promise.all(
        ids.map(id => api.get(`pokemon/${ id }`))
      )
      this.pokemons = resp.map( resp => ({
        id: resp.data.id,
        name: resp.data.name,
        sprite: resp.data.sprites.front_shiny,
        types: resp.data.types.map( type => type.type.name )
      }))
    }
  },
  created() {
    this.fetchData();
  }
}
</script>
