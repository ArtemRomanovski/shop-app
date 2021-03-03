import { callbackify } from "util";

export class Card {

	name: string;
	id: number;
	price: number;
	address: {
		state: string;
		sity: string;
		street: string;
		suite: string;
	};
	img: string;
}

// export interface Card {

// 	housesList: HousesList[];
// }
// export interface HousesList {
// 	name: string;
// 	id: string;
// 	price: number;
// 	address: Address;
// 	img: string;
// }

// export interface Address {
// 	state: string;
// 	sity: string;
// 	street: string;
// 	houseNumber: string;
// }



