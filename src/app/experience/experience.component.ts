import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'resume-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {}
