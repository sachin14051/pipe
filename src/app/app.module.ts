import { NgModule, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DataPipe } from './shared/pipe/data.pipe';
import { LovePipe } from './shared/pipe/love.pipe';



@NgModule({
  declarations: [
    AppComponent,
    DataPipe,
    LovePipe
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
