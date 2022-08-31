let posts = [
    {title : 'Post 1', body : 'This is the body of post 1'},
    {title : 'Post 2', body : 'This is the body of post 2'},
]

function getPosts(){

    setTimeout(() => {

        let output = '';
        posts.forEach((element)=>{
            output += `<li>${element.title}</li>`;
        })
        document.body.innerHTML = output;

    }, 2000);
    
}

function createPost(post){

    return new Promise((resolve, reject)=>{
        
        setTimeout(() => {
            
            posts.push(post); 
            let error = false;
            if (error) {
                resolve();
            }
            else{
                reject('Error: Something went wrong');
            }
        }, 3000);

    })
}

// createPost({title : 'Post-3', body : 'This is a body of post-3'})
// .then(getPosts).catch(err =>{
//     console.log(err);

// .then- if the promise gets resolved.
// .catch- if the promise gets rejected.

// });

// async function init() {
//     await createPost({title : 'Post-3', body : 'This is a body of post-3'});
//     getPosts();
// }
// init();

// ASYNC- makes the function return a promise
// async example with fetch:
async function fetchUsers(){

    // Await- makes the function wait for a promise.
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    const parsed = await response.json();
    return parsed;
}

fetchUsers().then(res => console.log(res))
// fetchUsers();

const Promise1 = Promise.resolve('Hello baby');
const Promise2 = 10;
const Promise3 = new Promise((resolve , reject)=>{
    setTimeout(resolve, 2000, 'Goodbye');
});

// If promise gets resolve then parsed the data into JSON.
// 'res' stores the value return by .then on fulfilment of promise.
const Promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

// Here 'values' stores the values returned by .then on fulfilment of promise.
Promise.all([Promise1 , Promise2 , Promise3, Promise4]).then(values => console.log(values))

// The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises. This returned promise will fulfill when all of the input's promises have fulfilled, or if the input iterable contains no promises. It rejects immediately upon any of the input promises rejecting or non-promises throwing an error, and will reject with this first rejection message / error.


async function myDisplay() {
    let myPromise = await new Promise(function(resolve) {
      setTimeout(function() {resolve("I love You !!");}, 3000);
    });
    console.log(myPromise);
    console.log('Hello, I waited for you');
  }
myDisplay();