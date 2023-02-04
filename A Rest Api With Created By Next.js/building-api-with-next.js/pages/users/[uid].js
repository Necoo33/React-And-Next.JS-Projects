import React from 'react'
import fs from "fs/promises"
import path from 'path'

export default function uid(props) {
    let { findTheExactUser } = props;

  return (
    <div>
        {findTheExactUser && (
            <div key={findTheExactUser.id} className='user-infos'>
                <h2>User's Nickname: {findTheExactUser.username}</h2>
                <p>User's Phone Number: {findTheExactUser.telephone}</p>
                <p>User's Email: {findTheExactUser.email}</p>
            </div>
        )}
    </div>
  )
}

export async function getServerSideProps(context){
    let { params, req, res } = context;

    // dikkatli ol, aşşağıda amına koyduğumun await'ini yazmadığım için ikidir hata alıyorum.

    let readTheDatabase = await fs.readFile(path.join("./data/users.json"));

    let actualData = JSON.parse(readTheDatabase);

    if(!actualData){
        return {
            redirect: {
                destination: "/"
            }
        }
    }
    
    let findTheExactUser = actualData.find(parameter => params.uid === parameter.username);

    if(!findTheExactUser){
        return {
            notFound: true
        }
    }


    return {
        props: {
            findTheExactUser,
            notFound: false
        }
    }
}