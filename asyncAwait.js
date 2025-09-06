const sampleData=async ()=>{
    try{
    let response= await fetch("https://ww.google.com")
    console.log(response)
}catch (err){
    console.log("Error accessing google:"+err)
}
}

sampleData()