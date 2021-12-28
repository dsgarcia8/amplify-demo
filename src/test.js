import React, {useEffect} from 'react'
import { Amplify, Auth } from 'aws-amplify';

const Componente = () => {
    useEffect(async ()=>{
        const info = await Auth.currentAuthenticatedUser()
        console.log(info)
    })
    return (<h1>test</h1>)
}

export default Componente