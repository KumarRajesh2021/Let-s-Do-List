import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LetsDoComponent } from './components/lets-do/lets-do.component';
import { LetDoItemComponent } from './components/let-do-item/let-do-item.component';
import { HeadersComponent } from './components/layout/headers/headers.component';
import { AddLetsDoComponent } from './components/add-lets-do/add-lets-do.component';
import { AboutComponent } from './components/pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    LetsDoComponent,
    LetDoItemComponent,
    HeadersComponent,
    AddLetsDoComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
