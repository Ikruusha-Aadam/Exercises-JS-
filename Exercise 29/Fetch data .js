
async function fetchdata(){
    console.log("fetching data from JSON File");

    let response = await fetch('index .json');

    let data = await response.json();

    console.log(data);
}
fetchdata();

let student=[{
    id:6666,
    name:"ikraam"
},
{
    id:6666,
    name:"ikraam"
}]
console.log(student[0].name)