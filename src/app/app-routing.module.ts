import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankProfilesComponent } from './bank-profiles/bank-profiles.component';
import { AccountsComponent } from './accounts/accounts.component';
import { QuotesComponent } from './quotes/quotes.component';

const routes: Routes = [
  { path: 'profiles', component: BankProfilesComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: 'quotes', component: QuotesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
