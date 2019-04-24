import { ADD_ARTICLE, FOUND_BAD_WORD, REMOVE_ARTICLE } from "../constants/action-types"

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
      return Object.assign({}, state, {
        articles: state.articles.filter(function(thing){
          return thing.id !== action.payload.id
        })
      })
    //TODO mapStateToProps in new component to be able to see this message
    case FOUND_BAD_WORD:
      console.log(action.payload)
      return Object.assign({}, state, {
        foundBadWord: action.payload
      })
    default:
      return state
  }
}

export default rootReducer