import React, { useEffect } from 'react'
import '../Custom.css'

export const MountComponent = () => {

    useEffect(() => {

        //allerto attivato quando il componente viene montato
        alert('il componente è stato montato')

        //alert attivato quando il componente viene smontato 
        return () => {
            alert('il componente è stato smontato')
        }
    }, [])

    return (
        <div>
            <p>componente sbloccato</p>
            <button>tasto di alert</button>
        </div>
    )
}

//senza export default?