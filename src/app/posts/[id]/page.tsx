import { Divider, Typography } from '@mui/material'
import * as React from 'react'
import PostDetailComponent from '@/components/posts/postDetail/postDetail'
export default function PostDetail({ params }: { params: { id: string } }): React.JSX.Element{
    return(
        <>
            <Typography variant='h6' textAlign="center">Post</Typography>
            <Divider sx={{mb:2}}/>
            <PostDetailComponent id={params.id}/>
        </>
    )
}