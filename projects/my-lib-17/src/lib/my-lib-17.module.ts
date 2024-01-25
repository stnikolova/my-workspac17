import { NgModule } from '@angular/core';
import { MyLib17Component } from './my-lib-17.component';
import { TranslationComponentMessages, TestTranslationComponent, TestTranslationMessagesDirective } from './listbox';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    MyLib17Component,
    TestTranslationMessagesDirective,
    TestTranslationComponent,
    TranslationComponentMessages
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  exports: [
    MyLib17Component,
    TestTranslationMessagesDirective,
    TestTranslationComponent,
    TranslationComponentMessages
  ]
})
export class MyLib17Module { }
