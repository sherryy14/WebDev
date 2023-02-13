// import {name, email} from "./m1.js"
// console.log(name)
// console.log(email)


// let x = 15 * 5;
// document.getElementById("demo").innerHTML = x;
// var i
// for( i = 0 ; i<5; i++){
//     console.log(i)
// }

let arr = [
    {
        title: "Kitkat Cake",
        desc : "Kitkat Cake description",
        price: 599,
        
    },
    {
        title: "Dairy Milk Cake",
        desc : "Kitkat Cake description",
        price: 432,

    },
    {
        title: "Kitkat Cake 2",
        desc : "Kitkat Cake description",
        price: 599,

    },
    {
        title: "Dairy Milk Cake 2",
        desc : "Kitkat Cake description",
        price: 599,

    }
]

for(let i = 0; i < arr.length ; i++){
   let demo =  document.getElementsByClassName('demo')[i];
   demo.innerHTML = `${arr[i].title}`
}