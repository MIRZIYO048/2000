
// console.log('1');

// console.log('3');

// console.log('2');


// document.body.addEventListener('click', () => {
//     console.log('bosildi');
// })


// AJAX = asyncronys javascript and xml
// API = Application Program Interface
// HTTP = HyperText Transfer Protocol

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => console.log(response.json()));

  // let promise = new Promise (function(resolve){
  //   setTimeout(() => {
  //     resolve('bajarildi')
  //   }, 5000);
  // }).then(javob => (javob)).then(eYozuv => document.body.innerHTML = eYozuv);

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((info) => info.json())
// .then(javob => {
//   javob.forEach(object => {
   
//     let card = `
//     <div class="card" style="width: 18rem;">
//       <div class="card-body">
//         <h5 class="card-title">${object.name}</h5>
//         <h6 class="card-subtitle mb-2 text-muted">${object.username}</h6>
//         <p class="card-text">${object.address.city}</p>
//         <a href="#" class="card-link">${object.phone}</a>
//         <a href="#" class="card-link">${object.email}</a>
//       </div>
//     </div>
//     `
//     let div = document.createElement('div')
//     div.innerHTML = card
//     document.body.append(div)
//   });
// })


let form = `
<div class="form-inline d-flex flex-column mt-4">
  <div class="form-group mb-2">
  </div>
  <div class="form-group mx-sm-3 mb-2">
    <label for="inputPassword2" class="sr-only">Password</label>
    <input type="text" style="width: 300px; text-align: center;" class="form-control" id="inputPassword2" placeholder="ismni kiriting...">
  </div>
  <button type="submit" class="btn btn-primary mb-2">izlash</button>
</div>`

let div = document.createElement('div')
div.classList.add('container')
div.innerHTML = form 
document.body.append(div)

let input = document.querySelector('.form-control')
let btn = document.querySelector('.btn')
btn.addEventListener('click', () => finUser())


function finUser(){
  let info = input.value
  
  guruh(info)
}
btn.addEventListener('click', () => {
  input.value = 'https://github.com/' + input.value
  // input.value = ''
  // input.value.style.transition = '2s'
})
async function guruh(name) {
  let responce = await fetch(`https://api.github.com/users/${name}`)

  let natija = await responce.json()
  console.log(natija);
  let use = document.createElement('img' )
  use.setAttribute('src', natija.avatar_url)
  document.body.append(use)
}
guruh()

// API = aplication programm interface
// REST API  = FRONT END API + BACKEND API 




