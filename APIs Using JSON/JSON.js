
import  myJson  from "./emp.json" assert {type: 'json'};

document.getElementById('box').innerText = `Name: ${myJson.person.name} 
 Field: ${myJson.person.tasks[0]}`

console.log(myJson.person);

console.log(myJson.person.name); // 👉️ "Alice"
console.log(myJson.person.country); // 👉️ "Australia"