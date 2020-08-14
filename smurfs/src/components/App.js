import React, { Component, useEffect } from "react";
import axios from 'axios'
import {FETCHING_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE} from '../store/reducers/index'
import { useSelector, useDispatch } from 'react-redux'


import Smurfs from './smurfs'
import SmurfForm from './smurfForm'



import "./App.css";
function App() {

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
        {isLoading ? <p>I be loading doe</p> : null}
        {errors ? <p>I has errors doe</p> : null}

        <SmurfForm />
        <Smurfs/>
      </div>
    );
}

export default App;
