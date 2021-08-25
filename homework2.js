//task1
const fromArabicToRome = (arabicNumber) => {
  let result = '';
  
  const decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  
  if(arabicNumber > 0, Number.isInteger(arabicNumber), arabicNumber <= 3999){
    for (let i = 0; i < decimals.length; i++) {
      const element = decimals[i];
      while (arabicNumber >= element) {
        result += roman[i];
        arabicNumber -= element;
      }
    }
  } else {
    console.log('Please enter valid value from 1 to 3999 including');
  }
  
  return result;

}

console.log(fromArabicToRome(4000));
 

//task2

const convertValue = (value, from, to) => {
  let fromToConditionaly = from + to;
  let convertedValue;

  switch (fromToConditionaly) {
    case 'cf':
      return (value * 9 / 5) + 32;
    case 'ck':
      return value + 273.15;      
    case 'fc':
      return (value - 32) * 5 / 9;
    case 'kc':
      return value - 273.15;         
    default:
      alert( "Нет таких значений" );
  }

}

console.log(convertValue(100, 'f', 'c'));