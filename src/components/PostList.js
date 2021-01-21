import React from 'react';
import {fetchPostsAndUsers} from '../actions';
import {connect} from 'react-redux';
import UsersHeader from './UsersHeader';

class PostList extends React.Component{
    componentDidMount(){
        this.props.fetchPostsAndUsers();
    }
    renderedlist(){
        return this.props.posts.map(objPost=>{
            return(
                <div className="item" key={objPost.id}>
                    <i className="large middle
                     aligned icon user"/>
                     <div className="content">
                        <div className="description">
                            <h2>{objPost.title}</h2>
                            <p>{objPost.body}</p>
                        </div> 
                     </div>
                     <div>
                         <UsersHeader id={objPost.userId} />
                     </div>
                </div>
            )
        })
    }
    render(){
        return(
            <div className="ui relaxed divided list">
                {this.renderedlist()}
           </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        posts: state.posts
    }
}

export default connect(
    mapStateToProps,{fetchPostsAndUsers}
    )(PostList);