import React, { useEffect, useState } from 'react'
import fs from "fs/promises"
import path from 'path'
import { useRouter } from 'next/router'

async function fetchTheExactUser(username){
    let response = await fetch(`/api/users/${username}`);
    let data = response.json();

    return data;
}

export default function index(props) {
    let { dataItself } = props
    let router = useRouter()
    let [exactUserInfo, setExactUserInfo] = useState(null);

    function handleClick(param){
        fetchTheExactUser(param).then(parameter => parameter.json()).then(data => setExactUserInfo(data.exactUser));
    }

    console.log(exactUserInfo);


  return (
    <div>
        <ul>
            {dataItself.map(function(param){
                return ( <>
                    <li key={param.id}>{param.username}</li>
                    <button onClick={() => handleClick(param.username).bind(null, exactUserInfo)}>Get The Details</button>
                    </> )   
            })}    
        </ul>    

        {exactUserInfo && ( 
            <div>{exactUserInfo.username}</div>
        )}
    </div>
  )
}

export async function getStaticProps(){
    let getJsonDatabase = await fs.readFile(path.join("./data/users.json"));

    let dataItself = await JSON.parse(getJsonDatabase);

    if(!dataItself){
        return { redirect: {
          destination: "/"
        }}
    }

    if(dataItself.length === 0){
        return { notFound: true }
    }

    return {
        props: {
            dataItself
        },
        revalidate: 10,
        notFound: false
    }
}