import { Post } from "@prisma/client";
import { api } from "./api";

export const postApi = api.injectEndpoints({
    endpoints: (builder) => ({
        createPost: builder.mutation<Post, { content: string }>({
            query: (postData) => ({
                url: '/posts',
                method: 'POST',
                body: postData
            })
        }),
        getAllPosts: builder.query<Post[], void>({
            query: () => ({
                url: '/posts',
                method: 'GET'
            })
        })
    })
})