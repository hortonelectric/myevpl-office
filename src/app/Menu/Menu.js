import React from 'react'
import { connect } from 'react-redux'
import {logout} from '../User/middleware/middleware'
import { showServerMaintenanceModal } from '../Server/action'

class Menu extends React.Component {

	handleClick = (e) => {
		this.props.dispatch(logout({message: 'You have sign out, you will be redirected to the sign in page'}))
	}

    render(){

		// const role = sessionStorage.getItem('role')

		// if(role == 'admin'){
			return(
				<div></div>
			)
		// }

		// if(role == 'account'){
		// 	return(
		// 		<aside id="sidebar_left" className="nano nano-primary affix">
		// 		<div className="sidebar-left-content nano-content">
		// 			<ul className="nav sidebar-menu">
        //
		// 				<li className="sidebar-label pt15">ATM</li>
		// 				<li>
		// 					<Link to="/ATM">
		// 					<span className="fa fa-btc" />
		// 						<span className="sidebar-title">ATM Management</span>
		// 					</Link>
		// 				</li>
        //
		// 				<li className="sidebar-label pt20">User</li>
		// 				<li>
		// 					<a href="#" onClick={this.handleClick}>
		// 						<span className="fa fa-sign-out" />
		// 						<span className="sidebar-title">Sign Out</span>
		// 					</a>
		// 				</li>
		// 			</ul>
        //
		// 		</div>
		// 	</aside>
		// 	)
	 	// }

    }
}

export default connect()(Menu)
