export const listId = (state = '', action) => { // (1)
  switch (action.type) { // (2)
    case 'LIST_SELECTED':
      return action.listId;
    default:
      return state
  }
}