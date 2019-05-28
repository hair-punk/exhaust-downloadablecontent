// Helpers to parse data for react app

// Takes original price string and percentage off string, returns sale price string
const getSalePrice = (priceString, percentString) => {
  let newPriceString = '';

  newPriceString = parseFloat(priceString) - parseFloat(priceString) * (parseFloat(percentString)/100);
  newPriceString = newPriceString.toFixed(2);

  return newPriceString;
};

// Takes a string of space separated words and returns a string in pascal case
const toPascalCase = (camelCaseStr) => {
  let pascalCaseStr = '';

  pascalCaseArr = camelCaseStr.slice().split(' ');
  for (let i = 0; i < pascalCaseArr.length; i++) {
    pascalCaseArr[i] = pascalCaseArr[i][0].toUpperCase() + pascalCaseArr[i].slice(1);
  }

  return pascalCaseStr = pascalCaseArr.join(' ');
};

const getTotalCost = (arr) => {
  let total = 0;
  for (let item of arr) {
    total += parseFloat(item.price);
  }
  total = total.toFixed(2);
  return `$${total}`;
};

const getDLCCost = (str) => {
  if (parseFloat(str) === 0) {
    return 'Free'
  } else {
    return '$' + str;
  }
};

module.exports = { getSalePrice, toPascalCase, getTotalCost, getDLCCost };
