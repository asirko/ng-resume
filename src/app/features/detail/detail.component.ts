import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'resume-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
