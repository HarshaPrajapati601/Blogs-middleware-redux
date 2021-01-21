import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';


export const fetchPosts = () => async dispatch => { 
    const response = await jsonPlaceholder.get('/posts');
       dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
       });
   };
//a fn that returns another function which calls the memoized return fn.
export const fetchUsers = (id) =>  dispatch => {
    _fetchUsers(id,dispatch)
}
 //memoize function copy created so there are unique id calls
const _fetchUsers = _.memoize(async(id,dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({
        type: 'FETCH_USERS',
        payload: response.data
    })
})