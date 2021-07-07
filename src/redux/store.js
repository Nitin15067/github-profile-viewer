import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

// Reducers
import GithubUsersReducer from './reducers/githubUsers.reducer';

const Store = createStore(GithubUsersReducer, applyMiddleware(thunk));

export default Store;