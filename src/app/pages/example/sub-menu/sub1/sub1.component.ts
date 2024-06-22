import { Component } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-sub1',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './sub1.component.html',
  styleUrl: './sub1.component.scss'
})
export class Sub1Component {
  public currentEnv: string = environment.rootUrl;
}
