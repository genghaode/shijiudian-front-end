import { fetchItemList } from '../../utils'

export const getItemListDataAction = () => {
  return (dispatch, getState) => {
    const id = getState().routing.locationBeforeTransitions.query.id
    fetchItemList(getState().itemListCategoryData.pageNum, 'category', id).then((res) => {
      if (!res.data.status) {
        return dispatch({ type: "itemListCategoryNomore" })
      } else {
        return dispatch({ type: "itemListCategoryLoad", data: res.data.myData })
      }
    }).catch((err) => {
      console.log(err)
    })
  }
}
