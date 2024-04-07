import { json, LoaderFunctionArgs } from '@remix-run/node';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import axios from 'axios';
import { useLoaderData } from '@remix-run/react';
export const loader = async ({
    params,
    request,
  }: LoaderFunctionArgs) => {
    
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
    
      const posts= await response.json();
    
      // Return the data as JSON
      return json({ posts });
  };
const about = () => {
    const { posts } = useLoaderData<typeof loader>();
    console.log(posts)
  return (
    <div>{posts.title}</div>
  )
}

export default about