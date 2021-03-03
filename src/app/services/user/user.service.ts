import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	private users = [
		{
			name: "Jack",
			age: 35,
			id: 1
		},
		{
			name: "John",
			age: 43,
			id: 2
		},
		{
			name: "Timmy",
			age: 21,
			id: 3
		},
		{
			name: "Alice",
			age: 27,
			id: 4
		},
		{
			name: "Brad",
			age: 25,
			id: 5
		}
	]

	constructor() { }


	// Get All Users
	public getAll() {
		return this.users;
	}

	// Add User
	public addUser(name: string, age: number, id: number) {
		this.users.push({ name, age, id });
	}

	// Remove User
	public remove(name: string) {
		return this.users = this.users.filter(user => user.name !== name);
	}

}
