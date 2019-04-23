import { ADD_ARTICLE } from "../constants/action-types"
import { REMOVE_ARTICLE } from "../constants/action-types"

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload }
}
export function removeArticle(payload) {
  console.log("actions.js")
  return { type: REMOVE_ARTICLE, payload }
}