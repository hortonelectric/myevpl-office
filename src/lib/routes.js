import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, browserHistory, IndexRedirect } from 'react-router'

import { UserAuthWrapper } from 'redux-auth-wrapper'
import { authenticate } from '../app/Admin/User/middleware/middleware'

const AdminAuthentication = UserAuthWrapper({
    authSelector: state => state.admin.user.profile,
    redirectAction: authenticate,
    wrapperDisplayName: 'AdminIsAuthenticated'
})

import Admin_Container from '../app/Admin/Container'
import Admin_Admin from '../app/Admin/Content/Admin/Admin'
import Admin_Profile from '../app/Admin/Content/Profile/Profile'
import Admin_Account from '../app/Admin/Content/Account/Account'
import Admin_Login from '../app/Admin/User/Login'

import Home from '../app/Home/Home'

export default class RouterComponent extends Component {
	render () {
		return (
			<Router history={browserHistory}>
				<Route path="/" component={Home}/>
				<Route path="/admin" component={AdminAuthentication(Admin_Container)}/>
					<Route path="/admin/admin" component={Admin_Admin}>
					<Route path="/admin/profile" component={Admin_Profile}/>
					<Route path="/admin/account" component={Admin_Account}/>
				</Route>
				<Route path="/admin/login" component={Admin_Login}/>
			</Router>
		)
	}
}
