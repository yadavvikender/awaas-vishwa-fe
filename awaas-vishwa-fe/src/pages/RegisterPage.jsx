import React from "react";
import { FormControl, TextField, Button } from "@mui/material";
import alert from "../utility/alert";

const RegisterPage = () => {
  const name = React.useRef();
  const phone = React.useRef();
  const email = React.useRef();
  const username = React.useRef();
  const password = React.useRef();

  const handleSubmit = (ev) => {
    ev.preventDefault();

    const nameVal = name.current.value;
    const phoneVal = Number(phone.current.value);
    const emailVal = email.current.value;
    const usernameVal = username.current.value;
    const passwordVal = password.current.value;


    if (nameVal.length < 2 || name.length > 50) {
      alert('Name should be greater than 1 and less than equal 50 characters', 'error')
    }
    if (phoneVal < 1000000000) {
      alert('Invalid Phone Number', 'error')
    }
    if (usernameVal.length < 3 || usernameVal.length > 30) {
      alert('Username should be greater than 2 and less than equals 30 characters', 'error')
    }

  };

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-form">
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              id="filled-basic"
              label="Full Name"
              variant="filled"
              inputRef={name}
              required
            />
            <TextField
              fullWidth
              id="filled-basic"
              label="Phone"
              variant="filled"
              type="number"
              inputRef={phone}
              required
            />
            <TextField
              fullWidth
              id="filled-basic"
              label="email"
              variant="filled"
              inputRef={email}
              required
            />
            <TextField
              fullWidth
              id="filled-basic"
              label="User Name"
              variant="filled"
              inputRef={username}
              required
            />
            <TextField
              fullWidth
              id="filled-basic"
              label="password"
              variant="filled"
              type="password"
              inputRef={password}
              required
            />
            <Button
              variant="contained"
              sx={{ marginTop: "20px", width: "100%" }}
              type="submit"
            >
              Sign Up
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;