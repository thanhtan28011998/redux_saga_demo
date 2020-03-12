import { all, takeLatest } from 'redux-saga/effects'

import sagaHelper from '@/utils/saga-helper'
import { TYPES } from '@/store/actions'
import { fetchPosts } from '@/api/post'

export default function* watcher() {
  yield all([
    takeLatest(TYPES.FETCH_POSTS, sagaHelper({
      api: fetchPosts
    }))
  ])
}
