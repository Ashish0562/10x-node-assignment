const http=require('http');
const fs= require('fs');

fs.writeFile('index.html',`<h1>Hello World</h1> 
<p>This is Ashish...</p>`,(err)=>{
    if (err) {
        console.log(err);
    }
})
const server=http.createServer((req,res)=>{
  
    fs.readFile('./index.html',null, (err,data)=>{
       if (err) {
        console.log(err);
       }else{
        res.write(data)
       }
       res.end()
       
    })
   
})

server.listen(5000)