function Component(opt: { selector: string }) {
  return (target: new (...args: any[]) => any) => {
    const obj = new target();
    const personName = obj.name;

    const div = document.querySelector(opt.selector)!;
    div.innerHTML = personName;
  };
}

@Component({
  selector: "#app",
})
class Person {
  name = "Jasom";

  constructor() {
    console.log("Creating a person object called");
  }
}

const person = new Person();
