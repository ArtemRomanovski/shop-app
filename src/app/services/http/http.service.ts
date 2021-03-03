import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Card } from '../../models/card';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

// const httpOptions = {
// 	headers: new HttpHeaders({
// 		"Content-Type": "application/json"
// 	})
// }


@Injectable({
	providedIn: 'root'
})
export class HttpService {

	constructor(private _http: HttpClient) {

	}


	ngOnInit() {

	}


	getData() {
		return this._http.get('assets/home-list.json');
	}



	// getInfo(id: number): Observable<Card[]> {

	// 	return this._http.get('assets/home-list.json').pipe(map(data => {
	// 		let housesList = data["housesList"];
	// 		return housesList.map(function (house: any) {
	// 			return {
	// 				name: house.name, id: house.id, price: house.price, address: {
	// 					state: house.state,
	// 					sity: house.sity,
	// 					street: house.street,
	// 					houseNumber: house.houseNumber
	// 				}, img: house.img
	// 			}
	// 		})
	// 	}))

	// }

	getInfo(id: number): Observable<Card[]> {

		return this._http.get('assets/home-list.json').pipe(map(data => {
			let housesList = data["housesList"];
			let idItem = 0;
			let obj = [];

			for (let i = 0; i < housesList.length; i++) {
				idItem = housesList[i].id

				if (idItem == id) {
					obj.push(Object.assign({}, housesList[i]));
					console.log(obj);
				}
			}
			return obj.map(function (house: any) {
				return {
					name: house.name,
					id: house.id,
					price: house.price,
					address: {
						state: house.state,
						sity: house.sity,
						street: house.street,
						houseNumber: house.houseNumber
					},
					img: house.img
				}
			})
		}))
	}

}





