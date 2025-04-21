import { Component, OnInit } from '@angular/core';
import { SendNotificationService } from './send-notification.service';

@Component({
  selector: 'app-send-notifications',
  templateUrl: './send-notifications.component.html',
  styleUrls: ['./send-notifications.component.scss']
})
export class SendNotificationsComponent implements OnInit {

  recipient: string = '';
  phoneNumber: string = '';
  message: string = '';
  serviceName: string = 'DefaultService';  // Default is email
  statusMessage: string = '';

  constructor(private sendNotificationService: SendNotificationService) { }

  ngOnInit(): void {
  }

  // Function to send the notification
  sendNotification(): void {
    this.sendNotificationService.sendNotification(this.recipient, this.phoneNumber, this.message, this.serviceName)
      .subscribe(
        (response) => {
          console.log('Notification sent:', response);
          this.statusMessage = 'Notification sent successfully!';
        },
        (error) => {
          console.error('Error sending notification:', error);
          this.statusMessage = 'Failed to send notification.';
        }
      );
  }
}
