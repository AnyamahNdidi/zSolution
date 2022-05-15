import React from 'react'
import {Drawer, List,ListItem,ListItemButton,ListItemIcon,ListItemText, IconButton} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import {NavLink} from "react-router-dom"

function DrawerComp() {
  const [openDrawer, setOpenDrawer] = React.useState(false)
  return (
      < React.Fragment>
           <Drawer open={openDrawer} onClose={()=> setOpenDrawer(false)}>
        <List>
          <ListItemButton onClick={()=> setOpenDrawer(false)}>
            <NavLink to="/" style={{color:"white"}} >
            <ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItemIcon>
            </NavLink>
          </ListItemButton>
          <ListItemButton onClick={()=> setOpenDrawer(false)}>
            <NavLink to="/post" style={{marginTop:"10px"}}>
            <ListItemIcon>
              <ListItemText>Uplaod Your Product</ListItemText>
            </ListItemIcon>
            </NavLink>
          </ListItemButton>
         

        </List>
        </Drawer>
        <IconButton sx= {{ color:"white", marginLeft:"auto"}} onClick={()=>setOpenDrawer(!openDrawer)}>
           <MenuIcon/>
        </IconButton>
      </React.Fragment>
 
   
  )
}

export default DrawerComp