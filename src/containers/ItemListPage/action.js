import { fetchItemList } from '../../utils'

export const getItemListDataAction = () => {
  return (dispatch, getState) => {
    const id = getState().routing.locationBeforeTransitions.query.id
    const type = getState().routing.locationBeforeTransitions.query.type
    fetchItemList(getState().itemListCategoryData.pageNum, type, id).then((res) => {
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
