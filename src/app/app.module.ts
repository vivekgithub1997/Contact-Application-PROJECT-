
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CreatecontactComponent } from './Mycomponent/createcontact/createcontact.component';
import { ContactlistComponent } from './Mycomponent/contactlist/contactlist.component';
import { ContacteditComponent } from './Mycomponent/contactedit/contactedit.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatecontactComponent,
    ContactlistComponent,
    ContacteditComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
