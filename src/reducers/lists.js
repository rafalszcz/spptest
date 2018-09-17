export const lists = (state = [], action) => { // (1)
    switch (action.type) { // (2)
      case 'FETCH_LIST_SUCCESS':
        return [
          ...action.lists
        ]
      default:
        return state
    }
  }