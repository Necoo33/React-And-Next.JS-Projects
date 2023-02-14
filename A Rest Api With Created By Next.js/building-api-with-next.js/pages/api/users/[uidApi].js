import fs from "fs/promises"
import path from "path";

// you can make GET, PUT and DELETE requests on this api route to individual data.
// for more information about them check out the instructions down below.

export default function handler(req, res){
    let uidApi = req.query.uidApi;

    if(req.method === "GET"){
        let readTheDatabase = require("fs").readFileSync(path.join("./data/users.json"));

        let actualData = JSON.parse(readTheDatabase);
        
        // you can change the route of that api with changing the ".username" property.
        // for example, if you compare the uidApi variable with ".email" or ".telephone" 
        // property the new routes are will be that, for example you should write:
        // "/api/users/user2@gmail.com" instead writing "/api/users/user2" for fetching
        // the individual user2 data. If you do that you should change the other
        // variables that contains high order function by same way(in our case, that variables
        // are "findTheExactUser" and "userDeleted" variables).
        let findTheExactUser = actualData.find(param => param.username === uidApi);

        res.status(200).json( { exactUser: findTheExactUser } );
    } else if(req.method === "PUT"){
        let { username, password, email, telephone, id } = req.body;

        let readTheDatabase = require("fs").readFileSync(path.join("./data/users.json"));

        let actualData = JSON.parse(readTheDatabase);

        let findTheExactUser = actualData.find(param => param.username === uidApi);

        if(username){
            findTheExactUser.username = username;
        } else if(!username){
            username = findTheExactUser.username;
        }

        if(password){
            findTheExactUser.password = password;
        } else if(!password){
            password = findTheExactUser.password;
        }

        if(email){
            findTheExactUser.email = email;
        } else if(!email){
            email = findTheExactUser.email;
        }
        
        if(telephone){
            findTheExactUser.telephone = telephone;
        } else if(!telephone){
            telephone = findTheExactUser.telephone;
        }

        if(!id){
            findTheExactUser.id = id;
        } else if(id){
            id = findTheExactUser.id;
        }

        require("fs").writeFileSync(path.join("./data/users.json"), JSON.stringify(actualData));

        res.status(201).json( { message: "you succesfully updated data" } );

    } else if(req.method === "DELETE"){
        let databasePath = path.join("./data/users.json");

        let readTheDatabase = require("fs").readFileSync(databasePath);

        let data = JSON.parse(readTheDatabase);

        let userDeleted = data.filter(param => uidApi !== param.username);

        require("fs").writeFileSync(databasePath, JSON.stringify(userDeleted));

        res.status(202).json( { message: "data deleted succesfully" } );
    }
}

/* 


For GET Method:

for making GET request to this api route you should pass the id value of this page.

async function getOneData(param){
  let response = await fetch(`/api/users/${param}`);
  let data = await response.json();

  return data;
}

fire that function with useEffect hook and bind ".then()" method for setting some useState Hooks value to that.

------------------------------------------------------------------------

For PUT Method:

You can use this function to put user. The first argument is actual value of "req.query.(idOfYourPage)".
Second argument is the object which defines the changing properties and new values. It should contain only
properties which you want to change.

async function putTheUser(dynamicRoute, propertyAndValueObject){
  let response = await fetch(`/api/users/${dynamicRoute}`, { method: "PUT", headers: { "Content-Type": "application/json"}, body: JSON.stringify(propertyAndValueObject)});
  let data = await response.json();

  return data;
}

Use this function with firing an event listener.

-----------------------------------------------------------------------------

For DELETE Method:

In this function the argument is again actual value of "req.query.(idOfYourPage)"

async function deleteTheUser(dynamicRoute){
  let response = await fetch(`/api/users/${dynamicRoute}`, { method: "DELETE" });
  let data = await response.json();

  return data;
}

Use This function with firing an event listener.

*/
