
let number=[1,2,3];
let spread=[...number,4,5,6];
console.log(spread);

function restoperator(...number){
   let multiply= number.reduce((prosuct , num)=>prosuct* num , 1)
        console.log(multiply)
}
restoperator(2,4,6,8);