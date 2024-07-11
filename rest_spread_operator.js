// rest operator : rest operator is javascript es6 feature, in rest operator we can receive argument and combine it

// Ex:

function Rest(val,val2,...restval)
{
    console.log('val1 : '+val+' val2 : '+val2);
    console.log(restval);
}


Rest('shravan','Singh','Varansi','Uttarpardesh');

// Spread Operator : spread operator introduce in javascript es6 feature, in spread operator we can receive combine and spread this
// also we can use this for combine array and add some value in array etc

// Ex:\

function Spread(val11,...Spreadval)
{
   console.log('val 11 : '+val11);
   console.log('Spreadval : '+Spreadval)
}

const spreadarray=['varansi','uttar pradesh'];
Spread('shravan',spreadarray);

// Ex: combine array

const arr1=[1,2,3];
const arr2=[4,5,6];

const arr3=[...arr1,...arr2];
console.log(arr3);

// ex: add new element in array 

const arr4=[...arr1,...arr2,7,8];
console.log(arr4);

