import { Component, signal } from '@angular/core';

import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import type { InvestmentInput } from './investment-input.model';
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
resultsData = signal<{
      year: number;
      interest: number;
      valueEndOfYear: number;
      annualInvestment: number;
      totalInterest: number;
      totalAmountInvested: number;
    }[] | undefined>(undefined);

  // two ways to define the InvestmentInput type are provided below.
// resultsData?: {
//     year: number;
//     interest: number;
//     valueEndOfYear: number;
//     annualInvestment: number;
//     totalInterest: number;
//     totalAmountInvested: number;
//   }[];

  onCalculateInvestmentResults(data:InvestmentInput) {
  const { initialInvestment, duration, expectedReturn, annualInvestment } = data;
  const annualData = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const year = i + 1;
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    const totalInterest =
      investmentValue - annualInvestment * year - initialInvestment;
    annualData.push({
      year: year,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: annualInvestment,
      totalInterest: totalInterest,
      totalAmountInvested: initialInvestment + annualInvestment * year,
    });
  }

  this.resultsData.set(annualData);
// The above line uses the signal API to set the resultsData.
// with the // way
//   this.resultsData = annualData;
}
}
