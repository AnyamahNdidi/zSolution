import React,{useState} from 'react'
import {AppBar, Toolbar, Tabs, Tab,Typography,useMediaQuery, useTheme, Button} from "@mui/material"
import {makeStyles} from "@mui/styles"
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeMaxIcon from '@mui/icons-material/HomeMax';
import BiotechIcon from '@mui/icons-material/Biotech';
import CodeIcon from '@mui/icons-material/Code';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import DrawerComp from './DrawerComp';


const userStyles = makeStyles({
  logo:{
   
    padding:"10px",
    fontWeight:"600"
  },
  text:{
     fontSize:"35px"
  },
  icon:{
    width:"100px",
    display:"flex",
    alignItems:"center",
    justifyContent:"space-around",
    // marginLeft:"auto"

  },
  tool:{
    display: "flex",
    width:"90%",
    alignItems:"center",
    justifyContent:"space-around",
   


   "@media (max-width: 600px)":{
      width: "100%",
    }

  },
})

function Header() {
  const theme = useTheme()
  console.log(theme)
  const isMatch = useMediaQuery(theme.breakpoints.down("md"))
  console.log(isMatch)
  const classes = userStyles()
  const [value, setValue] = useState()
  return (
    <div>
      <AppBar color="primary"  sx={{height:"60px"}} >
        <Toolbar  sx={{display:"flex",justifyContent:"space-around", alignItems:"center",}}>
          <div className={classes.tool}>
          <div className={classes.logo}>
            <Typography sx={{fontSize:"25px", paddingRight:"15px"}}>zSolution Motors.</Typography>
          </div>
          {
            isMatch ? (
              <>
               <DrawerComp/>
              </>
            ) : (
              <>
              <Tabs sx={{height:"55px", }} textColor="white" value={value} onChange={(e, value)=>  setValue(value)} >
            
            <Tab  iconPosition="start" label="Home" />
            <Tab  iconPosition="start" label="All cars"/>
             <Button variant="contained">Upload Your Car For Sales</Button>
          </Tabs>
     
              </>
            )
          }

          
          </div>

          {/* {
            isMatch ? (<></>) : (
              <div className={classes.icon}>
              <GitHubIcon/>
              <FacebookIcon/>
              <LinkedInIcon/>
            </div>
            )
          } */}

           
        </Toolbar>
     
      </AppBar>
    </div>
  )
}

export default Header