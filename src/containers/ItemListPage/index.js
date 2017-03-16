import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ActivityIndicator } from 'antd-mobile'
import { ItemList } from '../../components'
import { getItemListDataAction } from './action'

class _ItemListPage extends Component {
  constructor(props) {
    super(props)
    if (props.itemLisCategorytData.status != 'nomore' && !props.itemLisCategorytData.data.length) {
      props.getItemListLoadData()
    }
  }
  render() {
    const { itemLisCategorytData, getItemListLoadData } = this.props
    if (itemLisCategorytData.status != 'nomore' && !itemLisCategorytData.data.length) {
      return <ActivityIndicator
        animating="false"
        toast="true"
        text="加载中..."
      />
    }
    return (
      <ItemList itemListData={itemLisCategorytData} getItemListLoadData={getItemListLoadData}  />
    )
  }
}

export const ItemListPage = connect((state) => {
  return {
    itemLisCategorytData: state.itemListCategoryData
  }
}, (dispatch) => {
  return {
    getItemListLoadData: () => dispatch(getItemListDataAction())
  }
})(_ItemListPage)
