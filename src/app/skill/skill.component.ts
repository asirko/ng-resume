import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'resume-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillComponent {}
