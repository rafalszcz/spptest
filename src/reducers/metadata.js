export const metadata = (state = {}, action) => { // (1)
    switch (action.type) { // (2)
      case 'FETCH_METADATA_SUCCESS':
        return action.metadata
      default:
        return state
    }
  }