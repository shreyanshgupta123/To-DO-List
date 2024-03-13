import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tutorial-videos',
  templateUrl: './tutorial-videos.component.html',
  styleUrl: './tutorial-videos.component.scss'
})
export class TutorialVideosComponent {
  private breakpointObserver = inject(BreakpointObserver);

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Tutorial 1', cols: 1, rows: 1 },
          { title: 'Tutorial 2', cols: 1, rows: 1 },
          { title: 'Tutorial 3', cols: 1, rows: 1 },

        ];
      }

      return [
        { title: 'Tutorial 1', cols: 1, rows: 1 },
        { title: 'Tutorial 2', cols: 1, rows: 1 },
        { title: 'Tutorial 3', cols: 1, rows: 1 },
      ];
    })
  );
}
