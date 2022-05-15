import React from 'react'
import styled from "styled-components"
import {yupResolver} from "@hookform/resolvers/yup"
import {useForm} from "react-hook-form"
import * as yup from "yup"
import {Card,
  Container,
  TextField,
  FormControlLabel,
  Box, 
  Typography, 
  Grid,
  Button,
  Checkbox,
  
  Avatar,
  CssBaseline,
  Link,



} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {useNavigate} from "react-router-dom"
import Swal from 'sweetalert2'
import axios from "axios"
import Loading from "./Loading"




function Login() {

   const hist = useNavigate()
    const [loading, setLoading] = React.useState(false)

    const userModel = yup.object().shape({
 
    email:yup.string().email("please put in a valid mail").required("please put in your email"),
    password:yup.string().required("password needed").min(6),
    // confirmpassword:yup.string().oneOf([yup.ref('password'), null])
  })
    const {register, handleSubmit, formState:{errors}} = useForm({
    resolver : yupResolver(userModel)
  })

   const submit = handleSubmit( async (value)=>{
    console.log(value)
    setLoading(true)
    const {name, email, password}  = value
    console.log(name)

    axios.post("https://zzsolution.herokuapp.com/api/login", value).then((response) => {
      console.log(response.data.data)
      localStorage.setItem("userInfo", JSON.stringify(response.data.data))
      if(response.status === 200){
         Swal.fire({
            title: "Login successful!",
            text: "You can clicked the button!",
            icon: "success",
            button: "ok",
          })
          

        }
    }) .then((value) => {
            Swal(hist("/user"));
          }).catch((error)=>{
      if(error.response.status === 400){
        console.log(error.response.data)
        Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: JSON.stringify(error.response.data.message),
  // footer: '<a href="">Why do I have this issue?</a>'
})
        // setUserError(JSON.stringify(error.response.data.message))
         setLoading(false)
      }

    }); 
   })

 
  const myNavigation = useNavigate()
  return (
    <AllContainer >
    
    
      <HolderLogin>
        <Card sx={{ height:"450px", marginTop:"100px"}}>
           <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
         
          <Typography component="h1" variant="h5">
          Login to post Product
          </Typography>
          
          <Box component="form"  onSubmit={submit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              variant="standard"
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
               {...register('email')}
              // autoFocus

               InputProps={{
        disableUnderline: true,
      }}
            />
            <Typography sx={{color:"red"}}>{errors.email?.message}</Typography>
            <TextField
              margin="normal"
              variant="standard"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
               {...register('password')}

                InputProps={{
        disableUnderline: true,
      }}
            />
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item sx={{cursor:"pointer", color:"#1565C0"}} onClick={()=>{
                myNavigation("/signup")
              }}>
                
                  {"Don't have an account? Sign Up"}
               
              </Grid>
            </Grid>
          </Box>
        </Box>
      
      </Container>
        </Card>
          {
						 loading ?  <Loading loading={loading}/> : null
					 }

      </HolderLogin>

    
    </AllContainer>
  )
}

export default Login

const HolderLogin = styled.div`

height: 600px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;

` 

const AllContainer = styled.div`
display: flex;
flex-direction: column;
height: auto;
`



const Holder = styled.div`
 width: 100%;
 height: 100%;
 background-color: black;
 opacity: 0.5;
 display: flex;
 justify-content: center;
 align-items: center;

 span{
   color: white;
   font-size: 40px;
   font-weight: 600;
   letter-spacing: 300;
 }
`
