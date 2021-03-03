import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http/http.service';
import { Card } from 'src/app/models/card';
import { from, Observable } from 'rxjs';

@Component({
	selector: 'app-house-card',
	templateUrl: './house-card.component.html',
	styleUrls: ['./house-card.component.scss'],
	providers: [HttpService]
})
export class HouseCardComponent implements OnInit {

	houses: Card[] = [];

	constructor(
		private _httpService: HttpService
		) { }

	ngOnInit(): void {

		this.getCard()

	}

	getCard() {

		this._httpService.getData().subscribe(data => this.houses = data["housesList"]); //В данном случае мы хотим получить массив объектов houses. Но напрямую данные из home-list.json не соответствуют массиву. Массив в файле определен по ключу "housesList". Поэтому, используя данный ключ, мы достаем нужные данные из ответа сервера: this.houses = data["housesList"].

	}

























	// 	@Input() card: Card;



	// constructor(private _httpService: HttpService) {

	// }

	// ngOnInit() {
	// 	this.getCard();

	// }


	// // Get Card
	// getCard(): void {
	// 	this._httpService.getData()
	// 		.subscribe((data: Card) => this.card = data);
	// }



}
