import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver} from '@angular/cdk/layout'
import { MatSidenav } from '@angular/material/sidenav';
import { pluck } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-material-simple-admin-reference';

  public isSmallScreen = false;

  //@ViewChild(MatSidenav) sidenav!: MatSidenav;
  constructor(private breakPointObserver: BreakpointObserver) {}

  ngAfterContentInit(): void {
    // this.breakPointObserver.observe(['(max-width: 800px)']).subscribe({
    //   next: (res) => {
    //       if(res.matches) {
    //         //this.sidenav.mode = 'push';
    //         //this.sidenav.close()
    //         this.isSmallScreen = true;

    //       } else {
    //         //this.sidenav.mode = 'side';
    //         //this.sidenav.open()
    //         this.isSmallScreen = false;
    //       }
    //   }
    // })

    this.breakPointObserver
    .observe(['(max-width: 800px)'])
    .subscribe((res) => this.isSmallScreen = res.matches);

    // this.breakPointObserver.observe(['(max-width: 800px)'])
    // .pipe(pluck('matches'))
    // .subscribe({
    //   next: (res: boolean) => this.isSmallScreen = res;
    // })
  }

  get sideNavMode() {
    return this.isSmallScreen ? 'over' : 'side';
  }
}
