const updateUsername = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#usernameUpdate').value.trim();

    const updatedUser = await {
        username: username
    }

    console.log(JSON.stringify({updatedUser}));
  
    if (username) {
        const response = await fetch(`/api/users/${event.target.dataset.userid}`, {
        method: "PUT",
        body: JSON.stringify( updatedUser ),
        headers: { "Content-Type": "application/json" },
      });
      console.log(response);
  
      if (response.ok) {
        console.log("Username has been updated.")
        alert('Succesfully updated!')
      } else {
        alert(response.statusText);
      }
    }
  };
  
const updatePassword = async(event)=>{
    event.preventDefault();
  
    const password = document.querySelector('#passwordUpdate').value.trim();

    const updatedUser = await {
        password: password
    }
  
    if (password) {
        const response = await fetch(`/api/users/${event.target.dataset.userid}`, {
        method: "PUT",
        body: JSON.stringify( updatedUser),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        console.log("Password has been updated.")
        alert('Succesfully updated!')
      } else {
        alert(response.statusText);
      }
    }
}

const updateEmail = async(event)=>{
    event.preventDefault();
  
    const email = document.querySelector('#emailUpdate').value.trim();

    const updatedUser = await {
        email: email
    }
  
    if (email) {
        const response = await fetch(`/api/users/${event.target.dataset.userid}`, {
        method: "PUT",
        body: JSON.stringify( updatedUser ),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        console.log("Email has been updated.")
        alert('Succesfully updated!')
      } else {
        alert(response.statusText);
      }
    }
}

const deleteAccount = async(event)=>{
    event.preventDefault();


    var choice = window.confirm("Are you sure to remove your account?");

    if(!choice){
        return;
    } else {
        const response = await fetch(`/api/users/${event.target.dataset.userid}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        });

        if(response.ok){
            console.log("Successfully deleted!")
            document.location.replace('/');
            alert('Succesfully deleted!')
        } else {
            alert('Failed to delete');
        }
    }
}


document
    .getElementById("usernameBtn")
    .addEventListener("click", updateUsername);

document
    .querySelector("#emailBtn")
    .addEventListener("click", updateEmail);

document
    .querySelector("#passwordBtn")
    .addEventListener("click", updatePassword);

document
    .querySelector('#deleteUser')
    .addEventListener("click", deleteAccount);