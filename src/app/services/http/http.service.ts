import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Card } from '../../models/card';
import { Vendor } from '../../models/vendors';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';


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


	getInfo(id: number): Observable<Card[]> {

		return this._http.get('assets/home-list.json').pipe(map(data => {
			let housesList = data["housesList"];
			let idItem = 0;
			let obj = [];

			for (let i = 0; i < housesList.length; i++) {
				idItem = housesList[i].id

				if (idItem == id) {
					obj.push(Object.assign({}, housesList[i]));
				}
			}
			return obj.map(function (house: any) {
				return {
					name: house.name,
					id: house.id,
					price: house.price,
					address: {
						state: house.address.state,
						sity: house.address.sity,
						street: house.address.street,
						suite: house.address.suite
					},
					img: house.img
				}
			})
		}))
	}














}





