// src/app/views/admin/notifications/notification.model.ts

export interface Notification {
  id: number;
  subject: string;
  content: string;
  type: string;
  createdAt: Date;
  read: boolean;
}
