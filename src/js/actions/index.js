import { ADD_ARTICLE,
  DATA_LOADED,
  FOUND_BAD_WORD,
  REMOVE_ARTICLE } from "../constants/action-types"

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload }
}
export function removeArticle(payload) {
  return { type: REMOVE_ARTICLE, payload }
}
export function foundBadWord(payload) {
  return { type: FOUND_BAD_WORD, payload }
}
//TODO move into custom middleware to make cleaner
export function getData() {
  console.log("getData()")

  return function(dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: DATA_LOADED, payload: json });
      });
  };
}
