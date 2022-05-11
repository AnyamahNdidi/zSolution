import React from 'react'
import {Drawer, List,ListItem,ListItemButton,ListItemIcon,ListItemText, IconButton} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';

function DrawerComp() {
  const [openDrawer, setOpenDrawer] = React.useState(false)
  return (
      < React.Fragment>
           <Drawer open={openDrawer} onClose={()=> setOpenDrawer(false)}>
        <List>
          <ListItemButton onClick={()=> setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton onClick={()=> setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>Bio</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton onClick={()=> setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>Works</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton onClick={()=> setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>Contact</ListItemText>
            </ListItemIcon>
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