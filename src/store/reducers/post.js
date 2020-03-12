import { TYPES } from '@/store/actions'

const INIT_STATE = {}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case TYPES.UPDATE_POSTS:
      // console.log(action)
      return {
        ...state,
        posts: action.data
      } 
    case TYPES.FETCH_POSTS_REQUEST:
      return {
        ...state,
        submitting: action.type
      }
    case TYPES.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        submitting: null,
        posts: action.data
      }
    case TYPES.FETCH_POSTS_FAILURE:
      return {
        ...state,
        submitting: null,
        error: action.error
      }     
    default:
      return state
  }
}
