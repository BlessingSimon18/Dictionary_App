import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { DefinitionComponent } from './pages/definition/definition.component';

const routes: Routes = [
  {path:'navbar', component:NavbarComponent},
  {path:'', component:HomeComponent},
  {path:'def', component:DefinitionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
