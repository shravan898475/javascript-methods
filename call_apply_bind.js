// call methods : wen can create a method that is use in other onject 
// call methods accept argument

// Ex : 
const obj1={

    Fun: function(city,state)
    {
        return this.name+' '+city+' '+state;
    }
}
const obj2={
    name:"shravan",
    email:"shravan@gmail.com"
}

const data=obj1.Fun.call(obj2,'varanasi','uttarpradsh');
console.log(data)

// apply methos is the similar as call method but its accept a array 

const person={

    Fullname: function(city,state)
    {
        return this.fullname+' '+city+' '+state;
    }
}

const person2={
    fullname:"Rahul",
}

const persondata=person.Fullname.apply(person2,['varansi','bihar']);
console.log(persondata)

// bind method, an object can borrow a methods from another object  

const person3={

    Fullbind: function()
    {
        return this.fullnaam;
    }
}

const person4={
    fullnaam:"Rahul",
}

let persondata2=person3.Fullbind.bind(person4);
console.log(persondata2());