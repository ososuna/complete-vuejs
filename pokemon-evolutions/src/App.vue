<template>
<div>
  <PokemonCards
    :pokemons="pokemons"
    @selectedId="selectedId"
    @chosen="fetchEvolutions"
  />
  <PokemonCards
    :pokemons="evolutions"  
  />
</div>
</template>

<script>

import PokemonCards from '@/components/PokemonCards'

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
    PokemonCards
  },
  data(){
    return {
      pokemons: [],
      evolutions: [],
      selectedId: null 
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
       this.selectedId = pokemon.id
    }
  },
  async created() {
    this.pokemons = await this.fetchData(ids)
  }
}
</script>
