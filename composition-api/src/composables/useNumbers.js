import { ref, computed, watch, watchEffect } from 'vue'

export function useNumbers() {
  // ref -> number, string
  const count = ref(0)
  const a = ref(0)
  const b = ref(0)
  const history = ref([])

  // reactive -> {}

  const increment = () => {
    count.value++
  }

  const total = computed( () => {
    return count.value + a.value + b.value
  })

  // In watch effect you can just pass it whatever you want (general)
  watchEffect(() => {
    console.log( a.value )
  })

  // In watch you need to specify what you're going to watch (specific)
  // If you'd like to compare the previous and new value you have to use ref
  watch([a, b], ([newA, newB], [oldA, oldB]) => {
    if (newA != oldA ) {
      history.value.push(`A: ${oldA} -> ${newA}`)
    }
    if (newB != oldB ) {
      history.value.push(`B: ${oldB} -> ${newB}`)
    }
  })

  // If you want to call it immediatly when the component is rendered as well everytime it changes
  // watch(numbers, (newVal) => {
  //   console.log( newVal )
  //   console.log (`a: ${newVal.a}. b: ${newVal.b}`)
  // }, {
  //   immediate: true
  // })

  return {
    a,
    b,
    count,
    history,
    increment,
    total
  }
}
