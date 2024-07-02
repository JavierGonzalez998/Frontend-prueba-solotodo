import axios from 'axios'
import { addPost } from '@/types/posts'
const url = "http://localhost:8000"


export async function getPosts(){
    const response = await axios.get(`${url}/api/posts/`)
    if(response.status == 200 ){
        return response.data
    }
}

export async function publishPost(data: addPost){
    const response = await axios.post(`${url}/api/posts/`, data)
    if(response.status == 200){
        return response.data
    }
}

export async function getPostDetail(id: string){
    const response = await axios.get(`${url}/api/posts/${id}`)
    if(response.status == 200 ){
        return response.data
    }
}