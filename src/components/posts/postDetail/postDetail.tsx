'use client'
import { Box, Stack, Typography } from '@mui/material'
import * as React from 'react'
import { PostClass } from '@/lib/posts/Posts'
import { responsePosts } from '@/types/posts'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import 'dayjs/locale/es-mx'
import dayjs from 'dayjs';

interface props {
    id: string
}
export default function PostDetailComponent({ id }: props): React.JSX.Element {
    dayjs.extend(LocalizedFormat)
    dayjs.locale('es-mx')

    const [Post, setPost] = React.useState<responsePosts>()
    React.useEffect(() => {
        const Fetch = async () => {
            const { data } = await PostClass.postDetail(id)
            if (data) {
                setPost(data)
            }
        }
        Fetch()
    }, [id])
    return (
        <>
            <Stack direction="column" spacing={1}>
                <Typography textAlign="center" variant='h5'>{Post?.title}</Typography>
                <Typography variant='body2' textAlign="center">Creado por: {Post?.author} - Fecha de publicación: {dayjs(Post?.created_at).format("LLLL")}</Typography>
            </Stack>
            <Box sx={{width: "100%", height: "90%", padding:2}}>
                <Typography variant='body1' textAlign="justify">
                    {Post?.content}
                </Typography>
            </Box>

        </>
    )
}