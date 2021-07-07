import axios from "axios"

// Actions
import {ADD_USER, APPLY_FILTER, DELETE_USER} from '../types';

// Store
import Store from '../store';

export const addUser = (username) => {
    let filter = Store.getState().filter;
    let sortFlag = Store.getState().sortFlag;
    return (dispatch) => {
        axios.get(`https://api.github.com/users/${username}`).then(res => {
            dispatch({
                type: ADD_USER,
                payload: {
                    userData: res.data
                }
            })
            dispatch(applyFilter(filter, sortFlag));
        }).catch(err => {
            console.log(err);
        })
    }
}

export const deleteUser = (idx) => {
    return (dispatch) => {
        dispatch({
            type: DELETE_USER,
            payload: {
                idx
            }
        })
    }
}

export const applyFilter = (filter, sortFlag) => {
    return (dispatch) => {
        const users = [...Store.getState().users];
        let filteredUsers = users.sort((a, b) => {
            if(!a[filter]) 
                return 1*sortFlag;
            if(!b[filter])
                return -1*sortFlag;
            if(typeof a[filter] === "string") {
                console.log('string');
                return (a[filter].toLowerCase() > b[filter].toLowerCase() ? 1 : -1)*sortFlag;  
            }      

            return (a[filter] < b[filter] ? 1 : -1)*sortFlag;  
            }
        )
        dispatch({
            type: APPLY_FILTER,
            payload: {
                filter,
                sortFlag,
                users: filteredUsers
            }
        })
    }
}