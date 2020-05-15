export{}

function bmi(height: number, weight: number): number {
	return weight / (height * height);
}

console.log(bmi(1.84, 71));

let bmi2 = function(height: number, weight: number): number {
	return weight / (height * height);
}

console.log(bmi2(1.84, 69));

let bmi3 = (height: number, weight: number): number => {
	return weight / (height * height);
}

console.log(bmi3(1.84, 70));

let bmi4 : (height: number, weight: number, printable?: boolean)  => number = (
	height: number,
	weight: number,
	printable?: boolean
): number => {
	const bmi: number =  weight / (height * height);
	if (printable) {
		console.log('bmi');
	}
	return bmi;
};

console.log(bmi4(1.83, 70, true));
