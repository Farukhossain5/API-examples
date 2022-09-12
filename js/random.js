const loadData=()=>{
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => displayUser(data.results[0]));
}

const displayUser= person => {
    // console.log(person);
    const { picture, name, location, email } = person;
    const { street } = location;
    const { dob } = person;
    const userContainer = document.getElementById('user-container');
    userContainer.innerHTML = `
    <div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${picture.large}" class="w-100 rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">
          Gender:${person.gender}
           Name:${person.name.first} ${person.name.last}</h5>
          <h5 class="card-title">${person.email}</h5>
          <p class="card-text">${street.name} ${street.number} 
          age:${dob.age}</p>
        </div>
      </div>
    </div>
  </div>
    `;
    userContainer.appendChild()
    
}

loadData();