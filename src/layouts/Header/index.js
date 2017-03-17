import React, { Component } from 'react'
import { connect } from 'react-redux'
import { pageConfig } from '../../routes'
import { NavBar, SearchBar } from 'antd-mobile'
import './index.css'

class _Header extends Component {
  render() {
    const { pathname } = this.props
    if (pageConfig[pathname].headerType == '1') {
      return (
        <NavBar 
          mode = "dark"
          iconName={null}
          rightContent = {<div className="searchIcon" onClick={()=> this._onClick()}><i className="iconfont icon-search"></i></div>} 
        > 
        { pageConfig[pathname].title } 
        </NavBar>
      )
    } else if (pageConfig[pathname].headerType == '2') {
      return (
        <NavBar 
          mode = "dark"
          leftContent="返回"
          onLeftClick={() => this._onLeftClick()}
        > 
        { pageConfig[pathname].title } 
        </NavBar>
      )
    } else if (pageConfig[pathname].headerType == '3') {
      return (
        <SearchBar 
          placeholder="请输入搜索关键字"
          autoFocus
          onSubmit={(e)=> this._onSubmit(e)}
          onCancel={()=> this._onCancel()}
        />
      )
    } else {
      return (<div></div>)
    }
  }
  _onLeftClick() {
    this.context.router.goBack()
  }
  _onClick() {
    this.context.router.push('/search')
  }
  _onCancel() {
    this.context.router.goBack()
  }
  _onSubmit(e) {
    this.props.initPageNum()
    this.context.router.push(`/itemList?type=search&id=${e}`)
  }
}

_Header.contextTypes = {
  router: React.PropTypes.object
}

export const Header = connect(
  (state) => {
    return {
      pathname: state.routing.locationBeforeTransitions.pathname
    }
  }, (dispatch) => {
    return {
      initPageNum: () => dispatch({ type: 'initPageNum' })
    }
  }
)(_Header)
