import { ADD_ARTICLE, DATA_LOADED, GET_DATA } from "../constants/action-types"
import { dataLoaded, foundBadWord } from "../actions"

const forbiddenWords = ["crap", "boobs", "crap"];

export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next){
    return function(action){
      switch (action.type) {
        case ADD_ARTICLE:

          let foundWord = false;
          forbiddenWords.forEach(word =>
            foundWord = foundWord || action.payload.title.includes(word)
          );

          if(foundWord) {
            return dispatch(foundBadWord("the word: '" + action.payload.title + "' is forbidden"));
          }
          break;
        default:
      }
      return next(action)
    }
  }
}

export function pageMiddleware({ dispatch }) {
  return function(next){
    return function(action){
      switch (action.type) {
        case GET_DATA:
          return dispatch(function(dispatch) {
            return fetch("https://jsonplaceholder.typicode.com/posts")
              .then(response => response.json())
              .then(json => {
                dispatch(dataLoaded(json));
              });
          });
        default:
      }
      return next(action)
    }
  }
}