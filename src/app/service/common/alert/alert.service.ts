import { Injectable } from '@angular/core';
import {NotificationService} from "carbon-components-angular";
import {NotificationAction} from "carbon-components-angular/notification/notification-content.interface";

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private notificationService: NotificationService) {

  }

  showNotification(title: string, message: string, type?: "info" | "warning" | "error" | "success", actions?: Array<NotificationAction>){
    this.notificationService.showNotification({
      type: type || "info",
      title: title,
      message: message,
      showClose: true,
      smart: true,
      actions: actions
    })
  }
}
