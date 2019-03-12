import { Injectable } from '@angular/core';
import { USERS } from './users/mock-users';
import { User } from './users/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): User[] {
    return USERS;
  }
}
