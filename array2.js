/* 1. Create an object that has properties
 "username" and "password". Fill those values in with strings.
*/
var nuf={
    username: "nuroye",
    password: "nuftech2022"
}
console.log(nuf);


/* 2. Create an array which contains the object you have made 
above and name the array "database".*/


    var login=
       {username: "nuroye",
        password: "nuftech2022",
        status:"active"
}
database.push(login)

/*3. Accept username, password & status from the prompt 
and add it to the database array */

var cool1 = prompt("Please Enter Username");
var cool2 = prompt("Please Enter Password");
var cool3 = prompt("Please Enter Status");

function signin(username,password){
if (cool1 === database[0].username && cool2 === database[0].password){
    console.log("You're Welcome");
}
    else  {
        console.log("Invalid Input... Please try again");

    }

return (nuroye,nuftech2022);
}
    
    




 function signin(username,password){
    if (signin(database.username) ==="nuroye" && signin(database.password) ==="nuftech2022"){
        console.log("You're Welcome")
    }
    else{
    return(nuroye,nuftech2022);
}
}


database[
    {
        username: "nuroye", 
        password: "nuftech2022", 
        status: "active" 
    },
    {
        username: "omoh", 
        password: "omoh2022", 
        status: "online"
    },
    {
        username: "ajay", 
        password: "ajay2022", 
        status: "done" 
    },
    {
        username: "tully", 
        password: "tully2022", 
        status: "open"
    },

    {
        username: "akin", 
        password: "akin2022", 
        status: "confirmed"
    }
      
]
function signin(){
    for(i=0; i < database.length; i++){
        if(username === database[i].username && 
            password === database[i].password)
           {
                console.log(username + "You are logged in !!!")
            }
    }

}
