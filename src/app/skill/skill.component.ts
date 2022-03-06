import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'resume-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
