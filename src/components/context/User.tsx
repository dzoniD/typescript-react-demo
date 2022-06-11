import { useContext } from "react";
import { UserContext } from "./UserContex";


export const User = () => {
    const userContex = useContext(UserContext);
    const handleLogin = () => {
       
            userContex.setUser({
                name:'Nikkola',
                email:'nikola@gmail.com'
            })
        
    };
    const handleLogout= () => {
        
            userContex.setUser(null)
        
    };
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {userContex.user?.name}</div>
            <div>User email is {userContex.user?.email}</div>
        </div>
    )
}