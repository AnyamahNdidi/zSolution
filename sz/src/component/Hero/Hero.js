import React from 'react'
import {makeStyles} from "@mui/styles"
import {Box, Typography, Button, Card, InputLabel, MenuItem, 
  FormControl,Select} from "@mui/material"
import img from "./3.png"

const useStyles = makeStyles((theme)=>({

    root:{
     width:"100%" ,
     height: "500px",
     
     backgroundImage: `url(${img})`,
     backgroundSize: 'cover', 
     backgroundRepeat: 'no-repeat',


     "@media (max-width: 800px)":{
       width:"100%",
       height:"auto",
       paddingBottom:"15px",
       
      }
      ,
     "& .all":{
       width:"100%",
       height:"100%" ,
      //  backgroundColor:"black",
      //  opacity:"0.9",
       display:"flex",
       justifyContent:"center",
       alignItems:"center",

      // "@media (max-width: 800px)":{
      //   width: "100%",
      //   height:"auto",
      //   backgroundColor:"#1C2780",
      // },
     },
     "& .holder":{
        width:"80%", 
        height:"100%",
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center",

        "@media (max-width: 800px)":{
        width: "100%",
        height:"auto",
      
      },
     },
      "& .cell1":{
        width:"50%",
        height:"100%",
       
        display:"flex",
        flexDirection:"column",
         "@media (max-width: 800px)":{
        height:"auto",
        width:"90%"
      },
      },
      "& .cell2":{
        width:"50%",
        height:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        
           "@media (max-width: 800px)":{
        height:"auto",
         width:"90%",
      },
      },
     "& .textCon":{
      marginTop:"150px",


     
     },
      "& .ttt":{
        
      "& .MuiTypography-root":{
            fontSize:"40px",
            fontWeight:"700",
            color:"#F6FAF5",
            lineHeight:"50px",
           
      
          }
      },
      "& .small":{
        "& .MuiTypography-root":{
            fontSize:"15px",
           
            color:"#F6FAF5",
            lineHeight:"50px",
           
      
          }
      },
      "& .myCard":{
        height:"70%",
        width:"70%",
        backgroundColor:"white",
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-evenly",

         "@media (max-width: 800px)":{
        
         width:"100%",
         height:"auto",
      },
      }
     
    }

}))

function Hero() {
  const classes = useStyles()
  return (
    <div>
      <Box className={classes.root}>
        <Box className="all">
          <Box className='holder'>
          <Box  className="cell1">
            <div className="textCon">
              <div className= "ttt"> <Typography>New, Demo and Used Cars for sale on zSolutions. </Typography></div>
              
               <div className="small"><Typography>All Product are values able.</Typography></div>
               <Button sx={{backgroundColor:"#1c2780", color:"white"}}>Explore More</Button>
            </div>
           
          </Box>
          <Box className="cell2">
            <Card className="myCard">
              <div style={{width:"100%", height:"auto", display:"flex", justifyContent:"center", alignItems:"center",}}>
                <Typography>All Kinds</Typography>
              </div>
              

               <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Make</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          // value={age}
          // onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
               <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Model</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          // value={age}
          // onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
               <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Price</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          // value={age}
          // onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      
<div style={{width:"100%", height:"auto", display:"flex", justifyContent:"center", alignItems:"center",}}>
     <Button sx={{backgroundColor:"#1c2780", color:"white", width:"50%"}}>Search</Button>
     </div>
            </Card>
          </Box>
          </Box> 
        </Box>


      </Box>
      
    </div>
  )
}

export default Hero
