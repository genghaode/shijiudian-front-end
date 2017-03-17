export const itemListCategoryData = (state = { pageNum: 1, data: [], status: 'more' }, action) => {
  switch (action.type) {
    case 'itemListCategoryLoad':
      return state = { pageNum: state.pageNum + 1, data: state.data.concat(action.data) }
    case 'itemListCategoryNomore':
      return state = { pageNum: state.pageNum, data: state.data, status: 'nomore' }
    case 'initPageNum':
      return state = { pageNum: 1, data: [], status: 'more' }
    default:
      return state
  }
}
