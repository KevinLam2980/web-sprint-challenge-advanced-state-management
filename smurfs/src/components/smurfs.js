import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Smurfs = props => {
    const smurfs = useSelector(state => state.smurfs)

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