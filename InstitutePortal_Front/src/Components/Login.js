import {
  AppBar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { BrowserRouter, Link, useNavigate } from "react-router-dom";
import { Grid, Paper, Avatar } from "@material-ui/core";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

export default function Login() {
  let [email, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let resp;
  let localstorage = localStorage.getItem("user");
  let user = sessionStorage.getItem("user");
  const usernameHandler = (e) => {
    email = e.target.value;
    console.log(email);
    setUsername(email);
  };

  const passwordHandler = (e) => {
    password = e.target.value;
    console.log(password);
    setPassword(password);
  };

  let navigate = useNavigate();
  useEffect(() => {
    console.log(user);
    if (localstorage !== "null" && localstorage !== null) {
      user = sessionStorage.setItem("user", localstorage);
    }


    if (user !== "null" && user !== null) {
      user = JSON.parse(sessionStorage.getItem("user"));
      if (user.role == "admin") {
        navigate("/Admin");
      } else if (user.role == "student") {
        navigate("/Student");
      } else if (user.role == "faculty") {
        navigate("/faculty");
      }
    }
  }, []);

  async function authenticate() {
    resp = await axios.post("http://localhost:8080/login", null, {
      params: {
        email,
        password,
      },
    });
    if (email == "") {
      toast.error("Email cannot be empty !");
      return;
    }
    if (resp.data.emailExist == true) {
      if (resp.data.password == true) {
        if (resp.data.active == true) {
          if (document.getElementById("remember").checked) {
            let userdata = localStorage.setItem(
              "user",
              JSON.stringify(resp.data)
            );
          }
          sessionStorage.setItem("user", JSON.stringify(resp.data));
          if (resp.data.role == "student") {
            toast.success("Login Successfull Hello " + resp.data.name);
            navigate("/Student");
          } else if (resp.data.role == "faculty") {
            toast.success("Login Successfull Hello " + resp.data.name);
            navigate("/Faculty");
          } else {
            toast.success("Login Successfull Hello " + resp.data.name);
            navigate("/Admin");
          }
        } else {
          toast("User account is not Active!! \t Please contact admin ", {
            icon: "⚠️",
          });
        }
      } else toast.error("Wrong Password");
    } else toast.error("User not Registered, Please Register First");
  }
  const paperStyle = {
    padding: 20,
    height: "65vh",
    width: 350,
    margin: "20px auto",
  };

  return (
    <>
      <AppBar position="fixed">
        <Toolbar
          sx={{
            bgcolor: "#1976D2",
            color: "white",
            pr: "24px", // keep right padding when drawer closed
          }}
        >
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E0BAQH0pV14FxzqwQ/company-logo_200_200/0/1624685506949?e=2147483647&v=beta&t=L_r6P-Xusi1OYIbb2JSgE_HJozY5SWy8lQCfh-5tRsI"
            alt="Kitten"
            height="65"
            width="45"
          />
          <span
            className="multicolortext fw-bolder ml-3"
            style={{ fontSize: "35px" }}
          >
            IACSD Portal
          </span>
          <img
            height="100"
            width="100"
            src="https://i.ibb.co/cFypkmN/Daco-4066845.png"
          />

          <img
            height="100"
            width="100"            
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROH2ItFIY3GpUZvpGO1VjTZHUGoVjlGHTZyA&usqp=CAU"
          />

          {/* <Avatar
              
              
            /> */}
        </Toolbar>
       
        
      </AppBar>

      <Container>

        <div className="pt-4"></div>
        <div className="pt-5"></div>
        <Grid className="pt-5">
          <Paper className="pt-5" elevation={10} style={paperStyle}>
            <Grid align="center">
              <Avatar style={{ backgroundColor: "#1bbd7e" }}>
                <LockOutlinedIcon />
              </Avatar>
              <div className="pt-2"></div>
              <h3 style={{ color: "#1bbd7e" }}> Login Here</h3>
            </Grid>
            <TextField
              id="email"
              label="Email"
              type="text"
              onChange={usernameHandler}
              fullWidth
              style={{ marginBottom: "10px", marginTop: "50px" }}
              autoComplete="off"
            />
            <div className="pt-2"></div>
            <TextField
              id="password"
              label="Password"
              type="password"
              onChange={passwordHandler}
              fullWidth
              style={{ marginBottom: "10px" }}
              autoComplete="off"
            />
            <div className="pt-2"></div>
            <Button
              variant="contained"
              onClick={authenticate}              
              fullWidth
              style={{ marginBottom: "10px" }}
              
            >
              Login
            </Button>
            <FormControlLabel
              control={
                <Checkbox id="remember" value="remember" color="primary" />
              }
              label="Remember me"
            />
            <Toaster position="top-center" reverseOrder={false} />
            <Link to="/ForgetPassword">
              <b className="text-info"> Forgot Password</b>
            </Link>
            <Typography style={{ marginTop: "2px" }}>
              Don't have an account ?
              <Link to={"/Register"}>
                <b className="text-info"> Sign up</b>
              </Link>
            </Typography>
          </Paper>
        </Grid>
      </Container>
    </>
  );
}
