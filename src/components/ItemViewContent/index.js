import React, { Component } from 'react'
import { Button } from 'antd-mobile'
import './index.css'

class _ItemViewContent extends Component {

  render() {
    const { title, time, content, fowllerFlag } = this.props.itemContent
    return (
      <div className="itemViewWrap">
        <h2 className="itemViewTitle">{title}</h2>
        <span className="itemViewTime">{time}</span>
        <p className="itemViewContent">{content}</p>
        <Button type="primary" loading={this.props.isloading} className="fowllerBtn" onClick={this.props._onClick}>{fowllerFlag?<i className="iconfont icon-favorfill">取消收藏</i>: <i className="iconfont icon-favor">收藏</i>}</Button>
      </div>
    )
  }
}

export const ItemViewContent = _ItemViewContent
