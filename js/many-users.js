const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => displayUsers(data.results));
}


const displayUsers = users => {
    const userContainer = document.getElementById('users-container');
    for (const user of users) {
        const userDiv = document.createElement('div');
        userDiv.classList.add('users');
        console.log(user);
        userDiv.innerHTML = `
        <p>user name: ${user.name.title} ${user.name.first} ${user.name.last}</p>
        <p>user info: ${user.gender}
         ${user.phone}</p>
        <p>user email: ${user.email}</p>
        <p>location: ${user.location.city} ${user.location.country}</p>
        `;
        userContainer.appendChild(userDiv);
    }
}



loadUsers();