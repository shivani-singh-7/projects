Array.prototype.myFilter=function(cb)
{
    const newArray=[];
    for(let index=0;index<this.length;index++){
        if(cb(this[index],index,this)){
            newArray.push(this[index]);
        }
    }
    return newArray;
}
const arr=[1,2,3,4,5,6,7,8,9];
let result=arr.myFilter((b)=>{
    return b>5;
})
console.log(result);