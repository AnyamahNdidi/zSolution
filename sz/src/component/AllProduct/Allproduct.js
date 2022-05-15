import React from 'react'
import styled from "styled-components"
import {yupResolver} from "@hookform/resolvers/yup"
import {useForm} from "react-hook-form"
import {makeStyles} from "@mui/styles"
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
// import SearchIcon from '@mui/icons-material/Search';
import Swal from 'sweetalert2'
import axios from "axios"



const useStyles = makeStyles((theme)=>({

    root:{
      width:"100%",
      paddingTop:"100px",
      display:"flex",
      height:"auto",
      flexDirection:"center",
      alignItems:"center",
      justifyContent:"center",

      "@media (max-width: 800px)":{
      width: "100%",
    },
     
      

      "& .dHolder":{
        height:"500px",
        width:"80%",
       

        "@media (max-width: 800px)":{
      width: "100%",
    },
      },

      "& .salesCon":{
        width: "100%",
        height:"600px",
        backgroundColor:"pink"
      }
    }
      
     
    

}))

function Allproduct() {
   const classes = useStyles()
  return (
    <div className ={classes.root}>
      <div className="dHolder">
        <div >
         <TextField id="standard-basic" label="Search For Item" variant="standard"  InputProps={{
        disableUnderline: true,
      }} />
      <Button
              type="submit"
              
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Search 
            </Button>

      </div>
      <div className ="salesCon">

      </div>
      
    </div>
    </div>)
}

export default Allproduct
