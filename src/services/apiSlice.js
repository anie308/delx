import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseURL = process.env.BASEURL 

export const apiSlice = createApi({
    reducerPath : 'apiSlice',
    baseQuery: fetchBaseQuery({baseUrl: baseURL}),
    endpoints:(builder) => ({
        posts: builder.query({
            query:()=> '/posts',
            
        })
    })
    
})
