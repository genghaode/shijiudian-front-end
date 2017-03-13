export const initCategoryData = (state = [], action) => {
  switch (action.type) {
    case 'initCategoryData':
      return state = action.data
    default:
      return state
  }
}
