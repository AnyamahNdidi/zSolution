
import React from 'react'
import styled from "styled-components"
import {yupResolver} from "@hookform/resolvers/yup"
import {useForm} from "react-hook-form"
import {makeStyles} from "@mui/styles"
import * as yup from "yup"
import {useParams} from "react-router-dom"
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
        backgroundColor:"pink",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",

      }
    }
      
     
    

}))

function DetailPage() {
   const classes = useStyles()
    const {id} = useParams()
     const [userDe, setUserDe] = React.useState([])
     const fetchData = async ()=>{
    
    const res = await axios.get(`https://zzsolution.herokuapp.com/api/user/${id}`)
    console.log(res)
    setUserDe(res.data.data)
    console.log(userDe)
    
  }
  React.useEffect(()=>{
     fetchData()
    //  editUser()
  },[])
  return (
    <div className ={classes.root}>
       <AllContainer >
    
    
      <HolderLogin>
        <Card  className={classes.root} >
           <Container component="main"  className="all">
        {/* <CssBaseline /> */}
       
          <div className="divv">
            <div className="imgCard">
              <div >
              <Pix src={userDe?.avatar}/>
              </div>
              <div>
               
             
              </div>

            </div>
            <div className="inputCard">
              <Box >
                <div>name: {userDe?.make}</div>
                <div>Model: {userDe?.model}</div>
                <div>price: {userDe?.price}</div>
                <div>description: {userDe?.decs}</div>
                <div>posted By: {userDe?.person?.name}</div>
           
            
            {/* <Typography sx={{color:"red"}}>{errors.name?.message}</Typography> */}
           
            {/* <Typography sx={{color:"red"}}>{errors.name?.message}</Typography> */}
      
           
       
           
          
          
           
            {/* <Typography sx={{color:"red"}}>{errors.password?.message}</Typography> */}
          
           
           
          
          </Box>

            </div>

          </div>
          
         
         
          
          
        
     
      
      </Container>
        </Card>

      </HolderLogin>

    
    </AllContainer>
    </div>
  )
}

export default DetailPage


const Label = styled.label`
width: 90%;
height: 35px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
background-color: #1C2780;
border-radius: 6px;
font-weight: 500;
margin-bottom: 20px;
color:white ;
`

const Pix = styled.img`
width: 90%;
height: 300px;

object-fit: cover;
margin-bottom: 10px;
`

const Image = styled.input`
display: none;
`

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
