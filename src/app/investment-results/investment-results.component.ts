import { CurrencyPipe } from '@angular/common';
import { Component,  input } from '@angular/core';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
// two ways to define the InvestmentInput type are provided below.
 // result = input <{
    //   year: year,
    //   interest: interestEarnedInYear,
    //   valueEndOfYear: investmentValue,
    //   annualInvestment: annualInvestment,
    //   totalInterest: totalInterest,
    //   totalAmountInvested: initialInvestment + annualInvestment * year,
    // }[]>(); 
 // This component displays the results of the investment calculation.

//  @Input() results?: {
//       year: number;
//       interest: number;
//       valueEndOfYear: number;
//       annualInvestment: number;
//       totalInterest: number;
//       totalAmountInvested: number;
//     }[];// This is an array of objects representing the investment results for each year.
// if remove  @input() results?: then remove Input from '@angular/core';

results = input<{
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
}[]>()

}
