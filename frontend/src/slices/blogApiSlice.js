import { apiSlice } from "./apiSlice";
const BLOG_BASE_URL = '/api/blogs';

export const blogApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        allBlogs: builder.query({
            query: () => ({
                url: `${BLOG_BASE_URL}`,
                method: 'GET'
            })
        })
    })
});

export const { useAllBlogsQuery } = blogApiSlice;