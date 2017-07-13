// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1() {
  // Answer:
  let totalOfPrices = 0;
  let averagePrice = 0;
  for (let i = 0; i < data.length; i++) {
    totalOfPrices += data[i].price;
  }
  console.log(averagePrice = totalOfPrices / data.length);
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2() {
  // Answer:
  let items = [];
  for (let i = 0; i < data.length; i++) {

    if (data[i].price >= 14 &&
      data[i].price <= 18) {
      items.push(data[i].title);
    }
  }
  console.log(items);
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3() {
  // Answer:
  let gbp;

  for (let i = 0; i < data.length; i++) {
    if (data[i].currency_code === "GBP") {
      gbp = data[i].title + " $" + data[i].price + ".00";
    }
  }
  console.log(gbp);
}


// 4: Display a list of all items who are made of wood.
function question4() {
  // Answer:

let woodItems=[];

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].materials.length; j++){
    if(data[i].materials[j] == "wood") {

      woodItems.push(data[i].title);


    }

  }
} console.log(woodItems);
}

// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5() {
  // Answer:
  let itemsList = [];

    for (let i = 0; i < data.length; i++) {
        let items = [];
      if(data[i].materials.length >= 8) {

        items.push(data[i].title,data[i].materials.length, data[i].materials);
        itemsList.push(items);
      }

    } console.log(itemsList);
  }


 //return an array containing the string, number of the items, and the names of
  //the items


// 6: How many items were made by their sellers?
// Answer:
function question6() {
  // Answer:

let handMade = [];


  for (let i = 0; i < data.length; i++) {



    if (data[i].who_made === "i_did") {

      handMade.push(data[i].title);

    }
  } console.log(handMade.length);

}
