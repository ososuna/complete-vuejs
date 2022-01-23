import { reactive } from 'vue'
import { testPosts } from '../assets/data/testPosts'

class Store {
  constructor() {
    this.state = reactive({
      posts: testPosts,
      currentTag: null
    })
  }

  setHashtag(tag) {
    this.state.currentTag = tag
  }
}

 export const store = new Store()
