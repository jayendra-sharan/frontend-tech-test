const actionTypes = {
  'UPDATE_CURRENT_TAB': 'UPDATE_CURRENT_TAB',
  'APP_DATA': {
    'FETCH_APP_DATA_START': 'FETCH_APP_DATA_START',
    'FETCH_APP_DATA_SUCCESS': 'FETCH_APP_DATA_SUCCESS',
    'FETCH_APP_DATA_FAILED': 'FETCH_APP_DATA_FAILED',
    'FETCH_TAB_DATA_SUCCESS': 'FETCH_TAB_DATA_SUCCESS',
    'FETCH_TAB_DATA_FAILED': 'FETCH_TAB_DATA_FAILED',
    'UPDATE_COUNT': 'UPDATE_COUNT',
    'UPDATE_BUCKETS': 'UPDATE_BUCKETS'
  },
  'TASK': {
    'UPDATE_TASK': {
      'UPDATE_START': 'UPDATE_START',
      'UPDATE_SUCCESS': 'UPDATE_SUCCESS',
      'UPDATE_FAILED': 'UPDATE_FAILED'
    }
  }
}

export default actionTypes;
