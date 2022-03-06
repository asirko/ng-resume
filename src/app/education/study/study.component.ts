import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'resume-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudyComponent {
  @Input() study!: { period: string; name: string; description: string };
}
