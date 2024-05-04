import { register } from "module";
import { api } from "./api";
import { current } from "@reduxjs/toolkit";
import { User } from '../types'

export const userAPi = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<
            { token: string },
            { email: string; password: string }
        >({
            query: (userData) => ({
                url: '/login',
                method: 'POST',
                body: userData
            })
        }),
        register: builder.mutation<
            { email: string; passoword: string; name: string },
            { email: string; passoword: string; name: string }
        >({
            query: (userData) => ({
                url: '/register',
                method: 'POST',
                body: userData
            })
        }),
        current: builder.query<User, void>({
            query: () => ({
                url: '/current',
                method: 'GET'
            })
        }),
        getUserById: builder.query<User, string>({
            query: (id) => ({
                url: `/users/${id}`,
                method: 'GET'
            })
        }),
        updateUser: builder.mutation<User, {userData:FormData, id:string}>({
            query: (userData, id) => ({
                url: `/users/${id}`,
                method: 'PUT',
                body: userData
        
    })
})