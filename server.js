const Person = require("./model/person");

Person.insertMany([{
    name:"rayen",
    age:20,
    favoriteFoods:["makloub","pizza","baguette"]
}]).then( insertedElement => {console.log("The Inserted Elemenmt: ",insertedElement)});


Person.create([
    {
        name:"person1",
        age:31,
        favoriteFoods:["food4","food5"]
    },
    {
        name:"person2",
        age:43,
        favoriteFoods:["food6","food7"]
    },
    {
        name:"Person 3",
        age:19,
        favoriteFoods:["food8","food9"]
    }
]).then(insertedElement => {console.log("The Inserted Elemenmt: ",insertedElement)});




Person.find().then(remainingPerson => {console.log(remainingPerson)});

Person.findOne().then(remainingPerson => {console.log(remainingPerson)});

let id = "616adc1542221ee3848777";  
Person.findById(id, function (err, docs) {console.log(docs)});

Person.findOneAndUpdate({"name":"rayen"},{$set:{age:"28"}})
.then(updatedPerson => {console.log("Updated Person: ",updatedPerson)});

Person.findByIdAndRemove(id, function (err, docs) {console.log("Removed Person :",docs)});

Person.remove({name:"rayen"})
.then(removedPersons => {console.log("Removed Person :",removedPersons)});

