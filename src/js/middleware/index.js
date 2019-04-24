import { ADD_ARTICLE } from "../constants/action-types"
import { founBadWord } from "../actions"

const forbiddenWords = ["crap", "boobs", "crap"];

export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next){
    return function(action){
      switch (action.type) {
        case ADD_ARTICLE:
          const foundWord = forbiddenWords.filter(word =>
            action.payload.title.includes(word)
          );
          if(foundWord.length) {
            return dispatch(founBadWord(foundWord + " is forbidden"));
          }
          break;
        default:
      }

      // do your stuff
      return next(action)
    }
  }
}