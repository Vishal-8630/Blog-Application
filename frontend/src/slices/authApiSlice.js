import { apiSlice } from "./apiSlice";
const AUTH_BASE_URL = '/api/auth'

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: `${AUTH_BASE_URL}/register`,
                method: "POST",
                body: data
            })
        })
    })
});

export const { useRegisterMutation } = usersApiSlice;