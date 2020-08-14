import React, { Component, useEffect } from "react";
import axios from 'axios'
import {FETCHING_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE} from '../store/reducers/index'
import { useSelector, useDispatch } from 'react-redux'


import Smurfs from './smurfs'
import SmurfForm from './smurfForm'



import "./App.css";
const App = props => {

  const dispatch = useDispatch()
  const smurfs = useSelector(state => state.smurfs)
  const isLoading = useSelector(state => state.isLoading)
  const errors = useSelector(state => state.errors)


  useEffect(() => {
    dispatch({type: FETCHING_SMURFS_START})
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
        console.log(res)
        dispatch({type: FETCH_SMURFS_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err)
        dispatch({type: FETCH_SMURFS_FAILURE, payload: err})
    })
}, [])

    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        {/* <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div> */}
        {isLoading ? <p>I be loading doe</p> : null}
        {errors ? <p>I has errors doe</p> : null}

        <Smurfs/>
        <SmurfForm />
      </div>
    );
}

export default App;
