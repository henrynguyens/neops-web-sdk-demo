import {Component} from '@angular/core';
import {AuthService} from "../service/neops-api/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "neops-web-sdk"
  constructor(private  authService: AuthService) {}
}
