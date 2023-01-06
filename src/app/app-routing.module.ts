import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankProfilesComponent } from './bank-profiles/bank-profiles.component';

const routes: Routes = [
  { path: 'profiles', component: BankProfilesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
