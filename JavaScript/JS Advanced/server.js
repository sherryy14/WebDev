const http = require('http');
const fs = require('fs');
// const { errorMonitor } = require('stream');
const app = http.createServer((req, res) => {

    // console.log(fs)
    if(req.url == '/index' ){
        fs.readFile('./arrow_function.html', (err, data) => {
        res.writeHead(200 , {'Content-Type': 'text/html'})
        
        res.write(data) 
        // res.write(err) 
        res.end()
    })
}else{
res.write("Hello, This is Server ABC")
res.end()
    // console.log(req.url)
}
});

app.listen(1100, () => {
    console.log("Server Started")
})