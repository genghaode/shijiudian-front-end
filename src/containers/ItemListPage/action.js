import { fetchItem } from '../../utils'

export const getItemListDataAction = () => {
  return (dispatch, getState) => {
    const id = getState().routing.locationBeforeTransitions.query.id
    const type = getState().routing.locationBeforeTransitions.query.type
    if (type == 'category') {
      fetchItem(getState().itemListCategoryData.pageNum, 10, type, id).then((res) => {
        if (getState().itemListCategoryData.data.length < res.data.data.total) {
          return dispatch({ type: "itemListCategoryLoad", data: res.data.data.items })
        } else {
          return dispatch({ type: "itemListCategoryNomore" })
        }
      }).catch((err) => {
        console.log(err)
      })
    } else if (type == 'collection') {
      fetchItem(getState().itemListCollectionData.pageNum, 10, type, id).then((res) => {
        if (getState().itemListCollectionData.data.length < res.data.data.total) {
          return dispatch({ type: "itemListCollectionLoad", data: res.data.data.items })
        } else {
          return dispatch({ type: "itemListCollectionNomore" })
        }
      }).catch((err) => {
        console.log(err)
      })
    } else {
      fetchItem(getState().itemListCategoryData.pageNum, 10, type, id).then((res) => {
        if (getState().itemListData.data.length < res.data.data.total) {
          return dispatch({ type: "itemListCategoryLoad", data: res.data.data.items })
        } else {
          return dispatch({ type: "itemListCategoryNomore" })
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
