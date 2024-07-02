'use client'
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import * as React from 'react'
import ArticleIcon from '@mui/icons-material/Article';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import { useRouter } from 'next/navigation';
const dataNav = [
    {
        title: "Posts",
        url: "/posts",
        icon: <ArticleIcon />
    },
    {
        title: "Crear Post",
        url: "/posts/create",
        icon: <NoteAddIcon />
    }
]

interface props {
    onClose: Function
}

export default function NavItems({onClose = () => {}}: props): React.JSX.Element {
    const router = useRouter()
    return (
        <Box sx={{ width: 250 }} role="presentation" onClick={() => onClose(false)}>
            <Divider sx={{my:3}}/>
            <List>
                {dataNav.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton onClick={() => router.push(item.url)}>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}