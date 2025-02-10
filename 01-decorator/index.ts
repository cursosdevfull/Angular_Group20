function Logger(target: Function) {
  console.log("Logging...");
  console.log(target);
}

@Logger
class Person {
  name = "Jasom";

  constructor() {
    console.log("Creating a person object called");
  }
}

const person = new Person();
