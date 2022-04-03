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

  infoClicked(event: MouseEvent) {
    if (this.isOpen) {
      return;
    }
    this.isOpen = true;

    const elem = event.currentTarget as HTMLElement;
    const parent = elem.parentElement!;
    const elemRect = elem.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();
    const pos = elemRect.left - parentRect.left + elemRect.width / 2;
    elem.style.setProperty('--pos', pos + 'px');

    const nextClickAnywhere$ = fromEvent(document, 'click').pipe(skip(1), first());
    nextClickAnywhere$.subscribe(() => {
      this.isOpen = false;
      this.cdr.markForCheck();
    });
  }
}
