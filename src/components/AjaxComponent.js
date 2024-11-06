import React, { useEffect, useState } from 'react'

export const AjaxComponent = () => {


    //valore di user con useState => []
    const [users, setUsers] = useState([]);

    const usersAjaxPms = () => {

        //metodo fetch con param APi
        fetch('https://reqres.in/api/users?page=1')

            //ottengo response e applico metodo json
            .then(response => response.json())


            .then(result => {

                //attribuiamo a user result.data
                setUsers(result.data)
            },
                error => {
                    console.log(error)
                })
    }

    useEffect(() => {
        usersAjaxPms();
        console.log(users)
    }, [])

    return (
        <div>
            <ol>
                {/* ora che user contiene data possiamo applicare map */}
                {users.map(user => {
                    return <li key={user.id}>{user.first_name}</li>
                })}
            </ol>
        </div>
    )
}

export default AjaxComponent;