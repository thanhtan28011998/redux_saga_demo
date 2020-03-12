import { all } from 'redux-saga/effects'

import account from './account'
import post from './post'
import comment from './comment'

export default function* sagas() {
  yield all([
    account(),
    post(),
    comment()
  ])
}
