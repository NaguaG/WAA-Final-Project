import { Button } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {

  const navigate = useNavigate();

  return (
    <>
      <p>login form here</p>
      <Button
        onClick={() => navigate('/dashboard')}
        variant="contained"
      >
        Login
      </Button>
      <p>forget password</p>
      <p>signup</p>
    </>
  )
}
