import { json, LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
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
  
export const meta: MetaFunction = ({data}:any) => {
    return [
        { title: "About" },
        { name: "description", content: data.posts.title },
        {name:"og:image",content:"https://pornyo-test.s3.us-east-1.amazonaws.com/co_performer_files/file_1710932268315_388b84c8-b33f-4361-b245-6635ad2a1464.png"}
      ];
  };
const about = () => {
    const { posts } = useLoaderData<typeof loader>();
  return (
    <div>{posts.title}</div>
  )
}

export default about