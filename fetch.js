function getText(){
    // console.log(fetch('sample.txt'));
    fetch('sample.txt').then(res => {return res.text()}).then(data => document.getElementById('demo').innerHTML = data);
}
document.getElementById('txtBtn').addEventListener('click', getText)


// JSON:
function getUsers(){
    
    fetch('sample.json').then(res => {return res.json()})
    .then(data => {

        // console.log(data);
        let output = '<h2>Users</h2>';

        data.forEach(user => {
            console.log(user.id);
            output += 
            `<ul>
                <li>ID: ${user.id}</li>
                <li>Name: ${user.name}</li>
                <li>E-mail: ${user.email}</li>
            </ul>`;
        });

        document.getElementById('demo2').innerHTML = output;
        
        })
}

document.getElementById('jsonBtn').addEventListener('click', getUsers)

// API:
function getPosts(){
    
    fetch('https://jsonplaceholder.typicode.com/posts').then(res => {return res.json()})
    .then(data => {

        // console.log(data);
        let output = '<h2>Posts</h2>';

        data.forEach(posts => {
            // console.log(posts);
            output += 
            `<div>
                <h4>${posts.title}</h4>
                <h6>${posts.body}</h6>
            </div>`;
        });

        document.getElementById('demo3').innerHTML = output;
        
        })
}

document.getElementById('apiBtn').addEventListener('click', getPosts)



document.getElementById('addPosts').addEventListener('submit', addPost)
function addPost(e){
    e.preventDefault();
    let mytitle = document.getElementById('title').value;
    console.log(mytitle);
    let mybody = document.getElementById('body').value;
    console.log(mybody);
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method : 'POST',
        header:{
            'Accept' : 'application/json, text/plain, */*',
            'Content-type' : 'application/json',
        },
        body: JSON.stringify({title : mytitle , body : mybody})
    })
    .then(res => {return res.json()})
    .then(data =>   console.log(data))
}
