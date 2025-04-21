import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendNotificationService {

  private apiUrl = 'http://localhost:8086/api/notification/send';  // Updated port number
  // The URL of your Spring Boot endpoint

  constructor(private http: HttpClient) { }

  // Method to send a notification to the back-end
  sendNotification(recipient: string, phoneNumber: string, message: string, serviceName: string): Observable<any> {
    // Preparing parameters for the request
    const params = new HttpParams()
      .set('recipient', recipient)
      .set('phoneNumber', phoneNumber)
      .set('message', message)
      .set('serviceName', serviceName);

    // Sending the POST request to the back-end
    return this.http.post<any>(this.apiUrl, params);
  }
}
