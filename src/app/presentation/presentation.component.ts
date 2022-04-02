import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'resume-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PresentationComponent {
  print() {
    window.print();
  }
}
