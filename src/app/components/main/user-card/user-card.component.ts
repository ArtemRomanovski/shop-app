import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';


@Component({
	selector: 'app-user-card',
	templateUrl: './user-card.component.html',
	styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

	@Input() users;





	constructor(private _userService: UserService) {
	}

	ngOnInit(): void {
		this.users = this._userService.getAll()
	}


	// метод удаления 
	removeUser(name: string) {

		this._userService.remove(name);
		// Обновление пользователей так как список уже новый
		this.users = this._userService.getAll();
	}


}
