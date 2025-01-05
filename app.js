//Q1
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  
    // Method to get car details
    this.getDetails = function () {
      return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`;
    };
  }
  
  // Create three instances of the Car object
  const car1 = new Car("Toyota", "Corolla", 2022);
  const car2 = new Car("Honda", "Civic", 2020);
  const car3 = new Car("Ford", "Mustang", 2021);
  
  // Store the instances in an array
  const cars = [car1, car2, car3];
  
  // Loop through the array and print the details of each car
  cars.forEach(car => {
    console.log(car.getDetails());
  });




//Q2
// const persons = {
//     person1: { firstName: "John", lastName: "Doe", age: 25 },
//     person2: { firstName: "Alex", lastName: "Smith", age: 30 },
//     person3: { firstName: "Alice", lastName: "Brown", age: 22 },
//     person4: { firstName: "Thor", lastName: "Odinson", age: 1500 },
//     person5: { firstName: "Soso", lastName: "Nasser", age: 20 }
//   };
  
//   // Function to return all first names
//   function firstName(personsObj) {
//     return Object.values(personsObj).map(person => person.firstName);
//   }
  

//   console.log(firstName(persons));
  



//Q3
function objectToArray(obj) {
    return Object.entries(obj).flat();
  }
const persons = {
    person1: { firstName: "John", lastName: "Doe", age: 25 },
    person2: { firstName: "Alex", lastName: "Smith", age: 30 },
    person3: { firstName: "Alice", lastName: "Brown", age: 22 },
    person4: { firstName: "Thor", lastName: "Odinson", age: 1500 },
    person5: { firstName: "Soso", lastName: "Nasser", age: 20 }
  };
  const exampleObj = { firstName: "Moh", age: 24 };
  console.log(objectToArray(exampleObj)); 
  