import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ActivityIndicator } from 'antd-mobile'
import { CategoryList } from '../../components'
import { getInitCategoryAction } from './action'

class _Category extends Component {
  constructor(props) {
    super(props)
    if (!props.initCategoryData.length) {
      props.getInitCategory()
    }
  }
  render() {
    if (!this.props.initCategoryData.length) {
      return (
        <ActivityIndicator 
          animating="false"
          toast="true"
          text="加载中..."
        />
      )
    }
    return (
      <div>
        <CategoryList initCategoryData={this.props.initCategoryData} onClick={(e, index) => this._onClick(e, index)}/>
      </div>
    )
  }
  _onClick(e, index) {
    this.context.router.push(`/itemList?id=${e.id}`)
  }
}

_Category.contextTypes = {
  router: React.PropTypes.object
}

export const Category = connect(
  (state) => {
    return {
      initCategoryData: state.initCategoryData
    }
  }, (dispatch) => {
    return {
      getInitCategory: () => dispatch(getInitCategoryAction())
    }
  }
)(_Category)
