import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'resume-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InterestComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
