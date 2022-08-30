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

function createPost(post, callback ){

    setTimeout(() => {

        // Push added a new item in the end if an array.
        posts.push(post); 

        // getPosts() will be called
        callback();

    }, 3000);
}

// Here getPosts is callback func and now the post 3 will be created first and then it will be dispalyed by 
// using getPosts
createPost({title : 'Post 3', body : 'This is the body of post 3'}, getPosts)