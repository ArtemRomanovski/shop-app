import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

	public isShown = true;

	constructor() { }

	ngOnInit(): void {
	}



}
