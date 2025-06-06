import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { UserInputModule } from "./user-input/user-input.module";




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InvestmentResultsComponent,
  ],
    imports: [BrowserModule, UserInputModule],
    bootstrap: [AppComponent],
})

export class AppModule {
  // This class is the root module of the Angular application.
  // It imports necessary modules and declares components used in the application.
  // The @NgModule decorator is used to define the module's metadata.
}
