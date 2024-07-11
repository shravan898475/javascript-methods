// closure a concept in javascript : they allow to inner function to access variable from  their outer scop 

// Ex: 

function Parent()
{
    let b=1;
    function Child()
    {
        return b;
    }
    return Child;
}
const parentfun=Parent();
console.log(parentfun());