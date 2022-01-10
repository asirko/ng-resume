import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'resume-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
