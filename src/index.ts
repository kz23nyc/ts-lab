//@ts-check

class Vehicle {
    public status: 'stopped' | 'started' = 'stopped'; // For "status," use a union of literals to declare valid status options:"started" or "stopped"
    public make;
    public model;
    public wheels;
    

    //Add appropriate types for all current Vehicle properties and method parameters.
    constructor(make: string, model: string, wheels: number) {
      this.make = make;
      this.model = model;
      this.wheels = wheels;
    }
    start() {
      this.status = "started";
    }
    stop() {
      this.status = "stopped";
    }
  }
  
  class Car extends Vehicle {
    //Adjust the Car classes
    constructor(make: string, model: string) {
      super(make, model, 4);
    }
  }
  
  class MotorCycle extends Vehicle {
     //Adjust MotorCycle classes
    constructor(make: string, model: string) {
      super(make, model, 2);
    }
  }
  
  // Change the printStatus function to accept a parameter of type Vehicle and fix errors
  function printStatus(vehicle: Vehicle) {
    if (vehicle.status === "started") {
      console.log("The vehicle is running.");
    } else {
      console.log("The vehicle is stopped.");
    }
  }
  
  const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
  myHarley.start();
  printStatus(myHarley);
  console.log(myHarley.make.toUpperCase());
  
  const myBuick = new Car("Buick", "Regal");
  myBuick.wheels = myBuick.wheels - 1;
  console.log(myBuick.wheels);
  console.log(myBuick.model);
  


//****************** Part3 Part 3: Creating a Generic Class: NCycle *********************/

//Create a new class following the existing code, called NCycle.
// Copy the existing Vehicle class definition as a starting point for NCycle.
// Modify NCycle to accept a generic type.
//generic type<T>

class NCycle<T> {
  public status: 'stopped' | 'started' = 'stopped'; 
  public make;
  public model;
  public wheels;  

  // make and model to have either the generic type or an array of the generic type. Adjust the constructor parameters accordingly.

  constructor(make: T | T[], model: T | T[], wheels: number) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }
  start() {
    this.status = "started";
  }
  stop() {
    this.status = "stopped";
  }

  //Create a new method print, which returns nothing and has a single number parameter (either optional or defaulted to 0).
  print(index: number = 0): void {
    // if this.make and this.model are both arrays
    if (Array.isArray(this.make) && Array.isArray(this.model)) {
      // if parameter index exist in this.make and this.model
      if (this.make[index] && this.model[index]) {
        console.log(`This NCycle has a ${this.make[index]} ${this.model[index]} at ${index}`);
      }
    } else {
      console.log(`This is a ${this.make} ${this.model} NCycle`);
      // if (typeof this.make === 'string' && typeof this.model === 'string') {
      //   console.log(`This is a ${this.make} ${this.model} NCycle`);
      // } else {
      //   console.log(`This is a ${this.make} ${this.model} are not strings!`);
      // }
    }
  }

  printAll(): void {
    if (Array.isArray(this.make) && Array.isArray(this.model)) {
      // if parameter index exist in this,ake and this.model
      
      for (let i = 0; i < Math.min(this.make.length, this.model.length); i ++){
        console.log(`This NCycle has a ${this.make[i]} ${this.model[i]}`);
      }
    }
  }

}

// const testCycle1 = new NCycle<number>(1, 2, 3);
// testCycle1.print();

// const testCycle2 = new NCycle<string>("Ford", "F150", 4);
// testCycle2.print();

// const testCycle3 = new NCycle<string>("Tesla", "Mode Y", 4);
// testCycle3.print(4);

const makes4 = ["Volkswagon", "Tesla", "Audi"];
const models4 = ["Passat", "Model X", "A4"];

const testCycle4 = new NCycle<string[]>(makes4, models4, 4);

testCycle4.print(2);
testCycle4.printAll();
