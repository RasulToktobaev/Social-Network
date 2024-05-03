import { api } from "./api";

export const userAPi = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (user) => ({
                url: '/login',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['user']
        }),
        register: builder.mutation({
            query: (user) => ({
                url: '/register',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['user']
        }),
        logout: builder.mutation({
            query: () => ({
                url: '/logout',
                method: 'POST'
            }),
            invalidatesTags: ['user']
        })
    })
})