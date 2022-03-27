import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'resume-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AchievementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
