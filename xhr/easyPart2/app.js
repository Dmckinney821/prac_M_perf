

// const http = new EasyHTTP;

// //GET USERS
const http = new EasyHTTP;
// http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(err => console.log(err))



//user data
const data = {
    name: 'dan',
    email: '324@gmail.com',
    username: 'doe'
}

// http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

//update

// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

http.delete('https://jsonplaceholder.typicode.com/users/2')
    .then(data => console.log(data))
    .catch(err => console.log(err))




// async function myFunc(){
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('Hey'), 2000)
//     });
//     const error = true

//     if(!error){
//         const res = await promise;
//         return res
//     } else {
//         await Promise.reject(new Error('Messed up'))
//     }
    
// }

// myFunc()
//     .then(res => console.log(res))
//     .catch(err => console.log(err))


// async function getUsers(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');

//     const data = await response.json()

//     return data
// }

// getUsers()
//     .then(users => console.log(users))