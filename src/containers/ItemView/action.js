import { fetchItemContent, fetchFowllerFlag } from '../../utils'

export const getItemContentAction = (id) => {
  return (dispatch, getState) => {
    fetchItemContent({ id: id }).then((res) => {
      return dispatch({ type: 'getItemContent', data: res.data.myData })
    }).catch((err) => {
      console.log(err)
    })
  }
}

export const postFowllerAction = (id, cb) => {
  return (dispatch, getState) => {
    fetchFowllerFlag({ id: id }).then((res) => {
      cb()
      return dispatch({ type: 'fowllerFlag', fowllerFlag: res.data.myData.fowllerFlag })
    }).catch((err) => {
      console.log(err)
    })
  }
}
