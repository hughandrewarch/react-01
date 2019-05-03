import { ADD_ARTICLE, FOUND_BAD_WORD, REMOVE_ARTICLE } from "../constants/action-types"

const initialState = {
  articles: []
}

function rootReducer(state = initialState, action) {

  switch (action.type) {
    case ADD_ARTICLE:
      return Object.assign({}, state, {
        articles: state.articles.concat(action.payload),
        foundBadWord: undefined
      })
    case REMOVE_ARTICLE:
      return Object.assign({}, state, {
        articles: state.articles.filter(function(thing){
          return thing.id !== action.payload.id
        })
      })
    case FOUND_BAD_WORD:
      return Object.assign({}, state, {
        foundBadWord: action.payload
      })
    default:
      return state
  }
}

export default rootReducer