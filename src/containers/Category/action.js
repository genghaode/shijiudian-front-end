import { fetchCategory } from '../../utils'

export const getInitCategoryAction = () => {
  return (dispatch, getState) => {
    fetchCategory().then((res) => {
      return dispatch({ type: 'initCategoryData', data: res.data.myData })
    }).catch((err) => {
      console.log(err)
    })
  }
}
