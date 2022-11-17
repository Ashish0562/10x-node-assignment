const fs = require('fs/promises');


const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	 fs.writeFile(fileName,fileContent, (err)=>{
		if (err){
			console.log(err)
		}
		else{
			console.log("write success");
		};
		
	})
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
    // fs.readFile(fileName,'utf-8',(err,data)=>{
	// if (err) {console.log(err)
	// }else{
	// 	return data;
	// }
	
//    })
    const buff_data = fs.readFile(fileName)
	return (await buff_data).toString()
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.appendFile(fileName,fileContent,(err)=>{
		if (err) {console.log(err)};
		console.log("append success");
	})
}


const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	await fs.unlink(fileName,(err)=>{
		if (err) {console.log(err)};
		console.log("delete success");
	})
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }