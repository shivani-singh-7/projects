const display=(err,data)=>{    
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
}
const sendRequest=(method,url,cb)=>{
        const xhr=new XMLHttpRequest();
        xhr.open(method,url);
        xhr.responseType='json';
        xhr.onload=()=>{const data=xhr.response
       if(data!=null){
            
            cb(null,data);
        }
        else{
            cb(new Error(`${xhr.status}`))
        }}
        xhr.send();
    
}

sendRequest('GET','http://localhost:3000/pvr',display);

