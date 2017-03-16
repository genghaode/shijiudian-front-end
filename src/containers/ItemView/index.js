import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ActivityIndicator } from 'antd-mobile'
import { ItemViewContent } from '../../components'
import { getItemContentAction, postFowllerAction } from './action'

class _ItemView extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      isloading: false
    })
    if (!props.itemContent.length) {
      props.getItemContent(props.location.query.id)
    }
  }
  render() {
    if (!this.props.itemContent.length) {
      return (
        <ActivityIndicator
          animating="false"
          toast="true"
          text="加载中..."
        />
      )
    }
    return (
      <ItemViewContent itemContent={this.props.itemContent[0]} _onClick={()=> this._onClick()} isloading={this.state.isloading}/>
    )
  }
  _onClick() {
    if (!this.state.isloading) {
      this.setState({
        isloading: true
      })
      this.props.onClick(this.props.location.query.id, () => {
        this.setState({
          isloading: false
        })
      })
    }
  }
}

export const ItemView = connect((state) => {
  return {
    itemContent: state.itemContent
  }
}, (dispatch) => {
  return {
    getItemContent: (id) => dispatch(getItemContentAction(id)),
    onClick: (id, cb) => dispatch(postFowllerAction(id, cb))
  }
})(_ItemView)
