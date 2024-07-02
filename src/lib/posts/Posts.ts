import { getPosts,publishPost, getPostDetail} from "../conn/posts";
import { responsePosts, addPost } from "@/types/posts";

class Posts {
    async getAllPosts ():Promise<{ data?: responsePosts[] | null; error?: string }>{
        const data = await getPosts()
        if(data){
            return {data}
        }
        return {error: "Error al consultar los posts"}
    }
    async generatePost(postData:addPost): Promise<{ data?: responsePosts | null; error?: string }>{
        const data = await publishPost(postData)
        if(data){
            return {data}
        }
        return {error: "Error al consultar los posts"}
    }
    async postDetail(id:string): Promise<{ data?: responsePosts | null; error?: string }>{
        const data = await getPostDetail(id)
        if(data){
            return {data}
        }
        return {error: "Error al consultar el posts"}
    }
}

export const PostClass = new Posts()