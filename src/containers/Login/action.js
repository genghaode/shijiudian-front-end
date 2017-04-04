import { fetchLogin } from '../../utils'

export const postLoginAction = (cb, obj) => {
  return (dispatch, getState) => {
    fetchLogin(obj).then((res) => {
      cb(res.data.code)
      if (res.data.code == 0) {
        return dispatch({ type: "loginSeccess" })
      } else {
        return dispatch({ type: "loginError" })
      }

    }).catch((err) => {
      console.log(err)
    })
  }
}
