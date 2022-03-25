import { Injectable } from '@angular/core';
import {Apollo} from "apollo-angular";
import {LoginGQL, RefreshTokenGQL} from "@zebbra/neops-angular-graphql-client";
import jwtDecode, { JwtPayload } from "jwt-decode";
import {AlertService} from "../common/alert/alert.service";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  username?: string = "None";
  loggedIn = new BehaviorSubject<boolean>(false);
  accessToken?: string;
  refreshToken?: string;

  constructor(private apollo: Apollo,
              private loginGQL: LoginGQL,
              private refreshTokenGQL: RefreshTokenGQL,
              private alertService: AlertService) {

    let token: JwtPayload
    try {
      token = jwtDecode<JwtPayload>(localStorage.getItem('token')||"")
    } catch (e) {
      token = {}
    }

    if((token.exp || 0) * 1000 > (new Date().getTime())){
      this.loggedIn.next(true)
    }

    this.refreshAccessToken()

  }

  async logout() {
    // some app logic
    this.loggedIn.next(false)
    this.username = undefined
    this.accessToken = undefined
    this.refreshToken = undefined
    localStorage.removeItem('token')
    localStorage.removeItem('refreshToken')
    // reset the store after that
    await this.apollo.client.resetStore();
  }

  login(username: string, password: string){
    this.loginGQL.mutate({username: username, password: password}).subscribe({
      next: value => {
        this.accessToken = value.data?.login?.accessToken || undefined
        this.refreshToken = value.data?.login?.refreshToken || undefined;
        if (this.accessToken){
          localStorage.setItem('token', this.accessToken)
          this.loggedIn.next(true)
        } else {
          this.loggedIn.next(false)
        }

        if (this.refreshToken){
          localStorage.setItem("refreshToken", this.refreshToken)
        }

        console.log(value.data)
        this.alertService.showNotification("Logged in", "Login successful", "success")
      },
      error: error => {
        this.alertService.showNotification("Login failed", "Please check credentials", "error")
        console.log(error)
      }})
  }

  refreshAccessToken() {
    this.refreshTokenGQL.mutate({refreshToken: this.refreshToken}).subscribe(value => {
      console.log(this.refreshToken)
      this.accessToken = value.data?.refreshToken?.accessToken || undefined
      console.log("Refreshed")
    })
  }

}
