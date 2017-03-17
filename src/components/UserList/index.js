import React, { Component } from 'react'
import { List, WhiteSpace, Button } from 'antd-mobile'
import './index.css'
const Item = List.Item

class _UserList extends Component {
  render() {
    return (
      <div>
      	<WhiteSpace />
      	<div className="loginBtnWrap">
	      	<Button type="primary" loading={this.props.isloading} onClick={this.props.loginClick}>{this.props.loginStatus != '1'?'登录':'退出登录'}</Button>
      	</div>
				<WhiteSpace />
				<List 
				  renderFooter={() => <div className="userListFooter">版本号</div>}
				>
				  <Item
				    arrow="horizontal"
				    thumb={<i className="iconfont icon-favor"></i>}
				    onClick={this.props.myFavorClick}
				  >
				    我的收藏
				  </Item>
				</List>
    	</div>
    )
  }
}

_UserList.contextTypes = {
  router: React.PropTypes.object
}

export const UserList = _UserList
