export{}

type Pitcher1 = {
	throwingSpeed: number;
};

type Batter1 = {
	battingAverage: number;
};

const Daimazin: Pitcher1 = {
	throwingSpeed: 154
}

const Ochiai: Batter1 = {
	//throwingSpeed: 154,
	battingAverage: 0.367
}

/*
type TwoWayPlayer = {
	throwingSpeed: number;
	battingAverage: number;
};
*/


type TwoWayPlayer = Pitcher1 & Batter1;

const Otani : TwoWayPlayer = {
	throwingSpeed: 165,
	battingAverage: 0.22
}
