import * as React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { responsePosts } from '@/types/posts';
import { Divider } from '@mui/material';
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import 'dayjs/locale/es-mx'
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';
interface props {
    post: responsePosts
}
export default function PostItem({post}: props): React.JSX.Element {
    const router = useRouter()
    dayjs.extend(LocalizedFormat)
    dayjs.locale('es-mx')
    return (
        <Box sx={{ minWidth: "70%", margin: "1rem", boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Autor: {post.author} | {dayjs(post.created_at).format("LLLL")}
                </Typography>
                <Typography variant='body2'>
                    {post.title}
                </Typography>
                <Divider sx={{my:1}}/>
                <Typography variant='body1' textOverflow="ellipsis">
                    {post.content}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => router.push(`/posts/${post.id}`)}>Ver el post completo</Button>
            </CardActions>
        </Box>
    )
}