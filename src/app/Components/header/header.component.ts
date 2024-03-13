import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../../../UserInfo/user-info.Employees';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {
  showLoginForm: boolean = true;
Login:string='';
pass:string='';
UserInfo:UserInfo={
LoginID:'shreyansh@gmail.com',
Password:'123'
}
words = ['Organize,', 'Prioritize,', 'Achieve!'];
constructor(private router:Router,private auth:AuthService){}
ngOnInit(): void {}


validation() {
  console.log('Login:', this.Login);
  console.log('Pass:', this.pass);
  console.log('UserInfo:', this.UserInfo);

  if (this.UserInfo.LoginID == this.Login && this.UserInfo.Password == this.pass) {
    console.log('Login successful');
    this.showLoginForm = false;
    console.log('Navigating to dashboard...');
    this.router.navigate(['/dashboard']);
  } else {
    console.log('Wrong userid or password');
  }
}


}
