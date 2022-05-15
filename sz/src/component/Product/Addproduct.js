import React, { useContext, useState } from 'react'
import styled from "styled-components"
import {yupResolver} from "@hookform/resolvers/yup"
import {useForm} from "react-hook-form"

import * as yup from "yup"
import {
  Card,
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
import {makeStyles} from "@mui/styles"
import pix from "./default.jpg"
import {AuthContext} from "../Global/AuthProvider"


const useStyles = makeStyles((theme)=>({

    root:{
      width:"60%",
      height:"500px",
      marginTop:"90px",

       "@media (max-width: 800px)":{
       width:"100%",
       height: "auto",
       backgroundColor:"blue"
      
       
      },
     
      "& .all":{
        height:"auto"
      },
     

      "& .divv":{
        width:"100%",
        height:"500px",
        display: "flex",
        padding: '5px',
        flexWrap:"wrap",

        "@media (max-width: 800px)":{
       width:"100%",
       height:"auto",

       
      
       
      }

     

      },

      "& .imgCard":{
        width:"320px",
        height:"100%", 
       
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-around"
      },
      "& .inputCard":{
       flex:"1",
        height:"100%", 
        overflowX: "scroll",
    
      }

    }

}))


function Addproduct() {
  	const { currentUser } = useContext(AuthContext);
    const id = currentUser?.CreateUser?._id
    console.log("data",id,currentUser)
   const hist = useNavigate()
    const classes = useStyles()
     const [dispic, setdisPic] = useState(pix)
  const [pic, setPic] = useState('')

    const proModel = yup.object().shape({
    make:yup.string().required("field must not be empty"),
    model:yup.string().required("field must not be empty"),
    price:yup.string().required("field must not be empty"),
    phone:yup.string().required("field must not be empty"),
    email:yup.string().email("put in a valid mail").required("please put in your email"),
    millage:yup.string().required("field must not empty"),
    decs:yup.string().required("filed must not be empty"),
    // password:yup.string().required("password needed").min(6),
    // confirmpassword:yup.string().oneOf([yup.ref('password'), null])
  })

   const {register, handleSubmit, formState:{errors}} = useForm({
    resolver : yupResolver(proModel)
  })


    const uploadImage = (e) =>{
    const file = e.target.files[0]
    const save = URL.createObjectURL(file)
    setdisPic(save)
    setPic(file)
  }

  const submit = handleSubmit(async (data) => {
   
    console.log(data)
		const { make, model, phone, price,millage, email, decs} = data;

		const formData = new FormData();

		formData.append("make", make);
		formData.append("model", model);
		formData.append("price", price);
		formData.append("phone", phone);

		formData.append("email", email);
		formData.append("decs", decs);
     formData.append("millage", millage);
		formData.append("avatar", pic);

		 const config = {
      headers :{
        "content-type":"multipart/formdata"
      }
    }

		// const url = `http://localhost:4444/api/content/${id}/createContent`;
		// const url = `localhost:5050/api/product/${id}/add`;

	 await axios.post(`https://zzsolution.herokuapp.com/api/product/${id}/add`, formData, config).then((response)=>{
    console.log(data.data);
    if(response = 201){
         Swal.fire({
       title: "uploaded successful!",
            text: "You can clicked the button!",
            icon: "success",
            button: "ok",
    })
    }
   
   
 })
 
  })

		// reset();

  return (
    <div>
        <AllContainer >
    
    
      <HolderLogin>
        <Card  className={classes.root} >
           <Container component="main"  className="all">
        {/* <CssBaseline /> */}
       
          <div className="divv">
            <div className="imgCard">
              <div >
              <Pix src={dispic}/>
              </div>
              <div>
                 <Image
            type= "file"
            id="picture"
            accept='image/*'
            // onChange={(e) => uploadImage(e.target.files[0]) }
            onChange={uploadImage}
            />
             <Label htmlFor='picture'>upload Image</Label>
              </div>

            </div>
            <div className="inputCard">
              <Box component="form"  onSubmit={submit}  noValidate sx={{ mt: 1,width:"100%" }}>
            <TextField
              margin="normal"
              required={true}
              // fullWidth
              variant="standard"
             
              label="make"
             
             
              sx={{width:"100%"}}
              // autoFocus
              {...register('make')}

               InputProps={{
        disableUnderline: true,
      }}
            />
            <TextField
              margin="normal"
              required={true}
              // fullWidth
              variant="standard"
             
              label="model"
              {...register('model')}
             
           
              sx={{width:"100%"}}
              // autoFocus
              // {...register('name')}

               InputProps={{
        disableUnderline: true,
      }}
            />
            {/* <Typography sx={{color:"red"}}>{errors.name?.message}</Typography> */}
           
            {/* <Typography sx={{color:"red"}}>{errors.name?.message}</Typography> */}
      
            <TextField
              margin="normal"
              variant="standard"
              required ={true}
              fullWidth
              // name="password"
              label="price"
              type="text"
           
              
                {...register('price')}
                InputProps={{
        disableUnderline: true,
      }}
            />
            <TextField
              margin="normal"
              variant="standard"
              required ={true}
              fullWidth
              // name="password"
              label="phone"
              // type="phone"
              
                {...register('phone')}
                InputProps={{
        disableUnderline: true,
      }}
            />
            <TextField
              margin="normal"
              variant="standard"
              required ={true}
              fullWidth
          
              label="email"
            
      
              autoComplete="email"
                {...register('email')}
                InputProps={{
        disableUnderline: true,
      }}
            />
            <Typography sx={{color:"red"}}>{errors.email?.message}</Typography>
            <TextField
              margin="normal"
              variant="standard"
              required ={true}
              fullWidth
           
              label="millage"
              type="text"
             
           
                {...register('millage')}
                InputProps={{
        disableUnderline: true,
      }}
            />
            <TextField
              margin="normal"
              variant="standard"
              required ={true}
              fullWidth
           
              label="description"
             
           
                {...register('decs')}
                InputProps={{
        disableUnderline: true,
      }}
            />
            {/* <Typography sx={{color:"red"}}>{errors.password?.message}</Typography> */}
          
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Upload Product
            </Button>
          
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

export default Addproduct

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
