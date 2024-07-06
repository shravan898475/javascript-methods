//  after performing some action on  array it will return a new array 

// ex : arr=[1,2,3,4,5] multiply every elent with 2
const arr=[1,23,18,24,5]
const arr2=arr.map((val)=>
{
  return val*2;
})

console.log(arr2);

// reduce the element of n array in to single value

const arr3=arr.reduce((acc,currentval)=>
{
   return acc+currentval;
})

console.log(arr3);

// filter method : wen can use filter method for filter an array with some condition, it retun a new array 
// for an Ex : find that person from array who is eligible for voting 

const arr4=arr.filter((val)=>
{
  return val>=18;
})

console.log(arr4)

// foreach method we can use for perfoming some opration on exting array 
// its ot return new array 

const arr5=arr.forEach((val,index)=>
{
  console.log(val);
})
