import * as React from 'react'
import Box from "@mui/material/Box"
import { Divider, Typography } from '@mui/material'
import ListPosts from '@/components/posts/listPosts/ListPosts'
import FormCreate from '@/components/posts/createPost/formCreate'
export default function Posts(): React.JSX.Element{
    return(
        <>
            <Typography variant='h6' sx={{textAlign: "center", mt: 2}}>Posts</Typography>
            <Divider/>
            <ListPosts/>
            <FormCreate/>
        </>
    )
}