import './App.css';
import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  // const [alert, setAlert] = useState(null)
  // const showAlert = (message, type) => {
  //   setAlert({
  //     msg: message,
  //     type: type
  //   })
  //   setTimeout(() => {
  //     setAlert(null)
  //   }, 1500);
  // }

  // const router = createBrowserRouter([

  //   {
  //     path: "/",
  //     element: <><Navbar /><Home  /> </>
  //   },
  //   {
  //     path: "/home",
  //     element: <><Navbar /><Home  /></>
  //   },
  //   {
  //     path: "/about",
  //     element: <><Navbar /><About  /></>
  //   },
  //   {
  //     path: "/login",
  //     element: <><Navbar /><Login  /></>
  //   },
  //   {
  //     path: "/Signup",
  //     element: <><Navbar /><Signup  /></>
  //   }
  // ]);

  return (
    <>
      {/* <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      <Alert alert={alert} /> */}

      <AuthProvider>
          <Navbar />
        <Routes>
          
            <Route  path="/" element={Home} />
            <Route  path="/signup" element={Signup} />
            <Route  path="/login" element={Login} />
            {/* Redirect any undefined paths to the login page */}
    
        {/* <Route
          path="/"
          element={<PrivateRoute><Home/></PrivateRoute>}/>
        <Route
          path="/signup"
          element={<PrivateRoute><Signup/></PrivateRoute>}/>
        <Route
          path="/login"
          element={<PrivateRoute><Login/></PrivateRoute>}/> */}
      </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
