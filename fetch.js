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

        document.getElementById('demo1').innerHTML = output;
        
        })
}

document.getElementById('jsonBtn').addEventListener('click', getUsers)