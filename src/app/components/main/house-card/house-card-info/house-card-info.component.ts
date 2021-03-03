import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { HttpService } from 'src/app/services/http/http.service';
import { Card } from 'src/app/models/card';
import { Vendor } from 'src/app/models/vendors';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { VendorService } from "../../../../services/vendor/vendor.service";



@Component({
	selector: 'app-house-card-info',
	templateUrl: './house-card-info.component.html',
	styleUrls: ['./house-card-info.component.scss'],
	providers: [HttpService]
})
export class HouseCardInfoComponent implements OnInit {

	maxVendors: number = 10;


	houses: Card[] = [];
	vendors: Vendor[] = [];

	constructor(
		private _httpService: HttpService,
		// содержит инорфмацию о маршруте к этому экземпляру CardDetailComponent.Этому компоненту интересен список параметров маршрута, выделенных из URL. Параметр "id" - id отображаемой карточки
		private route: ActivatedRoute,

		// это сервис фреймворка Angular для взаимодействия с браузером
		private location: Location,

		private _vendorService: VendorService

	) { }

	ngOnInit(): void {

		this.getInfo();
		this.getVendor();

	}


	getInfo(): void {

		const id = +this.route.snapshot.paramMap.get('id');
		// Параметры маршрута - это всегда строки. Оператор JavaScript (+) преобразует строку в число, чем и является id
		// route.snapshot - это статическое отображение информации о маршруте после того, как компонент был создан.
		// paramMap - это словарь значений параметров маршрута, выделенных из URL. Ключ "id" возвращает id нужной карты

		this._httpService.getInfo(id).subscribe(data => this.houses = data);
	}

	// Метод перенаправит на один шаг назад в истории браузера с помощью сервиса Location
	// goBack(): void {
	// 	this.location.back();
	// }

	getVendor(): void {

		let id = this.randomIntenger(1, 10)

		this._vendorService.getVendors(id).subscribe(data => this.vendors = data)

			;
	}

	randomIntenger(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}



	// randomVendor(): number {
	// 	this.randomId = Math.floor(Math.random() * (10 + 1))
	// 	console.log(this.randomId)
	// 	return this.randomId;
	// }


}
