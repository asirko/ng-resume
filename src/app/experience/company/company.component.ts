import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Mission } from './mission/mission.component';

interface Company {
  period: string;
  name: string;
  job: string;
  missions: Mission[];
}

@Component({
  selector: 'resume-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyComponent {
  @Input() company!: Company;
}
