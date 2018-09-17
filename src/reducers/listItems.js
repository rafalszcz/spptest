export const listItems = (state = [], action) => { // (1)
    switch (action.type) { // (2)
      case 'FETCH_LIST_ITEMS_SUCCESS':
        return [
          ...action.listItems
        ]
      default:
        return state
    }
  }