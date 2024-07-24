// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// const Signup = (props) => {
//     const navigate = useNavigate();
//     const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
//     const handleSignup = async (e) => {
//         e.preventDefault()
//         const response = await fetch(`http://localhost:5000/api/auth/signup`, {
//             mode: 'no-cors',
//             method: "POST",
//             headers: {
//                 "Access-Control-Allow-Headers": "Content-Type",
//                 "Access-Control-Allow-Origin": "*",
//                 'Content-Type': 'application/json',
//                 "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH"
//                 // "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password }),
//         });
//         const json =  response.json();
//         console.log(json);

//         if (json.success) {
//             //save the auth token and redirect
//             localStorage.setItem('token', json.authtoken);
//             navigate("/");
//             props.showAlert("Account Created Successfully", "success")
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
//             <h2 className='text-center'>Create an Account to use this</h2>
//             <form onSubmit={handleSignup}>
//                 <div className="mb-3">
//                     <label htmlFor="name" className="form-label">Name</label>
//                     <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp" onChange={onChange} required />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="email" className="form-label">Email Address</label>
//                     <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" onChange={onChange} required />
//                     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="password" className="form-label">Password</label>
//                     <input type="password" className="form-control" id="password" name="password" onChange={onChange} required minLength={5} />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="cpassword" className="form-label">Confirm Password</label>
//                     <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} required minLength={5} />
//                 </div>
//                 <button type="submit" className="btn btn-primary">Signup</button>
//             </form>
//         </div>
//     )
// }

// export default Signup

// Signup.js
import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const { signup } = useContext(AuthContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      cpassword: ''
    });
  
    const { name, email, password, cpassword} = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSignup = e => {
        e.preventDefault();
        signup(formData, navigate);
    };

    return (
        <div className='add-n container mt-3'>
            <h2 className='text-center'>Create an Account to use this</h2>
            <form onSubmit={onSignup}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={name}aria-describedby="emailHelp" onChange={onChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name="email" value={email} aria-describedby="emailHelp" onChange={onChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={password} onChange={onChange} required minLength={5} />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" name="cpassword" value={cpassword} onChange={onChange} required minLength={5} />
                </div>
                <button type="submit" className="btn btn-primary">Signup</button>
            </form>
        </div>
    );
};

export default Signup;
