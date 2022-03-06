import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'resume-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationComponent {}
