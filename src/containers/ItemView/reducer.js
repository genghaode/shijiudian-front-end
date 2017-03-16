export const itemContent = (state = [], action) => {
  switch (action.type) {
    case 'getItemContent':
      return state = [action.data]
    case 'fowllerFlag':
      state[0].fowllerFlag = action.fowllerFlag
      return state = [state[0]]
    default:
      return state
  }
}
