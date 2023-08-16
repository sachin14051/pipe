import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pipe';
 public skill: string = ' i love javascript'
 public business = {
  name:"elon musk",
  networth : 123456789,
  companiesOwn : 40,
  dob : new Date()

   
 }
}
