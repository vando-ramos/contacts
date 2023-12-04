let result = document.getElementById('result');

async function printData(){

  let res = await fetch('https://randomuser.me/api/?results=5');

  let {results} = await res.json();  

  results.forEach(contact => {

    let li = document.createElement('li');

    li.innerHTML = `<div>                      
                      <h2>${contact.name.first}</h2>
                      <img src="${contact.picture.large}" alt="Lorem Picsum">
                      <p>${contact.email}</p>
                      <p>${contact.location.city} - ${contact.location.state}</p>
                      <button>${contact.location.country}</button>
                    </div>`;

    result.appendChild(li);
  });

  console.log(results)  
}