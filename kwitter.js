function addUser() 
{
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name" , user_name);
    
    window.location = "kwitter_room.html";
}
let settings = {
    spotlightRadius: 400,
    boxCount: 50,
    moveSpeed: 1,
    turboSpeed: 5,
  }
  
