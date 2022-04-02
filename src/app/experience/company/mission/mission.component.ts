import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export interface Mission {
  name: string;
  duration: string;
  description: string;
  skills: string[];
  isImportant: boolean;
}

@Component({
  selector: 'resume-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MissionComponent {
  @Input() mission!: Mission;
}
