onmessage = (e)=>{

console.log(e.data)
let res = 0;
for(let i = 1; i<=1000000000; i++){

res += i ; 

}
postMessage(res);
}