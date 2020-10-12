

// // // // document.getElementById('button').addEventListener('click', loadData)

// // // // function loadData(){
// // // //     //create an xhr object
// // // //     const xhr = new XMLHttpRequest();

// // // //     //OPEN
// // // //     xhr.open('GET', 'data.txt', true);

// // // //     console.log('READYSTATE', xhr.readyState)

// // // //     xhr.onprogress = function(){
// // // //         console.log('READYSTATE', xhr.readyState)
// // // //     }

// // // //     xhr.onload = function(){
// // // //         console.log('READYSTATE', xhr.readyState)
// // // //         if(this.status === 200){
// // // //             console.log(this.responseText)
// // // //             document.getElementById('output').innerHTML = `<h1>${this.responseText}</hr>`
// // // //         }
// // // //     }

// // // //     // xhr.onreadystatechange = function(){
// // // //     //     console.log('READYSTATE', xhr.readyState)

// // // //     //     if(this.status === 200 && this.readyState === 4){
// // // //     //         console.log(this.responseText)
// // // //     //     }
// // // //     // }   

// // // //     xhr.onerror = function(){
// // // //         console.log('request error')
// // // //     }

// // // //     xhr.send();

// // // // }

// // // document.getElementById('button1').addEventListener('click', loadCustomer)
// // // document.getElementById('button2').addEventListener('click', loadCustomers)

// // // function loadCustomer(e){
// // //     const xhr = new XMLHttpRequest();

// // //     xhr.open('GET', 'customer.json', true)

// // //     xhr.onload = function(){
// // //         if(this.status === 200){
// // //             // console.log(this.responseText)
// // //             const customer = JSON.parse(this.responseText)

// // //             const output = `
// // //                 <ul>    
// // //                     <li>ID: ${customer.id}</li>
// // //                     <li>Name: ${customer.name}</li>
// // //                     <li>Company: ${customer.company}</li>
// // //                     <li>Phone: ${customer.phone}</li>
// // //                 </ul>
// // //             `;

// // //             document.getElementById('customer').innerHTML = output
// // //         }
// // //     }

// // //     xhr.send()
// // //     e.preventDefault();
// // // }

// // // function loadCustomers(e){
// // //     const xhr = new XMLHttpRequest();

// // //     xhr.open('GET', 'customers.json', true)

// // //     xhr.onload = function(){
// // //         if(this.status === 200){
// // //             // console.log(this.responseText)
// // //             const customers = JSON.parse(this.responseText)

// // //             let output = '';

// // //             customers.forEach(function(customer){
// // //                 output += `
// // //                     <ul>    
// // //                         <li>ID: ${customer.id}</li>
// // //                         <li>Name: ${customer.name}</li>
// // //                         <li>Company: ${customer.company}</li>
// // //                         <li>Phone: ${customer.phone}</li>
// // //                     </ul>
// // //                 `;
// // //             })
            

// // //             document.getElementById('customers').innerHTML = output
// // //         }
// // //     }

// // //     xhr.send()
// // //     e.preventDefault();
// // // }

// // document.querySelector('.get-jokes').addEventListener('click', getJokes)


// // function getJokes(e){
// //     const number = document.querySelector('input[type="number"]').value
// //     console.log(number)
// //     console.log("jokes")
// //     const xhr = new XMLHttpRequest();

// //     xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true)

// //     xhr.onload = function(){
// //         if(this.status === 200){
// //             const response = JSON.parse(this.responseText);
// //             let output = '';
// //             if(response.type === 'success'){
// //                 response.value.forEach(function(joke) {
// //                     output += `<li>${joke.joke}</li>`
// //                 })
// //             } else {
// //                 output += '<li>Something gon wrong</li>'
// //             }
// //             document.querySelector('.jokes').innerHTML = output
// //             // console.log(response)
// //         }
// //     }

// //     xhr.send()
// //     e.preventDefault();
// // }

// const posts = [
//     {title: 'Post One', body: 'This is the first one'},
//     {title: 'Post Two', body: 'This is the second one'}
// ]

// // function createPosts(post){
// //     setTimeout(function(){
// //         posts.push(post)
// //     }, 2000)
// // }

// // function getPosts(){
// //     setTimeout(function(){
// //         let output = '';
// //         posts.forEach(function(post){
// //             output += `<li>${post.title}</li>`
// //         })
// //         document.body.innerHTML = output;
// //     },1000)
// // }


// // createPosts({title: 'Post Three', body: 'This is the thirs one'});
 
// function createPosts(post, callback){
//     setTimeout(function(){
//         posts.push(post);
//         callback();
//     }, 2000)
// }

// function getPosts(){
//     setTimeout(function(){
//         let output = '';
//         posts.forEach(function(post){
//             output += `<li>${post.title}</li>`
//         })
//         document.body.innerHTML = output;
//     },1000)
// }

// createPosts({title: 'Post Three', body: 'This is the thirs one'}, getPosts);




