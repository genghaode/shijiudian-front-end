import React, { Component } from 'react'
import { Grid } from 'antd-mobile'
import './index.css'

class _CategoryList extends Component {
  render() {
    return (<Grid className = "categoryWrap"
      data = { this.props.initCategoryData }
      columnNum = { 2 }
      onClick = { this.props.onClick }
      hasLine = { false }
      />)
  }
}

export const CategoryList = _CategoryList
