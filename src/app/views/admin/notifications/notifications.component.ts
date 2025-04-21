// notifications.component.ts

import { Component, OnInit } from '@angular/core';
import { NotificationService } from './notification.service';
import { Notification } from './notification.model';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  notifications: Notification[] = [];
  selectedType: string = '';

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationService.getNotifications().subscribe(
      (data: Notification[]) => {
        console.log('Notifications received:', data); // Check the received data here
        this.notifications = data;
      },
      (error) => {
        console.error('Error loading notifications', error);
      }
    );
  }

  // Filter notifications by type
  filteredNotifications() {
    if (!this.selectedType) {
      return this.notifications;
    }
    return this.notifications.filter(n => n.type === this.selectedType);
  }

  // Mark a notification as read
  markAsRead(notif: Notification) {
    notif.read = true;
  }

  // Delete a notification
  deleteNotification(id: number) {
    this.notifications = this.notifications.filter(n => n.id !== id);
  }

  // Mark all notifications as read
  markAllAsRead() {
    this.notifications.forEach(n => n.read = true);
  }
}
