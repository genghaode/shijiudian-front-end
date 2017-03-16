import { fetchItemContent, fetchFowllerFlag } from '../../utils'

export const getItemContentAction = (id, cb) => {
  return (dispatch, getState) => {
    fetchItemContent(id).then((res) => {
      cb(res.data.myData)
      if (res.data.status) {
        dispatch({ type: 'loginSeccess' })
      } else {
        dispatch({ type: "loginError" })
      }
      return dispatch({ type: 'getItemContent', data: res.data.myData, loginStatus: res.data.status })
    }).catch((err) => {
      console.log(err)
    })
  }
}

export const postFowllerAction = (id, cb) => {
  return (dispatch, getState) => {
    fetchFowllerFlag(id).then((res) => {
      dispatch({ type: 'fowllerFlag', fowllerFlag: res.data.myData.fowllerFlag })
      return cb()
    }).catch((err) => {
      console.log(err)
    })
  }
}
