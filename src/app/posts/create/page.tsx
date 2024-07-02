import * as React from 'react'
import { Divider, Typography } from '@mui/material'
import FormCreate from '@/components/posts/createPost/formCreate'
export default function Create(): React.JSX.Element {
    return (
        <>
            <Typography variant='h6' sx={{ textAlign: "center", mt: 2 }}>Crear Post</Typography>
            <Divider />
            <Typography variant='body1' textAlign="center" sx={{mt:2}}>Para agregar un Post, debe completar los siguientes datos:</Typography>
            <FormCreate/>
        </>)
}