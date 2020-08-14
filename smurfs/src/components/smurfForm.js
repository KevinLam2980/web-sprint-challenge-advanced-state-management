import React, {useState} from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import {FETCHING_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE} from '../store/reducers/index'


const initialFormValues = {
    name: '',
    age: '',
    height: '',
    id: Date.now()
}

const SmurfForm = props => {
    const [formValues, setFormValues] = useState(initialFormValues)
    const dispatch = useDispatch()
    const smurfs = useSelector(state => state.smurfs)
    const isLoading = useSelector(state => state.isLoading)
    const errors = useSelector(state => state.errors)



    const onHandleChanges = evt => {
        setFormValues({...formValues, [evt.target.name]: evt.target.value})
    }

    const submit = (e) => {
        e.preventDefault()
        dispatch({type : FETCHING_SMURFS_START})
        axios.post('http://localhost:3333/smurfs', formValues)
        .then(res => {
            console.log(res)
            dispatch({type:FETCH_SMURFS_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err)
            dispatch({type: FETCH_SMURFS_FAILURE, payload: err.message})
        })
    }

    return(
        <div>
            <form onSubmit={() => submit}>
                <label htmlFor='name'>Name:
                    <input
                    id='name'
                    name='name'
                    type='text'
                    placeholder='Enter smurf name'
                    onChange={onHandleChanges}
                    value={formValues.name}
                    ></input>
                </label>
            </form>
            <form>
                <label htmlFor='age'>age:
                    <input
                    id='age'
                    name='age'
                    type='number'
                    placeholder='Enter smurf age'
                    onChange={onHandleChanges}
                    value={formValues.age}
                    ></input>
                </label>
                <label htmlFor='height'>height:
                    <input
                    id='height'
                    name='height'
                    type='text'
                    placeholder='Enter smurf height'
                    onChange={onHandleChanges}
                    value={formValues.height}
                    ></input>
                </label>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default SmurfForm