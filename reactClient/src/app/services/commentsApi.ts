import { api } from "./api";

export const commentApi = api.injectEndpoints({
    endpoints: (builder) => ({
        createComment: builder.mutation<Comment, Partial<Comment>>({
            query: (newComment) => ({
                url: '/comments',
                method: 'POST',
                body: newComment
            })
        }),
        deleteComment: builder.query<void, string>({
            query: (commentId) => ({
                url: `/comments/${commentId}`,
                method: 'DELETE'
            })
        }),
    })
})