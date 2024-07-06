// a callback function pass in to another function that will execute  whenever that action completes

// Ex :

function First(val,callback)
{
    console.log(val)
    callback();
}

function Second()
{
    console.log('Hello');
}

First(1,Second);