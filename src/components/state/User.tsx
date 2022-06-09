import { useState } from 'react';

type AuthUser = {
    name: string
    email: string
}

export const User  = () => {
    const [user, setUser] = useState<AuthUser>({} as AuthUser);//type assertion
    const handleLogin = () => {
        setUser({
            name:'Nikola',
            email:'nikola.2@gmail.com'
        })
    };
    return (
        <div>
            <button onClick={handleLogin}></button>
            <div>User name is {user.name}</div>
            <div>User emain is {user.email} </div>
        </div>
    )
}