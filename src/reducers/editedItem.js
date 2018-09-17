export const editedItem = (state = {}, action) => { // (1)
    switch (action.type) { // (2)
      case 'SET_EDITED_ITEM':
        return action.editedItem
      default:
        return state
    }
  }