import {Component, HostBinding, OnInit} from '@angular/core';
import {routingKeys} from "../../app-routing/routing-keys";
import {Router} from "@angular/router";
import {AuthService} from "../../service/neops-api/auth.service";
import {NEOPS_VERSION} from "../../version";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @HostBinding('class.bx--header') headerClass = true;
  routingKeys = routingKeys
  version = NEOPS_VERSION

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
  }

  navigateTo(e: Event, location: string) {
    e.stopPropagation();
    this.router.navigate([location]);
  }

  logout() {
    this.authService.logout()

    this.router.navigate([routingKeys.routeLogin]);
  }
}
