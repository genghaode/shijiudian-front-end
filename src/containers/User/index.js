import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logoutAction } from './action'
import { UserList } from '../../components'

class _User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isloading: false
    }
  }
  render() {
    return (
      <div>
        <UserList loginStatus={this.props.loginStatus} loginClick={()=> this._loginClick()} isloading={this.state.isloading} myFavorClick={()=>_myFavorClick()}/>
      </div>
    )
  }
  _loginClick() {
    if (this.props.loginStatus == '1') {
      if (this.state.isloading) {
        return;
      }
      this.setState({
        isloading: true
      })
      this.props.logout(() => {
        this.setState({
          isloading: false
        })
      })
    } else {
      this.context.router.push('/login')
    }
  }
  _myFavorClick() {
    if (this.props.loginStatus == '1') {
      this.props.initPageNum()
      this.context.router.push('/itemList?type=favor')
    } else {
      this.context.router.push('/login')
    }
  }
}

_User.contextTypes = {
  router: React.PropTypes.object
}

export const User = connect((state) => {
  return {
    loginStatus: state.loginStatus
  }
}, (dispatch) => {
  return {
    logout: (cb) => dispatch(logoutAction(cb))
    initPageNum: () => dispatch({ type: 'initPageNum' })
  }
})(_User)
