import { TYPES } from '@/store/actions'

const INIT_STATE = {}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case TYPES.UPDATE_COMMENTS:
      // console.log(action)
      return {
        ...state,
        comments: action.data
      } 
    case TYPES.FETCH_COMMENTS_REQUEST:
      return {
        ...state,
        submitting: action.type
      }
    case TYPES.FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        submitting: null,
        comments: action.data
      }
    case TYPES.FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        submitting: null,
        error: action.error
      }     
    default:
      return state
  }
}
