// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// const Login = (props) => {
//     const navigate = useNavigate();
//     const [credentials, setCredentials] = useState({ email: "", password: "" })
//     const handleLogin = async (e) => {
//         e.preventDefault()
//         const response = await fetch(`http://localhost:5000/api/auth/login`, {
//             mode: 'no-cors',
//             method: "POST",
//             headers: {

//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ email: credentials.email, password: credentials.password }),
//         });
//         const json = await response.json()
//         console.log(json);

//         if (json.success) {
//             //save the auth token and redirect
//             localStorage.setItem('token', json.authtoken);
//             navigate("/");
//             props.showAlert("Logged in Successfully", "success")
//         }
//         else {
//             props.showAlert("Invalid Credentials", "danger")
//         }
//     }
//     const onChange = (e) => {
//         setCredentials({ ...credentials, [e.target.name]: e.target.value });
//     }
//     return (
//         <div className='add-n container mt-3'>
//             <h2 className='text-center'>Login to Continue to use</h2>
//             <form onSubmit={handleLogin}>
//                 <div className="mb-3 my-3">
//                     <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//                     <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" value={credentials.email} onChange={onChange} />
//                     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//                     <input type="password" className="form-control" id="password" name='password' value={credentials.password} onChange={onChange} />
//                 </div>
//                 <button type="submit" className="btn btn-primary">Login</button>
//             </form>
//         </div>
//     )
// }

// export default Login

// Signup.js
import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      email: '',
      password: ''
    });
  
    const { email, password } = formData;
  

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onLogin = e => {
        e.preventDefault();
        login(formData, navigate);
    };

    return (
        <div className='add-n container mt-3'>
            <h2 className='text-center'>Login to Continue to use</h2>
            <form onSubmit={onLogin}>
                <div className="mb-3 my-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" value={email} onChange={onChange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name='password' value={password} onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
};

export default Login;
