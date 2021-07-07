import { filterBtns } from '../../helpers/filterHelper';

// Actions
import {ADD_USER, DELETE_USER, APPLY_FILTER} from '../types';

const initialState = {
    users: [],
    filter: filterBtns[0].value,
    sortFlag: 1
}

const GithubUsersReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_USER: 
            return {
            ...state,
                users: [...state.users, {...action.payload.userData}]
            }
        
    case DELETE_USER: {
        let newUsers = [...state.users]
        newUsers.splice(action.payload.idx, 1);
        return {
            ...state,
            users: newUsers
        }
    }
    case APPLY_FILTER: {
        return {
        ...state,
        users: action.payload.users,
        filter: action.payload.filter,
        sortFlag: action.payload.sortFlag
    }
}
        default: return state;
    }
}

export default GithubUsersReducer;