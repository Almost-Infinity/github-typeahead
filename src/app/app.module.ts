import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IconComponent } from './icon/icon.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    IconComponent,
    UserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
