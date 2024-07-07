
// with shallow  copy we can refrence of an object , means wen can copy memory loation address 
// we can change something in copyed object changes will reflect on original object

const person={
    name:"shravan",

    person2:{
      email:"shravan@gmail.com",
    }
}

let personcopy=person;

personcopy.name="Rahul";

console.log(person.name)

let personcopynew=person.person2;

personcopy.email="Rahul@gmail.com";

console.log(person.email)

// deep copy : deep copy means we can copy full object so we can change somthing in copy object changes will not reflect in original object

const person3={
    fullname:"suraj",
    person4:{
        newemail:"suraj@gmail.com",
    }
}

console.log("person3"+person3)

let deepcopyobj=JSON.parse(JSON.stringify(person3));

deepcopyobj.person4.newemail="surajnew@gmail.com";
deepcopyobj.fullname="surajnew";

console.log("deepcopyobj.fullname "+deepcopyobj.fullname)


