import { ADD_ARTICLE } from "../constants/action-types"
import { foundBadWord } from "../actions"

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