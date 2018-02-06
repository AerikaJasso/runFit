import { Routes } from '@angular/router';
import { MapComponent } from './app/map/map.component';
import { ListComponent } from './app/list/list.component';

export const appRoute: Routes = [
    { path: 'go', component: ListComponent},
    { path: 'go/:id', component: MapComponent},
    { path: '', redirectTo: '/go', pathMatch: 'full'}
];
