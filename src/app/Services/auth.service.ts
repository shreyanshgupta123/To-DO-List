import { Injectable } from '@angular/core';

// Define a type for your user objects
interface User {
  userName: string;
  password: string;
  // Add more properties if needed
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // AuthUser(user: User) {
  //   let UserArray: User[] = [];
  //   const storedUsers = localStorage.getItem('Users');
  //   if (storedUsers !== null) {
  //     UserArray = JSON.parse(storedUsers);
  //     return UserArray.find((p: User) => p.userName === user.userName && p.password === user.password);
  //   }
  // }
}

