import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import "./login.css";

const data = {"userName":"","password":""}
const Login = () => {
  const [userData, setUserData] = useState(data);

  const handleChange = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

    //  const newData = {...userData,[e.target.name]:e.target.value}
    //  setUserData(newData)

    // setUserData({[e.target.name]:e.target.value})
    console.log("userData", userData);
    console.log("userData", typeof userData);
    console.log("userData", typeof e.target.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("form Submitted");
  };

  const handlevalidation = (e) => {
    var regex = new RegExp("/^(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/");
    var pass = e.target.value;
    let test = regex.test(pass);
    console.log("test", test);
  };

  return (
    <>
      {userData ? (
        <div className="loginPage">
          <TextField
            type="text"
            defaultValue={userData.userName}
            name="userName"
            onChange={(e) => handleChange(e)}
            size="small"
            sx={{ paddingY: "10px" }}
            label="UserName"
            placeholder="Enter your userName"
          ></TextField>
          <TextField
            type="text"
            defaultValue={userData.password}
            name="password"
            onChange={(e) => handleChange(e)}
            onInput={(e) => handlevalidation(e)}
            size="small"
            label="Password"
            placeholder="Password Must be 8 digit"
          ></TextField>
          <div>
            <Button onClick={(e) => handleSubmit(e)} className="loginButton">
              Login
            </Button>
            <p> Don't have an account</p>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Login;
