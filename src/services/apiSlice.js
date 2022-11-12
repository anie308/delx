import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseURL = 'https://delx-api.onrender.com/api'

export const apiSlice = createApi({
    reducerPath : 'apiSlice',
    refetchOnReconnect : true,
    baseQuery: fetchBaseQuery({baseUrl: baseURL}),
    endpoints:(builder) => ({
        posts: builder.query({
            query:()=> '/posts', 
        })
    })
    
})

 export default apiSlice
