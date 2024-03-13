import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    showloginform:boolean=false;
    constructor(private router:Router)
    {

    }
    Dashboard() {
        this.router.navigate(['/dashboard']);
    }
    isNightTheme: boolean = false;

  toggleNightTheme(event: any) {
    this.isNightTheme = event.checked;
  }
  Help_support(){
this.router.navigate(['/Help_support']);
  }
  TrackEmployee(){

  }
  Settings(){
    this.router.navigate(['/settings']);
  }

}
