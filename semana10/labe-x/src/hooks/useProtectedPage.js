import React, {useEffect} from 'react';
import { useHistory } from 'react-router-dom'

export const useProtectedPage = () => {
    const history = useHistory()

    useEffect = (() =>{
        const token = windows.localStorage.getItem("token")

        if (token === null) {
            history.push('/login')
            }
        }, [history] )

    return(
        <div>
            <p>Não é possível acessar a página.</p>
        </div>
    )

}