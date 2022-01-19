<template>
  <div class="card">
    <div class="title">
      Title 
    </div>
    <div class="content">
      Content
    </div>
    <div class="description">
      Description
    </div>
    <button @click="fetchData">Fetch</button>
  </div>
</template>

<script>

const axios = require('axios')

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  headers: {
      "Access-Control-Allow-Origin": "*"
  }
})

const ids =  [1, 4, 7]

export default {
  name: 'App',
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
      console.log(resp);
      this.pokemons = resp.map( resp => ({
        id: resp.data.id,
        name: resp.data.name,
        sprite: resp.data.sprites.front_shiny,
        types: resp.data.types.map( type => type.type.name )
      }))
    console.log(this.pokemons);
    }
  }
}
</script>

<style scoped>
.card {
  border: 1px solid silver;
  border-radius: 8px;
  max-width: 200px;
  margin: 0 5px;
  cursor: pointer;
  box-shadow: 0px 1px 3px darkgrey;
  transition: 0.2s;
}
.title, .content, .description {
  padding: 16px;
  text-transform: capitalize;
  text-align: center;
}
.title, .content {
  border-bottom: 1px solid silver;
}
.title {
  font-size: 1.25em;
}
.card:hover {
  transition: 0.2s;
  box-shadow: 0px 1px 9px darkgrey;
}
</style>
