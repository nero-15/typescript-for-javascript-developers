export { }



class MyNumber {
	private __owner: string;
	private __sercretNumber: number;

	constructor(owner: string, sercretNumber: number) {
		this.__owner = owner;
		this.__sercretNumber = sercretNumber;
	}

	get owner(){
		return this.__owner;
	}

	set sercretNumber(val: number){
		this.__sercretNumber = val;
	}
}

let mynumber = new MyNumber('taku', 2956378);
console.log(mynumber);

mynumber.sercretNumber = 5438754893;

console.log(mynumber);
