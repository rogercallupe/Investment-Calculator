// This file is part of the investment calculator application. Two ways to define the InvestmentInput type are provided below.
export interface InvestmentInput {
    initialInvestment: number;
    duration: number;
    expectedReturn: number;
    annualInvestment: number;
}
// This file defines the InvestmentInput type used in the investment calculator application.
// export type InvestmentInput = {
//     initialInvestment: number;
//     duration: number;
//     expectedReturn: number;
//     annualInvestment: number;
// };