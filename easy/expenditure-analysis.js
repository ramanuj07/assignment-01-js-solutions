/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let spendEstimates = {}; // initialise a spendEstimates object

  for (let i = 0; i < transactions.length; i++) {
    let it = transactions[i];
    if (spendEstimates[it.category]) {
      spendEstimates[it.category] += it.price;
    }
    else {
      spendEstimates[it.category] = it.price;
    }
  }
  // in the above part, we initialised a loop iterating through all the transactions, we kept variable it = transactions[i] as we will use it quite often. now comes the main logic part :
  // if the category mentioned in transactions array doesnot have a price corresponding to it, then make spendEstimates[it.category] = it.price --- mentioned in the else block of this loop. 
  // now when the category is assigned a price, whenever the category comes again and it goes to the if part again but now it has a price assigned to it, therefore it goes inside the if block, here we add up the previous category price to the new category price. This way we calculate the price of the categories present


  let keys = Object.keys(spendEstimates);
  // we used the Object class in javascript and found the keys in our spendEstimates object

  let outputArray = [];
  for (let i = 0; i < keys.length; i++) {
    let category = keys[i];
    let obj = {
      category: category,
      totalSpent: spendEstimates[category]
    }
    outputArray.push(obj);
  }
  // we initialised an output array and also iterated through the keys which in this case is the category mentioned in our transactions array.
  // we created an obj object here and mentioned the category as the keys we encounter. 
  // also mentioned the total spent as the total price we received out of each category.
  // then we pushed this object in our output array  

  return outputArray;
  // we returned the output array 
  // this was a medium level question so if you're unable to do it just understand the approach and then try later again after a weeks
}

module.exports = calculateTotalSpentByCategory;
