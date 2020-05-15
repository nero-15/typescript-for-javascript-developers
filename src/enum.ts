export{}

enum Months {
	January = 1,
	February,
	March,
	April,
	May,
	June,
	July,
	August
};
console.log(Months.January);
console.log(Months.July);

const MonthJs = {
	January: 0,
	February: 1,
	March: 2,
}

console.log(MonthJs.January);
console.log(MonthJs.February);

enum COLORS {
	RED = '#FF0000',
	WHITE = '#FFFFFF',
	BLUE = '#0000FF',
}

let blue = COLORS.BLUE;
console.log(blue);

enum COLORS {
	YELLOW = '#FFFF00',
}

COLORS.YELLOW;
