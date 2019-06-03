// Helpers to parse data for react app

// Takes original price string and percentage off string, returns sale price string
const getSalePrice = (priceString, percentString) => {
  let newPriceString = '';

  newPriceString = parseFloat(priceString) - parseFloat(priceString) * (parseFloat(percentString)/100);
  newPriceString = newPriceString.toFixed(2);

  return newPriceString;
};

// Takes a string of space separated words and returns a string in pascal case
const toPascalCase = (str) => {
  let pascalCaseStr = '';

  let pascalCaseArr = str.slice().split(' ');
  for (let i = 0; i < pascalCaseArr.length; i++) {
    if (pascalCaseArr[i][0] !== undefined) {
      pascalCaseArr[i] = pascalCaseArr[i][0].toUpperCase() + pascalCaseArr[i].slice(1);
    }
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

const formatDate = (isodate) => {
  const readableDate = isodate.substring(0,10).split('-');
  const monthNum = parseInt(readableDate[1]);
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
  return `${months[monthNum-1]} ${parseInt(readableDate[2])}, ${readableDate[0]}`;
};

module.exports = { getSalePrice, toPascalCase, getTotalCost, getDLCCost, formatDate };
