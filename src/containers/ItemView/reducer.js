export const itemContent = (state = {}, action) => {
  switch (action.type) {
    case 'getItemContent':
      return state = action.data
    case 'fowllerFlag':
      state.isCollection = action.fowllerFlag
      return state
    default:
      return state
  }
}
