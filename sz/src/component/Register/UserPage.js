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

function UserPage() {
   const hist = useNavigate()
  return (
    <div>
      <AllContainer >
    
    
      <HolderLogin>
        <Card sx={{ height:"250px", width:"400px", marginTop:"100px"}}>
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
          Welcome User
          </Typography>
           <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={()=>{
                hist("/post")
              }}
            >
              Click To Post Product
            </Button>

             <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
                onClick={()=>{
                hist("/view")
              }}
            >
              View Product You posted
            </Button>
          
        
        </Box>
      
      </Container>
        </Card>

      </HolderLogin>

    
    </AllContainer>
    </div>
  )
}

export default UserPage

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
