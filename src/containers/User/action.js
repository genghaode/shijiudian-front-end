import { fetchLogout } from '../../utils'

export const logoutAction = (cb) => {
  return (dispatch, getState) => {
    fetchLogout().then((res) => {
      sessionStorage.setItem('loginStatus', '0')
      dispatch({ type: 'loginError' })
      return cb()
    }).catch((err) => {
      console.log(err)
    })
  }
}
