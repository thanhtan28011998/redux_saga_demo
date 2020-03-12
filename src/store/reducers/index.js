import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { localizeReducer } from 'react-localize-redux'

import { TYPES } from '@/store/actions'
import ui from './ui'
import account from './account'
import post from './post'
import comment from './comment'

const appReducer = (history) => combineReducers({
  router: connectRouter(history),
  localize: localizeReducer,
  ui,
  account,
  post,
  comment
})

export default (history) => (state, action) => {
  if (action.type === TYPES.CLEAR_STORE) {
    state = {
      localize: state.localize
    }
  }

  return appReducer(history)(state, action)
}
