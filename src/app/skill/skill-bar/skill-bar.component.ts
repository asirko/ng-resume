import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { first, fromEvent, skip } from 'rxjs';

@Component({
  selector: 'resume-skill-bar',
  templateUrl: './skill-bar.component.html',
  styleUrls: ['./skill-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillBarComponent {
  @Input() skill!: { name: string; complement: string; rate: number };
  isOpen = false;

  constructor(private cdr: ChangeDetectorRef) {}

  infoClicked() {
    if (this.isOpen) {
      return;
    }
    const nextClickAnywhere$ = fromEvent(document, 'click').pipe(skip(1), first());
    this.isOpen = true;
    nextClickAnywhere$.subscribe(() => {
      this.isOpen = false;
      this.cdr.markForCheck();
    });
  }
}
