import myJson from './emp.json' assert {type: 'json'};

console.log(myJson.person);

console.log(myJson.person.name); // 👉️ "Alice"
console.log(myJson.person.country); // 👉️ "Austria"