import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../service/neops-api/auth.service";
import {Router} from "@angular/router";
import {routingKeys} from "../../../app-routing/routing-keys";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  helperText = "Helper Text";
  invalid = false;
  invalidText = "Input is invalid";
  warn = false;
  warnText = "Warn text";
  label = "Label text";
  disabled = false;
  placeholder = "Placeholder";
  autocomplete = true;

  username?: string;
  password?: string;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.authService.loggedIn.subscribe(loggedIn => {
      if(loggedIn){
        this.router.navigate([routingKeys.routeDefault])
      }
    })
  }

  login() {
    if(this.username && this.password) {
      this.authService.login(this.username || "", this.password || "")
    }
  }

  getHelp() {

  }
}
