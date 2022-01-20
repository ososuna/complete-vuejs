<template>
<div>
  <div class="cards">
    <Card
      v-for="pokemon in pokemons"
      :key="pokemon.id"
      @click="click(pokemon)"
      :class="{
        opace: selectedId && pokemon.id !== selectedId
      }"
      class="card"
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
      class="card"
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

export default {
  name: 'PokemonCards',
  components: {
    Card
  },
  props: {
    pokemons: {
      type: Array,
      default() {
        return []
      }
    },
    selectedId: {
      type: Number
    }
  },
  methods: {
    click(pokemon) {
      this.$emit('chosen', pokemon)
    }
  }
}
</script>

<style scoped>
.opace {
  opacity: 0.5;
}
.card {
  border: 1px solid silver;
  border-radius: 8px;
  max-width: 200px;
  margin: 0 5px;
  cursor: pointer;
  box-shadow: 0px 1px 3px darkgrey;
  transition: 0.2s;
}
.card:hover {
  opacity: 1.0;
}
</style>
