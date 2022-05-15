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
  MenuItem,
  InputLabel,
  Select,
  Avatar,
  CssBaseline,
  Link,
  



} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import swal from 'sweetalert'
import axios from "axios"
import Loading from "./Loading"



// import {Controller, useForm} from "react-hook-form"
// import {yupResolver} from "@hookform/resolvers/yup"
// import * as yup from "yup"
import {useNavigate} from "react-router-dom"

function Signup() {
   const hist = useNavigate()

    const userModel = yup.object().shape({
    name:yup.string().required("field must not be empty"),
    email:yup.string().email().required("please put in your email"),
    password:yup.string().required("password needed").min(6),
    // confirmpassword:yup.string().oneOf([yup.ref('password'), null])
  })

   const {register, handleSubmit, formState:{errors}} = useForm({
    resolver : yupResolver(userModel)
  })

    const myNavigation = useNavigate()
    const [member, setMember] = React.useState(false);
    const [dmember, dsetMember] = React.useState(false);
    const [loading, setLoading] = React.useState(false)

    const handleChange = ()=>{
      setMember(true)
      dsetMember(false)

    }
    const dhandleChange = ()=>{
      setMember(false)
      dsetMember(true)

    }

   const submit = handleSubmit( async (value)=>{
    console.log(value)
   
    const {name, email, password}  = value
    console.log(name)
  setLoading(true)
    axios.post("https://zzsolution.herokuapp.com/api/reg", value).then((response) => {
      console.log(response.data.data)
      localStorage.setItem("userInfo", JSON.stringify(response.data.data))
      if(response.status === 200){
         swal({
            title: "Registration successful!",
            text: "You can clicked the button!",
            icon: "success",
            button: "ok",
          })
              setLoading(false)

        }
    }).then((value) => {
            swal(hist("/user"));
          }); 

   })


 
    
  return (
    <AllContainer >
    
     

      <HolderLogin>
        <Card sx={{ height:"auto", paddingBottom:"15px", width:"400px", marginTop:"50px"}}>
           <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width:"100%", 
            
          }}
        >
         
          <Typography component="h1" variant="h5">
          Sign Up
          </Typography>
          
          <Box component="form"  onSubmit={submit} noValidate sx={{ mt: 1,width:"100%" }}>
            <TextField
              margin="normal"
              required={true}
              // fullWidth
              variant="standard"
              id="Full Name"
              label="Full Name"
              name="name"
              autoComplete="name"
              sx={{width:"100%"}}
              // autoFocus
              {...register('name')}

               InputProps={{
        disableUnderline: true,
      }}
            />
            <Typography sx={{color:"red"}}>{errors.name?.message}</Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              variant="standard"
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              // autoFocus
              {...register('email')}

               InputProps={{
        disableUnderline: true,
      }}
            />
            <Typography sx={{color:"red"}}>{errors.name?.message}</Typography>
      
           
            <TextField
              margin="normal"
              variant="standard"
              required ={true}
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
            <Typography sx={{color:"red"}}>{errors.password?.message}</Typography>
          
           
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
               
              </Grid>
              <Grid item sx={{cursor:"pointer", color:"#1565C0"}} onClick={()=>{
                myNavigation("/login")
              }}>
                
                  {"Already have an account? Log In"}
               
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

export default Signup

const HolderLogin = styled.div`

height: auto;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
padding-top: 30px;

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
 opacity: 0.9;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 color: white;

 span{
   color: white;
   font-size: 40px;
   font-weight: 600;
   letter-spacing: 300;
 }
`
