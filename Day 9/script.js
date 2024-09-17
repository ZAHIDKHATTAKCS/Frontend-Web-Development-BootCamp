// Conditional Statements

let burger = "burger";

if(burger === "biryani"){

    console.log("Biryani mill gae");

}else{
    console.log(`Biryani nahi mili ma ${burger} le aya`);
}






// Concatenation

let fname = "zahid";

let lname = "khattak";

console.log(`Hello this is my Name : ${fname} ${lname}`);

console.log("Hello this is my Name : " + fname + " " + lname);


// Nested if else

let username = "Zahid";

let userpass = "7894";

if(username == "Zahid"){ // let suppose it's true
    if(userpass == "7890"){ // let suppose it's false
        console.log("Welcome");
    }else{
        console.log("Password Incorrect"); // this will be run
    }
}else{
    console.log("Username Incorrect");
}