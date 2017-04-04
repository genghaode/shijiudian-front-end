import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ActivityIndicator } from 'antd-mobile'
import { ItemList } from '../../components'
import { getItemListDataAction } from './action'

class _ItemListPage extends Component {
  constructor(props) {
    super(props)
    if (props.itemListCategoryData.status != 'nomore' && !props.itemListCategoryData.data.length) {
      props.getItemListLoadData()
    } else if (props.type == 'search') {
      props.getItemListLoadData()
    } else if (props.itemListCollectionData.status != 'nomore' && !props.itemListCollectionData.data.length) {
      props.getItemListLoadData()
    }
  }
  render() {
    const { itemListCategoryData, itemListCollectionData, getItemListLoadData, type } = this.props
    if (type == 'collection') {
      if (itemListCollectionData.status != 'nomore' && !itemListCollectionData.data.length) {
        return <ActivityIndicator
          animating="false"
          toast="true"
          text="加载中..."
        />
      }
    } else {
      if (itemListCategoryData.status != 'nomore' && !itemListCategoryData.data.length) {
        return <ActivityIndicator
          animating="false"
          toast="true"
          text="加载中..."
        />
      }
    }

    let myData
    if (type == 'collection') {
      myData = itemListCollectionData
    } else {
      myData = itemListCategoryData
    }
    return (
      <ItemList itemListData={myData} getItemListLoadData={getItemListLoadData}  />
    )
  }
}

export const ItemListPage = connect((state) => {
  return {
    itemListCategoryData: state.itemListCategoryData,
    itemListCollectionData: state.itemListCollectionData,
    type: state.routing.locationBeforeTransitions.query.type
  }
}, (dispatch) => {
  return {
    getItemListLoadData: () => dispatch(getItemListDataAction())
  }
})(_ItemListPage)
