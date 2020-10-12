

// // // const http = new easyHTTP;

// // // //GET Posts

// // // // http.get('https://jsonplaceholder.typicode.com/posts',

// // // // function(err, posts){
// // // //     if(err){
// // // //         console.log(err)
// // // //     } else {
// // // //     console.log(posts)
// // // //     }
// // // // })
// // // //get single post
// // // // http.get('https://jsonplaceholder.typicode.com/posts/1',

// // // // function(err, post){
// // // //     if(err){
// // // //         console.log(err)
// // // //     } else {
// // // //     console.log(post)
// // // //     }
// // // // })

// // // //create data
// // // const data = {
// // //     title: 'Custom Post', 
// // //     body: 'Ipsum Lorem'
// // // };

// // // //create post
// // // // http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
// // // //     if(err){
// // // //         console.log(err)
// // // //     } else {
// // // //         console.log(post)
// // // //     }
// // // // })

// // // //put post
// // // // http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post){
// // // //     if(err){
// // // //         console.log(err)
// // // //     } else {
// // // //         console.log(post)
// // // //     }
// // // // })

// // // http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response){
// // //     if(err){
// // //         console.log(err)
// // //     } else {
// // //         console.log(response)
// // //     }
// // // })

// // const posts = [
// //     {title: 'Post One', body: 'This is post one'},
// //     {title: 'Post Two', body: 'This is post two'}
// // ]

// // function createPost(post){
// //     return new Promise(function(resolve, reject){
// //         setTimeout(function() {
// //             posts.push(post);
// //             const error = true;
// //             if(!error){
// //                 resolve();
// //             } else {
// //                 reject('something went wrong')
// //             }
            
// //         },2000)
// //     })
// // }

// // function getPosts(){
// //     setTimeout(function(){
// //         let output = '';
// //         posts.forEach(function(post){
// //             output += `<li>${post.title}</li>`;
// //         });
// //         document.body.innerHTML = output;
// //     }, 1000)
// // }

// // createPost({title: 'Post Three', body: 'this is the post three'}).then(getPosts).catch(function(err){
// //     console.log(err)
// // })

// document.getElementById('button1').addEventListener('click', getText)
// document.getElementById('button2').addEventListener('click', getJSON)
// document.getElementById('button3').addEventListener('click', getExternal)

// function getText(){
//     fetch('text.txt').then(function(res){
//         return res.text()
//     })
//     .then(function(data){
//         console.log(data)
//         document.getElementById('output').innerHTML = data;
//     })
//     .catch(function(err){
//         console.log(err)
//     })
// }


// function getJSON(){
//     fetch('posts.json').then(function(res){
//         return res.json()
//     })
//     .then(function(data){
//         console.log(data)
//         let output = '';
//         data.forEach(function(post){
//             output += `<li>${post.title}</li>`
//         })
//         document.getElementById('output').innerHTML = output
//     })
//     .catch(function(err){
//         console.log(err)
//     })
// }

// function getExternal(){
//     fetch('https://api.github.com/users').then(function(res){
//         return res.json()
//     })
//     .then(function(data){
//         console.log(data)
//         let output = '';
//         data.forEach(function(user){
//             output += `<li>${user.login}</li>`
//         })
//         document.getElementById('output').innerHTML = output
//     })
//     .catch(function(err){
//         console.log(err)
//     })
// }

// const sayHello = function() {
//     console.log('hello')
// }

// const sayHello = () => console.log('hello')
// const sayHello = () => ({msg: 'hello'})
// const sayHello = (name, last) => console.log(`Hello ${name} ${last}`)

// // console.log(sayHello())
// sayHello('Dan', 'Mickey')

const users = ['Nate', 'Stone', 'Sara']
const nameLengths = users.map(x => x.length)
console.log(nameLengths)