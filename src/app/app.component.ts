import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver} from '@angular/cdk/layout'
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-material-simple-admin-reference';

  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  constructor(private breakPointObserver: BreakpointObserver) {}

  ngAfterContentInit(): void {
    this.breakPointObserver.observe(['(max-width: 800px)']).subscribe({
      next: (res) => {
          if(res.matches) {
            //this.sidenav.mode = 'push';
            this.sidenav.close()

          } else {
            ///this.sidenav.mode = 'side';
            this.sidenav.open()
          }
      }
    })
  }
}
