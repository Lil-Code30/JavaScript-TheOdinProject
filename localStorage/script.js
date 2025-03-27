
const list = [
    {
        username: "Maria",
        email: "B4Y3W@example.com",
    },
    {
        username: "john",
        email: "john@example.com",
    }
]

// localStorage.setItem(key, value)

localStorage.setItem("user", JSON.stringify(list));
// localStorage.removeItem("user1");

const storedUserData = localStorage.getItem('user');

if(storedUserData){
    const userData = JSON.parse(storedUserData);
    console.log(userData);
    console.log(userData[0]);
    console.log(userData[0].username);
    console.log(userData[0].email);
    console.log(userData[1]);
    console.log(userData[1].username);
    console.log(userData[1].email);
    console.log(localStorage.key(0));
}else{
    console.log("No user data found");
}