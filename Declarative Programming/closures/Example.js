/**
 * Add Bonus depend basicSalary
 * if(1000) ==> add 80;
 * if(2000) ==> add 90;
 * if(3000) ==> add 100;
 */

// First we have function to take basicSalary ==> add tax then add bonus depends on basicSalary

const salaryCalculator = (basicSalaray) => {
  const tax = basicSalaray * 0.2;
  return (bonus) => {
    return bonus + (basicSalaray - tax);
  };
};
// console.log(salaryCalculator(1000)(5));

basicSalarayList = [1000, 2000, 3000];
bounsList = [80, 90, 100];

const salaryCalculatorList = basicSalarayList.map((z) => {
  return salaryCalculator(z);
});

const base1000 = salaryCalculatorList[0](bounsList[0]);
console.log(base1000);
const base2000 = salaryCalculatorList[1](bounsList[1]);
console.log(base2000);
const base3000 = salaryCalculatorList[2](bounsList[2]);
console.log(base3000);
