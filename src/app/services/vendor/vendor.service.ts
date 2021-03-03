import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { map } from 'rxjs/operators';


import { Vendor } from 'src/app/models/vendors';


@Injectable({
	providedIn: 'root'
})
export class VendorService {


	vendorUrl: string = "https://jsonplaceholder.typicode.com/users"

	constructor(private _http: HttpClient) { }

	getVendors(id: number): Observable<any> {

		console.log(id)

		return this._http.get(this.vendorUrl).pipe(map(data => {
			let vendorList = data;
			let idItem = 0;
			let vendor = [];

			for (let i = 0; i < 10; i++) {
				idItem = vendorList[i].id

				if (idItem == id) {
					vendor.push(Object.assign({}, vendorList[i]));
					console.log(vendor)
				}
			}
			return vendor.map(function (vendor: any) {
				return {
					name: vendor.name,
					email: vendor.email,
					phone: vendor.phone

				}
			})
		}))
	}



}
