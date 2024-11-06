import React, { useEffect, useState } from 'react'

export const StaticComponent = () => {

    //inizializiamo ajax con un array vuoto
    const [users, setUsers] = useState([])

    //metodo basic per riempire l'array vuoto
    const getUsersStatic = () => {
        setUsers([
            {
                "id": 7,
                "email": "michael.lawson@reqres.in",
                "first_name": "Michael",
                "last_name": "Lawson",
                "avatar": "https://reqres.in/img/faces/7-image.jpg"
            },
            {
                "id": 8,
                "email": "lindsay.ferguson@reqres.in",
                "first_name": "Lindsay",
                "last_name": "Ferguson",
                "avatar": "https://reqres.in/img/faces/8-image.jpg"
            },
            {
                "id": 9,
                "email": "tobias.funke@reqres.in",
                "first_name": "Tobias",
                "last_name": "Funke",
                "avatar": "https://reqres.in/img/faces/9-image.jpg"
            }
        ])
    }

    //useEffect viene eseguito al caricamento della pagina 
    useEffect(() => {

        //eseguiamo la funzione che riempe user
        getUsersStatic();
        console.log(`questi sono gli users: ${users}`)
    }, [])

    return (
        <div>
            <span>Liste Users</span>
            <ol>
                {
                    //se user è stato riempito usiamo map per stampare i valori
                    users.map(user => {
                        return <li key={user.id}>
                            <img src={user.avatar} width="50" height="50"></img>
                            {user.first_name}
                        </li>
                    })
                }
            </ol>
        </div>
    )
}

export default StaticComponent;