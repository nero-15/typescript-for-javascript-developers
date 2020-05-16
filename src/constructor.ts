export { }

class Person {
	constructor(public name: string, protected age: number) { }
}

const me = new Person('taku', 29);
console.log(me);
