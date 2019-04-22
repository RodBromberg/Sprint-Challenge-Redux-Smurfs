/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

import axios from 'axios'

export const FETCH_SMURFS = 'FETCHING_SMURFS'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILURE = 'FETCH_FAILURE'

export const ADD_SMURFS_START = 'SMURFS_START'
export const ADD_SMURFS_SUCCESS = 'SMURFS_SUCCESS'
export const ADD_SMURFS_FAIL = 'SMURFS_FAIL'


/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurf = () => dispatch => {
    dispatch({
        type: FETCH_SMURFS,
    })
    axios
        .get('http://localhost:3333/smurfs')
        .then(response => {
            console.log('fetched')
            dispatch({
                    type: FETCH_SUCCESS,
                    payload: response.data
                })
                .catch(err => {
                    dispatch({
                        type: FETCH_FAILURE,
                        payload: err
                    })
                })
        })
}

export const addSmurf = smurf => dispatch => {
    dispatch({
        type: ADD_SMURFS_START
    })
    return axios
        .post('http://localhost:3333/smurfs/', smurf)
        .then(response => {
            console.log(response)
            dispatch({
                type: ADD_SMURFS_SUCCESS,
                payload: response.data
            })
        })
        .catch(err => dispatch({
            type: ADD_SMURFS_FAIL,
            payload: err
        }))
}