import fs from "fs"
import path from "path";

// this page is main api. the path is "/api/users". 
// You can make GET and PUT requests on that page to all api.

export default function handleUsersAPI(req, res){ 
    class user{
        constructor(){
            this.username = req.body.username;
            this.password = req.body.password;
            this.email = req.body.email;
            this.telephone = req.body.telephone;
            this.id = Math.random()*10000;
        }
    }   

    if(req.method === "POST"){
        let newUser = new user();

        let databasePath = path.join("./data/users.json");

        let readTheDatabase = fs.readFileSync(databasePath);

        let data = JSON.parse(readTheDatabase);

        data.push(newUser);

        fs.writeFileSync(databasePath, JSON.stringify(data));

        res.status(201).json( { message: "your membership succesfully created", userInfo: newUser } )
    } else if(req.method === "GET"){
        let databasePath = path.join("./data/users.json");

        let readTheDatabase = fs.readFileSync(databasePath);

        let userData = JSON.parse(readTheDatabase);

        res.status(200).json( { userData } );
    }

}


/* 

for POST actions to this page:

you can use this function with pass an object to the argument which contains
all the data you want to post. 

async function postNewUser(param){
  let response = await fetch("/api/users", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(param)});
  let data = await response.json();

  return data;
}

put it in the onSubmit event handler and provide valid values to post data.

--------------------------------------------------------------

for GET actions to this page:

you can simply use this function to fetch data's with GET method. 
Write an useEffect hook, invoke that and bind the ".then()" method,
put an argument on that method and set that argument as a value of
an useState Hook.

async function fetchUserAPI(){
  let response = await fetch("/api/users/");
  let data = await response.json();

  return data
}

*/
