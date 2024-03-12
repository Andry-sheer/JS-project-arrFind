
//? ----- 1 ARRAY length ------------------------------------------->
let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
console.log(`${arr} - (сам масив)`);

//----------------------------------------------------------------------------------

const positiveNambers = arr.filter(function(num){
  return num > 0;
});
console.log(`\n${positiveNambers.length} = (кількість позитивних елементів);`);

//-------------------------------------------------------------------------

// const suma = positiveNambers.reduce((positiveNambers, positiveSum) => positiveNambers += positiveSum, 0);
// console.log(`\n${suma} = (сумма всіх позитивних елементів)`);

const suma = positiveNambers.reduce(function(positiveNambers, positiveSum){
  return positiveNambers += positiveSum;
});
console.log(`\n${suma} = (сумма позитивних елементів)`);

//-----------------------------------------------------------------------------

// let minElement = Math.min(...arr);
// console.log(`\n${minElement} = (мінімальний елемент масиву)`);

// const minElementIndex = arr.indexOf(Math.min(...arr));
// console.log(`${minElementIndex} = (індекс мінімального елементу)`);

const minElement = arr.forEach(function(element, index){
  element = Math.min(...arr);
  index = arr.indexOf(Math.min(...arr));
  console.log(`\n${element} = (мінімальний елемент масиву) \n${index} = (індекс мінімального елементу)`)
});

//-------------------------------------------------------------------------------

// let maxElement = Math.max(...arr);
// console.log(`\n${maxElement} = (максимальний елемент масиву)`);

// const maxElementIndex = arr.indexOf(Math.max(...arr));
// console.log(`${maxElementIndex} = (індекс максимального елементу)`);

arr.forEach(function(element, index){
  element = Math.max(...arr);
  index = arr.indexOf(Math.max(...arr));
  console.log(`\n${element} = (максимальний елемент масиву)\n${index} = (індекс максимального елементу)`)
});

//----------------------------------------------------------------------------

const negativeNambers = arr.filter(function(num){
  return num < 0;
});
console.log(`\n${negativeNambers.length} = (кількість негативних елементів)`)

//----------------------------------------------------------------------------

const positiveNoPair = positiveNambers.filter(function(element){
  return element % 2 !== 0;
})
console.log(`\n${positiveNoPair.length} = (кількість позитивних-непарних елементів)`);

//------------------------------------------------------------------------------------

const positivePair = positiveNambers.filter(function(element){
    return element % 2 == 0;
})
console.log(`\n${positivePair.length} = (кількість позитивних-парних елементів)`);

//-----------------------------------------------------------------------------------

const positivePairSum = positivePair.reduce(function(pSum, pCurrent){
  return pSum + pCurrent;
});
console.log(`\n${positivePairSum} = (сумма парних-позитивних елементів)`);

//---------------------------------------------------------------------------------

const positiveNoPairSum = positiveNoPair.reduce(function(pnSum, pnCurrent){
  return pnSum + pnCurrent;
});
console.log(`\n${positiveNoPairSum} = (сумма непарних-позитивних елементів)`);

//---------------------------------------------------------------------------------

const positiveNambersMultiply = positiveNambers.reduce(function(sum, sum2){
  // console.log(`\n${sum} * ${sum2} = ${sum * sum2}`);
  return sum * sum2; 
});
console.log(`\n${positiveNambersMultiply} = (добуток* позитивних елементів)`);

//-----------------------------------------------------------------------------------

const maxElementArr = Math.max(...arr);
arr = arr.map(elementArr => elementArr === maxElementArr ? elementArr : 0)
console.log(`\n${arr} = (найбільший елемент серед елементів масиву => ${maxElementArr}, остальні => 0)`);

//? <---------- DONE! ----------------------------------------------------------------