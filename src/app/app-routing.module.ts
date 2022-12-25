import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactlistComponent } from './Mycomponent/contactlist/contactlist.component';
import { CreatecontactComponent } from './Mycomponent/createcontact/createcontact.component';


const routes: Routes = [
  {path:'contacts',component:ContactlistComponent},
  {path:'',redirectTo:'contacts',pathMatch:'full'},
  {path:'create-contact',component:CreatecontactComponent},
  {path:'edit/:id',component:ContactlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
