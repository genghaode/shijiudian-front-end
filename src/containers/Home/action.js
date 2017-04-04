import { fetchBanner, fetchItem } from '../../utils'

export const getBannerAction = () => {
  return (dispatch, getState) => {
    fetchBanner().then((res) => {
      return dispatch({ type: "banner", data: res.data.data })
    }).catch((err) => {
      console.log(err)
    })
  }
}

export const getItemListLoadAction = () => {
  return (dispatch, getState) => {
    fetchItem(getState().itemListData.pageNum, 10, 'index', 'index').then((res) => {
      if (getState().itemListData.data.length < res.data.data.total) {
        return dispatch({ type: "itemListLoad", data: res.data.data.items })
      } else {
        return dispatch({ type: "itemListNomore" })
      }
    }).catch((err) => {
      console.log(err)
    })
  }
}
