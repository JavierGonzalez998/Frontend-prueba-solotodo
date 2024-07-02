'use client'
import * as React from 'react'
import { Box, Button, Drawer } from '@mui/material'
import NavItems from './navItems'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
export default function Nav(): React.JSX.Element {
    const [open, setOpen] =React.useState<boolean>(false)
    return (
        <>
            <Box sx={{display:"flex", flexDirection: "row", alignItems: "center",width: "100vw", height:"3rem", boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px", backgroundColor: "#CECECE"}}>
                <Button onClick={() => setOpen(true)} sx={{Color: "black"}}>
                    {!open ? <MenuIcon sx={{color: "black"}}/> : <CloseIcon sx={{color: "black"}}/>}
                </Button>
            </Box>
            <Drawer open={open} onClose={() => setOpen(false)}>
                <Box sx={{ width: 250 }} role="presentation" onClick={() => setOpen(false)}>
                    <NavItems onClose={(d:boolean) => setOpen(d)}/>
                </Box>
            </Drawer>
        </>
    )
}