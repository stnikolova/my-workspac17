import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MyLib17Module } from '../../../my-lib-17/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [MyLib17Module],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}