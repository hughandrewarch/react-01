import { ADD_ARTICLE, DATA_LOADED, FOUND_BAD_WORD, GET_DATA, REMOVE_ARTICLE } from "../constants/action-types"

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload }
}
export function removeArticle(payload) {
  return { type: REMOVE_ARTICLE, payload }
}
export function foundBadWord(payload) {
  return { type: FOUND_BAD_WORD, payload }
}
export function dataLoaded(payload) {
  return { type: DATA_LOADED, payload }
}
export function getData() {
  return { type: GET_DATA }
}
