import React, { useEffect, useState } from 'react'
import '../Custom.css'
import { MountComponent } from './MountComponent'


export const TestComponent = () => {

    //var x user
    const [user, setUser] = useState('Livington Merello')

    //var x counter
    const [counter, setCounter] = useState(0)


    //function x cambiare nome su btn
    const clickChange = () => {
        setUser('Ivan Merello')
    }

    //function x cambiare nome su input
    const changeName = (e) => {
        setUser(e.target.value)
        setCounter(counter + 1)
    }


    useEffect(() => {
        console.log('è stato modificato qualcosa')
    }, [])

    //monitora cambi su var user
    useEffect(() => {
        console.log('name è stato modificato')
    }, [user])

    return (
        <div className='class'>
            <p className='mb-3'>cambia il nome</p>

            <p>{counter}</p>

            <label className={counter >= 10 ? 'bg-red' : 'bg-green'}>{user}</label>
            <input
                placeholder='digita un nuovo nome'
                onChange={changeName}
                className='mb-3'></input>
            <button onClick={clickChange}> clicca qui per cambiare il nome</button>

            {user === 'IVAN' ? <MountComponent></MountComponent> : ''}
        </div>
    )
}

export default TestComponent;
