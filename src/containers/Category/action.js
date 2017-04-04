import { fetchCategory } from '../../utils'

export const getInitCategoryAction = () => {
  return (dispatch, getState) => {
    fetchCategory().then((res) => {
      return dispatch({ type: 'initCategoryData', data: res.data.data })
    }).catch((err) => {
      console.log(err)
    })
  }
}
