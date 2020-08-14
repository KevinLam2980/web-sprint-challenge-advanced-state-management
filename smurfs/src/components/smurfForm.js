import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import {FETCHING_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE} from '../store/reducers/index'

const initialFormValues = {
    name: '',
    age: '',
    height: '',
    id: Date.now()
}

const SmurfForm = () => {
    const [formValues, setFormValues] = useState(initialFormValues)
    const dispatch = useDispatch()

    const onHandleChanges = evt => {
        setFormValues({...formValues, [evt.target.name]: evt.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log('from submit')
        console.log(formValues)
        dispatch({type: FETCHING_SMURFS_START})
        axios.post('http://localhost:3333/smurfs', formValues)
        .then(res => {
            console.log(res)
            dispatch({type: FETCH_SMURFS_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch({type: FETCH_SMURFS_FAILURE, payload: err})
        })
    }

    return (
        <form onSubmit={submitHandler} >
          <h2>Register your smurf here</h2>
          <label htmlFor='smurfName' >
            Smurf Name:
            <input 
                id='smurfName'
                name='name' 
                value={formValues.name} 
                onChange={onHandleChanges} 
                placeholder="enter smurf name"
            />
          </label>
          <label htmlFor='smurfAge' >
            Smurf Age:
            <input 
                id='smurfAge'
                name='age' 
                value={formValues.age} 
                onChange={onHandleChanges} 
                placeholder="enter smurf age"
            />
          </label>
          <label htmlFor='smurfHeight' >
            Smurf Height:
            <input 
                id='smurfHeight'
                name='height' 
                value={formValues.height} 
                onChange={onHandleChanges} 
                placeholder="enter smurf height"
            />
          </label>
          <button type='submit'>Add Smurf</button>
        </form>
      )

}

export default SmurfForm