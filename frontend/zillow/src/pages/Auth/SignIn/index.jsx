import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../slices/user/userSlice";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isValidEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const onSignIn = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const email = data.get("email");
    const password = data.get("password");

    if (!email) {
      setEmailError("Email is required");
      return;
    }

    if (!password) {
      setPasswordError("Password is required");
      return;
    }

    // if (!isValidEmail(email)) {
    //   setEmailError("Not a valid email");
    //   return;
    // }

    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    dispatch(loginUser({ email, password }))
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log("ERRROR");
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <Avatar sx={{ m: 1, bgcolor: "secondary.primary" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={onSignIn} noValidate sx={{ mt: 1 }}>
          <TextField
            error={emailError}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            helperText={emailError}
            autoFocus
            type="email"
          />
          <TextField
            error={passwordError}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            helperText={passwordError}
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        sx={{ mt: 8, mb: 4 }}>
        {"Copyright © "}
        <Link color="inherit" href="/">
          Raspa
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Container>
  );
}
