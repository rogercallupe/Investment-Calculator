import { Injectable } from "@angular/core";

import type { InvestmentInput } from "./investment-input.model";

@Injectable ({providedIn: 'root'})
// The providedIn: 'root' option makes this service available application-wide.
export class InvestmentService {
    resultData?: {
      year: number;
      interest: number;
      valueEndOfYear: number;
      annualInvestment: number;
      totalInterest: number;
      totalAmountInvested: number;
    }[];
    
  calculateInvestmentResults(data:InvestmentInput) {
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

//  this.resultsData.set(annualData);
    this.resultData = annualData;
    // this.resultsData.set(annualData); // If you want to use a signal, uncomment this line and define resultsData as a signal.
    // If you want to use a regular property, just assign it directly like above.
}
}
