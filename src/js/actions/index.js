import { ADD_ARTICLE, FOUND_BAD_WORD } from "../constants/action-types"
import { REMOVE_ARTICLE } from "../constants/action-types"

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload }
}
export function removeArticle(payload) {
  return { type: REMOVE_ARTICLE, payload }
}
export function foundBadWord(payload) {
  return { type: FOUND_BAD_WORD, payload }
}