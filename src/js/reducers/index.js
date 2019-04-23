import { ADD_ARTICLE, REMOVE_ARTICLE } from "../constants/action-types"

const initialState = {
  articles: []
}

function rootReducer(state = initialState, action) {

  switch (action.type) {
    case ADD_ARTICLE:
      return Object.assign({}, state, {
        articles: state.articles.concat(action.payload)
      })
    case REMOVE_ARTICLE:
      console.log('REDUCE MDTP', state);
      console.log('       MDTP', action);
      return Object.assign({}, state, {
        articles: state.articles.filter(function(thing){
          return thing.id !== action.payload.id
        })
      })
    default:
      return state
  }
}

export default rootReducer