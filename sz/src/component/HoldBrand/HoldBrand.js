import React from 'react'
import {makeStyles} from "@mui/styles"
import {Box, Typography, Button, Card, InputLabel, MenuItem, 
  FormControl,Select} from "@mui/material"
import img from "./q.jpg"
import pix from "./3.jpg"
import axios from "axios"
import {Link} from  "react-router-dom"



const useStyles = makeStyles((theme)=>({

    root:{
      width:"100%",
      paddingTop:"30px",
      display:"flex",
      height:"500px",
      flexDirection:"column",
      alignItems:"center",
     
      
      "& .ButtonBox":{
          height:"auto",
          width:"100%",
          justifyContent:"space-between",
          display:"flex",
          flexWrap:"wrap",
          alignItems:"center",
         
          

          
         "@media (max-width: 800px)":{
         width:"100%",
         height:"auto",
         display:"none",
         
      },          
      },

      "& .findBox":{
        width:"80%",
        height:"auto",
        display:"flex",
        
      },

      "& .adsBox":{
        height:"100%",
        width:"25%",
        // backgroundColor:"blue",

       "@media (max-width: 800px)":{
        display:"none",
      }, 
      },

      "& .mainCon":{
        height:"100%",
        width:"70%",
        display:"flex",
        flexDirection:"column",
        paddingLeft:"10px",

       "@media (max-width: 800px)":{
         width:"100%",
         height:"auto",
          paddingLeft:"0px",
      }, 

      },

      "& .allProducts":{
        width:"100%",
        height:"100%",
        
        display:"flex",
        flexWrap:"wrap",

         "@media (max-width: 800px)":{
         width:"100%",
         height:"auto",
         display:"flex",
         justifyContent:"center",
         alignItems:"center",
      }, 
      },
      "& .productCard":{
        height:"200px",
        width:"170px",
        backgroundColor:"white",
        margin:"7px",
        transition: "transform 180ms ease-out",

    '&:hover': {
      cursor:"pointer",
     transform: "scale(1.03)",

      
      },
      },
      "& .pix":{
          height:"100px",
          width:"100%",
          backgroundColor:"green",
          
      },
      "& .price":{
        paddingLeft:"5px",

         "& .MuiTypography-root":{
            fontWeight:"700",
          }
      },
      "& .mileage":{
        paddingLeft:"5px",
      },
      "& .year":{
        paddingLeft:"5px",
      },
      "& .title":{
        paddingLeft:"10px"
      }
    }

    

}))

function HoldBrand() {
   const classes = useStyles()
    const [dataFile, setDatafile]  = React.useState([])

     const fetchData = async ()=>{
    const res =await axios.get("https://zzsolution.herokuapp.com/api//product/all")
    console.log(res.data.data);
    setDatafile(res.data.data)
    

  }

   React.useEffect(()=>{
    fetchData()
   
  },[])
  return (
    <div>
      <Box className={classes.root}>
        <Box className="findBox">
          <Box className="adsBox">
            <img src={pix} style={{width:"100%", height:"100%", objectFit:"cover"}} />
          </Box>
          <Box className="mainCon">
             <div style={{width:"70%", height:"auto", display:"flex"}}>
                <Typography>Most Search</Typography>
              </div>
        {/* <Box className="ButtonBox">
          <Button sx={{backgroundColor:"#1c2780", color:"white", width:"170px", height:"55px" }}>Toyota</Button>
          <Button sx={{backgroundColor:"#1c2780", color:"white", width:"170px", height:"55px"}}>KAI</Button>
          <Button sx={{backgroundColor:"#1c2780", color:"white", width:"170px",  height:"55px"}}>Lexus</Button>
          <Button sx={{backgroundColor:"#1c2780", color:"white", width:"170px",  height:"55px"}}>Benz</Button>
        </Box> */}
        <div style={{width:"70%", height:"auto", display:"flex", marginTop:"20px"}}>
                <Typography>All Cars</Typography>
              </div>
        <Box  className="allProducts">
         
          
         {
           dataFile.map((props)=>(
             <div>
              <Link to={`/details/${props._id}`}>>
            <Card className="productCard">
            <Box className="title">
              <Typography>{props.make}</Typography>
              
              </Box>
            <Box className="pix"> <img src={props.avatar} style={{width:"100%", height:"100%", objectFit:"cover"}}/></Box>
            <Box className="price">
              <Typography>{props.price}</Typography>
              
              </Box>
            <Box className="mileage">millage: {props.millage}</Box>
            <Box className="year">model: {props.model}</Box>


          </Card>
          </Link>
          </div>
           ))
         }
         
          
         
          
        </Box>
          </Box>
            
        </Box>
      </Box>

    </div>
  )
}

export default HoldBrand


