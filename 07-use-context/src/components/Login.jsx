import React from 'react'
import UserContext from '../context/UserContext';

function Login() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const { setUser } = React.useContext(UserContext);

    const saveDataToUserContext = () => {
        setUser({ username, password });
    }
    return (
        <div>
            <h2>Login</h2>
            <input type="text"
                placeholder='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input type="text"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={saveDataToUserContext}>Submit</button>
        </div>
    )
}

export default Login