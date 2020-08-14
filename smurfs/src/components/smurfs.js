import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {FETCHING_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE} from '../store/reducers/index'
import axios from 'axios'

const Smurfs = props => {
    const dispatch = useDispatch()
    const smurfs = useSelector(state => state.smurfs)


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
        <div>
            {smurfs.length > 0 ? (
                <div>
                    {smurfs.map((smurf) => {
                        return (
                            <div key={smurf.id}>
                                <h3>Name: {smurf.name}</h3>
                                <p>Age: {smurf.age}</p>
                                <p>height: {smurf.height}</p>
                                <p>id: {smurf.id}</p>
                            </div>
                        )
                    })}
                </div>
            ) : null}
        </div>
    )
}

export default Smurfs