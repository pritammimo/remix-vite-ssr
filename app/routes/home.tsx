import { json, LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import React from 'react'
type University = {
    name: string;
    domains: string[];
  };
export const loader = async ({
    params,
    request,
  }: LoaderFunctionArgs) => {
    const response = await fetch(
        "http://universities.hipolabs.com/search?country=United+Kingdom"
      );
    
      const universities: University[] = await response.json();
    
      // Return the data as JSON
      return json({ universities });
  };
const home = () => {
    const { universities } = useLoaderData<typeof loader>();
    
  return (
    <div>
       <ul>
        {universities.map((university) => (
          <li key={university.name}>
            <a
              href={`https://${university.domains[0]}`}
              target="_blank"
              rel="noreferrer"
            >
              {university.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default home