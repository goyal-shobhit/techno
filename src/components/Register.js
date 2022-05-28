import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./register.css";

const Register = () => {
    const [registerData,setRegisterData] = useState({firstName:""})

    const handleChange = (e)=>{
     setRegisterData(prevstate=>({...prevstate,[e.target.name]:e.target.value}));
     console.log(registerData);
    }


  
  return (
    <div className="registerForm">
      <TextField
        placeholder="firstName"
        label="First Name"
        sx={{ paddingY: "10px" }}
        size="small"
        onChange={(e)=>handleChange(e)}
        name = "firstName"
        value = {registerData.firstName}
        type="text"
      ></TextField>
      <TextField
        placeholder="lastName"
        label="Last Name"
        sx={{ paddingY: "10px" }}
        size="small"
        onChange={(e)=>handleChange(e)}
      ></TextField>
      <TextField
        placeholder="email"
        label="Email Address"
        sx={{ paddingY: "10px" }}
        size="small"
        onChange={(e)=>handleChange(e)}
      ></TextField>
      <TextField
        placeholder="create Password"
        label="Create Password"
        sx={{ paddingY: "10px" }}
        size="small"
        onChange={(e)=>handleChange(e)}
      ></TextField>
      <Button className="registerButton">Register</Button>
    </div>
  );
};

export default Register;
