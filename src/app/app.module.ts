import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {IndexComponent} from './index/index.component';
import {AppRoutingModule} from './app.routes';
import {ContactComponent} from './contact/contact.component';
import {RabbitsModule} from './rabbits/rabbits.module';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, RabbitsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
