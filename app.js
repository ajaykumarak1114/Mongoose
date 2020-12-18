const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mongooseFruitDB", { useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema ({
  name : {
    type : String,
    required : [true, "Please check your data entry, no name specified!"]
  },
  rating : {
    type : Number,
    min : 1,
    max : 10
  },
  review : String

});

const Fruit = mongoose.model("Fruit", fruitSchema);

const mango = new Fruit({
  name : "mango",
  rating : 9,
  review : "Great fruit"
});

//mango.save();
//fruit.save();

const personSchema = new mongoose.Schema ({
  name : String,
  age : Number,
  favouriteFruit : fruitSchema
});

const Person = mongoose.model("Person", personSchema);

// const person = new Person({
//   name : "amy",
//   age : 15,
//   favouriteFruit : pineapple
// })
//person.save();

const kiwi = new Fruit({
  name : "kiwi",
  rating : 6,
  review:"taste good"
}) ;

const orange = new Fruit({
  name : "orange",
  rating : 6,
  review: "taste sour"
});

const banana = new Fruit({
  name : "banana",
  rating : 6,
  review: "taste bitter"
});

// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if(err){
//     console.log(err);
//   } else{
//     console.log("Successfully saved all of the fruits to fruitdb");
//   }
// })


Fruit.find(function(err, fruits){
  if(err){
    console.log(err);
  } else{
  //  console.log(fruits);
    fruits.forEach(function(fruit){
      console.log(fruit.name);
      mongoose.connection.close();
    })

  }
})


//Update data
// Fruit.updateOne({_id: "5fdc8952f32a7c46e0978d42"}, {review : "best peaches"}, function(err){
//   if(err){
//     console.log(err);
//
//   } else{
//     console.log("Successfully updated the document");
//   }
// })

// Delete data

//  Fruit.deleteOne({ _id: '5fdc8952f32a7c46e0978d42' }, function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Successfully deleted the data");
//   }
// });

// Delete many

// Person.deleteMany({name : "Ajay"}, function(err){
//   if(err){
//     console.log(err);
//   } else{
//     console.log("Successfully deleted all the persons");
//   }
// })

// Update Person data

Person.updateOne({name : "Ajay"}, {favouriteFruit: orange}, function(err){
  if(err){
    console.log(err);
  } else{
    console.log("Successfully embedded person with fruit");
  }
} )
