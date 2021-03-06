import React,{Component} from 'react'

export default class Buttons extends Component {

    render() {
        return (

             <div className="panel-heading" style={{height: '43px'}}>

				<button 
					className={`btn btn-xs ml10 ${this.props.profile && this.props.profile.isMuted ? 'btn-primary' : 'btn-warning'}`}
					disabled={ this.props.profile._id ? false : true}
					onClick= { this.props.handleToggleMute }
				>
					<span className="fa fa-warning"></span>  { this.props.profile.isMuted ? 'Unmute Account' : 'Mute Account' }
				</button>

				<button 
					className={`btn btn-xs ml10 ${this.props.profile && this.props.profile.isIgnored ? 'btn-primary' : 'btn-warning'}`}
					disabled={ this.props.profile._id ? false : true}
					onClick= { this.props.handleToggleIgnore }
				>
					<span className="fa fa-warning"></span>  { this.props.profile.isIgnored ? 'Unignore Account' : 'Ignore Account' }
				</button>

				<button 
					className={`btn btn-xs ml10 ${this.props.profile && this.props.profile.isDisabled ? 'btn-primary' : 'btn-warning'}`}
					disabled={ this.props.profile._id ? false : true}
					onClick= { this.props.handleToggleDisable }
				>
					<span className="fa fa-warning"></span>  { this.props.profile.isDisabled ? 'Undisable Account' : 'Disable Account' }
				</button>

				<button 
					className={`btn btn-xs ml10 ${this.props.profile && this.props.profile.isBanned ? 'btn-success' : 'btn-warning'}`}
					disabled={ this.props.profile._id ? false : true}
					onClick= { this.props.handleToggleBan }
				>
					<span className="fa fa-user-times"></span>  { this.props.profile.isBanned ? 'Unban Account' : 'Ban Account' }
				</button>

			</div>

        )
    }
}
