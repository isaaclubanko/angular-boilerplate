import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankProfilesComponent } from './bank-profiles/bank-profiles.component';
import { BankProfileDetailComponent } from './bank-profile-detail/bank-profile-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccountsComponent } from './accounts/accounts.component';
import { QuotesComponent } from './quotes/quotes.component';
import { AccountRequirementsComponent } from './account-requirements/account-requirements.component';
import { DynamicFormBuilderComponent } from './dynamic-form-builder/dynamic-form-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    BankProfilesComponent,
    BankProfileDetailComponent,
    AccountsComponent,
    QuotesComponent,
    AccountRequirementsComponent,
    DynamicFormBuilderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
