import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ActivityIndicator } from 'antd-mobile'
import { ItemViewContent } from '../../components'
import { getItemContentAction, postFowllerAction } from './action'

class _ItemView extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      isloading: false,
      isFowller: false
    })
    props.getItemContent(props.location.query.id, (data) => {
      console.log(data)
      if (data[0].fowllerFlag) {
        this.setState({
          isFowller: true
        })
      }
    })
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
      <ItemViewContent itemContent={this.props.itemContent[0]} _onClick={()=> this._onClick()} isloading={this.state.isloading} isFowller= {this.state.isFowller} />
    )
  }
  _onClick() {
    if (!this.props.loginStatus) {
      this.context.router.push('/login')
      return;
    }
    if (!this.state.isloading) {
      this.setState({
        isloading: true
      })
      this.props.onClick(this.props.location.query.id, () => {
        this.setState({
          isloading: false,
          isFowller: this.props.itemContent[0].fowllerFlag
        })
      })
    }
  }
}

_ItemView.contextTypes = {
  router: React.PropTypes.object
}

export const ItemView = connect((state) => {
  return {
    itemContent: state.itemContent,
    loginStatus: state.loginStatus
  }
}, (dispatch) => {
  return {
    getItemContent: (id, cb) => dispatch(getItemContentAction(id, cb)),
    onClick: (id, cb) => dispatch(postFowllerAction(id, cb))
  }
})(_ItemView)
