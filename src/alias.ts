export{}

type Mojiretu = string;
const fooString: string = 'aaaaa';
const fooMojiretu: Mojiretu = 'bbbb';

const example1 = {
	name: 'taku',
	age: 18
};

type Profile ={
	name: Mojiretu;
	age: number;
};

const example2: Profile = {
	name: 'taku',
	age: 18
};

type Profile2 = typeof example1;
