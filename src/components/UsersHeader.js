import React from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../actions';

class UsersHeader extends React.Component {

    componentDidMount(){
        this.props.fetchUsers(this.props.id);
    }

    render(){
       if(!this.props.user){
        {return null}
       }
       return (
           <div>{this.props.user.name}</div>
       )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {user: state.users.find(user => user.id === ownProps.id)}
}
export default connect(mapStateToProps,
    {fetchUsers}
)(UsersHeader);