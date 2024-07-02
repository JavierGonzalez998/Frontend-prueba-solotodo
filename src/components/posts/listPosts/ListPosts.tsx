'use client'
import * as React from 'react'
import { PostClass } from '@/lib/posts/Posts'
import { responsePosts } from '@/types/posts'
import Box from "@mui/material/Box"
import PostItem from './Posts'
export default function ListPosts():React.JSX.Element{
    const [posts, setPosts] = React.useState<responsePosts[]>([])
    const Fetch = async() => {
        const {data, error} = await PostClass.getAllPosts()
        if(data){
            setPosts(data)
        }else{
            console.log(error)
        }
    }
    React.useEffect(() => {
        Fetch()
    }, [])
    return(
        <Box width="100%" height="95%" overflow="scroll">
            {posts.map((item, key) => {
                return(
                    <PostItem key={key} post={item}/>
                )
            })}
        </Box>
    )
}
