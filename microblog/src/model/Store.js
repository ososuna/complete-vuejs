import { reactive } from 'vue'
import { testPosts } from '../assets/data/testPosts'

class Store {
  constructor() {
    this.state = reactive({
      posts: testPosts
    })
  }
}

 export const store = new Store()
