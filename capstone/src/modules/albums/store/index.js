import state from './state'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

const albumsModule =  {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}

export default albumsModule