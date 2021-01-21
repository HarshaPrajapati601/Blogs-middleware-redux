import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch,getState) => {
    await dispatch(fetchPosts());
    //iterate over list of posts to get unique id's
//    const userIds =  _.uniq(_.map(getState().posts,'userId'));
//    userIds.forEach(id=>{
//        dispatch(fetchUsers(id));
//    })
   _.chain(getState().posts)
     .map('userId')
        .uniq()
            .forEach(id=> dispatch(fetchUsers(id)))
            .value()  //=> .execute() all steps.
   //it allows us to chain on a bunch of additional functions
   //that we r going to manipulate
}

export const fetchPosts = () => async dispatch => { 
    const response = await jsonPlaceholder.get('/posts');
       dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
       });
   };

export const fetchUsers = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({
        type: 'FETCH_USERS',
        payload: response.data
    })
}