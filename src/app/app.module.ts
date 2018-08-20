import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LockComponent } from './components/lock/lock.component';
import { NotepadComponent } from './components/notepad/notepad.component';
import { CalcComponent } from './components/calc/calc.component';
import { IdComponent } from './components/id/id.component';


// rutas
import { ROUTES } from './app.routes';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LockComponent,
    NotepadComponent,
    CalcComponent,
    IdComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
