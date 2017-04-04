import { fetchItemView, fetchCollection } from '../../utils'

export const getItemContentAction = (id, cb) => {
  return (dispatch, getState) => {
    fetchItemView(id).then((res) => {
      cb(res.data.data)
      // if (res.data.code == 0) {
      //   dispatch({ type: 'loginSeccess' })
      // } else {
      //   dispatch({ type: "loginError" })
      // }

      return dispatch({ type: 'getItemContent', data: res.data.data })
    }).catch((err) => {
      console.log(err)
    })
  }
}

export const postFowllerAction = (id, cb) => {
  return (dispatch, getState) => {
    fetchCollection(id).then((res) => {
      if (res.data.code == 0) {
        dispatch({ type: 'fowllerFlag', fowllerFlag: res.data.data.isCollection })
      }
      return cb(res.data.code)
    }).catch((err) => {
      console.log(err)
    })
  }
}
