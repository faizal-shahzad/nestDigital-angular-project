import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DepartmentComponent } from './pages/department/department.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MobilityComponent } from './pages/mobility/mobility.component';
import { CardComponent } from './units/card/card.component';

export const routes: Routes = [
    {path: "",component:HomeComponent},
    {path: "department",component:CardComponent},
    {path: "contact",component:ContactComponent},
    {path: "mobility",component:MobilityComponent},
];
