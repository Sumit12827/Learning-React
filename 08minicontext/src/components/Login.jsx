import React , {useState , useContext} from "react";
import UserContext from "../context/UserContext";

function Login() {

    const [username , setusername] = usestate('');
    cosnt [password , setpassword] = usestate('');

    const {setUser} = useContext(UserContext);
    const handleSubmit = () => {

    }

    return (
        <div>
            <h2>Login</h2>
            <input type="text"
            value = {username}
            onChange = {(e) => setusername(e.target.value)}
             placeholder="username" />
            <input type="text"
            value = {password}
            onChange = {(e) => setpassword(e.target.value)} 
            placeholder="password" />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login;