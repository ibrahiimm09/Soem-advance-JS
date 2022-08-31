function getText(){
    // console.log(fetch('sample.txt'));
    fetch('sample.txt').then(res => {return res.text()}).then(data => document.getElementById('demo').innerHTML = data);
}
document.getElementById('txtBtn').addEventListener('click', getText)