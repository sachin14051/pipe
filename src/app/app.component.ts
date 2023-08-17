import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pipe';
  para :string ="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ipsam ea nisi ipsum. Eius, architecto a illo debitis consequatur alias qui voluptate corrupti asperiores. Doloribus "
 public skill: string = ' i love javascript'
 public business = {
  name:"elon musk",
  networth : 123456789,
  companiesOwn : 40,
  dob : new Date()
   
 }
 public skills :Array<string> = ["html","css","javascript","angular","typescript"];

}
