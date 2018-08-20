import {Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LockComponent } from './components/lock/lock.component';
import { CalcComponent } from './components/calc/calc.component';
import { IdComponent } from './components/id/id.component';
import { NotepadComponent } from './components/notepad/notepad.component';

export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'lock', component: LockComponent},
    {path: 'calc', component: CalcComponent},
    {path: 'id', component: IdComponent},
    {path: 'note', component: NotepadComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'lock'}

];
