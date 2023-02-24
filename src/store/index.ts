const useDemoStore = defineStore('index', () => {
  const counter = ref(0)

  const increment = () => {
    counter.value++
  }

  return {
    counter,
    increment
  }
})

export default useDemoStore