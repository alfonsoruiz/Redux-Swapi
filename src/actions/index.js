import axios from 'axios';

export const FETCH_START = 'FETCH';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE'

// the url to fetch characters from is `https://swapi.co/api/people/`
export const getData = () => dispatch => {
    dispatch({ type: FETCH_START });
    axios.get('https://swapi.co/api/people/')
        .then(res => {
            console.log(res)
            dispatch({ type: FETCH_SUCCESS, payload:  res.results})
        })
        .catch(err => {
            dispatch({ type: FETCH_FAILURE, payload: err })
        })
};